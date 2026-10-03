import { test } from 'node:test';
import assert from 'node:assert/strict';
import { step5Stages } from '../stages/mathlib.step5.mts';
import { Executor } from '../src/executor.mts';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { State, statePath } from '../src/state.mts';
import { Reporter } from '../src/reporter.mts';
import { batchAdjudicator, step5Adjudicators } from '../../physics-support/step5-adjudicators.mjs';

test('each Step 5 reader, refuter and adjudicator owns one drained batch, including siblings in the same group', () => {
  const groups = [{ label: 'a', covers: ['1', '2'] }, { label: 'b', covers: ['3', '4'] }];
  const stages = step5Stages({
    batches: () => ['1', '2', '3', '4'],
    alphaGroups: () => groups,
    alphaCohort: (_ctx: any, unit: string) => groups.find(g => g.covers.includes(unit))!.covers,
    resultPattern: () => /result/,
  });
  const adjudicate = stages.find(s => s.id === '5a-adjudicate')!;
  const collect = stages.find(s => s.id === '5a-collect')!;
  assert.equal(adjudicate.pipeline, collect.pipeline);
  assert.equal(adjudicate.role, 'alpha');
  assert.ok(adjudicate.gates, 'whole-frontier gates remain at the pipeline join');
  assert.equal(stages.find(s => s.id === '5a-baseline')!.pipeline, undefined);

  const executor = Object.create(Executor.prototype);
  executor.unitsComplete = () => new Set(['1', '2', '3']);
  executor.inflight = new Map();
  executor.adoptedUnits = () => new Set();
  const ctx = { doctor: true } as any;
  assert.deepEqual(executor.readyUnits(adjudicate, collect, ctx, ['1', '2', '3', '4']), ['1', '2', '3']);
  assert.deepEqual(adjudicate.plan!(ctx, ['1', '2']).map((p: any) => p.label), ['5a-batch-1', '5a-batch-2']);
  for (const id of ['5a-read', '5a-refute', '5a-adjudicate']) {
    const stage = stages.find(s => s.id === id)!;
    assert.deepEqual(stage.cohort!(ctx, '1'), ['1']);
    assert.deepEqual(stage.plan!(ctx, ['1', '2']).map((p: any) => p.covers), [['1'], ['2']]);
  }

  executor.inflight.set('collect-2', { meta: { stage: collect.id, covers: ['2'] } });
  assert.deepEqual(executor.readyUnits(adjudicate, collect, ctx, ['1', '2']), ['1'],
    'a live sibling writer holds only its own batch');
});

test('batch decision files are isolated while legacy group decisions remain readable', t => {
  const repo = mkdtempSync(join(tmpdir(), 'step5-batch-files-'));
  t.after(() => rmSync(repo, { recursive: true, force: true }));
  mkdirSync(join(repo, 'research'), { recursive: true });
  const groups = [{ label: 'a', covers: ['1', '2'] }, { label: 'b', covers: ['3'] }];
  const stages = step5Stages({ batches: () => ['1', '2', '3'], alphaGroups: () => groups, resultPattern: () => /result/ });
  const stage = stages.find(s => s.id === '5a-adjudicate')!;
  const ctx = { repo, run: 'r' };
  assert.deepEqual(stage.artifacts!(ctx, '1'), ['research/r-alpha-batch-1-5a.md', 'research/r-alpha-batch-1-5a-decisions.json']);
  assert.deepEqual(stage.artifacts!(ctx, '2'), ['research/r-alpha-batch-2-5a.md', 'research/r-alpha-batch-2-5a-decisions.json']);
  writeFileSync(join(repo, 'research/r-alpha-a-5a-decisions.json'), '{}');
  assert.deepEqual(step5Adjudicators(repo, 'r', groups), [groups[0], batchAdjudicator(groups[1], '3')]);
  assert.deepEqual(stage.artifacts!(ctx, '1'), ['research/r-alpha-a-5a.md', 'research/r-alpha-a-5a-decisions.json']);
  writeFileSync(join(repo, 'research/r-alpha-batch-1-5a-decisions.json'), '{}');
  assert.deepEqual(step5Adjudicators(repo, 'r', groups), [batchAdjudicator(groups[0], '1'), batchAdjudicator(groups[0], '2'), batchAdjudicator(groups[1], '3')]);
});

test('a legacy in-flight group is not duplicated and its final receipt still covers its batches', async t => {
  const repo = mkdtempSync(join(tmpdir(), 'step5-legacy-drain-'));
  t.after(() => rmSync(repo, { recursive: true, force: true }));
  const dispatchDir = join(repo, 'dispatch');
  mkdirSync(dispatchDir);
  mkdirSync(join(repo, 'research'), { recursive: true });
  const stage = step5Stages({
    batches: () => ['1', '2'], alphaGroups: () => [{ label: 'a', covers: ['1', '2'] }],
    resultPattern: (role: string, label: string) => new RegExp(`^${role}-(?:${label})\\.result\\.json$`),
  }).find(s => s.id === '5a-adjudicate')!;
  const stateDir = join(repo, '.physics-autopilot');
  const ex = new Executor({ config: { run: 'r', repo, stateDir, dispatchDir, argv: ['true'],
    concurrency: 30, maxAttempts: 1, coversMap: {}, dispatchStaggerMs: 0, adoptCommand: false } as any,
    stages: [stage] as any, state: new State(statePath(stateDir)).init('r'),
    adapter: { name: 'unused', describe: () => 'unused', invoke: () => { throw Error('duplicate dispatch'); } },
    reporter: new Reporter({ dir: stateDir, intervalMs: 10 ** 9, sink: () => {} }) });
  ex.inflight.set('5a-adjudicate:5a-a', { meta: { stage: stage.id, role: 'alpha', label: '5a-a', covers: ['1', '2'], attempt: 1 },
    promise: new Promise(() => {}), startedAt: Date.now() } as any);
  assert.equal(await ex.dispatchStage(stage as any, ex.ctx()), 'ok');
  assert.deepEqual([...ex.inflight.keys()], ['5a-adjudicate:5a-a']);
  writeFileSync(join(dispatchDir, 'alpha-5a-a.result.json'), JSON.stringify({ role: 'alpha', label: '5a-a', covers: ['1', '2'], ok: true }));
  writeFileSync(join(repo, 'research/r-alpha-a-5a.md'), '# retained report\n');
  writeFileSync(join(repo, 'research/r-alpha-a-5a-decisions.json'), '{"decisions":[]}\n');
  ex.inflight.clear();
  assert.deepEqual([...ex.unitsComplete(stage as any)], ['1', '2']);
  assert.equal(await ex.dispatchStage(stage as any, ex.ctx()), 'ok');
  assert.equal(ex.inflight.size, 0);
  assert.equal(stage.pattern.test('alpha-5a-batch-1.result.json'), true);
  assert.equal(stage.pattern.test('alpha-5b-lead.result.json'), false);
  writeFileSync(join(dispatchDir, 'alpha-5a-a.result.json'), JSON.stringify({ role: 'alpha', label: '5a-a', covers: ['1', '2'], ok: false }));
  assert.deepEqual(stage.artifacts(ex.ctx(), '1'), ['research/r-alpha-batch-1-5a.md', 'research/r-alpha-batch-1-5a-decisions.json'],
    'a failed legacy group must not redirect a fresh batch worker to the shared report');
});

test('real executor carries each batch through Step 5a, gates the join, and closes Step 5b', async t => {
  const repo = mkdtempSync(join(tmpdir(), 'step5-batch-e2e-'));
  t.after(() => rmSync(repo, { recursive: true, force: true }));
  const dispatchDir = join(repo, 'dispatch');
  mkdirSync(dispatchDir);
  mkdirSync(join(repo, 'research'), { recursive: true });
  const gateLog = join(repo, 'gates.log');
  const gateScript = join(repo, 'gate.mjs');
  writeFileSync(gateScript, `import { appendFileSync } from 'node:fs';
appendFileSync(${JSON.stringify(gateLog)}, process.argv[2] + '\\n');
console.log('1 item(s) routed; over 1 item(s) in fixture');\n`);
  const gate = (id: string, _argv: any, extra: any = {}) => ({ ...extra, id, argv: ['node', gateScript, id] });
  const groups = [{ label: 'a', covers: ['1', '2'] }];
  const stages: any[] = step5Stages({
    gate, batches: () => ['1', '2'], alphaGroups: () => groups,
    resultPattern: (role: string, label: string) => new RegExp(`^${role}-(?:${label})\\.result\\.json$`),
    repoWide: () => [gate('repo', [])], contractGates: () => [gate('contracts', [])],
    coverageGates: () => [gate('coverage', [])], policyItemGate: () => gate('policy', []),
    urlGate: () => gate('urls', []), backingGate: () => gate('backing', []), impactGate: () => gate('impact', []),
    touchesPath: () => 'research/r-touches.json',
  });
  const paths = new Map<string, string[]>();
  for (const stage of stages) {
    const plan = stage.plan;
    stage.plan = (ctx: any, pending: string[]) => plan({ ...ctx, doctor: true }, pending).map((p: any) => {
      paths.set(p.label, [...new Set(p.covers.flatMap((unit: string) => [stage.artifacts(ctx, unit)].flat().filter(Boolean)))] as string[]);
      // Only the worker execution is synthetic; use the shipped units, plans,
      // coverage, artifacts, readiness, barriers and gate identities.
      return { ...p, argv: undefined, brief: undefined, task: undefined, outputSchema: undefined };
    });
  }
  stages.push({ id: 'finished', units: () => ['all'], pattern: /^tool-finished\.result\.json$/,
    concurrency: 1, plan: () => [{ role: 'tool', label: 'finished', job: 'bookkeeping-mechanical', covers: ['all'] }],
    gates: () => [gate('finished', [])] });
  const calls: string[] = [];
  let release!: () => void;
  const held = new Promise<void>(resolve => { release = resolve; });
  const adapter: any = { name: 'fixture', describe: () => 'fixture', invoke: async (vars: any) => {
    calls.push(vars.label);
    if (vars.label === 'refute-2') await held;
    for (const path of paths.get(vars.label) ?? []) writeFileSync(join(repo, path), '{}\n');
    return { ok: true, code: 0, stdout: '', stderr: '' };
  } };
  const stateDir = join(repo, '.physics-autopilot');
  const state = new State(statePath(stateDir)).init('r');
  const ex = new Executor({ config: { run: 'r', repo, stateDir, dispatchDir, argv: ['true'],
    concurrency: 30, maxAttempts: 1, coversMap: {}, dispatchStaggerMs: 0, adoptCommand: false } as any,
    stages, adapter, state, reporter: new Reporter({ dir: stateDir, intervalMs: 10 ** 9, sink: () => {} }) });
  for (let i = 0; i < 15 && !calls.includes('5a-batch-1'); i++) {
    assert.equal(await ex.tick(), 'working');
    await Promise.allSettled([...ex.inflight.values()].filter(d => d.meta.label !== 'refute-2').map(d => d.promise));
  }
  assert.ok(calls.includes('5a-batch-1'), 'batch 1 adjudicates while its sibling refuter is still working');
  assert.equal(calls.includes('5a-batch-2'), false);
  assert.equal(calls.includes('snap-post-5a'), false, 'snapshot waits for the whole pipeline');
  assert.ok(!state.data.stages['5a-adjudicate']?.gatesPassedAt);
  release();
  let outcome = 'working';
  for (let i = 0; i < 25 && outcome === 'working'; i++) {
    await Promise.allSettled([...ex.inflight.values()].map(d => d.promise));
    outcome = await ex.tick();
  }
  assert.equal(outcome, 'done', JSON.stringify(state.data.blockers));
  for (const batch of ['1', '2']) for (const label of [`reader-${batch}`, `refute-${batch}`, `5a-batch-${batch}`])
    assert.equal(calls.filter(call => call === label).length, 1, label);
  const gates = readFileSync(gateLog, 'utf8').trim().split('\n');
  assert.equal(gates.filter(id => id === 'step5-owner-escalations').length, 1);
  assert.ok(calls.indexOf('snap-post-5a') > calls.indexOf('5a-batch-2'));
  assert.ok(calls.indexOf('5b-lead') > calls.indexOf('cross-group-edges'));
  assert.equal(ex.stageStatus(stages.find(stage => stage.id === '5b-close')).done, true);
});
