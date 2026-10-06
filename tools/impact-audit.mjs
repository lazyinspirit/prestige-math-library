#!/usr/bin/env node
// impact-audit.mjs — make the downstream blast radius of an interface change
// explicit and gate its audit receipt.
//
//   node tools/impact-audit.mjs --touches research/level<n>-touches.json \
//     --from after-authoring [--to step-7] [--receipt research/level<n>-impact.json]
//   node tools/impact-audit.mjs ... --template research/level<n>-impact.json
//
// `touchlog` stores both a full mathematical hash and a public-interface hash.
// This tool deliberately reacts only to interface changes: a proof-only repair
// must still clear its own audit and judge, but reopening every transitive
// consumer for a wording repair would drown the actual defect signal.  Changes
// to title, logical metadata, Facts, Statement/Definition/Example, or Remarks
// enter the legacy surface inventory. A hash-bound claim-preservation receipt
// can prove an original Statement/Definition unchanged and retain that event as
// maintenance rather than create consumer review duties. Other surface changes
// require documented consumer review. --direct-boundary stops propagation after one dependency
// edge: a consumer whose exported interface changes is separately a changed
// source in this window (or in the next window after a later repair).
// --items-file gates selected consumers while retaining external changed suppliers
// that actually reach them through the complete dependency/citation graph.

import { readFileSync, writeFileSync, readdirSync, existsSync, realpathSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { itemHashGuard, itemSurfaceHash, shortHash } from './item-hash.mjs';
import { frontmatterList } from './frontmatter-list.mjs';
import { logicalConsumers } from './impact-scope.mjs';
import { parseItemScope, includesItem, unknownItems } from './item-scope.mjs';

const REPO = join(fileURLToPath(new URL('.', import.meta.url)), '..');
let itemScope;
try { itemScope = parseItemScope(process.argv.slice(2)); }
catch (cause) { die(cause.message); }
const argv = itemScope.args;
const asJson = argv.includes('--json');
const touchesPath = option('--touches');
const fromLabel = option('--from');
const toLabel = option('--to');
const useCurrent = argv.includes('--current');
const directBoundary = argv.includes('--direct-boundary');
const receiptPath = option('--receipt');
const templatePath = option('--template');
const refreshPath = option('--refresh-receipt');
if (!touchesPath || !fromLabel) usage();
if (receiptPath && templatePath) die('use either --receipt or --template, not both');

const errors = [];
const warnings = [];
const error = (code, message) => errors.push({ code, message });
const warn = (code, message) => warnings.push({ code, message });

function split(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  return match ? { fm: match[1], body: match[2] } : { fm: '', body: source };
}
function scalar(fm, key) {
  const match = fm.match(new RegExp(`^${key}:[ \\t]*(.*)$`, 'm'));
  return match ? match[1].trim().replace(/^['"]|['"]$/g, '') || undefined : undefined;
}
function list(fm, key) { return frontmatterList(fm, key); }
function option(flag) {
  const index = argv.indexOf(flag);
  return index >= 0 ? argv[index + 1] : undefined;
}
function resolvePath(path) { return path.startsWith('/') ? path : join(process.cwd(), path); }
function die(message) { console.error(message); process.exit(2); }

let ledger;
try { ledger = JSON.parse(readFileSync(resolvePath(touchesPath), 'utf8')); }
catch (cause) { die(`cannot read touch ledger ${touchesPath}: ${cause.message}`); }
const snapshots = Array.isArray(ledger?.snapshots) ? ledger.snapshots : [];
// A label resolves to its MOST RECENT snapshot (the same rule step7-guard
// uses): a re-entered stage re-takes its snapshot under the same label, and
// first-match resolution would hide every edit made after the first attempt.
const byLabel = (label) => [...snapshots].reverse().find((snapshot) => snapshot?.label === label);
const before = byLabel(fromLabel);
const liveSnapshot = () => ({
  label: 'current workspace',
  hashes: Object.fromEntries(readdirSync(join(REPO, 'items')).filter((name) => name.endsWith('.md')).sort()
    .map((name) => [name.slice(0, -3), shortHash(itemHashGuard(readFileSync(join(REPO, 'items', name), 'utf8')))])),
  surfaces: Object.fromEntries(readdirSync(join(REPO, 'items')).filter((name) => name.endsWith('.md')).sort()
    .map((name) => [name.slice(0, -3), itemSurfaceHash(readFileSync(join(REPO, 'items', name), 'utf8')).slice(0, 16)])),
});
const after = useCurrent ? liveSnapshot() : toLabel ? byLabel(toLabel) : snapshots.at(-1);
if (!before) die(`touch ledger has no snapshot labelled "${fromLabel}"`);
if (!after) die(toLabel ? `touch ledger has no snapshot labelled "${toLabel}"` : 'touch ledger has no snapshots');
if (!before.surfaces || !after.surfaces) {
  die('selected snapshots predate public-surface fingerprints; take a fresh baseline and post-repair snapshot with touchlog.mjs');
}

const surfaceChanges = [...new Set([...Object.keys(before.surfaces), ...Object.keys(after.surfaces)])]
  .filter((id) => before.surfaces[id] !== after.surfaces[id]).sort();

// Legacy surface fingerprints include proof dependencies and other metadata.
// Exact retained baseline bytes can prove that an original Statement/Definition
// survived such a repair. Keep the surface event as maintenance inventory;
// it does not create consumer review duties for an unchanged supplier claim.
const sha = value => createHash('sha256').update(value).digest('hex');
const maintenance = new Set();
const scopeReceiptPath = receiptPath ?? refreshPath;
let scopeReceipt = null;
if (scopeReceiptPath && existsSync(resolvePath(scopeReceiptPath))) {
  try { scopeReceipt = JSON.parse(readFileSync(resolvePath(scopeReceiptPath), 'utf8')); }
  catch { /* ordinary receipt parsing below reports the original error */ }
}
function boundResearch(link) {
  const path = resolvePath(String(link?.path ?? ''));
  if (!/^[a-f0-9]{64}$/.test(link?.sha256 ?? '')
    || !realpathSync(path).startsWith(`${realpathSync(join(REPO, 'research'))}/`))
    throw Error('claim preservation requires a hash-bound research file');
  const bytes = readFileSync(path);
  if (sha(bytes) !== link.sha256) throw Error('claim preservation evidence hash mismatch');
  return bytes;
}
function originalClaim(text, kind) {
  const claims = [...split(text).body.matchAll(/^## (Statement|Definition)[ \t]*\r?\n[\s\S]*?(?=^## |$(?![\s\S]))/gm)];
  const heading = kind === 'definition' ? 'Definition' : 'Statement';
  if (!['definition', 'lemma', 'theorem', 'proposition', 'corollary'].includes(kind)
    || claims.length !== 1 || claims[0][1] !== heading
    || !claims[0][0].replace(/^##[^\n]*\n/, '').trim())
    throw Error('claim preservation needs exactly one nonempty original Statement/Definition');
  return claims[0][0];
}
if (scopeReceipt?.claim_preservations !== undefined) {
  if (!Array.isArray(scopeReceipt.claim_preservations)) error('receipt-claim-preservation', 'claim_preservations must be an array');
  else for (const link of scopeReceipt.claim_preservations) {
    try {
      const proof = JSON.parse(boundResearch(link).toString('utf8'));
      if (proof.version !== 1 || proof.policy !== 'impact-claim-preservation-v1'
        || proof.owner !== true || proof.owner_identity !== '/root'
        || !Number.isFinite(Date.parse(proof.at)) || !String(proof.reason ?? '').trim()
        || !/^[a-zA-Z0-9_-]+$/.test(proof.id ?? '')
        || !surfaceChanges.includes(proof.id) || maintenance.has(proof.id)
        || proof.window?.before_snapshot_sha256 !== sha(JSON.stringify(before))
        || proof.window?.after_snapshot_sha256 !== sha(JSON.stringify(after))
        || proof.window?.from !== before.label || proof.window?.to !== after.label)
        throw Error('invalid claim preservation identity, authority or frozen window');
      const old = boundResearch(proof.before).toString('utf8');
      const now = readFileSync(join(REPO, 'items', `${proof.id}.md`), 'utf8');
      const oldFm = split(old).fm, newFm = split(now).fm;
      const kind = scalar(oldFm, 'kind');
      if (scalar(oldFm, 'id') !== proof.id || scalar(newFm, 'id') !== proof.id
        || kind !== scalar(newFm, 'kind')
        || shortHash(itemHashGuard(old)) !== before.hashes?.[proof.id]
        || shortHash(itemSurfaceHash(old)) !== before.surfaces[proof.id]
        || itemHashGuard(now) !== proof.after?.guard_sha256
        || itemSurfaceHash(now) !== proof.after?.surface_sha256
        || shortHash(itemHashGuard(now)) !== after.hashes?.[proof.id]
        || shortHash(itemSurfaceHash(now)) !== after.surfaces[proof.id]
        || originalClaim(old, kind) !== originalClaim(now, kind)
        || sha(originalClaim(old, kind)) !== proof.claim_sha256)
        throw Error('claim preservation baseline/current carriers or literal claim mismatch');
      maintenance.add(proof.id);
    } catch (cause) { error('receipt-claim-preservation', `${scopeReceiptPath}: ${cause.message}`); }
  }
}

const items = new Map();
const aliases = new Map();
for (const file of readdirSync(join(REPO, 'items')).sort()) {
  if (!file.endsWith('.md')) continue;
  const source = readFileSync(join(REPO, 'items', file), 'utf8');
  const { fm, body } = split(source);
  const id = scalar(fm, 'id') ?? basename(file, '.md');
  items.set(id, {
    id,
    file: `items/${file}`,
    deps: list(fm, 'deps'),
    justified_by: list(fm, 'justified_by'),
    forward_refs: list(fm, 'forward_refs'),
    external_refs: list(fm, 'external_refs'),
    links: [...body.matchAll(/\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g)].map((match) => match[1].trim()),
  });
  for (const alias of list(fm, 'aliases')) aliases.set(alias, id);
}
const resolve = (id) => items.has(id) ? id : aliases.get(id);
const unknown = unknownItems(itemScope, items.keys());
if (unknown.length) die(`item selection contains unknown item IDs: ${unknown.join(', ')}`);

const reverseDeps = new Map();
const directCitations = new Map();
for (const item of items.values()) {
  for (const raw of item.deps) {
    const target = resolve(raw);
    if (!target) continue;
    if (!reverseDeps.has(target)) reverseDeps.set(target, new Set());
    reverseDeps.get(target).add(item.id);
  }
  for (const [channel, raws] of Object.entries({
    deps: item.deps,
    justified_by: item.justified_by,
    forward_refs: item.forward_refs,
    external_refs: item.external_refs,
    wikilink: item.links,
  })) {
    for (const raw of raws) {
      const target = resolve(raw);
      if (!target) continue;
      if (!directCitations.has(target)) directCitations.set(target, new Map());
      const byConsumer = directCitations.get(target);
      if (!byConsumer.has(item.id)) byConsumer.set(item.id, new Set());
      byConsumer.get(item.id).add(channel);
    }
  }
}

const allImpacts = [];
for (const source of surfaceChanges) {
  const logical = logicalConsumers(reverseDeps, source, { directBoundary });
  const citations = directCitations.get(source) ?? new Map();
  const required = new Set([...logical, ...citations.keys()]);
  required.delete(source);
  // Keep the complete graph above as prerequisite context. An external
  // changed supplier remains a source event when it actually reaches a
  // selected consumer; unrelated source events cannot invalidate this scope.
  const scopedRequired = [...required].filter((id) => includesItem(itemScope, id)).sort();
  if (!includesItem(itemScope, source) && !scopedRequired.length) continue;
  allImpacts.push({
    source,
    source_exists: items.has(source),
    logical_consumers: [...logical].filter((id) => includesItem(itemScope, id)).sort(),
    direct_citation_consumers: [...citations].filter(([id]) => includesItem(itemScope, id))
      .map(([id, channels]) => ({ id, via: [...channels].sort() })).sort((a, b) => a.id.localeCompare(b.id)),
    required_review: scopedRequired,
  });
}
const impacts = allImpacts.filter(impact => !maintenance.has(impact.source));
const maintenanceImpacts = allImpacts.filter(impact => maintenance.has(impact.source))
  .map(({ required_review: consumers, ...impact }) => ({ ...impact, consumers }));
const changed = impacts.map(impact => impact.source);
const required = [...new Set(impacts.flatMap((impact) => impact.required_review))].sort();

const template = {
  version: 1,
  reviewer: '',
  source: { touch_ledger: touchesPath, from: before.label, to: after.label },
  ...(directBoundary ? { scope: 'direct-boundary' } : {}),
  changed_interfaces: changed,
  required_review: required,
  dispositions: required.map((id) => ({ id, status: 'pending', notes: '' })),
};
if (templatePath) {
  writeFileSync(resolvePath(templatePath), `${JSON.stringify(template, null, 2)}\n`);
  console.log(`impact-audit: wrote review template ${templatePath} for ${changed.length} changed interface(s) and ${required.length} affected item(s)`);
  process.exit(0);
}

// --refresh-receipt: bring a STALE receipt up to the current computation
// without losing a single written disposition. frontier-15 ended with its
// receipt one stage stale — 347 dispositions from 5b against 350 affected
// today — because nothing owned regenerating it after step-8 edits. This
// syncs the computed scopes and ADDS `pending` rows for newly-affected ids;
// `pending` is not a valid status, so the receipt check stays red exactly
// until an Alpha writes the real dispositions. Existing dispositions are
// never modified and never deleted (an id that left the impact set keeps its
// row as history; the check only warns on extras).
if (refreshPath) {
  if (errors.length) die(errors.map(entry => `${entry.code}: ${entry.message}`).join('\n'));
  let receipt = template;
  if (existsSync(resolvePath(refreshPath))) {
    try { receipt = JSON.parse(readFileSync(resolvePath(refreshPath), 'utf8')); }
    catch (cause) { die(`${refreshPath}: unreadable — ${cause.message}`); }
  }
  receipt.version = 1;
  receipt.source = template.source;
  if (directBoundary) receipt.scope = template.scope;
  receipt.changed_interfaces = changed;
  receipt.required_review = required;
  if (maintenance.size || receipt.maintenance_changes !== undefined || receipt.maintenance_impacts !== undefined) {
    receipt.maintenance_changes = [...maintenance].sort();
    receipt.maintenance_impacts = maintenanceImpacts;
  }
  receipt.dispositions = Array.isArray(receipt.dispositions) ? receipt.dispositions : [];
  const have = new Set(receipt.dispositions.map((d) => d?.id));
  const added = required.filter((id) => !have.has(id));
  for (const id of added) receipt.dispositions.push({ id, status: 'pending', notes: '' });
  writeFileSync(resolvePath(refreshPath), `${JSON.stringify(receipt, null, 2)}\n`);
  console.log(`impact-audit: refreshed ${refreshPath} — ${changed.length} changed interface(s), `
    + `${required.length} affected, ${added.length} new pending disposition(s)${added.length ? `: ${added.join(', ')}` : ''}`);
  process.exit(0);
}

if (receiptPath) {
  let receipt;
  if (!existsSync(resolvePath(receiptPath))) {
    // A gate pointed at a receipt nobody generated used to die on a bare read
    // error, leaving the reviewer to discover the --template flow unaided.
    // Bootstrap: write the template where the receipt belongs and fail with
    // the remedy. The reviewer fills `reviewer` and every disposition; rerun
    // validates.
    writeFileSync(resolvePath(receiptPath), `${JSON.stringify(template, null, 2)}\n`);
    error('receipt-missing', `${receiptPath}: no receipt existed — wrote the template there with `
      + `${required.length} pending disposition(s); fill reviewer and every disposition, then re-run`);
  } else {
  try { receipt = JSON.parse(readFileSync(resolvePath(receiptPath), 'utf8')); }
  catch (cause) { error('receipt-read', `${receiptPath}: ${cause.message}`); }
  if (receipt) {
    if (receipt.version !== 1) error('receipt-version', `${receiptPath}: version must be 1`);
    if (directBoundary && receipt.scope !== template.scope) error('receipt-scope', `${receiptPath}: scope must be ${template.scope}`);
    if (typeof receipt.reviewer !== 'string' || !receipt.reviewer.trim()) error('receipt-reviewer', `${receiptPath}: reviewer is required`);
    if (!Array.isArray(receipt.changed_interfaces) || JSON.stringify([...receipt.changed_interfaces].sort()) !== JSON.stringify(changed)) {
      error('receipt-changed-scope', `${receiptPath}: changed_interfaces must exactly match the computed interface changes`);
    }
    if (!Array.isArray(receipt.required_review) || JSON.stringify([...receipt.required_review].sort()) !== JSON.stringify(required)) {
      error('receipt-impact-scope', `${receiptPath}: required_review must exactly match the computed downstream impact set`);
    }
    if (!Array.isArray(receipt.dispositions)) error('receipt-dispositions', `${receiptPath}: dispositions must be an array`);
    else {
      const dispositions = new Map();
      for (const entry of receipt.dispositions) {
        if (!entry || typeof entry.id !== 'string') { error('receipt-disposition-shape', `${receiptPath}: every disposition needs an item id`); continue; }
        if (dispositions.has(entry.id)) error('receipt-disposition-duplicate', `${receiptPath}: duplicate disposition for ${entry.id}`);
        dispositions.set(entry.id, entry);
        // Historical out-of-frontier findings do not become current gate subjects.
        if (itemScope.selected !== null && !required.includes(entry.id)) continue;
        if (!['still-licensed', 'repaired', 'not-load-bearing'].includes(entry.status)) {
          error('receipt-disposition-status', `${receiptPath}: ${entry.id} has an invalid or unresolved status`);
        }
        if (typeof entry.notes !== 'string' || !entry.notes.trim()) error('receipt-disposition-notes', `${receiptPath}: ${entry.id} needs a concrete review note`);
      }
      for (const id of required) if (!dispositions.has(id)) error('receipt-missing-impact', `${receiptPath}: no disposition for affected item ${id}`);
      for (const id of dispositions.keys()) if (!required.includes(id)) warn('receipt-extra-disposition', `${receiptPath}: ${id} is not in the computed impact set`);
    }
  }
  }
}

const summary = { changed_interfaces: changed.length, required_review: required.length, errors: errors.length, warnings: warnings.length };
const result = { summary, changed, impacts, required_review: required,
  ...(maintenance.size ? { maintenance_changes: [...maintenance].sort(), maintenance_impacts: maintenanceImpacts } : {}), errors, warnings };
if (asJson) console.log(JSON.stringify(result, null, 2));
else {
  console.log(`impact-audit: ${changed.length} changed public interface(s), ${required.length} affected item(s)`);
  for (const impact of impacts) console.log(`  ${impact.source}: ${impact.logical_consumers.length} logical, ${impact.direct_citation_consumers.length} direct citation consumer(s)`);
  for (const entry of warnings) console.warn(`WARN ${entry.code}: ${entry.message}`);
  for (const entry of errors) console.error(`ERROR ${entry.code}: ${entry.message}`);
}
// Let large JSON and diagnostic writes drain before exiting.
process.exitCode = errors.length ? 1 : 0;

function usage() {
  console.error('usage: node tools/impact-audit.mjs --touches <touches.json> --from <snapshot-label> [--to <snapshot-label>] [--direct-boundary] [--items-file <items.json>] [--receipt <impact.json> | --template <impact.json>] [--json]');
  process.exit(2);
}
