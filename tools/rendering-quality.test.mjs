import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';
import { prepareRenderingQuality, verifyRenderingQuality, writeRenderingQuality, renderingQualityRuntimeInputs, renderingQualityRuntimeState } from './rendering-quality.mjs';
import { APP_DIR } from './paths.mjs';

const repo = new URL('..', import.meta.url).pathname;
function fixture(t, physics = false) {
  const root = mkdtempSync(join(tmpdir(), 'rendering-quality-integration-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const put = (file, value) => { mkdirSync(dirname(join(root, file)), { recursive: true }); writeFileSync(join(root, file), typeof value === 'string' ? value : JSON.stringify(value)); };
  const item = (id, title, body) => `---\nid: ${id}\nkind: ${id.startsWith('def-') ? 'definition' : 'example'}\ntitle: ${title}\nstatus: draft\ndeps: []\n---\n\n${body}\n`;
  const pages = [
    { id: 'test-page', kind: 'A', category: 'test-category', order: 1, companion: 'test-page-examples', items: [{ id: 'def-Test', deps: [] }] },
    { id: 'test-page-examples', kind: 'B', category: 'test-category', order: 1, companion: 'test-page', items: [{ id: 'ex-test', deps: [] }] },
  ];
  if (physics) pages[0].items[0].id = 'def-test';
  const definition = pages[0].items[0].id;
  put('research/demo-batch-1.pages.json', pages);
  put(`items/${definition}.md`, item(definition, 'A definition', '## Definition\n\nLet $x$ be a real number.'));
  put('items/ex-test.md', item('ex-test', 'An example', '## Example\n\nThe number $1$ is real.'));
  for (const p of pages) put(`library/${p.category}/${p.id}.md`, `---\npage: ${p.id}\nitems: [${p.items[0].id}]\nexamples: []\n---\n`);
  // A malformed outside carrier must neither be inspected nor break scope.
  put('items/ex-outside.md', 'broken YAML and $\\unknowncommand$ outside the frontier');
  return { root, put, item, physics, definition };
}

for (const physics of [false, true]) test(`${physics ? 'physics' : 'math'}: actual selected parser execution, current cache and stale-source refusal`, async t => {
  const f = fixture(t, physics);
  const result = await prepareRenderingQuality(f.root, 'demo', { physics });
  assert.equal(result.files.length, 4);
  assert.equal(result.errors.length, 0, JSON.stringify(result.errors));
  assert.equal(result.results.reduce((n, row) => n + row.math, 0), 2);
  assert.ok(result.inputs.some(([file]) => file.includes('MathMarkdown')));
  assert.ok(!result.files.some(file => file.includes('outside')));
  assert.ok(renderingQualityRuntimeInputs(f.root, 'demo').length === 0);
  writeRenderingQuality(f.root, 'demo', result);
  assert.deepEqual(await verifyRenderingQuality(f.root, 'demo', { physics }), result);
  assert.deepEqual(await prepareRenderingQuality(f.root, 'demo', { physics }), result);
  assert.ok(renderingQualityRuntimeInputs(f.root, 'demo').length > 0);
  f.put('items/ex-test.md', f.item('ex-test', 'Changed example', '## Example\n\nThe number $2$ is real.'));
  await assert.rejects(verifyRenderingQuality(f.root, 'demo', { physics }), /stale/);
});

test('actual CLI rejects malformed source and cannot pass a missing or empty current frontier', async t => {
  const f = fixture(t);
  const cli = args => spawnSync(process.execPath, [join(repo, 'tools/rendering-quality.mjs'), ...args], {
    cwd: f.root, encoding: 'utf8', env: { ...process.env, PRESTIGE_MATH_REPO: f.root, PRESTIGE_APP_DIR: APP_DIR }, timeout: 60000,
  });
  assert.notEqual(cli(['--run', 'demo', '--verify']).status, 0);
  f.put(`items/${f.definition}.md`, f.item(f.definition, 'A definition', '## Definition\n\nThe space H^1 has a norm.'));
  const failed = cli(['--run', 'demo', '--write']);
  assert.equal(failed.status, 1, failed.stderr);
  assert.match(failed.stdout, /ERROR.*items\/def-Test\.md/);
  f.put('research/demo-batch-1.pages.json', []);
  const empty = cli(['--run', 'demo', '--write']);
  assert.notEqual(empty.status, 0);
  assert.match(empty.stderr, /Empty|empty/);
});

test('referenced display titles are actual parser context and invalidate the bound receipt', async t => {
  const f = fixture(t);
  f.put('items/def-supplier.md', f.item('def-supplier', 'A supplier', '## Definition\n\nContext only.'));
  f.put('items/ex-test.md', f.item('ex-test', 'An example', '## Example\n\nSee [[def-supplier]].'));
  const result = await prepareRenderingQuality(f.root, 'demo');
  assert.equal(result.errors.length, 0);
  assert.ok(result.inputs.some(([file]) => file.endsWith('def-supplier.md#rendered-title')));
  writeRenderingQuality(f.root, 'demo', result);
  const tree = renderingQualityRuntimeState(f.root, 'demo');
  f.put('items/def-supplier.md', f.item('def-supplier', 'A supplier', '## Definition\n\nUnrelated body-only correction.'));
  assert.equal((await verifyRenderingQuality(f.root, 'demo')).fingerprint, result.fingerprint);
  assert.deepEqual(renderingQualityRuntimeState(f.root, 'demo'), tree);
  assert.ok(tree.physicalPaths.includes(join(f.root, 'items/def-supplier.md')));
  assert.ok(!Object.hasOwn(tree.tree, '@rendering-quality:' + join(f.root, 'items/def-supplier.md')));
  f.put('items/def-supplier.md', f.item('def-supplier', 'The space H^1', '## Definition\n\nContext only.'));
  await assert.rejects(verifyRenderingQuality(f.root, 'demo'), /stale/);
  const current = await prepareRenderingQuality(f.root, 'demo');
  assert.ok(current.errors.some(error => error.context === 'reference-label'), JSON.stringify(current.errors));
  assert.notDeepEqual(renderingQualityRuntimeState(f.root, 'demo').tree, tree.tree);
});

test('inherited alias titles use canonical-first metadata resolution and bind exact alias ownership', async t => {
  const f = fixture(t);
  const supplier = (id, title, aliases, body = 'Context only.') => f.item(id, title, '## Definition\n\n' + body)
    .replace('deps: []', 'deps: []\naliases: ' + JSON.stringify(aliases));
  f.put('items/def-supplier.md', supplier('def-supplier', 'A supplier', ['def-old-supplier']));
  f.put('items/ex-test.md', f.item('ex-test', 'An example', '## Example\n\nSee [[def-old-supplier]].'));
  const first = await prepareRenderingQuality(f.root, 'demo');
  assert.deepEqual(first.errors, []);
  assert.equal(first.referenceContext[0].resolved.id, 'def-supplier');
  assert.deepEqual(first.referenceContext[0].resolved.aliases, ['def-old-supplier']);
  assert.ok(first.inputs.some(([file]) => file.endsWith('def-supplier.md#rendered-identity')));
  writeRenderingQuality(f.root, 'demo', first);
  const previous = renderingQualityRuntimeState(f.root, 'demo');
  f.put('items/def-supplier.md', supplier('def-supplier', 'A supplier', ['def-old-supplier'], 'Proof-body-only edit.'));
  assert.equal((await verifyRenderingQuality(f.root, 'demo')).fingerprint, first.fingerprint);
  assert.deepEqual(renderingQualityRuntimeState(f.root, 'demo'), previous);
  f.put('items/def-supplier.md', supplier('def-supplier', 'The space H^1', ['def-old-supplier']));
  await assert.rejects(verifyRenderingQuality(f.root, 'demo'), /stale/);
  const raw = await prepareRenderingQuality(f.root, 'demo');
  assert.ok(raw.errors.some(error => error.context === 'reference-label' && error.target === 'def-old-supplier'), JSON.stringify(raw.errors));
  assert.notDeepEqual(renderingQualityRuntimeState(f.root, 'demo').tree, previous.tree);
  // Reassigning the alias changes the exact title/identity projection even
  // when the displayed title stays equal to the original good one.
  f.put('items/def-supplier.md', supplier('def-supplier', 'A supplier', []));
  f.put('items/def-other.md', supplier('def-other', 'A supplier', ['def-old-supplier']));
  await assert.rejects(verifyRenderingQuality(f.root, 'demo'), /stale/);
  const reassigned = await prepareRenderingQuality(f.root, 'demo');
  assert.equal(reassigned.referenceContext[0].resolved.id, 'def-other');
  assert.notEqual(reassigned.fingerprint, first.fingerprint);
  // Canonical identity takes precedence over another item's alias.
  f.put('items/def-old-supplier.md', supplier('def-old-supplier', 'Canonical target', []));
  assert.equal((await prepareRenderingQuality(f.root, 'demo')).referenceContext[0].resolved.id, 'def-old-supplier');
});

test('ambiguous requested alias owners fail closed without validating unrelated bodies', async t => {
  const f = fixture(t);
  for (const id of ['def-left', 'def-right']) f.put(`items/${id}.md`, f.item(id, 'A supplier', '## Definition\n\nMalformed body $\\invalidbodycommand$.')
    .replace('deps: []', 'deps: []\naliases: [def-old-supplier]'));
  f.put('items/ex-test.md', f.item('ex-test', 'An example', '## Example\n\nSee [[def-old-supplier]].'));
  await assert.rejects(prepareRenderingQuality(f.root, 'demo'), /Ambiguous rendering reference def-old-supplier/);
});

test('scoped runner actually compiles AST diagram blocks and keeps its successful toolchain-bound cache', { timeout: 120000 }, async t => {
  const f = fixture(t);
  const diagram = '\\begin{tikzpicture}\\draw (0,0) -- (1,0);\\end{tikzpicture}';
  f.put('items/ex-test.md', f.item('ex-test', 'An example', '## Example\n\nA segment.\n\n## Remarks\n\n```tikz\n' + diagram + '\n```'));
  const first = await prepareRenderingQuality(f.root, 'demo');
  assert.deepEqual(first.errors, []);
  assert.match(first.diagramToolchain, /^[a-f0-9]{64}$/);
  assert.equal(first.results.reduce((n, row) => n + row.compiled, 0), 1);
  assert.equal(first.results.reduce((n, row) => n + row.diagrams.length, 0), 1);
  assert.ok(first.inputs.some(([file]) => file.endsWith('lib/tikz.ts')));
  assert.ok(first.inputs.some(([file]) => file.endsWith('tex.wasm.gz')));
  writeRenderingQuality(f.root, 'demo', first);
  assert.deepEqual(await verifyRenderingQuality(f.root, 'demo'), first);
  assert.deepEqual(await prepareRenderingQuality(f.root, 'demo'), first);
});
