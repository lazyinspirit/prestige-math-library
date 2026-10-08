import test from 'node:test';
import assert from 'node:assert/strict';
import { copyFileSync, mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

const tool = new URL('./validate-plan.mjs', import.meta.url).pathname;
function fixture(t) {
  const repo = mkdtempSync(join(tmpdir(), 'frontier-plan-'));
  t.after(() => rmSync(repo, { recursive: true, force: true }));
  for (const dir of ['tools', 'items', 'library/test', 'research']) mkdirSync(join(repo, dir), { recursive: true });
  for (const file of ['frontier-item-gate.mjs', 'validate-plan.mjs', 'paths.mjs', 'frontmatter-list.mjs', 'frontier-gate-scope.mjs', 'run-manifest-pages.mjs'])
    copyFileSync(new URL(file, import.meta.url), join(repo, 'tools', file));
  const pages = [
    { id: 'supplier', order: 1, kind: 'P', category: 'test', requires: [], items: [] },
    { id: 'selected', order: 2, kind: 'A', category: 'test', companion: 'selected-examples', requires: ['supplier'], items: [{ id: 'thm-selected', kind: 'theorem', deps: [] }] },
    { id: 'selected-examples', order: 3, kind: 'B', category: 'test', requires: ['selected'], items: [{ id: 'ex-selected', kind: 'example', deps: ['thm-selected'] }] },
  ];
  function save() {
    writeFileSync(join(repo, 'research/plan-spec.json'), JSON.stringify({ pages }));
    writeFileSync(join(repo, 'research/run-test-batch-1.pages.json'), JSON.stringify(pages.filter(p => p.id.startsWith('selected'))));
  }
  function item(id, deps = [], justified = []) {
    writeFileSync(join(repo, `items/${id}.md`), `---\nid: ${id}\ndeps: ${JSON.stringify(deps)}\njustified_by: ${JSON.stringify(justified)}\n---\n`);
  }
  function home(id, ids) {
    writeFileSync(join(repo, `library/test/${id}.md`), `---\npage: ${id}\nitems: ${JSON.stringify(ids)}\n---\n`);
  }
  function run(scoped = true, name = 'run-test') {
    save();
    return spawnSync(process.execPath, [tool, 'research/plan-spec.json', '--repo', repo, ...(scoped ? ['--run', name] : [])], { cwd: repo, encoding: 'utf8' });
  }
  function gate() {
    return spawnSync(process.execPath, ['tools/frontier-item-gate.mjs', '--run', 'run-test', '--tool', 'validate-plan'], { cwd: repo, encoding: 'utf8' });
  }
  return { repo, pages, save, item, home, run, gate };
}
const output = r => r.stdout + r.stderr;

test('manifest page diagnostics exclude unrelated broken pages, but bare checks retain them', t => {
  const f = fixture(t);
  f.pages.push({ id: 'unrelated', order: 4, kind: 'A', category: 'test', requires: ['missing-page'], items: [{ id: 'wrong-id', kind: 'lemma', deps: ['lem-missing'] }] });
  const scoped = f.run();
  assert.equal(scoped.status, 0, output(scoped));
  assert.match(scoped.stdout, /scope: 2 selected pages;/);
  const bare = f.run(false);
  assert.equal(bare.status, 1, output(bare));
  assert.match(bare.stdout, /\[requires-resolve\]/);
});

test('selected missing declarations and missing dependencies remain hard errors', t => {
  const f = fixture(t);
  f.pages[1].requires.push('missing-page');
  f.pages[1].items[0].deps.push('lem-missing');
  const r = f.run();
  assert.equal(r.status, 1, output(r));
  assert.match(r.stdout, /\[requires-resolve\]/);
  assert.match(r.stdout, /\[resolve\]/);
});

test('published suppliers induce undeclared-prerequisite findings in selected pages', t => {
  const f = fixture(t);
  f.item('lem-supplier'); f.home('supplier', ['lem-supplier']);
  f.pages[1].requires = []; f.pages[1].items[0].deps = ['lem-supplier'];
  const r = f.run();
  assert.equal(r.status, 1, output(r));
  assert.match(r.stdout, /\[undeclared-prereq\] page selected .*supplier/);
});

test('external item cycles in the selected dependency closure fail, disconnected cycles do not', t => {
  const f = fixture(t);
  f.item('lem-cycle-one', ['lem-cycle-two']); f.item('lem-cycle-two', ['lem-cycle-one']);
  f.home('supplier', ['lem-cycle-one', 'lem-cycle-two']);
  assert.equal(f.run().status, 0);
  f.pages[1].items[0].deps = ['lem-cycle-one'];
  const r = f.run();
  assert.equal(r.status, 1, output(r));
  assert.match(r.stdout, /\[item-cycle\]/);
});

test('reachable declared-prerequisite cycles remain failures', t => {
  const f = fixture(t);
  f.pages[0].requires = ['other'];
  f.pages.push({ id: 'other', order: 0, kind: 'P', category: 'test', requires: ['supplier'], items: [] });
  const r = f.run();
  assert.equal(r.status, 1, output(r));
  assert.match(r.stdout, /\[requires-cycle\]/);
});

test('actual external supplier dependencies override stale unrelated plan metadata', t => {
  const f = fixture(t);
  f.item('lem-supplier'); f.home('supplier', ['lem-supplier']);
  f.pages[0].items = [{ id: 'lem-supplier', kind: 'lemma', deps: ['lem-supplier'] }];
  f.pages[1].items[0].deps = ['lem-supplier'];
  const r = f.run();
  assert.equal(r.status, 0, output(r));
});

test('definition justification discharges do not introduce spurious cycles', t => {
  const f = fixture(t);
  f.item('def-supplier', [], ['lem-supplier']); f.item('lem-supplier', ['def-supplier']);
  f.home('supplier', ['def-supplier', 'lem-supplier']);
  f.pages[1].items[0].deps = ['def-supplier'];
  const r = f.run();
  assert.equal(r.status, 0, output(r));
});

test('missing current manifests and missing manifest pages fail closed', t => {
  const f = fixture(t);
  const missing = f.run(true, 'missing-run');
  assert.equal(missing.status, 2, output(missing));
  assert.match(output(missing), /No current run manifests/);
  f.save();
  writeFileSync(join(f.repo, 'research/run-test-batch-1.pages.json'), JSON.stringify([{ ...f.pages[1], id: 'absent', items: [{ id: 'thm-absent', kind: 'theorem', deps: [] }] }]));
  const r = spawnSync(process.execPath, [tool, 'research/plan-spec.json', '--repo', f.repo, '--run', 'run-test'], { cwd: f.repo, encoding: 'utf8' });
  assert.equal(r.status, 2, output(r));
  assert.match(output(r), /must occur exactly once/);
});

test('supplier page cycles are checked through current external page inventories', t => {
  const f = fixture(t);
  f.pages.push({ id: 'other', order: 0, kind: 'P', category: 'test', requires: [], items: [] });
  f.item('lem-x', ['lem-y']); f.item('lem-y');
  f.item('lem-u', ['lem-v']); f.item('lem-v');
  f.home('supplier', ['lem-x', 'lem-v']); f.home('other', ['lem-y', 'lem-u']);
  f.pages[1].requires.push('other'); f.pages[1].items[0].deps = ['lem-x'];
  const r = f.run();
  assert.equal(r.status, 1, output(r));
  assert.match(r.stdout, /\[page-cycle\]/);
  assert.doesNotMatch(r.stdout, /\[item-cycle\]/);
});

test('current manifest inventory replaces stale canonical items before splice', t => {
  const f = fixture(t); f.save();
  // Canonical absence is normal until Step 4; stale canonical subject items
  // must not remain validator subjects after the current inventory is overlaid.
  f.pages[1].items = [{ id: 'wrong-stale', kind: 'theorem', deps: ['lem-missing'] }];
  f.save();
  writeFileSync(join(f.repo, 'research/run-test-batch-1.pages.json'), JSON.stringify([
    { ...f.pages[1], items: [{ id: 'thm-added', kind: 'theorem', deps: [] }] },
    { ...f.pages[2], items: [{ id: 'ex-selected', kind: 'example', deps: ['thm-added'] }] },
  ]));
  const r = spawnSync(process.execPath, [tool, 'research/plan-spec.json', '--repo', f.repo, '--run', 'run-test'], { cwd: f.repo, encoding: 'utf8' });
  assert.equal(r.status, 0, output(r));
  assert.doesNotMatch(output(r), /wrong-stale|lem-missing/);
});

test('native wrapper validates unspliced manifest subjects against empty canonical inventories', t => {
  const f = fixture(t); f.save();
  f.item('lem-supplier'); f.home('supplier', ['lem-supplier']);
  const current = [
    { ...f.pages[1], items: [{ id: 'thm-added', kind: 'theorem', deps: ['lem-supplier'] }] },
    { ...f.pages[2], items: [{ id: 'ex-added', kind: 'example', deps: ['thm-added'] }] },
  ];
  f.pages[1].items = []; f.pages[2].items = []; f.save();
  writeFileSync(join(f.repo, 'research/run-test-batch-1.pages.json'), JSON.stringify(current));
  const r = f.gate();
  assert.equal(r.status, 0, output(r));
  current[0].requires = [];
  writeFileSync(join(f.repo, 'research/run-test-batch-1.pages.json'), JSON.stringify(current));
  const missing = f.gate();
  assert.equal(missing.status, 1, output(missing));
  assert.match(output(missing), /\[undeclared-prereq\] page selected .*supplier/);
});

test('native wrapper rejects populated page selectors with empty manifest item scopes', t => {
  const f = fixture(t); f.save();
  writeFileSync(join(f.repo, 'research/run-test-batch-1.pages.json'), JSON.stringify([
    { ...f.pages[1], items: [] }, { ...f.pages[2], items: [] },
  ]));
  const r = f.gate();
  assert.equal(r.status, 2, output(r));
  assert.match(output(r), /Empty frontier page/);
});

test('native wrapper retains selected undeclared prerequisites and external supplier context', t => {
  const f = fixture(t);
  f.item('lem-supplier'); f.home('supplier', ['lem-supplier']);
  f.pages[1].requires = []; f.pages[1].items[0].deps = ['lem-supplier'];
  f.pages.push({ id: 'unrelated', order: 4, kind: 'A', category: 'test', requires: ['missing-page'], items: [] });
  f.save();
  const r = f.gate();
  assert.equal(r.status, 1, output(r));
  assert.match(output(r), /\[undeclared-prereq\] page selected .*supplier/);
  assert.doesNotMatch(output(r), /\[requires-resolve\]/);
});

test('native wrapper overlays same-ID manifest dependencies and requires on stale plan subjects', t => {
  const f = fixture(t);
  f.item('lem-supplier'); f.home('supplier', ['lem-supplier']);
  f.pages.push({ id: 'unrelated', order: 4, kind: 'A', category: 'test', requires: ['missing-page'], items: [] });
  f.save();
  // The stale plan admits supplier but has no item dependency. The current
  // manifest removes that declaration while its item actually uses supplier.
  const selected = { ...f.pages[1], requires: [], items: [{ ...f.pages[1].items[0], deps: ['lem-supplier'] }] };
  writeFileSync(join(f.repo, 'research/run-test-batch-1.pages.json'), JSON.stringify([selected, f.pages[2]]));
  const r = f.gate();
  assert.equal(r.status, 1, output(r));
  assert.match(output(r), /\[undeclared-prereq\] page selected .*supplier/);
  assert.doesNotMatch(output(r), /\[requires-resolve\]/);
  selected.requires = ['supplier'];
  writeFileSync(join(f.repo, 'research/run-test-batch-1.pages.json'), JSON.stringify([selected, f.pages[2]]));
  const repaired = f.gate();
  assert.equal(repaired.status, 0, output(repaired));
});

test('run overlay rejects mismatched page selectors and ambiguous canonical item ownership', t => {
  const f = fixture(t); f.save();
  writeFileSync(join(f.repo, 'pages.json'), JSON.stringify(['selected']));
  const mismatch = spawnSync(process.execPath, [tool, 'research/plan-spec.json', '--repo', f.repo, '--run', 'run-test', '--pages-file', 'pages.json'], { cwd: f.repo, encoding: 'utf8' });
  assert.equal(mismatch.status, 2, output(mismatch));
  assert.match(output(mismatch), /must exactly match/);
  f.pages[0].items = [{ ...f.pages[1].items[0] }]; f.save();
  const ambiguous = f.gate();
  assert.equal(ambiguous.status, 1, output(ambiguous));
  assert.match(output(ambiguous), /\[frontier-selection\].*thm-selected has conflicting canonical ownership/);
  f.pages[1].items = []; f.save();
  writeFileSync(join(f.repo, 'research/run-test-batch-1.pages.json'), JSON.stringify([
    { ...f.pages[1], items: [{ id: 'thm-selected', kind: 'theorem', deps: [] }] }, f.pages[2],
  ]));
  const wrongHome = f.gate();
  assert.equal(wrongHome.status, 1, output(wrongHome));
  assert.match(output(wrongHome), /\[frontier-selection\].*thm-selected has conflicting canonical ownership/);
});
