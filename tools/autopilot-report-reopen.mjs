// Guarded pre-report recovery. Historical successes are archived, never reused
// as fresh suffix coverage. No Git/index or mathematical carrier is mutated.
import { existsSync, readFileSync, writeFileSync, mkdirSync, copyFileSync, unlinkSync, renameSync, readdirSync, lstatSync, appendFileSync } from 'node:fs';
import { join, resolve, relative, dirname } from 'node:path';
import { spawnSync, execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { protectedEntryHash, runContentHash, runScope } from './step6-lib.mjs';
export const REPORT_SUFFIX = ['6-readiness-v2', '6-evidence-v2', '6-report-baseline-v2', '6-owner-report-v2', '6-owner-report-render-v2', '6-close-v2'];
const HISTORICAL_CORE_COMMIT = 'a57016780981116be0ddf303099dfb865d864049';
const CORE = new Set(['tools/STEP6-REPORT-RECOVERY.md', 'tools/step6-report.mjs', 'tools/publication-ready.mjs',
  'tools/autopilot-report-reopen.mjs', 'tools/autopilot/bin/autopilot.mts',
  'tools/autopilot/test/step6-integrity-lock.test.mjs', 'tools/autopilot/test/report-reopen.test.mjs']);
const sha = b => createHash('sha256').update(b).digest('hex');
const json = p => JSON.parse(readFileSync(p, 'utf8'));
const fail = message => { throw new Error('reopen-report: ' + message); };
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const git = (repo, args) => execFileSync('git', ['--no-replace-objects', '-c', 'core.fsmonitor=false', ...args], { cwd: repo, maxBuffer: 128 * 1024 * 1024 });
const textGit = (repo, args) => git(repo, args).toString('utf8').trim();
function physical(repo, rel) {
  if (!rel || rel.includes('\\') || rel.includes('\0') || rel.split('/').some(p => !p || p === '..' || p === '.')) fail('unsafe path');
  let path = resolve(repo);
  for (const part of rel.split('/')) { path = join(path, part); if (lstatSync(path).isSymbolicLink()) fail('symlink input ' + rel); }
  if (!lstatSync(path).isFile()) fail('nonregular input ' + rel);
  return path;
}
function invoke(repo, tool, args) {
  const p = spawnSync(process.execPath, [join(repo, 'tools', tool), ...args], { cwd: repo, encoding: 'utf8', maxBuffer: 256 * 1024 * 1024 });
  if (p.error || p.status !== 0) fail(tool + ': ' + (p.error?.message || p.stderr || p.stdout));
  return JSON.parse(p.stdout);
}
// Apply only the reverse of an authenticated committed text hunk. Exact unique
// matching preserves unrelated preexisting working hunks (notably WORKFLOW).
export function reverseCommittedPatch(current, patch) {
  const hunks = patch.split(/^@@[^\n]*\n/m).slice(1);
  if (!hunks.length) fail('historical core patch has no text hunks');
  let restored = current;
  for (const hunk of hunks.reverse()) {
    const lines = hunk.split('\n');
    if (lines.at(-1) === '') lines.pop();
    if (lines.some(line => ![' ', '+', '-'].includes(line[0]))) fail('unsupported historical patch hunk');
    const after = lines.filter(line => line[0] !== '-').map(line => line.slice(1) + '\n').join('');
    const before = lines.filter(line => line[0] !== '+').map(line => line.slice(1) + '\n').join('');
    const at = restored.indexOf(after);
    if (!after || at < 0 || restored.indexOf(after, at + 1) >= 0) fail('historical core hunk is not an exact unique match');
    restored = restored.slice(0, at) + before + restored.slice(at + after.length);
  }
  return restored;
}
function stopped(state, stateDir) {
  if (state.paused !== true || state.run == null) fail('run must be paused');
  const lock = join(stateDir, 'controller.lock');
  if (existsSync(lock)) {
    const pid = json(lock).pid; if (!Number.isInteger(pid) || pid <= 0) fail('invalid controller lock');
    try { process.kill(pid, 0); fail('controller is alive'); } catch (e) { if (e.code !== 'ESRCH') throw e; }
  }
  if (Object.values(state.dispatches ?? {}).some(d => d.startedAt && !d.endedAt)) fail('active/unresolved dispatch');
  const baseline = state.stages?.['6-report-baseline-v2'];
  if (!baseline?.enteredAt || baseline.doneAt || baseline.gatesPassedAt) fail('requires failed active report-baseline stage');
  if (!state.stages?.['6-readiness-v2']?.doneAt || !state.stages?.['6-evidence-v2']?.doneAt) fail('prior readiness/evidence must have passed natively');
  for (const id of REPORT_SUFFIX.slice(3)) if (state.stages?.[id]?.enteredAt || state.stages?.[id]?.doneAt) fail('owner report/closeout already entered');
  if (Object.keys(state.dispatches ?? {}).some(k => REPORT_SUFFIX.slice(3).some(id => k.startsWith(id + ':')))) fail('owner report/closeout dispatch exists');
}
export function inspectReportReopen(o) {
  const { repo, run, stateDir, dispatchDir } = o;
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(run)) fail('unsafe run');
  if (resolve(stateDir) !== resolve(repo, '.autopilot', run) || resolve(dispatchDir) !== resolve(repo, 'research', run + '-dispatch')) fail('requires canonical run state/dispatch directories');
  const statePath = join(stateDir, 'state.json'), stateBytes = readFileSync(statePath), state = JSON.parse(stateBytes);
  if (state.run !== run) fail('foreign state'); stopped(state, stateDir);
  for (const event of readFileSync(join(stateDir, 'events.jsonl'), 'utf8').split('\n').filter(Boolean).map(line => JSON.parse(line))) {
    if (REPORT_SUFFIX.slice(3).includes(event.stage) || /^(?:owner-report-v2|owner-report-render-v2|close-step6-v2)$/.test(event.label ?? '')
      || event.type === 'exec' && /--label (?:owner-report-v2|owner-report-render-v2|close-step6-v2)(?: |$)/.test(event.command ?? '')) fail('historical owner report/closeout event exists');
  }
  for (const name of readdirSync(dispatchDir)) if (/^(?:alpha-report-owner-report-v2|tool-owner-report-render-v2|tool-close-step6-v2)(?:\.|-)/.test(name)) fail('owner report/closeout evidence already exists');
  for (const tail of ['step6-report.response.json', 'step6-report.md']) if (existsSync(join(repo, 'research', run + '-' + tail))) fail('owner report artifact exists');
  for (const key of ['GIT_DIR','GIT_WORK_TREE','GIT_INDEX_FILE','GIT_COMMON_DIR','GIT_OBJECT_DIRECTORY','GIT_ALTERNATE_OBJECT_DIRECTORIES','GIT_NAMESPACE']) if (process.env[key]) fail('redirected Git environment');
  if (textGit(repo, ['symbolic-ref', '--short', 'HEAD']) !== 'main') fail('requires main');
  const head = textGit(repo, ['rev-parse', 'HEAD']);
  if (textGit(repo, ['log', '--format=%s', '--all']).split('\n').includes(`chore(${run}): engine close-out — commit the run's working tree`)) fail('run already has closeout commit');
  const parent = textGit(repo, ['rev-parse', head + '^']);
  if (textGit(repo, ['rev-list', '--parents', '-n', '1', head]).split(' ').length !== 2) fail('core repair must be a single-parent HEAD commit');
  const integrityRel = `research/${run}-step6-report-integrity.json`, integrity = json(physical(repo, integrityRel));
  if (integrity.version !== 1 || integrity.run !== run || !integrity.protected_tree) fail('invalid frozen report baseline');
  const deltaPaths = textGit(repo, ['diff-tree', '--no-commit-id', '--name-only', '-r', head]).split('\n').filter(Boolean);
  if (!deltaPaths.length || deltaPaths.some(p => !CORE.has(p)) || !deltaPaths.includes('tools/step6-report.mjs')) fail('HEAD must contain only the bounded core repair paths');
  const core = deltaPaths.map(path => {
    physical(repo, path);
    const committed = git(repo, ['show', head + ':' + path]);
    if (!readFileSync(join(repo, path)).equals(committed)) fail('working core differs from repair commit: ' + path);
    const before = integrity.protected_tree[path] ?? null;
    const old = spawnSync('git', ['show', parent + ':' + path], { cwd: repo });
    if (before === null ? old.status === 0 : old.status !== 0 || before !== sha(Buffer.concat([Buffer.from('file\0'), old.stdout]))) fail('core preimage does not match original report baseline: ' + path);
    return { path, before, after: protectedEntryHash(join(repo, path)) };
  });
  const readyRel = `research/${run}-publication-readiness.json`, evidenceRel = `research/${run}-step6-evidence.json`;
  const originalReady = json(physical(repo, readyRel));
  if (originalReady.run !== run || originalReady.verdict !== 'publishable-pending-owner-approval' || originalReady.workflow_owned_blockers?.length) fail('original readiness not passed');
  const currentReady = invoke(repo, 'publication-ready.mjs', ['--run', run, '--root', repo, '--verify', '--inspect']);
  for (const key of ['schema','run','verdict','content_sha256','input_sha256','published_baseline_commit','protected_tree_scope']) if (!same(originalReady[key], currentReady[key])) fail('readiness input/context changed: ' + key);
  const rows = new Map(currentReady.protected_tree_rows.map(row => [row.split('\0')[0], row]));
  for (const row of core) { if (row.before === null) rows.delete(row.path); else rows.set(row.path, `${row.path}\0${row.before}`); }
  // The shared dependency-review brief is append-only operational authoring
  // evidence. Bind its original exact prefix; no earlier byte may be changed.
  const briefPath = 'briefs/tasks/frontier-dependency-ledger.md';
  let briefAppend = null;
  const briefBytes = readFileSync(physical(repo, briefPath));
  if (protectedEntryHash(join(repo, briefPath)) !== integrity.protected_tree[briefPath]) {
    let prefixBytes = null;
    const hash = createHash('sha256').update('file\0');
    for (let index = 0; index < briefBytes.length; index++) {
      hash.update(briefBytes.subarray(index, index + 1));
      if (hash.copy().digest('hex') === integrity.protected_tree[briefPath]) { prefixBytes = index + 1; break; }
    }
    if (prefixBytes === null) fail('shared brief changed before its authenticated original prefix');
    const suffix = briefBytes.subarray(prefixBytes).toString('utf8');
    // Each appended Alpha block must identify an independently sealed foreign
    // owner and actual native report; no newly invented ownership is admitted.
    const owners = [...suffix.matchAll(/<!-- ([a-z0-9-]+)-alpha-batch-\d+-3a:begin -->/g)].map(match => match[1]);
    if (!owners.length || owners.some(owner => owner === run || !integrity.protected_tree[`research/${owner}-scope-ledger.json`])) fail('shared brief suffix lacks sealed foreign Alpha ownership');
    const reports = [...suffix.matchAll(/research\/([a-z0-9-]+-alpha-batch-\d+-3a\.md)/g)].map(match => 'research/' + match[1]);
    if (!reports.length || reports.some(path => !owners.some(owner => path.startsWith(`research/${owner}-alpha-batch-`)) || !existsSync(join(repo, path)))) fail('shared brief suffix lacks current foreign Alpha reports');
    briefAppend = { path: briefPath, before: integrity.protected_tree[briefPath], after: protectedEntryHash(join(repo, briefPath)), prefix_bytes: prefixBytes,
      prefix_sha256: sha(briefBytes.subarray(0, prefixBytes)), suffix_sha256: sha(briefBytes.subarray(prefixBytes)), owners: [...new Set(owners)].sort(),
      reports: [...new Set(reports)].sort().map(path => {
        const match = /^research\/([a-z0-9-]+)-alpha-batch-(\d+)-3a\.md$/.exec(path);
        const resultPath = `research/${match[1]}-dispatch/alpha-3a-batch-${match[2]}.result.json`;
        const result = json(physical(repo, resultPath));
        if (result.run !== match[1] || result.role !== 'alpha' || result.label !== `3a-batch-${match[2]}` || result.ok !== true || result.written_by === 'autopilot') fail('foreign Alpha report lacks genuine successful native result');
        return { path, sha256: sha(readFileSync(physical(repo, path))), native_result: resultPath, native_result_sha256: sha(readFileSync(join(repo, resultPath))) };
      }) };
    rows.set(briefPath, `${briefPath}\0${briefAppend.before}`);
  }
  let historicalCore = null;
  const historicalPreimages = {};
  let restoredRows = [...rows.values()].sort();
  if (sha(restoredRows.join('\n')) !== originalReady.protected_tree_sha256) {
    const commit = HISTORICAL_CORE_COMMIT;
    if (spawnSync('git', ['merge-base', '--is-ancestor', commit, head], { cwd: repo }).status !== 0) fail('required historical core transition is not an ancestor');
    const historicalParent = textGit(repo, ['rev-parse', commit + '^']);
    const paths = textGit(repo, ['diff-tree', '--no-commit-id', '--name-only', '-r', commit]).split('\n').filter(path => rows.has(path));
    const transitions = paths.map(path => {
      const current = readFileSync(physical(repo, path));
      if (protectedEntryHash(join(repo, path)) !== integrity.protected_tree[path]) fail('historical core carrier changed after original snapshot: ' + path);
      const patch = git(repo, ['diff', historicalParent, commit, '--', path]).toString('utf8');
      const beforeBytes = Buffer.from(reverseCommittedPatch(current.toString('utf8'), patch));
      const before = sha(Buffer.concat([Buffer.from('file\0'), beforeBytes]));
      historicalPreimages[path] = beforeBytes;
      rows.set(path, `${path}\0${before}`);
      return { path, before, after: integrity.protected_tree[path], preimage_sha256: sha(beforeBytes) };
    });
    historicalCore = { commit, parent: historicalParent, paths: transitions };
    restoredRows = [...rows.values()].sort();
  }
  if (restoredRows.length !== originalReady.protected_tree_files || sha(restoredRows.join('\n')) !== originalReady.protected_tree_sha256) fail('original readiness cannot be reconstructed using exact core history and authenticated brief prefix');
  const inventory = invoke(repo, 'step6-report.mjs', ['recovery-inventory', '--run', run, '--root', repo]);
  const scoped = new Set(inventory.scoped), corePaths = new Set(core.map(row => row.path));
  const proposalPrefix = `research/${run}-owner/step6-integrity-lock-escalation/`;
  const proposal = [];
  for (const path of inventory.changed) {
    if (corePaths.has(path) || scoped.has(path) || briefAppend?.path === path) continue;
    if (!path.startsWith(proposalPrefix) || Object.hasOwn(integrity.protected_tree, path) || !Object.hasOwn(inventory.now, path)) fail('unexplained protected change: ' + path);
    // New proposal artifacts only; no replacement or deletion of old evidence.
    proposal.push({ path, after: inventory.now[path] });
  }
  const scope = runScope(run, repo);
  const mathematical = [...scope.items, ...scope.pages].map(row => ({ path: row.file, sha256: protectedEntryHash(physical(repo, row.file)) })).sort((a,b) => a.path.localeCompare(b.path));
  for (const row of mathematical) if (integrity.protected_tree[row.path] !== row.sha256) fail('original mathematical carrier changed: ' + row.path);
  if (runContentHash(run, repo) !== originalReady.content_sha256) fail('mathematical content hash changed');
  const artifactPaths = [readyRel, evidenceRel, integrityRel];
  const layout = `research/${run}-proof-layout.json`; if (existsSync(join(repo, layout))) artifactPaths.push(layout);
  for (const [key, d] of Object.entries(state.dispatches ?? {})) {
    if (!REPORT_SUFFIX.includes(key.split(':')[0])) continue;
    for (const name of readdirSync(dispatchDir)) if (name === `${d.role}-${d.label}.result.json` || name.startsWith(`${d.role}-${d.label}.attempt-`) && name.endsWith('.result.json')) artifactPaths.push(relative(repo, join(dispatchDir, name)));
  }
  const artifacts = [...new Set(artifactPaths)].sort().map(path => ({ path, sha256: sha(readFileSync(physical(repo, path))) }));
  const indexPath = resolve(repo, textGit(repo, ['rev-parse', '--git-path', 'index']));
  const guards = { version: 1, run, head, parent, state_sha256: sha(stateBytes), index_sha256: sha(readFileSync(indexPath)),
    original_protected_files: Object.keys(integrity.protected_tree).length, content_sha256: originalReady.content_sha256,
    historical_core_transition: historicalCore, shared_brief_append: briefAppend, original_readiness_sha256: originalReady.protected_tree_sha256, current_expected_readiness_sha256: currentReady.protected_tree_sha256, mathematical, prerequisite_context: originalReady.protected_tree_paths.filter(path => path.startsWith('items/') && !mathematical.some(row => row.path === path)).map(path => ({ path, sha256: protectedEntryHash(physical(repo, path)) })), core, proposal, artifacts, reopen_stages: REPORT_SUFFIX, scoped_foreign_changes: inventory.scoped };
  return { guards, state, stateBytes, indexPath, historicalPreimages, briefBytes };
}
export function reopenReport(o) {
  const authorizationBytes = readFileSync(o.authorizationPath), auth = JSON.parse(authorizationBytes), live = inspectReportReopen(o);
  if (auth.authorized_by !== 'owner' || typeof auth.authorization !== 'string' || auth.authorization.length < 40 || !same(auth.guards, live.guards)) fail('explicit current owner authorization required');
  const archive = join(o.stateDir, 'report-reopen-before'); if (existsSync(archive)) fail('recovery archive already exists');
  mkdirSync(archive);
  writeFileSync(join(archive, 'state.before.json'), live.stateBytes); writeFileSync(join(archive, 'authorization.json'), authorizationBytes);
  for (const [path, bytes] of Object.entries(live.historicalPreimages)) { const dest = join(archive, 'original-readiness-preimages', path); mkdirSync(dirname(dest), { recursive: true }); writeFileSync(dest, bytes); if (sha(readFileSync(dest)) !== sha(bytes)) fail('historical preimage archive mismatch'); }
  if (live.guards.shared_brief_append) { const dest = join(archive, 'original-brief-prefix.md'); writeFileSync(dest, live.briefBytes.subarray(0, live.guards.shared_brief_append.prefix_bytes)); }
  for (const row of live.guards.artifacts) {
    const dest = join(archive, row.path); mkdirSync(dirname(dest), { recursive: true }); copyFileSync(join(o.repo, row.path), dest);
    if (sha(readFileSync(dest)) !== row.sha256) fail('archive mismatch');
  }
  const second = inspectReportReopen(o);
  // Foreign authoring may progress; only exact owned/core/proposal/state inputs
  // must stay fixed. Every scan independently rejects unexplained changes.
  const withoutForeign = guards => { const { scoped_foreign_changes, ...stable } = guards; return stable; };
  if (!same(withoutForeign(second.guards), withoutForeign(live.guards))) fail('owned recovery input changed during archive');
  const state = live.state;
  for (const id of REPORT_SUFFIX) delete state.stages[id];
  for (const key of Object.keys(state.dispatches ?? {})) if (REPORT_SUFFIX.includes(key.split(':')[0])) delete state.dispatches[key];
  for (const field of ['gateAttempts','stageRounds','stageFailures']) for (const key of Object.keys(state[field] ?? {})) if (REPORT_SUFFIX.includes(key) || REPORT_SUFFIX.includes(state[field][key]?.stage)) delete state[field][key];
  state.nativeRefreshes = (state.nativeRefreshes ?? []).filter(row => !REPORT_SUFFIX.includes(row.stage));
  state.blockers = (state.blockers ?? []).filter(row => !REPORT_SUFFIX.includes(row.stage));
  state.stage = REPORT_SUFFIX[0]; state.finishedAt = null; state.paused = true; state.pauseAfter = '6-close-v2';
  const receipt = { version: 1, kind: 'owner-authorized-pre-report-suffix-reopen', run: o.run, at: new Date().toISOString(),
    authorization_sha256: sha(authorizationBytes), guards: live.guards, native_coverage_created: false, archive: relative(o.repo, archive) };
  // Archive is durable before any derived artifact is retired. The stopped
  // controller is required; state replacement is atomic and remains paused.
  if (!readFileSync(join(o.stateDir, 'state.json')).equals(live.stateBytes) || sha(readFileSync(live.indexPath)) !== live.guards.index_sha256) fail('state/index changed before transition');
  for (const row of live.guards.artifacts) unlinkSync(join(o.repo, row.path));
  writeFileSync(join(archive, 'receipt.json'), JSON.stringify(receipt, null, 2) + '\n');
  const statePath = join(o.stateDir, 'state.json'); writeFileSync(statePath + '.tmp', JSON.stringify(state, null, 2) + '\n'); renameSync(statePath + '.tmp', statePath);
  appendFileSync(join(o.stateDir, 'events.jsonl'), JSON.stringify({ at: receipt.at, type: 'report-suffix-reopened', run: o.run, archive: receipt.archive, native_coverage_created: false }) + '\n');
  return receipt;
}
