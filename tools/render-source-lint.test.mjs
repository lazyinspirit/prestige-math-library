import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, mkdtempSync, mkdirSync, copyFileSync, symlinkSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { inspectRenderingSource, parseRenderingMarkdown, renderingSourceToolchainFingerprint,
  renderingSourceToolchainInputs, renderingSourceCacheSize, clearRenderingSourceCache } from './render-source-lint.mjs';
import { WEB_DIR } from './paths.mjs';
const root = fileURLToPath(new URL('../', import.meta.url));
const fixtures = JSON.parse(readFileSync(new URL('./test-fixtures/render-source-lint/cases.json', import.meta.url), 'utf8'));
for (const fixture of fixtures) test(fixture.name, () => {
  const result = inspectRenderingSource({ source: fixture.source, file: 'fixture.md', resolveTitle: id => fixture.titles?.[id] });
  if (fixture.error) assert.ok(result.errors.some(error => error.code === fixture.error && error.context === fixture.context), JSON.stringify(result.errors));
  if (fixture.errorCount !== undefined) assert.equal(result.errors.filter(error => error.code === fixture.error).length, fixture.errorCount);
  if (fixture.errors !== undefined) assert.equal(result.errors.length, fixture.errors, JSON.stringify(result.errors));
  if (fixture.math !== undefined) assert.equal(result.math.length, fixture.math);
  if (fixture.warning) assert.ok(result.warnings.some(warning => warning.code === fixture.warning));
});
test('title YAML escapes, source coordinates, aliases and multi-line resolved labels follow actual displayed values', () => {
  const result = inspectRenderingSource({ file: 'item.md', source: '---\ntitle: "Conjugate H^s"\n---\n\n## Remarks\n\nFirst. [[alias]]\nNext x=0.', resolveTitle: id => id === 'alias' ? 'Polar\nr^{n-1}' : undefined });
  assert.ok(result.errors.some(error => error.context === 'title' && error.line === 2));
  assert.ok(result.errors.some(error => error.context === 'reference-label' && error.target === 'alias' && error.line === 7));
  assert.ok(result.errors.some(error => error.code === 'raw-math-equation' && error.line === 8));
});
test('diagram extraction uses real code AST, actual fence syntax and proof-section context', () => {
  const result = inspectRenderingSource({ source: '## Remarks\n\n```tikzcd\nA \\arrow[r] & B\n```\n\n` ```tikz `\n\n~~~text\nignored tilde example\n~~~\n\n## Proof\n\n```tikz\n\\draw (0,0) -- (1,1);\n```' });
  assert.equal(result.diagrams.length, 2);
  assert.deepEqual(result.diagrams.map(block => [block.environment, block.section, block.proofSection]), [['tikzcd', 'Remarks', false], ['tikz', 'Proof', true]]);
  assert.equal(result.errors.filter(error => error.code === 'tikz-in-proof-section').length, 1);
});
test('explicit intended diagrams with unsupported headers, fences or missing closers fail without compiling', () => {
  for (const fence of [
    '```tikz\n\\draw (0,0) -- (1,1);',
    '```tikzcd extra-options\nA & B\n```',
    '~~~tikz\n\\draw (0,0) -- (1,1);\n~~~',
    '````tikzcd\nA & B\n````',
  ]) {
    const result = inspectRenderingSource({ source: '## Remarks\n\n' + fence });
    assert.ok(result.errors.some(error => error.code === 'unsupported-diagram-fence'), fence);
    assert.deepEqual(result.diagrams, []);
  }
  const example = inspectRenderingSource({ source: 'Use ` ```tikz ` literally.\n\n````text\n```tikz\nA & B\n```\n````' });
  assert.equal(example.errors.length, 0);
  assert.deepEqual(example.diagrams, []);
});
test('mixed-case intended diagram fences fail and ordinary single-backtick or fenced code examples remain excluded', () => {
  for (const language of ['TikZ', 'TikzCD', 'TIKZCD']) {
    const result = inspectRenderingSource({ source: '## Remarks\n\n```' + language + '\nA & B\n```' });
    assert.equal(result.errors[0].code, 'unsupported-diagram-fence');
    assert.deepEqual(result.diagrams, []);
  }
  const source = 'Use `tikzcd A \\arrow[r] & B` as a code example, or `tikz draw a line`.\n\n````text\n```tikzcd A \\arrow[r] & B```\n````';
  const example = inspectRenderingSource({ source });
  assert.equal(example.errors.length, 0);
  assert.deepEqual(example.diagrams, []);
});
test('every actual proof-like heading uses its banner boundary, while Facts does not', () => {
  for (const heading of ['Proof', 'Refutation', 'Counterexample', 'Verification']) {
    const result = inspectRenderingSource({ source: `## ${heading}\n\n**Proof technique:** induction on $m$.` });
    assert.equal(result.errors[0].code, 'plain-proof-technique-markup');
    assert.equal(result.math.length, 0);
  }
  assert.equal(inspectRenderingSource({ source: '## Facts & Assumptions\n\n**Proof technique:** induction on $m$.' }).errors.length, 0);
});
test('multi-line technique prose and repeated heading text retain actual parser boundaries', () => {
  const result = inspectRenderingSource({ source: '## Proof\n\n**Proof technique:** use $m$\nand finish by induction.\n\n## Remarks\n\nRemarks\n\n```tikzcd\nA & B\n```' });
  assert.equal(result.errors.length, 0);
  assert.equal(result.math.length, 1);
  assert.equal(result.diagrams[0].section, 'Remarks');
});
test('source and resolved-title changes invalidate a bounded immutable-result cache', () => {
  clearRenderingSourceCache();
  const input = { source: '[[def-target]]', file: 'consumer.md', resolveTitle: () => 'Correct $H^s$ title' };
  const good = inspectRenderingSource(input); assert.equal(good.errors.length, 0);
  good.errors.push({ code: 'caller-mutation' });
  assert.equal(inspectRenderingSource(input).errors.length, 0);
  assert.equal(inspectRenderingSource({ ...input, resolveTitle: () => 'Raw H^s title' }).errors[0].code, 'raw-math-script');
  assert.equal(inspectRenderingSource({ source: 'x=0' }).errors[0].code, 'raw-math-equation');
  for (let i = 0; i < 260; i++) inspectRenderingSource({ source: `Ordinary prose number ${i}.` });
  assert.equal(renderingSourceCacheSize(), 256);
  const inputs = renderingSourceToolchainInputs();
  for (const [path, hash] of Object.entries(inputs)) assert.equal(createHash('sha256').update(readFileSync(path)).digest('hex'), hash);
  assert.match(renderingSourceToolchainFingerprint(), /^[a-f0-9]{64}$/);
  assert.ok(Object.keys(inputs).some(path => path.endsWith('/ItemBody.tsx')));
  assert.ok(Object.keys(inputs).some(path => path.endsWith('/MathMarkdown.tsx')));
  assert.ok(Object.keys(inputs).some(path => path.endsWith('/package-lock.json')));
});
test('actual Markdown AST handles escaped dollars, code and display-tag mode', () => {
  const tree = parseRenderingMarkdown('Use `x^2` and $x^2$.');
  const types = tree.children[0].children.map(node => node.type);
  assert.ok(types.includes('inlineCode')); assert.ok(types.includes('inlineMath'));
  assert.equal(inspectRenderingSource({ source: 'The price is \\$10. Use $x$.' }).errors.length, 0);
  assert.equal(inspectRenderingSource({ source: 'Display $$x=1 \\tag{A}$$.' }).math[0].display, true);
});
test('actual SSR confirms plain banner boundary, title leakage and inherited-reference labels', () => {
  const result = spawnSync(process.execPath, [root + '/tools/tsx-run.mjs', root + '/tools/test-fixtures/render-source-lint/renderer-probe.mts'], {
    cwd: WEB_DIR, encoding: 'utf8', timeout: 30000, env: { ...process.env, TSX_TSCONFIG_PATH: WEB_DIR + '/tsconfig.json' }, input: JSON.stringify([
      { title: 'Raw H^s', body: '## Proof\n\n**Proof technique:** induction on $m$.\n\n1.1 Use $m$. [given] ∎' },
      { title: 'Correct $H^s$', body: '## Proof\n\n**Given:** Inputs.\n\n**Proof technique:** induction on $m$.' },
      { body: '[[def-polar]]', titles: { 'def-polar': 'Polar r^{n-1} formula' } },
      { body: '[[def-polar|Polar $r^{n-1}$ formula]]', titles: { 'def-polar': 'Polar r^{n-1} formula' } },
    ]),
  });
  assert.equal(result.status, 0, result.stderr || result.error?.message);
  const html = JSON.parse(result.stdout);
  assert.match(html[0].body, /technique · induction on \$m\$/);
  assert.match(html[0].title, /Raw H\^s/);
  assert.match(html[1].title, /class="katex"/);
  assert.doesNotMatch(html[1].body, /technique ·/);
  assert.match(html[1].body, /class="katex"/);
  assert.match(html[2].body, /Polar r\^\{n-1\} formula/);
  assert.match(html[3].body, /class="katex"/);
});


test('changed actual loaded toolchain input fails before cached results in a temporary isolated app fixture', t => {
  const base = mkdtempSync(join(tmpdir(), 'render-source-toolchain-'));
  t.after(() => rmSync(base, { recursive: true, force: true }));
  const web = join(base, 'web');
  // Isolated disposable test inputs, never edits of the production app.
  for (const file of ['package.json', 'package-lock.json', 'lib/item-sections.ts',
    'lib/remark-display-tags.ts', 'lib/math-library.ts',
    'components/library/ItemBody.tsx', 'components/library/MathMarkdown.tsx']) {
    const target = join(web, file); mkdirSync(dirname(target), { recursive: true });
    copyFileSync(join(WEB_DIR, file), target);
  }
  symlinkSync(join(WEB_DIR, 'node_modules'), join(web, 'node_modules'), 'dir');
  const script = `
    import assert from 'node:assert/strict';
    import { appendFileSync } from 'node:fs';
    const module = await import(${JSON.stringify(new URL('./render-source-lint.mjs', import.meta.url).href)});
    const input = {source:'A valid $x^2$ expression.',file:'fixture.md'};
    assert.equal(module.inspectRenderingSource(input).errors.length,0);
    assert.equal(module.inspectRenderingSource(input).errors.length,0);
    const before = module.renderingSourceToolchainFingerprint();
    appendFileSync(${JSON.stringify(join(web, 'components/library/MathMarkdown.tsx'))}, ${JSON.stringify('\n// isolated runtime drift fixture\n')});
    for (const operation of [() => module.inspectRenderingSource(input),
      () => module.parseRenderingMarkdown('new analysis'),
      module.renderingSourceToolchainFingerprint, module.renderingSourceToolchainInputs,
      module.assertRenderingSourceToolchainCurrent])
      assert.throws(operation, /toolchain changed after load:.*MathMarkdown\\.tsx; restart/);
    process.stdout.write(JSON.stringify({ok:true,before}));
  `;
  const result = spawnSync(process.execPath, ['--input-type=module', '-e', script], {
    cwd: root, encoding: 'utf8', env: {...process.env, PRESTIGE_APP_DIR:base}, timeout:30000,
  });
  assert.equal(result.status, 0, result.stderr || result.error?.message);
  assert.equal(JSON.parse(result.stdout).ok, true);
});
