import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { runScope } from './step6-lib.mjs';
import { step6OwnedInputs } from './step6-owned-inputs.mjs';
import { scopedReadinessTree } from './step6-scoped-tree.mjs';

function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'step6-slot-outer-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const put = (file, value) => {
    mkdirSync(join(root, file, '..'), { recursive: true });
    writeFileSync(join(root, file), typeof value === 'string' ? value : JSON.stringify(value));
  };
  const git = (...args) => execFileSync('git', args, { cwd: root, encoding: 'utf8' }).trim();
  put('items/op-old.md', '---\nid: op-old\nkind: open-problem\n---\n## Open problem\nHistorical question.\n');
  put('research/demo-scope-ledger.json', { pages: [{ id: 'page' }] });
  put('research/demo-batch-1.pages.json', [{ id: 'page', items: ['ex-current'] }]);
  put('research/plan-spec.json', { pages: [{ id: 'page', items: ['ex-current'] }] });
  put('research/defect-ledger.jsonl', ''); put('research/published-consumer-supplier-ledger.md', '');
  put('library/category/page.md', '---\npage: page\nitems: []\nexamples: [ex-current]\n---\n');
  git('init', '-b', 'main'); git('config', 'user.name', 'Fixture'); git('config', 'user.email', 'fixture@example.invalid');
  git('add', '.'); git('commit', '-qm', 'original fixture');
  rmSync(join(root, 'items/op-old.md'));
  put('items/ex-current.md', '---\nid: ex-current\nkind: example\naliases: [op-old]\n---\n## Example\nCurrent answer.\n');
  return { root, put };
}

test('navigation alias alone grants no Step-6 ownership of a removed original source', t => {
  const { root } = fixture(t);
  const scope = runScope('demo', root);
  assert.deepEqual(scope.items.map(row => row.id), ['ex-current']);
  assert.equal(scope.original_slot_reclassification, undefined);
  const owned = step6OwnedInputs('demo', root);
  assert.ok(owned.includes('items/ex-current.md'));
  assert.ok(!owned.includes('items/op-old.md'), 'an alias is not deletion authority');
  const native = scopedReadinessTree('demo', root, { scope, includeRows: true, ownedPaths: owned });
  assert.ok(!native.protected_tree_projections.some(path => path.endsWith('#original-slot-deletion')));
});

// The shared fixture records a real, fully validated temporary receipt and
// preserves all 1,472 original slots and 344 historical rejected tuples.
import { createOriginalSlotFixture } from './step5-original-slot-reclassification.test.mjs';
import { ORIGINAL_SLOT_ID as OLD, CURRENT_SLOT_ID as NEW } from './step5-original-slot-reclassification.mjs';
import { readFileSync } from 'node:fs';
import { syncMaintenance } from './consumer-maintenance.mjs';
import { statementHash } from './step5-statement.mjs';
import { collect as collectEdges } from './frontier-dependency-ledger.mjs';
import { preflightStep6 } from './step6-commit.mjs';

function migratedFixture(t) {
  const f = createOriginalSlotFixture(); t.after(f.cleanup);
  f.install();
  const put = (file, value) => {
    mkdirSync(join(f.root, file, '..'), { recursive: true });
    writeFileSync(join(f.root, file), typeof value === 'string' ? value : JSON.stringify(value));
  };
  const page = f.request.home_page;
  // Current preparation metadata; immutable receipt preimages stay untouched.
  put(`library/inverse-problems/${page}.md`, `---\npage: ${page}\nitems: []\nexamples: [${NEW}]\n---\n`);
  put(`research/${f.run}-scope-ledger.json`, { pages: [{ id: page, batch: '21' }] });
  put('research/plan-spec.json', { pages: [{ id: page, items: [NEW] }] });
  put('research/defect-ledger.jsonl', ''); put('research/published-consumer-supplier-ledger.md', '');
  return { ...f, put };
}

test('authenticated original slot remains in frontier maintenance and requires current edge review', t => {
  const f = migratedFixture(t), supplier = 'lem-route-supplier';
  f.put(`items/${supplier}.md`, `---\nid: ${supplier}\nkind: lemma\ndeps: []\n---\n## Statement\nA fixed supplier statement.\n`);
  f.put(`items/${NEW}.md`, f.current.replace('deps: []', `deps: [${supplier}]`));
  f.put(`research/${f.run}-batch-1.pages.json`, [{ id: 'supplier-page', items: [{ id: supplier }] }]);
  const historical = { kind: 'item', consumer: OLD, supplier, status: 'verified', evidence: 'Historical old-question supplier terminology review.' };
  f.put(`research/${f.run}-batch-21.cross-batch-dependencies.json`, [historical]);
  let edges = collectEdges(f.root, f.run);
  assert.equal(edges.historical_reviews.length, 1);
  assert.equal(edges.historical_reviews[0].current_review_credit, false);
  assert.equal(edges.historical_reviews[0].consumer, OLD);
  assert.deepEqual(edges.edges.find(row => row.consumer === NEW).reviews, []);
  f.put(`research/${f.run}-batch-21.cross-batch-dependencies.json`, [historical,
    { ...historical, consumer: NEW, evidence: 'Current example proof uses the current supplier under its stated hypotheses.' }]);
  edges = collectEdges(f.root, f.run);
  assert.equal(edges.edges.find(row => row.consumer === NEW).reviews.length, 1);
  const path = `items/${supplier}.md`, before = readFileSync(join(f.root, path), 'utf8');
  const after = before.replace('A fixed supplier statement.', 'A changed supplier statement.');
  f.put(path, after);
  const state = syncMaintenance(f.root, f.run, [{ id: supplier,
    before_statement_sha256: statementHash(before), after_statement_sha256: statementHash(after) }]);
  assert.ok(state.frontier_events.some(row => row.consumer_id === NEW));
  assert.ok(!state.pending.some(row => row.id === NEW), 'original-slot replacement is never outside maintenance');
});

test('Step-6 owns only the receipt-licensed old deletion and seals current source plus receipt', t => {
  const f = migratedFixture(t);
  // Exercise the licensed Git deletion against an exact archived old preimage.
  // This is transaction-boundary fixture state, not a native Step-6 completion.
  f.put(`items/${OLD}.md`, f.before);
  const git = (...args) => execFileSync('git', args, { cwd: f.root, encoding: 'utf8' }).trim();
  git('init', '-b', 'main'); git('config', 'user.name', 'Fixture'); git('config', 'user.email', 'fixture@example.invalid');
  git('add', '.'); git('commit', '-qm', 'temporary transaction preimages');
  rmSync(join(f.root, `items/${OLD}.md`));
  const scope = runScope(f.run, f.root), owned = step6OwnedInputs(f.run, f.root);
  assert.deepEqual(scope.items.map(row => row.id), [NEW]);
  assert.ok(owned.includes(`items/${OLD}.md`));
  assert.ok(owned.includes(`items/${NEW}.md`));
  assert.ok(owned.includes(scope.original_slot_reclassification.receipt));
  assert.ok(!owned.includes('items/ex-unrelated-deleted.md'));
  const native = scopedReadinessTree(f.run, f.root, { scope, includeRows: true, ownedPaths: owned });
  assert.ok(native.protected_tree_paths.includes(`items/${NEW}.md`));
  assert.ok(native.protected_tree_paths.includes(scope.original_slot_reclassification.receipt));
  assert.ok(native.protected_tree_projections.includes(`items/${OLD}.md#original-slot-deletion`));
  assert.throws(() => preflightStep6(f.root, f.run), /certification missing/i);
  const { certificate } = f.nativeCertificate();
  f.put(`research/${f.run}-step5-v2/certification.json`, certificate);
  const prepared = preflightStep6(f.root, f.run);
  assert.ok(prepared.localPaths.includes(`items/${OLD}.md`));
  assert.ok(prepared.localPaths.includes(`items/${NEW}.md`));
  const object = text => execFileSync('git', ['hash-object', '-w', '--stdin'],
    { cwd: f.root, input: text, encoding: 'utf8' }).trim();
  git('update-index', '--cacheinfo', `100644,${object('unlicensed replacement preimage')},items/${OLD}.md`);
  assert.throws(() => preflightStep6(f.root, f.run), /Git preimage is not the authenticated old carrier/);
  git('update-index', '--cacheinfo', `100644,${object(f.before)},items/${OLD}.md`);
  f.put(`items/${OLD}.md`, f.before);
  assert.throws(() => step6OwnedInputs(f.run, f.root), /old|original|carrier|delet|exist/i);
});
