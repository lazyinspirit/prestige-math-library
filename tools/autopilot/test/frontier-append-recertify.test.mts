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

test('scaffold provenance may be deferred to authoring without a false gate failure', t => {
  const f = fixture(t);
  delete (f.old[0].items[0] as any).provenance;
  f.write('demo-batch-1.pages.json', f.old);
  assert.equal(recertifyAppendFrontier(f.root, 'demo', f.entry).subjects, 4);
});

test('published summaries and batch-note strategies retain their actual carriers', t => {
  const f = fixture(t);
  delete (f.old[0].items[0] as any).statement; delete (f.old[0].items[0] as any).strategy;
  writeFileSync(join(f.root, 'items', 'def-old.md'), '---\nid: def-old\nkind: definition\ndeps: []\n---\n## Statement\nExisting definition.\n');
  delete (f.old[1].items[0] as any).strategy;
  f.write('demo-batch-1.pages.json', f.old);
  assert.throws(() => recertifyAppendFrontier(f.root, 'demo', f.entry), /Strategy carrier missing/);
  writeFileSync(join(f.root, 'research', 'demo-batch-1.notes.md'), 'Existing item proof strategies.\n');
  const report = recertifyAppendFrontier(f.root, 'demo', f.entry);
  assert.equal(report.subjects, 4);
  assert.ok(report.guards.some((g: any) => g.path === 'research/demo-batch-1.notes.md'));
});


test('preserves explicitly empty prior planned pages without readiness credit', t => {
  const f = fixture(t);
  f.old[1].items = [];
  f.write('demo-batch-1.pages.json', f.old);
  f.write('plan-spec.json', { pages: [...f.old, ...f.planned] });
  const report = recertifyAppendFrontier(f.root, 'demo', f.entry);
  assert.equal(report.subjects, 3);
  assert.deepEqual(report.empty_prior_pages, ['old-examples']);
  assert.equal(report.readiness_or_hold_changes, false);
  assert.equal(readFileSync(join(f.root, 'research', 'demo-step1-def-old.json'), 'utf8'), f.hold);
});

test('appended scope retains prerequisite context without revalidating unrelated old metadata', t => {
  const f = fixture(t);
  delete f.old[1].items[0].title;
  f.write('demo-batch-1.pages.json', f.old);
  const report = recertifyAppendFrontier(f.root, 'demo', f.entry, { appendedOnly: true });
  assert.equal(report.subjects, 2);
  assert.equal(report.pages, 2);
  assert.equal(report.scope, 'appended-pages-with-prerequisite-context');
  assert.equal(report.readiness_or_hold_changes, false);
  assert.equal(readFileSync(join(f.root, 'research', 'demo-step1-def-old.json'), 'utf8'), f.hold);
});
