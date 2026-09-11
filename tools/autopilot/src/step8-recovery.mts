import {
  appendFileSync,
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  renameSync,
  writeFileSync,
} from 'node:fs';
import { createHash } from 'node:crypto';
import { basename, join, resolve } from 'node:path';
import { itemHashGuard, shortHash } from '../../item-hash.mjs';

const REOPEN = ['8-changes-judge', '8-close', '8-changes-stamp', '8-receipt'] as const;
const sha256 = (data: string | Buffer): string => createHash('sha256').update(data).digest('hex');

function fail(message: string): never { throw new Error(`recover-step8: ${message}`); }

function livePid(lockPath: string): number | null {
  if (!existsSync(lockPath)) return null;
  let pid: number;
  try { pid = JSON.parse(readFileSync(lockPath, 'utf8')).pid; }
  catch { fail(`unreadable controller lock ${lockPath}`); }
  if (!Number.isInteger(pid) || pid <= 0) fail(`invalid controller lock ${lockPath}`);
  try { process.kill(pid, 0); return pid; }
  catch (error: any) {
    if (error?.code === 'ESRCH') return null;
    throw error;
  }
}

function json(path: string): any {
  try { return JSON.parse(readFileSync(path, 'utf8')); }
  catch (error: any) { fail(`cannot read ${path}: ${error?.message ?? error}`); }
}

export function recoverStep8({
  repo,
  run,
  stateDir,
  dispatchDir,
  authorizationPath,
}: {
  repo: string;
  run: string;
  stateDir: string;
  dispatchDir: string;
  authorizationPath: string;
}): { recoveryId: string; changed: string[]; archived: string[] } {
  const statePath = join(stateDir, 'state.json');
  const state = json(statePath);
  const auth = json(authorizationPath);
  if (state.run !== run) fail(`state belongs to ${JSON.stringify(state.run)}, not ${JSON.stringify(run)}`);
  if (state.paused !== true) fail('run must be paused');
  const pid = livePid(join(stateDir, 'controller.lock'));
  if (pid) fail(`controller ${pid} is still alive; stop it before recovery`);
  if (Object.values<any>(state.dispatches ?? {}).some((d: any) => d.startedAt && !d.endedAt))
    fail('a dispatch is still active or unresolved');
  const step9Dispatches = Object.entries<any>(state.dispatches ?? {})
    .filter(([, d]: any) => String(d.stage ?? '').startsWith('9-'));
  if (step9Dispatches.length) fail(`Step 9 has already dispatched: ${step9Dispatches.map(([k]) => k).join(', ')}`);

  if (auth?.version !== 1 || auth?.run !== run || auth?.baseline !== 'post-step7')
    fail('authorization must be version 1 and bind this run to baseline post-step7');
  if (auth?.authorized_by !== 'owner' || typeof auth?.authorization !== 'string' || !auth.authorization.trim())
    fail('authorization must record the owner instruction');
  if (JSON.stringify(auth?.reopen_stages) !== JSON.stringify(REOPEN))
    fail(`authorization must reopen exactly ${REOPEN.join(', ')}`);
  const recoveryId = String(auth?.recovery_id ?? '');
  if (!/^[a-z0-9][a-z0-9-]*$/.test(recoveryId)) fail('authorization needs a safe recovery_id');
  const required = new Set(Array.isArray(auth.required_targets) ? auth.required_targets : []);
  const allowed = new Set(Array.isArray(auth.allowed_targets) ? auth.allowed_targets : []);
  if (!required.size || [...required].some((id) => !allowed.has(id)))
    fail('required_targets must be a nonempty subset of allowed_targets');

  const touches = json(join(repo, 'research', `${run}-touches.json`));
  const baseline = [...(touches.snapshots ?? [])].reverse().find((s: any) => s.label === 'post-step7');
  if (!baseline?.hashes) fail('post-step7 snapshot is missing');
  for (const id of required) if (!(id in baseline.hashes)) fail(`required target absent from post-step7 snapshot: ${id}`);

  // The canonical Step-8 index performs the full guarded-hash comparison when
  // the reopened stage runs. This early comparison only enforces the recovery
  // allowlist before any old success receipt is archived.
  const changed = readdirSync(join(repo, 'items')).filter((name) => name.endsWith('.md'))
    .map((name) => name.slice(0, -3)).filter((id) => {
      const hash = shortHash(itemHashGuard(readFileSync(join(repo, 'items', `${id}.md`), 'utf8')));
      return !(id in baseline.hashes) || baseline.hashes[id] !== hash;
    }).sort();
  const outside = changed.filter((id) => !allowed.has(id));
  if (outside.length) fail(`changed item(s) outside authorization: ${outside.join(', ')}`);
  const unchangedRequired = [...required].filter((id) => !changed.includes(id));
  if (unchangedRequired.length) fail(`required target(s) were not repaired: ${unchangedRequired.join(', ')}`);

  const archiveDir = join(stateDir, 'recoveries', recoveryId);
  if (existsSync(archiveDir)) fail(`recovery ${recoveryId} already exists`);
  mkdirSync(join(archiveDir, 'dispatch-results'), { recursive: true });
  copyFileSync(statePath, join(archiveDir, 'state.before.json'));
  copyFileSync(authorizationPath, join(archiveDir, basename(authorizationPath)));

  const labels = new Set(Object.values<any>(state.dispatches ?? {})
    .filter((d: any) => REOPEN.includes(d.stage)).map((d: any) => `${d.role}\0${d.label}`));
  const archived: string[] = [];
  for (const name of readdirSync(dispatchDir).filter((name) => name.endsWith('.result.json'))) {
    const path = join(dispatchDir, name);
    let result: any;
    try { result = JSON.parse(readFileSync(path, 'utf8')); } catch { continue; }
    if (!labels.has(`${result.role}\0${result.label}`)) continue;
    renameSync(path, join(archiveDir, 'dispatch-results', name));
    archived.push(name);
  }
  if (!archived.length) fail('no Step-8 success receipts matched the state records');

  for (const [key, record] of Object.entries<any>(state.dispatches ?? {}))
    if (REOPEN.includes(record.stage)) delete state.dispatches[key];
  for (const stage of REOPEN) delete state.stages?.[stage];
  state.blockers = (state.blockers ?? []).filter((b: any) => !REOPEN.includes(b.stage));
  state.stage = REOPEN[0];
  state.finishedAt = null;
  state.lastReportAt = null;
  state.paused = true;
  const tmp = `${statePath}.recovery-tmp`;
  writeFileSync(tmp, JSON.stringify(state, null, 2) + '\n');
  renameSync(tmp, statePath);

  const manifest = {
    version: 1,
    run,
    recovery_id: recoveryId,
    at: new Date().toISOString(),
    authorization: resolve(authorizationPath),
    authorization_sha256: sha256(readFileSync(authorizationPath)),
    baseline: 'post-step7',
    required_targets: [...required].sort(),
    allowed_targets: [...allowed].sort(),
    changed_items: changed,
    reopened_stages: [...REOPEN],
    archived_results: archived.sort(),
    state_before_sha256: sha256(readFileSync(join(archiveDir, 'state.before.json'))),
    state_after_sha256: sha256(readFileSync(statePath)),
  };
  writeFileSync(join(archiveDir, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
  appendFileSync(join(stateDir, 'events.jsonl'), JSON.stringify({
    at: manifest.at, type: 'step8-recovery', message: `owner recovery ${recoveryId} reopened ${REOPEN.join(', ')}`,
    recovery_id: recoveryId, changed_items: changed.length, archived_results: archived.length,
  }) + '\n');
  appendFileSync(join(stateDir, 'autopilot.log'), `[step8-recovery] ${recoveryId}: ${changed.length} changed item(s); archived ${archived.length} result file(s); Step 8 suffix reopened and paused\n`);
  return { recoveryId, changed, archived };
}
