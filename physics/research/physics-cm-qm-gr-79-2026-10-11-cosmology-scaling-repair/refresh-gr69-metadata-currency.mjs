import { readFileSync, writeFileSync, mkdirSync, existsSync, copyFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { isDeepStrictEqual } from 'node:util';
import { parseFrontmatter } from '../../tools/physics-support/content-policy-lib.mjs';
import { loadStep3, itemHash, itemInputPaths } from '../../tools/physics-support/frontier-snapshot.mjs';
import { recordStep1, step1Decision } from '../../tools/physics-support/step1-decisions.mjs';

const run = 'physics-cm-qm-gr-79-2026-10-11';
const evidence = `research/${run}-cosmology-scaling-repair`;
const upstream = `research/${run}-gr-postulate-role-repair`;
const receiptPath = `${evidence}/metadata-currency-refresh-receipt.json`;
const beforeDir = `${evidence}/before-gr69-metadata-currency`;
if (existsSync(receiptPath) || existsSync(beforeDir)) throw Error('Immutable refresh evidence already exists; do not rerun');
const hash = path => createHash('sha256').update(readFileSync(path)).digest('hex');
const read = path => JSON.parse(readFileSync(path));
const reportPath = `${evidence}/report.json`, reportHash = hash(reportPath);
if (reportHash !== 'dba0347ae73f0fcb664dbca5b32f37687fdb158ccab068b5b9cf47dcdd6a2bc0') throw Error('Round-1 evidence changed');
const report = read(reportPath), integrationPath = `${upstream}/integration-receipt.json`;
const integration = read(integrationPath), integrationHash = hash(integrationPath);
const six = integration.untouched_consumers.filter(row => row.batch === '73');
if (six.length !== 6 || !integration.metadata_only || integration.role_values_changed !== 8) throw Error('Unexpected integration scope');
const sourceChanges = Object.entries(report.input_hashes).filter(([path, old]) => hash(path) !== old);
if (sourceChanges.length !== 3 || sourceChanges.some(([path, old]) => !integration.production_files_written.some(f => f.path === path && f.before_raw_sha256 === old && f.after_raw_sha256 === hash(path)))) throw Error('Semantic or additional transitive input drift');
const roles = ['post-gr-spacetime-and-classical-domain', 'post-gr-field-and-matter-assumptions'];
const suppliers = ['post-gr-einstein-field-law', 'post-gr-classical-gravitational-action'];
const parse = text => parseFrontmatter(text.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '');
const body = text => text.replace(/^---\r?\n[\s\S]*?\r?\n---/, '');
let deltas = 0;
for (const id of suppliers) {
  const beforePath = `${upstream}/before/items/${id}.md`, path = `items/${id}.md`;
  const oldText = readFileSync(beforePath, 'utf8'), newText = readFileSync(path, 'utf8');
  const expected = integration.production_files_written.find(row => row.path === path);
  if (hash(beforePath) !== expected.before_raw_sha256 || hash(path) !== expected.after_raw_sha256 || body(oldText) !== body(newText)) throw Error(`Supplier body drift: ${id}`);
  const a = parse(oldText), b = parse(newText);
  for (const role of roles) {
    if (a.dependency_roles[role] !== 'physical-assumption' || b.dependency_roles[role] !== 'formulation-prerequisite') throw Error(`Unexpected role delta: ${id} -> ${role}`);
    a.dependency_roles[role] = b.dependency_roles[role]; deltas++;
  }
  if (!isDeepStrictEqual(a, b)) throw Error(`Other supplier metadata drift: ${id}`);
}
const oldManifest = read(`${upstream}/before/batch-69.pages.json`), newManifest = read(`research/${run}-batch-69.pages.json`);
for (const id of suppliers) {
  const a = oldManifest.flatMap(p => p.items).find(i => i.id === id), b = newManifest.flatMap(p => p.items).find(i => i.id === id);
  for (const role of roles) {
    if (a.dependency_roles[role] !== 'physical-assumption' || b.dependency_roles[role] !== 'formulation-prerequisite') throw Error(`Unexpected manifest role delta: ${id}`);
    a.dependency_roles[role] = b.dependency_roles[role]; deltas++;
  }
}
if (deltas !== 8 || !isDeepStrictEqual(oldManifest, newManifest)) throw Error('Manifest has changes beyond the four role values');
const state = read(`.physics-autopilot/${run}/state.json`);
if (state.paused || !state.dispatches['1-scaffold:batch-73'].endedAt) throw Error('Run or own writer state changed');
const active = new Set(Object.values(state.dispatches).filter(d => !d.endedAt).flatMap(d => d.covers));
const snapshot = loadStep3(process.cwd(), run);
const own = report.records.map(row => row.id), sixIds = new Set(six.map(row => row.id));
const inputs = new Set(own.flatMap(id => itemInputPaths(snapshot, id, snapshot.items.get(id).item.deps)));
const overlap = [...inputs].filter(path => [...active].some(batch => path.endsWith(`${run}-batch-${batch}.pages.json`)));
if (overlap.length) throw Error(`Active supplier overlap: ${overlap.join(', ')}`);
for (const row of report.records) {
  if (hash(`items/${row.id}.md`) !== row.carrier_raw_sha256) throw Error(`Owned carrier changed: ${row.id}`);
  if (!sixIds.has(row.id) && (!step1Decision(snapshot, row.id).closed || itemHash(snapshot, row.id, snapshot.items.get(row.id).item.deps) !== row.native_input_sha256)) throw Error(`Additional item currency drift: ${row.id}`);
}
for (const row of six) {
  if (hash(row.readiness_path) !== row.readiness_raw_sha256 || hash(`items/${row.id}.md`) !== row.carrier_raw_sha256 || itemHash(snapshot, row.id, snapshot.items.get(row.id).item.deps) !== row.current_native_input_sha256) throw Error(`Guarded six-row drift: ${row.id}`);
}
const currentInputHashes = Object.fromEntries([...inputs].sort().map(path => [path.replace(`${process.cwd()}/`, ''), hash(path)]));
mkdirSync(beforeDir);
const refreshed = [];
six.sort((a, b) => snapshot.items.get(a.id).item.dependency_level - snapshot.items.get(b.id).item.dependency_level || a.id.localeCompare(b.id));
for (const row of six) {
  for (const [path, value] of Object.entries(currentInputHashes)) if (hash(path) !== value) throw Error(`Input changed during refresh: ${path}`);
  const beforeFile = `${beforeDir}/${row.id}.json`;
  copyFileSync(row.readiness_path, beforeFile);
  const before = read(row.readiness_path);
  recordStep1(process.cwd(), { run, item: row.id, decision: 'ready', owner: true, dependencies: before.dependencies,
    reason: `${before.reason} Metadata currency refresh only: the exact eight batch-69 role-value deltas change hashes but preserve all bodies, formulations, claims, dependency IDs, sources and physical scopes; the completed same-reviewer round-1 report remains the substantive evidence. No mathematics review repeated and no repair cycle consumed. Receipt: ${receiptPath}.` });
  refreshed.push({ id: row.id, before_file: beforeFile, before_raw_sha256: row.readiness_raw_sha256, after_raw_sha256: hash(row.readiness_path), carrier_raw_sha256: row.carrier_raw_sha256, native_input_sha256: read(row.readiness_path).sha256 });
}
const current = loadStep3(process.cwd(), run);
const unsettled = own.filter(id => !step1Decision(current, id).closed);
if (unsettled.length) throw Error(`Final current readiness failed: ${unsettled.join(', ')}`);
if (hash(reportPath) !== reportHash) throw Error('Immutable round-1 report changed');
const receipt = { version: 1, run, batch: 73, kind: 'metadata-only-native-readiness-currency-refresh',
  at: new Date().toISOString(), round1_report: reportPath, round1_report_sha256: reportHash,
  upstream_integration_receipt: integrationPath, upstream_integration_receipt_sha256: integrationHash,
  metadata_only_role_deltas_verified: deltas, sole_transitive_input_changes: sourceChanges.map(([path, before]) => ({ path, before_raw_sha256: before, current_raw_sha256: hash(path) })),
  active_native_batches_observed: [...active], active_input_supplier_overlap: overlap,
  refreshed, final_scoped_readiness: { current: own.length, unsettled }, input_hashes: currentInputHashes,
  repair_round: 1, maximum_repair_rounds: 2, mathematics_review_repeated: false, repair_cycle_consumed: false,
  gates_attempted: false, controls_written: false, public_carriers_or_batch73_metadata_edited: false,
  independent_native_review_obligations_preserved: true, unresolved_holds: [] };
writeFileSync(receiptPath, JSON.stringify(receipt, null, 2) + '\n', { flag: 'wx' });
console.log(JSON.stringify({ refreshed: six.length, current: own.length, unsettled, receipt: receiptPath, receipt_sha256: hash(receiptPath), round1_report_unchanged: hash(reportPath) === reportHash }, null, 2));
