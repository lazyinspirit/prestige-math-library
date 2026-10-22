// Cheap, fail-closed receipt verification shared by reporting and pre-commit.
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';
import { REPO, WEB_DIR, precheckSource } from './paths.mjs';
import { runScope, sha256, splitFrontmatter } from './step6-lib.mjs';
import { frontmatterList } from './frontmatter-list.mjs';
import { LAYOUT_GATES } from './proof-layout-core.mjs';

export const proofLayoutPath = (run, root = REPO) => join(root, 'research', `${run}-proof-layout.json`);

export function proofLayoutScope(run, root = REPO) {
  const scope = runScope(run, root);
  // Seal the run's workflow history without using its corpus inventory as scope.
  const touchFile = `research/${run}-touches.json`;
  const touches = JSON.parse(readFileSync(join(root, touchFile), 'utf8'));
  if (!Array.isArray(touches.snapshots) || !touches.snapshots.length
    || touches.snapshots.some(s => !s.hashes || typeof s.hashes !== 'object')) throw Error('proof-layout: missing or malformed touch snapshots');
  // The current batch manifests own validator subjects. Touch snapshots are
  // historical corpus inventories, including retired IDs and unrelated repairs;
  // they must not create Step-6 subjects (CLAUDE.md §8).
  const manifestFiles = [...new Set(scope.pages.map(page => {
    if (!/^\d+$/.test(page.batch)) throw Error(`proof-layout: page ${page.id} has no valid manifest batch`);
    return `research/${run}-batch-${page.batch}.pages.json`;
  }))].sort();
  if (!manifestFiles.length) throw Error('proof-layout: missing frontier manifests');
  const owners = new Map();
  for (const item of scope.items) {
    const fm = splitFrontmatter(readFileSync(join(root, item.file), 'utf8')).frontmatter;
    for (const alias of frontmatterList(fm, 'aliases')) {
      const ids = owners.get(alias) ?? new Set();
      ids.add(item.id);
      owners.set(alias, ids);
    }
  }
  const currentIds = new Set(scope.items.map(item => item.id));
  const canonical = id => {
    if (typeof id !== 'string' || !/^(?:alg|def|lem|thm|prop|cor|ex|cex|fs|rem|op)-[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/.test(id)) throw Error(`proof-layout: invalid item ID ${id}`);
    if (currentIds.has(id)) return id;
    const candidates = owners.get(id);
    if (candidates?.size && existsSync(join(root, `items/${id}.md`))) throw Error(`proof-layout: alias ${id} collides with a real item file`);
    if (candidates?.size === 1) return [...candidates][0];
    if (candidates?.size > 1) throw Error(`proof-layout: ambiguous current ownership for ${id}`);
    if (!existsSync(join(root, `items/${id}.md`))) throw Error(`proof-layout: missing items/${id}.md`);
    throw Error(`proof-layout: manifest item ${id} is absent from current run pages`);
  };
  const pages = new Map();
  const manifestOwners = new Map();
  for (const file of manifestFiles) {
    if (!existsSync(join(root, file))) throw Error(`proof-layout: missing ${file}`);
    const raw = JSON.parse(readFileSync(join(root, file), 'utf8'));
    const rows = Array.isArray(raw) ? raw : raw.pages;
    if (!Array.isArray(rows) || !rows.length) throw Error(`proof-layout: empty or malformed manifest ${file}`);
    for (const row of rows) {
      if (typeof row.id !== 'string' || pages.has(row.id) || !Array.isArray(row.items) || !row.items.length) {
        throw Error(`proof-layout: invalid or duplicate manifest page ${row.id}`);
      }
      const ids = row.items.map(item => canonical(typeof item === 'string' ? item : item?.id));
      for (const id of ids) {
        if (manifestOwners.has(id)) throw Error(`proof-layout: duplicate manifest ownership for ${id}`);
        manifestOwners.set(id, row.id);
      }
      pages.set(row.id, ids.sort());
    }
  }
  if (pages.size !== scope.pages.length || scope.pages.some(page => !pages.has(page.id))) {
    throw Error('proof-layout: current manifest and run page families disagree');
  }
  const actualOwners = new Map();
  const extras = [];
  for (const page of scope.pages) {
    for (const id of page.items) {
      if (actualOwners.has(id)) throw Error(`proof-layout: duplicate page ownership for ${id}`);
      actualOwners.set(id, page.id);
      if (!manifestOwners.has(id)) extras.push({ id, page: page.id });
      else if (manifestOwners.get(id) !== page.id) throw Error(`proof-layout: wrong page ownership for ${id}`);
    }
    for (const id of pages.get(page.id)) {
      if (!page.items.includes(id)) throw Error(`proof-layout: manifest item ${id} is absent from its current run page`);
    }
  }
  // Published prerequisites placed on a frontier page are context, never new
  // proof subjects. Require an explicit, byte-bound owner rehome declaration;
  // arbitrary extra IDs (including drafts) continue to fail closed.
  const contextInputs = [];
  if (extras.length) {
    const declarationFile = `research/${run}-proof-layout-context.json`;
    const declaration = JSON.parse(readFileSync(join(root, declarationFile), 'utf8'));
    const evidenceFile = `research/${run}-rehomed.json`;
    const evidenceBytes = readFileSync(join(root, evidenceFile));
    const evidence = JSON.parse(evidenceBytes);
    if (declaration.version !== 1 || declaration.policy !== 'published-rehome-prerequisite-context-v1'
      || declaration.run !== run || declaration.approved_by !== 'owner' || !declaration.owner_identity
      || declaration.independent_execution_coverage_adopted !== false
      || declaration.evidence?.path !== evidenceFile || declaration.evidence.sha256 !== sha256(evidenceBytes)
      || evidence.version !== 1 || evidence.run !== run || evidence.approved_by !== 'owner'
      || !evidence.owner_identity || evidence.independent_execution_coverage_adopted !== false
      || !Array.isArray(evidence.items) || !Array.isArray(declaration.items)
      || declaration.items.length !== extras.length) throw Error('proof-layout: invalid published context declaration');
    const declared = new Set();
    for (const row of declaration.items) {
      const extra = extras.find(item => item.id === row.id && item.page === row.page);
      const origins = evidence.items.filter(item => item.id === row.id && item.to_page === row.page);
      if (!extra || declared.has(row.id) || origins.length !== 1
        || origins[0].role !== 'existing published prerequisite context; not a new frontier claim'
        || origins[0].source_changed_by_positional_rehome !== false) throw Error(`proof-layout: unlicensed context ${row.id}`);
      declared.add(row.id);
      const file = `items/${row.id}.md`;
      const bytes = readFileSync(join(root, file));
      const fm = splitFrontmatter(bytes.toString('utf8')).frontmatter;
      if (!/^[a-f0-9]{64}$/.test(row.source_raw_sha256 ?? '') || sha256(bytes) !== row.source_raw_sha256
        || !/^status:\s*published\s*$/m.test(fm) || !new RegExp(`^id:\\s*${row.id}\\s*$`, 'm').test(fm)) {
        throw Error(`proof-layout: stale or unpublished context ${row.id}`);
      }
      contextInputs.push(file);
    }
    contextInputs.push(declarationFile, evidenceFile);
  }
  const files = [...new Set([...pages.values()].flat())].sort().map(id => `items/${id}.md`);
  if (!files.length) throw Error('proof-layout: empty item scope');
  return { pages: scope.pages.map(p => ({ id: p.id, kind: p.kind, file: p.file, items: pages.get(p.id) })), files,
    inputs: [...new Set([scope.ledger, touchFile, ...manifestFiles, ...scope.pages.map(p => p.file), ...files, ...contextInputs])].sort() };
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
    ...['proof-layout-core.mjs', 'proof-layout-render.mts', 'proof-layout.mjs', 'proof-layout-receipt.mjs', 'paths.mjs', 'step6-lib.mjs', 'frontmatter-list.mjs', 'item-hash.mjs'].map(f => join(REPO, 'tools', f)),
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

export function noProofRequired(scope, root = REPO) {
  return scope.files.length > 0 && scope.files.every(file => {
    const raw = readFileSync(join(root, file), 'utf8');
    const { frontmatter, body } = splitFrontmatter(raw);
    return /^kind:\s*['"]?open-problem['"]?\s*$/m.test(frontmatter)
      && !/^## (Proof|Refutation|Verification|Counterexample)\s*$/m.test(body);
  });
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
  if (!Number.isInteger(count) || (count < 1 && !noProofRequired(current.scope, root)) || count !== receipt.steps) throw Error('proof-layout: invalid or empty step coverage');
  for (const id of gate ? [gate] : LAYOUT_GATES) {
    if (!LAYOUT_GATES.includes(id) || receipt.gates?.[id] !== 'pass'
      || receipt.items.some(item => item.errors.some(error => error.gate === id))) throw Error(`proof-layout: ${id} has not passed`);
  }
  return receipt;
}
