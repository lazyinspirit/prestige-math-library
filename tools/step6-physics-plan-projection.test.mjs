import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { commitStep6, preflightStep6 } from './step6-commit.mjs';
import { preflightCloseoutScope } from './run-commit-scope.mjs';
import { composePlanProjection, planDocument, planForeignResidual } from './step6-plan-projection.mjs';

const hash = value => createHash('sha256').update(value).digest('hex');
function fixture(t) {
  const base = mkdtempSync(join(tmpdir(), 'step6-physics-plan-')), root = join(base, 'physics');
  t.after(() => rmSync(base, { recursive: true, force: true }));
  const putAt = (dir, path, value) => {
    mkdirSync(join(dir, path, '..'), { recursive: true });
    writeFileSync(join(dir, path), typeof value === 'string' ? value : JSON.stringify(value));
  };
  const put = (path, value) => putAt(root, path, value);
  const git = args => {
    const r = spawnSync('git', args, { cwd: base, encoding: 'utf8' });
    assert.equal(r.status, 0, r.stderr); return r.stdout.trimEnd();
  };
  const run = 'demo', selected = Array.from({ length: 258 }, (_, i) => ({
    id: `selected-${i}`, kind: i % 2 ? 'B' : 'A', category: 'physics-test', requires: [],
    items: [{ id: `def-selected-${i}`, kind: 'definition', domain: 'physics', deps: [] }],
  }));
  const pageIds = selected.map(row => row.id), owned = new Set(pageIds);
  const originals = selected.map(row => ({ ...row, items: [] }));
  const doc = (rows, label) => '{\n "foreign_top" : ' + JSON.stringify(label) + ',\n "pages" : [\n'
    + [...rows.map(JSON.stringify), ...Array.from({ length: 60 }, (_, i) =>
      ' { "id" : "foreign-' + i + '", "items": [], "memo": "' + label + ' \\u03b1 { raw }" }')].join(',\n') + '\n ]\n}\n';
  const head = doc(originals, 'HEAD'), index = doc(originals, 'INDEX'), working = doc(selected, 'WORKING');
  mkdirSync(root, { recursive: true });
  git(['init', '-b', 'main']); git(['config', 'user.name', 'Physics fixture']);
  git(['config', 'user.email', 'fixture@example.invalid']);
  mkdirSync(join(base, 'empty-hooks')); git(['config', 'core.hooksPath', join(base, 'empty-hooks')]);
  // Deliberately incompatible root plan proves original_head reads physics/.
  putAt(base, 'research/plan-spec.json', { pages: [{ id: 'math-decoy', items: [] }] });
  putAt(base, 'foreign.md', 'Root HEAD\n'); put('foreign.md', 'Physics HEAD\n');
  put('research/plan-spec.json', head);
  git(['add', '.']); git(['commit', '-m', 'isolated nested baseline']);
  const originalHead = git(['rev-parse', 'HEAD']);
  put('research/plan-spec.json', index); putAt(base, 'foreign.md', 'Root INDEX\n'); put('foreign.md', 'Physics INDEX\n');
  git(['add', '.']); const originalIndex = git(['rev-parse', ':physics/research/plan-spec.json']);
  put('research/plan-spec.json', working); putAt(base, 'foreign.md', 'Root WORKING\n'); put('foreign.md', 'Physics WORKING\n');
  put('research/math-imports.json', { version: 1, source_root: base, files: [{ path: 'items/def-imported.md', sha256: hash('Pinned context only.\n') }] });
  put('items/def-imported.md', 'Pinned context only.\n');
  put('research/demo-scope-ledger.json', { run, pages: selected.map(({ id, kind, category }) => ({ id, kind, category })) });
  put('research/demo-batch-1.pages.json', selected.slice(0, 128));
  put('research/demo-batch-2.pages.json', selected.slice(128));
  for (const row of selected) {
    put(`library/physics-test/${row.id}.md`, `---\npage: ${row.id}\nitems: [${row.items[0].id}]\nexamples: []\n---\n`);
    put(`items/${row.items[0].id}.md`, `---\nid: ${row.items[0].id}\nkind: definition\ndomain: physics\nstatus: draft\ndeps: []\n---\n## Definition\nFixture only.\n`);
  }
  put('research/published-consumer-supplier-ledger.md', ''); put('research/defect-ledger.jsonl', '');
  // Packaging fixtures only: no scientific gate or genuine validation claimed.
  for (const suffix of ['proof-layout.json', 'publication-readiness.json', 'step6-evidence.json',
    'step6-report-integrity.json', 'step6-report.response.json', 'step6-report.md', 'pathway-closure.json', 'judge-closure.json']) put(`research/demo-${suffix}`, '{}');
  const rows = text => planDocument(text).rows.filter(row => owned.has(row.id)).map(({ id, raw }) => ({ id, raw }));
  const authority = 'research/demo-step6-plan-projection.json';
  const spec = { version: 1, kind: 'plan-page-replacement-projection', run, path: 'research/plan-spec.json',
    authorized_by: 'owner', authorization: 'Replace only exact owned physics page rows after writers drain.',
    original_head: originalHead, original_index_blob: originalIndex, page_ids: pageIds,
    base_head_owned_rows: rows(head), base_index_owned_rows: rows(index), target_owned_rows: rows(working),
    evidence: ['research/demo-scope-ledger.json', 'research/demo-batch-1.pages.json', 'research/demo-batch-2.pages.json']
      .map(path => ({ path, sha256: hash(readFileSync(join(root, path))) })) };
  const policy = { version: 1, run, authorized_by: 'owner',
    authorization: 'Commit exact local frontier with separately preserved foreign plan bytes.', additional_paths: [],
    plan_projection: { path: 'research/plan-spec.json', authority, sha256: '' } };
  const seal = () => { put(authority, spec); policy.plan_projection.sha256 = hash(readFileSync(join(root, authority))); put('research/demo-closeout-scope.json', policy); };
  seal();
  const final = 'research/demo-dispatch/tool-step6-finalize-v3.result.json';
  return { base, root, run, git, put, putAt, head, index, working, pageIds, selected, spec, policy, seal, final,
    preflight: () => preflightStep6(root, run, { physics: true }) };
}

test('nested physics transaction replaces 258 rows, preserves 60 foreign rows and both workspace boundaries', t => {
  const f = fixture(t), index = f.git(['ls-files', '--stage', '--', 'foreign.md', 'physics/foreign.md', 'research/plan-spec.json']);
  const scope = f.preflight(); assert.equal(scope.prefix, 'physics'); assert.equal(scope.planProjections.length, 1);
  assert.ok(!scope.localPaths.includes('items/def-imported.md'));
  assert.ok(!scope.paths.includes('research/plan-spec.json'));
  let bindings = 0;
  const result = commitStep6(f.root, f.run, { physics: true, assertValidated() { bindings++; } });
  assert.equal(bindings, 1); assert.equal(f.git(['rev-parse', 'HEAD']), result.commit);
  const committed = f.git(['show', 'HEAD:physics/research/plan-spec.json']) + '\n';
  const indexed = f.git(['show', ':physics/research/plan-spec.json']) + '\n';
  assert.equal(committed, composePlanProjection(f.head, f.spec, 'head').text);
  assert.equal(indexed, composePlanProjection(f.index, f.spec, 'index').text);
  assert.equal(planForeignResidual(committed, f.pageIds), planForeignResidual(f.head, f.pageIds));
  assert.equal(planForeignResidual(indexed, f.pageIds), planForeignResidual(f.index, f.pageIds));
  assert.equal(readFileSync(join(f.root, 'research/plan-spec.json'), 'utf8'), f.working);
  assert.equal(f.git(['ls-files', '--stage', '--', 'foreign.md', 'physics/foreign.md', 'research/plan-spec.json']), index);
  assert.equal(f.git(['show', 'HEAD:foreign.md']), 'Root HEAD');
  assert.equal(f.git(['show', 'HEAD:physics/foreign.md']), 'Physics HEAD');
  assert.equal(readFileSync(join(f.base, 'foreign.md'), 'utf8'), 'Root WORKING\n');
  assert.equal(readFileSync(join(f.root, 'foreign.md'), 'utf8'), 'Physics WORKING\n');
  const receipt = JSON.parse(readFileSync(join(f.root, f.final)));
  const row = receipt.closeout_scope.plan_projections[0];
  assert.equal(row.path, 'physics/research/plan-spec.json'); assert.deepEqual(row.page_ids, f.pageIds);
  assert.equal(row.head_foreign_raw_sha256, hash(planForeignResidual(f.head, f.pageIds)));
  assert.equal(row.index_foreign_raw_sha256, hash(planForeignResidual(f.index, f.pageIds)));
});

for (const mode of ['wrong-domain', 'wrong-root', 'helper-wrong-domain', 'authority-hash', 'owner', 'stale-evidence', 'extra-manifest', 'missing-manifest', 'selected-import', 'additional-import', 'wrong-original-index']) {
  test(`physics projection rejects ${mode} before Git mutation`, t => {
    const f = fixture(t), head = f.git(['rev-parse', 'HEAD']), index = readFileSync(join(f.base, '.git/index'));
    let check = f.preflight;
    if (mode === 'wrong-domain') check = () => preflightStep6(f.root, f.run);
    if (mode === 'wrong-root') check = () => preflightStep6(f.base, f.run, { physics: true });
    if (mode === 'helper-wrong-domain') check = () => preflightCloseoutScope(f.root, f.run, f.final);
    if (mode === 'authority-hash') f.put(f.policy.plan_projection.authority, JSON.stringify(f.spec) + ' ');
    if (mode === 'owner') { f.spec.authorized_by = 'worker'; f.seal(); }
    if (mode === 'stale-evidence') f.put('research/demo-batch-1.pages.json', JSON.stringify(f.selected.slice(0, 128)) + '\n');
    if (mode === 'extra-manifest') f.put('research/demo-batch-3.pages.json', []);
    if (mode === 'missing-manifest') rmSync(join(f.root, 'research/demo-batch-2.pages.json'));
    if (mode === 'selected-import') f.put('research/math-imports.json', { version: 1, files: [{ path: 'items/def-selected-0.md' }] });
    if (mode === 'additional-import') { f.policy.additional_paths.push({ path: 'items/def-imported.md', sha256: hash('Pinned context only.\n'), reason: 'Illegally attempt to own the pinned import context.', ownership_evidence: 'research/demo-owner.json' }); f.seal(); }
    if (mode === 'wrong-original-index') { f.spec.original_index_blob = f.git(['rev-parse', ':research/plan-spec.json']); f.seal(); }
    const errors = {
      'wrong-domain': /domain root/, 'wrong-root': /domain root/, 'helper-wrong-domain': /domain root/,
      'authority-hash': /authority changed/, owner: /invalid owner authority/,
      'stale-evidence': /supporting evidence changed/, 'extra-manifest': /exactly the current scope ledger/,
      'missing-manifest': /manifests differ/, 'selected-import': /imported mathematical pin cannot enter/,
      'additional-import': /imported mathematical pin cannot be additional/,
      'wrong-original-index': /owned relative order/,
    };
    assert.throws(check, errors[mode]);
    assert.equal(f.git(['rev-parse', 'HEAD']), head);
    assert.deepEqual(readFileSync(join(f.base, '.git/index')), index);
    assert.equal(readFileSync(join(f.root, 'research/plan-spec.json'), 'utf8'), f.working);
  });
}

test('physics projection keeps the final-validation binding and main-reference compare-and-swap', t => {
  const f = fixture(t), head = f.git(['rev-parse', 'HEAD']), index = readFileSync(join(f.base, '.git/index'));
  assert.throws(() => commitStep6(f.root, f.run, { physics: true }), /genuine final-validation binding/);
  const sibling = f.git(['commit-tree', f.git(['rev-parse', 'HEAD^{tree}']), '-p', head, '-m', 'concurrent fixture commit']);
  assert.throws(() => commitStep6(f.root, f.run, { physics: true, assertValidated() {
    f.git(['update-ref', 'refs/heads/main', sibling, head]);
  } }), /update-ref failed/);
  assert.equal(f.git(['rev-parse', 'HEAD']), sibling);
  assert.deepEqual(readFileSync(join(f.base, '.git/index')), index);
  assert.equal(existsSync(join(f.root, f.final)), false);
  assert.equal(existsSync(join(f.base, '.git/index.lock')), false);
});
