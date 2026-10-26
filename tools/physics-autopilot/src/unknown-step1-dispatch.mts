// Administrative absence observation only. Never edits dispatch history or creates results.
import { existsSync, lstatSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { createHash } from 'node:crypto';
import { acquireControllerLock } from './controller-lock.mts';

const hash = (s: string | Buffer) => createHash('sha256').update(s).digest('hex');
const fail = (s: string): never => { throw Error(`physics unknown Step-1 dispatch: ${s}`); };
const regular = (p: string) => {
  if (!lstatSync(p).isFile() || lstatSync(p).isSymbolicLink()) fail(`not a regular file: ${p}`);
  const raw = readFileSync(p), text = raw.toString('utf8');
  if (!raw.equals(Buffer.from(text, 'utf8'))) fail('evidence must preserve exact UTF-8 bytes');
  return text;
};
function identity(run: string, key: string, row: any) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(run) || !/^1-scaffold:batch-[1-9]\d*$/.test(key)) fail('invalid run or dispatch key');
  const unit = key.slice('1-scaffold:batch-'.length);
  if (row?.stage !== '1-scaffold' || row.role !== 'beta' || row.label !== `batch-${unit}`
      || JSON.stringify(row.covers) !== JSON.stringify([unit]) || !row.startedAt || !Number.isFinite(Date.parse(row.startedAt))
      || row.endedAt !== null || row.lastExitOk !== null || !Number.isInteger(row.attempt) || row.attempt < 1
      || row.attempts !== row.attempt) fail('exact genuine unknown native author row required');
  return `beta-batch-${unit}`;
}
function evidence(repo: string, run: string, key: string, row: any) {
  const stem = identity(run, key, row), dir = join(repo, 'research', `${run}-dispatch`);
  localPath(repo, dir);
  const configPath = join(repo, 'physics-autopilot.config.json');
  if (existsSync(configPath)) {
    const config = JSON.parse(regular(configPath));
    if (config.dispatchDir && resolve(repo, config.dispatchDir) !== resolve(dir)) fail('custom dispatch directory is outside this recovery');
  }
  if (lstatSync(dir).isSymbolicLink() || !lstatSync(dir).isDirectory()) fail('dispatch directory must be regular');
  const names = readdirSync(dir);
  // Every immutable retry/replay result counts, including malformed or failed results.
  if (names.some(n => n === `${stem}.result.json` || (n.startsWith(`${stem}.attempt-`) && n.endsWith('.result.json'))))
    fail('native stable or immutable result exists; use ordinary reconciliation');
  const promptNames = names.filter(n => n === `${stem}.prompt.md` || (n.startsWith(`${stem}.attempt-`) && n.endsWith('.prompt.md'))).sort();
  if (!promptNames.includes(`${stem}.prompt.md`) || !promptNames.includes(`${stem}.attempt-${row.attempt}.prompt.md`))
    fail('original stable and immutable attempt prompts required');
  const prompts = Object.fromEntries(promptNames.map(n => {
    const content = regular(join(dir, n));
    if (!content.trim()) fail('empty original prompt');
    return [n, { sha256: hash(content), content }];
  }));
  return { stem, prompts };
}
function localPath(repo: string, path: string) {
  if (!resolve(path).startsWith(resolve(repo) + '/')) fail('path outside physics workspace');
  for (let p = resolve(path); p !== resolve(repo); p = dirname(p))
    if (lstatSync(p).isSymbolicLink()) fail('symlinked evidence/state path');
}
const receiptPath = (stateDir: string, key: string) => join(stateDir, 'unknown-step1-dispatch-retirements', `${hash(key)}.json`);

/** Only the exact unchanged historical row can be administratively drained.
 * The receipt is deliberately outside *.result.json and supplies no coverage. */
export function unknownStep1DispatchRetired(repo: string, run: string, stateDir: string, key: string, row: any): boolean {
  const path = receiptPath(stateDir, key);
  if (!existsSync(path)) return false;
  localPath(repo, path);
  const raw = regular(path);
  if (regular(path + '.sha256').trim() !== hash(raw)) fail('administrative receipt changed');
  const receipt = JSON.parse(raw);
  if (typeof receipt.state_snapshot !== 'string' || hash(receipt.state_snapshot) !== receipt.state_sha256
      || JSON.stringify(JSON.parse(receipt.state_snapshot).dispatches?.[key]) !== JSON.stringify(receipt.original_row))
    fail('original raw state binding changed');
  if (receipt.version !== 1 || receipt.kind !== 'unknown-step1-dispatch-absence' || receipt.run !== run
      || receipt.key !== key || receipt.execution_outcome !== 'unknown' || receipt.coverage_credit !== false
      || JSON.stringify(receipt.process_observation) !== JSON.stringify({ controller: [], preflight: [], writer: [] })
      || receipt.authorized_by !== '/root' || typeof receipt.reason !== 'string' || receipt.reason.trim().length < 20
      || !Number.isFinite(Date.parse(receipt.observed_at)) || Date.parse(receipt.observed_at) < Date.parse(row.startedAt)
      || JSON.stringify(receipt.original_row) !== JSON.stringify(row)) return false;
  const current = evidence(repo, run, key, row);
  if (JSON.stringify(receipt.prompts) !== JSON.stringify(current.prompts)) fail('retired dispatch prompt evidence changed');
  return true;
}

export function retireUnknownStep1Dispatch(o: { repo: string; run: string; stateDir: string; key: string; reason: string;
  inspect?: boolean; scan: (o: any) => { controller: number[]; preflight: number[]; writer: number[] } }) {
  const { repo, run, stateDir, key, reason } = o;
  localPath(repo, stateDir);
  localPath(repo, join(repo, 'research', `${run}-dispatch`));
  if (!resolve(stateDir).startsWith(resolve(repo) + '/') || lstatSync(stateDir).isSymbolicLink()) fail('local regular state directory required');
  if (typeof reason !== 'string' || reason.trim().length < 20) fail('substantive Root reason required');
  const inspect = () => {
    const raw = regular(join(stateDir, 'state.json')), state = JSON.parse(raw), row = state.dispatches?.[key];
    if (state.version !== 1 || state.run !== run || state.paused !== true || state.finishedAt || state.stage !== '1-scaffold'
        || state.stages?.['1-scaffold']?.doneAt || state.stages?.['1-scaffold']?.gatesPassedAt
        || Object.entries<any>(state.stages ?? {}).some(([id, s]) => !id.startsWith('1-') && (s.enteredAt || s.doneAt)))
      fail('unfinished paused Step 1 required');
    const observed = evidence(repo, run, key, row);
    for (const [otherKey, other] of Object.entries<any>(state.dispatches ?? {})) {
      if (otherKey !== key && other.startedAt && !other.endedAt && !unknownStep1DispatchRetired(repo, run, stateDir, otherKey, other))
        fail('other dispatches must be drained');
    }
    for (const name of ['.controller.lock', 'controller.lock']) {
      if (!existsSync(join(stateDir, name))) continue;
      const owner = JSON.parse(regular(join(stateDir, name)));
      if (name === 'controller.lock' && locked && owner.pid === process.pid) continue;
      if (!Number.isInteger(owner.pid) || owner.pid < 1) fail('unverifiable controller lock');
      try { process.kill(owner.pid, 0); fail('live controller lock'); }
      catch (e: any) { if (e.code !== 'ESRCH') throw e; }
    }
    for (const name of ['frontier-append.lock', 'step6-packaging-recovery.lock'])
      if (existsSync(join(stateDir, name))) fail('unresolved native transaction');
    const live = o.scan({ repo, run, stateDir });
    if (live.controller.length || live.preflight.length || live.writer.length) fail('controller/preflight/writers must be absent');
    return { raw, row, process_observation: live, ...observed };
  };
  let locked = false;
  const before = inspect();
  if (Date.parse(before.row.startedAt) > Date.now()) fail('historical dispatch start is in the future');
  if (existsSync(receiptPath(stateDir, key))) fail('administrative observation already exists');
  if (o.inspect) return { key, original_row: before.row, state_sha256: hash(before.raw), prompts: before.prompts, execution_outcome: 'unknown', coverage_credit: false };
  const release = acquireControllerLock(stateDir, run);
  locked = true;
  try {
    const current = inspect();
    if (JSON.stringify(before) !== JSON.stringify(current)) fail('inputs changed while acquiring lock');
    const receipt = { version: 1, kind: 'unknown-step1-dispatch-absence', run, key, authorized_by: '/root', reason,
      observed_at: new Date().toISOString(), original_row: current.row, state_sha256: hash(current.raw), state_snapshot: current.raw,
      prompts: current.prompts, process_observation: current.process_observation, execution_outcome: 'unknown', coverage_credit: false };
    const dir = join(stateDir, 'unknown-step1-dispatch-retirements');
    mkdirSync(dir, { recursive: true });
    localPath(repo, dir);
    const raw = JSON.stringify(receipt, null, 2) + '\n';
    // Write the digest first: an interruption leaves no usable retirement.
    writeFileSync(receiptPath(stateDir, key) + '.sha256', hash(raw) + '\n', { flag: 'wx', mode: 0o444 });
    writeFileSync(receiptPath(stateDir, key), raw, { flag: 'wx', mode: 0o444 });
    return receipt;
  } finally { release(); }
}
