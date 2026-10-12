import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { loadPhysicsRepository, validatePhysicsContent } from '../../../tools/physics-support/physics-content.mjs';
import { loadStep3, itemHash } from '../../../tools/physics-support/frontier-snapshot.mjs';
const root = process.cwd(), run = 'physics-cm-qm-gr-79-2026-10-11';
const dir = `research/${run}-gr-postulate-role-repair`;
const ids = ['post-gr-einstein-field-law', 'post-gr-classical-gravitational-action'];
const suppliers = ['post-gr-spacetime-and-classical-domain', 'post-gr-field-and-matter-assumptions'];
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
const json = path => JSON.parse(readFileSync(path, 'utf8'));
const save = (file, value) => writeFileSync(`${dir}/${file}`, JSON.stringify(value, null, 2) + '\n');
const snapshot = path => ({ path, raw_sha256: sha(readFileSync(path)) });
mkdirSync(`${dir}/before/items`, { recursive: true });
mkdirSync(`${dir}/proposed/items`, { recursive: true });
const repo = loadPhysicsRepository(root, null, new Set());
const selection = new Set(ids);
const before = validatePhysicsContent({ ...repo, pages: [], selectedItems: selection, selectedPages: new Set() });
const proposed = repo.items.map(item => selection.has(item.id) ? {
  ...item, dependency_roles: { ...item.dependency_roles, ...Object.fromEntries(suppliers.map(id => [id, 'formulation-prerequisite'])) }
} : item);
const after = validatePhysicsContent({ ...repo, items: proposed, pages: [], selectedItems: selection, selectedPages: new Set() });
save('scoped-validator.json', { at: new Date().toISOString(), selection: ids, implementation: snapshot('tools/physics-support/physics-content.mjs'), before, proposed_after: after, production_edited: false });
for (const id of [...ids, ...suppliers]) {
  const raw = readFileSync(`items/${id}.md`, 'utf8');
  writeFileSync(`${dir}/before/items/${id}.md`, raw);
  if (selection.has(id)) {
    let changed = raw;
    for (const supplier of suppliers) {
      const old = `  ${supplier}: physical-assumption`;
      if (changed.split(old).length !== 2) throw Error(`Unexpected role carrier: ${id}`);
      changed = changed.replace(old, `  ${supplier}: formulation-prerequisite`);
    }
    writeFileSync(`${dir}/proposed/items/${id}.md`, changed);
  }
}
const manifestPath = `research/${run}-batch-69.pages.json`;
const manifest = json(manifestPath), manifestProposed = structuredClone(manifest);
const changes = [];
for (const page of manifestProposed) for (const item of page.items ?? []) if (selection.has(item.id)) {
  for (const supplier of suppliers) {
    if (item.dependency_roles?.[supplier] !== 'physical-assumption') throw Error(`Unexpected role manifest: ${item.id}`);
    item.dependency_roles[supplier] = 'formulation-prerequisite';
    changes.push({ page: page.id, item: item.id, field: `dependency_roles.${supplier}`, old: 'physical-assumption', value: 'formulation-prerequisite' });
  }
}
writeFileSync(`${dir}/before/batch-69.pages.json`, readFileSync(manifestPath));
save('proposed/batch-69.pages.json', manifestProposed);
save('literal-manifest-changes.json', changes);
const live = loadStep3(root, run);
const allDeps = i => [...(i.deps ?? []), ...(i.justified_by ?? []), ...(i.forward_refs ?? [])];
const aliases = new Map(repo.items.flatMap(i => (i.aliases ?? []).map(a => [a, i.id])));
const resolve = id => deps.has(id) ? id : (aliases.get(id) ?? id);
const deps = new Map(repo.items.map(i => [i.id, new Set(allDeps(i))]));
for (const [id, row] of live.items) for (const dep of allDeps(row.item)) {
  if (!deps.has(id)) deps.set(id, new Set()); deps.get(id).add(dep);
}
for (const [id] of live.items) {
  const path = `research/${run}-step1-${id}.json`;
  if (existsSync(path)) for (const dep of json(path).dependencies ?? []) deps.get(id).add(dep);
}
const affected = new Set(ids);
let changed = true;
while (changed) { changed = false; for (const [id, ds] of deps) if (!affected.has(id) && [...ds].some(d => affected.has(resolve(d)))) { affected.add(id); changed = true; } }
const bindings = [];
for (const id of [...affected].sort()) {
  const recordPath = `research/${run}-step1-${id}.json`, row = existsSync(recordPath) ? json(recordPath) : null;
  bindings.push({ id, batch: live.items.get(id)?.page.batch ?? null, carrier: existsSync(`items/${id}.md`) ? snapshot(`items/${id}.md`) : null, readiness: row ? { ...snapshot(recordPath), row, current_native_input_sha256: itemHash(live, id, row.dependencies) } : null });
}
const statePath = `.physics-autopilot/${run}/state.json`, state = json(statePath);
save('bindings.json', { at: new Date().toISOString(), round: 1, maximum_review_repair_rounds: 2, native_state: snapshot(statePath), paused: state.paused, batch69: state.dispatches['1-scaffold:batch-69'], manifests_and_evidence: [manifestPath, `research/${run}-batch-69.coverage.json`, `research/${run}-batch-69.cross-batch-dependencies.json`, `research/${run}-batch-69.proof-contracts.json`, `research/${run}-batch-73.notes.md`].map(snapshot), contracts: Object.fromEntries(ids.map(id => [id, json(`research/${run}-batch-69.proof-contracts.json`).contracts[id]])), supplier_carriers: suppliers.map(id => snapshot(`items/${id}.md`)), affected_readiness_descendants: bindings });
console.log(JSON.stringify({ before_errors: before.length, proposed_after_errors: after.length, affected_count: affected.size, drained69: !!state.dispatches['1-scaffold:batch-69']?.endedAt, dir }));
