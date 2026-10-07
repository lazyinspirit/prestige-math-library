import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { Executor } from '../src/executor.mts';
import { State, statePath } from '../src/state.mts';

function fixture(t: any, lines: string[], extra: any = {}) {
  const repo = mkdtempSync(join(tmpdir(), 'ap-adoption-capacity-'));
  t.after(() => rmSync(repo, { recursive: true, force: true }));
  const dispatchDir = join(repo, 'dispatch');
  mkdirSync(dispatchDir);
  const stage: any = {
    id: 'author', label: 'author', role: 'worker', concurrency: 10,
    units: () => Array.from({ length: 14 }, (_, i) => String(i + 1)),
    pattern: /^worker-author-/, gates: () => [],
    plan: (_ctx: any, units: string[]) => units.map(u => ({
      role: 'worker', label: `author-${u}`, job: 'authoring', covers: [u],
    })),
  };
  const config: any = {
    run: 'demo', repo, stateDir: join(repo, 'state'), dispatchDir,
    argv: ['true'], coversMap: {}, dispatchStaggerMs: 0,
    // Read a synthetic process table; no real workers are touched.
    adoptCommand: `printf '%s\\n' ${lines.map(line => `'${line}'`).join(' ')}`,
    ...extra,
  };
  const ex = new Executor({
    config, stages: [stage], state: new State(statePath(config.stateDir)).init('demo'),
    reporter: { notify() {}, report() {} },
    adapter: { name: 'hang', describe: () => 'hang', invoke: () => new Promise(() => {}) },
  });
  return { ex, stage };
}

const live = (label: string, covers = '', role = 'worker', run = 'demo') =>
  `123 node dispatch --run ${run} --role ${role} --label ${label}${covers ? ` --covers ${covers}` : ''}`;
const localLabels = (ex: Executor) => [...ex.inflight.values()].map(d => d.meta.label);

test('restart with eight adopted workers starts only two of six remaining units', async t => {
  const { ex, stage } = fixture(t, Array.from({ length: 8 }, (_, i) => live(`author-${i + 1}`, String(i + 1))), {
    concurrency: 10, globalConcurrency: 10,
  });
  await ex.dispatchStage(stage, ex.ctx());
  assert.deepEqual(localLabels(ex), ['author-9', 'author-10']);
  await ex.dispatchStage(stage, ex.ctx());
  assert.equal(ex.inflight.size, 2, 'adopted and local workers together fill capacity');
});

test('adopted dispatches consume stage capacity independently of global capacity', async t => {
  const { ex, stage } = fixture(t, [live('author-1', '1')]);
  stage.concurrency = 2;
  await ex.dispatchStage(stage, ex.ctx());
  assert.deepEqual(localLabels(ex), ['author-2']);
});

test('adopted sibling-stage dispatches consume shared role capacity', async t => {
  const { ex, stage } = fixture(t, [live('review-1', '1'), live('review-2', '2')]);
  await ex.dispatchStage(stage, ex.ctx(), { roleBudget: () => 3 });
  assert.deepEqual(localLabels(ex), ['author-1'], 'sibling coverage does not suppress this stage, but occupies its role');
});

test('adopted dispatches in another role or unknown stage consume global capacity', async t => {
  const { ex, stage } = fixture(t, [live('elsewhere-1', '1', 'checker'), live('elsewhere-2', '', 'checker')], {
    globalConcurrency: 3,
  });
  await ex.dispatchStage(stage, ex.ctx());
  assert.deepEqual(localLabels(ex), ['author-1']);
});

test('cohort coverage counts once and coverage-free recorded recovery counts once', async t => {
  const { ex, stage } = fixture(t, [live('author-cohort', '1,2,3'), live('recovery')]);
  stage.concurrency = 3;
  ex.state.data.dispatches['author:recovery'] = { attempts: 1 };
  await ex.dispatchStage(stage, ex.ctx());
  assert.deepEqual(localLabels(ex), ['author-4']);
});

test('local workers discovered in the process table are not charged twice', async t => {
  const { ex, stage } = fixture(t, []);
  stage.concurrency = 2;
  stage.units = () => ['1'];
  await ex.dispatchStage(stage, ex.ctx());
  ex.config.adoptCommand = `printf '%s\\n' '${live('author-1', '1')}'`;
  stage.units = () => ['1', '2', '3'];
  await ex.dispatchStage(stage, ex.ctx());
  assert.deepEqual(localLabels(ex), ['author-1', 'author-2']);
});

test('unrelated runs including a shared name prefix consume no capacity or coverage', async t => {
  const { ex, stage } = fixture(t, [live('author-1', '1', 'worker', 'demo-other'), live('author-2', '2', 'worker', 'other')], {
    globalConcurrency: 2,
  });
  stage.concurrency = 2;
  await ex.dispatchStage(stage, ex.ctx(), { roleBudget: () => 2 });
  assert.deepEqual(localLabels(ex), ['author-1', 'author-2']);
});
