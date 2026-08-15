#!/usr/bin/env node
// run-drive — watch a run's stage table and dispatch a supervisor on every
// stage transition, without an orchestrator in the loop.
//
// WHY THIS EXISTS. `run-supervisor.mjs` knows which stage a run is on and what
// command advances it, but it only *prints* that command. On frontier-13 the
// orchestrator was the thing that read the print-out and fired the next
// dispatch, and it wrote a status report instead of dispatching three separate
// times — at steps 5, 8 and 9, after being told explicitly not to. The owner's
// framing (2026-08-15) is the one that matters: a cleared stage is a DISPATCH
// TRIGGER, not a reporting checkpoint.
//
// So this closes the loop mechanically. It polls the stage table; when the
// current stage clears, it dispatches a `supervisor` agent (Sonnet 5, cap 2)
// whose whole job is to judge whether the stage really finished and fire the
// next dispatch. The orchestrator is not consulted and cannot stall it.
//
// WHAT IT DELIBERATELY DOES NOT DO. It never judges mathematics, never touches
// items/, library/ or plan-spec.json, and never decides that a stage is done —
// `run-supervisor.mjs` owns the `done` predicates and reads them from disk.
// This file only notices a transition and pays for an agent to handle it.
//
//   node tools/run-drive.mjs --run frontier-14 [--interval 120] [--once]
//
// State lives in research/<run>-drive.json so a restart does not re-dispatch a
// transition that was already handed to a supervisor.

import { spawnSync, spawn } from 'node:child_process';
import { readFileSync, writeFileSync, mkdirSync, appendFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const argv = process.argv.slice(2);
const flag = (name, fallback = null) => {
  const i = argv.indexOf(`--${name}`);
  return i >= 0 && argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : fallback;
};
const run = flag('run');
if (!run) {
  console.error('usage: node tools/run-drive.mjs --run <name> [--interval <sec>] [--once]');
  process.exit(2);
}
const intervalSec = Number(flag('interval', '120'));
const once = argv.includes('--once');

const statePath = `research/${run}-drive.json`;
const logPath = `research/${run}-drive.log`;
const dispatchDir = `research/${run}-dispatch`;
mkdirSync(dispatchDir, { recursive: true });

const log = (msg) => {
  const line = `[${new Date().toISOString()}] ${msg}\n`;
  process.stdout.write(line);
  try { appendFileSync(logPath, line); } catch { /* logging must never kill the driver */ }
};

const readState = () => {
  try { return JSON.parse(readFileSync(statePath, 'utf8')); } catch { return { handled: [] }; }
};
const writeState = (s) => writeFileSync(statePath, JSON.stringify(s, null, 2) + '\n');

/** The stage table is the authority. A parse failure is a transient, not a
 *  reason to advance — returning null makes the caller wait rather than guess. */
const stageState = () => {
  const r = spawnSync('node', ['tools/run-supervisor.mjs', '--run', run, '--state', '--json'],
    { encoding: 'utf8' });
  if (r.status !== 0) { log(`supervisor --state exited ${r.status}: ${(r.stderr || '').trim()}`); return null; }
  try { return JSON.parse(r.stdout); } catch { log('supervisor --state emitted unparseable JSON'); return null; }
};

const advanceText = () => {
  const r = spawnSync('node', ['tools/run-supervisor.mjs', '--run', run, '--advance'], { encoding: 'utf8' });
  return (r.stdout || '') + (r.stderr || '');
};

/** One supervisor per transition, and never a second for a transition already
 *  handed off. frontier-13's duplicate-agent scare came from a liveness check
 *  that matched its own shell; here the guard is a durable id, not a process
 *  scan. */
/** What is already running or already finished, so the supervisor does not
 *  dispatch a second copy of something in flight.
 *
 *  This hole is easy to open by hand: an orchestrator that dispatches one agent
 *  itself and then lets the driver take over has created exactly the state where
 *  the supervisor sees an unstarted stage and starts it again. Listing prompts,
 *  results and live processes makes the overlap visible rather than assumed. */
const inFlight = () => {
  const lines = [];
  try {
    const files = readdirSync(dispatchDir);
    const prompts = files.filter((f) => f.endsWith('.prompt.md')).map((f) => f.replace('.prompt.md', ''));
    const done = files.filter((f) => f.endsWith('.result.json')).map((f) => f.replace('.result.json', ''));
    for (const p of prompts) {
      const finished = done.includes(p);
      let ok = null;
      if (finished) {
        try { ok = JSON.parse(readFileSync(join(dispatchDir, `${p}.result.json`), 'utf8')).ok; } catch { ok = 'unparseable'; }
      }
      lines.push(`  ${p.padEnd(34)} ${finished ? `finished ok=${ok}` : 'RUNNING (prompt written, no result yet)'}`);
    }
  } catch { /* directory may not exist yet */ }
  const ps = spawnSync('sh', ['-c', "ps -eo comm,args | awk '$1==\"node\" && /dispatch\\.mjs --role/ {print}'"], { encoding: 'utf8' });
  const live = (ps.stdout || '').trim().split('\n').filter(Boolean);

  // Task files written but never dispatched. The orchestrator often prepares
  // the next stage's briefs while the current one finishes; those are exactly
  // the dispatches the supervisor should fire, and naming them removes the
  // guesswork about what "the remainder" means.
  const ready = [];
  try {
    const prompts = new Set(readdirSync(dispatchDir).filter((f) => f.endsWith('.prompt.md')));
    for (const f of readdirSync('research')) {
      if (!f.startsWith(`${run}-`) || !f.endsWith('.task.md')) continue;
      const stem = f.replace(`${run}-`, '').replace('.task.md', '');
      const dispatched = [...prompts].some((p) => p.includes(stem) || stem.includes(p.replace('.prompt.md', '')));
      if (!dispatched) ready.push(`research/${f}`);
    }
  } catch { /* best effort */ }

  return { lines, liveCount: live.length, ready };
};

const dispatchSupervisor = (fromStage, toStage, advice) => {
  const label = `advance-${toStage}`;
  const taskPath = `research/${run}-supervisor-${toStage}.task.md`;
  const flight = inFlight();
  writeFileSync(taskPath, [
    `## Stage transition on run \`${run}\``,
    '',
    `The stage table reports **\`${fromStage}\` cleared**. The run is now on`,
    `**\`${toStage}\`**, and nothing has been dispatched for it yet.`,
    '',
    'You were dispatched by `run-drive.mjs` the moment the transition was',
    'detected. No orchestrator reviewed this and none needs to. Your job is to',
    'fire the next dispatch, not to report that it is time to fire it.',
    '',
    '### What `run-supervisor.mjs --advance` says',
    '',
    '```',
    advice.trim(),
    '```',
    '',
    '### ALREADY DISPATCHED — do not start a second copy of any of these',
    '',
    'Some of this stage may already be in flight, dispatched by hand before the',
    'driver took over. Check this list against what `--advance` tells you to do,',
    'and dispatch only the remainder.',
    '',
    '```',
    flight.lines.length ? flight.lines.join('\n') : '  (no dispatch prompts written yet)',
    '',
    `  live dispatch processes right now: ${flight.liveCount}`,
    '```',
    '',
    'A `RUNNING` row means the agent is working and its result has not landed.',
    'Zero live processes with a `RUNNING` row means that lane died without',
    'writing a result — that is the one case worth a single retry.',
    '',
    '### Task files written but not yet dispatched',
    '',
    'These were prepared for a stage and never fired. If `--advance` calls for a',
    'dispatch and a matching task file is sitting here, use it — do not write a',
    'new one and do not re-derive the work it already specifies.',
    '',
    '```',
    flight.ready.length ? flight.ready.map((f) => `  ${f}`).join('\n') : '  (none)',
    '```',
    '',
    '### Your contract',
    '',
    'Read `briefs/supervisor.md` — it is your full contract and it wins over',
    'this file. In short: you judge only whether a stage is finished, whether a',
    'blocker is real, and whether a dead lane is worth one retry. You never',
    'judge mathematics, and you never touch `items/`, `library/` or',
    '`plan-spec.json`.',
    '',
    'Verify from disk before you dispatch. A result file counts only when it',
    'parses and carries `ok: true` — on frontier-13, seven refuter dispatches',
    'produced prompt files and no results while a report tabled all eleven as',
    'dispatched, and 74 dispositions went silently unwritten. Count `ok:true`,',
    'not prompt files, and not what a report claims.',
    '',
    'If a lane is genuinely dead, retry it **once** and say so. If the stage is',
    'not actually finished, say which artifact is missing and exit without',
    'dispatching — a false advance is worse than a wait.',
    '',
    '**No permission prompts of any kind**, from you or anything you dispatch,',
    'including inside an `&&` chain. If something truly cannot proceed, record a',
    'blocker in your report. That is the escape hatch.',
  ].join('\n') + '\n');

  const out = join(dispatchDir, `supervisor-${toStage}.nohup`);
  const child = spawn('node', [
    'tools/dispatch.mjs', '--role', 'supervisor',
    '--brief', 'briefs/supervisor.md',
    '--task', taskPath,
    '--label', label, '--run', run, '--timeout', '3600',
  ], { detached: true, stdio: ['ignore', 'ignore', 'ignore'] });
  child.unref();
  log(`dispatched supervisor for ${fromStage} -> ${toStage} (task ${taskPath}, log ${out})`);
  return label;
};

const tick = () => {
  const st = stageState();
  if (!st) return false;
  const state = readState();

  if (st.complete) {
    if (!state.handled.includes('__complete__')) {
      state.handled.push('__complete__');
      writeState(state);
      log('ALL STAGES COMPLETE — step 10 report is owed to the owner. Driver exiting.');
    }
    return true;
  }

  const current = st.current;
  const trail = st.trail || [];
  const cleared = trail.filter((s) => s.done).map((s) => s.id);
  const prev = cleared.length ? cleared[cleared.length - 1] : null;

  if (state.lastCurrent === undefined) {
    state.lastCurrent = current;
    writeState(state);
    log(`watching ${run} — current stage ${current}`);
    return false;
  }

  if (current !== state.lastCurrent) {
    const key = `${state.lastCurrent}->${current}`;
    if (!state.handled.includes(key)) {
      log(`TRANSITION ${key}`);
      dispatchSupervisor(prev ?? state.lastCurrent, current, advanceText());
      state.handled.push(key);
    }
    state.lastCurrent = current;
    writeState(state);
  }
  return false;
};

if (once) { tick(); process.exit(0); }

log(`run-drive started for ${run}, polling every ${intervalSec}s`);
const timer = setInterval(() => {
  let done = false;
  try { done = tick(); } catch (err) { log(`tick threw: ${err?.message ?? err}`); }
  if (done) { clearInterval(timer); process.exit(0); }
}, intervalSec * 1000);
tick();
