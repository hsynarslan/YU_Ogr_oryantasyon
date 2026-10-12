// Adım akışı mantığı. DOM'a bağımlı değildir; testler doğrudan bu modülü kullanır.

export const STATUS = {
  LOCKED: 'locked',
  AVAILABLE: 'available',
  WAITING: 'waiting', // kurum onayı bekleniyor
  DONE: 'done',
};

export function createProfile({ type, term = 'GUZ', flags = {} } = {}) {
  return { type, term, flags: { ...flags } };
}

// Profile uygulanan adımlar, veri dosyasındaki sırayla.
export function applicableSteps(steps, profile) {
  if (!profile || !profile.type) return [];
  return steps.filter(
    (s) => s.types.includes(profile.type) && (!s.showIf || s.showIf(profile)),
  );
}

// progress: { [stepId]: 'done' | 'waiting' }
export function stepStatuses(steps, profile, progress = {}) {
  const list = applicableSteps(steps, profile);
  const ids = new Set(list.map((s) => s.id));
  const result = {};
  for (const step of list) {
    const state = progress[step.id];
    if (state === STATUS.DONE) {
      result[step.id] = STATUS.DONE;
      continue;
    }
    const prereqs = (step.requires || []).filter((id) => ids.has(id));
    const blocked = prereqs.some((id) => progress[id] !== STATUS.DONE);
    if (blocked) result[step.id] = STATUS.LOCKED;
    else if (state === STATUS.WAITING) result[step.id] = STATUS.WAITING;
    else result[step.id] = STATUS.AVAILABLE;
  }
  return result;
}

// Bir adımı tamamlanmış (veya onay adımlarında "onay bekliyor") işaretler.
// Kilitli adımlar değiştirilmez.
export function advance(steps, profile, progress, stepId) {
  const statuses = stepStatuses(steps, profile, progress);
  const status = statuses[stepId];
  const step = steps.find((s) => s.id === stepId);
  if (!step || status === undefined || status === STATUS.LOCKED || status === STATUS.DONE) {
    return progress;
  }
  if (step.approval && status === STATUS.AVAILABLE) {
    return { ...progress, [stepId]: STATUS.WAITING };
  }
  return { ...progress, [stepId]: STATUS.DONE };
}

// Bir adımı geri alır; ona bağlı olan tamamlanmış adımlar da geri alınır.
export function undo(steps, profile, progress, stepId) {
  const list = applicableSteps(steps, profile);
  const next = { ...progress };
  const queue = [stepId];
  while (queue.length) {
    const id = queue.shift();
    if (!(id in next)) continue;
    delete next[id];
    for (const s of list) {
      if ((s.requires || []).includes(id) && s.id in next) queue.push(s.id);
    }
  }
  return next;
}

export function summary(steps, profile, progress) {
  const list = applicableSteps(steps, profile);
  const statuses = stepStatuses(steps, profile, progress);
  const required = list.filter((s) => s.required);
  const done = list.filter((s) => statuses[s.id] === STATUS.DONE);
  const requiredDone = required.filter((s) => statuses[s.id] === STATUS.DONE);
  return {
    total: list.length,
    done: done.length,
    required: required.length,
    requiredDone: requiredDone.length,
    complete: required.length > 0 && requiredDone.length === required.length,
  };
}
