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
  const body = (id: string, text: string, aliases: string[] = []) => writeFileSync(join(repo, 'items', `${id}.md`), `---\nid: ${id}\nstatus: ${id === 'lem-published' ? 'published' : 'draft'}\ndeps: []\naliases: ${JSON.stringify(aliases)}\n---\n${text}\n`);
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

test('readiness cache guards absent inputs explicitly listed only in a receipt', t => {
  const f = fixture(t); f.ready();
  recordStep1(f.repo, { run: 'demo', item: 'lem-local', decision: 'ready', reason: 'Examined extra input',
    dependencies: ['lem-published', 'lem-examined-extra'], owner: true });
  assert.ok(!f.artifacts().some((p: string) => p.endsWith('scaffold-incomplete')));
  assert.equal(scaffoldSnapshot(f.ctx()).itemStamps.get('lem-examined-extra'), 'missing');
  f.body('lem-examined-extra', 'Newly supplied examined input');
  assert.ok(f.artifacts().some((p: string) => p.endsWith('scaffold-incomplete')));
});

test('alias reassignment and canonical replacement invalidate retained readiness', t => {
  const f = fixture(t);
  f.pages[0].items[0].deps.push('supplier-alias'); f.put('demo-batch-1.pages.json', f.pages);
  f.body('lem-alias-source', 'Original alias supplier', ['supplier-alias']); f.ready();
  assert.ok(!f.artifacts().some((p: string) => p.endsWith('scaffold-incomplete')));
  const cached = scaffoldSnapshot(f.ctx()); assert.ok(cached.snapshot.aliases.has('supplier-alias'));
  f.body('lem-alias-source', 'Original alias supplier');
  f.body('lem-replacement', 'Replacement supplier', ['supplier-alias']);
  assert.equal(scaffoldSnapshot(f.ctx()), cached, 'config/frontier cache identity survives invalidation');
  assert.equal(cached.snapshot.aliases, undefined);
  assert.ok(f.artifacts().some((p: string) => p.endsWith('scaffold-incomplete')));
  f.ready(); assert.ok(!f.artifacts().some((p: string) => p.endsWith('scaffold-incomplete')));
  f.body('supplier-alias', 'Canonical supplier takes precedence');
  assert.ok(f.artifacts().some((p: string) => p.endsWith('scaffold-incomplete')));
});

test('previously missing alias supplier creation invalidates retained readiness', t => {
  const f = fixture(t);
  f.pages[0].items[0].deps.push('future-alias'); f.put('demo-batch-1.pages.json', f.pages); f.ready();
  assert.ok(!f.artifacts().some((p: string) => p.endsWith('scaffold-incomplete')));
  f.body('lem-new-alias-source', 'New alias supplier', ['future-alias']);
  assert.ok(f.artifacts().some((p: string) => p.endsWith('scaffold-incomplete')));
  f.ready(); assert.ok(!f.artifacts().some((p: string) => p.endsWith('scaffold-incomplete')));
  rmSync(join(f.repo, 'items', 'lem-new-alias-source.md'));
  assert.ok(f.artifacts().some((p: string) => p.endsWith('scaffold-incomplete')));
});

test('ambiguous alias scans stay incomplete on repeated calls and recover after removal', t => {
  const f = fixture(t);
  f.pages[0].items[0].deps.push('supplier-alias'); f.put('demo-batch-1.pages.json', f.pages);
  f.body('lem-alias-source', 'Original supplier', ['supplier-alias']); f.ready();
  assert.ok(!f.artifacts().some((p: string) => p.endsWith('scaffold-incomplete')));
  const cached = scaffoldSnapshot(f.ctx());
  // This new carrier was outside the consumed closure before it acquired an
  // alias, so supplier-only stamps cannot detect the ambiguous index.
  f.body('lem-unrelated', 'Unrelated supplier', ['supplier-alias']);
  for (let attempt = 0; attempt < 2; attempt++) {
    assert.ok(f.artifacts().some((p: string) => p.endsWith('scaffold-incomplete')));
    assert.equal(cached.snapshot.aliases, undefined, 'discard the partially populated alias index');
    assert.equal(cached.readiness.size, 0);
  }
  rmSync(join(f.repo, 'items', 'lem-unrelated.md'));
  assert.ok(!f.artifacts().some((p: string) => p.endsWith('scaffold-incomplete')));
});

test('prerequisite scheduling reads current requirements and logical carrier dependencies', t => {
  const f = fixture(t);
  const later = [
    { id: 'later', kind: 'A', companion: 'later-examples', order: 3, requires: ['main'], items: [] },
    { id: 'later-examples', kind: 'B', companion: 'later', order: 4, requires: ['later'], items: [] },
  ];
  f.put('demo-batch-2.pages.json', later);
  f.put('plan-spec.json', { pages: [...f.pages, ...later] });
  const cached = scaffoldSnapshot(f.ctx());
  const prerequisites = (stages.find(s => s.id === '1-scaffold') as any).unitPrerequisites;
  assert.deepEqual(prerequisites(f.ctx(), '2'), ['1']);
  assert.deepEqual(prerequisites(f.ctx(), '2'), ['1']);
  later[0].requires = [];
  f.put('demo-batch-2.pages.json', later);
  assert.deepEqual(prerequisites(f.ctx(), '2'), []);
  assert.notEqual(scaffoldSnapshot(f.ctx()), cached);
  later[0].items = [{id:'lem-later',kind:'lemma',deps:[],dependency_level:0}] as any;
  f.put('demo-batch-2.pages.json', later);
  writeFileSync(join(f.repo,'items/lem-later.md'),'---\nid: lem-later\ndeps: [lem-local]\n---\n');
  assert.deepEqual(prerequisites(f.ctx(), '2'), ['1']);
  writeFileSync(join(f.repo,'items/lem-later.md'),'---\nid: lem-later\ndeps: []\n---\n');
  assert.deepEqual(prerequisites(f.ctx(), '2'), []);
});

test('explicit escalation defers dependency hashing but clearing it restores current-input checks', t => {
  const f = fixture(t); f.ready(); f.artifacts();
  const cached = scaffoldSnapshot(f.ctx());
  const supplierStamp = cached.itemStamps.get('lem-published');
  const receipt = join(f.repo, 'research', 'demo-step1-lem-local.json');
  const ready = readFileSync(receipt, 'utf8');
  writeFileSync(receipt, JSON.stringify({ ...JSON.parse(ready), decision: 'escalated' }));
  f.body('lem-published', 'Changed supplier proof');
  assert.ok(f.artifacts().some((p: string) => p.endsWith('scaffold-incomplete')));
  assert.equal(cached.itemStamps.get('lem-published'), supplierStamp,
    'known negative readiness does not walk or invalidate dependency inputs');
  writeFileSync(receipt, ready);
  assert.ok(f.artifacts().some((p: string) => p.endsWith('scaffold-incomplete')),
    'once escalation clears, the stale ready hash must still block completion');
  f.ready();
  assert.ok(!f.artifacts().some((p: string) => p.endsWith('scaffold-incomplete')));
});
