#!/usr/bin/env node
// Root-only metadata builder. Run through tools/tsx-run.mjs, BEFORE granting
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
const fail = message => { throw Error(`plan-projection preparation: ${message}`); };
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
const ledgerPath = `research/${run}-scope-ledger.json`;
capture(ledgerPath);
const scope = runScope(run, root), selected = new Set(scope.pages.map(row => row.id));
need(scope.pages.length === 142 && selected.size === 142, 'expected exact current 142 selected physical pages');
for (const page of scope.pages) capture(page.file);
const manifestPaths = () => readdirSync(join(root, 'research')).filter(name =>
  name.startsWith(`${run}-batch-`) && /^\d+\.pages\.json$/.test(name.slice(`${run}-batch-`.length)))
  .sort().map(name => 'research/' + name);
const manifests = manifestPaths();
need(manifests.length === 71, 'expected exact 71 current canonical manifests');
const evidencePaths = [ledgerPath, ...manifests];
for (const file of manifests) capture(file);
const original_head = textGit(root, ['--no-replace-objects', 'rev-parse', '--verify', 'HEAD']);
const headEntry = treeEntries(root, original_head).find(row => row.path === path);
const indexEntry = indexEntries(root).find(row => row.path === path);
need(headEntry?.mode === '100644' && indexEntry?.mode === '100644'
  && indexEntry.stage === 0 && indexEntry.flags === '0', 'need ordinary HEAD/index plan blobs and normal index flags');
const original_index_blob = indexEntry.oid;
const originalHead = decodePlan(git(root, ['--no-replace-objects', 'show', original_head + ':' + path]));
const originalIndex = decodePlan(git(root, ['--no-replace-objects', 'cat-file', 'blob', original_index_blob]));
const working = decodePlan(capture(path));
const rows = text => planDocument(text).rows.filter(row => selected.has(row.id)).map(({ id, raw }) => ({ id, raw }));
const target_owned_rows = rows(working), page_ids = target_owned_rows.map(row => row.id);
const spec = { version: 1, kind: 'plan-page-replacement-projection', run, path,
  authorized_by: 'owner', authorization, original_head, original_index_blob, page_ids,
  base_head_owned_rows: rows(originalHead), base_index_owned_rows: rows(originalIndex), target_owned_rows,
  evidence: evidencePaths.map(file => ({ path: file, sha256: sha(snapshots.get(file)) })) };
// Both BEM helpers belong to the selected BEM page; outside graph prose grants
// no outside plan placement. Omit supporting_pages entirely.
validatePlanProjection(spec, run, scope.pages, working, originalHead, originalIndex, root);
for (const [kind, base] of [['head', originalHead], ['index', originalIndex]]) {
  const composed = composePlanProjection(base, spec, kind);
  need(planForeignResidual(composed.text, page_ids) === planForeignResidual(base, page_ids),
    `${kind} foreign residual changed`);
}
// Compare-and-swap guards precede the sole exclusive write. The actual native
// transaction repeats its own index-lock, current-base, inverse and ref-CAS checks.
nativeBoundary();
drainedNativeWriters();
need(textGit(root, ['--no-replace-objects', 'rev-parse', '--verify', 'HEAD']) === original_head,
  'HEAD changed during construction');
const finalIndex = indexEntries(root).find(row => row.path === path);
need(finalIndex && JSON.stringify(finalIndex) === JSON.stringify(indexEntry), 'plan index entry/flags changed');
need(JSON.stringify(manifestPaths()) === JSON.stringify(manifests), 'canonical manifest inventory changed');
need(absentControls.every(file => !existsSync(join(root, file))), 'native control appeared during construction');
need(controllerWasPresent || !existsSync(join(root, controllerPath)), 'controller lock appeared during construction');
if (controllerProcess) need(sameProcess(controllerProcess, processIdentity(controllerProcess.pid)),
  'verified paused controller process changed before write');
if (controllerLauncher) need(sameProcess(controllerLauncher, processIdentity(controllerLauncher.pid))
  && controllerProcess.ppid === controllerLauncher.pid, 'verified controller launcher changed before write');
for (const [file, bytes] of snapshots) need(regular(file).equals(bytes), `guarded input changed: ${file}`);
need(!existsSync(join(root, authority)), 'authority appeared concurrently; refuse overwrite');
writeFileSync(join(root, authority), JSON.stringify(spec, null, 2) + '\n', { flag: 'wx' });
console.log(JSON.stringify({ plan_projection: { path, authority, sha256: sha(regular(authority)) },
  page_count: page_ids.length, evidence_count: spec.evidence.length,
  note: 'Root must integrate only this binding into the unchanged current closeout policy before final Step-5 gate permission. No policy, Git, source, plan or native control was written.' }, null, 2));
