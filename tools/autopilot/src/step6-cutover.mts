// Explicit native transition; historical execution is archived, never coverage.
import { existsSync, lstatSync, mkdirSync, readFileSync, readdirSync, writeFileSync, renameSync, appendFileSync, unlinkSync, realpathSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { acquireControllerLock } from './controller-lock.mts';
import { activeNativeWriters } from './workflow-prefix-migration.mts';
import { sourceState, assertFreshStep6State } from '../../step6-prepared.mjs';
import { preflightStep6 } from '../../step6-commit.mjs';
import { treeEntries, indexEntries, git, textGit } from '../../run-commit-scope.mjs';
import { decodeLedger, fragmentRecords, recordSignature } from '../../step6-ledger-fragment.mjs';
import { decodePlan, planDocument } from '../../step6-plan-projection.mjs';
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
    if (state.stage !== '6-finalize-v3'
      || !state.stages?.['6-final-validation-v3']?.gatesPassedAt) fail('refresh requires an unfinished native v3 finalization');
    assertFreshStep6State({ repo: o.repo, run: o.run, stateDir: o.stateDir });
    const final = join(o.dispatchDir, 'tool-step6-finalize-v3.result.json');
    if (existsSync(final)) {
      const result = JSON.parse(bytes(final).toString());
      if (result.ok === true || result.transaction_pending || result.closeout_scope || result.commit || result.commit_landed)
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
// A committed tooling base may advance while the exact previously owned patch
// survives. Only explicit current additional-path ownership can bridge it.
function supportingBaseSuccessors(o: Options, scope: any, prepared: any, base: string, head: string, commits: string[]) {
  const policy = scope.policy ? JSON.parse(bytes(scope.policy.policyPath).toString()) : null;
  const out = new Map<string, any>();
  const bound = (ref: any) => {
    if (!ref || typeof ref.path !== 'string' || !ref.path.startsWith(`research/${o.run}-`)
      || ref.path.split('/').includes('..') || !/^[a-f0-9]{64}$/.test(ref.sha256 ?? '')) fail('invalid supporting successor reference');
    const path = resolve(o.repo, ref.path);
    if (!realpathSync(path).startsWith(realpathSync(join(o.repo, 'research')) + '/')) fail('supporting successor reference escaped research');
    const value = bytes(path); if (hash(value) !== ref.sha256) fail('supporting successor evidence changed');
    return value;
  };
  const protectedHash = (value: Buffer) => hash(Buffer.concat([Buffer.from('file\0'), value]));
  const patch = (left: string, right: string) => {
    let value: Buffer;
    try { value = execFileSync('git', ['--literal-pathspecs', 'diff', '--no-ext-diff', '--no-textconv', '--no-renames', '--no-index', '--unified=0', '--', left, right],
      { cwd: scope.gitRoot, env: { ...process.env, LC_ALL: 'C' }, maxBuffer: 256 * 1024 * 1024 }); }
    catch (error: any) { if (error.status !== 1 || !Buffer.isBuffer(error.stdout)) throw error; value = error.stdout; }
    const lines = value.toString().split('\n'), start = lines.findIndex(line => line.startsWith('@@ '));
    if (start < 0) fail('supporting successor requires a nonempty textual owned patch');
    return lines.slice(start).map(line => line.replace(/^@@ -\d+(?:,\d+)? \+\d+(?:,\d+)? @@/, '@@')).join('\n');
  };
  for (const row of policy?.additional_paths ?? []) {
    const ownerBytes = bytes(resolve(o.repo, row.ownership_evidence)), owner = JSON.parse(ownerBytes.toString());
    for (const proof of owner.supporting_git_base_successors ?? []) {
      if (proof.path !== row.path) continue;
      if (owner.run !== o.run || owner.authorized_by !== 'owner' || owner.owner_identity !== '/root'
        || owner.kind !== 'owner-reviewed-supporting-git-base-successor' || owner.coverage_created !== false
        || out.has(row.path) || !row.path.startsWith('tools/') || row.path.startsWith('tools/physics-support/')
        || proof.original_head !== base || proof.current_head !== head
        || JSON.stringify(proof.checked_descendant_commits) !== JSON.stringify(commits)
        || typeof proof.reason !== 'string' || proof.reason.trim().length < 80
        || proof.coverage_created !== false) fail('invalid committed supporting-base successor');
      const oldPolicyBytes = bound(proof.previous_policy), oldPolicy = JSON.parse(oldPolicyBytes.toString());
      const policyPath = `research/${o.run}-closeout-scope.json`;
      if (prepared.source?.tree?.[policyPath] !== protectedHash(oldPolicyBytes)
        || oldPolicy.run !== o.run || oldPolicy.authorized_by !== 'owner') fail('successor lacks actual preceding policy basis');
      const oldRows = oldPolicy.additional_paths?.filter((r: any) => r.path === row.path) ?? [];
      if (oldRows.length !== 1) fail('successor was not a previously authorized supporting path');
      const oldOwnerPath = oldRows[0].ownership_evidence, oldOwnerBytes = bytes(resolve(o.repo, oldOwnerPath));
      if (prepared.source?.tree?.[oldOwnerPath] !== protectedHash(oldOwnerBytes)) fail('previous supporting ownership changed');
      const oldOwner = JSON.parse(oldOwnerBytes.toString()), oldWorking = bound(proof.previous_working);
      if (oldOwner.run !== o.run || !oldOwner.owned_paths?.some((r: any) => r.path === row.path && r.sha256 === oldRows[0].sha256)
        || hash(oldWorking) !== oldRows[0].sha256) fail('previous exact owned patch lacks genuine ownership');
      const oldBase = bound(proof.original_base), newBase = bound(proof.current_base);
      const originalRows = treeEntries(scope.gitRoot, base).filter((r: any) => r.path === row.path);
      const currentRows = treeEntries(scope.gitRoot, head).filter((r: any) => r.path === row.path);
      const indexed = indexEntries(scope.gitRoot).filter((r: any) => r.path === row.path);
      if (originalRows.length !== 1 || currentRows.length !== 1 || indexed.length !== 1
        || [originalRows[0], currentRows[0], indexed[0]].some((r: any) => r.mode !== '100644')
        || indexed[0].flags !== '0' || indexed[0].stage !== 0 || indexed[0].oid !== currentRows[0].oid
        || originalRows[0].oid === currentRows[0].oid
        || !git(scope.gitRoot, ['cat-file', 'blob', originalRows[0].oid]).equals(oldBase)
        || !git(scope.gitRoot, ['cat-file', 'blob', currentRows[0].oid]).equals(newBase)) fail('supporting successor HEAD/index bases differ');
      const beforePatch = patch(resolve(o.repo, proof.original_base.path), resolve(o.repo, proof.previous_working.path));
      const afterPatch = patch(resolve(o.repo, proof.current_base.path), resolve(o.repo, row.path));
      if (beforePatch !== afterPatch || hash(beforePatch) !== proof.unchanged_patch_sha256
        || hash(bytes(resolve(o.repo, row.path))) !== row.sha256) fail('supporting successor contains a new or foreign working delta');
      out.set(row.path, { path: row.path, original: originalRows[0], current: currentRows[0],
        ownership_evidence: row.ownership_evidence, ownership_sha256: hash(ownerBytes), proof });
    }
  }
  return out;
}
// Read-only recovery proof for a failed current v3 transaction. It never resets
// refs/index or adopts the old battery. Missing owned Git bases fail closed.
function failedRefreshBasis(o: Options, state: any, events: Buffer) {
  for (const name of readdirSync(o.dispatchDir).filter(name => /^tool-step6-finalize-v3(?:\.attempt-\d+)?\.result\.json$/.test(name))) {
    const result = JSON.parse(bytes(join(o.dispatchDir, name)).toString());
    if (result.ok === true || result.transaction_pending || result.closeout_scope || result.commit || result.commit_landed)
      fail('terminal success/pending/commit evidence requires separate recovery');
  }
  const lane = state.dispatches?.['6-finalize-v3:step6-finalize-v3'];
  const entered = state.stages?.['6-finalize-v3']?.enteredAt;
  if (!lane?.startedAt || !lane.endedAt || lane.lastExitOk !== false || !entered
    || !state.stages?.['6-final-validation-v3']?.doneAt)
    fail('refresh requires a completed failed native finalizer, not an unknown transaction');
  const rows = events.toString().split('\n').filter(Boolean).map(line => JSON.parse(line));
  const predecessor = state.stages['6-final-validation-v3'];
  if (predecessor.skipped || predecessor.routedTo || predecessor.routedOutcome === 'failed'
    || [entered, lane.startedAt, lane.endedAt, predecessor.gatesPassedAt, predecessor.doneAt]
      .some(value => !Number.isFinite(Date.parse(value)))) fail('invalid native finalization chronology');
  const preparedBytes = bytes(join(o.stateDir, 'step6-prepared.json'));
  const prepared = JSON.parse(preparedBytes.toString());
  if (prepared.run !== o.run || prepared.kind !== 'actual-step6-format-metadata-preparation'
    || prepared.validationStage !== '6-final-validation-v3' || !Array.isArray(prepared.gates)
    || !prepared.gates.length || prepared.gates.some((gate: any) => gate.required !== true)
    || prepared.gateInventorySha256 !== hash(JSON.stringify(prepared.gates))
    || !Number.isFinite(Date.parse(prepared.completedAt))) fail('missing authentic preceding preparation inventory');
  const gateMessage = `6-final-validation-v3: running ${prepared.gates.length} gate(s)`;
  let battery = -1;
  for (let i = 0; i < rows.length; i++) if (rows[i].type === 'gates' && rows[i].message === gateMessage
    && Date.parse(rows[i].at) >= Date.parse(prepared.completedAt) && Date.parse(rows[i].at) < Date.parse(entered)) battery = i;
  if (battery < 0) fail('missing actual preceding native battery');
  const tail = rows.slice(battery + 1).filter(row => Date.parse(row.at) < Date.parse(entered));
  const results = tail.filter(row => row.type === 'gate');
  const green = tail.findIndex(row => row.type === 'gates-ok' && row.message === '6-final-validation-v3: all gates green');
  const clear = tail.findIndex(row => row.type === 'stage-clear' && row.message?.startsWith('6-final-validation-v3 cleared —'));
  if (green < 0 || clear <= green || results.length !== prepared.gates.length
    || results.some((row, i) => row.id !== prepared.gates[i].id || row.ok !== true || row.skipped)
    || tail.slice(0, green).filter(row => row.type === 'gate').length !== prepared.gates.length
    || tail.some(row => row.type === 'gate-advisory' || row.type === 'blocked' && row.stage === '6-final-validation-v3')
    || Date.parse(tail[green].at) > Date.parse(predecessor.gatesPassedAt)
    || Date.parse(predecessor.doneAt) < Date.parse(predecessor.gatesPassedAt)
    || Date.parse(predecessor.doneAt) > Date.parse(entered))
    fail('preceding native battery is incomplete or inconsistent');
  const attempts: any[] = []; const supportingFailures = new Set<string>(); let pending: any = null;
  for (const row of rows.filter(row => Date.parse(row.at) >= Date.parse(entered))) {
    if (row.type === 'dispatch' && row.stage === '6-finalize-v3' && row.role === 'tool' && row.label === 'step6-finalize-v3') {
      if (pending) fail('unresolved finalizer event sequence');
      pending = row;
    }
    if (row.key === '6-finalize-v3:step6-finalize-v3' && row.type === 'dispatch-failed') {
      const supporting = /^tool\/step6-finalize-v3 exit=1 :: step6-finalize: closeout: supporting path bytes differ from owner authorization: (tools\/[a-zA-Z0-9_./-]+)(?![\s\S])/.exec(row.message ?? '');
      if (!pending || row.ok !== false || (![
        'tool/step6-finalize-v3 exit=1 :: step6-finalize: Validated frontier/context changed before commit',
        'tool/step6-finalize-v3 exit=1 :: step6-finalize: Step-6 prepared source or derived evidence changed',
      ].includes(row.message) && !supporting)) fail('finalizer failure is not an authenticated pre-ref refusal');
      if (supporting) supportingFailures.add(supporting[1]);
      attempts.push({ dispatch: pending, failure: row }); pending = null;
    }
  }
  const last = attempts.at(-1);
  if (pending || !last || Date.parse(last.dispatch.at) < Date.parse(lane.startedAt)
    || Date.parse(last.dispatch.at) > Date.parse(lane.endedAt)
    || Date.parse(last.failure.at) < Date.parse(lane.endedAt)) fail('failed native finalizer events do not match current lane');
  // Authenticate policy, exact shared projections and all current owned inputs
  // through the ordinary read-only native preflight. No whole-file shared grant.
  const scope = preflightStep6(o.repo, o.run);
  const head = textGit(scope.gitRoot, ['rev-parse', 'HEAD']);
  const previous = state.step6Cutover
    ? JSON.parse(bytes(join(o.repo, state.step6Cutover.receipt)).toString()) : null;
  // A fresh-v3 run has no cutover receipt. Its already sealed plan authority is
  // an actual immutable original-HEAD basis, not an owner-guessed current HEAD.
  const plan = scope.planProjections.length === 1 ? scope.planProjections[0] : null;
  const base = previous?.guards?.failed_refresh_basis?.original_head ?? previous?.guards?.head ?? plan?.spec?.original_head;
  if (!/^[a-f0-9]{40,64}$/.test(base ?? '')) fail('no authenticated original HEAD for failed v3 refresh');
  if (plan && plan.spec.original_head !== base) fail('refresh Git bases disagree');
  git(scope.gitRoot, ['merge-base', '--is-ancestor', base, head]);
  const commits = textGit(scope.gitRoot, ['rev-list', '--reverse', `${base}..${head}`]).split('\n').filter(Boolean);
  const successors = supportingBaseSuccessors(o, scope, prepared, base, head, commits);
  if ([...supportingFailures].some(path => !successors.has(path))
    || [...successors.keys()].some(path => !supportingFailures.has(path))) fail('supporting refusal lacks exact committed-base successor proof');
  const authorization = relative(o.repo, resolve(o.authorizationPath ?? join(o.repo, 'research', `${o.run}-step6-cutover-authorization.json`)));
  const own = new Set<string>(scope.paths.filter(path => path !== authorization)), special = new Map<string, any>();
  for (const row of scope.fragments) special.set(row.path, { kind: 'ledger', row, ids: new Set(row.ownedIds) });
  for (const row of scope.planProjections) special.set(row.path, { kind: 'plan', row, ids: new Set(row.spec.page_ids) });
  const project = (entries: any[], kind: 'head' | 'index') => {
    const selected = entries.filter(row => own.has(row.path));
    if (kind === 'index' && selected.some(row => row.stage !== 0 || row.flags !== '0'))
      fail('owned index flags/stages require separate recovery');
    const map = new Map<string, any>(selected.map(row => [row.path, row]));
    const ordinary = selected.filter(row => !special.has(row.path)).map(({ path, mode, oid }) => {
      const successor = successors.get(path);
      if (successor) {
        if (mode !== '100644' || ![successor.original.oid, successor.current.oid].includes(oid)) fail('unreviewed intervening supporting blob: ' + path);
        if (kind === 'index' && oid !== successor.current.oid) fail('supporting index is not the current committed base');
        oid = successor.original.oid;
      }
      return { path, mode, oid };
    })
      .sort((a, b) => a.path.localeCompare(b.path));
    const shared = [...special].sort(([a], [b]) => a.localeCompare(b)).map(([path, value]) => {
      const entry = map.get(path);
      if (!entry || entry.mode !== '100644') fail('shared recovery base must be an existing ordinary file');
      const blob = git(scope.gitRoot, ['cat-file', 'blob', entry.oid]);
      const spec = value.row.spec;
      const owned = value.kind === 'ledger'
        ? fragmentRecords(decodeLedger(blob), o.run, value.ids).filter(row => row.owned).map(row => recordSignature(row.text))
        : planDocument(decodePlan(blob)).rows.filter(row => value.ids.has(row.id)).map(({ id, raw }) => ({ id, raw }));
      const expected = value.kind === 'ledger' ? spec.base_owned_records.map(recordSignature)
        : spec[kind === 'head' ? 'base_head_owned_rows' : 'base_index_owned_rows'];
      if (JSON.stringify(owned) !== JSON.stringify(expected)) fail('shared owned base already integrated or changed: ' + path);
      return { path, kind: value.kind, owned };
    });
    return { ordinary, shared };
  };
  const baseTree = treeEntries(scope.gitRoot, base), baseline = project(baseTree, 'head');
  if (baseline.ordinary.some(row => row.path === `research/${o.run}-dispatch/tool-step6-finalize-v3.result.json`))
    fail('historical base already contains a final result');
  // Check every intervening commit, not just endpoints: a landed/reverted run
  // commit is still a landed transaction and cannot masquerade as foreign work.
  for (const commit of commits)
    if (JSON.stringify(project(treeEntries(scope.gitRoot, commit), 'head')) !== JSON.stringify(baseline))
      fail('owned HEAD changed in intervening history; separate commit recovery required');
  const index = indexEntries(scope.gitRoot), currentIndex = project(index, 'index');
  if (JSON.stringify(currentIndex.ordinary) !== JSON.stringify(baseline.ordinary))
    fail('owned staged rows differ from authenticated HEAD base; no historical index basis available');
  // Shared staged bases have separately authenticated original rows; ordinary
  // owned rows conservatively require equality to the immutable original HEAD.
  const headAfter = textGit(scope.gitRoot, ['rev-parse', 'HEAD']);
  if (headAfter !== head) fail('HEAD changed while inspecting failed refresh');
  return { kind: 'failed-native-v3-pre-ref-refresh', original_head: base, current_head: head,
    origin: previous ? { cutover: state.step6Cutover } : { plan_authority: plan.authority, sha256: plan.sha256 },
    preceding_preparation_sha256: hash(preparedBytes), preceding_gate_results_sha256: hash(JSON.stringify(results)),
    failed_attempts: attempts, owned_paths_sha256: hash(JSON.stringify([...own].sort())),
    owned_head_projection_sha256: hash(JSON.stringify(baseline)),
    owned_index_projection_sha256: hash(JSON.stringify(currentIndex)),
    index_sha256: (index as any).indexSnapshot.sha256, checked_descendant_commits: commits,
    supporting_base_successors: [...successors.values()],
    scope_policy_sha256: scope.policy?.policySha256 ?? null,
    scope_context_sha256: scope.policy?.contextSha256 ?? null, commit_landed: false, coverage_created: false };
}

export function inspectStep6Cutover(o: Options, locked = false) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(o.run)) fail('unsafe run');
  if (!resolve(o.stateDir).startsWith(resolve(o.repo) + '/') || !resolve(o.dispatchDir).startsWith(resolve(o.repo) + '/')) fail('state/dispatch must remain in workspace');
  const stateBytes = bytes(join(o.stateDir, 'state.json')), state = JSON.parse(stateBytes.toString());
  stopped(o, state, locked);
  const events = bytes(join(o.stateDir, 'events.jsonl'));
  events.toString().split('\n').filter(Boolean).forEach(line => JSON.parse(line));
  const recovery = o.refresh ? failedRefreshBasis(o, state, events) : null;
  const prefix = Object.fromEntries(Object.entries(state.stages).filter(([id]) => !old(id)));
  const source = sourceState(o.repo, o.run, { includeDerived: false }).tree;
  delete source[relative(o.repo, resolve(o.authorizationPath ?? join(o.repo, 'research', `${o.run}-step6-cutover-authorization.json`)))];
  const guards = { run: o.run, refresh: o.refresh === true, state_sha256: hash(stateBytes), events_sha256: hash(events),
    head: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: o.repo, encoding: 'utf8' }).trim(),
    stage_table_sha256: hash(bytes(join(o.repo, 'tools/autopilot/stages/mathlib.mts'))),
    source_sha256: hash(JSON.stringify(source)),
    prefix_stages_sha256: hash(JSON.stringify(prefix)), historical_files: historical(o, state),
    reset_stages: Object.keys(state.stages).filter(old), target_stages: current,
    ...(recovery ? { failed_refresh_basis: recovery } : {}) };
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
