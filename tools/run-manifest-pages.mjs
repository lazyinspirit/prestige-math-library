// Strict opt-in current-run overlay; no plan-wide or empty selection fallback.
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const slug = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const itemId = /^[a-z]+-[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/;
// Only page-plan validation opts into the pre-scaffold empty item lifecycle.
// Supplier/item evidence readers require populated inventories by default.
export function readRunManifestPages(root, run, { allowEmptyItems = false } = {}) {
  if (!/^[a-zA-Z0-9_-]+$/.test(run ?? '')) throw Error('Invalid --run identity');
  const files = readdirSync(join(root, 'research')).filter(file => new RegExp(`^${run}-batch-\\d+\\.pages\\.json$`).test(file)).sort();
  if (!files.length) throw Error(`No current manifests for run ${run}`);
  const pages = [], pageIds = new Set(), ids = new Set();
  for (const file of files) {
    const rows = JSON.parse(readFileSync(join(root, 'research', file), 'utf8'));
    if (!Array.isArray(rows) || !rows.length) throw Error(`Empty or invalid manifest ${file}`);
    for (const page of rows) {
      if (!slug.test(page?.id ?? '') || !slug.test(page?.category ?? '') || !['A', 'B'].includes(page.kind)
        || !Number.isFinite(page.order) || pageIds.has(page.id) || !Array.isArray(page.items) || (!allowEmptyItems && !page.items.length))
        throw Error(`Invalid or empty current page in ${file}`);
      pageIds.add(page.id);
      for (const item of page.items) {
        if (!itemId.test(item?.id ?? '') || ids.has(item.id) || !Array.isArray(item.deps)
          || item.deps.some(id => typeof id !== 'string' || !itemId.test(id)))
          throw Error(`Invalid or duplicate current manifest item in ${file}`);
        ids.add(item.id);
      }
      pages.push(page);
    }
  }
  return pages;
}
