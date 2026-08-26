// End-to-end: does the engine actually drive a pipeline to completion with
// nobody in the loop?
//
// Unit tests on coverage prove the predicate. They do not prove the LOOP —
// that a cleared stage triggers the next dispatch, that a failed lane is
// retried exactly once, that a failing gate stops the run instead of advancing
// past it, that a pause holds and a resume releases. Those are the behaviours
// the whole thing exists for, and the only honest way to test them is to run
// the engine against a fake pipeline whose agents are shell scripts.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, chmodSync, existsSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { State, statePath } from '../src/state.mts';
import { Reporter } from '../src/reporter.mts';
import { Executor } from '../src/executor.mts';
import { makeExecAdapter } from '../src/adapters/exec.mts';
import { writeCommand } from '../src/control.mts';

// The engine refuses a stage that can neither pass nor fail (`src/spec.mts`),
// and a TERMINAL stage may not waive its gates at all — that rule exists because
// frontier-14's `10-report` declared `gates: () => []` and the last stage of the
// pipeline therefore could not fail.
//
// Fixtures obey it like any other spec. A single-stage fixture is its own
// terminal stage, so it gets a real gate that trivially passes; a fixture stage
// with a later stage after it may waive with a reason.
const PASSING_GATE = { id: 'fixture-ok', argv: ['node', '-e', 'console.log("checked 1 thing")'] };
const NO_GATES = 'fixture stage: the test assertions are the check; nothing on disk to verify here';

/** A fake pipeline: a repo with a `fake-agent` that writes the result record a
 *  real dispatcher would write. */
function fixture({ failUnits = [], gateFails = false } = {}) {
  const repo = mkdtempSync(join(tmpdir(), 'ap-e2e-'));
  const dispatchDir = join(repo, 'dispatch');
  mkdirSync(dispatchDir, { recursive: true });

  const agent = join(repo, 'fake-agent.mjs');
  writeFileSync(agent, `
import { writeFileSync, appendFileSync } from 'node:fs';
import { join } from 'node:path';
const a = process.argv.slice(2);
const get = (n) => { const i = a.indexOf('--' + n); return i >= 0 ? a[i+1] : null; };
const label = get('label'), covers = (get('covers') || '').split(',').filter(Boolean);
const fail = ${JSON.stringify(failUnits)}.some((u) => covers.includes(String(u)));
appendFileSync(join('${dispatchDir}', 'calls.log'), label + '\\n');
// Mirrors the real dispatcher's record (tools/dispatch.mjs), not an
// invented shape: role, label, run, covers, ok, plus the fields it carries.
writeFileSync(join('${dispatchDir}', get('role') + '-' + label + '.result.json'),
  JSON.stringify({ role: get('role'), label, run: get('run'), covers,
                   runner: 'fake', model: 'fake', sandbox: 'workspace-write',
                   exit_code: fail ? 1 : 0, timed_out: false, ok: !fail }));
process.exit(fail ? 1 : 0);
`);

  const gate = join(repo, 'fake-gate.mjs');
  writeFileSync(gate, `console.log('fake-gate: ${gateFails ? 0 : 42} checked'); process.exit(0);`);

  return { repo, dispatchDir, agent, gate };
}

function makeStages({ gate = null, units = ['1', '2', '3'] } = {}) {
  return [
    {
      id: 's1', label: 'first',
      units: () => units,
      pattern: /^worker-/,
      labelFor: (u) => `u${u}`,
      concurrency: 3,
      plan: (ctx, pending) => pending.map((u) => ({ role: 'worker', label: `u${u}`, job: 'authoring', covers: [u] })),
      ...(gate ? { gates: () => [gate] } : { gatesWaived: NO_GATES }),
    },
    {
      id: 's2', label: 'second',
      units: () => ['all'],
      pattern: /^finisher-/,
      concurrency: 1,
      plan: () => [{ role: 'finisher', label: 'final', job: 'audit', covers: ['all'] }],
      gates: () => [PASSING_GATE],
    },
  ];
}

function makeExecutor(fx, stages, extra = {}) {
  const stateDir = join(fx.repo, '.autopilot');
  const config: any = {
    run: 'testrun', repo: fx.repo, stateDir, dispatchDir: fx.dispatchDir,
    argv: ['true'], concurrency: 3, maxAttempts: 2, coversMap: {}, dispatchStaggerMs: 0, ...extra,
  };
  const state = new State(statePath(stateDir)).init('testrun');
  const reporter = new Reporter({ dir: stateDir, intervalMs: 10 ** 9, sink: () => {} });
  const adapter = makeExecAdapter({
    argv: ['node', fx.agent, '--role', '{role}', '--label', '{label}',
           '--run', '{run}', '--covers', '{covers}'],
    cwd: fx.repo,
  });
  return new Executor({ config, stages, adapter, state, reporter });
}

const settle = async (ex, n = 12) => {
  for (let i = 0; i < n; i += 1) {
    const r = await ex.tick();
    if (r === 'done' || r === 'blocked' || r === 'stopped') return r;
    await Promise.allSettled([...ex.inflight.values()].map((d) => d.promise));
  }
  return 'working';
};

test('drives a two-stage pipeline to completion with no intervention', async () => {
  const fx = fixture();
  const ex = makeExecutor(fx, makeStages());
  const outcome = await settle(ex);
  assert.equal(outcome, 'done');
  const calls = readFileSync(join(fx.dispatchDir, 'calls.log'), 'utf8').trim().split('\n');
  assert.deepEqual(calls.sort(), ['final', 'u1', 'u2', 'u3']);
  assert.ok(existsSync(join(fx.repo, '.autopilot', 'status.md')));
});

test('dispatches only the units that are missing, never a covered one twice', async () => {
  const fx = fixture();
  // unit 2 already covered out of band, as a hand-run dispatch would be
  writeFileSync(join(fx.dispatchDir, 'worker-u2.result.json'),
    JSON.stringify({ role: 'worker', label: 'u2', covers: ['2'], ok: true }));
  const ex = makeExecutor(fx, makeStages());
  await settle(ex);
  const calls = readFileSync(join(fx.dispatchDir, 'calls.log'), 'utf8').trim().split('\n');
  assert.ok(!calls.includes('u2'), 'an already-covered unit must not be re-dispatched');
  assert.ok(calls.includes('u1') && calls.includes('u3'));
});

test('retries a failed lane once, then blocks instead of retrying forever', async () => {
  const fx = fixture({ failUnits: ['2'] });
  const ex = makeExecutor(fx, makeStages());
  const outcome = await settle(ex);
  assert.equal(outcome, 'blocked');
  const calls = readFileSync(join(fx.dispatchDir, 'calls.log'), 'utf8').trim().split('\n');
  assert.equal(calls.filter((c) => c === 'u2').length, 2, 'maxAttempts=2 means exactly two tries');
  assert.ok(ex.state.data.blockers.some((b) => b.message.includes('failed 2x')));
  assert.ok(!calls.includes('final'), 'the next stage must not start over a blocked one');
});

test('a vacuous gate blocks the run — success over an empty scope is not a pass', async () => {
  const fx = fixture({ gateFails: true });
  const stages = makeStages({
    gate: {
      id: 'fake', argv: ['node', fx.gate],
      liveness: { pattern: '(\\d+) checked', min: 1, unit: 'checks' },
    },
  });
  const ex = makeExecutor(fx, stages);
  const outcome = await settle(ex);
  assert.equal(outcome, 'blocked');
  assert.ok(ex.state.data.blockers.some((b) => /vacuous/.test(b.message)),
    `expected a vacuity blocker, got ${JSON.stringify(ex.state.data.blockers)}`);
});

test('a live gate passes and the run continues', async () => {
  const fx = fixture({ gateFails: false });
  const stages = makeStages({
    gate: { id: 'fake', argv: ['node', fx.gate], liveness: { pattern: '(\\d+) checked', min: 1 } },
  });
  const ex = makeExecutor(fx, stages);
  assert.equal(await settle(ex), 'done');
});

test('pause holds the run and resume releases it', async () => {
  const fx = fixture();
  const ex = makeExecutor(fx, makeStages());
  const stateDir = join(fx.repo, '.autopilot');
  writeCommand(stateDir, 'pause');
  await ex.tick();
  assert.equal(ex.state.paused, true);
  assert.equal(ex.inflight.size, 0, 'a paused run starts nothing new');
  assert.ok(!existsSync(join(fx.dispatchDir, 'calls.log')), 'no agent should have run');
  writeCommand(stateDir, 'resume');
  assert.equal(await settle(ex), 'done');
});

test('stop exits without starting anything further', async () => {
  const fx = fixture();
  const ex = makeExecutor(fx, makeStages());
  writeCommand(join(fx.repo, '.autopilot'), 'stop');
  assert.equal(await ex.tick(), 'stopped');
});

test('skip advances past a stage the owner chose to bypass', async () => {
  const fx = fixture({ failUnits: ['1', '2', '3'] });
  const ex = makeExecutor(fx, makeStages());
  writeCommand(join(fx.repo, '.autopilot'), 'skip', { stage: 's1' });
  const outcome = await settle(ex);
  assert.equal(outcome, 'done');
  const calls = readFileSync(join(fx.dispatchDir, 'calls.log'), 'utf8').trim().split('\n');
  assert.deepEqual(calls, ['final'], 'only the second stage should have run');
});

test('an unknown control command is reported and discarded, not retried forever', async () => {
  const fx = fixture();
  const ex = makeExecutor(fx, makeStages());
  writeFileSync(join(fx.repo, '.autopilot', 'control.json'), JSON.stringify({ command: 'launch-missiles' }));
  await ex.tick();
  const events = readFileSync(join(fx.repo, '.autopilot', 'events.jsonl'), 'utf8');
  assert.ok(/control-error/.test(events));
  assert.ok(!existsSync(join(fx.repo, '.autopilot', 'control.json')), 'the bad command must be consumed');
});

test('state survives a process restart and does not redo finished work', async () => {
  const fx = fixture();
  const ex1 = makeExecutor(fx, makeStages());
  await ex1.tick();
  await Promise.allSettled([...ex1.inflight.values()].map((d) => d.promise));
  const before = readFileSync(join(fx.dispatchDir, 'calls.log'), 'utf8').trim().split('\n').length;

  const ex2 = makeExecutor(fx, makeStages());        // fresh engine, same disk
  assert.equal(await settle(ex2), 'done');
  const after = readFileSync(join(fx.dispatchDir, 'calls.log'), 'utf8').trim().split('\n');
  assert.equal(after.filter((c) => c === 'u1').length, 1, 'a restart must not re-run a covered unit');
  assert.ok(after.length > before);
});

test('a stage that asks a model for mechanical work is refused at dispatch', async () => {
  const fx = fixture();
  const bad = [{
    id: 's1', label: 'bad', units: () => ['1'], pattern: /^worker-/,
    concurrency: 1,
    plan: () => [{ role: 'worker', label: 'u1', job: 'transition', covers: ['1'] }],
    gates: () => [PASSING_GATE],
  }];
  const ex = makeExecutor(fx, bad);
  assert.equal(await ex.tick(), 'blocked',
    'a deterministic role-contract defect is a blocker, not an engine crash');
  assert.equal(ex.inflight.size, 0);
  assert.equal(existsSync(join(fx.dispatchDir, 'calls.log')), false,
    'the invalid cognitive job reached the adapter');
  assert.deepEqual(Object.keys(ex.state.data.dispatches), [],
    'a deterministic role-contract defect consumed a retry attempt');
  assert.ok(ex.state.data.blockers.some((row: any) => /is mechanical/.test(row.message)));
});

test('a missing brief or task blocks immediately, without spending an agent', async () => {
  const fx = fixture();
  const stages = [{
    id: 's1', label: 'needs a file', units: () => ['1'], pattern: /^worker-/,
    concurrency: 1,
    plan: () => [{ role: 'worker', label: 'u1', job: 'authoring', covers: ['1'], task: 'research/does-not-exist.md' }],
    gates: () => [PASSING_GATE],
  }];
  const ex = makeExecutor(fx, stages);
  assert.equal(await ex.tick(), 'blocked');
  assert.ok(ex.state.data.blockers.some((b) => /missing input file/.test(b.message)));
  assert.ok(!existsSync(join(fx.dispatchDir, 'calls.log')), 'no agent should have been started');
});

test('adopts a live external dispatch instead of starting a duplicate', async () => {
  const fx = fixture();
  // Simulate `ps` reporting an external agent already covering unit 2.
  const ex = makeExecutor(fx, makeStages(), {
    adoptCommand: `echo "node dispatch.mjs --role worker --label u2 --run testrun --covers 2"`,
  });
  await ex.tick();
  await Promise.allSettled([...ex.inflight.values()].map((d) => d.promise));
  const calls = readFileSync(join(fx.dispatchDir, 'calls.log'), 'utf8').trim().split('\n');
  assert.ok(!calls.includes('u2'), 'unit 2 is covered by a live external dispatch; a second must not start');
  assert.ok(calls.includes('u1') && calls.includes('u3'));
});

test('adoption is scoped to this run — another run\'s agents are ignored', async () => {
  const fx = fixture();
  const ex = makeExecutor(fx, makeStages(), {
    adoptCommand: `echo "node dispatch.mjs --role worker --label u2 --run OTHERRUN --covers 2"`,
  });
  await ex.tick();
  await Promise.allSettled([...ex.inflight.values()].map((d) => d.promise));
  const calls = readFileSync(join(fx.dispatchDir, 'calls.log'), 'utf8').trim().split('\n');
  assert.ok(calls.includes('u2'), 'a different run\'s agent must not suppress our dispatch');
});

test('no stage dispatches while another stage still has work in flight', async () => {
  // THE STAGE BARRIER, and it replaces a test that asserted the opposite.
  //
  // The engine used to dispatch the current stage regardless of what was still
  // running elsewhere, because only the GATE block waited for in-flight work to
  // drain. On frontier-14 that put step 8's adjudicating Alpha on top of step
  // 7's still-running judge sweep: every repair moved a pair's context hash and
  // re-armed the sweep on untouched page-mates, the ledger grew by 97 rows
  // mid-adjudication, and 8 items flipped pass to reject on byte-identical text.
  //
  // Two stages writing one ledger is not concurrency, it is a race. Holding
  // costs seconds against stages that run for hours.
  const fx = fixture();
  const stages = makeStages({ units: ['1', '2'] });
  const ex = makeExecutor(fx, stages, { concurrency: 2 });

  let release;
  const held = new Promise((r) => { release = r; });
  ex.inflight.set('s2:x', { promise: held, meta: { stage: 's2', label: 'x', covers: ['all'], attempt: 1 }, startedAt: Date.now() });

  assert.equal(await ex.tick(), 'working');
  assert.equal([...ex.inflight.values()].filter((d) => d.meta.stage === 's1').length, 0,
    's1 must not start while an out-of-stage dispatch is live');

  // ...and it is a hold, not a deadlock: the moment the other stage drains, the
  // barrier lifts on the next tick.
  release();
  ex.inflight.delete('s2:x');
  await ex.tick();
  assert.ok([...ex.inflight.values()].filter((d) => d.meta.stage === 's1').length > 0,
    's1 dispatches as soon as the earlier work is done');
});

test('a resolved missing-file blocker is retired, not left on the report', async () => {
  // A stale blocker is indistinguishable from a live one to whoever reads the
  // status page, and the whole value of that page is that it is true now.
  const fx = fixture();
  const stages = [{
    id: 's1', label: 'needs a file', units: () => ['1'], pattern: /^worker-/,
    concurrency: 1, labelFor: () => 'u1',
    plan: () => [{ role: 'worker', label: 'u1', job: 'authoring', covers: ['1'], task: 'appears-later.md' }],
    gates: () => [PASSING_GATE],
  }];
  const ex = makeExecutor(fx, stages);
  assert.equal(await ex.tick(), 'blocked');
  assert.equal(ex.state.data.blockers.length, 1);

  writeFileSync(join(fx.repo, 'appears-later.md'), 'now it exists\n');
  await ex.tick();
  assert.deepEqual(ex.state.data.blockers, [], 'the blocker must be gone once the file is there');
});

test('a blocker on a stage that later completed is retired', async () => {
  const fx = fixture();
  const ex = makeExecutor(fx, makeStages());
  // A blocker recorded against s1, which then completes normally.
  ex.state.addBlocker('s1', 'stage s1: something went wrong earlier');
  assert.equal(ex.state.data.blockers.length, 1);
  assert.equal(await settle(ex), 'done');
  assert.deepEqual(ex.state.data.blockers, [], 'a completed stage cannot have a live blocker');
});

test('a stage is not done when a unit\'s artifact is missing, however the result exited', async () => {
  // reader-7 exited zero and wrote its report over another reader's. Coverage
  // saw a successful result and cleared the stage with the deliverable absent.
  const fx = fixture();
  const stages = [{
    id: 's1', label: 'writes a report', units: () => ['1'], pattern: /^worker-/,
    concurrency: 1, labelFor: () => 'u1',
    artifacts: (ctx, u) => `report-${u}.md`,
    plan: () => [{ role: 'worker', label: 'u1', job: 'audit', covers: ['1'] }],
    gates: () => [PASSING_GATE],
  }];
  const ex = makeExecutor(fx, stages);
  await ex.tick();
  await Promise.allSettled([...ex.inflight.values()].map((d) => d.promise));
  // the fake agent writes a result but no report.
  // `unitsDone`, not `done`: `done` also requires the stage's gates to have run,
  // which is a separate question this test is not about.
  assert.equal(ex.stageStatus(stages[0]).unitsDone, false, 'a missing artifact must keep the stage open');
  writeFileSync(join(fx.repo, 'report-1.md'), 'the deliverable\n');
  assert.equal(ex.stageStatus(stages[0]).unitsDone, true, 'and its units complete once the artifact exists');
});

test('adoption is scoped to the stage — a later stage\'s agent does not cover an earlier one', async () => {
  // A 6b adjudicator running with --covers 7 blocked a 6a reader re-run for
  // batch 7, because adoption matched only the unit and not the stage.
  const fx = fixture();
  const ex = makeExecutor(fx, makeStages({ units: ['1'] }), {
    adoptCommand: `echo "node dispatch.mjs --role finisher --label final --run testrun --covers 1"`,
  });
  await ex.tick();
  await Promise.allSettled([...ex.inflight.values()].map((d) => d.promise));
  const calls = readFileSync(join(fx.dispatchDir, 'calls.log'), 'utf8');
  assert.ok(/u1/.test(calls), "s1's unit must dispatch despite an s2-shaped agent covering unit 1");
});

test('a lane that never records an end is still capped', async () => {
  // frontier-14's judge sweep exited zero but left its stage uncovered (its
  // receipt was malformed), so lastExitOk was never false and the cap never
  // fired. It was re-dispatched 33 times in 16 minutes.
  const fx = fixture();
  const stages = [{
    id: 's1', label: 'never covers', units: () => ['1'], pattern: /^ghost-/,
    concurrency: 1, labelFor: () => 'u1',
    // dispatches a worker whose result never matches the stage pattern
    plan: () => [{ role: 'worker', label: 'u1', job: 'authoring', covers: ['1'] }],
    gates: () => [PASSING_GATE],
  }];
  const ex = makeExecutor(fx, stages, { maxAttempts: 2 });
  const outcome = await settle(ex, 8);
  const calls = readFileSync(join(fx.dispatchDir, 'calls.log'), 'utf8').trim().split('\n');
  assert.ok(calls.length <= 2, `capped at 2 attempts, got ${calls.length}`);
  assert.equal(outcome, 'blocked');
});

test('a stage spec that throws blocks the run instead of crashing it', async () => {
  // A throw used to propagate out of tick() and run(), exit the process, and be
  // restarted by the watchdog — which threw again, forever.
  const fx = fixture();
  const stages = [{
    id: 's1', label: 'bad spec', units: () => ['1'], pattern: /^worker-/,
    concurrency: 1,
    plan: () => { throw new Error('the spec is wrong'); },
    gates: () => [PASSING_GATE],
  }];
  const ex = makeExecutor(fx, stages);
  const outcome = await ex.tick();
  assert.equal(outcome, 'blocked');
  assert.ok(ex.state.data.blockers.some((b) => /plan\(\) threw/.test(b.message)));
});

test('the adoption announce set resets between stages', async () => {
  const fx = fixture();
  const ex = makeExecutor(fx, makeStages(), {
    adoptCommand: `echo "node dispatch.mjs --role worker --label u1 --run testrun --covers 1"`,
  });
  await ex.tick();
  const first = ex._adoptStage;
  assert.ok(ex._announcedAdoption instanceof Set);
  assert.equal(first, 's1', 'the set is keyed to the current stage');
});

test('the engine writes a result record when a tool command produces none', async () => {
  // Tool stages have no dispatcher to write one. Two attempts to write it from
  // the shell produced unparseable JSON and cost 33 re-dispatches.
  const fx = fixture();
  const stages = [{
    id: 's1', label: 'tool stage', units: () => ['all'], pattern: /^tool-/,
    concurrency: 1,
    plan: () => [{ role: 'tool', label: 'sweep', job: 'judgement', covers: ['all'], argv: ['true'] }],
    gates: () => [PASSING_GATE],
  }];
  const ex = makeExecutor(fx, stages);
  await ex.tick();
  await Promise.allSettled([...ex.inflight.values()].map((d) => d.promise));
  const p = join(fx.dispatchDir, 'tool-sweep.result.json');
  assert.ok(existsSync(p), 'the engine must write the record the tool did not');
  const rec = JSON.parse(readFileSync(p, 'utf8'));   // must PARSE — the whole point
  assert.equal(rec.ok, true);
  assert.deepEqual(rec.covers, ['all']);
  assert.equal(ex.stageStatus(stages[0]).unitsDone, true);
});

test('the engine does not overwrite a record the command already wrote', async () => {
  // Written with node rather than a shell redirect. The first version of this
  // test used `sh -c printf` and failed on its own quoting — which is the same
  // trap the fix exists to remove, reproduced while testing the fix.
  const fx = fixture();
  const receipt = join(fx.dispatchDir, 'tool-sweep.result.json');
  const writer = join(fx.repo, 'write-receipt.mjs');
  writeFileSync(writer, `
import { writeFileSync } from 'node:fs';
writeFileSync(${JSON.stringify(receipt)}, JSON.stringify(
  { role: 'tool', label: 'sweep', covers: ['all'], ok: true, mine: 1 }));
`);
  const stages = [{
    id: 's1', label: 'tool stage', units: () => ['all'], pattern: /^tool-/,
    concurrency: 1,
    plan: () => [{ role: 'tool', label: 'sweep', job: 'judgement', covers: ['all'],
                   argv: ['node', writer] }],
    gates: () => [PASSING_GATE],
  }];
  const ex = makeExecutor(fx, stages);
  await ex.tick();
  await Promise.allSettled([...ex.inflight.values()].map((d) => d.promise));
  const rec = JSON.parse(readFileSync(receipt, 'utf8'));
  assert.equal(rec.mine, 1, "a command's own record must win");
});

test('the retry cap engages for a stage with no labelFor', async () => {
  // NINE of thirteen real stages have no labelFor. The cap derived its key from
  // it, so `prior` was null and the cap could not fire — the actual reason a
  // completed judge sweep was re-dispatched 33 times. Keying on the plan's own
  // label is what start() records.
  const fx = fixture();
  const stages = [{
    id: 's1', label: 'no labelFor', units: () => ['all'], pattern: /^ghost-/,
    concurrency: 1,
    // deliberately NO labelFor
    plan: () => [{ role: 'worker', label: 'sweep', job: 'judgement', covers: ['all'] }],
    gates: () => [PASSING_GATE],
  }];
  const ex = makeExecutor(fx, stages, { maxAttempts: 2 });
  const outcome = await settle(ex, 8);
  const calls = readFileSync(join(fx.dispatchDir, 'calls.log'), 'utf8').trim().split('\n');
  assert.ok(calls.length <= 2, `capped at 2, got ${calls.length}`);
  assert.equal(outcome, 'blocked');
  assert.ok(ex.state.data.blockers.some((b) => /failed 2x/.test(b.message)));
});

test('a gate declaring needs[] runs when its inputs exist', async () => {
  const { runGate } = await import('../src/gates.mts');
  const fx = fixture();
  writeFileSync(join(fx.repo, 'present.txt'), 'x');
  const ran = await runGate(
    { id: 'g', argv: ['node', '-e', 'console.log("42 checked")'], needs: ['present.txt'] },
    { cwd: fx.repo });
  assert.equal(ran.skipped, undefined, 'a gate whose inputs exist must not be skipped');
  assert.equal(ran.ok, true);

  // A GATE THAT CANNOT READ ITS INPUT HAS NOT PASSED.
  //
  // This used to return ok:true — which is how a gate aimed at a receipt nobody
  // generated reports success. frontier-14's whole-level audit receipt was never
  // produced by any stage, and the gate that would have caught that would itself
  // have been skipped for want of the same file.
  const absent = await runGate(
    { id: 'g', argv: ['node', '-e', 'console.log("42 checked")'], needs: ['absent.txt'] },
    { cwd: fx.repo });
  assert.equal(absent.ok, false, 'an absent input is a failure, not a pass');
  assert.match(absent.why, /inputs absent/);

  // ...unless the gate is explicitly conditional, which says so on the result.
  const optional = await runGate(
    { id: 'g', argv: ['node', '-e', 'console.log("42 checked")'], needs: ['absent.txt'], required: false },
    { cwd: fx.repo });
  assert.equal(optional.ok, true);
  assert.equal(optional.skipped, true, 'an opted-out gate is reported as skipped, never as checked');
});

test('a control command survives being read', async () => {
  const { takeCommand, writeCommand } = await import('../src/control.mts');
  const fx = fixture();
  const dir = join(fx.repo, '.autopilot');
  writeCommand(dir, 'pause');
  const cmd = takeCommand(dir);
  assert.equal(cmd.command, 'pause');
  assert.equal(takeCommand(dir), null, 'and is consumed exactly once');
});
