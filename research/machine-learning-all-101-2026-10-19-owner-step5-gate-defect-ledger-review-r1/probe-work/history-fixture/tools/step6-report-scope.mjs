// Report integrity consumes the same exact native selection as readiness.
// No repository-root walk and no full-library content hashes are performed.
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { protectedEntryHash, runScope, sha256 } from './step6-lib.mjs';
import { scopedReadinessTree } from './step6-scoped-tree.mjs';
import { step6OwnedInputs } from './step6-owned-inputs.mjs';

export function scopedReportTree(run, root, { physics = false, ownedPaths = step6OwnedInputs(run, root, { physics }), scope = runScope(run, root), native: suppliedNative = null } = {}) {
  if (!scope.items.length || !scope.pages.length) throw Error('empty Step-6 report frontier');
  const native = suppliedNative ?? scopedReadinessTree(run, root, { scope, physics, includeRows: true, ownedPaths });
  const rows = new Map(native.protected_tree_rows.map(row => {
    const split = row.indexOf('\0');
    return [row.slice(0, split), row.slice(split + 1)];
  }));
  for (const suffix of ['publication-readiness.json', 'proof-layout.json', 'step6-evidence.json']) {
    const path = `research/${run}-${suffix}`;
    rows.set(path, protectedEntryHash(join(root, path)));
  }
  const evidence = JSON.parse(readFileSync(join(root, `research/${run}-step6-evidence.json`), 'utf8'));
  if (evidence.run !== run || !evidence.input_sha256 || typeof evidence.input_sha256 !== 'object')
    throw Error('invalid report evidence input inventory');
  // Reporter inputs already represented by semantic native projections must
  // retain those projections; shared ledger appends for another run are not
  // changes to this run's scientific evidence.
  const projected = new Set(native.protected_tree_projections);
  for (const path of Object.keys(evidence.input_sha256)) {
    if (projected.has(path) || rows.has(path)) continue;
    if (path.startsWith('/') || path.split('/').includes('..')) throw Error('invalid reporter input path');
    rows.set(path, protectedEntryHash(join(root, path)));
  }
  const protected_tree = Object.fromEntries([...rows].sort(([a], [b]) => a.localeCompare(b)));
  const selectors = { ledger: scope.ledger, pages: scope.pages.map(({ id, file }) => ({ id, file })),
    items: scope.items.map(({ id, file }) => ({ id, file })), pathways: scope.pathwayFiles,
    native_scope: native.protected_tree_scope, projections: native.protected_tree_projections,
    owned_paths: [...ownedPaths].filter(path => !path.startsWith(`research/${run}-dispatch/`)).sort() };
  return { version: 2, run, scope: 'frontier-prerequisite-report-v2', selectors,
    protected_tree, sha256: sha256(JSON.stringify({ selectors, protected_tree })) };
}

export const scopedTree = (root, run, options = {}) => scopedReportTree(run, root, options).protected_tree;
