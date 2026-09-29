import { readFile, readdir, stat } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { join, relative } from 'node:path';
import { createHash } from 'node:crypto';
import { downstreamCounts } from './dependency-counts.mjs';
import { REPO, yamlCandidates } from '../tools/paths.mjs';

const require = createRequire(import.meta.url);
let parse;
for (const candidate of yamlCandidates()) {
  try { ({ parse } = require(candidate)); break; } catch { /* Try the next installed parser. */ }
}
if (!parse) throw new Error('Install yaml or set PRESTIGE_APP_DIR to the app checkout.');
const list = value => Array.isArray(value) ? value.filter(x => typeof x === 'string') : [];

/** Snapshot exactly the published item census; never alter content or infer proof edges. */
export async function loadGraph(root = REPO, publishedIds = null, cache = null) {
  const items = [];
  const hashes = [], seen = new Set();
  const read = async path => {
    seen.add(path);
    const info = cache ? await stat(path, { bigint: true }) : null;
    const stamp = info ? `${info.size}:${info.mtimeNs}:${info.ctimeNs}` : null;
    let record = cache?.get(path);
    if (!record || record.stamp !== stamp) {
      const raw = await readFile(path, 'utf8');
      const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
      if (!match && record?.fm.status === 'published') throw new Error(`Incomplete published header: ${path}`);
      const parsed = match ? parse(match[1]) ?? {} : {};
      const fm = Object.fromEntries(['id', 'title', 'status', 'kind', 'deps', 'aliases', 'items', 'examples', 'landmark']
        .filter(key => key in parsed).map(key => [key, parsed[key]]));
      record = { stamp, fm, hash: createHash('sha256').update(raw).digest('hex') };
      cache?.set(path, record);
    }
    if (record.fm.status === 'published' || path.endsWith('_category.md')) {
      hashes.push(`${relative(root, path)}:${record.hash}`);
    }
    return record.fm;
  };
  const files = (await readdir(join(root, 'items'))).filter(f => f.endsWith('.md')).sort();
  // Bound filesystem concurrency while loading a large content tree.
  for (let start = 0; start < files.length; start += 128) {
    const batch = await Promise.all(files.slice(start, start + 128).map(async file => {
      const fm = await read(join(root, 'items', file));
      return { ...fm, id: fm.id ?? file.slice(0, -3) };
    }));
    items.push(...batch.filter(fm => fm.status === 'published' && (!publishedIds || publishedIds.has(fm.id))));
  }
  if (publishedIds) {
    const loaded = new Set(items.map(item => item.id));
    const missing = [...publishedIds].filter(id => !loaded.has(id));
    if (missing.length) throw new Error(`Live items missing from published local content: ${missing.join(', ')}`);
  }
  const byId = new Map(items.map((item, i) => [item.id, i]));
  const aliases = new Map(items.flatMap((item, i) => list(item.aliases).map(alias => [alias, i])));
  const resolve = id => byId.get(id) ?? aliases.get(id);
  const memberships = items.map(() => new Set());
  const categories = [];
  async function walk(directory, parts = []) {
    const entries = await readdir(directory, { withFileTypes: true });
    for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) { await walk(path, [...parts, entry.name]); continue; }
      if (!entry.name.endsWith('.md')) continue;
      if (entry.name === '_category.md' && parts.length === 1) {
        const fm = await read(path);
        categories.push({ id: parts[0], title: fm.title ?? parts[0] });
      }
      if (entry.name.startsWith('_')) continue;
      const page = await read(path);
      if (page.status !== 'published') continue;
      for (const id of [...list(page.items), ...list(page.examples)]) {
        const i = resolve(id);
        if (i !== undefined) memberships[i].add(parts[0] ?? 'unassigned');
      }
    }
  }
  await walk(join(root, 'library'));
  if (memberships.some(set => !set.size)) categories.push({ id: 'unassigned', title: 'Other published items' });
  const nodes = items.map((item, i) => ({
    id: item.id, title: item.title ?? item.id, kind: item.kind ?? 'remark', landmark: item.landmark === true,
    categories: memberships[i].size ? [...memberships[i]] : ['unassigned'],
  }));
  const edges = [];
  const unresolved = [];
  for (let i = 0; i < items.length; i++) {
    for (const id of new Set(list(items[i].deps))) {
      const target = resolve(id);
      if (target === undefined) unresolved.push({ item: items[i].id, dependency: id });
      else edges.push([i, target]); // consumer → prerequisite
    }
  }
  const counts = downstreamCounts(nodes.length, edges);
  const consumerCategories = nodes.map(() => new Set());
  for (const [consumer, supplier] of edges) {
    for (const category of nodes[consumer].categories) {
      if (!nodes[supplier].categories.includes(category)) consumerCategories[supplier].add(category);
    }
  }
  nodes.forEach((node, i) => {
    node.downstreamCount = counts[i];
    node.crossCategoryConsumers = consumerCategories[i].size;
  });
  const used = new Set(nodes.flatMap(n => n.categories));
  for (const id of used) {
    if (!categories.some(c => c.id === id)) categories.push({ id, title: id === 'pde' ? 'Partial Differential Equations' : id.split('-').map(word => word[0].toUpperCase() + word.slice(1)).join(' ') });
  }
  categories.sort((a, b) => a.id === 'foundations' ? -1 : b.id === 'foundations' ? 1 : a.title.localeCompare(b.title));
  if (cache) for (const path of cache.keys()) if (!seen.has(path)) cache.delete(path);
  return { nodes, edges, categories: categories.filter(c => used.has(c.id)), unresolved,
    contentVersion: createHash('sha256').update(hashes.sort().join('\n')).digest('hex') };
}
