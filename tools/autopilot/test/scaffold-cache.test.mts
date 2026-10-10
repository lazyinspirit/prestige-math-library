import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync, statSync, utimesSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { scaffoldSnapshot, stages } from '../stages/mathlib.mts';
import { recordStep1 } from '../../step1-decisions.mjs';

function fixture(t: any) {
  const repo = mkdtempSync(join(tmpdir(), 'scaffold-cache-'));
  t.after(() => rmSync(repo, { recursive: true, force: true }));
  mkdirSync(join(repo, 'research')); mkdirSync(join(repo, 'items'));
  const pages = [
    { id: 'main', kind: 'A', companion: 'example', order: 1, requires: [], items: [{ id: 'lem-local', kind: 'lemma', statement: 'Local', deps: ['lem-published'], dependency_level: 0 }] },
    { id: 'example', kind: 'B', companion: 'main', order: 2, requires: ['main'], items: [{ id: 'ex-local', kind: 'example', statement: 'Example', deps: ['lem-local'], dependency_level: 1 }] },
  ];
  const put = (name: string, value: any) => writeFileSync(join(repo, 'research', name), JSON.stringify(value));
  const body = (id: string, text: string) => writeFileSync(join(repo, 'items', `${id}.md`), `---\nid: ${id}\nstatus: ${id === 'lem-published' ? 'published' : 'draft'}\ndeps: []\n---\n${text}\n`);
  body('lem-published', 'Supplier proof'); body('lem-local', 'Local proof');
  put('plan-spec.json', { pages }); put('demo-batch-1.pages.json', pages); put('demo-batch-1.coverage.json', { pages: [] });
  const config = {}, ctx = () => ({ repo, run: 'demo', config });
  const artifacts = () => (stages.find(s => s.id === '1-scaffold') as any).artifacts(ctx(), '1');
  const ready = () => {
    recordStep1(repo, { run: 'demo', item: 'lem-local', decision: 'ready', reason: 'Fixture', dependencies: ['lem-published'], owner: true });
    recordStep1(repo, { run: 'demo', item: 'ex-local', decision: 'ready', reason: 'Fixture', dependencies: ['lem-local'], owner: true });
  };
  return { repo, pages, put, body, config, ctx, artifacts, ready };
}

test('fresh contexts share a scaffold snapshot only for the same config and frontier', t => {
  const f = fixture(t), cached = scaffoldSnapshot(f.ctx());
  assert.equal(scaffoldSnapshot(f.ctx()), cached);
  assert.notEqual(scaffoldSnapshot({ ...f.ctx(), config: {} }), cached);
  f.put('other-batch-1.pages.json', f.pages); f.put('other-batch-1.coverage.json', { pages: [] });
  assert.notEqual(scaffoldSnapshot({ ...f.ctx(), run: 'other' }), cached);
  const g = fixture(t);
  assert.notEqual(scaffoldSnapshot({ ...g.ctx(), config: f.config }), cached);
  assert.equal(scaffoldSnapshot(f.ctx()), cached);
});

test('manifest, plan and coverage edits rebuild while item bodies invalidate parsed inputs', t => {
  const f = fixture(t); f.ready(); assert.ok(!f.artifacts().some((p: string) => p.endsWith('scaffold-incomplete')));
  let cached = scaffoldSnapshot(f.ctx());
  for (const [file, value] of [['plan-spec.json', { pages: f.pages }], ['demo-batch-1.pages.json', f.pages], ['demo-batch-1.coverage.json', { pages: [], changed: true }]] as const) {
    f.put(file, value); const next = scaffoldSnapshot(f.ctx()); assert.notEqual(next, cached, file); cached = next;
  }
  for (const id of ['lem-published', 'lem-local']) {
    f.ready(); f.artifacts(); cached = scaffoldSnapshot(f.ctx());
    assert.ok(cached.snapshot.cache.has(id));
    const path = join(f.repo, 'items', `${id}.md`), old = statSync(path);
    const bytes = readFileSync(path, 'utf8');
    // Same byte length and restored mtime still changes ctime: invalidation is
    // not dependent on a larger file or monotonically increasing mtime alone.
    writeFileSync(path, bytes.replace('proof', 'PROOF')); utimesSync(path, old.atime, old.mtime);
    assert.equal(scaffoldSnapshot(f.ctx()), cached);
    assert.equal(cached.snapshot.cache.size, 0);
    assert.ok(f.artifacts().some((p: string) => p.endsWith('scaffold-incomplete')));
  }
});

test('readiness records are read afresh even when the structural snapshot is reused', t => {
  const f = fixture(t); f.ready(); const cached = scaffoldSnapshot(f.ctx());
  assert.ok(!f.artifacts().some((p: string) => p.endsWith('scaffold-incomplete')));
  const path = join(f.repo, 'research', 'demo-step1-lem-local.json');
  const row = JSON.parse(readFileSync(path, 'utf8')); row.decision = 'escalated'; writeFileSync(path, JSON.stringify(row));
  assert.equal(scaffoldSnapshot(f.ctx()), cached);
  assert.ok(f.artifacts().some((p: string) => p.endsWith('scaffold-incomplete')));
});

test('readiness cache protects missing supplier creation and receipt deletion', t => {
  const f = fixture(t);
  f.pages[0].items[0].deps.push('lem-future');
  f.put('demo-batch-1.pages.json', f.pages);
  f.ready();
  assert.ok(!f.artifacts().some((p: string) => p.endsWith('scaffold-incomplete')));
  const cached = scaffoldSnapshot(f.ctx());
  assert.equal(cached.itemStamps.get('lem-future'), 'missing');
  const decision = cached.readiness.get('lem-local');
  f.artifacts();
  assert.equal(cached.readiness.get('lem-local'), decision, 'unchanged scans reuse the decision');
  f.body('lem-future', 'New supplier proof');
  assert.ok(f.artifacts().some((p: string) => p.endsWith('scaffold-incomplete')));
  f.ready();
  assert.ok(!f.artifacts().some((p: string) => p.endsWith('scaffold-incomplete')));
  rmSync(join(f.repo, 'research', 'demo-step1-lem-local.json'));
  assert.ok(f.artifacts().some((p: string) => p.endsWith('scaffold-incomplete')));
});

test('prerequisite scheduling reuses guarded pages and observes changed requirements', t => {
  const f = fixture(t);
  const later = [
    { id: 'later', kind: 'A', companion: 'later-examples', order: 3, requires: ['main'], items: [] },
    { id: 'later-examples', kind: 'B', companion: 'later', order: 4, requires: ['later'], items: [] },
  ];
  f.put('demo-batch-2.pages.json', later);
  f.put('plan-spec.json', { pages: [...f.pages, ...later] });
  const cached = scaffoldSnapshot(f.ctx()), pages = cached.snapshot.pages;
  let reads = 0;
  Object.defineProperty(cached.snapshot, 'pages', { get() { reads++; return pages; } });
  const prerequisites = (stages.find(s => s.id === '1-scaffold') as any).unitPrerequisites;
  assert.deepEqual(prerequisites(f.ctx(), '2'), ['1']);
  assert.deepEqual(prerequisites(f.ctx(), '2'), ['1']);
  assert.ok(reads >= 2, 'scheduling must read the retained snapshot rather than reparsing');
  later[0].requires = [];
  f.put('demo-batch-2.pages.json', later);
  assert.deepEqual(prerequisites(f.ctx(), '2'), []);
  assert.notEqual(scaffoldSnapshot(f.ctx()), cached);
});
