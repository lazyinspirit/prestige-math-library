import { realpathSync as physicsRealpath } from 'node:fs';
// Import snapshots, never symlinks to mathematical content. Sources stay untouched.
import { existsSync, readFileSync, writeFileSync, mkdirSync, chmodSync } from 'node:fs';
import { join, resolve, dirname, relative } from 'node:path';
import { createHash } from 'node:crypto';
import { pathToFileURL } from 'node:url';
import { markdownFiles, readItem, PHYSICS_KINDS } from './physics-content.mjs';
import { REPO } from './paths.mjs';
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
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
export function verifyMathematicsImports(root) {
  const receiptPath = join(root, 'research/math-imports.json');
  if (!existsSync(receiptPath)) throw Error('missing math import receipt; run physics init before planning');
  const receipt = JSON.parse(readFileSync(receiptPath, 'utf8'));
  if (receipt.version !== 1 || !Array.isArray(receipt.files) || typeof receipt.source_root !== 'string' || resolve(receipt.source_root) === resolve(root)) throw Error('invalid math import receipt');
  for (const file of markdownFiles(join(receipt.source_root, 'items'))) {
    const item = readItem(file);
    if (PHYSICS_KINDS.has(item.kind) || item.domain === 'physics') throw Error(`physical item in mathematics source: ${file}`);
  }
  const seen = new Set();
  for (const file of receipt.files) {
    if (!(file.path === 'research/b-leaf-legacy-allowlist.json' || /^(items|library)\/[\w./-]+\.md$/.test(file.path)) || file.path.split('/').includes('..') || seen.has(file.path)) throw Error('invalid or duplicate import path');
    seen.add(file.path);
    for (const base of [root, receipt.source_root]) if (hash(readFileSync(join(base, file.path))) !== file.sha256) throw Error(`mathematics import changed: ${file.path}; reconcile and re-import before a new run`);
    if (file.path.startsWith('items/')) {
      const item = readItem(join(root, file.path));
      if (item.status !== 'published' || PHYSICS_KINDS.has(item.kind) || item.domain === 'physics') throw Error(`not a published mathematical supplier: ${file.path}`);
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
