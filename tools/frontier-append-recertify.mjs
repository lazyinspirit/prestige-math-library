// Metadata-only recertification immediately before each native append battery.
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';
import { createHash, randomUUID } from 'node:crypto';
import { loadStep3, itemHash, itemInputPaths } from './step3-decisions.mjs';
import { dependencyLevels } from './item-dependency-levels.mjs';

export function recertifyAppendFrontier(root, run, entry, options = {}) {
  if (entry.run !== run || !entry.newPages?.length) throw Error('Nonempty append scope required');
  const digest = bytes => createHash('sha256').update(bytes).digest('hex');
  const guards = new Map();
  const guard = path => {
    if (!guards.has(path)) guards.set(path, existsSync(path) ? digest(readFileSync(path)) : null);
  };
  guard(join(root, 'research', 'plan-spec.json'));
  for (const name of readdirSync(join(root, 'research'))) {
    if (name.startsWith(`${run}-batch-`) && /\.(pages|coverage)\.json$/.test(name)) guard(join(root, 'research', name));
  }
  const snapshot = loadStep3(root, run);
  const plannedPages = new Set();
  const planPages = JSON.parse(readFileSync(join(root, "research", "plan-spec.json"), "utf8")).pages;
  const emptyPriorPages = [];
  const selected = options.appendedOnly ? snapshot.pages.filter(page => entry.newPages.includes(page.id)) : snapshot.pages;
  const pages = selected.map(page => {
    if (page.items?.length) return page;
    if (!entry.newPages.includes(page.id)) {
      const declared = planPages.find(row => row.id === page.id);
      // A genuinely empty original plan is an outstanding authoring obligation,
      // not lost metadata. Preserve it without certifying any item or readiness.
      if (Array.isArray(declared?.items) && declared.items.length === 0) {
        emptyPriorPages.push(page.id);
        return page;
      }
      throw Error(`Empty prior frontier inventory: ${page.id}`);
    }
    const planned = [...snapshot.planned.values()].filter(row => row.page.id === page.id);
    if (!planned.length) throw Error(`Missing declared append inventory: ${page.id}`);
    plannedPages.add(page.id);
    const replacement = { ...page, items: planned.map(row => row.item) };
    for (const item of replacement.items) {
      if (snapshot.items.has(item.id)) throw Error(`Duplicate append item: ${item.id}`);
      snapshot.items.set(item.id, { item, page: replacement });
    }
    return replacement;
  });
  if (entry.newPages.some(id => !pages.some(page => page.id === id))) throw Error('Append page absent from manifests');
  const graphPages = options.appendedOnly ? snapshot.pages.map(page => pages.find(selected => selected.id === page.id) ?? page).filter(page => page.items?.length) : pages.filter(page => !emptyPriorPages.includes(page.id));
  const graph = dependencyLevels(graphPages, { validateLabels: false });
  if (graph.errors.length) throw Error(graph.errors.join('\n'));
  const ordered = [...graph.items].sort(([a], [b]) => graph.levels.get(a) - graph.levels.get(b) || a.localeCompare(b));
  const rows = [];
  for (const [id, { item, page }] of ordered) {
    if (options.appendedOnly && !entry.newPages.includes(page.id)) continue;
    if (!item.kind || !item.title?.trim() || !Array.isArray(item.deps))
      throw Error(`Malformed frontier metadata: ${id}`);
    const canonical = join(root, 'items', `${id}.md`);
    if (!item.statement?.trim() && !existsSync(canonical)) throw Error(`Statement carrier missing: ${id}`);
    if (!item.strategy?.trim() && !existsSync(canonical)) {
      const notes = join(root, 'research', `${run}-batch-${page.batch}.notes.md`);
      if (!existsSync(notes) || !readFileSync(notes, 'utf8').trim()) throw Error(`Strategy carrier missing: ${id}`);
      guard(notes);
    }
    const level = graph.levels.get(id);
    if ((!plannedPages.has(page.id) || item.dependency_level !== undefined) && item.dependency_level !== level)
      throw Error(`Incorrect dependency level: ${id}`);
    const sha256 = itemHash(snapshot, id);
    guard(join(root, 'items', `${id}.md`));
    for (const path of itemInputPaths(snapshot, id)) guard(path);
    rows.push({ id, page: page.id, dependency_level: level, sha256,
      inventory: plannedPages.has(page.id) ? 'declared-pre-scaffold' : 'current-scaffold' });
  }
  for (const [id, node] of snapshot.cache) {
    guard(join(root, 'items', `${id}.md`));
    for (const dep of node.deps) {
      if (!snapshot.items.has(dep) && !snapshot.planned.has(dep) && !existsSync(join(root, 'items', `${dep}.md`)))
        throw Error(`Missing prerequisite context: ${dep}`);
    }
  }
  const fresh = loadStep3(root, run);
  for (const page of pages) if (plannedPages.has(page.id)) {
    for (const item of page.items) fresh.items.set(item.id, { item: fresh.planned.get(item.id).item, page });
  }
  for (const row of rows) if (itemHash(fresh, row.id) !== row.sha256)
    throw Error(`Input changed during recertification: ${row.id}`);
  for (const [path, expected] of guards) {
    const current = existsSync(path) ? digest(readFileSync(path)) : null;
    if (current !== expected) throw Error(`Input changed during recertification: ${relative(root, path)}`);
  }
  const report = { version: 1, run, generation: entry.number, at: new Date().toISOString(),
    mode: 'dependency-ordered formatting/metadata/hash-only', scope: options.appendedOnly ? 'appended-pages-with-prerequisite-context' : 'entire-frontier', pages: pages.length,
    subjects: rows.length, empty_prior_pages: emptyPriorPages, rows, guards: [...guards].map(([path, sha256]) => ({ path: relative(root, path), sha256 })),
    mathematical_review: false, readiness_or_hold_changes: false, main_gate_permission: false };
  const path = join(root, 'research', `${run}-append-${entry.number}-metadata-recert-${randomUUID()}.json`);
  writeFileSync(path, JSON.stringify(report, null, 2) + '\n', { flag: 'wx' });
  return { ...report, path };
}
