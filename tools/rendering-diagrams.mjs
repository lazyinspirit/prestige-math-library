// Shared math/physics diagram check. Only explicit source blocks are selected;
// cache misses call the production app's renderTikz (including its preamble,
// TeX/WASM compiler, SVG treatment and embedded BaKoMa fonts).
import { createHash, randomUUID } from 'node:crypto';
import { createRequire, isBuiltin } from 'node:module';
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync, mkdtempSync, rmSync, renameSync, realpathSync } from 'node:fs';
import { dirname, join, resolve, delimiter } from 'node:path';
import { homedir, tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';
import { WEB_DIR, REPO, tsxLoader } from './paths.mjs';

const revision = 'production-tikz-dom-v1';
const here = dirname(fileURLToPath(import.meta.url));
const hash = value => createHash('sha256').update(value).digest('hex');
const diagnostic = (code, message, detail = {}) => ({ code, message, ...detail });
const webPath = webDir => {
  const web = resolve(webDir ?? WEB_DIR ?? '');
  if (!webDir && !WEB_DIR) throw new Error('Diagram check needs the production web checkout; set PRESTIGE_APP_DIR.');
  if (!existsSync(join(web, 'lib/tikz.ts'))) throw new Error(`Production diagram renderer missing: ${join(web, 'lib/tikz.ts')}`);
  return web;
};

function chromiumPath() {
  if (process.env.PRESTIGE_CHROMIUM_PATH) {
    const explicit = resolve(process.env.PRESTIGE_CHROMIUM_PATH);
    if (!existsSync(explicit)) throw new Error(`PRESTIGE_CHROMIUM_PATH does not exist: ${explicit}`);
    return explicit;
  }
  for (const dir of (process.env.PATH ?? '').split(delimiter)) {
    for (const name of ['chromium', 'chromium-browser', 'google-chrome']) {
      const candidate = join(dir, name);
      if (existsSync(candidate)) return realpathSync(candidate);
    }
  }
  const cache = process.env.PLAYWRIGHT_BROWSERS_PATH ?? join(homedir(), '.cache/ms-playwright');
  if (existsSync(cache)) {
    for (const name of readdirSync(cache).filter(x => /^chromium(?:_headless_shell)?-/.test(x)).sort().reverse()) {
      for (const leaf of ['chrome-headless-shell-linux64/chrome-headless-shell', 'chrome-linux/headless_shell', 'chrome-linux/chrome', 'chrome-linux64/chrome']) {
        const candidate = join(cache, name, leaf);
        if (existsSync(candidate)) return candidate;
      }
    }
  }
  throw new Error('SVG layout needs installed Chromium; set PRESTIGE_CHROMIUM_PATH or install the Playwright Chromium browser.');
}

function packageRoot(require, name) {
  // Some implementation dependencies expose only subpath exports (there is no
  // legal require('name')). Node's lookup directories still identify their
  // installed package without bypassing the compiler's own resolution.
  const manifest = (require.resolve.paths(name) ?? []).map(dir => join(dir, name, 'package.json')).find(existsSync);
  if (manifest) return dirname(realpathSync(manifest));
  let dir = dirname(require.resolve(name));
  while (!existsSync(join(dir, 'package.json'))) {
    const parent = dirname(dir);
    if (parent === dir) throw new Error(`Cannot find package root for ${name}`);
    dir = parent;
  }
  return dir;
}
function treeFiles(dir, found) {
  for (const ent of readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
    if (ent.name === 'node_modules' || ent.name.startsWith('.')) continue;
    const path = join(dir, ent.name);
    if (ent.isDirectory()) treeFiles(path, found);
    else if (ent.isFile()) found.add(path);
  }
}

/** Exact runtime inputs for native gate bindings as well as cache invalidation.
 * No corpus scan: only the app compiler, installed compiler implementation,
 * bundled TeX/WASM/fonts, renderer styles, and browser/tool adapter are read. */
export async function renderingDiagramInputs({ webDir } = {}) {
  const web = webPath(webDir);
  const require = createRequire(join(web, 'package.json'));
  const paths = new Set([
    join(here, 'rendering-diagrams.mjs'), join(here, 'rendering-diagram-worker.mts'),
    join(here, 'paths.mjs'), join(here, 'tsx-run.mjs'), tsxLoader(),
    join(web, 'lib/tikz.ts'), join(web, 'components/library/TikzDiagram.tsx'),
    join(web, 'components/library/ItemBody.tsx'), join(web, 'package.json'), chromiumPath(),
  ]);
  // Hash the shipped implementation, not just package versions: local runtime
  // patches and TeX/font asset changes must invalidate successful old outputs.
  const packages = new Set();
  const addPackage = (require, name) => {
    if (isBuiltin(name)) return; // Bound by process.versions/node in fingerprint.
    const root = packageRoot(require, name);
    if (packages.has(root)) return;
    packages.add(root);
    treeFiles(root, paths);
    const meta = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));
    const localRequire = createRequire(join(root, 'package.json'));
    for (const dependency of Object.keys(meta.dependencies ?? {}).sort()) addPackage(localRequire, dependency);
    for (const dependency of Object.keys(meta.optionalDependencies ?? {}).sort()) {
      const installed = (localRequire.resolve.paths(dependency) ?? []).some(dir => existsSync(join(dir, dependency, 'package.json')));
      if (installed) addPackage(localRequire, dependency);
    }
  };
  addPackage(require, 'node-tikzjax');
  const loader = tsxLoader();
  if (loader.includes('/node_modules/tsx/')) addPackage(createRequire(loader), 'tsx');
  else if (process.env.PRESTIGE_TYPESCRIPT_PATH) {
    // The existing fallback register selects this concrete global TypeScript
    // implementation; bind it too when an app-installed tsx is unavailable.
    treeFiles(dirname(dirname(process.env.PRESTIGE_TYPESCRIPT_PATH)), paths);
  }
  for (const relative of ['package-lock.json', 'pnpm-lock.yaml', 'yarn.lock', 'app/library/library-design.css', 'app/globals.css']) {
    const path = join(web, relative);
    if (existsSync(path)) paths.add(path);
  }
  const inputs = [...paths].sort().map(path => ({ path, sha256: hash(readFileSync(path)) }));
  const toolchainSha256 = hash(JSON.stringify({ revision, node: process.versions, inputs }));
  return { toolchainSha256, inputs };
}

export const diagramCacheKey = ({ source, environment, toolchainSha256, width = 768 }) =>
  hash(JSON.stringify({ revision, source, environment, toolchainSha256, width }));

function run(command, args, { cwd, env, input, timeoutMs = 60000 } = {}) {
  return new Promise((accept, reject) => {
    const child = spawn(command, args, { cwd, env, stdio: ['pipe', 'pipe', 'pipe'] });
    let stdout = '', stderr = '', done = false;
    const finish = (error, result) => {
      if (done) return;
      done = true;
      clearTimeout(timer);
      error ? reject(error) : accept(result);
    };
    const timer = setTimeout(() => { child.kill('SIGKILL'); finish(new Error(`Diagram process exceeded ${timeoutMs}ms`)); }, timeoutMs);
    child.stdout.on('data', chunk => { stdout += chunk; if (stdout.length > 32 * 1024 * 1024) { child.kill('SIGKILL'); finish(new Error('Diagram process output exceeded 32MiB')); } });
    child.stderr.on('data', chunk => { if (stderr.length < 65536) stderr += chunk; });
    child.on('error', error => finish(error));
    child.on('close', code => finish(null, { code, stdout, stderr }));
    child.stdin.on('error', () => {});
    child.stdin.end(input);
  });
}

// This function is serialized into a real Chromium document, after its embedded
// TeX fonts have loaded. getBBox/getBoundingClientRect are actual SVG/DOM layout,
// not guessed character widths. Only heuristic signals become warnings.
function measureSvg(width) {
  const svg = document.querySelector('#diagram svg');
  const parserErrors = document.querySelector('#xml-error');
  if (!svg || parserErrors) return { error: 'Missing or malformed SVG document' };
  const box = svg.getBoundingClientRect();
  const visible = [...svg.querySelectorAll('path,text,use,line,rect,circle,ellipse,polygon,polyline')].filter(el => {
    if (el.closest('defs,clipPath,mask,pattern,marker') || (el.tagName === 'text' && !el.textContent.trim())) return false;
    for (let parent = el; parent && parent !== svg.parentElement; parent = parent.parentElement) {
      const style = getComputedStyle(parent);
      if (style.display === 'none' || style.visibility === 'hidden' || Number(style.opacity) === 0) return false;
    }
    const style = getComputedStyle(el);
    return el.tagName === 'use' || style.fill !== 'none' || style.stroke !== 'none';
  });
  const bounds = visible.map(el => {
    try { const r = el.getBoundingClientRect(); return { x: r.x, y: r.y, width: r.width, height: r.height }; } catch { return null; }
  }).filter(r => r && (r.width > 0 || r.height > 0));
  const textNodes = visible.filter(el => el.tagName === 'text');
  // TeX emits one <text> per glyph. Cluster baseline-adjacent glyphs into labels
  // before looking for collisions; adjacent letters are not label collisions.
  const labels = [];
  for (const el of textNodes) {
    const b = el.getBoundingClientRect();
    if (!b.width || !b.height || getComputedStyle(el).visibility === 'hidden') continue;
    const row = labels.find(l => Math.abs(l.y - b.y) < Math.min(l.height, b.height) * .2 && b.x >= l.x + l.width - 1 && b.x - (l.x + l.width) < Math.max(l.height, b.height) * .6);
    if (row) { row.width = b.right - row.x; row.height = Math.max(row.height, b.height); row.text += el.textContent; }
    else labels.push({ x: b.x, y: b.y, width: b.width, height: b.height, text: el.textContent });
  }
  let collisions = 0;
  for (let i = 0; i < labels.length; i++) for (let j = i + 1; j < labels.length; j++) {
    const a = labels[i], b = labels[j];
    const x = Math.min(a.x + a.width, b.x + b.width) - Math.max(a.x, b.x);
    const y = Math.min(a.y + a.height, b.y + b.height) - Math.max(a.y, b.y);
    if (x > 2 && y > Math.min(a.height, b.height) * .45 && x * y > Math.min(a.width * a.height, b.width * b.height) * .35) collisions++;
  }
  const tolerance = 2;
  const clipped = bounds.filter(b => b.x < box.x - tolerance || b.y < box.y - tolerance || b.x + b.width > box.right + tolerance || b.y + b.height > box.bottom + tolerance).length;
  const tiny = labels.filter(b => b.height < 6).length;
  return { width: box.width, height: box.height, viewportWidth: width, visibleElements: bounds.length, labels: labels.length, clippedElements: clipped, overlappingLabels: collisions, tinyLabels: tiny };
}

/** Real headless-browser SVG layout. Missing/malformed/empty graphics are hard
 * failures; typography, possible clipping and collisions are review warnings. */
export async function inspectDiagramLayout(svg, { width = 768, timeoutMs = 30000, browserPath } = {}) {
  const errors = [], warnings = [];
  if (typeof svg !== 'string' || !/<svg(?:\s|>)/.test(svg)) return { errors: [diagnostic('diagram-missing-svg', 'The production compiler returned no SVG.')], warnings };
  const temp = mkdtempSync(join(tmpdir(), 'pi-diagram-layout-'));
  try {
    const payload = JSON.stringify(svg).replaceAll('<', '\\u003c');
    const script = `const xml=new DOMParser().parseFromString(${payload},'image/svg+xml');if(xml.querySelector('parsererror')){document.body.innerHTML='<div id="xml-error"></div>'}else{document.getElementById('diagram').append(document.importNode(xml.documentElement,true))}document.fonts.ready.then(()=>{let result;try{result=(${measureSvg.toString()})(${JSON.stringify(width)})}catch(e){result={error:String(e)}}document.getElementById('result').textContent=encodeURIComponent(JSON.stringify(result));});`;
    const html = `<!doctype html><meta charset="utf-8"><style>body{margin:16px;color:#111;background:#fff}#diagram{width:${width}px}svg{display:block;max-width:100%;height:auto}</style><div id="diagram"></div><pre id="result"></pre><script>${script}</script>`;
    const file = join(temp, 'diagram.html'); writeFileSync(file, html);
    const output = await run(browserPath ?? chromiumPath(), ['--headless', '--no-sandbox', '--disable-gpu', '--disable-background-networking', '--disable-default-apps', '--host-resolver-rules=MAP * 0.0.0.0', '--allow-file-access-from-files', '--virtual-time-budget=1500', '--dump-dom', 'file://' + file], { timeoutMs });
    const value = output.stdout.match(/<pre id="result">([^<]+)<\/pre>/)?.[1];
    if (output.code !== 0 || !value) throw new Error(`Chromium SVG measurement failed (${output.code}): ${output.stderr.slice(-500)}`);
    const layout = JSON.parse(decodeURIComponent(value));
    if (layout.error || !layout.width || !layout.height || !layout.visibleElements) errors.push(diagnostic('diagram-empty-svg', layout.error ?? 'SVG has no visible geometry or positive viewport.'));
    if (layout.clippedElements) warnings.push(diagnostic('diagram-possible-clipping', `${layout.clippedElements} SVG element(s) extend beyond the viewport; review the rendered diagram.`));
    if (layout.overlappingLabels) warnings.push(diagnostic('diagram-possible-label-collision', `${layout.overlappingLabels} label pair(s) overlap substantially; review intentional overlaps.`));
    if (layout.tinyLabels) warnings.push(diagnostic('diagram-tiny-text', `${layout.tinyLabels} label(s) render below 6px high at ${width}px container width; review readability.`));
    return { errors, warnings, layout };
  } catch (error) {
    errors.push(diagnostic('diagram-layout-unavailable', String(error)));
    return { errors, warnings };
  } finally { rmSync(temp, { recursive: true, force: true }); }
}

/** blocks come from render-source-lint's actual Markdown AST. Callers must pass
 * only their selected files; an absent diagram performs no compiler/browser IO. */
export async function inspectRenderingDiagrams({ source, file = '(source)', blocks, cacheDir = join(REPO, 'scratchpad/rendering-quality-cache'), webDir, runtime: runtimeInputs, timeoutMs = 60000, width = 768 } = {}) {
  if (!blocks) {
    const { inspectRenderingSource } = await import('./render-source-lint.mjs');
    blocks = (await inspectRenderingSource({ source, file })).diagrams;
  }
  const selected = (blocks ?? []).filter(b => !b.proofSection && ['tikz', 'tikzcd'].includes(b.environment));
  const result = { errors: [], warnings: [], diagrams: [], compiled: 0, cached: 0 };
  if (!selected.length) return result;
  let runtime = runtimeInputs, web;
  try { web = webPath(webDir); runtime ??= await renderingDiagramInputs({ webDir: web }); }
  catch (error) { result.errors.push(diagnostic('diagram-toolchain-unavailable', String(error), { file })); return result; }
  result.toolchainSha256 = runtime.toolchainSha256;
  mkdirSync(cacheDir, { recursive: true });
  for (const block of selected) {
    const source = block.source.trim(); // ItemBody passes m[2].trim() to TikzDiagram.
    const key = diagramCacheKey({ source, environment: block.environment, toolchainSha256: runtime.toolchainSha256, width });
    const path = join(cacheDir, key + '.json');
    let entry, hit = false;
    try {
      const candidate = JSON.parse(readFileSync(path, 'utf8'));
      const layout = candidate.measurement?.layout;
      if (candidate.key === key && typeof candidate.svg === 'string' && /<svg(?:\s|>)/.test(candidate.svg)
        && candidate.svgSha256 === hash(candidate.svg) && Array.isArray(candidate.measurement?.errors)
        && !candidate.measurement.errors.length && Array.isArray(candidate.measurement.warnings)
        && layout?.width > 0 && layout.height > 0 && layout.visibleElements > 0) { entry = candidate; hit = true; }
    } catch { /* missing or corrupt cache is a real compilation miss */ }
    try {
      if (!entry) {
        const temp = mkdtempSync(join(tmpdir(), 'pi-diagram-compile-'));
        let output;
        try {
          output = await run(process.execPath, ['--import', tsxLoader(), join(here, 'rendering-diagram-worker.mts')], { cwd: web, env: { ...process.env, TMPDIR: temp }, timeoutMs, input: JSON.stringify({ renderer: join(web, 'lib/tikz.ts'), source, environment: block.environment }) });
        } finally { rmSync(temp, { recursive: true, force: true }); }
        const payload = output.stdout.match(/RENDERING_DIAGRAM_RESULT=(.+)/)?.[1];
        const compiled = payload ? JSON.parse(payload) : null;
        if (output.code !== 0 || !compiled || compiled.error) throw new Error(compiled?.error ?? `Production compiler failed (${output.code}): ${output.stderr.slice(-500)}`);
        result.compiled++;
        const measurement = await inspectDiagramLayout(compiled.svg, { width, timeoutMs });
        entry = { key, svg: compiled.svg, svgSha256: hash(compiled.svg), measurement };
        if (!measurement.errors.length) {
          const pending = path + '.' + process.pid + '.' + randomUUID() + '.tmp';
          writeFileSync(pending, JSON.stringify(entry)); renameSync(pending, path);
        }
      }
      if (hit) result.cached++;
      const context = { file, line: block.line, environment: block.environment };
      result.errors.push(...entry.measurement.errors.map(e => ({ ...e, ...context })));
      result.warnings.push(...entry.measurement.warnings.map(w => ({ ...w, ...context })));
      result.diagrams.push({ ...context, sourceSha256: hash(source), cacheKey: key, cacheHit: hit, svgSha256: entry.svgSha256, layout: entry.measurement.layout });
    } catch (error) { result.errors.push(diagnostic('diagram-compile-error', String(error), { file, line: block.line, environment: block.environment })); }
  }
  return result;
}
