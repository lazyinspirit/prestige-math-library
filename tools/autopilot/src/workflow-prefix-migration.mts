// Explicit recovery for the one reviewed revision transition at an open Step 3b.
// No stage, dispatch, repair budget, receipt or completion field is rewritten.
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, lstatSync, mkdirSync, writeFileSync, renameSync, rmSync, readlinkSync } from 'node:fs';
import { join, resolve, relative } from 'node:path';
import { spawnSync } from 'node:child_process';
import { acquireControllerLock } from './controller-lock.mts';
import { appendRegistry } from './frontier-append.mts';

export const SOURCE_REVISION = 'batch-step7-rounds-v3-proof-layout';
export const TARGET_REVISION = 'eight-step-v4-proof-coverage';
const TARGET_TABLE_SHA256 = '7c45bb2747d107df1ce7b2aef3f1dd484c85169e6f9760cdd535ea655f3778ae';
const SOURCE_COMMIT = '891f9be373512a67e38d09d112eb05226bf734e0';
export const PREFIX_STAGES = ['1-drift', '1-drift-apply', '1-scaffold', '2-assign', '3a-scope', '3-baseline', '3b-author'];
const hash = (b: string | Buffer) => createHash('sha256').update(b).digest('hex');
const fail = (s: string): never => { throw new Error(`migrate-workflow-prefix: ${s}`); };
const body = (x: any) => JSON.stringify(x, null, 2) + '\n';
const regularBytes = (p: string): Buffer => {
  const st = lstatSync(p);
  if (!st.isFile() || st.isSymbolicLink()) fail(`not a physical regular file: ${p}`);
  return readFileSync(p);
};
const read = (p: string): any => JSON.parse(regularBytes(p).toString());

/** Linux native-writer discovery is mandatory, independent of stale state records.
 * Includes zero-coverage tools, watchdogs and dispatch descendants by run-bearing
 * arguments. Never trusts the engine's optional adoption command. */
export function activeNativeWriters(repo: string, run: string): number[] {
  if (!existsSync('/proc/self/cmdline')) fail('writer discovery requires Linux /proc');
  const found: number[] = [];
  for (const entry of readdirSync('/proc').filter(n => /^\d+$/.test(n))) {
    const pid = Number(entry);
    if (pid === process.pid) continue;
    let args: string[], cwd: string;
    try {
      args = readFileSync(`/proc/${pid}/cmdline`, 'utf8').split('\0').filter(Boolean);
      if (!args.some(a => a.includes(run))) continue;
      cwd = readlinkSync(`/proc/${pid}/cwd`);
    } catch (e: any) {
      if (['ENOENT', 'ESRCH'].includes(e.code)) continue;
      // Other users' processes cannot write this owner-controlled run. Processes
      // visible to this user must remain inspectable; ambiguous access fails closed.
      if (e.code === 'EACCES') fail(`cannot inspect process ${pid}`);
      throw e;
    }
    if (!args.some(a => a.includes(run))) continue;
    if (cwd !== resolve(repo) && !args.some(a => a.includes(resolve(repo)))) continue;
    if (!args.some(a => /(?:^|\/)tools\/.+\.(?:mjs|mts|js)$/.test(a))) continue;
    if (args.some(a => /(?:^|\/)migrate-workflow-prefix\.mts$/.test(a))) continue; // wrapper; exclusive transaction lock below
    if (args.some(a => /(?:^|\/)autopilot\.mts$/.test(a))
      && args.some(a => ['status', 'report', 'doctor'].includes(a))) continue;
    found.push(pid);
  }
  return found;
}

function compatibility(repo: string) {
  const path = 'tools/autopilot/stages/mathlib.mts';
  const prior = spawnSync('git', ['--no-replace-objects', 'show', `${SOURCE_COMMIT}:${path}`], { cwd: repo, encoding: 'utf8' });
  if (prior.status !== 0) fail('reviewed source commit unavailable');
  const current = regularBytes(join(repo, path)).toString();
  if (hash(current) !== TARGET_TABLE_SHA256) fail('reviewed target stage table changed, including helper/profile contracts');
  if (!prior.stdout.includes(`workflowRevision = '${SOURCE_REVISION}'`)
    || !current.includes(`workflowRevision = '${TARGET_REVISION}'`)) fail('unsupported stage-table revisions');
  const prefix = (s: string) => {
    const start = s.indexOf('export const stages = ['), end = s.indexOf("    id: '4-splice'");
    if (start < 0 || end < start) fail('unsupported stage-table prefix');
    // The only reviewed completed-prefix change removes extcheck from scaffold
    // (its item files do not exist yet). It remains required after authoring.
    return s.slice(start, end).replace(/\/\/[^\n]*/g, '').replace('...policyGates(ctx), planGate(ctx), extGate(ctx), urlGate(ctx)', '...policyGates(ctx), planGate(ctx), urlGate(ctx)').replace(/\s+/g, '');
  };
  if (prefix(prior.stdout) !== prefix(current)) fail('stage contracts through 3b-author changed beyond reviewed scaffold correction');
  const appendPath = 'tools/autopilot/src/frontier-append.mts';
  const oldAppend = spawnSync('git', ['--no-replace-objects', 'show', `${SOURCE_COMMIT}:${appendPath}`], { cwd: repo });
  if (oldAppend.status !== 0 || !oldAppend.stdout.equals(regularBytes(join(repo, appendPath)))) fail('dynamic append stage contracts changed');
  return { source_commit: SOURCE_COMMIT, source_table_sha256: hash(prior.stdout), target_table_sha256: hash(current), prefix_sha256: hash(prefix(current)), append_sha256: hash(oldAppend.stdout), reviewed_exception: 'Completed scaffold extcheck removed; ordinary author extcheck remains mandatory.' };
}

export function migrateWorkflowPrefix({ repo, run, stateDir, authorizationPath }: {
  repo: string; run: string; stateDir: string; authorizationPath: string;
}): { archiveDir: string; receiptPath: string; idempotent: boolean } {
  repo = resolve(repo); stateDir = resolve(stateDir);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(run)) fail('unsafe run name');
  const authBytes = regularBytes(authorizationPath), auth = JSON.parse(authBytes.toString());
  if (auth.version !== 1 || auth.run !== run || auth.authorized_by !== 'owner'
    || auth.from_revision !== SOURCE_REVISION || auth.to_revision !== TARGET_REVISION
    || auth.authorized_stage !== '3b-author' || !/^[a-f0-9]{64}$/.test(auth.state_sha256 ?? '')
    || typeof auth.authorization !== 'string' || auth.authorization.trim().length < 40)
    fail('explicit owner authorization must bind run, stage, exact revisions and raw state SHA-256');
  const archiveDir = join(repo, 'research', `${run}-workflow-prefix-migration-${hash(authBytes).slice(0, 24)}`);
  const receiptPath = join(archiveDir, 'receipt.json'), statePath = join(stateDir, 'state.json');
  const stateBytes = regularBytes(statePath), state = JSON.parse(stateBytes.toString());
  if (state.run !== run || state.version !== 1) fail('state identity/version mismatch');
  const writers = activeNativeWriters(repo, run);
  if (writers.length) fail(`active native writers: ${writers.join(', ')}`);
  const controller = join(stateDir, 'controller.lock');
  if (existsSync(controller)) {
    const lock = read(controller);
    if (!Number.isInteger(lock.pid) || lock.pid <= 0 || lock.run !== run) fail('invalid controller lock');
    try { process.kill(lock.pid, 0); fail(`controller ${lock.pid} is alive`); }
    catch (e: any) { if (e.code !== 'ESRCH') throw e; }
  }
  if (existsSync(receiptPath)) {
    const receipt = read(receiptPath);
    if (receipt.authorization_sha256 !== hash(authBytes) || receipt.before_raw_sha256 !== auth.state_sha256
      || receipt.after_raw_sha256 !== hash(stateBytes) || state.workflowRevision !== TARGET_REVISION
      || state.paused !== true) fail('existing migration does not match unchanged migrated state');
    for (const [name, digest] of Object.entries(receipt.archive_sha256 ?? {})) {
      if (hash(regularBytes(join(archiveDir, name))) !== digest) fail(`migration archive changed: ${name}`);
    }
    return { archiveDir, receiptPath, idempotent: true };
  }
  if (existsSync(archiveDir)) fail('interrupted migration archive exists; inspect it without resetting history');
  if (state.workflowRevision !== SOURCE_REVISION || hash(stateBytes) !== auth.state_sha256) fail('source revision or authorized raw state changed');
  if (state.stage !== '3b-author' || state.finishedAt || state.stages?.['3b-author']?.doneAt) fail('only an open current 3b-author boundary is supported');
  if (existsSync(join(stateDir, 'frontier-append.lock'))) fail('append transaction unresolved');
  if (existsSync(join(stateDir, 'control.json'))) {
    const control = read(join(stateDir, 'control.json'));
    if (!['pause', 'stop', 'pause-at'].includes(control.command)) fail('pending control could resume or mutate the run');
  }
  const appends = appendRegistry(repo, run).appends;
  const prefix = [...PREFIX_STAGES.slice(0, 2), ...appends.flatMap((e: any) => [`1-append-drift-${e.number}`, `1-append-apply-${e.number}`]), ...PREFIX_STAGES.slice(2)];
  const allowed = new Set(prefix);
  const checkStage = (id: any) => { if (typeof id !== 'string' || !allowed.has(id)) fail(`stage outside verified prefix: ${JSON.stringify(id)}`); };
  for (const id of Object.keys(state.stages ?? {})) checkStage(id);
  for (const id of prefix.slice(0, -1)) {
    if (id === '3-baseline') {
      // The engine deliberately never stamps waived checkpoints done. Coverage
      // comes from genuine native execution plus the required artifacts.
      const d = state.dispatches?.['3-baseline:snap-pre-author'];
      const result = read(join(repo, 'research', `${run}-dispatch`, 'tool-snap-pre-author.result.json'));
      const baseline = read(join(repo, 'research', `${run}-step3-auditor-baseline.json`));
      const touches = read(join(repo, 'research', `${run}-touches.json`));
      if (!state.stages?.[id]?.enteredAt || d?.stage !== id || d.role !== 'tool' || d.label !== 'snap-pre-author'
        || !d.endedAt || d.lastExitOk !== true || !d.covers?.includes('all')
        || result.run !== run || result.role !== 'tool' || result.label !== 'snap-pre-author'
        || result.ok !== true || !result.ended_at || !result.covers?.includes('all')
        || baseline.version !== 1 || baseline.run !== run || !Array.isArray(baseline.items) || !baseline.items.length
        || !touches.snapshots?.some((x: any) => x.label === 'pre-author' && x.at && x.hashes && Object.keys(x.hashes).length))
        fail('waived 3-baseline lacks genuine successful coverage or required artifacts');
    } else if (!state.stages?.[id]?.doneAt || !state.stages[id].gatesPassedAt) fail(`completed prefix missing ${id}`);
  }
  for (const row of [...Object.values<any>(state.gateAttempts ?? {}), ...(state.blockers ?? [])]) checkStage(row.stage);
  const eventsPath = join(stateDir, 'events.jsonl');
  const eventBytes = regularBytes(eventsPath);
  const events = eventBytes.toString().split('\n').filter(Boolean).map(line => JSON.parse(line));
  for (const event of events) {
    if (event.stage != null) checkStage(event.stage);
    if (event.type === 'exec' && /(?:step[89]|post-step8|--label (?:scope-review|receipts|pathway|readiness|owner-report|report-baseline|judge-stamps|close-step))/.test(event.command ?? '')) fail('suffix execution event exists');
  }
  if (/^[89]-/.test(state.pauseAfter ?? '')) fail('suffix pause boundary recorded');
  const dispatchDir = join(repo, 'research', `${run}-dispatch`);
  const reserved: string[] = [], terminal: string[] = [];
  for (const [key, d] of Object.entries<any>(state.dispatches ?? {})) {
    checkStage(d.stage);
    if (key !== `${d.stage}:${d.label}` || !/^[a-z0-9-]+$/.test(d.role ?? '') || !/^[a-z0-9-]+$/.test(d.label ?? '')) fail('invalid dispatch identity');
    if (!d.startedAt || d.endedAt) continue;
    const result = join(dispatchDir, `${d.role}-${d.label}.result.json`);
    if (existsSync(result)) {
      const r = read(result);
      if (r.run !== run || r.role !== d.role || r.label !== d.label || !r.ended_at || !Number.isInteger(r.exit_code)) fail(`nonterminal/mismatched result ${key}`);
      terminal.push(key);
    } else {
      const reservation = events.some(e => e.type === 'dispatch' && e.stage === d.stage && e.role === d.role && e.label === d.label && e.attempt === d.attempt);
      const launched = events.some(e => e.type === 'exec' && typeof e.command === 'string' && e.command.includes(`--label ${d.label}`));
      if (d.stage !== '3b-author' || !reservation || launched) fail(`unresolved launched dispatch ${key}`);
      reserved.push(key); // Preserve honest unlaunched records; ordinary scheduler owns restart.
    }
  }
  // Generated future tasks are plans, not execution evidence. Actual suffix
  // artifacts and every result receipt must stay wholly within the old prefix.
  const evidence: Record<string, string> = {};
  const walk = (dir: string) => {
    for (const name of readdirSync(dir).sort()) {
      const p = join(dir, name), st = lstatSync(p);
      if (st.isSymbolicLink()) fail(`symbolic evidence carrier ${p}`);
      if (st.isDirectory()) { walk(p); continue; }
      if (!st.isFile()) fail(`nonregular evidence carrier ${p}`);
      if (/\.task\.md$|\.(?:log|log\.gz)$|\.prompt(?:\.|$)/.test(name)) continue;
      if (/(?:^|-)(?:step[89]|8-scope|8-judge|8-changes|audit-coverage|spine-audit)(?:-|\.)/.test(name)) fail(`suffix evidence exists: ${name}`);
      const bytes = regularBytes(p);
      if (name.endsWith('.result.json')) {
        const r = JSON.parse(bytes.toString());
        if (r.stage != null) checkStage(r.stage);
        if (/step[89]|post-step8|scope-review|changes-judge|receipts|pathway|readiness|owner-report|report-baseline|judge-stamps|close-step/.test(r.label ?? '')) fail(`suffix dispatch receipt exists: ${name}`);
      }
      evidence[relative(repo, p)] = hash(bytes);
    }
  };
  for (const name of readdirSync(join(repo, 'research')).filter(n => n.startsWith(`${run}-`))) {
    const p = join(repo, 'research', name);
    if (lstatSync(p).isDirectory()) walk(p);
    else {
      if (/\.task\.md$|\.(?:log|log\.gz)$/.test(name)) continue;
      if (/(?:^|-)(?:step[89]|8-scope|8-judge|8-changes|audit-coverage|spine-audit)(?:-|\.)/.test(name)) fail(`suffix evidence exists: ${name}`);
      evidence[relative(repo, p)] = hash(regularBytes(p));
    }
  }
  const compatible = compatibility(repo);
  // Preserve authentic runtime/control preimages before borrowing controller slot.
  const runtime = new Map<string, Buffer>();
  for (const name of readdirSync(stateDir).sort()) {
    if (/\.log(?:\.gz)?$/.test(name)) continue;
    runtime.set(name, regularBytes(join(stateDir, name)));
  }
  const transaction = join(stateDir, 'workflow-prefix-migration.lock');
  mkdirSync(transaction); // Exclusive; interrupted operations fail closed.
  let release: (() => void) | undefined;
  try {
    release = acquireControllerLock(stateDir, run);
    if (activeNativeWriters(repo, run).length) fail('native writer appeared during migration');
    for (const [name, bytes] of runtime) {
      if (name === 'controller.lock') continue;
      if (!regularBytes(join(stateDir, name)).equals(bytes)) fail(`runtime changed: ${name}`);
    }
    for (const [p, digest] of Object.entries(evidence)) if (hash(regularBytes(join(repo, p))) !== digest) fail(`evidence changed: ${p}`);
    mkdirSync(archiveDir);
    const archived: Record<string, string> = {};
    const archive = (name: string, bytes: Buffer | string) => {
      writeFileSync(join(archiveDir, name), bytes, { flag: 'wx', mode: 0o444 }); archived[name] = hash(bytes);
    };
    for (const [name, bytes] of runtime) archive(name, bytes);
    archive('authorization.json', authBytes);
    archive('evidence-hashes.json', body(evidence));
    state.workflowRevision = TARGET_REVISION; state.paused = true;
    const after = body(state);
    archive('state.after.json', after);
    const receipt = { version: 1, policy: 'owner-workflow-prefix-migration-v1', run, at: new Date().toISOString(), authorization_sha256: hash(authBytes), before_raw_sha256: hash(stateBytes), after_raw_sha256: hash(after), from_revision: SOURCE_REVISION, to_revision: TARGET_REVISION, stage: state.stage, verified_prefix: prefix, compatibility: compatible, preserved_unlaunched_reservations: reserved, preserved_uncollected_terminal_dispatches: terminal, changed_fields: ['workflowRevision', 'paused'], archive_sha256: archived };
    writeFileSync(receiptPath, body(receipt), { flag: 'wx', mode: 0o444 });
    const tmp = join(stateDir, 'state.workflow-prefix-migration.tmp');
    writeFileSync(tmp, after, { flag: 'wx' });
    if (read(controller).pid !== process.pid || activeNativeWriters(repo, run).length || !regularBytes(statePath).equals(stateBytes)) fail('writer/state race before replacement; archive retained');
    renameSync(tmp, statePath);
    return { archiveDir, receiptPath, idempotent: false };
  } finally { release?.(); rmSync(transaction, { recursive: true }); }
}
