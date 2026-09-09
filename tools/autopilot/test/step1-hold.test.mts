import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { stages } from '../stages/mathlib.mts';
import { holdStep1 } from '../stages/step1-hold.mts';
import { Executor } from '../src/executor.mts';
import { State, statePath } from '../src/state.mts';
import { Reporter } from '../src/reporter.mts';
import { makeExecAdapter } from '../src/adapters/exec.mts';

test('Step 1 has no mathematical repair dispatch or per-subject budget', () => {
  for (const id of ['1-drift', '1-drift-apply', '1-scaffold']) {
    const stage: any = stages.find(s => s.id === id);
    assert.equal(stage.onHold, holdStep1);
    assert.equal(stage.onGateFailure, undefined);
    assert.equal(stage.maxFixRounds, undefined);
    assert.equal(stage.perItemFixBudget, undefined);
    assert.equal(stage.repairFingerprint, undefined);
  }
});

test('the owner hold consolidates failures, excludes foreign stages, and never spawns', t => {
  const repo = mkdtempSync(join(tmpdir(), 'step1-hold-'));
  t.after(() => rmSync(repo, { recursive: true, force: true }));
  mkdirSync(join(repo, 'research'));
  const result = holdStep1({ ctx: { repo, run: 'demo' }, stage: { id: '1-scaffold' },
    executor: { start: () => assert.fail('unexpected dispatch') },
    failure: { id: 'coverage-1', output: 'missing result', advisory: [
      { id: 'source-fetch-check', output: 'unread' },
      { id: 'foreign', stage: '3b-audit', output: 'not ours' },
    ] } });
  assert.match(result.owner.reason, /step1-blockers.json/);
  const report = JSON.parse(readFileSync(join(repo, 'research/demo-step1-blockers.json'), 'utf8'));
  assert.deepEqual(report.failures.map((row: any) => row.id), ['coverage-1', 'source-fetch-check']);
});

test('the scaffold gate requires item readiness and retains the full mechanical battery', () => {
  const stage: any = stages.find(s => s.id === '1-scaffold');
  const ids = stage.gates({ repo: process.cwd(), run: 'missing-test-run' }).map((g: any) => g.id);
  for (const id of ['step1-readiness', 'step1-dependency-ledger', 'manifest-integrity', 'drift-review', 'manifest-deps',
    'content-policy-scaffold', 'validate-plan', 'extcheck', 'url-liveness', 'source-backing', 'source-fetch-check'])
    assert.ok(ids.includes(id), id);
});

test('executor holds repeated Step 1 failures without spending repair budgets or starting work', async t => {
  const repo = mkdtempSync(join(tmpdir(), 'step1-executor-'));
  t.after(() => rmSync(repo, { recursive: true, force: true }));
  mkdirSync(join(repo, 'research')); mkdirSync(join(repo, '.autopilot'));
  const config: any = { repo, run: 'demo', stateDir: join(repo, '.autopilot'), argv: ['true'],
    dispatchDir: join(repo, 'research/demo-dispatch'), coversMap: {}, adoptCommand: false };
  const state = new State(statePath(config.stateDir)).init('demo');
  const executor = new Executor({ config, stages,
    adapter: makeExecAdapter({ argv: ['true'], cwd: repo }), state,
    reporter: new Reporter({ dir: config.stateDir, intervalMs: 60_000 }) });
  const stage: any = stages.find(s => s.id === '1-scaffold');
  state.stage(stage.id).fixRounds = 9; // Old repair history must not suppress the new hold.
  for (let i = 0; i < 3; i++) assert.equal(await (executor as any).spendRepairRound(stage,
    { id: 'step1-readiness', ok: false, output: 'escalated' }, { repo, run: 'demo' }, 'test'), 'waiting');
  assert.equal(executor.inflight.size, 0);
  assert.equal(state.stage(stage.id).fixRounds, 9);
  assert.equal(Object.keys(state.data.gateAttempts ?? {}).length, 0);
  assert.equal(state.data.blockers.filter((b: any) => b.key === 'owner:1-scaffold').length, 1);
});
