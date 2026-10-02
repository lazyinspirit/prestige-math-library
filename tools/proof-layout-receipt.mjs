// Cheap, fail-closed receipt verification shared by reporting and pre-commit.
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';
import { REPO, WEB_DIR, precheckSource } from './paths.mjs';
import { runScope, sha256 } from './step9-lib.mjs';
import { itemHashGuard, shortHash } from './item-hash.mjs';
import { LAYOUT_GATES } from './proof-layout-core.mjs';

export const proofLayoutPath = (run, root = REPO) => join(root, 'research', `${run}-proof-layout.json`);

export function proofLayoutScope(run, root = REPO) {
  const scope = runScope(run, root);
  const touchFile = `research/${run}-touches.json`;
  const touches = JSON.parse(readFileSync(join(root, touchFile), 'utf8'));
  if (!Array.isArray(touches.snapshots) || !touches.snapshots.length
    || touches.snapshots.some(s => !s.hashes || typeof s.hashes !== 'object')) throw Error('proof-layout: missing or malformed touch snapshots');
  const ids = new Set(scope.items.map(i => i.id));
  const first = touches.snapshots[0].hashes;
  for (const s of touches.snapshots) {
    for (const [id, hash] of Object.entries(s.hashes)) if (first[id] !== hash) ids.add(id);
  }
  // Catch late repairs and additions after the last touch snapshot as well.
  for (const name of readdirSync(join(root, 'items')).filter(n => n.endsWith('.md'))) {
    const id = name.slice(0, -3);
    if (first[id] !== shortHash(itemHashGuard(readFileSync(join(root, 'items', name), 'utf8')))) ids.add(id);
  }
  const files = [...ids].sort().map(id => {
    if (!/^[a-z][a-z0-9-]*$/.test(id)) throw Error(`proof-layout: invalid item ID ${id}`);
    const file = `items/${id}.md`;
    if (!existsSync(join(root, file))) throw Error(`proof-layout: missing ${file}`);
    return file;
  });
  if (!files.length) throw Error('proof-layout: empty item scope');
  return { pages: scope.pages.map(p => ({ id: p.id, kind: p.kind, file: p.file, items: p.items })), files,
    inputs: [...new Set([scope.ledger, touchFile, ...scope.pages.map(p => p.file), ...files])].sort() };
}

function sourceFiles(dir) {
  const files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const file = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...sourceFiles(file));
    else if (/\.(?:tsx?|json)$/.test(entry.name)) files.push(file);
  }
  return files;
}

export function proofLayoutDependencies() {
  if (!WEB_DIR) throw Error('proof-layout: renderer checkout is unavailable');
  const files = [
    ...sourceFiles(join(WEB_DIR, 'components/library')),
    ...sourceFiles(join(WEB_DIR, 'lib')),
    join(WEB_DIR, 'package.json'), join(WEB_DIR, 'tsconfig.json'), precheckSource(),
    ...['proof-layout-core.mjs', 'proof-layout-render.mts', 'proof-layout.mjs', 'proof-layout-receipt.mjs', 'paths.mjs', 'step9-lib.mjs', 'frontmatter-list.mjs', 'item-hash.mjs'].map(f => join(REPO, 'tools', f)),
  ];
  for (const lock of ['package-lock.json', 'pnpm-lock.yaml', 'yarn.lock']) if (existsSync(join(WEB_DIR, lock))) files.push(join(WEB_DIR, lock));
  for (const pkg of ['react', 'react-dom', 'react-markdown', 'remark-math', 'rehype-katex', 'katex']) files.push(join(WEB_DIR, 'node_modules', pkg, 'package.json'));
  return Object.fromEntries([...new Set(files)].sort().map(f => [relative(REPO, f), sha256(readFileSync(f))]));
}

export function proofLayoutInputs(run, root = REPO) {
  const scope = proofLayoutScope(run, root);
  const inputs = Object.fromEntries(scope.inputs.map(f => [f, sha256(readFileSync(join(root, f)))]));
  const dependencies = proofLayoutDependencies();
  return { scope, inputs, dependencies, fingerprint: sha256(JSON.stringify({ scope, inputs, dependencies })) };
}

export function verifyProofLayout(run, root = REPO, gate = null) {
  const receipt = JSON.parse(readFileSync(proofLayoutPath(run, root), 'utf8'));
  const current = proofLayoutInputs(run, root);
  if (receipt.version !== 1 || receipt.run !== run || receipt.fingerprint !== current.fingerprint
    || JSON.stringify(receipt.scope) !== JSON.stringify(current.scope)
    || JSON.stringify(receipt.inputs) !== JSON.stringify(current.inputs)
    || JSON.stringify(receipt.dependencies) !== JSON.stringify(current.dependencies)) throw Error('proof-layout: receipt is stale; rerun the readiness gates on stable content');
  if (!Array.isArray(receipt.items) || receipt.items.length !== current.scope.files.length
    || receipt.items.some((item, i) => item.file !== current.scope.files[i] || !Array.isArray(item.rows) || !Array.isArray(item.errors))) throw Error('proof-layout: incomplete item coverage');
  const count = receipt.items.reduce((n, item) => n + item.rows.reduce((m, row) => m + row.sourceSteps, 0), 0);
  if (!Number.isInteger(count) || count < 1 || count !== receipt.steps) throw Error('proof-layout: invalid or empty step coverage');
  for (const id of gate ? [gate] : LAYOUT_GATES) {
    if (!LAYOUT_GATES.includes(id) || receipt.gates?.[id] !== 'pass'
      || receipt.items.some(item => item.errors.some(error => error.gate === id))) throw Error(`proof-layout: ${id} has not passed`);
  }
  return receipt;
}
