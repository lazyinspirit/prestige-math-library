import { realpathSync as physicsRealpath } from 'node:fs';
// Import snapshots, never symlinks to mathematical content. Sources stay untouched.
import { existsSync, readFileSync, writeFileSync, mkdirSync, chmodSync } from 'node:fs';
import { join, resolve, dirname, relative } from 'node:path';
import { createHash } from 'node:crypto';
import { pathToFileURL } from 'node:url';
import { markdownFiles, readItem, PHYSICS_KINDS } from './physics-content.mjs';
import { REPO } from './paths.mjs';
import { frontierMathematicsImportScope } from './frontier-import-scope.mjs';
import { parseFrontmatter } from './content-policy-lib.mjs';
import { splitFrontmatter } from './facts-block.mjs';
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
// A source folder rename does not move the immutable local snapshot.
export function originalImportPath(receipt, file) {
  const path = file.source_path ?? file.path;
  if (file.source_path && (path.split('/').includes('..') || !/^library\/[\w.-]+\/[\w.-]+\.md$/.test(path)
    || !file.path.startsWith('library/') || path.split('/').at(-1) !== file.path.split('/').at(-1)))
    throw Error(`invalid original import relocation: ${file.path}`);
  return join(receipt.source_root, path);
}
export function importMathematics(root, sourceRoot) {
  root = resolve(root); sourceRoot = resolve(sourceRoot);
  if (root === sourceRoot) throw Error('physics workspace and mathematics source must differ');
  const receiptPath = join(root, 'research/math-imports.json');
  const old = existsSync(receiptPath) ? JSON.parse(readFileSync(receiptPath, 'utf8')) : { files: [] };
  const existing = new Map(old.files.map(f => [f.path, f]));
  const chosen = markdownFiles(join(sourceRoot, 'items')).filter(f => {
    const item = readItem(f);
    return item.status === 'published' && !PHYSICS_KINDS.has(item.kind) && item.domain !== 'physics';
  });
  for (const file of markdownFiles(join(sourceRoot, 'library'))) {
    const item = readItem(file);
    if (item.status === 'published' || file.endsWith('/_category.md')) chosen.push(file);
  }
  const legacyPolicy = join(sourceRoot, 'research/b-leaf-legacy-allowlist.json');
  if (existsSync(legacyPolicy)) chosen.push(legacyPolicy);
  const files = chosen.map(file => ({ path: relative(sourceRoot, file), sha256: hash(readFileSync(file)) }));
  // Preflight every destination before writing anything.
  for (const file of files) {
    const target = join(root, file.path);
    if (existsSync(target) && (!existing.has(file.path) || hash(readFileSync(target)) !== existing.get(file.path).sha256)) throw Error(`import would overwrite locally authored or altered content: ${file.path}`);
  }
  for (const file of files) {
    const target = join(root, file.path);
    mkdirSync(dirname(target), { recursive: true });
    if (existsSync(target)) chmodSync(target, 0o644);
    writeFileSync(target, readFileSync(join(sourceRoot, file.path)));
    chmodSync(target, 0o444);
  }
  // Retain old pinned suppliers if publication was withdrawn; verification will
  // hold the run rather than silently removing a required supplier.
  for (const file of old.files) if (!files.some(f => f.path === file.path)) files.push(file);
  mkdirSync(dirname(receiptPath), { recursive: true });
  const receipt = { version: 1, source_root: sourceRoot, files };
  writeFileSync(receiptPath, JSON.stringify(receipt, null, 2) + '\n');
  // Per-file exclusions leave newly authored physics content trackable.
  const ignorePath = join(root, '.gitignore');
  const ignore = existsSync(ignorePath) ? readFileSync(ignorePath, 'utf8') : '';
  const marker = '# BEGIN mathematical imports';
  const base = ignore.split(marker)[0].trimEnd();
  writeFileSync(ignorePath, base + '\n\n' + marker + '\n' + files.map(f => '/' + f.path).join('\n') + '\n# END mathematical imports\n');
  return receipt;
}
export function verifyMathematicsImports(root, { run = null, planning = false } = {}) {
  if (run !== null && !/^[a-zA-Z0-9_-]+$/.test(run ?? '')) throw Error('invalid current import frontier run');
  if (planning && !run) throw Error('planning import selection requires --run');
  const receiptPath = join(root, 'research/math-imports.json');
  if (!existsSync(receiptPath)) throw Error('missing math import receipt; run physics init before planning');
  const receipt = JSON.parse(readFileSync(receiptPath, 'utf8'));
  if (receipt.version !== 1 || !Array.isArray(receipt.files) || typeof receipt.source_root !== 'string' || resolve(receipt.source_root) === resolve(root)) throw Error('invalid math import receipt');
  // Every local snapshot remains hash-bound, classified and published, even
  // when its original source has no consequence for the current frontier.
  const seen = new Set();
  for (const file of receipt.files) {
    if (!(file.path === 'research/b-leaf-legacy-allowlist.json' || /^(items|library)\/[\w./-]+\.md$/.test(file.path)) || file.path.split('/').includes('..') || seen.has(file.path)
      || !/^[a-f0-9]{64}$/.test(file.sha256 ?? '')) throw Error('invalid or duplicate import path');
    seen.add(file.path);
    if (hash(readFileSync(join(root, file.path))) !== file.sha256)
      throw Error(`mathematics import changed: ${file.path}; reconcile and re-import before a new run`);
    if (file.path.startsWith('items/')) {
      const item = readItem(join(root, file.path));
      if (item.status !== 'published' || PHYSICS_KINDS.has(item.kind) || item.domain === 'physics') throw Error(`not a published mathematical supplier: ${file.path}`);
    }
  }
  const originals = markdownFiles(join(receipt.source_root, 'items')).map(readItem);
  for (const item of originals) if (PHYSICS_KINDS.has(item.kind) || item.domain === 'physics')
    throw Error(`physical item in mathematics source: ${item.file}`);
  const sourcePages = run ? markdownFiles(join(receipt.source_root, 'library'))
    .filter(file => !file.split('/').at(-1).startsWith('_')).map(file => ({ ...readItem(file), path: relative(receipt.source_root, file) })) : [];
  const scope = run ? frontierMathematicsImportScope(root, run, { planning, receipt, originals: { items: originals, pages: sourcePages } }) : null;
  for (const file of receipt.files) if (scope === null || scope.paths.has(file.path)) {
    if (file.path.endsWith('/_category.md')) {
      const pinned = parseFrontmatter(splitFrontmatter(readFileSync(join(root,file.path),'utf8')).fm);
      const prefix = file.path.slice(0,file.path.lastIndexOf('/')+1);
      const pages = receipt.files.filter(row => row.path.startsWith(prefix) && !row.path.endsWith('/_category.md')
        && (scope === null || scope.paths.has(row.path)));
      for (const page of pages) {
        const category = join(dirname(originalImportPath(receipt,page)),'_category.md');
        if (!existsSync(category))throw Error(`missing mathematics source category: ${page.path}`);
        const current = parseFrontmatter(splitFrontmatter(readFileSync(category,'utf8')).fm);
        if ((current.library??'mathematics')!==(pinned.library??'mathematics')
          || (current.domain??'mathematics')!=='mathematics')throw Error(`mathematics category classification changed: ${page.path}`);
      }
      continue;
    }
    const original = originalImportPath(receipt, file);
    if (!existsSync(original)) throw Error(`missing mathematics source original: ${file.path}`);
    let originalBytes = readFileSync(original);
    if (hash(originalBytes) !== file.sha256)
      throw Error(`mathematics import changed: ${file.path}; reconcile and re-import before a new run`);
    if (file.path.startsWith('items/')) {
      const item = readItem(original);
      if (item.status !== 'published') throw Error(`mathematics source publication withdrawn: ${file.path}`);
    }
  }
  return receipt.files.length;
}
if (process.argv[1] && import.meta.url === pathToFileURL(physicsRealpath(resolve(process.argv[1]))).href) {
  try {
    const args = process.argv.slice(2), value = flag => args[args.indexOf(flag) + 1];
    const root = args.includes('--root') ? resolve(value('--root')) : REPO;
    const count = args.includes('--verify') ? verifyMathematicsImports(root) : importMathematics(root, resolve(args.includes('--source') ? value('--source') : join(REPO, '..'))).files.length;
    console.log(`mathematics imports: ${count} files, pass`);
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}
