import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { parseFrontmatter } from '../../tools/physics-support/content-policy-lib.mjs';
import { loadStep3, itemHash, itemInputPaths } from '../../tools/physics-support/frontier-snapshot.mjs';
import { recordStep1, step1Decision } from '../../tools/physics-support/step1-decisions.mjs';
import { runPages, dependencyLevels } from '../../tools/physics-support/item-dependency-levels.mjs';

const run = 'physics-cm-qm-gr-79-2026-10-11';
const evidence = `research/${run}-cosmology-scaling-repair`;
if (existsSync(`${evidence}/before-final-readiness.json`)) throw Error('One-time readiness finalization already executed; preserve the genuine before records and use a new guarded evidence route for later work');
const digest = bytes => createHash('sha256').update(bytes).digest('hex');
const rawHash = path => digest(readFileSync(path));
const manifestPath = `research/${run}-batch-73.pages.json`;
const manifest = JSON.parse(readFileSync(manifestPath));
const own = new Set(manifest.flatMap(p => p.items.map(i => i.id)));
const roots = ['lem-gr-constant-rescaling-preserves-levi-civita-and-curvature', 'def-gr-flrw-spatial-model'];
const sourceReceipt = JSON.parse(readFileSync(`${evidence}/source-registration-applied.json`));
if (rawHash('research/plan-spec.json') !== sourceReceipt.after_sha256) throw Error('Plan context changed after guarded registration; recheck required');
const statePath = `.physics-autopilot/${run}/state.json`;
const state = JSON.parse(readFileSync(statePath));
if (state.paused || !state.dispatches['1-scaffold:batch-73'].endedAt) throw Error('Batch 73 is not drained in the unpaused run');
const active = new Set(Object.values(state.dispatches).filter(d => !d.endedAt).flatMap(d => d.covers));
if (active.has('73')) throw Error('Batch 73 has an active native writer');
const fm = text => parseFrontmatter(text.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '');
const graph = new Map(), aliases = new Map();
for (const name of readdirSync('items').filter(n => n.endsWith('.md'))) {
  const id = name.slice(0, -3), metadata = fm(readFileSync(`items/${name}`, 'utf8'));
  graph.set(id, new Set(metadata.deps ?? []));
  for (const alias of metadata.aliases ?? []) aliases.set(alias, id);
}
for (const id of own) {
  const path = `${evidence}/before/items/${id}.md`;
  if (existsSync(path)) for (const dep of fm(readFileSync(path, 'utf8')).deps ?? []) graph.get(id).add(dep);
}
const resolve = id => graph.has(id) ? id : aliases.get(id) ?? id;
const affected = new Set(roots);
for (;;) {
  const next = [...graph].filter(([id, deps]) => !affected.has(id) && [...deps].some(d => affected.has(resolve(d)))).map(([id]) => id);
  if (!next.length) break;
  next.forEach(id => affected.add(id));
}
const external = [...affected].filter(id => !own.has(id));
if (external.length) throw Error(`External affected consumer requires root handoff: ${external.join(', ')}`);
const levels = dependencyLevels(runPages(process.cwd(), run));
const ordered = [...own].sort((a, b) => levels.levels.get(a) - levels.levels.get(b) || a.localeCompare(b));
const errors = levels.errors.filter(e => ordered.some(id => e.startsWith(`${id}:`)) || e.includes('gr-homogeneous-cosmology'));
if (errors.length) throw Error(errors.join('\n'));
const snapshot = loadStep3(process.cwd(), run);
const inputs = new Set(ordered.flatMap(id => itemInputPaths(snapshot, id, snapshot.items.get(id).item.deps)));
const overlap = [...inputs].filter(path => [...active].some(batch => path.endsWith(`${run}-batch-${batch}.pages.json`)));
if (overlap.length) throw Error(`Active input suppliers require hold: ${overlap.join(', ')}`);
const inputHashes = Object.fromEntries([...inputs].sort().map(path => [path.replace(`${process.cwd()}/`, ''), rawHash(path)]));
const before = JSON.parse(readFileSync(`${evidence}/before-index.json`));
const changed = before.filter(row => existsSync(row.file) && row.sha256 !== rawHash(row.file)).map(row => row.file);
const readyBefore = ordered.map(id => ({ id, previous: JSON.parse(readFileSync(`research/${run}-step1-${id}.json`)) }));
writeFileSync(`${evidence}/before-final-readiness.json`, JSON.stringify(readyBefore, null, 2) + '\n');
for (const id of ordered) {
  for (const [path, hash] of Object.entries(inputHashes)) if (rawHash(path) !== hash) throw Error(`Input changed during readiness refresh: ${path}`);
  recordStep1(process.cwd(), { run, item: id, decision: 'ready', owner: true,
    dependencies: snapshot.items.get(id).item.deps,
    reason: `Batch 73 first focused owner repair cycle complete; corrected rescaling, explicit published standard-model suppliers, n-integral parametrization and exact density scale; this item and its union old/current downstream supplier interfaces checked in dependency order. Current proof inputs have no active native writer; local checks and exact hashes recorded in ${evidence}/report.json. Native independent scope/review stages remain required.` });
}
const current = loadStep3(process.cwd(), run);
const records = ordered.map(id => {
  const decision = step1Decision(current, id);
  if (!decision.closed) throw Error(`Readiness not current: ${id}: ${decision.reason}`);
  return { id, dependency_level: levels.levels.get(id), carrier_raw_sha256: rawHash(`items/${id}.md`), native_input_sha256: itemHash(current, id, current.items.get(id).item.deps), readiness_file_sha256: rawHash(`research/${run}-step1-${id}.json`) };
});
const report = { version: 1, run, batch: 73, reviewer: '/root/physics_cosmology_scaling_repair',
  review_round: 1, repair_round: 1, maximum_repair_rounds: 2,
  disposition: 'Focused local repair and required consumer checks complete; current native owner readiness refreshed. This is not independent acceptance or an audit.',
  roots, union_old_current_affected: [...affected].sort(), external_affected_consumers: external,
  active_native_batches_observed: [...active], active_input_supplier_overlap: overlap,
  source_registration_receipt: `${evidence}/source-registration-applied.json`,
  plan_sha256: rawHash('research/plan-spec.json'), manifest_sha256: rawHash(manifestPath),
  coverage_sha256: rawHash(`research/${run}-batch-73.coverage.json`), contracts_sha256: rawHash(`research/${run}-batch-73.proof-contracts.json`),
  changed_owned_files: changed, records, input_hashes: inputHashes,
  unresolved_local_holds: [], native_independent_reviews_still_required: true,
  gates_attempted: false, controls_written: false, imports_or_originals_modified: false,
  recorded_at: new Date().toISOString() };
writeFileSync(`${evidence}/report.json`, JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify({ items: records.length, affected: affected.size, external, overlap, manifest_sha256: report.manifest_sha256, report_sha256: rawHash(`${evidence}/report.json`) }, null, 2));
