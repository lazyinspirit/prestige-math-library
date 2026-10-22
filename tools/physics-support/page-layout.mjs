#!/usr/bin/env node
// Run-scoped, deterministic page presentation; never inspect or edit item bodies.
import { readFileSync, readdirSync, realpathSync, lstatSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { yaml } from '../pathway-lib.mjs';
import { readStatementPolicy } from '../statement-first-policy.mjs';
export const PAGE_LAYOUT = 'compact-v1';
export function pageLayout(root, run, domain, {prepare = false} = {}) {
  if (domain !== 'physics' || readStatementPolicy(root, run, domain)?.page_layout !== PAGE_LAYOUT)
    throw Error('Page layout requires a freshly planned compact-v1 policy');
  const names = readdirSync(join(root, 'research')).filter(n => n.startsWith(`${run}-batch-`)
    && /^\d+\.pages\.json$/.test(n.slice(`${run}-batch-`.length)));
  if (!names.length) throw Error('No page-layout frontier manifests');
  // Receipt membership is a write boundary, regardless of page classification.
  const receipt = JSON.parse(readFileSync(join(root, 'research/math-imports.json'), 'utf8'));
  if (receipt?.version !== 1 || !Array.isArray(receipt.files)
    || receipt.files.some(row => typeof row?.path !== 'string')) throw Error('Invalid mathematics import receipt');
  const imported = new Set(receipt.files.map(row => row.path));
  const importedIds = new Set(receipt.files.filter(row => /^library\/[^/]+\/[^/]+\.md$/.test(row.path))
    .map(row => row.path.split('/').at(-1).slice(0, -3)));
  const pages = new Map();
  for (const name of names) {
    const rows = JSON.parse(readFileSync(join(root, 'research', name), 'utf8'));
    if (!Array.isArray(rows) || !rows.length) throw Error(`Empty/malformed manifest ${name}`);
    for (const p of rows) {
      if (![p.id, p.category].every(x => typeof x === 'string' && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(x) && !x.startsWith('_'))
        || !['mathematics', 'physics'].includes(p.library)
        || !Array.isArray(p.items) || !p.items.length || pages.has(p.id)) throw Error(`Invalid/duplicate authored page ${p.id}`);
      pages.set(p.id, p);
    }
  }
  const updates = [], errors = [];
  // Validate the entire selection before any mutation. Preserve frontmatter bytes,
  // inventories, status, sources and all other metadata. Category/pathway files
  // cannot enter this selection. Imported physics mathematics pages are read-only.
  for (const p of pages.values()) {
    const path = join(root, 'library', p.category, `${p.id}.md`);
    if (imported.has(`library/${p.category}/${p.id}.md`) || importedIds.has(p.id))
      throw Error(`Imported page is read-only: ${p.id}`);
    if (!lstatSync(path).isFile() || realpathSync(path) !== resolve(path)) throw Error(`Not a regular local page: ${path}`);
    const original = readFileSync(path, 'utf8');
    const m = original.match(/^(---\r?\n)([\s\S]*?)(\r?\n---(?:\r?\n|$))([\s\S]*)$/);
    if (!m) throw Error(`Missing page frontmatter: ${p.id}`);
    const doc = yaml().parseDocument(m[2], {uniqueKeys:true});
    if (doc.errors.length) throw Error(`Malformed page YAML: ${p.id}`);
    const data = doc.toJS();
    if (data?.page !== p.id || !['draft','published'].includes(data.status)
      || data.library !== p.library) throw Error(`Invalid authored page identity/domain/status: ${p.id}`);
    if (!Array.isArray(data.items) || !Array.isArray(data.examples)
      || !data.items.length && !data.examples.length) throw Error(`Empty/invalid page inventory: ${p.id}`);
    if (data.page_layout !== undefined && data.page_layout !== PAGE_LAYOUT) throw Error(`Conflicting layout: ${p.id}`);
    if (m[4].trim()) {
      if (prepare) throw Error(`Page summaries must not be authored: ${p.id}`);
      errors.push(`${p.id}: page body must be empty; do not generate a summary`);
    }
    if (data.page_layout === PAGE_LAYOUT) continue;
    if (!prepare) { errors.push(`${p.id}: page body must be empty and page_layout must be ${PAGE_LAYOUT}`); continue; }
    const eol = m[1].includes('\r\n') ? '\r\n' : '\n';
    const fm = m[2] + (data.page_layout === PAGE_LAYOUT ? '' : `${eol}page_layout: ${PAGE_LAYOUT}`);
    updates.push({path, original, text:m[1]+fm+eol+'---'+eol});
  }
  for (const row of updates) {
    if (!lstatSync(row.path).isFile() || realpathSync(row.path) !== resolve(row.path)
      || readFileSync(row.path, 'utf8') !== row.original) throw Error(`Concurrent page write: ${row.path}`);
    writeFileSync(row.path, row.text);
  }
  return {pages:pages.size, changed:updates.length, errors};
}
if (process.argv[1] && realpathSync(process.argv[1]) === realpathSync(fileURLToPath(import.meta.url))) {
  const args=process.argv.slice(2), get=key => args[args.indexOf(key)+1];
  if (!['prepare','check'].includes(args[0])) throw Error('Use page-layout.mjs prepare|check --run RUN --domain physics');
  const result=pageLayout(process.cwd(),get('--run'),get('--domain'),{prepare:args[0]==='prepare'});
  for(const error of result.errors) console.error(`ERROR page-layout: ${error}`);
  console.log(`page-layout: ${result.pages} page(s) checked; ${result.changed} changed; ${result.errors.length} defect(s)`);
  process.exitCode=result.errors.length?1:0;
}
