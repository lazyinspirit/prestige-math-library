#!/usr/bin/env node
// run-level.test.mjs — the driver stops where it is supposed to stop.
//
//   node tools/run-level.test.mjs
//
// A full level cannot be run on a developer checkout: it needs tsx, live keys,
// and hours of agent time. What CAN be checked is the part that actually matters
// for leaving a run unattended — that every path which should stop, stops, with
// a durable reason and a resume command. `--simulate` injects outcomes so the
// transition logic runs without spawning anything.
//
// Everything it writes is a research/selftest-* file, removed on the way out.

import { writeFileSync, existsSync, readFileSync, rmSync, readdirSync, mkdtempSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const RESEARCH = join(REPO, 'research');
const tmp = mkdtempSync('/tmp/run-level-test-');

let failures = 0;
const check = (name, condition, detail = '') => {
  if (condition) console.log(`[ ok ] ${name}`);
  else { failures += 1; console.log(`[FAIL] ${name}${detail ? ` — ${detail}` : ''}`); }
};

const cleanup = () => {
  for (const name of readdirSync(RESEARCH)) {
    if (name.startsWith('selftest-')) rmSync(join(RESEARCH, name), { recursive: true, force: true });
  }
};
cleanup();

const drive = (run, args, outcomes = null) => {
  let simulate = [];
  if (outcomes) {
    const fixture = join(tmp, `${run}.json`);
    writeFileSync(fixture, JSON.stringify({ outcomes }));
    simulate = ['--simulate', fixture];
  }
  const child = spawnSync(process.execPath,
    ['tools/run-level.mjs', '--run', run, '--level', '99', ...args, ...simulate],
    { cwd: REPO, encoding: 'utf8' });
  const statePath = join(RESEARCH, `${run}-run-state.json`);
  const state = existsSync(statePath) ? JSON.parse(readFileSync(statePath, 'utf8')) : null;
  return { code: child.status, out: (child.stdout ?? '') + (child.stderr ?? ''), state };
};

const manifests = (run, count) => {
  for (let i = 1; i <= count; i += 1) {
    writeFileSync(join(RESEARCH, `${run}-batch-${i}.pages.json`), JSON.stringify({ pages: [] }));
  }
};

// ---- 1. the default refuses to make judgement calls for you -----------------

{
  const r = drive('selftest-halt', ['--simulate-none'], [{ exit: 0 }]);
  check('default judgment policy halts at step 0', r.state?.halt?.code === 'judgment-required', r.state?.halt?.code);
  check('the halt names the decision to make', /frontier FROM DISK/.test(r.state?.halt?.reason ?? ''));
  check('the halt carries a resume command', /--from-step 1/.test(r.state?.halt?.resume ?? ''));
  check('a halted run exits nonzero', r.code === 1, String(r.code));
}

// ---- 2. a step whose purpose is agent work will not no-op -------------------

{
  // step 0: judgment dispatch, gates. step 1 then has no batch manifests.
  const r = drive('selftest-nobatch', ['--judgment', 'autonomous'], [{ exit: 0 }, { exit: 0 }]);
  check('a step needing batches halts when none exist', r.state?.halt?.code === 'no-batches', r.state?.halt?.code);
  check('it names the manifest pattern it wanted', /batch-\*\.pages\.json/.test(r.state?.halt?.reason ?? ''));
}

// ---- 3. a failing gate stops the run and says which gate -------------------

{
  const run = 'selftest-gate';
  manifests(run, 2);
  // step 0: judgment(0), gates(0). step 1: beta(0), beta(0), gates(FAIL).
  const r = drive(run, ['--judgment', 'autonomous'],
    [{ exit: 0 }, { exit: 0 }, { exit: 0 }, { exit: 0 }, { exit: 1, note: 'precheck.mts: gate-failed' }]);
  check('a failing gate halts the run', r.state?.halt?.code === 'gate-failed', r.state?.halt?.code);
  check('the halt quotes the failing gate', /precheck/.test(r.state?.halt?.reason ?? ''), r.state?.halt?.reason);
  check('step 0 is recorded complete, step 1 is not',
    r.state?.steps?.['0']?.status === 'complete' && !r.state?.steps?.['1']);
  check('the journal recorded both agents', r.state.journal.filter((e) => e.event === 'agent').length === 2);
}

// ---- 4. state is durable, and a halted run will not silently restart -------

{
  const run = 'selftest-gate';   // still halted from the previous block
  const again = spawnSync(process.execPath, ['tools/run-level.mjs', '--run', run, '--level', '99'],
    { cwd: REPO, encoding: 'utf8' });
  check('a halted run refuses to resume without --from-step', again.status === 2, String(again.status));
  check('it explains why', /halted/.test(again.stderr));

  const status = spawnSync(process.execPath, ['tools/run-level.mjs', '--run', run, '--status'],
    { cwd: REPO, encoding: 'utf8' });
  check('--status reports the halt without running anything', status.status === 0 && /HALTED: gate-failed/.test(status.stdout));
}

// ---- 5. the control file stops a run at a step boundary ---------------------

{
  const run = 'selftest-control';
  manifests(run, 1);
  writeFileSync(join(RESEARCH, `${run}-run-control.json`), JSON.stringify({ command: 'halt' }));
  const r = drive(run, ['--judgment', 'autonomous'], [{ exit: 0 }, { exit: 0 }]);
  check('run-control.json halt stops the run', r.state?.halt?.code === 'operator-halt', r.state?.halt?.code);
  check('the control command is journalled', r.state.journal.some((e) => e.event === 'control'));
}

// ---- 6. reaching step 10 is a clean owner pause, not a failure -------------

{
  const run = 'selftest-full';
  manifests(run, 1);
  const r = drive(run, ['--judgment', 'autonomous'], Array.from({ length: 40 }, () => ({ exit: 0 })));
  check('a full traversal halts at the owner pause', r.state?.halt?.code === 'owner-pause', r.state?.halt?.code);
  check('the owner pause exits ZERO — it is success, not failure', r.code === 0, String(r.code));
  check('steps 0 through 9 are complete',
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].every((s) => r.state?.steps?.[String(s)]?.status === 'complete'));
  check('nothing claims to have published', !/publish/i.test(r.state?.halt?.resume ?? '') || /by hand/.test(r.state.halt.resume));
}

cleanup();
rmSync(tmp, { recursive: true, force: true });
console.log(failures ? `\n${failures} FAILURE(S)` : '\nevery stop condition holds');
process.exit(failures ? 1 : 0);
