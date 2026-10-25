import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync, symlinkSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';
import { importMathematics } from './physics-imports.mjs';

const checker = new URL('./physics-check.mjs', import.meta.url).pathname;
const tools = new URL('..', import.meta.url).pathname;
const output = r => r.stdout + r.stderr;
function fixture(t) {
  const base = mkdtempSync(join(tmpdir(), 'physics-planning-scope-'));
  t.after(() => rmSync(base, { recursive: true, force: true }));
  const root = join(base, 'physics'), source = join(base, 'math');
  for (const repo of [root, source]) for (const dir of ['research', 'items', 'library/math']) mkdirSync(join(repo, dir), { recursive: true });
  symlinkSync(tools, join(root, 'tools'), 'dir');
  const item = (id, deps = [], aliases = []) => `---\nid: ${id}\nkind: definition\nstatus: published\ndeps: ${JSON.stringify(deps)}\naliases: ${JSON.stringify(aliases)}\n---\n`;
  writeFileSync(join(source, 'items/def-supplier.md'), item('def-supplier', ['def-deep'], ['supplier-alias']));
  writeFileSync(join(source, 'items/def-deep.md'), item('def-deep'));
  writeFileSync(join(source, 'items/def-unrelated.md'), item('def-unrelated', ['def-unpublished']));
  writeFileSync(join(source, 'library/math/_category.md'), '---\nlibrary: mathematics\n---\n');
  writeFileSync(join(source, 'library/math/supplier.md'), '---\npage: supplier\nstatus: published\nitems: [def-supplier, def-deep]\n---\n');
  importMathematics(root, source);
  const pages = [
    { id: 'selected', kind: 'A', category: 'math', library: 'mathematics', order: 2, companion: 'selected-examples', requires: ['supplier'], items: [{ id: 'def-selected', kind: 'definition', domain: 'mathematics', deps: ['supplier-alias'], dependency_roles: { 'supplier-alias': 'mathematical-premise' } }] },
    { id: 'selected-examples', kind: 'B', category: 'math', library: 'mathematics', order: 3, requires: ['selected'], items: [] },
    { id: 'supplier', kind: 'P', category: 'math', library: 'mathematics', order: 1, requires: [], items: [] },
    { id: 'unrelated', kind: 'A', category: 'broken', library: 'physics', order: 4, requires: [], items: [] },
  ];
  mkdirSync(join(root, 'library/broken'));
  writeFileSync(join(root, 'library/broken/_category.md'), '---\nlibrary: mathematics\n---\n');
  writeFileSync(join(root, 'pages.json'), JSON.stringify(['selected', 'selected-examples']));
  const save = () => writeFileSync(join(root, 'research/plan-spec.json'), JSON.stringify({ pages }));
  const run = (scoped = true, extra = []) => {
    save();
    return spawnSync(process.execPath, [checker, '--root', root, '--plan', 'research/plan-spec.json', ...(scoped ? ['--pages-file', 'pages.json'] : []), ...extra], { encoding: 'utf8' });
  };
  return { root, source, pages, save, run };
}

test('proposed frontier excludes unrelated imported logical and category faults; bare validation remains strict', t => {
  const f = fixture(t);
  const selected = f.run();
  assert.equal(selected.status, 0, output(selected));
  assert.match(selected.stdout, /0 error\(s\), 1 items checked/);
  const bare = f.run(false);
  assert.notEqual(bare.status, 0, output(bare));
  assert.match(output(bare), /planned page\/category library mismatch: unrelated/);
  f.pages.pop();
  const bareLogical = f.run(false);
  assert.notEqual(bareLogical.status, 0, output(bareLogical));
  assert.match(output(bareLogical), /edge-unresolved.*def-unrelated/);
});

test('required alias-resolved transitive suppliers and their original pins remain mandatory', t => {
  const f = fixture(t);
  f.pages[0].items[0].deps = ['def-unrelated'];
  assert.match(output(f.run()), /def-unpublished.*unknown/);
  f.pages[0].items[0].deps = ['supplier-alias'];
  writeFileSync(join(f.source, 'items/def-deep.md'), readFileSync(join(f.source, 'items/def-deep.md'), 'utf8') + 'Changed original.\n');
  const drift = f.run();
  assert.notEqual(drift.status, 0);
  assert.match(output(drift), /mathematics import changed: items\/def-deep.md/);
});

test('unrelated unfinished original page prose is excluded while placement identity stays strict', t => {
  const f = fixture(t);
  const page = join(f.source, 'library/math/unfinished.md');
  writeFileSync(page, '---\npage: unfinished\ntitle: Arithmetic: unfinished title\nstatus: draft\nitems: [def-unrelated]\n---\n');
  const selected = f.run();
  assert.equal(selected.status, 0, output(selected));
  writeFileSync(page, '---\npage: unfinished\ntitle: In progress\nstatus: draft\nitems: [def-unrelated]\n');
  const partial = f.run();
  assert.equal(partial.status, 0, output(partial));
  // A new home for a reached supplier remains a relevant source change.
  writeFileSync(page, '---\npage: unfinished\ntitle: Arithmetic: unfinished title\nstatus: draft\nitems: [def-supplier]\n---\n');
  assert.match(output(f.run()), /mathematics source home changed: def-supplier/);
  // Unreadable or duplicate inventory fields cannot conceal a supplier home.
  writeFileSync(page, '---\npage: unfinished\ntitle: Arithmetic: unfinished title\nitems: [def-unrelated]\nitems: [def-supplier]\n---\n');
  assert.notEqual(f.run().status, 0);
});

test('selected domain, authored dependency and category metadata faults still fail', t => {
  const f = fixture(t);
  delete f.pages[0].items[0].domain;
  const domain = f.run();
  assert.notEqual(domain.status, 0);
  assert.match(output(domain), /domain-required/);
  f.pages[0].items[0].domain = 'mathematics';
  f.pages[0].items[0].deps = ['def-local-supplier'];
  writeFileSync(join(f.root, 'items/def-local-supplier.md'), '---\nid: def-local-supplier\nkind: definition\ndeps: []\n---\n');
  const supplierDomain = f.run();
  assert.notEqual(supplierDomain.status, 0);
  assert.match(output(supplierDomain), /domain-required \[def-local-supplier\]/);
  f.pages[0].items[0].deps = ['supplier-alias'];
  writeFileSync(join(f.root, 'items/def-selected.md'), '---\nid: def-selected\nkind: definition\ndomain: mathematics\ndeps: [def-absent]\n---\n');
  const authored = f.run();
  assert.notEqual(authored.status, 0);
  assert.match(output(authored), /def-absent.*unknown/);
  rmSync(join(f.root, 'items/def-selected.md'));
  f.pages[0].library = 'physics';
  const metadata = f.run();
  assert.notEqual(metadata.status, 0);
  assert.match(output(metadata), /planned page\/category library mismatch: selected/);
});

test('proposed selection rejects empty, unknown, duplicate and authored-mode selectors', t => {
  const f = fixture(t);
  for (const ids of [[], ['absent'], ['selected', 'selected']]) {
    writeFileSync(join(f.root, 'pages.json'), JSON.stringify(ids));
    assert.notEqual(f.run().status, 0);
  }
  writeFileSync(join(f.root, 'pages.json'), JSON.stringify(['selected']));
  assert.notEqual(f.run(true, ['--run', 'demo']).status, 0);
});

test('native planning checks both proposed pages before writing run artifacts', t => {
  const f = fixture(t);
  f.pages[1].library = 'physics'; f.save();
  const before = readdirSync(join(f.root, 'research')).sort();
  const r = spawnSync(process.execPath, [join(tools, 'tsx-run.mjs'), join(tools, 'physics-autopilot/bin/autopilot.mts'), 'plan', '--repo', f.root, '--run', 'demo', '--pairs', 'selected'], { cwd: f.root, encoding: 'utf8', env: { ...process.env, PHYSICS_REPO: f.root } });
  assert.notEqual(r.status, 0, output(r));
  assert.match(output(r), /planned page\/category library mismatch: selected-examples/);
  assert.deepEqual(readdirSync(join(f.root, 'research')).sort(), before);
});
