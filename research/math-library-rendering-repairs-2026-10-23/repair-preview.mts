import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {PassThrough} from 'node:stream';
import {createRequire} from 'node:module';

type ItemMeta = { id: string; title: string; aliases: string[]; provedHere: boolean; source: string; sha256: string };
const root = path.resolve(process.cwd());
const web = path.resolve(root, '../prestige-intelligence/web');
const suppliedRuntime = process.env.TMPDIR ? path.resolve(process.env.TMPDIR) : null;
const localRuntime = suppliedRuntime?.startsWith(root + path.sep) ? suppliedRuntime : path.join(root, 'research/math-library-rendering-repairs-2026-10-23/runtime-cache');
fs.mkdirSync(localRuntime, {recursive:true});
process.env.TMPDIR = localRuntime;
const args = process.argv.slice(2);
let idsValue: string | undefined;
let outValue: string | undefined;
for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  if (arg === '--ids' && args[i + 1]) idsValue = args[++i];
  else if (arg.startsWith('--ids=')) idsValue = arg.slice('--ids='.length);
  else if (arg === '--out' && args[i + 1]) outValue = args[++i];
  else if (arg.startsWith('--out=')) outValue = arg.slice('--out='.length);
  else throw new Error(`Unknown or incomplete argument: ${arg}`);
}
if (!idsValue) throw new Error('Supply a nonempty explicit comma-separated list with --ids ID[,ID...]');
if (!outValue) throw new Error('Supply a new output directory with --out PATH');
const ids = idsValue.split(',').map(x => x.trim()).filter(Boolean);
if (!ids.length) throw new Error('--ids must contain at least one item ID');
if (ids.length > 10) throw new Error('Repair-preview batches are limited to 10 item IDs');
if (new Set(ids).size !== ids.length) throw new Error('--ids contains duplicate IDs');
for (const id of ids) if (!/^[a-z][A-Za-z0-9]*(?:-[A-Za-z0-9]+)*$/.test(id)) throw new Error(`Invalid item ID: ${id}`);

const repairRoot = path.join(root, 'research/math-library-rendering-repairs-2026-10-23');
const out = path.resolve(root, outValue);
if (out === repairRoot || !out.startsWith(repairRoot + path.sep)) {
  throw new Error(`Output must be a new child directory of ${path.relative(root, repairRoot)}`);
}
if (fs.existsSync(out)) throw new Error(`Refusing to overwrite existing output directory: ${path.relative(root, out)}`);
if (!fs.existsSync(root + '/items') || !fs.existsSync(web + '/package.json')) {
  throw new Error('Run from the canonical math-library repository root with the local prestige-intelligence/web checkout available');
}

const sha = (value: string | Buffer) => crypto.createHash('sha256').update(value).digest('hex');
const parseItem = (raw: string, rel: string) => {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) throw new Error(`${rel}: missing or malformed YAML frontmatter delimiters`);
  const fm = YAML.parse(m[1]);
  if (!fm || typeof fm !== 'object' || Array.isArray(fm)) throw new Error(`${rel}: frontmatter is not a mapping`);
  return {fm, body: m[2] as string};
};

const requireFromWeb = createRequire(web + '/package.json');
const YAML = requireFromWeb('yaml');
const titleMap = new Map<string, ItemMeta>();
const mapDiagnostics: Array<{source: string; error: string}> = [];
for (const file of fs.readdirSync(root + '/items').filter(x => x.endsWith('.md')).sort()) {
  const rel = 'items/' + file;
  const raw = fs.readFileSync(root + '/' + rel, 'utf8');
  try {
    const {fm} = parseItem(raw, rel);
    const id = typeof fm.id === 'string' && fm.id ? fm.id : file.slice(0, -3);
    if (typeof fm.title !== 'string' || !fm.title) throw new Error('missing string title');
    const aliases = Array.isArray(fm.aliases) ? fm.aliases.filter((x: unknown): x is string => typeof x === 'string') : [];
    if (titleMap.has(id)) mapDiagnostics.push({source: rel, error: `duplicate canonical ID ${id}; later source wins in this preview map`});
    titleMap.set(id, {id, title: fm.title, aliases, provedHere: fm.kind !== 'open-problem' && fm.proved_here !== false, source: rel, sha256: sha(raw)});
  } catch (error) {
    mapDiagnostics.push({source: rel, error: String(error)});
  }
}

const scoped = ids.map(id => {
  const source = 'items/' + id + '.md';
  const fullPath = path.join(root, source);
  if (!fs.existsSync(fullPath)) throw new Error(`Requested canonical item file is missing: ${source}`);
  const raw = fs.readFileSync(fullPath, 'utf8');
  const {fm, body} = parseItem(raw, source);
  const canonical = typeof fm.id === 'string' && fm.id ? fm.id : id;
  if (canonical !== id) throw new Error(`${source}: frontmatter ID ${canonical} does not match requested ID ${id}`);
  if (typeof fm.title !== 'string' || !fm.title) throw new Error(`${source}: missing string title`);
  for (const field of ['forward_refs', 'justified_by']) {
    if (fm[field] !== undefined && !Array.isArray(fm[field])) throw new Error(`${source}: ${field} must be an array`);
  }
  const allowedLinks = [...(fm.forward_refs ?? []), ...(fm.justified_by ?? [])];
  if (!allowedLinks.every(x => typeof x === 'string')) throw new Error(`${source}: forward_refs/justified_by contains a non-string`);
  return {id, source, raw, sha256: sha(raw), fm, body, allowedLinks: allowedLinks as string[]};
});

const webCssPath = web + '/.next/dev/static/chunks/app_globals_0yg4wg8.css';
const designCssPath = web + '/app/library/library-design.css';
const katexCssPath = web + '/node_modules/katex/dist/katex.min.css';
for (const file of [webCssPath, designCssPath, katexCssPath]) if (!fs.existsSync(file)) throw new Error(`Required local preview stylesheet is missing: ${file}`);
const webCss = fs.readFileSync(webCssPath, 'utf8');
const designCss = fs.readFileSync(designCssPath, 'utf8');
const katexCss = fs.readFileSync(katexCssPath, 'utf8').replace(/url\(fonts\/([^)]*)\)/g, (_: string, font: string) => 'url(file://' + web + '/node_modules/katex/dist/fonts/' + font + ')');
const previewCss = webCss + '\n' + designCss + '\n' + katexCss + '\n' +
  'body{margin:0;background:#000;color:#ededed;font-family:Arial,sans-serif}' +
  'main{width:1104px;margin:28px auto;padding-bottom:28px}' +
  'h1{font-size:25px;font-weight:650;margin:16px 0 24px}' +
  '.audit-id{font-size:13px;color:#aaa;overflow-wrap:anywhere}' +
  'h4{margin-top:24px;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#aaa}';

const referenceRows = [...titleMap.values()].sort((a, b) => a.id.localeCompare(b.id));
const referenceMapText = JSON.stringify({version: 1, entries: referenceRows, diagnostics: mapDiagnostics}, null, 2) + '\n';
const referenceMapHash = sha(referenceMapText);

fs.mkdirSync(repairRoot, {recursive: true});
const realRepairRoot = fs.realpathSync(repairRoot);
fs.mkdirSync(path.dirname(out), {recursive: true});
const realParent = fs.realpathSync(path.dirname(out));
if (realParent !== realRepairRoot && !realParent.startsWith(realRepairRoot + path.sep)) {
  throw new Error('Output parent resolves outside the repair-preview directory; refusing to write');
}
if (fs.existsSync(out)) throw new Error(`Refusing to overwrite existing output directory: ${path.relative(root, out)}`);
fs.mkdirSync(out);
for (const dir of ['html', 'screenshots', 'snapshots']) fs.mkdirSync(path.join(out, dir));
fs.writeFileSync(path.join(out, 'preview.css'), previewCss);
fs.writeFileSync(path.join(out, 'reference-title-map.json'), referenceMapText);

process.env.MATH_LIBRARY_DIR = root;
process.chdir(web);
const {ItemBody} = await import(web + '/components/library/ItemBody.tsx');
const {MathMarkdown} = await import(web + '/components/library/MathMarkdown.tsx');
const {resolveWikilinks} = await import(web + '/lib/math-library.ts');
const React = requireFromWeb('react');
const {renderToPipeableStream} = requireFromWeb('react-dom/server');

const renderAsync = (element: unknown) => new Promise<string>((resolve, reject) => {
  const chunks: Buffer[] = [];
  const sink = new PassThrough();
  sink.on('data', (chunk: Buffer) => chunks.push(chunk));
  sink.on('error', reject);
  sink.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
  const stream = renderToPipeableStream(element, {
    onAllReady() { stream.pipe(sink); },
    onError(error: unknown) { reject(error); },
  });
});

const rows: Array<Record<string, unknown>> = [];
for (const item of scoped) {
  const snapshot = 'snapshots/' + item.id + '.md';
  fs.writeFileSync(path.join(out, snapshot), item.raw);
  const body = resolveWikilinks(item.body, titleMap as any, item.allowedLinks);
  const rendered = await renderAsync(React.createElement(React.Fragment, null,
    React.createElement('div', {className: 'audit-id'}, item.id),
    React.createElement('h1', null, React.createElement(MathMarkdown, null, item.fm.title)),
    React.createElement(ItemBody, {body}),
  ));
  const html = '<!doctype html><html class="dark library-mirror"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" href="../preview.css"></head><body><main>' + rendered + '</main></body></html>';
  const htmlRel = 'html/' + item.id + '.html';
  fs.writeFileSync(path.join(out, htmlRel), html);
  rows.push({id: item.id, status: item.fm.status ?? 'draft', source: item.source, source_sha256: item.sha256,
    snapshot, html: htmlRel, html_sha256: sha(html), reference_map_sha256: referenceMapHash});
}

const playwright = requireFromWeb('/home/lazyinspirit/.npm/_npx/e41f203b7505f1fb/node_modules/playwright');
const sharp = requireFromWeb('sharp');
const browser = await playwright.chromium.launch({headless: true, args: ['--allow-file-access-from-files', '--disable-background-networking', '--disable-default-apps']});
const captures: Record<string, unknown>[] = [];
try {
  const context = await browser.newContext({viewport: {width: 1200, height: 1400}, deviceScaleFactor: 1});
  await context.route('**/*', (route: any) => {
    const url = route.request().url();
    if (url.startsWith('file://') || url.startsWith('data:') || url.startsWith('about:')) return route.continue();
    return route.abort();
  });
  const page = await context.newPage();
  for (const item of scoped) {
    const htmlPath = path.join(out, 'html', item.id + '.html');
    await page.goto('file://' + htmlPath, {waitUntil: 'load'});
    await page.evaluate(async () => {
      document.querySelectorAll('details').forEach((el: any) => { el.open = true; });
      await document.fonts.ready;
    });
    const fullPage = await page.screenshot({fullPage: true});
    const meta = await sharp(fullPage).metadata();
    if (meta.width !== 1200 || !meta.height) throw new Error(`${item.id}: expected 1200px full-page capture, got ${meta.width}x${meta.height}`);
    const tileRows: Array<Record<string, unknown>> = [];
    for (let y = 0, n = 1; y < meta.height!; y += 1300, n++) {
      const height = Math.min(1400, meta.height! - y);
      const rel = 'screenshots/' + item.id + '--' + String(n).padStart(2, '0') + '.png';
      const pngPath = path.join(out, rel);
      await sharp(fullPage).extract({left: 0, top: y, width: 1200, height})
        .png({compressionLevel: 9, adaptiveFiltering: true, palette: false}).toFile(pngPath);
      tileRows.push({path: rel, y, width: 1200, height,
        sha256: sha(fs.readFileSync(pngPath)), encoding: 'lossless PNG, compressionLevel 9'});
      if (y + height >= meta.height!) break;
    }
    const receipt = {
      capture_revision: 2, id: item.id, height: meta.height, viewport: {width: 1200, height: 1400},
      tile_step: 1300, overlap: 100, screenshots: tileRows,
      katex_errors: await page.locator('.katex-error').evaluateAll((es: any[]) => es.map(e => ({text: e.textContent, title: e.title}))),
      katex_count: await page.locator('.katex').count(), tikz_count: await page.locator('figure.tikz').count(),
      diagram_failures: await page.locator('pre').evaluateAll((es: any[]) => es.filter(e => e.textContent.startsWith('diagram failed to render:')).map(e => e.textContent)),
      captured_at: new Date().toISOString(),
    };
    const receiptRel = 'screenshots/' + item.id + '.json';
    fs.writeFileSync(path.join(out, receiptRel), JSON.stringify(receipt, null, 2) + '\n');
    captures.push({id: item.id, receipt: receiptRel, receipt_sha256: sha(fs.readFileSync(path.join(out, receiptRel))), tile_count: tileRows.length});
  }
  await context.close();
} finally {
  await browser.close();
}

const sourcePaths = [
  'components/library/ItemBody.tsx', 'components/library/MathMarkdown.tsx', 'components/library/TikzDiagram.tsx',
  'lib/math-library.ts', 'lib/tikz.ts',
].map(rel => ({path: rel, sha256: sha(fs.readFileSync(path.join(web, rel)))}));
const manifest = {
  version: 1,
  purpose: 'Current-state local visual preview for owner-reviewed repair batches; this utility does not edit or adjudicate items.',
  created_at: new Date().toISOString(),
  item_ids: ids,
  scope: 'Current title and complete ItemBody only, including resolved internal titles, proof/facts/remarks/scratch and SSR TikZ. Not the production HTTP route, navigation/dependency widgets, or metadata Sources footer.',
  output_directory: path.relative(root, out),
  items: rows,
  captures,
  reference_title_map: {path: 'reference-title-map.json', sha256: referenceMapHash, entry_count: referenceRows.length,
    parse_diagnostic_count: mapDiagnostics.length, parseable_sources_only: true},
  css: {path: 'preview.css', sha256: sha(previewCss), layout_width: 1104, viewport_width: 1200, viewport_height: 1400,
    source_files: [
      {path: path.relative(web, webCssPath), sha256: sha(webCss)},
      {path: path.relative(web, designCssPath), sha256: sha(designCss)},
      {path: path.relative(web, katexCssPath), sha256: sha(katexCss)},
    ]},
  renderer_sources: sourcePaths,
  capture: {revision: 2, tile_width: 1200, tile_height: 1400, vertical_step: 1300, overlap: 100,
    device_scale_factor: 1, png_encoding: 'lossless PNG with compressionLevel 9'},
  limitations: [
    'Reference titles are built from parseable current item frontmatter; malformed or unreadable unrelated items are listed in reference-title-map.json diagnostics and omitted.',
    'This is a local ItemBody preview, not full native library-loader or production-route coverage.',
    'Horizontally scrollable diagrams retain browser scroll behavior; inspectors should check clipped diagram content when relevant.',
    'External network requests are blocked by the local Playwright route.',
  ],
};
fs.writeFileSync(path.join(out, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log(JSON.stringify({output_directory: path.relative(root, out), items: ids.length,
  tiles: captures.reduce((sum, c) => sum + Number(c.tile_count), 0), reference_map_diagnostics: mapDiagnostics.length}, null, 2));
