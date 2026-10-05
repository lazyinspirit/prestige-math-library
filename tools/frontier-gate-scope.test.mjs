import assert from 'node:assert/strict';
import test from 'node:test';
import { copyFileSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';
import { frontierGateScope, scopedGateArgv } from './frontier-gate-scope.mjs';
import { APP_DIR } from './paths.mjs';

const tools = new URL('.', import.meta.url).pathname;
function fixture(t) {
  const repo = mkdtempSync(join(tmpdir(), 'frontier-gates-test-'));
  t.after(() => rmSync(repo, { recursive: true, force: true }));
  for (const dir of ['tools', 'items', 'research', 'library/test']) mkdirSync(join(repo, dir), { recursive: true });
  for (const file of ['extcheck.mjs', 'depsource.mjs', 'pathcheck.mjs', 'pathway-lib.mjs', 'paths.mjs', 'frontmatter-list.mjs', 'item-scope.mjs', 'run-manifest-pages.mjs', 'depcheck.mjs', 'facts-block.mjs', 'published-repair-policy.mjs', 'item-hash.mjs'])
    copyFileSync(join(tools, file), join(repo, 'tools', file));
  const write = (path, text) => writeFileSync(join(repo, path), text);
  const item = (id, deps = '[]', extra = '') => `---\nid: ${id}\nkind: theorem\nstatus: draft\ndeps: ${deps}\n${extra}---\n`;
  write('items/thm-selected.md', item('thm-selected'));
  write('items/thm-unrelated.md', item('thm-unrelated', '[]', 'proved_here: false\n'));
  write('items/thm-supplier.md', item('thm-supplier'));
  const page = (id, ids, status = 'draft') => `---\npage: ${id}\nstatus: ${status}\nitems: [${ids}]\nexamples: []\n---\n`;
  write('library/test/selected.md', page('selected', 'thm-selected'));
  write('library/test/unrelated.md', page('unrelated', 'thm-unrelated', 'published'));
  write('library/test/supplier.md', page('supplier', 'thm-supplier', 'published'));
  write('research/plan-spec.json', JSON.stringify({ pages: [
    { id: 'selected', category: 'test', order: 1, items: [{ id: 'thm-selected', deps: ['thm-supplier'] }] },
    { id: 'unrelated', category: 'test', order: 2, items: [{ id: 'thm-unrelated', deps: ['thm-missing'] }] },
  ] }));
  write('research/b-leaf-legacy-allowlist.json', JSON.stringify({ version: 1, edges: [] }));
  write('items.json', JSON.stringify(['thm-selected']));
  write('pages.json', JSON.stringify(['selected']));
  const run = (tool, args = []) => spawnSync(process.execPath, [`tools/${tool}.mjs`, ...args], {
    cwd: repo, encoding: 'utf8', env: { ...process.env, ...(APP_DIR ? { PRESTIGE_APP_DIR: APP_DIR } : {}) }, timeout: 30_000,
  });
  return { repo, write, item, run };
}

test('extcheck excludes unrelated shape defects while including selected defects', t => {
  const f = fixture(t);
  assert.equal(f.run('extcheck', ['--json']).status, 1);
  assert.equal(f.run('extcheck', ['--items-file', 'items.json', '--json']).status, 0);
  f.write('items/thm-selected.md', f.item('thm-selected', '[]', 'external_refs: [thm-absent]\n'));
  const result = f.run('extcheck', ['--items-file', 'items.json', '--json']);
  assert.equal(result.status, 1);
  assert.deepEqual(JSON.parse(result.stdout).errors.map(e => e.code), ['external-dangling']);
});

test('depsource limits subjects but still resolves suppliers outside selection', t => {
  const f = fixture(t);
  assert.equal(f.run('depsource', ['--json']).status, 1);
  const result = f.run('depsource', ['--items-file', 'items.json', '--json']);
  assert.equal(result.status, 0, result.stderr);
  assert.deepEqual(JSON.parse(result.stdout).rows.map(r => [r.item, r.dep, r.verdict]), [['thm-selected', 'thm-supplier', 'draft-page']]);
  f.write('items.json', JSON.stringify(['thm-unrelated']));
  assert.equal(f.run('depsource', ['--items-file', 'items.json']).status, 1);
});

test('pathcheck keeps draft coverage advisory and excludes unrelated published coverage defects', t => {
  const f = fixture(t);
  f.write('library/test/_pathway.md', '---\nparts:\n  - part: prerequisites\n    title: Prerequisites\n    pages: [supplier]\n---\n## prerequisites\n\nRead the supplier.\n');
  const full = f.run('pathcheck', ['--json']);
  assert.equal(full.status, 1, full.stderr);
  const focused = f.run('pathcheck', ['--pages-file', 'pages.json', '--json']);
  assert.equal(focused.status, 0, focused.stderr);
  assert.ok(JSON.parse(focused.stdout).warns.some(w => w.code === 'draft-unplaced'));
  assert.ok(!JSON.parse(focused.stdout).errors.length);
});

test('pathcheck retains transitive supplier ordering outside selection', t => {
  const f = fixture(t);
  f.write('items/thm-selected.md', f.item('thm-selected', '[thm-supplier]'));
  f.write('library/test/_pathway.md', '---\nparts:\n  - part: first\n    pages: [selected]\n  - part: second\n    pages: [supplier]\n---\n## first\n\nSelected.\n## second\n\nSupplier.\n');
  const result = f.run('pathcheck', ['--pages-file', 'pages.json', '--json']);
  assert.equal(result.status, 1, result.stderr);
  assert.deepEqual(JSON.parse(result.stdout).errors.map(e => e.code), ['part-order']);
});

test('all opt-in validators reject empty and unknown selections', t => {
  const f = fixture(t);
  for (const [tool, flag, id] of [['extcheck', '--items-file', 'thm-unknown'], ['depsource', '--items-file', 'thm-unknown'], ['pathcheck', '--pages-file', 'unknown']]) {
    for (const ids of [[], [id]]) {
      f.write('scope.json', JSON.stringify(ids));
      const result = f.run(tool, [flag, 'scope.json', '--json']);
      assert.equal(result.status, 1, `${tool}: ${result.stdout}${result.stderr}`);
      assert.match(result.stdout + result.stderr, /nonempty|unknown/);
    }
  }
});

test('manifest selection refreshes current inventories and fails closed without valid subjects', t => {
  const f = fixture(t), ctx = { repo: f.repo, run: 'run-test' };
  const path = 'research/run-test-batch-1.pages.json';
  assert.throws(() => frontierGateScope(ctx), /No current run manifests/);
  f.write(path, JSON.stringify([{ id: 'selected', category: 'test', items: [{ id: 'thm-selected' }] }]));
  const scope = frontierGateScope(ctx);
  assert.deepEqual(JSON.parse(readFileSync(scope.itemsFile)), ['thm-selected']);
  assert.deepEqual(scope.pageFiles, ['library/test/selected.md']);
  f.write(path, JSON.stringify([{ id: 'selected', category: 'test', items: [{ id: 'thm-unrelated' }] }]));
  const next = frontierGateScope(ctx);
  assert.notEqual(scope.itemsFile, next.itemsFile);
  assert.deepEqual(JSON.parse(readFileSync(scope.itemsFile)), ['thm-selected']);
  for (const rows of [[], [{ id: 'selected', category: 'test', items: [] }], [{ id: 'selected', category: 'test', items: [{ id: 'thm-unknown' }] }]]) {
    f.write(path, JSON.stringify(rows));
    assert.throws(() => frontierGateScope(ctx), /Empty|Missing/);
    const argv = scopedGateArgv(ctx, ['node', 'tools/depcheck.mjs'], 'items')();
    const result = spawnSync(argv[0], argv.slice(1), { encoding: 'utf8' });
    assert.equal(result.status, 1);
    assert.match(result.stderr, /frontier gate selection/);
  }
});


test('focused extcheck retains transitive Foundations boundary paths through outside suppliers', t => {
  const f = fixture(t);
  mkdirSync(join(f.repo, 'library/foundations'), { recursive: true });
  mkdirSync(join(f.repo, 'library/not-proved-here'), { recursive: true });
  f.write('library/foundations/consumer.md', '---\npage: consumer\nitems: [thm-selected]\n---\n');
  f.write('library/not-proved-here/deferred-set-theory-beyond-choice.md', '---\npage: deferred-set-theory-beyond-choice\nitems: [rem-deferred]\n---\n');
  f.write('items/rem-deferred.md', '---\nid: rem-deferred\nkind: remark\nproved_here: false\ndeps: []\nverification:\n  precheck: n/a\nsources:\n  references:\n    - title: Source\n---\n');
  f.write('items/thm-selected.md', f.item('thm-selected', '[thm-supplier]'));
  f.write('items/thm-supplier.md', f.item('thm-supplier', '[rem-deferred]'));
  const result = f.run('extcheck', ['--items-file', 'items.json', '--json']);
  assert.equal(result.status, 1, result.stderr);
  const errors = JSON.parse(result.stdout).errors;
  assert.deepEqual(errors.map(e => e.code), ['foundations-deferred-dependency']);
  assert.match(errors[0].msg, /thm-selected -> thm-supplier -> rem-deferred/);
});


test('depcheck excludes unrelated page hygiene, multi-home and disconnected cycles', t => {
  const f = fixture(t);
  f.write('items/thm-cycle-a.md', f.item('thm-cycle-a', '[thm-cycle-b]'));
  f.write('items/thm-cycle-b.md', f.item('thm-cycle-b', '[thm-cycle-a]'));
  f.write('library/test/cycle-a.md', '---\npage: cycle-a\nitems: [thm-cycle-a]\n---\n');
  f.write('library/test/cycle-b.md', '---\npage: cycle-b\nitems: [thm-cycle-b]\n---\n');
  f.write('library/test/unrelated.md', '---\npage: unrelated\ntitle: "bad\\alpha"\nstatus: published\nitems: [thm-unrelated, thm-unrelated, thm-absent]\n---\n');
  const bare = f.run('depcheck', ['--json']);
  assert.equal(bare.status, 1, bare.stderr);
  assert.ok(JSON.parse(bare.stdout).errors.some(row => row.code === 'item-cycle'));
  const focused = f.run('depcheck', ['--items-file', 'items.json', '--json']);
  assert.equal(focused.status, 0, focused.stderr);
  assert.deepEqual(JSON.parse(focused.stdout).errors, []);
  assert.deepEqual(JSON.parse(focused.stdout).warns, []);
  assert.deepEqual(JSON.parse(focused.stdout).summary.page_checks, ['selected']);
});

test('depcheck retains reachable supplier item/page cycles and B-page boundaries', t => {
  const f = fixture(t);
  f.write('items/thm-selected.md', f.item('thm-selected', '[thm-supplier]'));
  f.write('items/thm-supplier.md', f.item('thm-supplier', '[thm-cycle-a]'));
  f.write('items/thm-cycle-a.md', f.item('thm-cycle-a', '[thm-cycle-b]'));
  f.write('items/thm-cycle-b.md', f.item('thm-cycle-b', '[thm-cycle-a]'));
  f.write('library/test/cycle-a.md', '---\npage: cycle-a\nitems: [thm-cycle-a]\n---\n');
  f.write('library/test/cycle-b.md', '---\npage: cycle-b\nitems: [thm-cycle-b]\n---\n');
  let result = f.run('depcheck', ['--items-file', 'items.json', '--json']);
  assert.equal(result.status, 1, result.stderr);
  assert.deepEqual(JSON.parse(result.stdout).errors.map(row => row.code).sort(), ['item-cycle', 'page-cycle']);
  f.write('items/thm-cycle-b.md', f.item('thm-cycle-b'));
  f.write('library/test/cycle-a.md', '---\npage: cycle-a-examples\nitems: [thm-cycle-a]\n---\n');
  result = f.run('depcheck', ['--items-file', 'items.json', '--json']);
  assert.equal(result.status, 1, result.stderr);
  assert.deepEqual(JSON.parse(result.stdout).errors.map(row => row.code), ['b-leaf-content']);
  assert.match(JSON.parse(result.stdout).errors[0].msg, /thm-supplier/);
});

test('depsource run overlay accepts a current unspliced subject and current supplier homes', t => {
  const f = fixture(t);
  f.write('items/thm-added.md', f.item('thm-added'));
  f.write('items.json', JSON.stringify(['thm-added']));
  f.write('research/r-batch-1.pages.json', JSON.stringify([
    { id: 'selected', kind: 'A', category: 'test', order: 1, items: [{ id: 'thm-added', deps: ['thm-supplier'] }] },
    { id: 'supplier', kind: 'A', category: 'test', order: 2, items: [{ id: 'thm-supplier', deps: [] }] },
  ]));
  const legacy = f.run('depsource', ['--items-file', 'items.json', '--json']);
  assert.equal(legacy.status, 1);
  const overlay = f.run('depsource', ['--items-file', 'items.json', '--run', 'r', '--json']);
  assert.equal(overlay.status, 0, overlay.stderr);
  assert.deepEqual(JSON.parse(overlay.stdout).rows.map(row => [row.item, row.dep, row.where]), [['thm-added', 'thm-supplier', 'test/supplier']]);
  const plan = JSON.parse(readFileSync(join(f.repo, 'research/plan-spec.json')));
  plan.pages.push({ id: 'external-plan', order: 0, items: [{ id: 'thm-planned-outside', deps: [] }] });
  f.write('research/plan-spec.json', JSON.stringify(plan));
  f.write('research/r-batch-1.pages.json', JSON.stringify([
    { id: 'selected', kind: 'A', category: 'test', order: 1, items: [{ id: 'thm-added', deps: ['thm-planned-outside'] }] },
  ]));
  const external = f.run('depsource', ['--items-file', 'items.json', '--run', 'r', '--json']);
  assert.equal(external.status, 0, external.stderr);
  assert.equal(JSON.parse(external.stdout).counts['planned-earlier'], 1);
  f.write('research/r-batch-1.pages.json', JSON.stringify([
    { id: 'selected', kind: 'A', category: 'test', order: 1, items: [{ id: 'thm-added', deps: ['thm-not-real'] }] },
  ]));
  const unresolved = f.run('depsource', ['--items-file', 'items.json', '--run', 'r', '--json']);
  assert.equal(unresolved.status, 1, unresolved.stderr);
  assert.equal(JSON.parse(unresolved.stdout).counts.unresolved, 1);
  for (const rows of [[], [{ id: 'selected', kind: 'A', category: 'test', order: 1, items: [] }]]) {
    f.write('research/r-batch-1.pages.json', JSON.stringify(rows));
    assert.equal(f.run('depsource', ['--items-file', 'items.json', '--run', 'r']).status, 1);
  }
  assert.equal(f.run('depsource', ['--items-file', 'items.json', '--run', 'unknown']).status, 1);
});
