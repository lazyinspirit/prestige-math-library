// Gate subjects come only from the current run's manifests. Suppliers remain
// available to each validator through its ordinary complete corpus loader.
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

const slug = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const itemId = /^[a-z]+-[a-z0-9]+(?:-[a-z0-9]+)*$/;
const hash = text => createHash('sha256').update(text).digest('hex');

export function frontierGateScope(ctx) {
  if (!/^[a-zA-Z0-9_-]+$/.test(ctx.run ?? '')) throw Error('Invalid frontier run');
  const dir = join(ctx.repo, 'research');
  const manifests = readdirSync(dir).filter(name =>
    new RegExp(`^${ctx.run}-batch-\\d+\\.pages\\.json$`).test(name)).sort();
  if (!manifests.length) throw Error(`No current run manifests for ${ctx.run}`);
  const items = new Set(), pages = new Set(), pageFiles = [];
  for (const name of manifests) {
    const rows = JSON.parse(readFileSync(join(dir, name), 'utf8'));
    if (!Array.isArray(rows) || !rows.length) throw Error(`Empty or invalid manifest ${name}`);
    for (const page of rows) {
      if (!slug.test(page?.id ?? '') || !slug.test(page?.category ?? '') || pages.has(page.id))
        throw Error(`Invalid or duplicate frontier page in ${name}`);
      if (!Array.isArray(page.items) || !page.items.length) throw Error(`Empty frontier page ${page.id}`);
      pages.add(page.id);
      const pageFile = `library/${page.category}/${page.id}.md`;
      pageFiles.push(pageFile);
      for (const item of page.items) {
        if (!itemId.test(item?.id ?? '') || items.has(item.id)) throw Error(`Invalid or duplicate frontier item in ${name}`);
        if (!existsSync(join(ctx.repo, 'items', `${item.id}.md`))) throw Error(`Missing frontier item ${item.id}`);
        items.add(item.id);
      }
    }
  }
  // Immutable selector paths avoid changing an already assembled gate battery
  // when another status read observes newer manifests. No run state is written.
  const store = join(tmpdir(), 'prestige-frontier-gate-scopes', hash(ctx.repo));
  mkdirSync(store, { recursive: true });
  const save = (kind, ids) => {
    const text = JSON.stringify([...ids].sort());
    const path = join(store, `${kind}-${hash(text)}.json`);
    if (!existsSync(path) || readFileSync(path, 'utf8') !== text) writeFileSync(path, text);
    return path;
  };
  return { itemFiles: [...items].sort().map(id => `items/${id}.md`), pageFiles: pageFiles.sort(),
    itemsFile: save('items', items), pagesFile: save('pages', pages) };
}

/** Resolve only at gate execution; future stage descriptors need no artifacts.
 * Invalid selections become an ordinary failed gate, never a controller crash. */
export function scopedGateArgv(ctx, argv, mode) {
  return () => {
    if (ctx.doctor) return [...argv, '<current-run-manifest-selection>'];
    try {
      if (!['items', 'pages', 'itemFiles', 'files'].includes(mode)) throw Error(`Unknown selection mode ${mode}`);
      const scope = frontierGateScope(ctx);
      const selection = mode === 'items' ? ['--items-file', scope.itemsFile]
        : mode === 'pages' ? ['--pages-file', scope.pagesFile]
        : mode === 'itemFiles' ? scope.itemFiles : [...scope.itemFiles, ...scope.pageFiles];
      return [...argv, ...selection];
    } catch (error) {
      return ['node', '-e', `console.error(${JSON.stringify(`frontier gate selection: ${error.message}`)});process.exit(1)`];
    }
  };
}
