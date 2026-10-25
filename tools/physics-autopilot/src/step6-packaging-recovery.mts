// Native recovery for an authenticated pre-ref packaging refusal. No old pass is adopted.
import { appendFileSync, existsSync, lstatSync, mkdirSync, readFileSync, readdirSync, renameSync, unlinkSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { dirname, join, relative, resolve } from 'node:path';
import { realpathSync } from 'node:fs';
import { acquireControllerLock } from './controller-lock.mts';
import { activeNativeWriters } from '../../autopilot/src/workflow-prefix-migration.mts';
import { sourceState, registerStateDirectory, statFingerprint } from '../../step6-prepared.mjs';
import { runScope } from '../../step6-lib.mjs';

const hash = (value: string | Buffer) => createHash('sha256').update(value).digest('hex');
const encode = (value: any) => JSON.stringify(value, null, 2) + '\n';
const fail = (message: string): never => { throw Error('recover-step6-packaging: ' + message); };
const VALIDATION = '6-final-validation-v3', FINAL = '6-finalize-v3';
const ALLOWED = new Set(['tools/run-commit-scope.mjs', 'tools/run-commit-operational-context.test.mjs',
  'tools/STEP6-REBUILD.md', 'tools/physics-autopilot/src/step6-packaging-recovery.mts',
  'tools/physics-autopilot/bin/autopilot.mts', 'tools/physics-autopilot/test/step6-packaging-recovery.test.mts', 'physics/WORKFLOW.md']);
export type PackagingOptions = { repo: string; run: string; stateDir: string; dispatchDir: string; authorizationPath: string };
function bytes(path: string) {
  const st = lstatSync(path); if (!st.isFile() || st.isSymbolicLink()) fail('nonregular carrier: ' + path);
  return readFileSync(path);
}
const json = (path: string) => JSON.parse(bytes(path).toString());
function git(repo: string, ...args: string[]) {
  return execFileSync('git', ['--no-replace-objects', ...args], { cwd: repo, maxBuffer: 256 * 1024 * 1024 });
}
const textGit = (repo: string, ...args: string[]) => git(repo, ...args).toString().trim();
const date = (value: any) => { const n = Date.parse(value); if (!Number.isFinite(n)) fail('invalid native chronology'); return n; };

/** Pure checks also used by operational fixtures; production always supplies disk/native facts. */
export function verifyPackagingHistory(state: any, prepared: any, events: any[], run: string) {
  if (state.version !== 1 || state.run !== run || state.workflowRevision !== 'physics-six-step-v1-compact'
    || !state.paused || state.finishedAt || state.stage !== FINAL || state.stages?.[FINAL]?.doneAt)
    fail('requires paused unfinished native physics compact v3 finalization');
  if (Object.values<any>(state.dispatches ?? {}).some(d => d.startedAt && !d.endedAt)) fail('unresolved native dispatch');
  const prior = state.stages?.[VALIDATION], entered = date(state.stages?.[FINAL]?.enteredAt);
  if (!prior?.doneAt || !prior.gatesPassedAt || prior.skipped || prior.routedTo || prior.routedOutcome === 'failed'
    || date(prior.doneAt) < date(prior.gatesPassedAt) || date(prior.doneAt) > entered) fail('missing actual completed final validation');
  if (prepared.version !== 1 || prepared.run !== run || prepared.physics !== true
    || prepared.kind !== 'actual-step6-format-metadata-preparation' || prepared.validationStage !== VALIDATION
    || prepared.mathematical_review !== false || prepared.gate_pass_created !== false
    || prepared.gates?.length !== 29 || prepared.gates.some((g: any) => g.required !== true)
    || prepared.gateInventorySha256 !== hash(JSON.stringify(prepared.gates))
    || prepared.source?.sha256 !== hash(JSON.stringify(prepared.source?.tree))) fail('invalid original preparation seal/inventory');
  let start = -1;
  for (let i = 0; i < events.length; i++) if (events[i].type === 'gates'
    && events[i].message === `${VALIDATION}: running 29 gate(s)` && date(events[i].at) < entered) start = i;
  if (start < 0 || date(events[start].at) < date(prepared.completedAt)) fail('missing genuine prepared battery');
  const tail = events.slice(start + 1).filter(e => date(e.at) < entered);
  const results = tail.filter(e => e.type === 'gate');
  const green = tail.findIndex(e => e.type === 'gates-ok' && e.message === `${VALIDATION}: all gates green`);
  const clear = tail.findIndex(e => e.type === 'stage-clear' && e.message?.startsWith(`${VALIDATION} cleared —`));
  if (green < 0 || clear <= green || results.length !== 29 || tail.some(e => e.type === 'gate-advisory'
    || e.type === 'blocked' && e.stage === VALIDATION)
    || results.some((e, i) => e.id !== prepared.gates[i].id || e.ok !== true || e.skipped)
    || tail.slice(0, green).filter(e => e.type === 'gate').length !== 29
    || date(tail[green].at) > date(prior.gatesPassedAt) || date(tail[clear].at) > date(prior.doneAt))
    fail('preceding 29-gate battery incomplete, failed or skipped');
  const prep = state.dispatches?.[`${VALIDATION}:step6-prepare-final-v3`];
  if (!prep?.endedAt || prep.lastExitOk !== true) fail('missing successful native preparation dispatch');
  const failures: any[] = []; let pending: any = null;
  const exact = `tool/step6-finalize-v3 exit=1 :: physics-step6-finalize: closeout: invalid native final-receipt inventory: research/${run}-dispatch/tool-step6-finalize-v3.result.json`;
  for (const e of events.filter(e => date(e.at) >= entered)) {
    if (e.type === 'dispatch' && e.stage === FINAL && e.role === 'tool' && e.label === 'step6-finalize-v3') {
      if (pending) fail('unresolved finalizer event'); pending = e;
    }
    if (e.key === `${FINAL}:step6-finalize-v3` && ['dispatch-failed', 'dispatch-done'].includes(e.type)) {
      if (!pending || e.type !== 'dispatch-failed' || e.ok !== false || e.message !== exact) fail('not the precise pre-ref packaging refusal');
      failures.push({ dispatch: pending, failure: e }); pending = null;
    }
  }
  const lane = state.dispatches?.[`${FINAL}:step6-finalize-v3`], last = failures.at(-1);
  if (pending || !last || lane?.lastExitOk !== false || !lane.endedAt
    || date(last.dispatch.at) < date(lane.startedAt) || date(last.dispatch.at) > date(lane.endedAt)
    || date(last.failure.at) < date(lane.endedAt)) fail('failed finalizer history does not match drained lane');
  return { gate_results_sha256: hash(JSON.stringify(results)), failed_attempts: failures };
}

export function verifyPackagingSource(oldTree: Record<string, string>, currentTree: Record<string, string>, changes: any[]) {
  const allowed = new Map(changes.map(row => [row.path === 'physics/WORKFLOW.md' ? 'WORKFLOW.md' : row.path, row]));
  const changed = [...new Set([...Object.keys(oldTree), ...Object.keys(currentTree)])].filter(p => oldTree[p] !== currentTree[p]).sort();
  if (changed.length !== allowed.size) fail('source delta differs from exact packaging allowlist');
  for (const path of changed) {
    const row = allowed.get(path);
    if (!row || (oldTree[path] ?? null) !== row.before_seal || currentTree[path] !== row.after_seal)
      fail('scientific/context/unlisted source changed: ' + path);
  }
  return changed;
}

export function verifyCommittedPackaging(repo: string, auth: any) {
  if (!/^[a-f0-9]{40,64}$/.test(auth.passed_head ?? '') || !/^[a-f0-9]{40,64}$/.test(auth.tooling_head ?? '')
    || auth.passed_head === auth.tooling_head || textGit(repo, 'rev-parse', 'HEAD') !== auth.tooling_head
    || textGit(repo, 'branch', '--show-current') !== 'main') fail('requires exact committed tooling successor on main');
  git(repo, 'merge-base', '--is-ancestor', auth.passed_head, auth.tooling_head);
  const commits = textGit(repo, 'rev-list', '--reverse', `${auth.passed_head}..${auth.tooling_head}`).split('\n').filter(Boolean);
  if (!Array.isArray(auth.packaging_changes) || !auth.packaging_changes.length) fail('explicit packaging changes required');
  const names = auth.packaging_changes.map((r: any) => r.path);
  if (new Set(names).size !== names.length || names.some((p: any) => !ALLOWED.has(p))) fail('unapproved packaging path');
  for (const commit of commits) {
    const touched = textGit(repo, 'diff-tree', '--no-commit-id', '--name-only', '-r', commit).split('\n').filter(Boolean);
    if (!touched.length || touched.some(p => !names.includes(p)) || textGit(repo, 'rev-list', '--parents', '-n', '1', commit).split(' ').length !== 2)
      fail('intervening non-packaging/merge commit; landed-content recovery required');
  }
  for (const row of auth.packaging_changes) {
    if (!/^[a-f0-9]{64}$/.test(row.after_seal ?? '') || row.before_seal !== null && !/^[a-f0-9]{64}$/.test(row.before_seal ?? '')) fail('invalid packaging seal');
    const old = git(repo, 'ls-tree', auth.passed_head, '--', row.path).toString().trim();
    const current = git(repo, 'ls-tree', auth.tooling_head, '--', row.path).toString().trim();
    if (!current.startsWith('100644 blob ')) fail('packaging successor must be an ordinary committed file');
    const after = git(repo, 'show', `${auth.tooling_head}:${row.path}`);
    if (hash(Buffer.concat([Buffer.from('file\0'), after])) !== row.after_seal
      || !after.equals(bytes(join(repo, row.path))) || !git(repo, 'diff', '--cached', '--', row.path).equals(Buffer.alloc(0)))
      fail('packaging working/index bytes differ from committed successor');
    if (row.before_seal === null ? old !== '' : !old.startsWith('100644 blob ')
      || hash(Buffer.concat([Buffer.from('file\0'), git(repo, 'show', `${auth.passed_head}:${row.path}`)])) !== row.before_seal)
      fail('passed HEAD blob does not match original prepared packaging seal');
  }
  return commits;
}

export function packagingRecoveryState(state: any) {
  const after = structuredClone(state), stages = new Set([VALIDATION, FINAL]);
  for (const id of stages) { delete after.stages[id]; delete after.stageRounds?.[id]; delete after.stageFailures?.[id]; }
  for (const [key, value] of Object.entries<any>(after.dispatches ?? {})) if (stages.has(value.stage)) delete after.dispatches[key];
  for (const [key, value] of Object.entries<any>(after.gateAttempts ?? {})) if (stages.has(value.stage)) delete after.gateAttempts[key];
  after.blockers = (after.blockers ?? []).filter((row: any) => !stages.has(row.stage));
  after.nativeRefreshes = (after.nativeRefreshes ?? []).filter((row: any) => !stages.has(row.stage));
  after.stage = VALIDATION; after.paused = true; after.finishedAt = null;
  return after;
}

export function inspectStep6PackagingRecovery(o: PackagingOptions, locked = false) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(o.run) || !resolve(o.stateDir).startsWith(resolve(o.repo) + '/')
    || !resolve(o.dispatchDir).startsWith(resolve(o.repo) + '/') || !resolve(o.authorizationPath).startsWith(resolve(o.stateDir) + '/')) fail('unsafe recovery paths');
  const auth = json(o.authorizationPath);
  if ([o.repo, o.stateDir, o.dispatchDir, dirname(o.authorizationPath)].some(p => realpathSync(p) !== resolve(p))) fail('symlinked recovery workspace');
  if (auth.version !== 1 || auth.kind !== 'physics-v3-packaging-recovery' || auth.run !== o.run || auth.authorized_by !== 'owner'
    || typeof auth.authorization !== 'string' || auth.authorization.trim().length < 40) fail('explicit owner packaging authorization required');
  if (existsSync(join(o.stateDir, 'controller.lock')) && !locked) {
    const owner = json(join(o.stateDir, 'controller.lock'));
    try { process.kill(owner.pid, 0); fail('controller alive'); } catch (e: any) { if (e.code !== 'ESRCH') throw e; }
  }
  const writers = activeNativeWriters(o.repo, o.run).filter(pid => {
    if (pid !== process.ppid) return true;
    const command = readFileSync(`/proc/${pid}/cmdline`, 'utf8');
    return !(command.includes('tsx-run.mjs') && command.includes('recover-step6-packaging'));
  });
  if (writers.length) fail('active native writer: ' + writers.join(','));
  for (const name of ['frontier-append.lock', 'step6-packaging-recovery.lock']) if (existsSync(join(o.stateDir, name))) fail('unresolved transaction lock');
  const root = textGit(o.repo, 'rev-parse', '--show-toplevel');
  if (existsSync(textGit(root, 'rev-parse', '--path-format=absolute', '--git-path', 'index.lock'))) fail('index lock exists');
  if (existsSync(join(o.stateDir, 'control.json')) && !['stop', 'pause', 'pause-at'].includes(json(join(o.stateDir, 'control.json')).command)) fail('pending mutating control');
  if (readdirSync(o.dispatchDir).some(n => /^tool-step6-finalize-v3(?:\.attempt-\d+)?\.result\.json$/.test(n))) fail('final receipt exists; transaction recovery required');
  const stateBytes = bytes(join(o.stateDir, 'state.json')), state = JSON.parse(stateBytes.toString());
  const events = bytes(join(o.stateDir, 'events.jsonl')), rows = events.toString().trim().split('\n').map(s => JSON.parse(s));
  const preparedBytes = bytes(join(o.stateDir, 'step6-prepared.json')), prepared = JSON.parse(preparedBytes.toString());
  const history = verifyPackagingHistory(state, prepared, rows, o.run);
  const scope = runScope(o.run, o.repo);
  if (JSON.stringify(scope.items.map((row: any) => row.id).sort()) !== JSON.stringify(prepared.metadata?.map((row: any) => row.id).sort())
    || JSON.stringify(scope.pages.map((p: any) => p.id).sort()) !== JSON.stringify([...new Set(prepared.metadata.map((row: any) => row.page))].sort()))
    fail('original preparation frontier differs from current native frontier');
  if (JSON.stringify(auth.failed_attempts) !== JSON.stringify(history.failed_attempts)) fail('owner authorization must bind exact failed native event inventory');
  const commits = verifyCommittedPackaging(root, auth);
  registerStateDirectory(o.repo, o.run, { physics: true, stateDir: o.stateDir });
  const physical = [...prepared.source.physicalPaths, ...auth.packaging_changes.map((row: any) => relative(o.repo, join(root, row.path)))];
  const beforeStat = statFingerprint(o.repo, physical);
  const current = sourceState(o.repo, o.run, { physics: true });
  if (statFingerprint(o.repo, physical) !== beforeStat) fail('source changed during recovery inspection');
  const changed = verifyPackagingSource(prepared.source.tree, current.tree, auth.packaging_changes);
  const retire = [join(o.stateDir, 'step6-prepared.json'), join(o.stateDir, 'step6-mechanical-preparation.json'),
    join(o.dispatchDir, 'tool-step6-prepare-final-v3.result.json')].filter(existsSync);
  const guards = { state_sha256: hash(stateBytes), events_sha256: hash(events), preparation_sha256: hash(preparedBytes),
    current_source_sha256: current.sha256, source_stat_fingerprint: statFingerprint(o.repo, current.physicalPaths),
    git_head: textGit(root, 'rev-parse', 'HEAD'), git_index_sha256: hash(bytes(textGit(root, 'rev-parse', '--path-format=absolute', '--git-path', 'index'))),
    authorization_basis_sha256: hash(JSON.stringify({ ...auth, guards: null })), history, commits, changed,
    frontier: { items: scope.items.length, pages: scope.pages.length },
    retired: Object.fromEntries(retire.map(p => [p, hash(bytes(p))])) };
  return { guards, state, stateBytes, events, preparedBytes, current, root, auth, retire };
}

export function recoverStep6Packaging(o: PackagingOptions) {
  const release = acquireControllerLock(o.stateDir, o.run);
  try {
    const live = inspectStep6PackagingRecovery(o, true);
    if (JSON.stringify(live.auth.guards) !== JSON.stringify(live.guards)) fail('sealed guards changed; inspect again');
    const archive = join(o.stateDir, 'packaging-recovery-' + hash(encode(live.auth)).slice(0, 24));
    if (existsSync(archive)) fail('existing recovery archive; inspect interrupted recovery');
    mkdirSync(archive);
    const archived: Record<string, string> = {};
    const save = (name: string, value: Buffer | string) => { writeFileSync(join(archive, name), value, { flag: 'wx', mode: 0o444 }); archived[name] = hash(value); };
    save('state.snapshot', live.stateBytes); save('events.snapshot', live.events); save('preparation.snapshot', live.preparedBytes);
    save('authorization.record', bytes(o.authorizationPath));
    for (const [i, file] of live.retire.entries()) save(`retired-${i}.record`, bytes(file));
    const after = packagingRecoveryState(live.state);
    const receipt = { version: 1, kind: 'native-physics-v3-packaging-recovery', run: o.run, at: new Date().toISOString(),
      archive: relative(o.repo, archive), guards: live.guards, archive_sha256: { ...archived }, coverage_created: false,
      scientific_authority_changed: false, original_passes_adopted: false, fresh_preparation_and_all_29_gates_required: true };
    const receiptBytes = encode(receipt);
    save('receipt.record', receiptBytes); after.step6PackagingRecovery = { archive: relative(o.repo, archive), receipt_sha256: hash(receiptBytes) };
    const next = encode(after); save('state.after.snapshot', next);
    // Recheck the inspected physical tree and all mutable bases immediately before swapping state.
    if (statFingerprint(o.repo, live.current.physicalPaths) !== live.guards.source_stat_fingerprint
      || hash(bytes(join(o.stateDir, 'state.json'))) !== live.guards.state_sha256
      || hash(bytes(join(o.stateDir, 'events.jsonl'))) !== live.guards.events_sha256
      || textGit(live.root, 'rev-parse', 'HEAD') !== live.guards.git_head
      || hash(bytes(textGit(live.root, 'rev-parse', '--path-format=absolute', '--git-path', 'index'))) !== live.guards.git_index_sha256
      || Object.entries(live.guards.retired).some(([p, digest]) => hash(bytes(p)) !== digest)) fail('recovery input race; archive retained');
    const temporary = join(o.stateDir, 'state.packaging-recovery.tmp'); writeFileSync(temporary, next, { flag: 'wx' });
    // Archive first, then retire only active preparation coverage; original snapshots/events remain immutable.
    for (const file of live.retire) unlinkSync(file);
    renameSync(temporary, join(o.stateDir, 'state.json'));
    appendFileSync(join(o.stateDir, 'events.jsonl'), JSON.stringify({ type: 'step6-packaging-recovery', at: receipt.at,
      run: o.run, archive: receipt.archive, receipt_sha256: hash(receiptBytes), coverage_created: false }) + '\n');
    return { archive: receipt.archive, stage: after.stage, paused: true, fresh_gates_required: 29 };
  } finally { release(); }
}
