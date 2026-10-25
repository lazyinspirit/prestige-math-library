import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, mkdtempSync, rmSync, writeFileSync, mkdirSync, symlinkSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { inspectRenderingDiagrams, inspectDiagramLayout, renderingDiagramInputs, diagramCacheKey } from './rendering-diagrams.mjs';
import { WEB_DIR } from './paths.mjs';

const fixtures = JSON.parse(readFileSync(new URL('./fixtures/rendering-diagrams/regressions.json', import.meta.url)));
const block = (source, environment = 'tikzcd') => ({ source, environment, line: 3 });
const sha = value => createHash('sha256').update(value).digest('hex');

test('no selected diagram needs no compiler or browser, including proof-section blocks', async () => {
  const invalidWeb = '/nonexistent/diagram-web-fixture';
  assert.deepEqual(await inspectRenderingDiagrams({ blocks: [], webDir: invalidWeb }), { errors: [], warnings: [], diagrams: [], compiled: 0, cached: 0 });
  assert.equal((await inspectRenderingDiagrams({ blocks: [{ ...block('invalid TeX'), proofSection: true }], webDir: invalidWeb })).errors.length, 0);
  const prose = await inspectRenderingDiagrams({ source: '## Statement\n\nReadable prose with `tikzcd` as inline code.\n', webDir: invalidWeb });
  assert.equal(prose.errors.length, 0);
  assert.equal(prose.diagrams.length, 0);
});

test('production toolchain inputs bind real renderer, TeX/WASM and embedded fonts', async () => {
  const runtime = await renderingDiagramInputs();
  assert.match(runtime.toolchainSha256, /^[0-9a-f]{64}$/);
  for (const suffix of ['lib/tikz.ts', 'components/library/TikzDiagram.tsx', 'core.dump.gz', 'tex.wasm.gz', 'tex_files.tar.gz']) assert.ok(runtime.inputs.some(i => i.path.endsWith(suffix)), suffix);
  assert.ok(runtime.inputs.some(i => /bakoma.*\.ttf$/.test(i.path)));
  const renderer = runtime.inputs.find(i => i.path.endsWith('lib/tikz.ts'));
  assert.equal(renderer.sha256, sha(readFileSync(renderer.path)));
  const request = { source: fixtures.supportedPreamble, environment: 'tikzcd', toolchainSha256: runtime.toolchainSha256 };
  assert.notEqual(diagramCacheKey(request), diagramCacheKey({ ...request, toolchainSha256: sha(runtime.toolchainSha256 + 'renderer/preamble/font change') }));
  assert.notEqual(diagramCacheKey(request), diagramCacheKey({ ...request, width: 400 }));
});

test('actual production TikZ/Tikzcd compiler rejects comma labels/missing preamble and caches valid SVG', { timeout: 120000 }, async () => {
  const cacheDir = mkdtempSync(join(tmpdir(), 'rendering-diagram-regression-'));
  try {
    for (const name of ['commaLabel', 'missingPreamble']) {
      const result = await inspectRenderingDiagrams({ blocks: [block(fixtures[name])], file: name + '.md', cacheDir });
      assert.ok(result.errors.some(e => e.code === 'diagram-compile-error'), JSON.stringify(result));
      assert.equal(result.cached, 0);
    }
    const first = await inspectRenderingDiagrams({ blocks: [block(fixtures.bracedCommaLabel)], cacheDir });
    assert.deepEqual(first.errors, []);
    assert.equal(first.compiled, 1);
    assert.equal(first.cached, 0);
    assert.equal(first.diagrams[0].layout.visibleElements > 0, true);
    const hit = await inspectRenderingDiagrams({ blocks: [block(fixtures.bracedCommaLabel)], cacheDir });
    assert.deepEqual(hit.errors, []);
    assert.equal(hit.compiled, 0);
    assert.equal(hit.cached, 1);
    assert.equal(hit.diagrams[0].svgSha256, first.diagrams[0].svgSha256);
    const whitespace = await inspectRenderingDiagrams({ blocks: [block('\n' + fixtures.bracedCommaLabel + '\n')], cacheDir });
    assert.equal(whitespace.cached, 1); // Production ItemBody trims fence bodies.
    const changed = await inspectRenderingDiagrams({ blocks: [block(fixtures.supportedPreamble)], cacheDir });
    assert.deepEqual(changed.errors, []);
    assert.equal(changed.compiled, 1);
    assert.notEqual(changed.diagrams[0].cacheKey, first.diagrams[0].cacheKey);
    // A corrupted artifact is a cache miss, never an accepted previous pass.
    writeFileSync(join(cacheDir, first.diagrams[0].cacheKey + '.json'), '{not-json');
    const repairedCache = await inspectRenderingDiagrams({ blocks: [block(fixtures.bracedCommaLabel)], cacheDir });
    assert.deepEqual(repairedCache.errors, []);
    assert.equal(repairedCache.compiled, 1);
    const tikz = await inspectRenderingDiagrams({ blocks: [block(fixtures.tikz, 'tikz')], cacheDir });
    assert.deepEqual(tikz.errors, []);
    assert.equal(tikz.compiled, 1);
  } finally { rmSync(cacheDir, { recursive: true, force: true }); }
});

test('real DOM rejects missing, malformed and empty SVG', async () => {
  for (const svg of ['', '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"></svg>', '<svg><invalid', '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><g opacity="0"><text x="1" y="10">Invisible</text></g></svg>']) {
    const result = await inspectDiagramLayout(svg);
    assert.equal(result.errors.length, 1, svg);
  }
});

test('changing actual renderer input invalidates a previous compiled cache entry', { timeout: 60000 }, async () => {
  // An ephemeral app-shaped fixture runs the exact production compiler source
  // with its real installed packages. No installed application file is edited.
  const temp = mkdtempSync(join(tmpdir(), 'rendering-toolchain-invalidation-'));
  try {
    const web = join(temp, 'web');
    mkdirSync(join(web, 'lib'), { recursive: true });
    mkdirSync(join(web, 'components/library'), { recursive: true });
    for (const relative of ['package.json', 'lib/tikz.ts', 'components/library/TikzDiagram.tsx', 'components/library/ItemBody.tsx']) writeFileSync(join(web, relative), readFileSync(join(WEB_DIR, relative)));
    symlinkSync(join(WEB_DIR, 'node_modules'), join(web, 'node_modules'), 'dir');
    const request = { blocks: [block(fixtures.supportedPreamble)], cacheDir: join(temp, 'cache'), webDir: web };
    const first = await inspectRenderingDiagrams(request);
    assert.deepEqual(first.errors, []);
    assert.equal(first.compiled, 1);
    assert.equal((await inspectRenderingDiagrams(request)).cached, 1);
    const renderer = join(web, 'lib/tikz.ts');
    writeFileSync(renderer, readFileSync(renderer, 'utf8') + '\n// Fixture toolchain revision: force a fresh real compilation.\n');
    const changed = await inspectRenderingDiagrams(request);
    assert.deepEqual(changed.errors, []);
    assert.equal(changed.compiled, 1);
    assert.equal(changed.cached, 0);
    assert.notEqual(changed.toolchainSha256, first.toolchainSha256);
    assert.notEqual(changed.diagrams[0].cacheKey, first.diagrams[0].cacheKey);
  } finally { rmSync(temp, { recursive: true, force: true }); }
});

test('real SVG layout readable negative fixture and warning-only heuristic signals', async () => {
  const readable = await inspectDiagramLayout(fixtures.readableSvg);
  assert.deepEqual(readable.errors, []);
  assert.deepEqual(readable.warnings, []);
  for (const [name, code] of [['collisionSvg', 'diagram-possible-label-collision'], ['clippedSvg', 'diagram-possible-clipping'], ['tinySvg', 'diagram-tiny-text']]) {
    const result = await inspectDiagramLayout(fixtures[name]);
    assert.deepEqual(result.errors, [], name);
    assert.ok(result.warnings.some(w => w.code === code), name + ': ' + JSON.stringify(result));
  }
});
