#!/usr/bin/env node
// Step-1 scaffold labels and Step-3 author order. Out-of-run dependencies do
// not raise an in-run level; other gates check whether they are available.
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

export function runPages(root, run) {
  if (!/^[a-zA-Z0-9_-]+$/.test(run ?? '')) throw Error('Invalid run');
  return readdirSync(join(root, 'research'))
    .filter(name => new RegExp(`^${run}-batch-\\d+\\.pages\\.json$`).test(name))
    .sort((a, b) => Number(a.match(/-batch-(\d+)/)[1]) - Number(b.match(/-batch-(\d+)/)[1]))
    .flatMap(name => JSON.parse(readFileSync(join(root, 'research', name), 'utf8'))
      .map(page => ({ ...page, batch: name.match(/-batch-(\d+)/)[1] })));
}

export function dependencyLevels(pages, { validateLabels = true } = {}) {
  const items = new Map(), errors = [], levels = new Map(), visiting = new Set();
  for (const page of pages) {
    if (!Array.isArray(page.items) || !page.items.length)
      errors.push(`${page.id}: empty scaffold inventory`);
    for (const item of Array.isArray(page.items) ? page.items : []) {
      if (!item?.id || typeof item.id !== 'string') {
        errors.push(`${page.id}: item has no ID`);
        continue;
      }
      if (items.has(item.id)) errors.push(`${item.id}: appears on more than one page`);
      else items.set(item.id, { item, page });
    }
  }
  const visit = (id, path = []) => {
    if (levels.has(id)) return levels.get(id);
    if (visiting.has(id)) {
      errors.push(`dependency cycle: ${[...path, id].join(' -> ')}`);
      return 0;
    }
    const item = items.get(id)?.item;
    if (!item) return 0;
    if (!Array.isArray(item.deps) || item.deps.some(dep => typeof dep !== 'string' || !dep)) {
      errors.push(`${id}: deps must be an array of item IDs`);
      return 0;
    }
    visiting.add(id);
    let level = 0;
    for (const dep of item.deps) if (items.has(dep)) level = Math.max(level, visit(dep, [...path, id]) + 1);
    visiting.delete(id);
    levels.set(id, level);
    return level;
  };
  for (const id of items.keys()) visit(id);
  for (const [id, { item }] of items) {
    if (!validateLabels) continue;
    if (!Number.isSafeInteger(item.dependency_level) || item.dependency_level < 0)
      errors.push(`${id}: dependency_level must be a nonnegative integer`);
    else if (item.dependency_level !== levels.get(id))
      errors.push(`${id}: dependency_level ${item.dependency_level} differs from computed ${levels.get(id)}`);
  }
  return { items, levels, errors };
}

export function orderedItems(pages, options) {
  const { items, levels, errors } = dependencyLevels(pages, options);
  if (errors.length) throw Error(errors.join('\n'));
  return [...items.entries()].map(([id, { item, page }]) => ({
    id, level: levels.get(id), batch: String(page.batch), page: page.id, order: Number(page.order), item,
  })).sort((a, b) => a.level - b.level || a.order - b.order || a.id.localeCompare(b.id));
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    const [command, flag, run] = process.argv.slice(2);
    if (command !== 'check' || flag !== '--run' || !run) throw Error('Usage: item-dependency-levels.mjs check --run RUN');
    const pages = runPages(process.cwd(), run);
    if (!pages.length) throw Error(`No manifests for ${run}`);
    const { items, levels, errors } = dependencyLevels(pages);
    if (errors.length) {
      for (const error of errors) console.error(`ERROR dependency-level: ${error}`);
      process.exitCode = 1;
    } else console.log(`item-dependency-levels: ${items.size} item(s) checked across ${pages.length} page(s); maximum level ${Math.max(0, ...levels.values())}`);
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}
