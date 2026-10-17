// Published prerequisite pages are context carriers, never item repair claims.
import { existsSync, readFileSync, readdirSync, lstatSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { split, yaml } from './pathway-lib.mjs';
const idPattern = /^[a-z][a-z0-9-]*$/;
const pathPattern = /^library\/[a-z0-9-]+\/[a-z][a-z0-9-]*\.md$/;
const sha = bytes => createHash('sha256').update(bytes).digest('hex');

export function publishedPageDependencies(root, findings, publishedItems, runPages = []) {
  const requested = new Set((Array.isArray(findings) ? findings : [])
    .filter(row => row?.subject_type === 'published-dependency' && idPattern.test(row.id ?? '')
      && !runPages.includes(row.id))
    .map(row => row.id));
  const matches = new Map(), result = new Map(), library = join(root, 'library');
  if (!requested.size || !existsSync(library)) return result;
  for (const category of readdirSync(library, { withFileTypes: true })) {
    if (!category.isDirectory() || !idPattern.test(category.name)) continue;
    for (const file of readdirSync(join(library, category.name), { withFileTypes: true })) {
      const id = file.name.replace(/\.md$/, '');
      if (!requested.has(id) || file.name !== `${id}.md`) continue;
      if (!matches.has(id)) matches.set(id, []);
      matches.get(id).push({ path: `library/${category.name}/${file.name}`, regular: file.isFile() });
    }
  }
  for (const [id, candidates] of matches) {
    if (existsSync(join(root, 'items', `${id}.md`)))
      throw Error(`step3-scope: ambiguous published item/page identity ${id}`);
    if (candidates.length !== 1 || !candidates[0].regular) continue;
    const path = candidates[0].path;
    let meta;
    try { meta = yaml().parse(split(readFileSync(join(root, path), 'utf8')).fm); }
    catch { continue; }
    if (meta?.page !== id || meta.status !== 'published'
      || !Array.isArray(meta.items) || !Array.isArray(meta.examples ?? [])) continue;
    const members = [...meta.items, ...(meta.examples ?? [])];
    if (members.some(member => typeof member !== 'string' || !idPattern.test(member))
      || new Set(members).size !== members.length) continue;
    const supplier_ids = members.filter(member => {
      if (!publishedItems.has(member)) return false;
      try { return yaml().parse(split(readFileSync(join(root, 'items', `${member}.md`), 'utf8')).fm)?.status === 'published'; }
      catch { return false; }
    }).sort();
    const consumers = new Set(supplier_ids.flatMap(member => [...publishedItems.get(member)]));
    if (supplier_ids.length) result.set(id, { binding: { path, supplier_ids }, consumers });
  }
  return result;
}

export function publishedPageCarrier(root, binding) {
  if (!binding || Object.keys(binding).sort().join(',') !== 'path,supplier_ids'
    || !pathPattern.test(binding.path ?? '') || !Array.isArray(binding.supplier_ids)
    || !binding.supplier_ids.length || binding.supplier_ids.some(id => !idPattern.test(id))
    || new Set(binding.supplier_ids).size !== binding.supplier_ids.length) return undefined;
  const path = join(root, binding.path);
  const category = join(root, ...binding.path.split('/').slice(0, -1));
  if (!existsSync(category) || !lstatSync(category).isDirectory()
    || !existsSync(path) || !lstatSync(path).isFile()) return undefined;
  const bytes = readFileSync(path);
  let meta;
  try { meta = yaml().parse(split(bytes.toString('utf8')).fm); } catch { return undefined; }
  if (!Array.isArray(meta?.items) || !Array.isArray(meta.examples ?? [])
    || meta.status !== 'published' || `${meta.page}.md` !== binding.path.split('/').at(-1)
    || !binding.supplier_ids.every(id => [...(meta.items ?? []), ...(meta.examples ?? [])].includes(id))) return undefined;
  return { file_sha256: sha(bytes), page_dependency: binding };
}
