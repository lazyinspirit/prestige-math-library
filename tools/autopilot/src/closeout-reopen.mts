// Guarded owner recovery of a local legacy whole-tree closeout. No audit coverage
// is created: the native readiness/report/commit suffix must execute again.
import { existsSync, mkdirSync, readFileSync, readdirSync, lstatSync, readlinkSync,
  copyFileSync, writeFileSync, renameSync, unlinkSync, appendFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { execFileSync, spawnSync } from 'node:child_process';
import { join, resolve, relative } from 'node:path';

export const CLOSEOUT_SUFFIX = ['6-readiness-v2', '6-evidence-v2', '6-report-baseline-v2',
  '6-owner-report-v2', '6-owner-report-render-v2', '6-close-v2'] as const;
const sha = (x: string | Buffer) => createHash('sha256').update(x).digest('hex');
const digest = (x: any) => sha(JSON.stringify(x));
const fail = (s: string): never => { throw Error('reopen-closeout: ' + s); };
const parsed = (p: string) => JSON.parse(readFileSync(p, 'utf8'));
const suffix = (stage: string) => CLOSEOUT_SUFFIX.includes(stage as any);
type Options = { repo: string; run: string; stateDir: string; dispatchDir: string; authorizationPath: string };

function git(repo: string, args: string[]): Buffer {
  return execFileSync('git', ['--no-replace-objects', '-c', 'core.fsmonitor=false', ...args],
    { cwd: repo, maxBuffer: 256 * 1024 * 1024 });
}
const textGit = (repo: string, args: string[]) => git(repo, args).toString('utf8').trim();
function physicalFile(repo: string, p: string) {
  const abs = resolve(repo, p);
  if (!abs.startsWith(resolve(repo) + '/') || p.includes('\0')) fail('unsafe path ' + p);
  let cursor = resolve(repo);
  for (const part of relative(repo, abs).split('/')) {
    cursor = join(cursor, part);
    if (lstatSync(cursor).isSymbolicLink()) fail('symlink in archival input ' + p);
  }
  if (!lstatSync(abs).isFile()) fail('non-file archival input ' + p);
  return abs;
}
function stopped(state: any, stateDir: string) {
  if (state.paused !== true) fail('run must be paused');
  const lock = join(stateDir, 'controller.lock');
  if (existsSync(lock)) {
    const pid = parsed(lock).pid;
    if (!Number.isInteger(pid) || pid <= 0) fail('invalid controller lock');
    try { process.kill(pid, 0); fail('controller is still alive'); }
    catch (e: any) { if (e?.code !== 'ESRCH') throw e; }
  }
  if (Object.values<any>(state.dispatches ?? {}).some(d => d.startedAt && !d.endedAt))
    fail('dispatch still active or unresolved');
  if (!state.stages?.['6-close-v2']?.doneAt) fail('terminal closeout has not drained and completed');
}
function working(repo: string, authorizationPath: string, archiveRoot: string) {
  const rows: any[] = [];
  const excluded = new Set(['.git', 'node_modules', '.autopilot', 'physics/.physics-autopilot']);
  const walk = (dir: string, prefix = '') => {
    for (const name of readdirSync(dir).sort()) {
      const p = prefix ? prefix + '/' + name : name;
      if (excluded.has(p) || p === authorizationPath || p === archiveRoot) continue;
      const abs = join(dir, name), st = lstatSync(abs);
      if (st.isDirectory()) walk(abs, p);
      else if (st.isSymbolicLink()) rows.push({ path: p, mode: st.mode & 0o7777,
        kind: 'symlink', sha256: sha(Buffer.from(readlinkSync(abs))) });
      else if (st.isFile()) rows.push({ path: p, mode: st.mode & 0o7777, kind: 'file', sha256: sha(readFileSync(abs)) });
      else fail('unsupported working entry ' + p);
    }
  };
  walk(repo);
  return rows;
}

// Read-only guard inventory. The owner seals this output in the authorization;
// it is not a gate, a state transition, or historical staging reconstruction.
export function inspectCloseoutReopen(o: Options) {
  const { repo, run, stateDir, dispatchDir } = o;
  if (!/^[a-zA-Z0-9][a-zA-Z0-9_-]*$/.test(run)) fail('unsafe run');
  const authorizationPath = relative(repo, resolve(o.authorizationPath));
  if (!authorizationPath.startsWith('research/' + run + '-')) fail('authorization must belong to run research');
  const statePath = join(stateDir, 'state.json'), state = parsed(statePath);
  if (state.run !== run) fail('state/run mismatch');
  stopped(state, stateDir);
  if (textGit(repo, ['symbolic-ref', '--short', 'HEAD']) !== 'main') fail('requires main');
  for (const key of ['GIT_DIR', 'GIT_WORK_TREE', 'GIT_INDEX_FILE', 'GIT_COMMON_DIR',
    'GIT_OBJECT_DIRECTORY', 'GIT_ALTERNATE_OBJECT_DIRECTORIES', 'GIT_NAMESPACE'])
    if (process.env[key]) fail('redirected Git environment');
  for (const name of ['MERGE_HEAD', 'CHERRY_PICK_HEAD', 'REVERT_HEAD', 'rebase-merge', 'rebase-apply', 'index.lock'])
    if (existsSync(join(repo, textGit(repo, ['rev-parse', '--git-path', name])))) fail('active Git operation ' + name);
  const configuredHooks = spawnSync('git', ['config', '--get', 'core.hooksPath'], { cwd: repo, encoding: 'utf8' });
  if (configuredHooks.error || ![0, 1].includes(configuredHooks.status ?? -1)) fail('cannot read hooks configuration');
  const hooks = configuredHooks.status === 0 ? configuredHooks.stdout.trim() : '';
  const hookRoot = hooks ? resolve(repo, hooks) : resolve(repo, textGit(repo, ['rev-parse', '--git-path', 'hooks']));
  if (existsSync(join(hookRoot, 'reference-transaction')) && (lstatSync(join(hookRoot, 'reference-transaction')).mode & 0o111))
    fail('active reference-transaction hook');
  const policy = 'research/' + run + '-closeout-scope.json';
  physicalFile(repo, policy);
  const policyValue = parsed(join(repo, policy));
  if (policyValue.run !== run || policyValue.version !== 1 || policyValue.authorized_by !== 'owner') fail('owner scope policy required');
  const head = textGit(repo, ['rev-parse', 'HEAD']);
  const receiptCommit = head, contentCommit = textGit(repo, ['rev-parse', head + '^']);
  const parent = textGit(repo, ['rev-parse', contentCommit + '^']);
  for (const commit of [contentCommit, receiptCommit]) {
    if (textGit(repo, ['rev-list', '--parents', '-n', '1', commit]).split(' ').length !== 2)
      fail('closeout must consist of two single-parent commits');
    if (textGit(repo, ['show', '-s', '--format=%s', commit]) !== `chore(${run}): engine close-out — commit the run's working tree`)
      fail('commit is not the exact legacy engine closeout');
    if (textGit(repo, ['for-each-ref', '--contains', commit, '--format=%(refname)', 'refs/remotes']))
      fail('legacy commit is reachable from a remote ref');
  }
  const receipt = 'research/' + run + '-dispatch/tool-close-step6-v2.result.json';
  const final = parsed(physicalFile(repo, receipt));
  if (final.run !== run || final.written_by !== 'run-commit' || final.ok !== true || final.closeout_scope)
    fail('requires exact legacy final receipt');
  if (!git(repo, ['show', receiptCommit + ':' + receipt]).equals(readFileSync(join(repo, receipt))))
    fail('legacy receipt differs from committed blob');
  if (textGit(repo, ['diff-tree', '--no-commit-id', '--name-only', '-r', receiptCommit]) !== receipt)
    fail('receipt commit includes another path');
  const paths = new Set<string>(['research/' + run + '-publication-readiness.json',
    'research/' + run + '-proof-layout.json', 'research/' + run + '-step6-evidence.json',
    'research/' + run + '-step6-report-integrity.json', 'research/' + run + '-step6-report.response.json',
    'research/' + run + '-step6-report.md']);
  for (const [key, record] of Object.entries<any>(state.dispatches ?? {})) {
    if (!suffix(key.split(':')[0])) continue;
    const prefix = `${record.role}-${record.label}`;
    for (const name of readdirSync(dispatchDir)) if (name === prefix + '.result.json' || name.startsWith(prefix + '.'))
      paths.add(relative(repo, join(dispatchDir, name)));
  }
  paths.add(receipt);
  const artifacts = [...paths].sort().map(path => ({ path, sha256: sha(readFileSync(physicalFile(repo, path))) }));
  const indexPath = resolve(repo, textGit(repo, ['rev-parse', '--git-path', 'index']));
  const archiveRoot = 'research/' + run + '-closeout-reopen-before';
  if (existsSync(join(repo, archiveRoot))) fail('recovery archive already exists');
  const workingRows = working(repo, authorizationPath, archiveRoot);
  return { version: 1, run, head, content_commit: contentCommit, receipt_commit: receiptCommit, parent,
    state_sha256: sha(readFileSync(statePath)), index_sha256: sha(readFileSync(indexPath)),
    policy_sha256: sha(readFileSync(join(repo, policy))), working_sha256: digest(workingRows), artifacts,
    reopen_stages: [...CLOSEOUT_SUFFIX], historical_outside_index_unknown: true,
    archive_root: archiveRoot, workingRows, state, indexPath, authorizationPath };
}

export function reopenCloseout(o: Options) {
  const authBytes = readFileSync(o.authorizationPath), auth = JSON.parse(authBytes.toString('utf8'));
  const live = inspectCloseoutReopen(o);
  if (auth.version !== 1 || auth.run !== o.run || auth.authorized_by !== 'owner'
    || typeof auth.authorization !== 'string' || auth.authorization.trim().length < 40
    || auth.historical_outside_index_unknown !== true) fail('explicit owner authorization required');
  for (const key of ['head', 'content_commit', 'receipt_commit', 'parent', 'state_sha256', 'index_sha256',
    'policy_sha256', 'working_sha256', 'artifacts', 'reopen_stages'])
    if (JSON.stringify(auth[key]) !== JSON.stringify((live as any)[key])) fail('stale authorization guard ' + key);
  const archive = join(o.repo, live.archive_root), runtime = join(o.stateDir, 'closeout-reopen-before');
  if (existsSync(runtime)) fail('runtime recovery archive already exists');
  mkdirSync(runtime, { recursive: true });
  // Bundle retains exactly the two original local commits and their blobs;
  // parent is its authenticated prerequisite, not a new branch or worktree.
  const bundle = join(runtime, 'legacy-closeout.bundle');
  git(o.repo, ['bundle', 'create', bundle, 'HEAD', '^' + live.parent]);
  copyFileSync(live.indexPath, join(runtime, 'index.before'));
  writeFileSync(join(runtime, 'working.before.json'), JSON.stringify(live.workingRows) + '\n');
  mkdirSync(archive, { recursive: true });
  writeFileSync(join(archive, 'state.before.json'), readFileSync(join(o.stateDir, 'state.json')));
  writeFileSync(join(archive, 'authorization.json'), authBytes);
  for (const row of live.artifacts) {
    const dest = join(archive, row.path); mkdirSync(resolve(dest, '..'), { recursive: true });
    copyFileSync(join(o.repo, row.path), dest);
    if (sha(readFileSync(dest)) !== row.sha256) fail('archive mismatch ' + row.path);
  }
  // All potentially expensive archives are completed before the CAS. No real
  // index operation, checkout, clean, stash or source rewrite occurs.
  if (sha(readFileSync(live.indexPath)) !== live.index_sha256
    || sha(readFileSync(join(o.stateDir, 'state.json'))) !== live.state_sha256
    || digest(working(o.repo, live.authorizationPath, live.archive_root)) !== live.working_sha256)
    fail('input changed during archival; no ref mutation performed');
  git(o.repo, ['update-ref', '-m', 'owner-authorized legacy closeout recovery', 'refs/heads/main', live.parent, live.head]);
  if (sha(readFileSync(live.indexPath)) !== live.index_sha256
    || digest(working(o.repo, live.authorizationPath, live.archive_root)) !== live.working_sha256)
    fail('preservation failed after CAS; original commits/index are archived; recovery held');
  const state = live.state;
  for (const id of CLOSEOUT_SUFFIX) delete state.stages[id];
  for (const key of Object.keys(state.dispatches ?? {})) if (suffix(key.split(':')[0])) delete state.dispatches[key];
  for (const field of ['gateAttempts', 'stageRounds', 'stageFailures'])
    for (const key of Object.keys(state[field] ?? {})) if (suffix(key) || suffix(state[field][key]?.stage)) delete state[field][key];
  state.nativeRefreshes = (state.nativeRefreshes ?? []).filter((r: any) => !suffix(r.stage));
  state.blockers = (state.blockers ?? []).filter((b: any) => !suffix(b.stage));
  state.stage = CLOSEOUT_SUFFIX[0]; state.finishedAt = null; state.paused = true; state.pauseAfter = '6-close-v2';
  for (const row of live.artifacts) unlinkSync(join(o.repo, row.path));
  const statePath = join(o.stateDir, 'state.json');
  writeFileSync(statePath + '.tmp', JSON.stringify(state, null, 2) + '\n'); renameSync(statePath + '.tmp', statePath);
  const receipt = { version: 1, run: o.run, kind: 'owner-authorized-legacy-closeout-reopen',
    at: new Date().toISOString(), authorization_sha256: sha(authBytes), original_head: live.head,
    recovered_head: live.parent, original_content_commit: live.content_commit,
    index_preserved_sha256: live.index_sha256, working_preserved_sha256: live.working_sha256,
    historical_outside_index_unknown: true, native_coverage_created: false,
    bundle: { path: relative(o.repo, bundle), sha256: sha(readFileSync(bundle)) },
    index_archive: { path: relative(o.repo, join(runtime, 'index.before')), sha256: live.index_sha256 },
    working_archive: { path: relative(o.repo, join(runtime, 'working.before.json')),
      sha256: sha(readFileSync(join(runtime, 'working.before.json'))) }, archive: live.archive_root,
    retired_artifacts: live.artifacts, reopened_stages: [...CLOSEOUT_SUFFIX],
    preserved: 'All earlier stage records, items, pages, manifests, contracts and judge history remain untouched. Current outside index is preserved; original pre-legacy staging is unknown.' };
  writeFileSync(join(o.repo, 'research', o.run + '-closeout-reopen.json'), JSON.stringify(receipt, null, 2) + '\n');
  appendFileSync(join(o.stateDir, 'events.jsonl'), JSON.stringify({ at: receipt.at,
    type: 'closeout-reopened', run: o.run, original_head: live.head, recovered_head: live.parent,
    reopened_stages: [...CLOSEOUT_SUFFIX], receipt: 'research/' + o.run + '-closeout-reopen.json',
    historical_outside_index_unknown: true, native_coverage_created: false }) + '\n');
  return receipt;
}
