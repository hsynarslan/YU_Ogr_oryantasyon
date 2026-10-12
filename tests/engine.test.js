import { test } from 'node:test';
import assert from 'node:assert/strict';
import { STEPS, STUDENT_TYPES, CATEGORIES, QUIZ } from '../js/data.js';
import {
  STATUS, createProfile, applicableSteps, stepStatuses, advance, undo, summary,
} from '../js/engine.js';

const ids = (steps) => steps.map((s) => s.id);

// Bir profil için mümkün olan her adımı sırayla ilerletir.
function completeAll(profile) {
  let progress = {};
  for (let i = 0; i < 200; i++) {
    const statuses = stepStatuses(STEPS, profile, progress);
    const next = Object.keys(statuses).find((id) => statuses[id] !== STATUS.DONE && statuses[id] !== STATUS.LOCKED);
    if (!next) break;
    progress = advance(STEPS, profile, progress, next);
  }
  return progress;
}

test('adım verisi tutarlı', () => {
  const stepIds = new Set();
  const typeIds = STUDENT_TYPES.map((t) => t.id);
  const catIds = CATEGORIES.map((c) => c.id);
  for (const s of STEPS) {
    assert.ok(!stepIds.has(s.id), `tekrar eden id: ${s.id}`);
    stepIds.add(s.id);
    assert.ok(catIds.includes(s.category), `bilinmeyen kategori: ${s.id}`);
    assert.ok(s.types.length && s.types.every((t) => typeIds.includes(t)), `bilinmeyen tip: ${s.id}`);
    for (const l of s.links) assert.match(l.url, /^https:\/\//, `https olmayan link: ${s.id}`);
  }
  for (const s of STEPS) {
    for (const r of s.requires || []) assert.ok(stepIds.has(r), `${s.id} bilinmeyen önkoşul: ${r}`);
  }
  for (const q of QUIZ) assert.ok(q.answer >= 0 && q.answer < q.options.length);
});

test('her öğrenci tipi tüm zorunlu adımları tamamlayabilir', () => {
  const flagSets = [{}, { tamBurslu: true }, { hazirlik: true }, { edevletYok: true, geciciKayit: true }, { yurtDisindan: true }];
  for (const t of STUDENT_TYPES) {
    for (const flags of flagSets) {
      const profile = createProfile({ type: t.id, flags });
      const progress = completeAll(profile);
      const sum = summary(STEPS, profile, progress);
      assert.equal(sum.done, sum.total, `${t.id} ${JSON.stringify(flags)}: ${sum.done}/${sum.total}`);
      assert.ok(sum.complete);
    }
  }
});

test('YKS akışı sırayla açılır', () => {
  const profile = createProfile({ type: 'YKS' });
  let progress = {};
  let st = stepStatuses(STEPS, profile, progress);
  assert.equal(st['yks-bilgi-formu'], STATUS.AVAILABLE);
  assert.equal(st['yks-odeme'], STATUS.LOCKED);
  assert.equal(st['yasar-id'], STATUS.LOCKED);

  // Kilitli adım ilerletilemez
  assert.deepEqual(advance(STEPS, profile, progress, 'yks-odeme'), progress);

  progress = advance(STEPS, profile, progress, 'yks-bilgi-formu');
  st = stepStatuses(STEPS, profile, progress);
  assert.equal(st['yks-odeme'], STATUS.AVAILABLE);
});

test('tam burslu öğrenci ödeme adımını görmez ve akış kilitlenmez', () => {
  const profile = createProfile({ type: 'YKS', flags: { tamBurslu: true } });
  assert.ok(!ids(applicableSteps(STEPS, profile)).includes('yks-odeme'));
  const progress = advance(STEPS, profile, {}, 'yks-bilgi-formu');
  assert.equal(stepStatuses(STEPS, profile, progress)['yks-edevlet'], STATUS.AVAILABLE);
});

test('e-Devlet yapamayan belgeli kayıt adımını görür', () => {
  const normal = ids(applicableSteps(STEPS, createProfile({ type: 'YKS' })));
  const belgeli = ids(applicableSteps(STEPS, createProfile({ type: 'YKS', flags: { edevletYok: true } })));
  assert.ok(normal.includes('yks-edevlet') && !normal.includes('yks-belgeli-kayit'));
  assert.ok(belgeli.includes('yks-belgeli-kayit') && !belgeli.includes('yks-edevlet'));
});

test('hazırlık öğrencisi düzey sınavını görür, ders kaydını görmez', () => {
  const steps = ids(applicableSteps(STEPS, createProfile({ type: 'YKS', flags: { hazirlik: true } })));
  assert.ok(steps.includes('duzey'));
  assert.ok(!steps.includes('ders-kaydi'));
});

test('tiplere özel adımlar yalnızca o tipe görünür', () => {
  const yg = ids(applicableSteps(STEPS, createProfile({ type: 'YG' })));
  const lu = ids(applicableSteps(STEPS, createProfile({ type: 'LU' })));
  const yu = ids(applicableSteps(STEPS, createProfile({ type: 'YU' })));
  assert.ok(yg.includes('yg-intibak') && !yg.includes('yks-edevlet'));
  assert.ok(lu.includes('lu-belgeler') && !lu.includes('flat'));
  assert.ok(yu.includes('yu-ikamet'));
  assert.ok(!ids(applicableSteps(STEPS, createProfile({ type: 'YG' }))).includes('yg-yurtdisi-belgeler'));
  assert.ok(ids(applicableSteps(STEPS, createProfile({ type: 'YG', flags: { yurtDisindan: true } }))).includes('yg-yurtdisi-belgeler'));
});

test('onay gerektiren adım önce "onay bekliyor" olur ve bağımlıları kilitli kalır', () => {
  const profile = createProfile({ type: 'LU' });
  let progress = advance(STEPS, profile, {}, 'lu-belgeler');
  progress = advance(STEPS, profile, progress, 'lu-numara');
  let st = stepStatuses(STEPS, profile, progress);
  assert.equal(st['lu-numara'], STATUS.WAITING);
  assert.equal(st['lu-bilgi-formu'], STATUS.LOCKED);

  progress = advance(STEPS, profile, progress, 'lu-numara');
  st = stepStatuses(STEPS, profile, progress);
  assert.equal(st['lu-numara'], STATUS.DONE);
  assert.equal(st['lu-bilgi-formu'], STATUS.AVAILABLE);
});

test('geri alma bağımlı adımları da geri alır', () => {
  const profile = createProfile({ type: 'YKS' });
  let progress = {};
  for (const id of ['yks-bilgi-formu', 'yks-odeme', 'yks-edevlet']) {
    progress = advance(STEPS, profile, progress, id);
  }
  progress = undo(STEPS, profile, progress, 'yks-odeme');
  assert.deepEqual(Object.keys(progress), ['yks-bilgi-formu']);
});
