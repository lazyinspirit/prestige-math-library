#!/usr/bin/env node
// Exact certification scope for every mathematical item changed after Step 8.
//
// Step 9 may create a missing result or repair an existing one.  Both actions
// invalidate judge currency and every changed item must traverse the configured judge,
// adjudication, rejudge, and stamp path.  This receipt compares the guarded
// mathematical hash (the same form used by touchlog and step8-guard) with the
// immutable post-step8 snapshot and refuses deletions or unowned changes.

import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { itemHashGuard, shortHash } from './item-hash.mjs';

const argv = process.argv.slice(2);
const value = (flag) => { const at = argv.indexOf(flag); return at < 0 ? '' : argv[at + 1] ?? ''; };
const root = resolve(value('--root') || join(dirname(fileURLToPath(import.meta.url)), '..'));
const touchesArg = value('--touches');
const baselineLabel = value('--baseline');
const manifestsArg = value('--manifests');
const outArg = value('--out');
const scopeOutArg = value('--scope-out');
const check = argv.includes('--check');
const atRoot = (path) => path?.startsWith('/') ? path : join(root, path ?? '');

if (!touchesArg || !baselineLabel || !manifestsArg || !outArg || !scopeOutArg) {
  console.error('usage: node tools/step9-changes.mjs --touches <ledger.json> --baseline <label> --manifests <batch.pages.json,...> --out <receipt.json> --scope-out <changes.pages.json> [--check] [--root <repo>]');
  process.exit(2);
}

const errors = [];
const touchesPath = atRoot(touchesArg);
if (!existsSync(touchesPath)) {
  console.error(`ERROR touch ledger not found: ${touchesArg}`);
  process.exit(2);
}
let touches;
try { touches = JSON.parse(readFileSync(touchesPath, 'utf8')); }
catch { console.error(`ERROR touch ledger is not valid JSON: ${touchesArg}`); process.exit(2); }
const baseline = [...(touches.snapshots ?? [])].reverse().find((snapshot) => snapshot.label === baselineLabel);
if (!baseline?.hashes || typeof baseline.hashes !== 'object') {
  console.error(`ERROR no usable snapshot labelled ${JSON.stringify(baselineLabel)}`);
  process.exit(2);
}

const manifests = manifestsArg.split(',').map((path) => path.trim()).filter(Boolean);
const ownersByItem = new Map();
for (const manifest of manifests) {
  const path = atRoot(manifest);
  if (!existsSync(path)) { errors.push(`manifest not found: ${manifest}`); continue; }
  let pages;
  try { pages = JSON.parse(readFileSync(path, 'utf8')); }
  catch { errors.push(`manifest is not valid JSON: ${manifest}`); continue; }
  if (!Array.isArray(pages)) { errors.push(`${manifest}: expected an array of page records`); continue; }
  for (const page of pages) for (const item of page?.items ?? []) {
    const id = typeof item === 'string' ? item : item?.id;
    if (typeof id !== 'string' || !id) continue;
    const owners = ownersByItem.get(id) ?? [];
    owners.push(manifest);
    ownersByItem.set(id, owners);
  }
}

const itemsDir = join(root, 'items');
if (!existsSync(itemsDir)) { console.error(`ERROR items directory not found: ${itemsDir}`); process.exit(2); }
const current = Object.fromEntries(readdirSync(itemsDir).filter((name) => name.endsWith('.md')).sort().map((name) => {
  const id = name.slice(0, -3);
  return [id, shortHash(itemHashGuard(readFileSync(join(itemsDir, name), 'utf8')))];
}));
const created = Object.keys(current).filter((id) => !(id in baseline.hashes)).sort();
const modified = Object.keys(current).filter((id) => id in baseline.hashes && current[id] !== baseline.hashes[id]).sort();
const deleted = Object.keys(baseline.hashes).filter((id) => !(id in current)).sort();
const items = [...created, ...modified].sort();

for (const id of deleted) errors.push(`${id}: item present at ${baselineLabel} was deleted`);
for (const id of created) {
  const owners = ownersByItem.get(id) ?? [];
  if (owners.length !== 1) errors.push(`${id}: newly created item expected exactly one owning run manifest, found ${owners.length}${owners.length ? ` (${owners.join(', ')})` : ''}`);
}
for (const id of modified) {
  const owners = ownersByItem.get(id) ?? [];
  if (owners.length > 1) errors.push(`${id}: modified item appears in ${owners.length} run manifests (${owners.join(', ')})`);
}

const publishedModified = modified.filter((id) => !(ownersByItem.get(id)?.length));
const receipt = { version: 1, baseline: baselineLabel, created, modified, published_modified: publishedModified, items, manifests };
const scopeManifest = [{ id: 'step9-changes', kind: 'A', items: items.map((id) => ({ id })) }];
const outPath = atRoot(outArg);
const scopeOutPath = atRoot(scopeOutArg);
if (check) {
  if (!existsSync(outPath)) errors.push(`receipt not found: ${outArg}`);
  else {
    let recorded;
    try { recorded = JSON.parse(readFileSync(outPath, 'utf8')); }
    catch { errors.push(`receipt is not valid JSON: ${outArg}`); }
    if (recorded && JSON.stringify(recorded) !== JSON.stringify(receipt)) errors.push(`receipt disagrees with the current ${baselineLabel} delta`);
  }
  if (!existsSync(scopeOutPath)) errors.push(`judge scope manifest not found: ${scopeOutArg}`);
  else {
    let recordedScope;
    try { recordedScope = JSON.parse(readFileSync(scopeOutPath, 'utf8')); }
    catch { errors.push(`judge scope manifest is not valid JSON: ${scopeOutArg}`); }
    if (recordedScope && JSON.stringify(recordedScope) !== JSON.stringify(scopeManifest)) errors.push(`judge scope manifest disagrees with the current ${baselineLabel} delta`);
  }
} else if (!errors.length) {
  writeFileSync(outPath, `${JSON.stringify(receipt, null, 2)}\n`);
  writeFileSync(scopeOutPath, `${JSON.stringify(scopeManifest, null, 2)}\n`);
}

console.log(`step9-changes: ${created.length} created, ${modified.length} modified, ${deleted.length} deleted since ${JSON.stringify(baselineLabel)}`);
for (const error of errors) console.error(`ERROR ${error}`);
process.exit(errors.length ? 1 : 0);
