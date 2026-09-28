import { readFile, readdir } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { join } from 'node:path';
import { REPO, yamlCandidates } from '../tools/paths.mjs';

const require = createRequire(import.meta.url);
let parse;
for (const candidate of yamlCandidates()) {
  try { ({ parse } = require(candidate)); break; } catch { /* Try the next installed parser. */ }
}
if (!parse) throw new Error('Install yaml or set PRESTIGE_APP_DIR to the app checkout.');
const list = value => Array.isArray(value) ? value.filter(x => typeof x === 'string') : [];
async function frontmatter(path) {
  const raw = await readFile(path, 'utf8');
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {}; // In-progress draft pages may not have a header yet.
  return parse(match[1]);
}

/** Snapshot exactly the published item census; never alter content or infer proof edges. */
export async function loadGraph(root = REPO, publishedIds = null) {
  const items = [];
  const files = (await readdir(join(root, 'items'))).filter(f => f.endsWith('.md')).sort();
  // Bound filesystem concurrency while loading a large content tree.
  for (let start = 0; start < files.length; start += 128) {
    const batch = await Promise.all(files.slice(start, start + 128).map(async file => {
      const fm = await frontmatter(join(root, 'items', file));
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
        const fm = await frontmatter(path);
        categories.push({ id: parts[0], title: fm.title ?? parts[0] });
      }
      if (entry.name.startsWith('_')) continue;
      const page = await frontmatter(path);
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
    id: item.id, title: item.title ?? item.id, kind: item.kind ?? 'remark',
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
  const used = new Set(nodes.flatMap(n => n.categories));
  for (const id of used) {
    if (!categories.some(c => c.id === id)) categories.push({ id, title: id === 'pde' ? 'Partial Differential Equations' : id.split('-').map(word => word[0].toUpperCase() + word.slice(1)).join(' ') });
  }
  categories.sort((a, b) => a.id === 'foundations' ? -1 : b.id === 'foundations' ? 1 : a.title.localeCompare(b.title));
  return { nodes, edges, categories: categories.filter(c => used.has(c.id)), unresolved };
}
