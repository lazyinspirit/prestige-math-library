// Explicit native transition; historical execution is archived, never coverage.
import { existsSync, lstatSync, mkdirSync, readFileSync, readdirSync, writeFileSync, renameSync, appendFileSync, unlinkSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { acquireControllerLock } from './controller-lock.mts';
import { activeNativeWriters } from './workflow-prefix-migration.mts';
import { sourceState, assertFreshStep6State } from '../../step6-prepared.mjs';
const hash = (value: string | Buffer) => createHash('sha256').update(value).digest('hex');
const body = (value: any) => JSON.stringify(value, null, 2) + '\n';
const fail = (message: string): never => { throw Error('cutover-step6: ' + message); };
const old = (id: string) => /^6-/.test(id);
const current = ['6-prepare-v3', '6-pathway-author-v3', '6-final-validation-v3', '6-finalize-v3'];
type Options = { repo: string; run: string; stateDir: string; dispatchDir: string; authorizationPath?: string; refresh?: boolean };
function bytes(path: string) {
  if (!lstatSync(path).isFile() || lstatSync(path).isSymbolicLink()) fail('nonregular input: ' + path);
  return readFileSync(path);
}
function writers(o: Options) {
  return activeNativeWriters(o.repo, o.run).filter(pid => {
    if (pid !== process.ppid) return true;
    const args = readFileSync(`/proc/${pid}/cmdline`, 'utf8').split('\0');
    return !(args.some(arg => /(?:^|\/)tsx-run\.mjs$/.test(arg))
      && args.some(arg => /(?:^|\/)autopilot\.mts$/.test(arg)) && args.includes('cutover-step6'));
  });
}
function stopped(o: Options, state: any, locked = false) {
  const held = state.paused === true || (o.refresh && existsSync(join(o.stateDir, 'stopped')));
  if (state.run !== o.run || state.version !== 1 || !held || state.finishedAt
    || !old(state.stage ?? '') || (!o.refresh && (current.includes(state.stage) || state.step6Cutover)))
    fail('requires paused unfinished historical Step-6 state');
  if (state.workflowRevision !== 'six-step-v1-construction-scope') fail('unsupported workflow revision');
  if (!o.refresh && Object.keys(state.stages ?? {}).some(id => current.includes(id))) fail('v3 execution already exists');
  if (o.refresh) {
    if (state.stage !== '6-finalize-v3' || !state.step6Cutover
      || !state.stages?.['6-final-validation-v3']?.gatesPassedAt) fail('refresh requires an unfinished native v3 finalization');
    assertFreshStep6State({ repo: o.repo, run: o.run, stateDir: o.stateDir });
    const previous = JSON.parse(bytes(join(o.repo, state.step6Cutover.receipt)).toString());
    const head = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: o.repo, encoding: 'utf8' }).trim();
    if (head !== previous.guards.head) fail('HEAD moved since cutover; commit recovery must be handled separately');
    const final = join(o.dispatchDir, 'tool-step6-finalize-v3.result.json');
    if (existsSync(final)) {
      const result = JSON.parse(bytes(final).toString());
      if (result.ok === true || result.transaction_pending || result.closeout_scope || result.commit)
        fail('final transaction may have landed; inspect commit recovery separately');
    }
  }
  if (Object.values<any>(state.dispatches ?? {}).some(d => d.startedAt && !d.endedAt)) fail('unresolved native dispatch');
  if (writers(o).length) fail('active native writer');
  const lock = join(o.stateDir, 'controller.lock');
  if (!locked && existsSync(lock)) {
    const owner = JSON.parse(bytes(lock).toString());
    if (!Number.isInteger(owner.pid) || owner.pid <= 0 || owner.run !== o.run) fail('invalid controller lock');
    try { process.kill(owner.pid, 0); fail('controller alive'); }
    catch (error: any) { if (error.code !== 'ESRCH') throw error; }
  }
  for (const name of ['frontier-append.lock', 'step6-cutover.lock'])
    if (existsSync(join(o.stateDir, name))) fail('unresolved transaction: ' + name);
  const control = join(o.stateDir, 'control.json');
  if (existsSync(control) && !['stop', 'pause', 'pause-at'].includes(JSON.parse(bytes(control).toString()).command))
    fail('pending mutating control');
  // The genuine Step-5 terminal battery remains required. Waived snapshots do
  // not acquire fictitious doneAt stamps through this transition.
  if (!state.stages?.['5.10-gate']?.gatesPassedAt || !state.stages?.['5-freeze']?.enteredAt)
    fail('missing completed Step-5 terminal gate/freeze entry');
}
function historical(o: Options, state: any) {
  const files = new Set<string>();
  for (const name of readdirSync(join(o.repo, 'research'))) {
    if (join(o.repo, 'research', name) !== resolve(o.authorizationPath ?? join(o.repo, 'research', `${o.run}-step6-cutover-authorization.json`)) && name.startsWith(o.run + '-') && /(?:step6|pathway|publication-readiness|judge-stamps|report-baseline)/.test(name)
      && lstatSync(join(o.repo, 'research', name)).isFile()) files.add('research/' + name);
  }
  const dispatchNames = existsSync(o.dispatchDir) ? readdirSync(o.dispatchDir) : [];
  for (const d of Object.values<any>(state.dispatches ?? {}).filter(d => old(d.stage))) {
    const prefix = `${d.role}-${d.label}`;
    for (const name of dispatchNames) if (name.startsWith(prefix + '.')) files.add(relative(o.repo, join(o.dispatchDir, name)));
  }
  return Object.fromEntries([...files].sort().map(path => [path, hash(bytes(join(o.repo, path)))]));
}
export function inspectStep6Cutover(o: Options, locked = false) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(o.run)) fail('unsafe run');
  if (!resolve(o.stateDir).startsWith(resolve(o.repo) + '/') || !resolve(o.dispatchDir).startsWith(resolve(o.repo) + '/')) fail('state/dispatch must remain in workspace');
  const stateBytes = bytes(join(o.stateDir, 'state.json')), state = JSON.parse(stateBytes.toString());
  stopped(o, state, locked);
  const events = bytes(join(o.stateDir, 'events.jsonl'));
  events.toString().split('\n').filter(Boolean).forEach(line => JSON.parse(line));
  const prefix = Object.fromEntries(Object.entries(state.stages).filter(([id]) => !old(id)));
  const source = sourceState(o.repo, o.run, { includeDerived: false }).tree;
  delete source[relative(o.repo, resolve(o.authorizationPath ?? join(o.repo, 'research', `${o.run}-step6-cutover-authorization.json`)))];
  const guards = { run: o.run, refresh: o.refresh === true, state_sha256: hash(stateBytes), events_sha256: hash(events),
    head: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: o.repo, encoding: 'utf8' }).trim(),
    stage_table_sha256: hash(bytes(join(o.repo, 'tools/autopilot/stages/mathlib.mts'))),
    source_sha256: hash(JSON.stringify(source)),
    prefix_stages_sha256: hash(JSON.stringify(prefix)), historical_files: historical(o, state),
    reset_stages: Object.keys(state.stages).filter(old), target_stages: current };
  return { guards, state, stateBytes, events };
}
export function cutoverStep6(o: Options) {
  if (!o.authorizationPath) fail('owner authorization required');
  const authPath = relative(o.repo, resolve(o.authorizationPath));
  if (!authPath.startsWith(`research/${o.run}-`)) fail('authorization must belong to run research');
  const authBytes = bytes(o.authorizationPath), auth = JSON.parse(authBytes.toString());
  if (auth.version !== 1 || auth.run !== o.run || auth.authorized_by !== 'owner'
    || auth.kind !== (o.refresh ? 'current-input-step6-v3-refresh' : 'current-input-step6-v3-cutover') || typeof auth.authorization !== 'string' || auth.authorization.trim().length < 20)
    fail('explicit run-local owner authorization required');
  const release = acquireControllerLock(o.stateDir, o.run);
  try {
    const live = inspectStep6Cutover(o, true);
    if (JSON.stringify(auth.guards) !== JSON.stringify(live.guards)) fail('sealed guards changed; inspect again');
    const archive = relative(o.repo, join(o.stateDir, `step6-cutover-${hash(authBytes).slice(0, 24)}`));
    const root = join(o.repo, archive);
    if (existsSync(root)) fail('existing/interrupted archive; preserve and inspect');
    mkdirSync(root);
    const archived: Record<string, string> = {};
    const save = (path: string, value: Buffer | string) => {
      const target = join(root, path); mkdirSync(resolve(target, '..'), { recursive: true });
      writeFileSync(target, value, { flag: 'wx', mode: 0o444 }); archived[path] = hash(value);
    };
    save('state.json', live.stateBytes); save('events.jsonl', live.events); save('authorization.json', authBytes);
    save('stage-table.mts', bytes(join(o.repo, 'tools/autopilot/stages/mathlib.mts')));
    for (const name of readdirSync(o.stateDir)) {
      if (/^(?:control|owner-gate[^/]*|step6-prepared|step6-mechanical-preparation)\.json$/.test(name)) save('runtime/' + name, bytes(join(o.stateDir, name)));
    }
    for (const [path, digest] of Object.entries(live.guards.historical_files)) {
      const value = bytes(join(o.repo, path)); if (hash(value) !== digest) fail('historical carrier changed: ' + path);
      save('historical/' + path, value);
    }
    const after = structuredClone(live.state);
    for (const id of Object.keys(after.stages)) if (old(id)) delete after.stages[id];
    for (const [id, row] of Object.entries<any>(after.dispatches ?? {})) if (old(row.stage)) delete after.dispatches[id];
    for (const [id, row] of Object.entries<any>(after.gateAttempts ?? {})) if (old(row.stage)) delete after.gateAttempts[id];
    for (const field of ['stageRounds', 'stageFailures'])
      for (const id of Object.keys(after[field] ?? {})) if (old(id)) delete after[field][id];
    after.blockers = (after.blockers ?? []).filter((row: any) => !old(row.stage));
    after.nativeRefreshes = (after.nativeRefreshes ?? []).filter((row: any) => !old(row.stage ?? ''));
    after.stage = current[0]; after.paused = true; after.finishedAt = null; after.pauseAfter = current.at(-1);
    const receipt = { version: 1, kind: 'native-current-input-step6-v3-cutover', run: o.run,
      at: new Date().toISOString(), archive, guards: live.guards, archive_sha256: archived,
      coverage_created: false, earlier_stages_changed: false, previous_cutover: live.state.step6Cutover ?? null,
      refresh: o.refresh === true };
    const receiptPath = `research/${o.run}-step6-cutover-${hash(authBytes).slice(0, 24)}.json`, receiptBytes = body(receipt);
    save('receipt.json', receiptBytes);
    after.step6Cutover = { receipt: receiptPath, sha256: hash(receiptBytes) };
    const next = body(after); save('state.after.json', next);
    // Recompute all sealed inputs immediately before the one atomic state swap.
    if (JSON.stringify(inspectStep6Cutover(o, true).guards) !== JSON.stringify(live.guards)) fail('input race; archive retained');
    writeFileSync(join(o.repo, receiptPath), receiptBytes, { flag: 'wx', mode: 0o444 });
    const temp = join(o.stateDir, 'state.step6-cutover.tmp'); writeFileSync(temp, next, { flag: 'wx' });
    // Retire actual successful v3 results, not just cached state stamps. Their
    // immutable copies above retain the real coverage; fresh labels cannot adopt it.
    if (o.refresh) for (const path of Object.keys(live.guards.historical_files)) {
      if (!path.startsWith(relative(o.repo, o.dispatchDir) + '/') || !path.endsWith('.result.json')) continue;
      if (hash(bytes(join(o.repo, path))) !== live.guards.historical_files[path]) fail('result race before refresh');
      unlinkSync(join(o.repo, path));
    }
    renameSync(temp, join(o.stateDir, 'state.json'));
    appendFileSync(join(o.stateDir, 'events.jsonl'), body({ type: 'step6-cutover', at: receipt.at,
      run: o.run, receipt: receiptPath, coverage_created: false }).replace(/\n\s*/g, '') + '\n');
    return { receipt: receiptPath, archive, stage: after.stage };
  } finally { release(); }
}
