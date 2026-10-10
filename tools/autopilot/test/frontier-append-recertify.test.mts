import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { recertifyAppendFrontier } from '../../frontier-append-recertify.mjs';

function fixture(t: any) {
  const root = mkdtempSync(join(tmpdir(), 'append-recert-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  mkdirSync(join(root, 'research')); mkdirSync(join(root, 'items'));
  const item = (id: string, deps: string[] = []) => ({ id, kind: 'definition', title: id,
    statement: 'Declared contract', strategy: 'Construction target', provenance: { statement: 'ai-generated', proof: 'ai-generated' }, deps });
  const pair = (id: string, items: any[][]) => [
    { id, kind: 'A', order: 1, category: 'math', title: id, companion: `${id}-examples`, requires: [], items: items[0] },
    { id: `${id}-examples`, kind: 'B', order: 2, category: 'math', title: id, companion: id, requires: [id], items: items[1] },
  ];
  const old = pair('old', [[{ ...item('def-old'), dependency_level: 0 }], [{ ...item('def-old-example', ['def-old']), dependency_level: 1 }]]);
  const planned = pair('new', [[item('def-new', ['def-old'])], [item('def-new-example', ['def-new'])]]);
  const write = (path: string, data: any) => writeFileSync(join(root, 'research', path), JSON.stringify(data));
  write('demo-batch-1.pages.json', old); write('demo-batch-2.pages.json', pair('new', [[], []]));
  write('plan-spec.json', { pages: [...old, ...planned] });
  const hold = JSON.stringify({ decision: 'escalated', owner: true, reason: 'exhausted2' });
  writeFileSync(join(root, 'research', 'demo-step1-def-old.json'), hold);
  return { root, old, planned, write, hold, entry: { run: 'demo', number: 1, newPages: ['new', 'new-examples'] } };
}

test('append recertifies entire frontier and declared new items without clearing old holds', t => {
  const f = fixture(t), report = recertifyAppendFrontier(f.root, 'demo', f.entry);
  assert.equal(report.subjects, 4); assert.equal(report.pages, 4);
  assert.deepEqual(report.rows.map((r: any) => r.dependency_level), [0, 1, 1, 2]);
  assert.equal(report.rows.filter((r: any) => r.inventory === 'declared-pre-scaffold').length, 2);
  assert.equal(readFileSync(join(f.root, 'research', 'demo-step1-def-old.json'), 'utf8'), f.hold);
  const second = recertifyAppendFrontier(f.root, 'demo', f.entry);
  assert.notEqual(second.path, report.path); assert.equal(report.mathematical_review, false);
});

test('wrong old metadata, undeclared emptiness and missing suppliers fail closed', t => {
  const f = fixture(t); f.old[0].items[0].dependency_level = 8;
  f.write('demo-batch-1.pages.json', f.old);
  assert.throws(() => recertifyAppendFrontier(f.root, 'demo', f.entry), /Incorrect dependency level/);
  f.old[0].items = []; f.write('demo-batch-1.pages.json', f.old);
  assert.throws(() => recertifyAppendFrontier(f.root, 'demo', f.entry), /Empty prior frontier/);
  f.old[0].items = [{ id: 'def-old', kind: 'definition', title: 'old', statement: 's', strategy: 'p', provenance: {}, deps: ['def-absent'], dependency_level: 0 }];
  f.write('demo-batch-1.pages.json', f.old);
  assert.throws(() => recertifyAppendFrontier(f.root, 'demo', f.entry), /Missing prerequisite context/);
});
