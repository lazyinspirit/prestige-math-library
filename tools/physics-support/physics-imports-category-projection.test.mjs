import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync, chmodSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { importMathematics, verifyMathematicsImports } from './physics-imports.mjs';

function fixture(t) {
  const base = mkdtempSync(join(tmpdir(), 'category-import-projection-'));
  t.after(() => rmSync(base, { recursive: true, force: true }));
  const root = join(base, 'physics'), source = join(base, 'math');
  for (const dir of [root, source]) for (const sub of ['items', 'library/math', 'research']) mkdirSync(join(dir, sub), { recursive: true });
  const save = (dir, path, text) => writeFileSync(join(dir, path), typeof text === 'string' ? text : JSON.stringify(text));
  const category = 'library/math/_category.md';
  const before = '---\nname: math\ntitle: Mathematics\nstatus: published\n---\n\nHistorical catalogue prose.\n';
  save(source, category, before);
  save(source, 'items/def-supplier.md', '---\nid: def-supplier\nkind: definition\ntitle: Supplier\nstatus: published\ndeps: []\n---\n\n## Definition\nA fixed mathematical supplier.\n');
  save(source, 'library/math/supplier.md', '---\npage: supplier\nstatus: published\nitems: [def-supplier]\nrequires: []\n---\nPublished supplier page.\n');
  importMathematics(root, source);
  const page = { id: 'selected', kind: 'A', category: 'math', library: 'mathematics', order: 1, requires: ['supplier'], items: [{ id: 'def-local', kind: 'definition', title: 'Local', domain: 'mathematics', statement: 'Use the fixed supplier.', deps: ['def-supplier'] }] };
  save(root, 'research/demo-batch-1.pages.json', [page]);
  save(root, 'research/plan-spec.json', { pages: [page] });
  save(root, 'items/def-local.md', '---\nid: def-local\nkind: definition\ntitle: Local\nstatus: draft\ndomain: mathematics\ndeps: [def-supplier]\n---\n\n## Definition\nUse the fixed supplier.\n');
  save(root, 'library/math/selected.md', '---\npage: selected\nlibrary: mathematics\nitems: [def-local]\n---\n');
  return { root, source, save, category, before };
}

test('existing original-category projection allows catalogue-only prose changes while every local import byte stays pinned', t => {
  const f = fixture(t), pinned = readFileSync(join(f.root, f.category));
  f.save(f.source, f.category, f.before.replace('Historical catalogue prose.', 'Current topic, prerequisite and consumer overview.'));
  assert.ok(verifyMathematicsImports(f.root, { run: 'demo' }) > 0);
  assert.ok(verifyMathematicsImports(f.root) > 0);
  assert.deepEqual(readFileSync(join(f.root, f.category)), pinned);
});

test('original-category library/domain classification changes remain rejected', t => {
  for (const field of ['library: physics', 'domain: physics']) {
    const f = fixture(t);
    f.save(f.source, f.category, f.before.replace('status: published', 'status: published\n' + field));
    assert.throws(() => verifyMathematicsImports(f.root, { run: 'demo' }), /category classification changed/);
  }
});

test('missing relevant original category remains rejected', t => {
  const f = fixture(t); rmSync(join(f.source, f.category));
  assert.throws(() => verifyMathematicsImports(f.root, { run: 'demo' }), /missing mathematics source category/);
});

test('local category prose modifications are still immutable-pin failures', t => {
  const f = fixture(t), path = join(f.root, f.category); chmodSync(path, 0o644);
  writeFileSync(path, f.before + '\nLocal prose modification.\n');
  assert.throws(() => verifyMathematicsImports(f.root, { run: 'demo' }), /mathematics import changed: library\/math\/_category.md/);
});

test('category prose projection never excuses a changed original item or page', t => {
  for (const path of ['items/def-supplier.md', 'library/math/supplier.md']) {
    const f = fixture(t);
    f.save(f.source, f.category, f.before + '\nCurrent catalogue summary.\n');
    f.save(f.source, path, readFileSync(join(f.source, path), 'utf8') + '\nA separate original change.\n');
    assert.throws(() => verifyMathematicsImports(f.root, { run: 'demo' }), /mathematics import changed:/);
  }
});
