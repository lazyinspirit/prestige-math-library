import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync, symlinkSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
const { reviewNativeClosure: closure } = await import(process.env.REVIEW_ROOT + '/tools/run-commit-scope.mjs');
const { scopedReadinessTree } = await import(process.env.REVIEW_ROOT + '/tools/step6-scoped-tree.mjs');
const { scopedReportTree } = await import(process.env.REVIEW_ROOT + '/tools/step6-report-scope.mjs');
const root = mkdtempSync(join(tmpdir(), 'independent-derived-review-'));
const put = (path, value) => { mkdirSync(join(root, path, '..'), { recursive: true }); writeFileSync(join(root, path), typeof value === 'string' ? value : JSON.stringify(value)); };
const source = 'research/ordinary-source.json', raw = 'research/raw-cli.json', link = 'research/link.json';
put(source, { nested: { path: 'research/deeper.json' } }); put('research/deeper.json', '{}');
put(raw, 'step5-workflow advance-impact: 0 item(s), complete\n\n');
symlinkSync('ordinary-source.json', join(root, link));
let checked = 0;
const check = (label, test) => { test(); checked++; console.log('PASS ' + label); };
try {
 for (const kind of ['readiness', 'report']) {
  const path = `research/demo-${kind === 'readiness' ? 'publication-readiness' : 'step6-report-integrity'}.json`;
  const receipt = () => kind === 'readiness'
    ? { schema: 2, run: 'demo', protected_tree_scope: 'frontier-prerequisite-context-v1', protected_tree_paths: [raw, link], protected_tree_projections: [] }
    : { version: 2, run: 'demo', scope: 'frontier-prerequisite-report-v2', selectors: { owned_paths: [raw, link], projections: [], items: [{ file: source }] }, protected_tree: { [raw]: 'a'.repeat(64), [link]: 'b'.repeat(64) } };
  const run = value => { put(path, value); return closure(root, 'demo', [], [path]); };
  check(kind + ' inventory does not create selectors', () => { const out = run(receipt()); assert.ok(!out.has(raw)); assert.ok(!out.has(link)); });
  check(kind + ' nested real source closure remains strict', () => { const j = receipt(); j.actual = { evidence: { [source]: 'hash' } }; const out = run(j); assert.ok(out.has(source)); assert.ok(out.has('research/deeper.json')); });
  check(kind + ' raw true input stays parse strict', () => { const j = receipt(); j.input_sha256 = { [raw]: 'hash' }; assert.throws(() => run(j), SyntaxError); });
  check(kind + ' semantic symlink stays forbidden', () => { const j = receipt(); j.actual = { path: link }; assert.throws(() => run(j), /symlink/); });
  check(kind + ' receipt identity strict', () => { const j = receipt(); j.run = 'foreign'; assert.throws(() => run(j), /invalid generated seal inventory/); });
  check(kind + ' malformed inventory cannot hide structured selector', () => { const j = receipt(); j[kind === 'readiness' ? 'protected_tree_paths' : 'protected_tree'] = { actual: { path: link } }; assert.throws(() => run(j), /(?:invalid|malformed) generated seal inventory/); });
  if (kind === 'report') for (const field of ['ledger', 'pages', 'items', 'pathways'])
    check('report real selector ' + field + ' cannot promote a symlink', () => {
      const j = receipt(); j.selectors[field] = field === 'ledger' ? link : [{ file: link }];
      assert.throws(() => run(j), /symlink/);
    });
 }
 put('items/def-demo.md', '---\nid: def-demo\n---\n## Definition\nDemo.\n');
 put('library/demo/page.md', '---\npage: page\nitems: [def-demo]\n---\n');
 put('research/demo-batch-1.pages.json', [{ id: 'page', items: ['def-demo'] }]);
 put('research/plan-spec.json', { pages: [{ id: 'page', items: ['def-demo'] }] });
 put('research/defect-ledger.jsonl', ''); put('research/published-consumer-supplier-ledger.md', '');
 put('research/demo-proof-layout.json', {}); put('research/demo-step6-evidence.json', { run: 'demo', input_sha256: {} });
 const scope = { ledger: 'research/demo-scope-ledger.json', items: [{ id: 'def-demo', file: 'items/def-demo.md' }], pages: [{ id: 'page', file: 'library/demo/page.md' }], pathwayFiles: [] };
 const tree = () => scopedReadinessTree('demo', root, { scope, ownedPaths: [raw, link], includeRows: true });
 const before = tree();
 put('research/demo-publication-readiness.json', { schema: 2, run: 'demo', ...before });
 check('genuine generated report output respects same typed boundary', () => {
   const report = scopedReportTree('demo', root, { scope, ownedPaths: [raw, link], native: before });
   const path = 'research/demo-step6-report-integrity.json'; put(path, report);
   const out = closure(root, 'demo', [], [path]);
   assert.ok(!out.has(raw)); assert.ok(!out.has(link));
 });
 check('raw capture inventory bytes remain sealed', () => { put(raw, 'changed raw capture'); assert.notEqual(tree().protected_tree_sha256, before.protected_tree_sha256); });
 const rawChanged = tree().protected_tree_sha256;
 check('operational link text remains sealed', () => { rmSync(join(root, link)); symlinkSync('deeper.json', join(root, link)); assert.notEqual(tree().protected_tree_sha256, rawChanged); });
 console.log(JSON.stringify({ checked, verdict: 'pass' }));
} finally { rmSync(root, { recursive: true, force: true }); }
