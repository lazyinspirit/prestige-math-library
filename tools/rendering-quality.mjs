#!/usr/bin/env node
// Deterministic rendering diagnostics, never mathematical review or acceptance.
import { existsSync, lstatSync, readFileSync, readdirSync, mkdirSync, writeFileSync, renameSync, openSync, readSync, closeSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createHash, randomUUID } from 'node:crypto';
import { REPO } from './paths.mjs';
import { yaml as runtimeYAML } from './pathway-lib.mjs';

const hash = value => createHash('sha256').update(value).digest('hex');
const ownFile = fileURLToPath(import.meta.url);
export const renderingQualityPath = (root, run) => join(root, 'research', `${run}-rendering-quality.json`);
const regular = file => {
  if (!lstatSync(file).isFile() || lstatSync(file).isSymbolicLink()) throw Error(`Rendering input is not a regular file: ${file}`);
  return readFileSync(file, 'utf8');
};
const writeJSON = (file, data) => {
  const text = JSON.stringify(data, null, 2) + '\n';
  if (existsSync(file) && readFileSync(file, 'utf8') === text) return;
  mkdirSync(dirname(file), { recursive: true });
  const temp = file + '.' + randomUUID() + '.tmp';
  writeFileSync(temp, text); renameSync(temp, file);
};

// Read only the frontmatter prefix for identity/title/alias lookup. Unrelated
// proof bodies are neither loaded as validation subjects nor parsed/audited.
function referenceIndex(root, parser) {
  const canonical = new Map(), aliases = new Map();
  const add = (map, key, row) => map.set(key, [...map.get(key) ?? [], row]);
  for (const name of readdirSync(join(root, 'items')).filter(name => name.endsWith('.md')).sort()) {
    const file = join(root, 'items', name);
    if (!lstatSync(file).isFile() || lstatSync(file).isSymbolicLink()) continue;
    let fd, frontmatter;
    try {
      fd = openSync(file, 'r');
      const chunks = [];
      for (let size = 0; size < 1024 * 1024;) {
        const bytes = Buffer.alloc(4096), count = readSync(fd, bytes, 0, bytes.length, null);
        if (!count) break;
        chunks.push(bytes.subarray(0, count)); size += count;
        const source = Buffer.concat(chunks).toString('utf8');
        if (!source.startsWith('---\n') && !source.startsWith('---\r\n')) break;
        const match = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(source);
        if (match) { frontmatter = match[1]; break; }
      }
    } finally { if (fd !== undefined) closeSync(fd); }
    if (frontmatter === undefined) continue;
    let fm;
    try { fm = parser.parse(frontmatter); } catch { continue; }
    if (!fm || typeof fm !== 'object' || Array.isArray(fm)) continue;
    // These fallbacks and string-list semantics match the app snapshot loader.
    const row = { file, id: typeof fm.id === 'string' ? fm.id : name.slice(0, -3),
      title: typeof fm.title === 'string' ? fm.title : name,
      aliases: Array.isArray(fm.aliases) ? fm.aliases.filter(alias => typeof alias === 'string') : [] };
    add(canonical, row.id, row);
    for (const alias of new Set(row.aliases)) add(aliases, alias, row);
  }
  return requested => {
    // Canonical IDs win over aliases, as in indexedResolveItem. Ambiguous
    // ownership fails closed rather than depending on map insertion order.
    const candidates = canonical.get(requested) ?? aliases.get(requested) ?? [];
    if (candidates.length > 1) throw Error(`Ambiguous rendering reference ${requested}: ${candidates.map(row => row.file).join(', ')}`);
    return { requested, resolved: candidates[0] ?? null };
  };
}

// Resolve only current manifests and the titles actually requested by the
// renderer/parser. An unrelated item body never becomes a validation subject.
async function currentInputs(root, run, physics) {
  const prefix = physics ? './physics-support/' : './';
  const { readRunManifestPages } = await import(prefix + 'run-manifest-pages.mjs');
  const { yaml } = await import(prefix + 'pathway-lib.mjs');
  const { inspectRenderingSource, renderingSourceToolchainFingerprint, renderingSourceToolchainInputs } = await import('./render-source-lint.mjs');
  const pages = readRunManifestPages(root, run);
  const files = [...new Set(pages.flatMap(page => [
    ...page.items.map(item => `items/${item.id}.md`), `library/${page.category}/${page.id}.md`,
  ]))].sort();
  if (!files.length || !pages.length) throw Error('Rendering-quality selection is empty');
  const inputs = new Map([[ownFile, hash(readFileSync(ownFile))]]);
  const manifests = readdirSync(join(root, 'research')).filter(name => new RegExp(`^${run}-batch-\\d+\\.pages\\.json$`).test(name));
  for (const name of manifests) inputs.set(join(root, 'research', name), hash(regular(join(root, 'research', name))));
  let resolveReference;
  const references = new Map();
  const resolveTitle = requested => {
    resolveReference ??= referenceIndex(root, yaml());
    const row = resolveReference(requested);
    references.set(requested, row);
    if (!row.resolved) return undefined;
    const { file, title, id, aliases } = row.resolved;
    inputs.set(file + '#rendered-title', hash(title));
    inputs.set(file + '#rendered-identity', hash(JSON.stringify({ id, aliases })));
    return title;
  };
  const sources = files.map(file => {
    const source = regular(join(root, file));
    inputs.set(join(root, file), hash(source));
    return { file, source, parsed: inspectRenderingSource({ source, file, resolveTitle }) };
  });
  const hasDiagrams = sources.some(row => row.parsed.diagrams?.some(block => !block.proofSection));
  let diagramToolchain = null;
  if (hasDiagrams) {
    const { renderingDiagramInputs } = await import('./rendering-diagrams.mjs');
    diagramToolchain = await renderingDiagramInputs({});
    for (const row of diagramToolchain.inputs) inputs.set(row.path, row.sha256);
  }
  const sourceToolchain = renderingSourceToolchainFingerprint();
  for (const path of Object.keys(renderingSourceToolchainInputs())) inputs.set(path, hash(readFileSync(path)));
  const bindings = [...inputs].sort(([a], [b]) => a.localeCompare(b));
  const referenceContext = [...references.values()].sort((a, b) => a.requested.localeCompare(b.requested));
  return { files, pages: pages.map(page => page.id).sort(), sources, bindings,
    referenceContext,
    sourceToolchain, diagramRuntime: diagramToolchain, diagramToolchain: diagramToolchain?.toolchainSha256 ?? null,
    fingerprint: hash(JSON.stringify({ physics, bindings, referenceContext, sourceToolchain, runtime: process.versions,
      diagramToolchain: diagramToolchain?.toolchainSha256 ?? null })) };
}

function assertReceipt(receipt, current, run, physics) {
  if (receipt.version !== 1 || receipt.kind !== 'deterministic-rendering-quality' || receipt.run !== run
    || receipt.physics !== physics || receipt.mathematical_review !== false || receipt.fingerprint !== current.fingerprint
    || JSON.stringify(receipt.files) !== JSON.stringify(current.files) || !receipt.files.length
    || JSON.stringify(receipt.pages) !== JSON.stringify(current.pages)
    || JSON.stringify(receipt.referenceContext) !== JSON.stringify(current.referenceContext)
    || JSON.stringify(receipt.inputs) !== JSON.stringify(current.bindings)
    || receipt.results?.length !== current.files.length || receipt.results.some((row, i) => row.file !== current.files[i])
    || receipt.errors?.length || !Array.isArray(receipt.errors) || !Array.isArray(receipt.warnings))
    throw Error('Missing, failed or stale current rendering-quality preparation');
  return receipt;
}

export async function prepareRenderingQuality(root, run, { physics = false } = {}) {
  const current = await currentInputs(root, run, physics);
  const cacheDir = join(root, physics ? '.physics-autopilot' : '.autopilot', 'rendering-quality-cache');
  const cacheFile = join(cacheDir, current.fingerprint + '.json');
  if (existsSync(cacheFile)) {
    try { return assertReceipt(JSON.parse(regular(cacheFile)), current, run, physics); }
    catch { /* stale, corrupt or failed caches never supply a passing receipt */ }
  }
  const results = [];
  for (const row of current.sources) {
    const { errors, warnings } = row.parsed;
    let graphics = { errors: [], warnings: [], diagrams: [], compiled: 0, cached: 0 };
    if (row.parsed.diagrams?.length) {
      const { inspectRenderingDiagrams } = await import('./rendering-diagrams.mjs');
      graphics = await inspectRenderingDiagrams({ source: row.source, file: row.file, blocks: row.parsed.diagrams,
        cacheDir, runtime: current.diagramRuntime });
    }
    results.push({ file: row.file, errors: [...errors, ...graphics.errors], warnings: [...warnings, ...graphics.warnings],
      math: row.parsed.math.length, diagrams: graphics.diagrams, compiled: graphics.compiled, cached: graphics.cached });
  }
  // A relevant edit while compiling must never be hidden behind the old cache.
  const after = await currentInputs(root, run, physics);
  if (after.fingerprint !== current.fingerprint) throw Error('Rendering-quality source/context/toolchain changed during checks');
  const receipt = { version: 1, kind: 'deterministic-rendering-quality', run, physics, mathematical_review: false,
    fingerprint: current.fingerprint, files: current.files, pages: current.pages, inputs: current.bindings,
    referenceContext: current.referenceContext,
    node: process.version,
    sourceToolchain: current.sourceToolchain, diagramToolchain: current.diagramToolchain,
    results, errors: results.flatMap(row => row.errors), warnings: results.flatMap(row => row.warnings) };
  writeJSON(cacheFile, receipt);
  return receipt;
}

export async function verifyRenderingQuality(root, run, { physics = false } = {}) {
  const receipt = JSON.parse(regular(renderingQualityPath(root, run)));
  return assertReceipt(receipt, await currentInputs(root, run, physics), run, physics);
}

export function writeRenderingQuality(root, run, receipt) { writeJSON(renderingQualityPath(root, run), receipt); }

// The native prepared-source seal also tracks external renderer/toolchain files
// and the exact referenced titles. These inputs grant no commit ownership.
export function renderingQualityRuntimeInputs(root, run) {
  return renderingQualityRuntimeState(root, run).physicalPaths;
}

export function renderingQualityRuntimeState(root, run) {
  const file = renderingQualityPath(root, run);
  if (!existsSync(file)) return { tree: {}, physicalPaths: [] };
  const receipt = JSON.parse(regular(file));
  if (receipt.run !== run || receipt.kind !== 'deterministic-rendering-quality' || !Array.isArray(receipt.inputs)
    || !Array.isArray(receipt.referenceContext))
    throw Error('Invalid rendering-quality input inventory');
  const tree = {}, physicalPaths = new Set();
  for (const [path] of receipt.inputs) {
    if (path.includes('#rendered-')) continue;
    physicalPaths.add(path);
    try { tree[`@rendering-quality:${path}`] = hash(readFileSync(path)); }
    catch (error) {
      if (!['ENOENT', 'ENOTDIR'].includes(error.code)) throw error;
      tree[`@rendering-quality:${path}`] = 'missing';
    }
  }
  if (receipt.referenceContext.length) {
    const resolveReference = referenceIndex(root, runtimeYAML());
    for (const previous of receipt.referenceContext) {
      const current = resolveReference(previous.requested);
      tree[`@rendering-quality-reference:${encodeURIComponent(previous.requested)}`] = hash(JSON.stringify(current));
      if (previous.resolved?.file) physicalPaths.add(previous.resolved.file);
      if (current.resolved?.file) physicalPaths.add(current.resolved.file);
    }
    physicalPaths.add(join(root, 'items'));
  }
  return { tree, physicalPaths: [...physicalPaths].sort() };
}

export async function runRenderingQualityCLI({ root = REPO, physics = false } = {}) {
  const args = process.argv.slice(2), flags = new Set(['--run', '--verify', '--write', '--json']);
  let run;
  for (let i = 0; i < args.length; i++) {
    if (!flags.has(args[i])) throw Error(`Unknown rendering-quality argument: ${args[i]}`);
    if (args[i] === '--run') { if (run || !args[i + 1] || args[i + 1].startsWith('--')) throw Error('--run requires one identity'); run = args[++i]; }
  }
  if (!run || args.includes('--verify') === args.includes('--write'))
    throw Error('Usage: rendering-quality.mjs --run RUN (--write | --verify) [--json]');
  const receipt = args.includes('--verify') ? await verifyRenderingQuality(root, run, { physics }) : await prepareRenderingQuality(root, run, { physics });
  if (args.includes('--write')) writeRenderingQuality(root, run, receipt);
  if (args.includes('--json')) console.log(JSON.stringify(receipt));
  else {
    for (const row of [...receipt.errors, ...receipt.warnings]) console.log(`${receipt.errors.includes(row) ? 'ERROR' : 'WARNING'} ${row.file}:${row.line ?? 1} [${row.code}] ${row.message ?? row.msg}`);
    console.log(`rendering-quality: ${receipt.files.length} file(s), ${receipt.pages.length} page(s), ${receipt.errors.length} error(s), ${receipt.warnings.length} warning(s)`);
  }
  if (receipt.errors.length) process.exitCode = 1;
  return receipt;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try { await runRenderingQualityCLI(); } catch (error) { console.error(`rendering-quality: ${error.message}`); process.exitCode = 1; }
}
