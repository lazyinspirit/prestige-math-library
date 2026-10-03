import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { dependencyLevels, orderedItems } from '../../physics-support/item-dependency-levels.mjs';
import { prepareStep5AdjudicationOrder } from '../../physics-support/step5-adjudication-order.mjs';
import { stages, step3PairPlan } from '../stages/mathlib.mts';

const pages: any[] = [
  { id: 'a', kind: 'A', companion: 'b', order: 1, requires: [], batch: '1', items: [
    { id: 'thm-late', deps: ['lem-middle'], dependency_level: 2 },
    { id: 'lem-base', deps: ['published-supplier'], dependency_level: 0 },
    { id: 'lem-middle', deps: ['lem-base'], dependency_level: 1 },
  ] },
  { id: 'b', kind: 'B', companion: 'a', order: 2, requires: ['a'], batch: '1', items: [
    { id: 'ex-final', deps: ['thm-late'], dependency_level: 3 },
  ] },
  { id: 'c', kind: 'A', companion: 'd', order: 3, requires: ['a'], batch: '2', items: [
    { id: 'thm-cross', deps: ['lem-middle'], dependency_level: 2 },
  ] },
  { id: 'd', kind: 'B', companion: 'c', order: 4, requires: ['c'], batch: '2', items: [
    { id: 'ex-cross', deps: ['thm-cross'], dependency_level: 3 },
  ] },
];

test('scaffold levels follow the complete in-run item DAG and Step 3 orders assigned items', t => {
  const root = mkdtempSync(join(tmpdir(), 'dependency-levels-'));
  mkdirSync(join(root, 'research'), { recursive: true });
  t.after(() => rmSync(root, { recursive: true, force: true }));
  writeFileSync(join(root, 'research/demo-batch-1.pages.json'), JSON.stringify(pages.slice(0, 2)));
  writeFileSync(join(root, 'research/demo-batch-2.pages.json'), JSON.stringify(pages.slice(2)));
  const ordered = orderedItems(pages).map(row => `${row.level}:${row.id}`);
  assert.deepEqual(ordered, [
    '0:lem-base', '1:lem-middle', '2:thm-late', '2:thm-cross', '3:ex-final', '3:ex-cross',
  ]);
  const ctx = { repo: root, run: 'demo' };
  const plan = step3PairPlan(ctx, 'a', 'final');
  const task = readFileSync(join(root, plan.task), 'utf8');
  assert.ok(task.indexOf('0. lem-base') < task.indexOf('1. lem-middle'));
  assert.ok(task.indexOf('1. lem-middle') < task.indexOf('2. thm-late'));
  assert.ok(task.indexOf('2. thm-late') < task.indexOf('3. ex-final'));
  assert.ok(!task.includes('thm-cross'));
  const scaffold: any = stages.find(stage => stage.id === '1-scaffold');
  const author: any = stages.find(stage => stage.id === '3b-author');
  assert.ok(scaffold.gates(ctx).some(gate => gate.id === 'item-dependency-levels'));
  assert.ok(author.gates(ctx).some(gate => gate.id === 'item-dependency-levels'));
});

test('stale labels and item cycles fail closed', () => {
  const stale = structuredClone(pages);
  stale[0].items[0].dependency_level = 1;
  assert.match(dependencyLevels(stale).errors.join('\n'), /thm-late: dependency_level 1 differs from computed 2/);
  const cyclic = structuredClone(pages);
  cyclic[0].items[1].deps = ['thm-late'];
  assert.match(dependencyLevels(cyclic).errors.join('\n'), /dependency cycle: .*lem-base/);
});

test('Step 5 group adjudication task orders routed items across batches', t => {
  const root = mkdtempSync(join(tmpdir(), 'step5-level-order-'));
  mkdirSync(join(root, 'research'), { recursive: true });
  t.after(() => rmSync(root, { recursive: true, force: true }));
  writeFileSync(join(root, 'research/demo-batch-1.pages.json'), JSON.stringify(pages.slice(0, 2)));
  writeFileSync(join(root, 'research/demo-batch-2.pages.json'), JSON.stringify(pages.slice(2)));
  writeFileSync(join(root, 'research/demo-step5-scope-1.json'), JSON.stringify({
    run: 'demo', batch: '1', group: 'a', touched: ['thm-late', 'lem-base'],
    reader_findings: [{ id: 'lem-middle', obligation: 'reader:1:1' }],
  }));
  writeFileSync(join(root, 'research/demo-step5-scope-2.json'), JSON.stringify({
    run: 'demo', batch: '2', group: 'a', touched: ['ex-cross'],
    refuter_findings: [{ id: 'thm-cross', obligation: 'refuter:2:1' }],
  }));
  const path = prepareStep5AdjudicationOrder(root, 'demo', { label: 'a', covers: ['1', '2'] });
  const task = readFileSync(join(root, path), 'utf8');
  const ids = ['lem-base', 'lem-middle', 'thm-late', 'thm-cross', 'ex-cross'];
  assert.deepEqual(ids.map(id => task.indexOf(`, ${id} —`)).sort((a, b) => a - b),
    ids.map(id => task.indexOf(`, ${id} —`)));
  assert.match(task, /level 2: batch 2, thm-cross/);
  const batchPath = prepareStep5AdjudicationOrder(root, 'demo', { label: 'batch-2', scopeGroup: 'a', covers: ['2'] });
  assert.equal(batchPath, 'research/demo-alpha-batch-2-5a-order.task.md');
  const batchTask = readFileSync(join(root, batchPath), 'utf8');
  assert.match(batchTask, /level 2: batch 2, thm-cross/);
  assert.doesNotMatch(batchTask, /level \d+: batch 1,/);
  assert.throws(() => prepareStep5AdjudicationOrder(root, 'demo', { label: 'batch-2', scopeGroup: 'b', covers: ['2'] }), /scope identity mismatch/);
});
