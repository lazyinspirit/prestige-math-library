// Original-source drift is scoped to actual run consequences. Local pinned
// snapshots are verified independently and remain immutable across the corpus.
import { existsSync, readFileSync } from 'node:fs';
import { join, basename } from 'node:path';
import { loadPhysicsRepository, readItem } from './physics-content.mjs';
import { readRunManifestPages } from './run-manifest-pages.mjs';

const logicalEdges = ['deps', 'justified_by'];
const referenceEdges = ['forward_refs', 'external_refs'];
const edges = [...logicalEdges, ...referenceEdges];
const lists = (item, field) => {
  if (item[field] === undefined) return [];
  if (!Array.isArray(item[field]) || item[field].some(id => typeof id !== 'string' || !id.trim()))
    throw Error(`invalid prerequisite ${field}: ${item.id}`);
  return item[field];
};
function index(items) {
  const ids = new Map(), aliases = new Map();
  for (const item of items) {
    const add = (map, token) => { if (!map.has(token)) map.set(token, []); map.get(token).push(item); };
    add(ids, item.id);
    for (const alias of Array.isArray(item.aliases) ? item.aliases : []) add(aliases, alias);
  }
  return token => ids.get(token) ?? aliases.get(token) ?? [];
}
function unique(lookup, token, label) {
  const rows = lookup(token);
  if (rows.length !== 1) throw Error(`${label} prerequisite identity ${token} is ${rows.length ? 'ambiguous' : 'unknown'}`);
  return rows[0];
}

/** Only native --run checks opt in. An empty item inventory is legitimate
 * before scaffolding, but the page manifests themselves must stay nonempty. */
export function frontierMathematicsImportScope(root, run, { planning = false, receipt, originals }) {
  const current = readRunManifestPages(root, run, { allowEmptyItems: planning });
  const pages = new Set(current.map(page => page.id));
  const spec = JSON.parse(readFileSync(join(root, 'research/plan-spec.json'), 'utf8'));
  if (!Array.isArray(spec.pages)) throw Error('invalid physics plan pages');
  for (const page of current) if (spec.pages.filter(row => row.id === page.id).length !== 1)
    throw Error(`current page ${page.id} must occur exactly once in the plan`);
  const overlay = new Map(current.map(page => [page.id, page]));
  const plan = { ...spec, pages: spec.pages.map(page => overlay.get(page.id) ?? page) };
  const repo = loadPhysicsRepository(root, plan, pages);
  // Retain every actual logical/discharge edge as well as current scaffold
  // declarations; a planned empty list cannot conceal an authored supplier.
  for (const page of current) for (const entry of page.items) {
    const path = join(root, 'items', `${entry.id}.md`);
    if (!existsSync(path)) { if (!planning) throw Error(`missing current item ${entry.id}`); continue; }
    const actual = readItem(path), loaded = repo.items.find(item => item.id === entry.id);
    if (actual.id !== entry.id || !loaded) throw Error(`invalid current authored identity ${entry.id}`);
    for (const field of edges) loaded[field] = [...new Set([...lists(actual, field), ...lists(loaded, field)])];
    loaded.aliases = [...new Set([...lists(actual, 'aliases'), ...lists(loaded, 'aliases')])];
  }
  const local = index(repo.items), source = index(originals.items);
  const pins = new Map(receipt.files.map(file => [file.path, file]));
  const imported = new Map(receipt.files.filter(file => file.path.startsWith('items/'))
    .map(file => [readItem(join(root, file.path)).id, file.path]));
  const owned = new Set(current.flatMap(page => page.items.map(item => item.id)).filter(id => !imported.has(id)));
  const directReferencedImports = new Set();
  const relevant = new Set(), context = new Set(), references = new Map();
  const queue = [];
  for (const page of current) for (const item of page.items) {
    if (!planning && !existsSync(join(root, 'items', `${item.id}.md`))) throw Error(`missing current item ${item.id}`);
    queue.push(unique(local, item.id, 'current manifest'));
  }
  for (let cursor = 0; cursor < queue.length; cursor++) {
    const item = queue[cursor];
    if (context.has(item.id)) continue;
    context.add(item.id);
    if (item.frontmatterError) throw Error(`invalid prerequisite carrier ${item.id}: ${item.frontmatterError}`);
    if (imported.has(item.id)) relevant.add(imported.get(item.id));
    for (const field of logicalEdges) for (const token of lists(item, field)) {
      const supplier = unique(local, token, item.id);
      references.set(token, supplier.id);
      queue.push(supplier);
    }
    // Imported suppliers may mention unpublished original context. Those
    // nonlogical pointers neither become prerequisites nor require imports.
    // Owned references still have direct identity/source obligations, but do
    // not grant authority to traverse the referenced item's prerequisite cone.
    if (owned.has(item.id)) for (const field of referenceEdges) for (const token of lists(item, field)) {
      const target = unique(local, token, item.id);
      if (target.frontmatterError) throw Error(`invalid referenced carrier ${target.id}: ${target.frontmatterError}`);
      references.set(token, target.id);
      if (imported.has(target.id)) {
        directReferencedImports.add(target.id);
        relevant.add(imported.get(target.id));
      }
    }
  }
  // Every relevant canonical ID and every alias actually used to reach it must
  // resolve identically in current originals. New unrelated originals cannot
  // steal a used alias or create ambiguity in a required supplier identity.
  for (const id of new Set([...context, ...directReferencedImports])) if (imported.has(id)) references.set(id, id);
  for (const [token, expected] of references) if (imported.has(expected)) {
    const original = unique(source, token, 'mathematics source');
    if (original.id !== expected) throw Error(`mathematics source identity changed: ${token}; expected ${expected}, got ${original.id}`);
  }
  const relevantItemIds = new Set([...context, ...directReferencedImports].filter(id => imported.has(id)));
  const localPages = receipt.files.filter(file => file.path.startsWith('library/') && !basename(file.path).startsWith('_'))
    .map(file => ({ ...readItem(join(root, file.path)), path: file.path }));
  const sourcePages = originals.pages;
  const homes = (rows, id) => rows.filter(page => [...(page.items ?? []), ...(page.examples ?? [])].includes(id))
    .map(page => page.path).sort();
  for (const id of relevantItemIds) {
    const before = homes(localPages, id), after = homes(sourcePages, id);
    if (JSON.stringify(before) !== JSON.stringify(after)) throw Error(`mathematics source home changed: ${id}`);
    for (const path of before) relevant.add(path);
  }
  // Page prerequisites are graph context, not permission to pull unrelated
  // sibling items into the mathematical supplier closure.
  const pageIndex = new Map([...localPages.map(page => [page.page ?? page.id, page]),
    ...plan.pages.map(page => [page.id, page])]);
  const pageQueue = [...current, ...localPages.filter(page => relevant.has(page.path))];
  const visitedPages = new Set();
  for (let cursor = 0; cursor < pageQueue.length; cursor++) {
    const page = pageQueue[cursor], id = page.page ?? page.id;
    if (visitedPages.has(id)) continue;
    visitedPages.add(id);
    const pinned = localPages.filter(row => (row.page ?? row.id) === id);
    if (pinned.length > 1 || plan.pages.filter(row => row.id === id).length > 1) throw Error(`ambiguous prerequisite page ${id}`);
    if (pinned.length) {
      const sourcePage = sourcePages.filter(row => (row.page ?? row.id) === id);
      if (sourcePage.length !== 1 || sourcePage[0].path !== pinned[0].path)
        throw Error(`mathematics source page identity changed: ${id}`);
      relevant.add(pinned[0].path);
    }
    const declarations = [page, pageIndex.get(id), ...pinned].filter(Boolean);
    for (const field of ['requires', 'prerequisites']) for (const prerequisite of new Set(declarations.flatMap(row => lists(row, field)))) {
      const supplier = pageIndex.get(prerequisite);
      if (!supplier) throw Error(`unknown prerequisite page ${prerequisite}`);
      pageQueue.push(supplier);
    }
  }
  for (const path of [...relevant]) if (path.startsWith('library/')) {
    const category = path.split('/')[1];
    const categoryPath = `library/${category}/_category.md`;
    if (pins.has(categoryPath)) relevant.add(categoryPath);
  }
  // Policy changes matter only when they change permission for an actual
  // reached dependency; unrelated grandfathered edges are not run context.
  const policyPath = 'research/b-leaf-legacy-allowlist.json';
  if (pins.has(policyPath)) {
    const permissions = path => {
      if (!existsSync(path)) return [];
      const policy = JSON.parse(readFileSync(path, 'utf8'));
      if (!Array.isArray(policy.edges)) throw Error('invalid original B-leaf permission policy');
      return policy.edges.filter(edge => {
        if (!context.has(edge.source)) return false;
        const item = unique(local, edge.source, 'B-leaf permission');
        return lists(item, 'deps').some(token => unique(local, token, item.id).id === edge.target);
      }).map(({ source, target, reason }) => ({ source, target, reason }))
        .sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)));
    };
    const before = permissions(join(root, policyPath)), after = permissions(join(receipt.source_root, policyPath));
    if (JSON.stringify(before) !== JSON.stringify(after)) relevant.add(policyPath);
  }
  return { paths: relevant, items: context, importedItems: relevantItemIds, pages: visitedPages };
}
