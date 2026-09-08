import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync, symlinkSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { recordResolution, readResolution } from '../../scaffold-resolution.mjs';
import { stages, scaffoldFinalPlan } from '../stages/mathlib.mts';
import { MODEL_PROFILE_NAMES } from '../../models.mjs';
import { Executor } from '../src/executor.mts';
import { State, statePath } from '../src/state.mts';
import { Reporter } from '../src/reporter.mts';
import { makeExecAdapter } from '../src/adapters/exec.mts';

const repoRoot = new URL('../../..', import.meta.url).pathname;
function fixture() {
  const root = mkdtempSync(join(tmpdir(), 'scaffold-final-'));
  const dir = join(root, 'research'); mkdirSync(dir);
  symlinkSync(join(repoRoot, 'briefs'), join(root, 'briefs'));
  const pages = [{ id: 'a', kind: 'A', companion: 'b', items: [] },
    { id: 'b', kind: 'B', companion: 'a', items: [] }];
  const put = (file, data) => writeFileSync(join(dir, file), JSON.stringify(data));
  put('demo-batch-1.pages.json', pages);
  put('demo-batch-1.coverage.json', { pages: [{ page: 'a', sources: [] }] });
  put('plan-spec.json', { pages });
  put('demo-alpha-a-step3-verdicts.json', [{ page: 'a', verdict: 'sufficient' }]);
  put('demo-alpha-groups.json', [{ label: 'a', covers: ['1'] }]);
  put('demo-scope-ledger.json', { pages: [{ id: 'a', batch: '1' }] });
  return { root, dir, put, ctx: { repo: root, run: 'demo' } };
}
const check = root => spawnSync(process.execPath, [join(repoRoot, 'tools/scaffold-verdicts.mjs'),
  '--run', 'demo', '--require-final', '--json'], { cwd: root, encoding: 'utf8' });

test('legacy sufficiency cannot bypass final adjudication; accept and repair close current bytes', () => {
  const f = fixture();
  try {
    assert.equal(check(f.root).status, 1);
    for (const decision of ['accept', 'repaired']) {
      recordResolution(f.root, { run: 'demo', page: 'a', decision, confidence: 1, reason: 'checked' });
      assert.equal(check(f.root).status, 0);
    }
    f.put('demo-batch-1.coverage.json', { pages: [{ page: 'a', sources: ['changed'] }] });
    assert.equal(readResolution(f.root, 'demo', 'a'), null);
    assert.equal(check(f.root).status, 1);
  } finally { rmSync(f.root, { recursive: true, force: true }); }
});

test('uncertainty escalates; owner acceptance is final and owner hold blocks', () => {
  const f = fixture();
  try {
    assert.throws(() => recordResolution(f.root, { run: 'demo', page: 'a', decision: 'repaired', confidence: .99, reason: 'uncertain' }), /100%/);
    recordResolution(f.root, { run: 'demo', page: 'a', decision: 'escalate', reason: 'Need owner ruling' });
    assert.deepEqual(JSON.parse(check(f.root).stdout).escalated, ['a']);
    recordResolution(f.root, { run: 'demo', page: 'a', decision: 'accept', owner: true, reason: 'Owner ruling' });
    assert.equal(check(f.root).status, 0);
    assert.throws(() => recordResolution(f.root, { run: 'demo', page: 'a', decision: 'escalate', reason: 'Agent disagrees' }), /owner decision is final/);
    recordResolution(f.root, { run: 'demo', page: 'a', decision: 'hold', owner: true, reason: 'Wait for prerequisites' });
    assert.equal(check(f.root).status, 1);
  } finally { rmSync(f.root, { recursive: true, force: true }); }
});

test('Step 3 has no numeric cap, uses Astra medium, and holds escalations without dispatch', async () => {
  const f = fixture(); const s: any = stages.find(s => s.id === '3-recheck');
  try {
    assert.equal(s.maxFixRounds, Infinity);
    assert.equal(s.modelProfile, MODEL_PROFILE_NAMES.astraMedium);
    f.put('demo-scaffold-closure.json', { escalated: ['a'], insufficient: ['a'] });
    const result = await s.onGateFailure({ ctx: f.ctx, stage: s, round: 100,
      failure: { id: 'scaffold-verdicts' }, executor: { start: () => assert.fail('Escalation dispatched work') } });
    assert.match(result.owner.reason, /a/);
  } finally { rmSync(f.root, { recursive: true, force: true }); }
});

test('finished final adjudication with unchanged unresolved inputs escalates instead of looping', async () => {
  const f = fixture(); const s: any = stages.find(s => s.id === '3-recheck');
  try {
    const plan = scaffoldFinalPlan(f.ctx, { label: 'a', covers: ['1'] });
    assert.equal(plan.profile, MODEL_PROFILE_NAMES.astraMedium);
    mkdirSync(join(f.dir, 'demo-dispatch'));
    f.put('demo-dispatch/finished.result.json', { label: plan.label, ok: true });
    f.put('demo-scaffold-closure.json', { needs_final: ['a'], insufficient: ['a'] });
    const result = await s.onGateFailure({ ctx: f.ctx, stage: s, round: 100,
      failure: { id: 'scaffold-verdicts' }, executor: { start: () => assert.fail('Repeated dispatch') } });
    assert.match(result.owner.reason, /did not close/);
    assert.match(readFileSync(join(f.root, plan.task), 'utf8'), /100% confident/);
  } finally { rmSync(f.root, { recursive: true, force: true }); }
});

test('executor refunds owner-hold rounds, launches nothing, and accepts a later decision', async () => {
  const f = fixture();
  try {
    const stateDir = join(f.root, '.autopilot'); mkdirSync(stateDir);
    const state = new State(statePath(stateDir)).init('demo');
    const config: any = { repo: f.root, stateDir, run: 'demo', argv: ['true'], dispatchDir: f.dir };
    const ex = new Executor({ config, stages: [], state,
      reporter: new Reporter({ dir: stateDir, intervalMs: 60000 }),
      adapter: makeExecAdapter({ argv: ['true'], cwd: f.root }) });
    let calls = 0;
    const stage: any = { id: 'test-final', maxFixRounds: Infinity,
      onGateFailure: () => { calls++; return { owner: { reason: 'uncertain' } }; } };
    state.stage(stage.id).fixRounds = 99;
    const failure: any = { id: 'test', output: 'blocked' };
    assert.equal(await (ex as any).spendRepairRound(stage, failure, f.ctx, 'test'), 'waiting');
    assert.equal(state.stage(stage.id).fixRounds, 99);
    assert.equal(calls, 1);
    assert.ok(state.data.blockers.some(b => b.key === 'owner:test-final'));
    stage.onGateFailure = () => {};
    assert.equal(await (ex as any).spendRepairRound(stage, failure, f.ctx, 'test'), 'spent');
    assert.equal(state.stage(stage.id).fixRounds, 100);
  } finally { rmSync(f.root, { recursive: true, force: true }); }
});
