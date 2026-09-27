import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { dependencyLevels, orderedItems } from '../../item-dependency-levels.mjs';
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
  mkdirSync(join(root, 'research'));
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
