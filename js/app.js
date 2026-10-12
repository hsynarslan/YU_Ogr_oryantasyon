import {
  STUDENT_TYPES, TERMS, PROFILE_FLAGS, CATEGORIES, STEPS, INFO_SECTIONS, QUIZ,
} from './data.js';
import {
  STATUS, createProfile, applicableSteps, stepStatuses, advance, undo, summary,
} from './engine.js';

const STORAGE_KEY = 'yu-oryantasyon-v1';
const app = document.getElementById('app');

// --- Kalıcı durum (yalnızca bu tarayıcıda) ---
function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch { /* depolama kapalı olabilir */ }
  return { profile: null, progress: {}, quiz: {} };
}

function save() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch { /* yok say */ }
}

const state = load();

// --- Yardımcılar ---
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[c]));

const typeLabel = (id) => STUDENT_TYPES.find((t) => t.id === id)?.label ?? id;
const termLabel = (id) => TERMS.find((t) => t.id === id)?.label ?? id;

function linksHtml(links) {
  if (!links || !links.length) return '';
  return `<div class="links">${links.map((l) =>
    `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join('')}</div>`;
}

// --- Görünümler ---
function renderProfile() {
  const p = state.profile || createProfile({});
  const flags = PROFILE_FLAGS.map((f) => `
    <label class="check" data-flag-types="${esc((f.types || []).join(','))}">
      <input type="checkbox" name="flag" value="${esc(f.id)}" ${p.flags[f.id] ? 'checked' : ''}>
      ${esc(f.label)}
    </label>`).join('');

  app.innerHTML = `
    <h2>${state.profile ? 'Profilim' : 'Hoş geldin!'}</h2>
    <p class="lead">Sana uygun adımları gösterebilmemiz için üniversiteye nasıl geldiğini seç.</p>
    <form id="profile-form" class="card">
      <fieldset>
        <legend>Giriş türün</legend>
        <div class="type-grid">
          ${STUDENT_TYPES.map((t) => `
            <label class="type-option card">
              <input type="radio" name="type" value="${esc(t.id)}" ${p.type === t.id ? 'checked' : ''} required>
              <strong>${esc(t.label)}</strong>
              <small>${esc(t.description)}</small>
            </label>`).join('')}
        </div>
      </fieldset>
      <fieldset>
        <legend>Dönem</legend>
        ${TERMS.map((t) => `
          <label class="check"><input type="radio" name="term" value="${esc(t.id)}" ${p.term === t.id ? 'checked' : ''}> ${esc(t.label)}</label>`).join('')}
      </fieldset>
      <fieldset>
        <legend>Durumun</legend>
        ${flags}
      </fieldset>
      <button class="btn" type="submit">Adımlarımı göster</button>
      ${state.profile ? '<button class="btn secondary" type="button" id="reset">İlerlememi sıfırla</button>' : ''}
    </form>`;

  const form = document.getElementById('profile-form');
  const syncFlags = () => {
    const type = form.querySelector('input[name="type"]:checked')?.value;
    form.querySelectorAll('[data-flag-types]').forEach((el) => {
      const types = el.dataset.flagTypes;
      el.hidden = Boolean(types) && !types.split(',').includes(type);
    });
  };
  form.addEventListener('change', syncFlags);
  syncFlags();

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const type = data.get('type');
    const flags = {};
    form.querySelectorAll('input[name="flag"]').forEach((el) => {
      if (el.checked && !el.closest('[data-flag-types]').hidden) flags[el.value] = true;
    });
    state.profile = createProfile({ type, term: data.get('term') || 'GUZ', flags });
    save();
    location.hash = '#adimlar';
  });

  document.getElementById('reset')?.addEventListener('click', () => {
    if (confirm('Tüm adım ilerlemen silinsin mi?')) {
      state.progress = {};
      save();
      location.hash = '#adimlar';
    }
  });
}

function renderSteps() {
  const profile = state.profile;
  if (!profile) { location.hash = '#profil'; return; }

  const list = applicableSteps(STEPS, profile);
  const statuses = stepStatuses(STEPS, profile, state.progress);
  const sum = summary(STEPS, profile, state.progress);
  const pct = sum.total ? Math.round((sum.done / sum.total) * 100) : 0;
  let n = 0;

  const groups = CATEGORIES.map((c) => {
    const items = list.filter((s) => s.category === c.id);
    if (!items.length) return '';
    return `
      <section class="category">
        <h2>${esc(c.label)}</h2>
        ${items.map((s) => stepHtml(s, statuses[s.id], ++n)).join('')}
      </section>`;
  }).join('');

  app.innerHTML = `
    <div class="card">
      <h2>${esc(typeLabel(profile.type))} · ${esc(termLabel(profile.term))} dönemi</h2>
      <div class="progress" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100"><span style="width:${pct}%"></span></div>
      <p class="lead" style="margin:0">${sum.done}/${sum.total} adım tamamlandı · zorunlu adımlar: ${sum.requiredDone}/${sum.required}
        ${sum.complete ? ' · <strong>Tüm zorunlu adımları tamamladın! 🎉</strong>' : ''}</p>
    </div>
    ${groups}`;
}

function stepHtml(step, status, n) {
  const badges = [
    step.required ? '<span class="badge required">Zorunlu</span>' : '<span class="badge">İsteğe bağlı</span>',
    step.verified ? '' : '<span class="badge unverified">Teyit edilmeli</span>',
    status === STATUS.DONE ? '<span class="badge done">Tamamlandı</span>' : '',
    status === STATUS.WAITING ? '<span class="badge waiting">Onay bekliyor</span>' : '',
  ].join('');

  let actions = '';
  if (status === STATUS.AVAILABLE) {
    actions = `<button class="btn" data-advance="${esc(step.id)}">${step.approval ? 'Başvurdum, onay bekliyorum' : 'Tamamladım'}</button>`;
  } else if (status === STATUS.WAITING) {
    actions = `<button class="btn" data-advance="${esc(step.id)}">Onay geldi</button>
      <button class="btn secondary" data-undo="${esc(step.id)}">Geri al</button>`;
  } else if (status === STATUS.DONE) {
    actions = `<button class="btn secondary" data-undo="${esc(step.id)}">Geri al</button>`;
  } else {
    actions = '<span class="badge">Önceki adımları tamamla</span>';
  }

  return `
    <article class="card step ${status}" id="step-${esc(step.id)}">
      <span class="dot ${status}" aria-hidden="true">${status === STATUS.DONE ? '✓' : n}</span>
      <div class="step-body">
        <h3>${esc(step.title)}</h3>
        <div class="step-meta">${badges}</div>
        <p>${esc(step.description)}</p>
        ${linksHtml(step.links)}
        <div class="actions">${actions}</div>
      </div>
    </article>`;
}

function renderInfo() {
  app.innerHTML = `
    <h2>Yaşar Üniversitesi'ni tanı</h2>
    <p class="lead">Kampüs, sistemler ve sana destek olacak birimler hakkında bilmen gerekenler.</p>
    ${INFO_SECTIONS.map((s) => `
      <section class="card">
        <h3>${esc(s.title)}</h3>
        <p>${esc(s.body)}</p>
        ${linksHtml(s.links)}
      </section>`).join('')}`;
}

function renderQuiz() {
  const answers = state.quiz || {};
  const answered = Object.keys(answers).length;
  const correct = QUIZ.filter((q, i) => answers[i] === q.answer).length;

  app.innerHTML = `
    <h2>Yaşar'ı ne kadar tanıyorsun?</h2>
    <p class="lead">${answered === QUIZ.length
      ? `${QUIZ.length} sorudan ${correct} doğru.`
      : 'Oryantasyonda öğrendiklerini sına.'}</p>
    ${QUIZ.map((q, i) => {
      const given = answers[i];
      const feedback = given === undefined ? '' : given === q.answer
        ? '<p class="result-ok">Doğru!</p>'
        : `<p class="result-bad">Doğru cevap: ${esc(q.options[q.answer])}</p>`;
      return `
        <section class="card">
          <h3>${i + 1}. ${esc(q.q)}</h3>
          ${q.options.map((o, j) => `
            <label class="quiz-option">
              <input type="radio" name="q${i}" data-q="${i}" value="${j}" ${given === j ? 'checked' : ''} ${given !== undefined ? 'disabled' : ''}>
              ${esc(o)}
            </label>`).join('')}
          ${feedback}
        </section>`;
    }).join('')}
    ${answered ? '<button class="btn secondary" id="quiz-reset">Yeniden başla</button>' : ''}`;
}

// --- Olaylar ---
app.addEventListener('click', (e) => {
  const adv = e.target.closest('[data-advance]');
  const und = e.target.closest('[data-undo]');
  if (adv) {
    state.progress = advance(STEPS, state.profile, state.progress, adv.dataset.advance);
    save();
    render();
  } else if (und) {
    state.progress = undo(STEPS, state.profile, state.progress, und.dataset.undo);
    save();
    render();
  } else if (e.target.id === 'quiz-reset') {
    state.quiz = {};
    save();
    render();
  }
});

app.addEventListener('change', (e) => {
  const q = e.target.dataset?.q;
  if (q === undefined) return;
  state.quiz = { ...(state.quiz || {}), [q]: Number(e.target.value) };
  save();
  render();
});

const ROUTES = { adimlar: renderSteps, tani: renderInfo, quiz: renderQuiz, profil: renderProfile };

function render() {
  const route = location.hash.slice(1) || (state.profile ? 'adimlar' : 'profil');
  (ROUTES[route] || renderSteps)();
  document.querySelectorAll('[data-route]').forEach((a) => {
    if (a.dataset.route === route) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
}

window.addEventListener('hashchange', () => { render(); app.focus(); });
render();
