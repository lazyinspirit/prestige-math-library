// Exact launch-boundary preflight.
//
// Static doctoring cannot render every plan: repair hooks and some task files
// materialise only after earlier stages. The executor therefore dry-runs the
// real dispatcher once the complete plan exists. A deterministic role, prompt,
// schema, or output-path defect must block before any sibling launches and
// before retry accounting starts.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';

import { Executor } from '../src/executor.mts';
import { State, statePath } from '../src/state.mts';
import { Reporter } from '../src/reporter.mts';

const REPO: string = process.env.AUTOPILOT_TEST_REPO
  ?? fileURLToPath(new URL('../../..', import.meta.url)).replace(/\/$/, '');
const DISPATCH_ARGV = ['node', 'tools/dispatch.mjs',
  '--role', '{role}', '--brief', '{brief}', '--task', '{task}',
  '--label', '{label}', '--run', '{run}', '--covers', '{covers}',
  '--timeout', '{timeout}', '--attempt', '{attempt}'];

function fixture(stage: any, argv = DISPATCH_ARGV) {
  const stateDir = mkdtempSync(join(tmpdir(), 'dispatch-preflight-'));
  const config: any = {
    repo: REPO, stateDir, run: 'preflight-test', argv,
    dispatchDir: join(stateDir, 'dispatch'), coversMap: {}, dispatchStaggerMs: 0,
  };
  const state = new State(statePath(stateDir)).init(config.run);
  const reporter = new Reporter({ dir: stateDir, intervalMs: 10 ** 9, sink: () => {} });
  const invoked: any[] = [];
  const adapter: any = {
    name: 'fixture', describe: () => 'fixture',
    invoke: async (vars: any) => { invoked.push(vars); return { ok: true, code: 0, error: null }; },
  };
  return { stateDir, invoked, ex: new Executor({ config, stages: [stage], adapter, state, reporter }) };
}

const valid = (label: string, covers: string[]) => ({
  role: 'mechanic', label, job: 'audit', covers,
  brief: 'briefs/judge-conventions.txt',
});

test('a bad plan blocks the entire fan-out before a sibling or attempt starts', async () => {
  const stage: any = {
    id: 'preflight', label: 'preflight', units: () => ['1', '2'], pattern: /^never-/,
    concurrency: 2,
    plan: () => [valid('good', ['1']), { ...valid('bad', ['2']), role: 'no-such-role' }],
    gatesWaived: 'The test assertions are the gate.',
  };
  const fx = fixture(stage);
  try {
    const result = await fx.ex.dispatchStage(stage, fx.ex.ctx());
    assert.equal(result, 'blocked');
    assert.equal(fx.invoked.length, 0, 'a valid earlier sibling launched before the later defect was found');
    assert.equal(fx.ex.inflight.size, 0);
    assert.deepEqual(Object.keys(fx.ex.state.data.dispatches), [],
      'deterministic preflight failures must consume zero attempts');
    assert.ok(fx.ex.state.data.blockers.some((row: any) =>
      row.key === 'dispatch-preflight:bad' && /no-such-role/.test(row.message)));
  } finally { rmSync(fx.stateDir, { recursive: true, force: true }); }
});

test('a repaired launch preflight retires its blocker and starts normally', async () => {
  const stage: any = {
    id: 'preflight', label: 'preflight', units: () => ['1'], pattern: /^never-/,
    plan: () => [], gatesWaived: 'The test assertions are the gate.',
  };
  const fx = fixture(stage);
  try {
    const bad: any = { ...valid('lane', ['1']), role: 'no-such-role' };
    assert.equal(fx.ex.start(stage, bad), false);
    assert.equal(fx.ex.state.data.dispatches['preflight:lane'], undefined);
    assert.ok(fx.ex.state.data.blockers.some((row: any) => row.key === 'dispatch-preflight:lane'));

    const repaired: any = valid('lane', ['1']);
    assert.equal(fx.ex.start(stage, repaired), true);
    await Promise.all([...fx.ex.inflight.values()].map((row: any) => row.promise));
    assert.equal(fx.invoked.length, 1);
    assert.equal(fx.invoked[0].attempt, 1);
    assert.ok(!fx.ex.state.data.blockers.some((row: any) => row.key === 'dispatch-preflight:lane'));
  } finally { rmSync(fx.stateDir, { recursive: true, force: true }); }
});

test('a keyed launch blocker updates when the same lane exposes a new defect', () => {
  const stage: any = { id: 'preflight', label: 'preflight', units: () => ['1'], pattern: /^never-/,
    gatesWaived: 'The test assertions are the gate.' };
  const fx = fixture(stage);
  try {
    assert.equal(fx.ex.start(stage, { ...valid('lane', ['1']), role: 'no-such-role' } as any), false);
    assert.match(fx.ex.state.data.blockers[0].message, /no-such-role/);
    assert.equal(fx.ex.start(stage, { ...valid('lane', ['1']), task: 'briefs/no-such-task.md' } as any), false);
    assert.equal(fx.ex.state.data.blockers.length, 1);
    assert.match(fx.ex.state.data.blockers[0].message, /missing input file.*no-such-task/);
    assert.doesNotMatch(fx.ex.state.data.blockers[0].message, /no-such-role/);
  } finally { rmSync(fx.stateDir, { recursive: true, force: true }); }
});

test('a repair hook validates its complete fan-out and refunds a deterministic launch defect', async () => {
  let broken = true;
  const stage: any = {
    id: 'repair', label: 'repair', units: () => ['all'], pattern: /^never-/,
    maxFixRounds: 2, gates: () => [],
    onGateFailure: ({ executor, stage: active }: any) => {
      executor.start(active, valid('first', []));
      executor.start(active, broken
        ? { ...valid('second', []), role: 'no-such-role' }
        : valid('second', []));
    },
  };
  const fx = fixture(stage);
  try {
    const failure: any = { id: 'fixture-gate', ok: false, why: 'fixture failure', output: '' };
    const first = await (fx.ex as any).spendRepairRound(stage, failure, fx.ex.ctx(), 'fixture');
    assert.equal(first, 'preflight-blocked');
    assert.equal(fx.invoked.length, 0, 'the valid repair sibling launched before the bad one was checked');
    assert.deepEqual(Object.keys(fx.ex.state.data.dispatches), []);
    assert.equal(fx.ex.state.data.stages.repair.fixRounds, 0,
      'a deterministic launch defect consumed the mathematical repair budget');

    broken = false;
    const second = await (fx.ex as any).spendRepairRound(stage, failure, fx.ex.ctx(), 'fixture');
    assert.equal(second, 'spent');
    await Promise.all([...fx.ex.inflight.values()].map((row: any) => row.promise));
    assert.equal(fx.invoked.length, 2);
    assert.equal(fx.ex.state.data.stages.repair.fixRounds, 1);
    assert.ok(!fx.ex.state.data.blockers.some((row: any) => row.key === 'dispatch-preflight:second'));
  } finally { rmSync(fx.stateDir, { recursive: true, force: true }); }
});

test('the repository dispatcher must receive the exact automatic attempt counter', () => {
  const withoutAttempt = DISPATCH_ARGV.filter((part) => !['--attempt', '{attempt}'].includes(part));
  const stage: any = { id: 'attempt', label: 'attempt', units: () => ['all'], pattern: /^never-/,
    gatesWaived: 'The test assertions are the gate.' };
  const fx = fixture(stage, withoutAttempt);
  try {
    const problem = fx.ex.preflightPlan(stage, valid('lane', ['all']));
    assert.match(problem ?? '', /must receive exact --attempt 1/);
  } finally { rmSync(fx.stateDir, { recursive: true, force: true }); }
});

test('the repository dispatcher rejects a duplicate attempt flag', () => {
  const argv = [...DISPATCH_ARGV, '--attempt', '{attempt}'];
  const stage: any = { id: 'attempt', label: 'attempt', units: () => ['all'], pattern: /^never-/,
    gatesWaived: 'The test assertions are the gate.' };
  const fx = fixture(stage, argv);
  try {
    const problem = fx.ex.preflightPlan(stage, valid('lane', ['all']));
    assert.match(problem ?? '', /must receive exact --attempt 1/);
  } finally { rmSync(fx.stateDir, { recursive: true, force: true }); }
});

test('duplicate fan-out identities block, and repaired siblings retire independently', () => {
  const stage: any = { id: 'identity', label: 'identity', units: () => ['1', '2'], pattern: /^never-/,
    gatesWaived: 'The test assertions are the gate.' };
  const fx = fixture(stage);
  try {
    assert.equal(fx.ex.startMany(stage, [valid('same', ['1']), valid('same', ['2'])]), false);
    assert.equal(fx.invoked.length, 0);
    assert.ok(fx.ex.state.data.blockers.some((row: any) =>
      row.key === 'dispatch-preflight:same' && /duplicate label/.test(row.message)));

    assert.equal(fx.ex.startMany(stage, [
      valid('same', ['1']), { ...valid('other', ['2']), role: 'no-such-role' },
    ]), false);
    assert.ok(!fx.ex.state.data.blockers.some((row: any) => row.key === 'dispatch-preflight:same'),
      'the repaired sibling stayed stale while another sibling remained invalid');
    assert.ok(fx.ex.state.data.blockers.some((row: any) => row.key === 'dispatch-preflight:other'));
    assert.equal(fx.invoked.length, 0);
  } finally { rmSync(fx.stateDir, { recursive: true, force: true }); }
});

test('tool plans cannot reintroduce a shell bundle', () => {
  const stage: any = { id: 'tool', label: 'tool', units: () => ['all'], pattern: /^never-/,
    gatesWaived: 'The test assertions are the gate.' };
  const fx = fixture(stage);
  try {
    const problem = fx.ex.preflightPlan(stage, {
      role: 'tool', label: 'bundle', job: 'bookkeeping-mechanical', covers: ['all'],
      argv: ['sh', '-c', 'node tools/one.mjs && node tools/two.mjs'],
    } as any);
    assert.match(problem ?? '', /invokes a shell/);
    for (const argv of [['/bin/sh', '-c', 'true'], ['/usr/bin/env', 'bash', '-c', 'true'],
      ['/usr/bin/env', 'FIXTURE=1', '/bin/bash', '-c', 'true'],
      ['/usr/bin/env', '-S', 'bash -c true'], ['C:\\Program Files\\Git\\bin\\bash.exe', '-c', 'true']]) {
      assert.match(fx.ex.preflightPlan(stage, {
        role: 'tool', label: 'absolute-bundle', job: 'bookkeeping-mechanical', covers: ['all'], argv,
      } as any) ?? '', /invokes a shell/);
    }
  } finally { rmSync(fx.stateDir, { recursive: true, force: true }); }
});
