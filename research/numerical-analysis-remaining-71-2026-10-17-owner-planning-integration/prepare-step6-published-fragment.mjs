#!/usr/bin/env node
// ROOT EXECUTION ONLY through tools/tsx-run.mjs at a paused Step-5 hold. No gates,
// policy/control changes, historical-row restoration, staging or commits.
import { existsSync, lstatSync, readFileSync, readdirSync, readlinkSync, realpathSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve, isAbsolute } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { runScope } from '../../tools/step6-lib.mjs';
import { decodeLedger, fragmentRecords, recordSignature, validateFragment, composeFragment } from '../../tools/step6-ledger-fragment.mjs';
import { recordedPublishedRepair } from '../../tools/published-repair-policy.mjs';
import { activeNativeWriters } from '../../tools/autopilot/src/workflow-prefix-migration.mts';

const RUN = 'numerical-analysis-remaining-71-2026-10-17';
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const LEDGER = 'research/published-consumer-supplier-ledger.md';
const AUTHORITY = `research/${RUN}-step6-published-ledger-fragment.json`;
const BASIS = `research/${RUN}-step6-published-ledger-fragment-basis.json`;
const GUARDS = `research/${RUN}-step6-published-ledger-fragment-creation-guards.json`;
const STATE_DIR = join(ROOT, '.autopilot', RUN);
const POLICY = `research/${RUN}-closeout-scope.json`;
const fail = message => { throw Error(`Step-6 fragment builder: ${message}`); };
const need = (value, message) => { if (!value) fail(message); };
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
const equal = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const args = process.argv.slice(2);
const option = name => { const at = args.indexOf(name); return at < 0 ? null : args[at + 1]; };
need(option('--owner-identity') === '/root' && args.includes('--writers-drained'),
  'explicit --owner-identity /root and --writers-drained are required; an agent must not execute this builder');
const authorization = option('--authorization');
need(typeof authorization === 'string' && authorization.trim().length >= 40,
  'supply concrete --authorization (at least 40 characters) for these exact addition-only records');
need(args.every((arg, index) => ['--owner-identity', '--authorization', '--writers-drained'].includes(arg)
  || index > 0 && ['--owner-identity', '--authorization'].includes(args[index - 1])), 'unknown argument');
need(resolve(process.cwd()) === ROOT, 'execute from the actual repository root');

function regular(path) {
  need(typeof path === 'string' && !isAbsolute(path) && !path.includes('\\')
    && !path.split('/').some(part => !part || part === '.' || part === '..'), 'unsafe relative path');
  let cursor = ROOT;
  for (const part of path.split('/')) {
    cursor = join(cursor, part);
    need(!lstatSync(cursor).isSymbolicLink(), `symlink input ${path}`);
  }
  need(lstatSync(cursor).isFile(), `nonregular input ${path}`);
  return cursor;
}
const captured = new Map();
function read(path) {
  const bytes = readFileSync(regular(path));
  const previous = captured.get(path);
  need(!previous || previous === sha(bytes), `input changed during capture: ${path}`);
  captured.set(path, sha(bytes));
  return bytes;
}
const json = path => JSON.parse(read(path));
const evidence = new Map();
function addEvidence(path) {
  need(typeof path === 'string' && path.startsWith(`research/${RUN}-`), `non-own-run evidence ${path}`);
  const bytes = read(path);
  evidence.set(path, { path, sha256: sha(bytes) });
  return bytes;
}
const git = gitArgs => execFileSync('git', ['--no-replace-objects', '-C', ROOT, ...gitArgs],
  { maxBuffer: 64 * 1024 * 1024 });
const gitText = gitArgs => git(gitArgs).toString('utf8').trim();
const runtimePath = name => relative(ROOT, join(STATE_DIR, name)).replaceAll('\\', '/');
let permissionBefore;
let controllerAtCapture;
function ownLauncher(pid) {
  if (pid !== process.ppid) return false;
  const argv = readFileSync(`/proc/${pid}/cmdline`, 'utf8').split('\0').filter(Boolean);
  return argv.length === 3 + args.length && ['node', process.execPath].includes(argv[0])
    && resolve(ROOT, argv[1]) === join(ROOT, 'tools/tsx-run.mjs')
    && resolve(ROOT, argv[2]) === fileURLToPath(import.meta.url)
    && equal(argv.slice(3), args) && readlinkSync(`/proc/${pid}/cwd`) === ROOT;
}
function assertNativeProcesses(state, initial) {
  const lockPath = runtimePath('controller.lock');
  const lockBytes = existsSync(join(ROOT, lockPath))
    ? initial ? read(lockPath) : readFileSync(regular(lockPath)) : null;
  const lock = lockBytes ? JSON.parse(lockBytes) : null;
  let controller = null;
  let controllerArgv = null;
  let writers = activeNativeWriters(ROOT, RUN).filter(pid => {
    if (ownLauncher(pid)) return false;
    if (state.paused !== true || lock?.run !== RUN || lock.pid !== pid
      || !Number.isFinite(Date.parse(lock.started_at))) return true;
    const argvBytes = readFileSync(`/proc/${pid}/cmdline`);
    const argv = argvBytes.toString('utf8').split('\0').filter(Boolean);
    if (readlinkSync(`/proc/${pid}/cwd`) !== ROOT) return true;
    const cli = argv.findIndex((arg, index) => index > 0
      && resolve(ROOT, arg) === join(ROOT, 'tools/autopilot/bin/autopilot.mts'));
    if (cli < 1 || argv[cli + 1] !== 'start') return true;
    const tail = argv.slice(cli + 2);
    if (tail.length !== 6 || new Set([tail[0], tail[2], tail[4]]).size !== 3) return true;
    const options = new Map([[tail[0], tail[1]], [tail[2], tail[3]], [tail[4], tail[5]]]);
    if (options.size !== 3 || options.get('--repo') !== ROOT || options.get('--run') !== RUN
      || typeof options.get('--state-dir') !== 'string'
      || resolve(ROOT, options.get('--state-dir')) !== STATE_DIR) return true;
    const stat = readFileSync(`/proc/${pid}/stat`, 'utf8');
    const fields = stat.slice(stat.lastIndexOf(')') + 2).trim().split(/\s+/);
    const startTicks = fields[19];
    need(/^\d+$/.test(fields[1] ?? '') && /^\d+$/.test(startTicks ?? ''), 'invalid controller process identity');
    controller = { pid, started_at: lock.started_at, start_ticks: startTicks,
      ppid: Number(fields[1]), cwd: ROOT, argv_sha256: sha(argvBytes), lock_sha256: sha(lockBytes) };
    controllerArgv = argv;
    return false;
  });
  // Discovery can encounter the tsx wrapper before its controller child. Only
  // after verifying the lock controller may its exact actual parent be exempt.
  if (controller && writers.includes(controller.ppid)) {
    const pid = controller.ppid, argvBytes = readFileSync(`/proc/${pid}/cmdline`);
    const argv = argvBytes.toString('utf8').split('\0').filter(Boolean);
    const script = 'tools/autopilot/bin/autopilot.mts';
    const childCommand = controllerArgv.findIndex(arg => arg === script || arg === join(ROOT, script));
    const cwd = readlinkSync(`/proc/${pid}/cwd`);
    if (cwd === ROOT && ['node', controllerArgv[0]].includes(argv[0])
      && ['tools/tsx-run.mjs', join(ROOT, 'tools/tsx-run.mjs')].includes(argv[1])
      && [script, join(ROOT, script)].includes(argv[2])
      && equal(argv.slice(3), controllerArgv.slice(childCommand + 1))) {
      const stat = readFileSync(`/proc/${pid}/stat`, 'utf8');
      const fields = stat.slice(stat.lastIndexOf(')') + 2).trim().split(/\s+/);
      need(/^\d+$/.test(fields[1] ?? '') && /^\d+$/.test(fields[19] ?? ''), 'invalid controller launcher identity');
      controller.launcher = { pid, ppid: Number(fields[1]), start_ticks: fields[19],
        cwd, argv_sha256: sha(argvBytes) };
      writers = writers.filter(candidate => candidate !== pid);
    }
  }
  need(writers.length === 0, `active native worker/tool PIDs: ${writers.join(', ')}`);
  // A quiet paused controller is allowed, never its workers or descendants,
  // including children that have no run-bearing command-line argument.
  if (controller) {
    const parents = new Map();
    for (const name of readdirSync('/proc').filter(name => /^\d+$/.test(name))) {
      try {
        const stat = readFileSync(`/proc/${name}/stat`, 'utf8');
        parents.set(Number(name), Number(stat.slice(stat.lastIndexOf(')') + 2).split(' ')[1]));
      } catch (error) { if (!['ENOENT', 'ESRCH'].includes(error.code)) throw error; }
    }
    const descendants = [];
    for (const pid of parents.keys()) {
      const seen = new Set(); let parent = parents.get(pid);
      while (parent && !seen.has(parent)) {
        if (parent === controller.pid) { descendants.push(pid); break; }
        seen.add(parent); parent = parents.get(parent);
      }
    }
    need(descendants.length === 0, `paused controller has live descendants: ${descendants.join(', ')}`);
  }
  if (initial) controllerAtCapture = controller;
  else need(equal(controller, controllerAtCapture), 'paused controller identity or process set changed');
  return controller;
}
function assertBoundary(initial = false) {
  const statePath = runtimePath('state.json'), requestPath = runtimePath('owner-gate-request.json');
  const state = initial ? json(statePath) : JSON.parse(readFileSync(regular(statePath)));
  const request = initial ? json(requestPath) : JSON.parse(readFileSync(regular(requestPath)));
  need(state.version === 1 && state.run === RUN && state.paused === true && !state.finishedAt
    && ['5.8-gate', '5.10-gate'].includes(state.stage), 'native run must be paused at 5.8-gate or 5.10-gate');
  need(request.version === 1 && request.run === RUN && request.group === state.stage
    && equal(request.stages, [state.stage]) && typeof request.id === 'string' && request.id
    && Number.isFinite(Date.parse(request.at)), 'missing exact native pre-battery owner request');
  need(!state.stages?.[state.stage]?.gatesPassedAt && !state.stages?.[state.stage]?.doneAt,
    'selected native gate must not already be passed');
  need(!Object.entries(state.stages ?? {}).some(([id, row]) => id.startsWith('6-') && row.enteredAt),
    'native Step 6 already entered; authority must precede final Step-5 permission');
  need(state.dispatches && Object.values(state.dispatches).every(row => !row.startedAt
    || Number.isFinite(Date.parse(row.endedAt)) && Date.parse(row.endedAt) >= Date.parse(row.startedAt)),
  'native dispatch writers are not drained');
  const permissionPath = runtimePath('owner-gate-permission.json');
  const permissionBytes = existsSync(join(ROOT, permissionPath)) ? readFileSync(regular(permissionPath)) : null;
  const permission = permissionBytes ? JSON.parse(permissionBytes) : null;
  need(!permission || permission.run !== RUN || permission.request_id !== request.id,
    'current request already has gate permission; capture authority before final Step-5 permission');
  const currentPermission = permissionBytes ? sha(permissionBytes) : null;
  if (initial) permissionBefore = currentPermission;
  else need(currentPermission === permissionBefore, 'owner gate permission changed during capture');
  const controller = assertNativeProcesses(state, initial);
  return { stage: state.stage, request_id: request.id, request_at: request.at,
    dispatches: Object.keys(state.dispatches).length, paused_controller: controller };
}

const boundary = assertBoundary(true);
for (const path of [AUTHORITY, BASIS, GUARDS]) need(!existsSync(join(ROOT, path)),
  `refusing overwrite of ${path}; retain prior authority and reconcile an explicitly named successor`);
need(gitText(['rev-parse', '--show-toplevel']) === realpathSync(ROOT), 'unexpected Git root');
need(gitText(['symbolic-ref', '--short', 'HEAD']) === 'main', 'native closeout requires main; no checkout attempted');
const originalHead = gitText(['rev-parse', 'HEAD']);
const headEntry = gitText(['ls-tree', originalHead, '--', LEDGER]);
need(/^100644 blob [a-f0-9]+\tresearch\/published-consumer-supplier-ledger\.md$/.test(headEntry),
  'requires ordinary existing 100644 HEAD ledger');
const originalHeadBlob = headEntry.split(/\s+/)[2];
const indexEntries = gitText(['ls-files', '--stage', '--', LEDGER]).split('\n');
need(indexEntries.length === 1 && /^100644 [a-f0-9]+ 0\t/.test(indexEntries[0]), 'requires ordinary unconflicted index ledger');
const originalIndexBlob = indexEntries[0].split(/\s+/)[1];
need(gitText(['ls-files', '-v', '--', LEDGER]) === `H ${LEDGER}`, 'unsupported ledger index flags');
const headText = decodeLedger(git(['cat-file', 'blob', originalHeadBlob]));
const indexText = decodeLedger(git(['cat-file', 'blob', originalIndexBlob]));
const workingText = decodeLedger(read(LEDGER));
const policy = json(POLICY);
need(policy.version === 1 && policy.run === RUN && policy.authorized_by === 'owner'
  && Array.isArray(policy.additional_paths), 'invalid existing owner closeout policy');
need(!policy.additional_paths.some(row => row.path === LEDGER), 'whole-ledger additional ownership is forbidden');
need(!policy.shared_fragments?.length, 'existing fragment authority requires explicit historical successor reconciliation');
const claimsPath = `research/${RUN}-step3-published-claims.jsonl`;
const claims = decodeLedger(addEvidence(claimsPath)).split(/\r?\n/).filter(line => line.trim()).map(JSON.parse);
need(claims.every(claim => claim.version === 1 && claim.run === RUN && /^[a-z][a-z0-9-]*$/.test(claim.id))
  && new Set(claims.map(claim => claim.id)).size === claims.length, 'invalid or duplicate published claims');
const selected = runScope(RUN, ROOT);
read(selected.ledger);
for (const page of selected.pages) read(page.file);
const ids = new Set([...selected.items.map(row => row.id), ...selected.pages.map(row => row.id),
  ...claims.map(row => row.id), ...policy.additional_paths.flatMap(row => /^items\/([^/]+)\.md$/.exec(row.path)?.slice(1) ?? [])]);
const owned = text => fragmentRecords(text, RUN, ids).filter(row => row.owned).map(row => recordSignature(row.text));
const foreign = text => fragmentRecords(text, RUN, ids).filter(row => !row.owned).map(row => recordSignature(row.text));
const baseOwned = owned(headText), indexOwned = owned(indexText), targetOwned = owned(workingText);
need(equal(baseOwned, indexOwned), 'HEAD/index owned bases differ; refuse automatic union or replacement');
need(equal(targetOwned.filter(row => baseOwned.includes(row)), baseOwned),
  'historical base records missing, duplicated, or reordered; do not reapply restoration automatically');

for (const claim of claims) {
  const sourcePath = `items/${claim.id}.md`, source = read(sourcePath).toString('utf8');
  const match = /^ {2}repair:\s*(?:"([^"\n]+)"|'([^'\n]+)'|([^\s'"]+))\s*$/m.exec(source);
  const receiptPath = match?.slice(1).find(Boolean);
  need(receiptPath, `${claim.id}: missing local repair pointer; use the ordinary genuine no-op closure route separately, never invent a repair`);
  const receipt = JSON.parse(addEvidence(receiptPath));
  need(receipt.run === RUN && receipt.id === claim.id && receipt.group === claim.group
    && receipt.pre_sha256 === claim.pre_sha256, `unmatched published claim ${claim.id}`);
  addEvidence(receipt.before_file);
  const result = recordedPublishedRepair(ROOT, claim.id, source, receiptPath);
  need(result.ok, `${claim.id}: ${result.reason}`);
}
for (const path of [`research/${RUN}-step5-published-repairs.jsonl`, `research/${RUN}-step3-closure.json`,
  `research/${RUN}-dispatch/tool-step3-close.result.json`,
  `research/${RUN}-owner-planning-integration/step6-published-ledger-historical-record-restoration.json`,
  `research/${RUN}-owner-planning-integration/step6-published-ledger-historical-record-placement-correction.json`,
  relative(ROOT, fileURLToPath(import.meta.url)).replaceAll('\\', '/')]) addEvidence(path);
// Exact owned text can name native evidence from this run. Foreign historical
// base references remain authenticated by Git objects, never relabelled own-run.
for (const record of targetOwned) for (const match of record.matchAll(
  new RegExp(`research/${RUN}-[A-Za-z0-9_./-]+[.](?:jsonl|json|md)`, 'g'))) addEvidence(match[0]);
for (const path of ['tools/step6-ledger-fragment.mjs', 'tools/step6-lib.mjs',
  'tools/run-commit-scope.mjs', 'tools/published-repair-policy.mjs',
  'tools/autopilot/src/workflow-prefix-migration.mts']) read(path);
const basis = { version: 1, kind: 'published-ledger-fragment-original-bases', run: RUN,
  authorized_by: 'owner', original_head: originalHead, original_head_blob: originalHeadBlob,
  original_index_blob: originalIndexBlob, base_owned_records: baseOwned, index_owned_records: indexOwned };
const spec = { version: 1, kind: 'published-ledger-addition-fragment', run: RUN, path: LEDGER,
  authorized_by: 'owner', authorization, base_owned_records: baseOwned, target_owned_records: targetOwned,
  evidence: [...evidence.values()].sort((a, b) => a.path.localeCompare(b.path)) };
validateFragment(spec, RUN, ids, workingText);
for (const base of [headText, indexText]) {
  const composed = composeFragment(base, spec, RUN, ids);
  need(equal(foreign(composed.text), foreign(base)), 'independent foreign residual changed');
  need(equal(owned(composed.text), targetOwned), 'composed owned records differ');
}
function assertCurrency() {
  assertBoundary();
  need(gitText(['rev-parse', 'HEAD']) === originalHead
    && gitText(['rev-parse', `:${LEDGER}`]) === originalIndexBlob
    && gitText(['ls-files', '--stage', '--', LEDGER]) === indexEntries[0], 'HEAD/index ledger CAS changed');
  need(gitText(['ls-files', '-v', '--', LEDGER]) === `H ${LEDGER}`, 'index flags changed');
  for (const [path, digest] of captured) need(sha(readFileSync(regular(path))) === digest, `captured input changed: ${path}`);
}
const recordedAt = new Date().toISOString();
const guards = { version: 1, kind: 'published-ledger-fragment-paused-creation-guards', run: RUN,
  owner_identity: '/root', authorized_by: 'owner', authorization, recorded_at: recordedAt,
  native_boundary: boundary, writers_drained_owner_attestation: true,
  gate_permission_not_issued: true, mathematical_review: false, native_execution_credit: false,
  inputs: [...captured].sort(([a], [b]) => a.localeCompare(b)).map(([path, sha256]) => ({ path, sha256 })),
  permission_sha256: permissionBefore, working_ledger_sha256: captured.get(LEDGER),
  head_foreign_sha256: sha(JSON.stringify(foreign(headText))), index_foreign_sha256: sha(JSON.stringify(foreign(indexText))),
  working_foreign_sha256: sha(JSON.stringify(foreign(workingText))), claims: claims.length,
  historical_record_restoration: 'Already complete and retained; this builder never modifies the ledger.' };
const encode = value => Buffer.from(JSON.stringify(value, null, 2) + '\n');
const basisBytes = encode(basis), guardBytes = encode(guards);
const finalSpec = { ...spec, evidence: [...spec.evidence,
  { path: BASIS, sha256: sha(basisBytes) }, { path: GUARDS, sha256: sha(guardBytes) }] };
const authorityBytes = encode(finalSpec);
// Paused native state/no permission plus pre-write compare-and-swap checks guard
// the capture. No Git/index/control locks are written or ownership widened.
// An interrupted partial immutable write must be preserved and reconciled, not
// silently overwritten or adopted as successful native preparation.
for (const [path, bytes] of [[BASIS, basisBytes], [GUARDS, guardBytes], [AUTHORITY, authorityBytes]]) {
  assertCurrency();
  writeFileSync(join(ROOT, path), bytes, { flag: 'wx', mode: 0o444 });
}
assertCurrency();
console.log(JSON.stringify({ run: RUN, created: [BASIS, GUARDS, AUTHORITY], claims: claims.length,
  base_owned_records: baseOwned.length, target_owned_records: targetOwned.length,
  policy_row_for_root_review_only: { path: LEDGER, authority: AUTHORITY, sha256: sha(authorityBytes) },
  retained_additional_paths: policy.additional_paths.length,
  next: 'Root reviews/binds only this shared_fragments row before granting final Step-5 battery permission. No policy, control, gate, index, ledger or commit was changed.' }, null, 2));
