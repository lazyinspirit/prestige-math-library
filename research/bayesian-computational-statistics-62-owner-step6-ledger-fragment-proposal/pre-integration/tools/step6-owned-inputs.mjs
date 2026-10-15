// Metadata-only exact owned inventory. Scientific subjects are independently
// selected; no foreign working content is walked or hashed for packaging.
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { preflightCloseoutScope, regularPath, treeEntries, indexEntries, textGit, git } from './run-commit-scope.mjs';
import { runScope, splitFrontmatter } from './step6-lib.mjs';
import { scopedReadinessTree } from './step6-scoped-tree.mjs';
import { recordedPublishedRepair, unchangedPublishedClaim } from './published-repair-policy.mjs';
import { recordedPublishedRepair as recordedPhysicsRepair } from './physics-support/published-repair-policy.mjs';

export function step6OwnedInputs(run, root, { physics = false } = {}) {
  if (!/^[a-zA-Z0-9][a-zA-Z0-9_-]*$/.test(run)) throw Error('invalid scoped run identity');
  const finalReceipt = `research/${run}-dispatch/tool-step6-finalize-v3.result.json`;
  if (existsSync(join(root, `research/${run}-closeout-scope.json`))) {
    const selected = new Set(preflightCloseoutScope(root, run, finalReceipt, { physics }).paths);
    return selectSharedOwnership(run, root, { physics, scope: runScope(run, root), selected, policy: true });
  }
  const scope = runScope(run, root);
  if (!scope.items.length || !scope.pages.length) throw Error('empty closeout source frontier');
  const imported = new Set();
  if (physics) {
    const imports = JSON.parse(readFileSync(join(root, 'research/math-imports.json'), 'utf8'));
    if (imports.version !== 1 || !Array.isArray(imports.files)) throw Error('invalid mathematical import map');
    for (const row of imports.files) imported.add(row.path);
  }
  const selected = new Set([scope.ledger, ...scope.items.map(row => row.file),
    ...scope.pages.map(row => row.file), ...scope.pathwayFiles].filter(path => !imported.has(path)));
  for (const path of selected) regularPath(root, path);
  for (const suffix of ['proof-layout.json', 'publication-readiness.json', 'step6-report-integrity.json',
    'step6-report.response.json', 'step6-report.md', 'step6-evidence.json', 'pathway-closure.json', 'judge-closure.json'])
    selected.add(`research/${run}-${suffix}`);
  selected.add(finalReceipt);
  // Git enumerates owned names only; no whole-workspace untracked walk.
  // --full-name is intentionally absent: paths are relative to this cwd even
  // when the physics workspace belongs to its parent Git repository.
  const result = spawnSync('git', ['ls-files', '--cached', '--others', '--exclude-standard', '-z', '--',
    `:(glob)research/${run}-*`, `:(glob)research/${run}-*/**`],
    { cwd: root, encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 });
  if (result.error || result.status !== 0) throw Error(`cannot resolve owned artifact inventory: ${result.error?.message ?? result.stderr}`);
  for (const path of result.stdout.split('\0').filter(Boolean)) {
    if (path.startsWith('/') || path.split('/').includes('..')) throw Error('invalid owned inventory path');
    if (path.startsWith(`research/${run}-dispatch/`) && /\.log(?:\.gz)?$/.test(path)) continue;
    selected.add(path);
  }
  const claimsPath = `research/${run}-step3-published-claims.jsonl`;
  if (existsSync(join(root, claimsPath))) {
    const claims = readFileSync(join(root, claimsPath), 'utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse);
    const seen = new Set();
    for (const claim of claims) {
      if (claim.version !== 1 || claim.run !== run || !/^[a-z][a-z0-9-]*$/.test(claim.id ?? '') || seen.has(claim.id))
        throw Error('invalid or duplicate published ownership claim');
      seen.add(claim.id);
      const path = `items/${claim.id}.md`;
      if (imported.has(path)) throw Error('imported mathematical source cannot be committed by physics');
      regularPath(root, path);
      const source = readFileSync(join(root, path), 'utf8');
      const fm = splitFrontmatter(source).frontmatter;
      const repairPath = /^ {2}repair:\s*(?:"([^"\n]+)"|'([^'\n]+)'|([^\s'"]+))\s*$/m.exec(fm)?.slice(1).find(Boolean);
      const repair = (physics ? recordedPhysicsRepair : recordedPublishedRepair)(root, claim.id, source, repairPath);
      if (!repair.ok) {
        if (physics) throw Error(`local physics published claim requires a valid native repair receipt; mathematical no-op closure is not physics authority: ${claim.id}`);
        const unchanged = unchangedPublishedClaim(root, run, claim, source);
        if (!unchanged.ok) throw Error(`unclosed published ownership ${claim.id}: ${repair.reason}; ${unchanged.reason}`);
        selected.add(unchanged.receipt);
      } else {
        selected.add(repair.receipt);
        const receipt = JSON.parse(readFileSync(join(root, repair.receipt), 'utf8'));
        selected.add(receipt.before_file);
      }
      selected.add(path);
    }
  }
  return selectSharedOwnership(run, root, { physics, scope, selected, policy: false });
}

// Commit authority uses actual owned subjects, never their prerequisite closure.
// Keep readiness's broader scientific context projection independently intact.
function publishedOwnershipParts(text, run, ownedIds) {
  const owns = value => {
    if (value.includes(run)) return true;
    // Supplier mentions inside another run's record are context, not authority.
    const subject = /^\s*(?:\|\s*)?(?:`|\[\[)?([a-z][a-z0-9]*(?:-[a-z0-9]+)+)(?=[`|\]\s])/.exec(value)?.[1];
    return ownedIds.has(subject);
  };
  const parts = { owned: [], foreign: [] };
  for (const block of text.split(/\n\s*\n/).filter(block => block.trim())) {
    // Individual table records cannot lend authority to their neighbouring rows.
    const records = block.trimStart().startsWith('|') ? block.split('\n') : [block];
    for (const record of records) parts[owns(record) ? 'owned' : 'foreign'].push(record);
  }
  return Object.fromEntries(Object.entries(parts).map(([key, rows]) => [key, JSON.stringify(rows)]));
}

function selectSharedOwnership(run, root, { physics, scope, selected, policy }) {
  // Preserve unchanged and foreign-only shared edits outside the commit.
  // Reuse precisely the native scientific projections, not a filename-prefix
  // approximation or a whole-ledger object hash. A relevant change still
  // requires exact owner policy; the default path grants no shared ownership.
  const shared = ['research/defect-ledger.jsonl', 'research/published-consumer-supplier-ledger.md', 'research/plan-spec.json'];
  const head = new Map(treeEntries(root).map(row => [row.path, row]));
  const index = new Map(indexEntries(root).map(row => [row.path, row]));
  const prefix = textGit(root, ['rev-parse', '--show-prefix']);
  const previous = (rows, indexed = false) => Object.fromEntries(shared.map(path => {
    const row = indexed ? (rows.get(path) ?? rows.get(prefix + path)) : rows.get(prefix + path);
    const source = row ? git(root, ['cat-file', 'blob', row.oid]).toString('utf8')
      : path.endsWith('plan-spec.json') ? '{"pages":[]}' : '';
    return [path, source];
  }));
  const projection = sourceOverrides => scopedReadinessTree(run, root, {
    scope, physics, ownedPaths: [], projectionOnly: true, sourceOverrides,
  }).projection_values;
  const headSources = previous(head), indexSources = previous(index, true);
  const workingSources = Object.fromEntries(shared.map(path => [path, existsSync(join(root, path))
    ? readFileSync(join(root, path), 'utf8') : path.endsWith('plan-spec.json') ? '{"pages":[]}' : '']));
  const same = (a, b) => shared.every(path => a[path] === b[path]);
  // The ordinary unchanged case needs no extra global identity/home inventory.
  if (same(workingSources, headSources) && same(indexSources, headSources)) return [...selected].sort();
  const current = projection({}), committed = projection(headSources);
  const staged = same(indexSources, headSources) ? committed : projection(indexSources);
  for (const path of shared) {
    // Explicit policy owns only its selected carriers. Other relevant shared
    // records remain sealed context, without acquiring commit ownership.
    if (policy && !selected.has(path)) continue;
    if (policy && path === 'research/published-consumer-supplier-ledger.md') {
      const ownedIds = new Set([...scope.items.map(row => row.id), ...scope.pages.map(row => row.id),
        ...[...selected].flatMap(file => /^items\/([^/]+)\.md$/.exec(file)?.slice(1) ?? [])]);
      const committedOwnership = publishedOwnershipParts(headSources[path], run, ownedIds);
      const currentOwnership = publishedOwnershipParts(workingSources[path], run, ownedIds);
      const stagedOwnership = publishedOwnershipParts(indexSources[path], run, ownedIds);
      const ownChange = currentOwnership.owned !== committedOwnership.owned
        || stagedOwnership.owned !== committedOwnership.owned;
      if (!ownChange) selected.delete(path);
      else if (currentOwnership.foreign !== committedOwnership.foreign
        || stagedOwnership.foreign !== committedOwnership.foreign)
        throw Error(`mixed owned and foreign published-ledger changes require separate integration: ${path}`);
      continue;
    }
    const relevantChange = (current[path] ?? '') !== (committed[path] ?? '')
      || (staged[path] ?? '') !== (committed[path] ?? '');
    if (relevantChange) {
      if (!policy)
        throw Error(`changed run-relevant shared input requires an exact owner closeout policy: ${path}`);
    } else if (workingSources[path] !== headSources[path] || indexSources[path] !== headSources[path]) {
      // Even an explicit policy must leave another run's entire staged/working
      // carrier outside this transaction when our native projection is unchanged.
      selected.delete(path);
    }
  }
  return [...selected].sort();
}

export const ownedStep6Paths = (root, run, options = {}) => step6OwnedInputs(run, root, options);
