#!/usr/bin/env node
// Root-only owned-plan reconciliation. Run through tools/tsx-run.mjs, BEFORE granting
// the paused final Step-5 gate permission. Never runs a gate or edits controls.
import { existsSync, lstatSync, readFileSync, readdirSync, readlinkSync, writeFileSync } from 'node:fs';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { planDocument, decodePlan, validatePlanProjection, composePlanProjection,
  planForeignResidual } from '../../tools/step6-plan-projection.mjs';
import { runScope } from '../../tools/step6-lib.mjs';
import { git, textGit, indexEntries, treeEntries } from '../../tools/run-commit-scope.mjs';
import { activeNativeWriters } from '../../tools/autopilot/src/workflow-prefix-migration.mts';

const run = 'numerical-analysis-remaining-71-2026-10-17';
const self = fileURLToPath(import.meta.url), root = resolve(dirname(self), '../..');
const fail = message => { throw Error(`owned-plan reconciliation: ${message}`); };
const need = (condition, message) => { if (!condition) fail(message); };
need(process.cwd() === root, 'invoke from this repository root');
const authorization = process.env.NA71_PLAN_AUTHORIZATION;
need(typeof authorization === 'string' && authorization.trim().length >= 20,
  'supply the concrete NA71_PLAN_AUTHORIZATION owner direction');
need(process.env.NA71_OWNER_WRITERS_DRAINED === 'true',
  'root must explicitly confirm all delegated writers drained');
const path = 'research/plan-spec.json';
const authority = `research/${run}-step6-plan-projection.json`;
need(!existsSync(join(root, authority)), 'refuse authority overwrite; archive any old authority and its evidence/policy first');
const snapshots = new Map();
function regular(file) {
  let cursor = root;
  for (const part of file.split('/')) {
    need(part && part !== '.' && part !== '..', 'unsafe input path');
    cursor = join(cursor, part);
    const st = lstatSync(cursor);
    need(!st.isSymbolicLink(), `symlink input ${file}`);
  }
  need(lstatSync(cursor).isFile(), `not a regular file: ${file}`);
  return readFileSync(cursor);
}
function capture(file) {
  const bytes = regular(file);
  if (snapshots.has(file)) need(bytes.equals(snapshots.get(file)), `input changed: ${file}`);
  else snapshots.set(file, bytes);
  return bytes;
}
const statePath = `.autopilot/${run}/state.json`;
function nativeBoundary() {
  const state = JSON.parse(regular(statePath));
  need(state.version === 1 && state.run === run && state.paused === true && !state.finishedAt
    && ['5.8-gate', '5.10-gate'].includes(state.stage),
  'requires the actual unfinished native run paused at 5.8-gate or 5.10-gate, before final gate permission');
  need(!state.stages?.[state.stage]?.gatesPassedAt && !state.stages?.[state.stage]?.doneAt,
    'the current final Step-5 battery already passed/completed; authority must precede its permission');
  need(!Object.values(state.dispatches ?? {}).some(d => d.startedAt && !d.endedAt),
    'unresolved native dispatch: drain all native work');
  need(!Object.keys(state.stages ?? {}).some(id => id.startsWith('6-')
    && state.stages[id]?.enteredAt), 'native Step 6 has already entered');
  return state;
}
// A paused controller is not a worker. Exempt only the lock-identified exact
// own-run controller, with its current request/state and process identity pinned.
// Every other production-discovered writer remains forbidden.
const requestPath = `.autopilot/${run}/owner-gate-request.json`;
const controllerPath = `.autopilot/${run}/controller.lock`;
const initialState = nativeBoundary();
capture(statePath);
const request = JSON.parse(capture(requestPath));
need(request.version === 1 && request.run === run && typeof request.id === 'string' && request.id
  && Array.isArray(request.stages) && request.stages.includes(initialState.stage),
  'need the actual current native owner-gate request for this paused stage');
const controllerWasPresent = existsSync(join(root, controllerPath));
if (controllerWasPresent) capture(controllerPath);
let controllerProcess = null;
let controllerLauncher = null;
function processIdentity(pid) {
  const stat = readFileSync(`/proc/${pid}/stat`, 'utf8');
  const fields = stat.slice(stat.lastIndexOf(')') + 2).trim().split(/\s+/);
  need(Number.isInteger(pid) && pid > 0 && /^\d+$/.test(fields[1] ?? '')
    && /^\d+$/.test(fields[19] ?? ''), 'invalid process identity');
  return { pid, ppid: Number(fields[1]), startTicks: fields[19],
    cwd: readlinkSync(`/proc/${pid}/cwd`), bytes: readFileSync(`/proc/${pid}/cmdline`) };
}
function sameProcess(before, after) {
  return before.pid === after.pid && before.ppid === after.ppid
    && before.startTicks === after.startTicks && before.cwd === after.cwd
    && before.bytes.equals(after.bytes);
}
function ownPausedController(pid) {
  if (!controllerWasPresent) return false;
  const lock = JSON.parse(capture(controllerPath));
  if (lock.run !== run || !Number.isInteger(lock.pid) || lock.pid !== pid) return false;
  const identity = processIdentity(pid), bytes = identity.bytes;
  const args = bytes.toString('utf8').split('\0').filter(Boolean);
  const controllerScript = 'tools/autopilot/bin/autopilot.mts';
  const command = args.findIndex(arg => arg === join(root, controllerScript)
    || arg === controllerScript);
  if (command < 0 || args[command + 1] !== 'start' || identity.cwd !== root) return false;
  const value = flag => {
    const positions = args.map((arg, i) => arg === flag ? i : -1).filter(i => i >= 0);
    return positions.length === 1 ? args[positions[0] + 1] : undefined;
  };
  if (value('--run') !== run || value('--repo') !== root
    || typeof value('--state-dir') !== 'string'
    || resolve(root, value('--state-dir')) !== join(root, '.autopilot', run)) return false;
  nativeBoundary();
  need(regular(statePath).equals(snapshots.get(statePath))
    && regular(requestPath).equals(snapshots.get(requestPath)), 'paused controller state/request changed');
  if (controllerProcess) need(sameProcess(controllerProcess, identity),
    'controller process identity changed');
  else controllerProcess = identity;
  return true;
}
function ownControllerLauncher(pid) {
  if (!controllerWasPresent) return false;
  const lock = JSON.parse(capture(controllerPath));
  // Verify the lock controller first, independently of /proc enumeration order.
  if (!ownPausedController(lock.pid) || controllerProcess.ppid !== pid) return false;
  const identity = processIdentity(pid), args = identity.bytes.toString('utf8').split('\0').filter(Boolean);
  const childArgs = controllerProcess.bytes.toString('utf8').split('\0').filter(Boolean);
  const controllerScript = 'tools/autopilot/bin/autopilot.mts';
  const childCommand = childArgs.findIndex(arg => arg === controllerScript || arg === join(root, controllerScript));
  if (identity.cwd !== root || args.length < 4
    || !['node', childArgs[0]].includes(args[0])
    || !['tools/tsx-run.mjs', join(root, 'tools/tsx-run.mjs')].includes(args[1])
    || ![controllerScript, join(root, controllerScript)].includes(args[2])
    || JSON.stringify(args.slice(3)) !== JSON.stringify(childArgs.slice(childCommand + 1))) return false;
  if (controllerLauncher) need(sameProcess(controllerLauncher, identity), 'controller launcher identity changed');
  else controllerLauncher = identity;
  return true;
}
// The exact TS-loader parent wrapper is also not a native work process.
function ownLauncher(pid) {
  if (pid !== process.ppid) return false;
  const args = readFileSync(`/proc/${pid}/cmdline`, 'utf8').split('\0').filter(Boolean);
  return args.length === 3 && resolve(root, args[1]) === join(root, 'tools/tsx-run.mjs')
    && resolve(root, args[2]) === self;
}
function drainedNativeWriters() {
  const writers = activeNativeWriters(root, run).filter(pid => !ownLauncher(pid)
    && !ownPausedController(pid) && !ownControllerLauncher(pid));
  need(writers.length === 0, `active native worker/other writer PIDs: ${writers.join(', ')}`);
}
drainedNativeWriters();
// Preserve request/permission bytes too. Never grants, revokes or rewrites them.
const optionalControls = ['owner-gate-request.json', 'owner-gate-permission.json', 'config.json']
  .map(name => `.autopilot/${run}/${name}`);
const absentControls = optionalControls.filter(file => !existsSync(join(root, file)));
for (const file of optionalControls) if (!absentControls.includes(file)) capture(file);
const permissionPath = `.autopilot/${run}/owner-gate-permission.json`;
if (snapshots.has(permissionPath)) need(JSON.parse(snapshots.get(permissionPath)).request_id !== request.id,
  'current final gate permission already exists; prepare authority before granting it');

const policyPath = `research/${run}-closeout-scope.json`;
const policy = JSON.parse(capture(policyPath));
const expectedSupport = [
  'tools/finite-smoke-numerical.mjs',
  'tools/finite-smoke-numerical-frontier71-special.mjs',
  'tools/finite-smoke-numerical-frontier71-geometry.mjs',
  'tools/finite-smoke-numerical-frontier71-particle.mjs',
  'tools/NUMERICAL-FRONTIER71-FINITE-SMOKE.md',
  'library/combinatorics/algebraic-and-spectral-graph-theory.md',
  'tools/step3-native-creation-origin.mjs', 'tools/auditor-created-items.mjs',
  'tools/auditor-created-items.md', 'WORKFLOW.md', 'tools/step3-close.mjs',
  'tools/step3-owner-source-identical-continuity.mjs',
  'tools/step3-owner-source-identical-continuity.md',
  // Exact current CWI compatibility repair, owned by the separate root receipt
  // step5-initial-scope-compatibility-code-ownership.json and its actual review.
  'tools/step5-initial-scope-findings.mjs',
  'tools/step5-initial-scope-findings.md',
];
need(policy.version === 1 && policy.run === run && policy.authorized_by === 'owner'
  && Array.isArray(policy.additional_paths)
  && JSON.stringify(policy.additional_paths.map(row => row.path).sort()) === JSON.stringify([...expectedSupport].sort()),
  'current closeout policy must retain exactly the 15 reviewed supporting paths; changed scope needs owner review');
need(policy.plan_projection === undefined, 'archive and review the existing plan_projection policy before a successor');
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
for (const row of policy.additional_paths) {
  need(typeof row.reason === 'string' && row.reason.trim().length >= 20
    && /^[a-f0-9]{64}$/.test(row.sha256 ?? '')
    && typeof row.ownership_evidence === 'string'
    && row.ownership_evidence.startsWith(`research/${run}-`), 'invalid supporting ownership row');
  const bytes = capture(row.path), evidence = JSON.parse(capture(row.ownership_evidence));
  need(sha(bytes) === row.sha256 && evidence.run === run && Array.isArray(evidence.owned_paths)
    && evidence.owned_paths.some(claim => claim.path === row.path && claim.sha256 === row.sha256),
  `supporting bytes/owner evidence need truthful current refresh: ${row.path}`);
}

const archive = `research/${run}-owner-planning-integration/step5-current-plan-owned-row-reconciliation.json`;
need(!existsSync(join(root, archive)), 'refuse reconciliation archive overwrite');
const ledgerPath = `research/${run}-scope-ledger.json`;
capture(ledgerPath);
const scope = runScope(run, root), selected = new Set(scope.pages.map(row => row.id));
need(scope.pages.length === 142 && selected.size === 142, 'need exact142 selected physical pages');
for (const page of scope.pages) capture(page.file);
const manifestPaths = () => readdirSync(join(root, 'research')).filter(name =>
  name.startsWith(`${run}-batch-`) && /^\d+\.pages\.json$/.test(name.slice(`${run}-batch-`.length)))
  .sort().map(name => 'research/' + name);
const manifestFiles = manifestPaths();
need(manifestFiles.length === 71, 'need exact71 current canonical manifests');
const manifests = new Map();
for (const file of manifestFiles) for (const page of JSON.parse(capture(file))) {
  need(selected.has(page.id) && !manifests.has(page.id), 'manifest page outside exact scope or duplicated');
  manifests.set(page.id, { page, file });
}
need(manifests.size === 142, 'manifest page inventory differs');
const before = decodePlan(capture(path)), document = planDocument(before);
const ownRows = document.rows.filter(row => selected.has(row.id));
need(ownRows.length === 142, 'working plan must contain every selected page exactly once');
const replacements = [], changed = [];
for (const row of ownRows) {
  const { page, file } = manifests.get(row.id), home = scope.pages.find(p => p.id === row.id);
  need(row.value.kind === page.kind && row.value.kind === home.kind
    && row.value.category === page.category && row.value.category === home.category,
  `kind/category mismatch requires separate review: ${row.id}`);
  need(Array.isArray(page.items) && Array.isArray(page.requires ?? [])
    && JSON.stringify(page.items.map(item => item.id)) === JSON.stringify(home.items),
  `manifest item IDs differ from actual physical home: ${row.id}`);
  const fields = [];
  for (const key of ['items', 'requires']) {
    const wanted = page[key] ?? [], prior = row.value[key] ?? [];
    if (JSON.stringify(prior) === JSON.stringify(wanted)) continue;
    const token = row.children.find(child => child.key === key);
    need(token && Array.isArray(token.value), `missing/nonarray owned ${key} needs separate review: ${row.id}`);
    replacements.push({ start: token.start, end: token.end, raw: JSON.stringify(wanted, null, 2) });
    fields.push(key);
  }
  if (fields.length) changed.push({ id: row.id, manifest: file, changed_fields: fields,
    before_raw: row.raw, after_raw: null,
    new_item_ids: page.items.filter(item => !row.value.items.some(old => old.id === item.id)).map(item => item.id),
    removed_item_ids: row.value.items.filter(item => !page.items.some(next => next.id === item.id)).map(item => item.id) });
}
need(changed.length > 0, 'no mismatched own items/requires arrays; no write needed');
let after = before;
for (const patch of replacements.sort((a, b) => b.start - a.start))
  after = after.slice(0, patch.start) + patch.raw + after.slice(patch.end);
const target = planDocument(after), targetById = new Map(target.rows.map(row => [row.id, row]));
need(JSON.stringify(target.rows.map(row => row.id)) === JSON.stringify(document.rows.map(row => row.id)),
  'plan ID/relative order changed');
need(planForeignResidual(before, selected) === planForeignResidual(after, selected), 'foreign byte residual changed');
for (const row of ownRows) {
  const next = targetById.get(row.id), manifest = manifests.get(row.id).page;
  const other = value => Object.fromEntries(Object.entries(value).filter(([key]) => !['items', 'requires'].includes(key)));
  need(JSON.stringify(other(row.value)) === JSON.stringify(other(next.value)), `other owned metadata changed: ${row.id}`);
  need(JSON.stringify(next.value.items) === JSON.stringify(manifest.items)
    && JSON.stringify(next.value.requires ?? []) === JSON.stringify(manifest.requires ?? []), `target mirror differs: ${row.id}`);
}
for (const row of changed) row.after_raw = targetById.get(row.id).raw;
function assertCurrency() {
  nativeBoundary();
  drainedNativeWriters();
  need(JSON.stringify(manifestPaths()) === JSON.stringify(manifestFiles), 'manifest inventory changed');
  need(absentControls.every(file => !existsSync(join(root, file))), 'native control appeared');
  need(controllerWasPresent || !existsSync(join(root, controllerPath)), 'controller lock appeared');
  if (controllerProcess) need(sameProcess(controllerProcess, processIdentity(controllerProcess.pid)), 'controller changed');
  if (controllerLauncher) need(sameProcess(controllerLauncher, processIdentity(controllerLauncher.pid))
    && controllerProcess.ppid === controllerLauncher.pid, 'controller launcher changed');
  for (const [file, bytes] of snapshots) need(regular(file).equals(bytes), `CAS input changed: ${file}`);
  need(!existsSync(join(root, authority)), 'plan authority appeared; do not invalidate an existing seal');
}
assertCurrency();
// Archive selected changed page-object tokens only, never the full foreign plan.
writeFileSync(join(root, archive), JSON.stringify({ version: 1, run, authorized_by: 'owner',
  authorization, at: new Date().toISOString(), native_stage: initialState.stage,
  changed_owned_rows: changed, foreign_archive: false }, null, 2) + '\n', { flag: 'wx' });
assertCurrency();
writeFileSync(join(root, path), after);
console.log(JSON.stringify({ run, reconciled_pages: changed.length, replacements: replacements.length,
  added_helper_ids: changed.flatMap(row => row.new_item_ids), archive,
  preserved: 'All foreign bytes/ID order and non-items/requires own metadata; no sources, manifests, policy, state, index, authority or gates changed.' }, null, 2));
