// Missing plan declarations may resolve only to authenticated published imports.
// These are prerequisite context, never additional authored frontier subjects.
import { readFileSync, lstatSync, realpathSync } from 'node:fs';
import { resolve, relative as relativePath } from 'node:path';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { yaml } from './pathway-lib.mjs';
const slug = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
export function importedPlanPage(root, id, receipt, copies = []) {
  if (!slug.test(id)) return null;
  const pins = (receipt.files ?? []).filter(row => typeof row.path === 'string'
    && row.path.startsWith('library/') && row.path.endsWith(`/${id}.md`));
  if (!pins.length) return null;
  const fail = message => { throw Error(`imported prerequisite page ${id}: ${message}`); };
  if (receipt.version !== 1 || pins.length !== 1) fail('invalid/ambiguous pin');
  const pin = pins[0];
  if (!new RegExp(`^library/[a-z0-9]+(?:-[a-z0-9]+)*/${id}\\.md$`).test(pin.path)
    || !/^[a-f0-9]{64}$/.test(pin.sha256 ?? '')) fail('invalid pin path/hash');
  const relative = pin.path.slice('library/'.length);
  if (![1, 2].includes(copies.length) || new Set(copies).size !== copies.length || !copies.includes(relative))
    fail('missing/ambiguous local identity');
  const path = resolve(root, pin.path);
  if (!lstatSync(path).isFile() || realpathSync(path) !== path) fail('not a regular local snapshot');
  const bytes = readFileSync(path);
  if (createHash('sha256').update(bytes).digest('hex') !== pin.sha256) fail('snapshot differs from immutable pin');
  if (copies.length === 2) {
    // A historical tracked placement can survive beside a later import path.
    // Equality alone never licenses an untracked/staged-only extra carrier.
    const alternate = copies.find(copy => copy !== relative);
    if (!new RegExp(`^[a-z0-9]+(?:-[a-z0-9]+)*/${id}\\.md$`).test(alternate)) fail('ambiguous alternate path');
    const full = resolve(root, 'library', alternate);
    if (!lstatSync(full).isFile() || realpathSync(full) !== full) fail('alternate is not a regular local snapshot');
    if (!readFileSync(full).equals(bytes)) fail('alternate differs from immutable pin');
    try {
      const gitRoot = execFileSync('git', ['-C', root, 'rev-parse', '--show-toplevel'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
      const tracked = relativePath(gitRoot, full).split('\\').join('/');
      if (!tracked || tracked.startsWith('../')) fail('alternate outside repository');
      const tree = execFileSync('git', ['-C', gitRoot, 'ls-tree', '-z', 'HEAD', '--', tracked], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
      if (!/^(?:100644|100755) blob [a-f0-9]+\t/.test(tree) || tree.split('\t')[1] !== tracked + '\0') fail('alternate is not a regular HEAD-tracked placement');
      const before = execFileSync('git', ['-C', gitRoot, 'show', `HEAD:${tracked}`], { stdio: ['ignore', 'pipe', 'ignore'] });
      if (!before.equals(bytes)) fail('historical tracked placement differs from immutable pin');
    } catch (error) { fail(`ambiguous alternate lacks exact HEAD authority (${error.message})`); }
  }

  const match = bytes.toString('utf8').match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!match) fail('missing frontmatter');
  const doc = yaml().parseDocument(match[1], { uniqueKeys: true });
  if (doc.errors.length) fail('malformed YAML');
  const page = doc.toJS();
  if (page?.page !== id || page.status !== 'published'
    || ![undefined, 'mathematics'].includes(page.library) || ![undefined, 'mathematics'].includes(page.domain)) fail('identity/publication/classification mismatch');
  if (!Array.isArray(page.items) || !Array.isArray(page.examples ?? [])
    || !page.items.length && !(page.examples ?? []).length
    || [...page.items, ...(page.examples ?? [])].some(id => typeof id !== 'string' || !/^[a-z]+-[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id))) fail('invalid inventory');
  for (const field of ['requires', 'prerequisites'])
    if (!Array.isArray(page[field] ?? []) || (page[field] ?? []).some(id => typeof id !== 'string' || !slug.test(id))) fail(`invalid ${field}`);
  if (page.order !== undefined && !Number.isFinite(page.order)) fail('invalid explicit order');
  // Published P declarations already use zero when no reading order is stored.
  // Keep any actual explicit order; later prerequisites must still fail.
  return { id, kind: 'P', category: pin.path.split('/')[1], library: 'mathematics',
    order: page.order ?? 0, requires: [...new Set([...(page.requires ?? []), ...(page.prerequisites ?? [])])], items: [],
    importedKind: page.kind === 'B' || id.endsWith('-examples') ? 'B' : 'A' };
}
