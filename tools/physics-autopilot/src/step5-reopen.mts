// Owner-authorized re-run of Step 5 after Step 7.
//
// WHY THIS EXISTS. Step 7 repairs change the bytes Step 5 audited: every reader
// repair, refuter finding and 5a/5b decision is keyed to a carrier hash, so a
// repaired item's Step-5 coverage is stale by construction. The engine has no
// generic "re-run a completed step" — coverage comes from successful result
// receipts in the dispatch directory, and a stamped stage is never re-derived.
// This command performs that surgery explicitly and reversibly, in the same
// idiom as `recover-step8`: it archives the Step-5 result receipts and the
// Step-5 artifacts they produced, clears only the ten Step-5 stage records, and
// arms `pause-at` so the re-run stops at its own boundary. Items, contracts,
// manifests, judge ledgers and the Step-6/Step-7 receipts are left untouched.

import { existsSync, mkdirSync, readFileSync, readdirSync, renameSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { basename, join } from 'node:path';

export const STEP5_STAGES = [
  '5a-prepare', '5a-read', '5a-split', '5a-refute', '5a-collect', '5a-adjudicate',
  '5a-baseline', '5b-edges', '5b-cross', '5b-close',
] as const;

const sha256 = (data: string | Buffer): string => createHash('sha256').update(data).digest('hex');

function fail(message: string): never { throw new Error(`reopen-step5: ${message}`); }

function json(path: string): any {
  try { return JSON.parse(readFileSync(path, 'utf8')); }
  catch (error: any) { fail(`cannot read ${path}: ${error?.message ?? error}`); }
}

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

/** Step-5 artifacts a re-run regenerates. Deliberately excludes every Step-6,
 *  Step-7 and published-repair artifact: those are the evidence the reopen must
 *  preserve. */
const ARTIFACT_PATTERNS = [
  /-step5-hash-.*\.json$/,
  /-step5-scope-.*\.json$/,
  /-step5-closure\.json$/,
  /-step5-blockers\.json$/,
  /-step5-auditor-baseline\.json$/,
  /-step5-auditor-certifications\.json$/,
  /-step5-owner-recertification-.*\.json$/,
  /-reader-.*\.md$/,
  /-refute-.*\.json$/,
  /-alpha-(?:[a-z]+|batch-[1-9]\d*)-5a.*\.(?:md|json)$/,
  /-alpha-5b\.md$/,
  /-5b-verdicts\.jsonl$/,
  /-cross-group-edges\.json$/,
  /-touches\.json$/,
  /-impact(?:-5b)?\.json$/,
];

export function reopenStep5({
  repo,
  run,
  stateDir,
  dispatchDir,
  authorizationPath,
  pauseAfter = '5b-close',
  now = () => new Date(),
}: {
  repo: string;
  run: string;
  stateDir: string;
  dispatchDir: string;
  authorizationPath: string;
  pauseAfter?: string;
  now?: () => Date;
}): { reopenId: string; archiveDir: string; archived: string[]; clearedStages: string[] } {
  const statePath = join(stateDir, 'state.json');
  const state = json(statePath);
  const authBytes = readFileSync(authorizationPath, 'utf8');
  const auth = JSON.parse(authBytes);

  if (state.run !== run) fail(`state belongs to ${JSON.stringify(state.run)}, not ${JSON.stringify(run)}`);
  if (state.paused !== true) fail('run must be paused');
  const pid = livePid(join(stateDir, 'controller.lock'));
  if (pid) fail(`controller ${pid} is still alive; stop it before reopening`);
  if (Object.values<any>(state.dispatches ?? {}).some((d: any) => d.startedAt && !d.endedAt))
    fail('a dispatch is still active or unresolved');
  if (!state.stages?.['7-freeze']?.doneAt) fail('Step 7 has not landed: 7-freeze is not stamped complete');
  const enteredStep8 = Object.keys(state.stages ?? {}).filter((id) => /^8-/.test(id)
    && state.stages[id]?.enteredAt);
  if (enteredStep8.length) fail(`Step 8 has already started (${enteredStep8.join(', ')}); refusing to reopen Step 5`);

  if (auth.version !== 1) fail('authorization must carry version 1');
  if (auth.run !== run) fail(`authorization is for ${JSON.stringify(auth.run)}, not ${JSON.stringify(run)}`);
  if (typeof auth.authorization !== 'string' || !auth.authorization.trim())
    fail('authorization must state the owner instruction');
  if (typeof auth.authorized_by !== 'string' || !auth.authorized_by.trim())
    fail('authorization must name the authorizing owner');
  const named = new Set<string>(Array.isArray(auth.reopen_stages) ? auth.reopen_stages.map(String) : []);
  for (const stage of STEP5_STAGES) {
    if (!named.has(stage)) fail(`authorization must name every Step-5 stage to reopen; missing ${stage}`);
  }
  if (!STEP5_STAGES.includes(pauseAfter as any)) fail(`pause-after must be one of the Step-5 stages; got ${pauseAfter}`);

  const stamp = now().toISOString().replace(/[:.]/g, '-');
  const reopenId = sha256(authBytes).slice(0, 16);
  const archiveDir = join(repo, 'research', `${run}-step5-reopen-${stamp}`);
  mkdirSync(archiveDir, { recursive: true });

  const archived: string[] = [];
  const keep = (from: string) => {
    const to = join(archiveDir, basename(from));
    renameSync(from, to);
    archived.push(basename(from));
  };

  // 1. Every receipt, log and prompt belonging to a Step-5 dispatch lane.
  const step5Dispatch = Object.entries<any>(state.dispatches ?? {})
    .filter(([key]) => STEP5_STAGES.includes(key.split(':')[0] as any));
  if (!step5Dispatch.length) fail('no Step-5 dispatch records in state; nothing to reopen');
  for (const [, record] of step5Dispatch) {
    const prefix = `${record.role}-${record.label}`;
    for (const name of readdirSync(dispatchDir)) {
      if (!name.startsWith(prefix)) continue;
      keep(join(dispatchDir, name));
    }
  }

  // 2. The Step-5 artifacts those lanes produced.
  const researchDir = join(repo, 'research');
  for (const name of readdirSync(researchDir)) {
    if (!name.startsWith(`${run}-`)) continue;
    if (!ARTIFACT_PATTERNS.some((pattern) => pattern.test(name))) continue;
    keep(join(researchDir, name));
  }

  // 3. Clear exactly the ten Step-5 stage records, their blockers and their
  //    (gate, item) attempt counters. Everything else in the run is preserved.
  const clearedStages: string[] = [];
  for (const stage of STEP5_STAGES) {
    if (state.stages?.[stage]) { delete state.stages[stage]; clearedStages.push(stage); }
  }
  state.blockers = (state.blockers ?? []).filter((b: any) => !STEP5_STAGES.includes(b?.stage));
  for (const key of Object.keys(state.gateAttempts ?? {})) {
    if (STEP5_STAGES.includes(state.gateAttempts[key]?.stage)) delete state.gateAttempts[key];
  }
  state.pauseAfter = pauseAfter;
  state.paused = true;
  writeFileSync(statePath, JSON.stringify(state, null, 2) + '\n');

  const receipt = {
    version: 1,
    run,
    reopen_id: reopenId,
    at: now().toISOString(),
    authorization: basename(authorizationPath),
    authorization_sha256: sha256(authBytes),
    authorized_by: auth.authorized_by,
    instruction: auth.authorization,
    archive_dir: archiveDir.slice(repo.length + 1),
    archived_count: archived.length,
    archived,
    cleared_stages: clearedStages,
    pause_after: pauseAfter,
    preserved: ['items/', 'library/', 'contracts', 'manifests', `${run}-judge*`, `${run}-step7-*`],
  };
  writeFileSync(join(researchDir, `${run}-step5-reopen.json`), JSON.stringify(receipt, null, 2) + '\n');

  return { reopenId, archiveDir, archived, clearedStages };
}
