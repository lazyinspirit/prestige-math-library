import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync, symlinkSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const output = result => result.stdout + result.stderr;
function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'physics-imported-plan-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  for (const dir of ['items', 'library/math', 'library/other', 'research']) mkdirSync(join(root, dir), { recursive: true });
  symlinkSync(fileURLToPath(new URL('../', import.meta.url)), join(root, 'tools'), 'dir');
  const pages = [
    { id: 'selected', category: 'math', order: 2, kind: 'A', companion: 'selected-examples', requires: ['foreign'], items: [{ id: 'thm-selected', kind: 'theorem', deps: ['lem-supplier'] }] },
    { id: 'selected-examples', category: 'math', order: 3, kind: 'B', requires: ['selected'], items: [{ id: 'ex-selected', kind: 'example', deps: ['thm-selected'] }] },
  ];
  const receipt = { version: 1, source_root: join(root, 'unused-originals'), files: [] };
  const item = (id, deps = []) => writeFileSync(join(root, `items/${id}.md`), `---\nid: ${id}\nkind: lemma\ndeps: ${JSON.stringify(deps)}\n---\n`);
  item('lem-supplier');
  function pin(id = 'foreign', { deps = [], order, category = 'math', items = ['lem-supplier'], status = 'published', library = 'mathematics', kind } = {}) {
    const path = `library/${category}/${id}.md`;
    const text = `---\npage: ${id}\nstatus: ${status}\n${kind ? `kind: ${kind}\n` : ''}library: ${library}\n${order === undefined ? '' : `order: ${order}\n`}requires: ${JSON.stringify(deps)}\nitems: ${JSON.stringify(items)}\nexamples: []\n---\n`;
    writeFileSync(join(root, path), text);
    receipt.files = receipt.files.filter(row => row.path !== path);
    receipt.files.push({ path, sha256: hash(text) });
  }
  pin();
  function save() {
    writeFileSync(join(root, 'research/plan-spec.json'), JSON.stringify({ pages }));
    writeFileSync(join(root, 'research/run-test-batch-1.pages.json'), JSON.stringify(pages.filter(page => page.id.startsWith('selected'))));
    writeFileSync(join(root, 'research/math-imports.json'), JSON.stringify(receipt));
  }
  function run() {
    save();
    return spawnSync(process.execPath, ['tools/physics-support/frontier-item-gate.mjs', '--run', 'run-test', '--tool', 'validate-plan'], { cwd: root, encoding: 'utf8', env: { ...process.env, PHYSICS_REPO: root } });
  }
  return { root, pages, receipt, pin, item, run, save };
}
test('native symlink gate resolves a missing pinned published mathematics declaration as context only', t => {
  const f = fixture(t), before = readFileSync(join(f.root, 'library/math/foreign.md'));
  const checked = f.run();
  assert.equal(checked.status, 0, output(checked));
  assert.match(checked.stdout, /scope: 2 selected pages;/);
  assert.match(checked.stdout, /plan: 2 pages \(1 A \+ 1 B \+ 0 already published\)/);
  assert.doesNotMatch(checked.stdout, /\[requires-resolve\]|\[undeclared-prereq\]/);
  assert.deepEqual(readFileSync(join(f.root, 'library/math/foreign.md')), before);
  assert.equal(JSON.parse(readFileSync(join(f.root, 'research/plan-spec.json'))).pages.length, 2);
});
test('unknown, unpinned and tampered imported prerequisites remain unresolved or blocking', t => {
  const f = fixture(t); f.receipt.files = [];
  const unpinned = f.run(); assert.notEqual(unpinned.status, 0); assert.match(output(unpinned), /\[requires-resolve\]/);
  f.pin(); writeFileSync(join(f.root, 'library/math/foreign.md'), 'Changed snapshot.');
  const changed = f.run(); assert.notEqual(changed.status, 0); assert.match(output(changed), /snapshot differs from immutable pin/);
  f.pin(); f.pages[0].requires.push('missing-page');
  const missing = f.run(); assert.notEqual(missing.status, 0); assert.match(output(missing), /\[requires-resolve\].*missing-page/);
});
test('wrong identity, draft/physical classification, malformed metadata and symlinks fail even with matching pin', t => {
  for (const edit of [
    text => text.replace('page: foreign', 'page: wrong'),
    text => text.replace('status: published', 'status: draft'),
    text => text.replace('library: mathematics', 'library: physics'),
    text => text.replace('status: published', 'status: published\nstatus: draft'),
    text => text.replace('requires: []', 'requires: broken'),
    text => text.replace('items: ["lem-supplier"]', 'items: []'),
  ]) {
    const f = fixture(t), path = join(f.root, 'library/math/foreign.md');
    const text = edit(readFileSync(path, 'utf8')); writeFileSync(path, text); f.receipt.files[0].sha256 = hash(text);
    const checked = f.run(); assert.notEqual(checked.status, 0, output(checked));
  }
  const f = fixture(t), path = join(f.root, 'library/math/foreign.md');
  const text = readFileSync(path); writeFileSync(join(f.root, 'research/outside.md'), text); rmSync(path); symlinkSync(join(f.root, 'research/outside.md'), path);
  const linked = f.run(); assert.notEqual(linked.status, 0); assert.match(output(linked), /regular local snapshot/);
});
test('ambiguous pins and extra local identity carriers cannot resolve a missing plan declaration', t => {
  for (const pinned of [false, true]) {
    const f = fixture(t); const text = readFileSync(join(f.root, 'library/math/foreign.md'));
    writeFileSync(join(f.root, 'library/other/foreign.md'), text);
    if (pinned) f.receipt.files.push({ path: 'library/other/foreign.md', sha256: hash(text) });
    const checked = f.run(); assert.notEqual(checked.status, 0); assert.match(output(checked), /ambiguous/);
  }
});
test('resolution preserves declared closure, explicit prerequisite order and imported B-page protection', t => {
  const f = fixture(t); f.pages[0].requires = [];
  const undeclared = f.run(); assert.notEqual(undeclared.status, 0); assert.match(output(undeclared), /\[undeclared-prereq\].*foreign/);
  f.pages[0].requires = ['foreign']; f.pin('foreign', { order: 5 });
  const later = f.run(); assert.notEqual(later.status, 0); assert.match(output(later), /\[prereq-order\]/);
  f.pin('foreign', { kind: 'B' });
  const explicitLeaf = f.run(); assert.notEqual(explicitLeaf.status, 0); assert.match(output(explicitLeaf), /\[b-leaf\]/);
  rmSync(join(f.root, 'library/math/foreign.md')); f.receipt.files = []; f.pin('foreign-examples'); f.pages[0].requires = ['foreign-examples'];
  const leaf = f.run(); assert.notEqual(leaf.status, 0); assert.match(output(leaf), /\[b-leaf\]/);
});
test('reached imported prerequisite declarations and actual supplier page/item cycles still fail', t => {
  const f = fixture(t); f.pin('foreign', { order: 1, deps: ['deep'] }); f.pin('deep', { order: 0, items: ['lem-deep'] }); f.item('lem-deep');
  const good = f.run(); assert.equal(good.status, 0, output(good));
  f.pin('deep', { order: 0, deps: ['foreign'], items: ['lem-deep'] });
  const declared = f.run(); assert.notEqual(declared.status, 0); assert.match(output(declared), /\[requires-cycle\]/);
  f.pin('deep', { order: 0, items: ['lem-deep'] }); f.item('lem-supplier', ['lem-deep']); f.item('lem-deep', ['lem-supplier']);
  const items = f.run(); assert.notEqual(items.status, 0); assert.match(output(items), /\[item-cycle\]/); assert.match(output(items), /\[page-cycle\]/);
});
test('unrelated bad imported pages and stale unrelated plan declarations stay outside current frontier resolution', t => {
  const f = fixture(t); f.pin('unrelated', { status: 'draft', deps: ['missing-page'], items: ['lem-other'] });
  f.receipt.files.find(row => row.path.endsWith('/unrelated.md')).sha256 = '0'.repeat(64);
  f.pages.push({ id: 'unrelated-plan', category: 'math', kind: 'A', order: 9, requires: ['unrelated'], items: [] });
  const checked = f.run(); assert.equal(checked.status, 0, output(checked));
  assert.match(checked.stdout, /scope: 2 selected pages;/);
});
