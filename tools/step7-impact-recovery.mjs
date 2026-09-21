#!/usr/bin/env node
// Recover a never-completed continuation after an engine planning defect.
// Old assignments and failed dispatch artifacts remain immutable audit evidence.
import { existsSync, readFileSync, readdirSync, writeFileSync, renameSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { advanceImpact, digest, impactProgressPath, packPath, workerLabel, workerReport, workflowDir } from './step7-workflow.mjs';
import { readLibraryItems } from './step7-rounds.mjs';
import { itemHashGuard } from './item-hash.mjs';

const phases = { '7.2-impact': 'impact-initial', '7.6-impact': 'impact-repeat', '7.9-repair': 'gate' };
const read = path => JSON.parse(readFileSync(path, 'utf8'));
const requireValue = (ok, message) => { if (!ok) throw Error(`recover-step7-impact: ${message}`); };
const atomic = (path, value) => {
  const temporary = `${path}.${process.pid}.tmp`;
  writeFileSync(temporary, JSON.stringify(value, null, 2) + '\n');
  renameSync(temporary, path);
};
const frozen = (path, value) => {
  if (existsSync(path)) requireValue(JSON.stringify(read(path)) === JSON.stringify(value), `immutable recovery evidence conflict: ${path}`);
  else writeFileSync(path, JSON.stringify(value, null, 2) + '\n', { flag: 'wx' });
};
function verifyEvidence(evidence) {
  for (const [path, hash] of Object.entries(evidence ?? {}))
    requireValue(existsSync(path) && digest(readFileSync(path, 'utf8')) === hash, `evidence changed: ${path}`);
}
function assertInactive(state, stateDir) {
  requireValue(state.paused === true, 'run must be paused');
  const lock = join(stateDir, 'controller.lock');
  if (existsSync(lock)) {
    const { pid } = read(lock);
    requireValue(Number.isInteger(pid) && pid > 0, 'invalid controller lock');
    let alive = true;
    try { process.kill(pid, 0); } catch (error) { if (error.code === 'ESRCH') alive = false; else throw error; }
    requireValue(!alive, `controller ${pid} is still alive`);
  }
  requireValue(!Object.values(state.dispatches ?? {}).some(row => row.startedAt && !row.endedAt), 'a dispatch is active or unresolved');
}

export function recoverStep7Impact({ repo, run, stateDir, reason }) {
  requireValue(typeof run === 'string' && /^[A-Za-z0-9._-]+$/.test(run), 'invalid run');
  requireValue(typeof reason === 'string' && reason.trim().length >= 20, 'reason must explain the planning defect (at least 20 characters)');
  repo = resolve(repo); stateDir = resolve(stateDir);
  const state = read(join(stateDir, 'state.json'));
  requireValue(state.run === run, 'state belongs to a different run');
  assertInactive(state, stateDir);
  requireValue(!existsSync(join(repo, '.autopilot', 'step7-shared-write.lock')), 'shared metadata lock is still held');
  const phase = phases[state.stage], round = state.stageRounds?.[state.stage] ?? 1;
  requireValue(phase, 'current stage is not an owner impact repair stage');
  requireValue(!state.stages?.[state.stage]?.doneAt, 'impact stage already completed');
  const dir = workflowDir(repo, run), progressPath = impactProgressPath(repo, run, phase, round);
  const progress = read(progressPath);
  requireValue(progress.run === run && progress.phase === phase && progress.round === round, 'wrong progress identity');

  // A crash after recording the supersession must never cause the replacement
  // to be abandoned on the same command's retry.
  const recorded = (progress.superseded ?? []).find(row => row.reason === reason);
  if (recorded) {
    verifyEvidence(recorded.evidence);
    const resultPath = join(dir, `${recorded.phase}-${round}-recovery-result.json`);
    if (existsSync(resultPath)) return read(resultPath);
    const result = progress.activePhase === recorded.previousPhase && !progress.complete
      ? advanceImpact(repo, run, phase, round)
      : { complete: progress.complete, phase, round, passes: progress.passes };
    const receipt = { run, phase, round, superseded: recorded.phase, ...result };
    frozen(resultPath, receipt); return receipt;
  }
  requireValue(progress.complete === false, 'impact wave already closed');
  requireValue(Array.isArray(progress.passes) && progress.passes.length > 1
    && progress.activePhase === progress.passes.at(-1)
    && progress.activePhase.startsWith(`${phase}-pass-`), 'only the active continuation can be superseded');
  const activePhase = progress.activePhase, activePath = packPath(repo, run, activePhase, round);
  const pack = read(activePath);
  requireValue(pack.run === run && pack.phase === activePhase && pack.round === round
    && JSON.stringify(pack.units) === JSON.stringify(['1', '2', '3']), 'invalid continuation pack');
  for (const path of [join(dir, `${activePhase}-${round}-collected.json`), join(dir, `${phase}-${round}-closed.json`),
    join(dir, `certification-${phase}-${round}.json`), join(dir, `certification-${activePhase}-${round}.json`)])
    requireValue(!existsSync(path), `completed collection or certification exists: ${path}`);
  const latest = join(dir, 'certification.json');
  if (existsSync(latest)) {
    const cert = read(latest);
    requireValue(cert.phase !== phase || cert.round !== round, 'this impact wave is already certified');
  }
  const labels = new Set(pack.units.map(unit => workerLabel(activePhase, round, unit)));
  for (const row of Object.values(state.dispatches ?? {}))
    if (labels.has(row.label)) requireValue(row.lastExitOk !== true, 'a superseded worker succeeded');
  for (const unit of pack.units)
    requireValue(!existsSync(workerReport(repo, run, activePhase, round, unit)), 'a worker report exists; reconcile it before recovery');
  const dispatchDir = join(repo, 'research', `${run}-dispatch`);
  const artifacts = [activePath];
  if (existsSync(dispatchDir)) for (const name of readdirSync(dispatchDir)) {
    const matches = [...labels].some(label => name.startsWith(`alpha-repair-${label}.`));
    if (!matches) continue;
    const path = join(dispatchDir, name); artifacts.push(path);
    if (name.endsWith('.result.json')) requireValue(read(path).ok !== true, `successful dispatch result exists: ${name}`);
  }
  for (const unit of pack.units) {
    const task = workerReport(repo, run, activePhase, round, unit).replace(/\.json$/, '.task.md');
    if (existsSync(task)) artifacts.push(task);
  }
  const current = Object.fromEntries(readLibraryItems(repo).map(row => [row.id,
    itemHashGuard(readFileSync(join(repo, 'items', `${row.id}.md`), 'utf8'))]));
  requireValue(Object.keys(current).length === Object.keys(pack.before ?? {}).length
    && Object.entries(current).every(([id, hash]) => pack.before[id] === hash),
  'items changed since the pending pack; preserve and reconcile partial repairs before recovery');
  for (const pass of progress.passes.slice(0, -1)) {
    const path = join(dir, `${pass}-${round}-collected.json`);
    verifyEvidence(read(path).evidence); artifacts.push(path);
  }
  const source = phase === 'impact-initial' ? 'initial' : phase === 'impact-repeat' ? 'repeat' : null;
  if (source) {
    const path = join(dir, `${source}-${round}-collected.json`);
    verifyEvidence(read(path).evidence); artifacts.push(path);
  }
  const snapshot = join(dir, `${activePhase}-${round}-progress-before-supersession.json`);
  frozen(snapshot, progress); artifacts.push(snapshot);
  const evidence = Object.fromEntries(artifacts.map(path => [path, digest(readFileSync(path, 'utf8'))]));
  const entry = { phase: activePhase, reason, previousPhase: progress.passes.at(-2),
    pack: activePath, pack_sha256: evidence[activePath], evidence };
  frozen(join(dir, `${activePhase}-${round}-supersession.json`), { version: 1, run, phase, round, ...entry });
  progress.superseded = [...(progress.superseded ?? []), entry];
  progress.passes = progress.passes.slice(0, -1);
  progress.activePhase = entry.previousPhase;
  atomic(progressPath, progress);
  const result = advanceImpact(repo, run, phase, round);
  const receipt = { run, phase, round, superseded: activePhase, ...result };
  frozen(join(dir, `${activePhase}-${round}-recovery-result.json`), receipt);
  return receipt;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2), opt = key => args[args.indexOf(key) + 1];
  try {
    for (const flag of ['--run', '--state-dir', '--reason']) requireValue(args.includes(flag) && opt(flag), `${flag} is required`);
    const result = recoverStep7Impact({ repo: process.cwd(), run: opt('--run'), stateDir: opt('--state-dir'), reason: opt('--reason') });
    console.log(JSON.stringify(result, null, 2));
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}
