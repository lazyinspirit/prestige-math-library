#!/usr/bin/env node
// run-control.mjs — talk to a run that is already going.
//
//   node tools/run-control.mjs --run frontier-10 show
//   node tools/run-control.mjs --run frontier-10 pause
//   node tools/run-control.mjs --run frontier-10 halt
//   node tools/run-control.mjs --run frontier-10 park thm-some-id
//   node tools/run-control.mjs --run frontier-10 budget 400
//   node tools/run-control.mjs --run frontier-10 clear
//
// WHY A FILE AND NOT A SIGNAL. The run may be a systemd service, a detached
// process, or something a previous session started and forgot; a supervising
// session may be on a different tty or a different day. A file in the repo is
// reachable by all of them and survives every one of them dying.
//
// COMMANDS LAND AT A STEP BOUNDARY, NEVER MID-STEP. run-level polls this between
// transitions only. A half-applied step — agents dispatched but gates unrun,
// snapshots taken but adjudications unwritten — is the state that is expensive
// to reason about afterwards, so a command waiting seconds is the cheaper side
// of that trade. `halt` is not a kill: to stop a run NOW, stop the process; this
// stops it cleanly and leaves a resumable record.

import { writeFileSync, readFileSync, existsSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { REPO } from './paths.mjs';

const argv = process.argv.slice(2);
const option = (name) => { const i = argv.indexOf(name); return i >= 0 ? argv[i + 1] : null; };
const run = option('--run');
const positional = argv.filter((arg, i) => !arg.startsWith('--') && argv[i - 1] !== '--run');
const [command, ...rest] = positional;

const COMMANDS = ['show', 'pause', 'resume', 'halt', 'park', 'budget', 'clear'];

const usage = (message) => {
  if (message) console.error(`run-control: ${message}`);
  console.error('usage: node tools/run-control.mjs --run <name> <command> [arg]');
  console.error(`commands: ${COMMANDS.join(', ')}`);
  console.error('  show          current control command and run status');
  console.error('  pause         stop cleanly at the next step boundary, resumable');
  console.error('  halt          stop and record a halt, resumable with --from-step');
  console.error('  park <id>     stop working one item; the rest of the level continues');
  console.error('  budget <n>    change the judge-call budget of a running build');
  console.error('  resume/clear  remove the control file');
  process.exit(2);
};

if (!run || !/^[A-Za-z0-9._-]+$/.test(run)) usage('--run is required and must be a plain run name');
if (!command || !COMMANDS.includes(command)) usage(`command must be one of ${COMMANDS.join(', ')}`);

// A BUILD keeps its run files in research/; an AUDIT WAVE keeps them in
// research/audit/, because run-wave.mjs namespaces everything under DIR so a
// wave and a level of the same number cannot collide. This file hardcoded
// research/, so every documented "steer it" command for a wave —
// `run-control.mjs --run wave4 pause` in UNATTENDED-AUDIT.md — wrote a control
// file that the audit driver never polls, and then PRINTED SUCCESS. A control
// channel that silently does nothing is worse than one that errors: the operator
// believes the wave is pausing and it runs straight on.
//
// Resolve by locating the run's own state file, which every started run writes.
// Audit first, since a wave is the namespaced case; fall back to research/ so an
// unstarted build still gets its historical path.
const RUN_DIRS = ['research/audit', 'research'];
const runDir = RUN_DIRS.find((d) => existsSync(join(REPO, d, `${run}-run-state.json`))) ?? 'research';
const controlPath = join(REPO, runDir, `${run}-run-control.json`);
const statePath = join(REPO, runDir, `${run}-run-state.json`);

const write = (payload) => {
  writeFileSync(controlPath, JSON.stringify({ ...payload, at: new Date().toISOString() }, null, 2) + '\n');
  console.log(`run-control: wrote ${payload.command} to ${controlPath}`);
  console.log('             it takes effect at the next step boundary, not mid-step.');
};

if (command === 'show') {
  if (!existsSync(statePath)) {
    console.log(`run-control: no run state at ${statePath} — nothing is running under that name`);
  } else {
    const state = JSON.parse(readFileSync(statePath, 'utf8'));
    console.log(`run ${state.run}: ${state.status} at step ${state.step} (updated ${state.updated_at})`);
    if (state.halt) console.log(`  halted: ${state.halt.code} — ${String(state.halt.reason).split('\n')[0]}`);
    if (state.parked?.length) console.log(`  parked: ${state.parked.map((p) => p.id).join(', ')}`);
  }
  console.log(existsSync(controlPath)
    ? `pending control: ${readFileSync(controlPath, 'utf8').trim()}`
    : 'pending control: none');
  process.exit(0);
}

if (command === 'clear' || command === 'resume') {
  if (existsSync(controlPath)) {
    rmSync(controlPath);
    console.log(`run-control: cleared ${controlPath}`);
  } else {
    console.log('run-control: no control file to clear');
  }
  // A paused or halted run has already exited; clearing the file is necessary
  // but not sufficient. Say so rather than implying the run resumes itself.
  if (existsSync(statePath)) {
    const state = JSON.parse(readFileSync(statePath, 'utf8'));
    if (state.status !== 'running') {
      console.log(`\nthe run is ${state.status}; clearing the file does not restart it. Start it again with:`);
      console.log(`  node tools/run-level.mjs --run ${run} --level ${state.level}` +
        (state.status === 'halted' ? ` --from-step ${state.step}` : ''));
    }
  }
  process.exit(0);
}

if (command === 'park') {
  const id = rest[0];
  if (!id) usage('park needs an item id');
  write({ command: 'park', id });
  process.exit(0);
}

if (command === 'budget') {
  const value = Number(rest[0]);
  if (!Number.isFinite(value) || value < 0) usage('budget needs a non-negative number');
  write({ command: 'budget', value });
  process.exit(0);
}

write({ command });
