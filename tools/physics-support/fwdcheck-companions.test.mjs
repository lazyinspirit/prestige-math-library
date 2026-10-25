import assert from 'node:assert/strict';
import test from 'node:test';
import { copyFileSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'physics-fwd-companions-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  for (const dir of ['items', 'library/physics', 'research', 'tools/physics-support'])
    mkdirSync(join(root, dir), { recursive: true });
  for (const name of ['fwdcheck.mjs', 'frontmatter-list.mjs', 'item-scope.mjs'])
    copyFileSync(new URL(name, import.meta.url), join(root, 'tools/physics-support', name));
  const pages = [
    { id: 'model', order: 7, kind: 'A', category: 'physics', library: 'physics',
      companion: 'model-examples', requires: [], items: [{ id: 'def-model' }] },
    { id: 'model-examples', order: 7, kind: 'B', category: 'physics', library: 'physics',
      companion: 'model', requires: ['model'], items: [{ id: 'ex-model' }] },
    { id: 'later', order: 8, kind: 'A', category: 'physics', library: 'physics',
      requires: [], items: [{ id: 'thm-later' }] },
  ];
  const write = (path, text) => writeFileSync(join(root, path), text);
  const item = (id, kind, deps, body, extra = '') =>
    `---\nid: ${id}\nkind: ${kind}\nstatus: draft\ndeps: [${deps.join(', ')}]\n${extra}---\n\n${body}\n`;
  write('items/def-model.md', item('def-model', 'definition', [], '## Definition\n\nFinite supplied model.'));
  write('items/ex-model.md', item('ex-model', 'example', ['def-model'], '## Example\n\nUse [[def-model]].'));
  write('items/thm-later.md', item('thm-later', 'theorem', [], '## Statement\n\nA later result.'));
  for (const p of pages)
    write(`library/physics/${p.id}.md`, `---\npage: ${p.id}\nstatus: draft\ncompanion: ${p.companion ?? ''}\nitems: [${p.items.map(i => i.id).join(', ')}]\nexamples: []\n---\n`);
  const run = (selection = ['def-model', 'ex-model']) => {
    write('research/plan-spec.json', JSON.stringify({ pages }));
    write('research/selected.json', JSON.stringify(selection));
    const result = spawnSync(process.execPath,
      ['tools/physics-support/fwdcheck.mjs', '--items-file', 'research/selected.json', '--json'],
      { cwd: root, env: { ...process.env, PHYSICS_REPO: root }, encoding: 'utf8', timeout: 30_000 });
    assert.equal(result.signal, null, result.stderr);
    assert.ok(result.stdout.trim(), result.stderr);
    return { ...result, report: JSON.parse(result.stdout) };
  };
  return { pages, write, item, run };
}

for (const library of ['physics', 'mathematics']) test(`canonical equal-order ${library} pair admits B requiring its own A`, t => {
  const f = fixture(t);
  f.pages[0].library = f.pages[1].library = library;
  const r = f.run();
  assert.equal(r.status, 0, JSON.stringify(r.report));
  assert.equal(r.report.summary.scope, 'focused-items');
  assert.deepEqual(r.report.summary.page_checks, ['model', 'model-examples']);
});

const invalid = {
  'unrelated same-order prerequisite': f => { f.pages[1].requires = ['later']; f.pages[2].order = 7; },
  'later prerequisite even with reciprocal companions': f => { f.pages[0].order = 8; },
  'A requiring its B': f => { f.pages[0].requires = ['model-examples']; },
  'A requiring its B when only B is selected': f => { f.pages[0].requires = ['model-examples']; },
  'missing A companion': f => { delete f.pages[0].companion; },
  'missing B reciprocal companion': f => { delete f.pages[1].companion; },
  'wrong B reciprocal companion': f => { f.pages[1].companion = 'later'; },
  'wrong A companion': f => { f.pages[0].companion = 'later'; },
  'wrong prerequisite kind': f => { f.pages[0].kind = 'P'; },
  'wrong consumer kind': f => { f.pages[1].kind = 'A'; },
  'shared A companion claim': f => { f.pages[2].companion = 'model-examples'; },
  'shared B companion claim': f => { f.pages[2].companion = 'model'; },
  'duplicate canonical A identity': f => { f.pages.push({ ...f.pages[0] }); },
  'duplicate canonical B identity': f => { f.pages.push({ ...f.pages[1] }); },
  'different categories': f => { f.pages[1].category = 'unrelated'; },
  'different libraries': f => { f.pages[1].library = 'mathematics'; },
  'missing category metadata': f => { delete f.pages[0].category; delete f.pages[1].category; },
  'missing library metadata': f => { delete f.pages[0].library; delete f.pages[1].library; },
  'nonnumeric equal orders': f => { f.pages[0].order = f.pages[1].order = '7'; },
};
for (const [name, mutate] of Object.entries(invalid)) test(`rejects ${name}`, t => {
  const f = fixture(t); mutate(f);
  const r = f.run(name.includes('only B') ? ['ex-model'] : undefined);
  assert.equal(r.status, 1, JSON.stringify(r.report));
  assert.ok(r.report.errors.some(e => e.code === 'plan-order-broken'), JSON.stringify(r.report));
});

test('ordinary earlier prerequisites still pass without companion metadata', t => {
  const f = fixture(t); f.pages[0].order = 6;
  delete f.pages[0].companion; delete f.pages[1].companion;
  assert.equal(f.run().status, 0);
});

test('valid companions do not legalize a declared backward/lateral forward reference', t => {
  const f = fixture(t);
  f.write('items/ex-model.md', f.item('ex-model', 'example', [],
    '## Example\n\nUse [[def-model]].', 'forward_refs: [def-model]\n'));
  const r = f.run();
  assert.equal(r.status, 1);
  assert.ok(r.report.errors.some(e => e.code === 'forward-not-later'));
});

test('valid companions retain spine and undeclared later-use checks', t => {
  const f = fixture(t);
  f.write('items/def-model.md', f.item('def-model', 'definition', [],
    '## Definition\n\nUse [[thm-later]].', 'forward_refs: [thm-later]\n'));
  f.write('items/ex-model.md', f.item('ex-model', 'example', ['def-model'],
    '## Example\n\nUse [[def-model]] and [[thm-later]].'));
  const r = f.run();
  assert.equal(r.status, 1);
  assert.ok(r.report.errors.some(e => e.code === 'forward-on-spine'));
  assert.ok(r.report.errors.some(e => e.code === 'forward-undeclared'));
});

test('valid companions retain item and page cycle checks', t => {
  const f = fixture(t);
  f.write('items/def-model.md', f.item('def-model', 'definition', ['ex-model'],
    '## Definition\n\nA cyclic supplier.'));
  const r = f.run();
  assert.equal(r.status, 1);
  assert.ok(r.report.errors.some(e => e.code === 'forward-cycle'));
  assert.ok(r.report.errors.some(e => e.code === 'stack-cycle'));
});
