#!/usr/bin/env node
// Exact certification scope for draft mathematics changed after Step 7.
//
// Step 8 may create a missing result or repair an existing one.  Both actions
// invalidate judge currency and changed draft items traverse the configured judge,
// adjudication, rejudge, and stamp path. Published repairs are recorded but
// have no judge or adjudication obligation. This receipt compares the guarded
// mathematical hash (the same form used by touchlog and step7-guard) with the
// immutable post-step7 snapshot inside the approved owning frontier. Missing
// or multiply owned subjects block; unrelated deltas remain advisory only.

import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { itemHashGuard, shortHash } from './item-hash.mjs';
import { isPublishedItem } from './published-repair-policy.mjs';
import { validateFrontier } from './step7-rounds.mjs';
import { loadAuditorCreatedCertifications } from './auditor-created-items.mjs';

const argv = process.argv.slice(2);
const value = (flag) => { const at = argv.indexOf(flag); return at < 0 ? '' : argv[at + 1] ?? ''; };
const root = resolve(value('--root') || join(dirname(fileURLToPath(import.meta.url)), '..'));
const touchesArg = value('--touches');
const baselineLabel = value('--baseline');
const manifestsArg = value('--manifests');
const outArg = value('--out');
const scopeOutArg = value('--scope-out');
const check = argv.includes('--check');
const list = argv.includes('--list');
const atRoot = (path) => path?.startsWith('/') ? path : join(root, path ?? '');

if (!touchesArg || !baselineLabel || !manifestsArg || !outArg || !scopeOutArg) {
  console.error('usage: node tools/step8-changes.mjs --touches <ledger.json> --baseline <label> --manifests <batch.pages.json,...> --out <receipt.json> --scope-out <changes.pages.json> [--check | --list] [--root <repo>]');
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
const manifestRuns = [...new Set(manifests.map(path => path.split('/').at(-1)?.match(/^(.+)-batch-\d+\.pages\.json$/)?.[1]))];
if (!manifests.length || manifestRuns.length !== 1 || !manifestRuns[0]) {
  console.error('ERROR Step 8 requires nonempty manifests from exactly one owning run');
  process.exit(2);
}
const run = manifestRuns[0];
let frontier;
try {
  frontier = validateFrontier(JSON.parse(readFileSync(join(root, 'research', `${run}-step7-v2`, 'frontier.json'), 'utf8')));
  if (frontier.run !== run) throw Error('wrong owning run');
} catch (error) {
  console.error(`ERROR invalid owning Step-7 frontier: ${error.message}`);
  process.exit(2);
}
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
    if (typeof id !== 'string' || !/^(?:def|lem|thm|prop|cor|ex|cex|fs|rem)-[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) {
      errors.push(`${manifest}: invalid owning item ID`); continue;
    }
    const owners = ownersByItem.get(id) ?? [];
    owners.push(manifest);
    ownersByItem.set(id, owners);
  }
}
if (!ownersByItem.size) errors.push('owning run manifests contain no items');

const itemsDir = join(root, 'items');
if (!existsSync(itemsDir)) { console.error(`ERROR items directory not found: ${itemsDir}`); process.exit(2); }
const current = Object.fromEntries(readdirSync(itemsDir).filter((name) => name.endsWith('.md')).sort().map((name) => {
  const id = name.slice(0, -3);
  return [id, shortHash(itemHashGuard(readFileSync(join(itemsDir, name), 'utf8')))];
}));
// Original subjects must retain an owner. Existing owned additions need a
// native creation record; genuine new items need their owning run manifest.
const approved = new Set(frontier.ids);
const auditorCreations = loadAuditorCreatedCertifications([7, 8].map(step =>
  join(root, 'research', `${run}-step${step}-auditor-certifications.json`)),
  { root, run, steps: [7, 8] });
for (const row of auditorCreations) approved.add(row.id);
const certifiedStep8 = new Set(auditorCreations.filter(row => row.step === 8).map(row => row.id));
const certificationPath = join(root, 'research', `${run}-step7-v2`, 'certification.json');
if (existsSync(certificationPath)) {
  const certification = JSON.parse(readFileSync(certificationPath, 'utf8'));
  if (certification.run !== run || !Array.isArray(certification.creations)) errors.push('invalid Step-7 creation inventory');
  else for (const row of certification.creations) if (typeof row.id === 'string') approved.add(row.id);
}
for (const id of ownersByItem.keys()) {
  if (!(id in baseline.hashes)) approved.add(id);
  if (!approved.has(id)) errors.push(`${id}: owning manifest item is outside the approved frontier and creation inventory`);
}
for (const id of approved) {
  const owners = ownersByItem.get(id) ?? [];
  if (owners.length !== 1) errors.push(`${id}: approved item expected exactly one owning run manifest, found ${owners.length}${owners.length ? ` (${owners.join(', ')})` : ''}`);
  if (!(id in current)) errors.push(`${id}: approved item is missing or deleted`);
}
const globalCreated = Object.keys(current).filter((id) => !(id in baseline.hashes)).sort();
const globalModified = Object.keys(current).filter((id) => id in baseline.hashes && current[id] !== baseline.hashes[id]).sort();
const globalDeleted = Object.keys(baseline.hashes).filter((id) => !(id in current)).sort();
const owned = id => approved.has(id) && ownersByItem.has(id);
const created = globalCreated.filter(owned);
const modified = globalModified.filter(owned);
const deleted = globalDeleted.filter(owned);
const excluded = [['created', globalCreated], ['modified', globalModified], ['deleted', globalDeleted]]
  .flatMap(([change, ids]) => ids.filter(id => !owned(id)).map(id => ({ id, change,
    baseline_guard: baseline.hashes[id] ?? null, current_guard: current[id] ?? null,
    reason: 'outside this run ownership and approved subject scope; not judged or accepted' })));

for (const id of deleted) errors.push(`${id}: item present at ${baselineLabel} was deleted`);
for (const id of created) {
  const owners = ownersByItem.get(id) ?? [];
  if (owners.length !== 1) errors.push(`${id}: newly created item expected exactly one owning run manifest, found ${owners.length}${owners.length ? ` (${owners.join(', ')})` : ''}`);
}
for (const id of modified) {
  const owners = ownersByItem.get(id) ?? [];
  if (owners.length > 1) errors.push(`${id}: modified item appears in ${owners.length} run manifests (${owners.join(', ')})`);
}

const publishedModified = modified.filter((id) => isPublishedItem(root, id));
const judgeItems = [...created, ...modified].filter(id => !isPublishedItem(root, id) && !certifiedStep8.has(id)).sort();
const receipt = { version: 2, run, baseline: baselineLabel, frontier_sha256: frontier.sha256,
  created, modified, published_modified: publishedModified, items: judgeItems, manifests, excluded };
const scopeManifest = [{ id: 'step8-changes', kind: 'A', items: judgeItems.map((id) => ({ id })) }];
const outPath = atRoot(outArg);
const scopeOutPath = atRoot(scopeOutArg);
if (list) {
  if (!errors.length) console.log(JSON.stringify(receipt));
} else if (check) {
  if (!existsSync(outPath)) errors.push(`receipt not found: ${outArg}`);
  else {
    let recorded;
    try { recorded = JSON.parse(readFileSync(outPath, 'utf8')); }
    catch { errors.push(`receipt is not valid JSON: ${outArg}`); }
    // Outside diagnostics describe the indexing instant; another run's next
    // edit cannot stale this run's mathematical subject receipt.
    const ownedReceipt = ({ excluded: _advisory, ...owned }) => owned;
    if (recorded && JSON.stringify(ownedReceipt(recorded)) !== JSON.stringify(ownedReceipt(receipt)))
      errors.push(`receipt disagrees with the current owned ${baselineLabel} delta`);
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

if (!list) console.log(`step8-changes: ${created.length} owned created, ${modified.length} owned modified, ${deleted.length} owned deleted; ${excluded.length} outside changes excluded since ${JSON.stringify(baselineLabel)}`);
for (const error of errors) console.error(`ERROR ${error}`);
process.exit(errors.length ? 1 : 0);
