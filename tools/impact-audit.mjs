#!/usr/bin/env node
// impact-audit.mjs — make the downstream blast radius of an interface change
// explicit and gate its audit receipt.
//
//   node tools/impact-audit.mjs --touches research/level<n>-touches.json \
//     --from after-authoring [--to step-8] [--receipt research/level<n>-impact.json]
//   node tools/impact-audit.mjs ... --template research/level<n>-impact.json
//
// `touchlog` stores both a full mathematical hash and a public-interface hash.
// This tool deliberately reacts only to interface changes: a proof-only repair
// must still clear its own audit and judge, but reopening every transitive
// consumer for a wording repair would drown the actual defect signal.  Changes
// to title, logical metadata, Facts, Statement/Definition/Example, or Remarks
// require a documented review of every current logical consumer and every
// direct citation consumer.

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const argv = process.argv.slice(2);
const asJson = argv.includes('--json');
const touchesPath = option('--touches');
const fromLabel = option('--from');
const toLabel = option('--to');
const receiptPath = option('--receipt');
const templatePath = option('--template');
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
function list(fm, key) {
  const start = fm.search(new RegExp(`^${key}:[ \\t]*\\[`, 'm'));
  if (start < 0) return [];
  const open = fm.indexOf('[', start);
  let depth = 0;
  for (let index = open; index < fm.length; index += 1) {
    if (fm[index] === '[') depth += 1;
    else if (fm[index] === ']' && --depth === 0) {
      return fm.slice(open + 1, index).split(',')
        .map((value) => value.trim().replace(/^['"]|['"]$/g, '')).filter(Boolean);
    }
  }
  return [];
}
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
const before = snapshots.find((snapshot) => snapshot?.label === fromLabel);
const after = toLabel ? snapshots.find((snapshot) => snapshot?.label === toLabel) : snapshots.at(-1);
if (!before) die(`touch ledger has no snapshot labelled "${fromLabel}"`);
if (!after) die(toLabel ? `touch ledger has no snapshot labelled "${toLabel}"` : 'touch ledger has no snapshots');
if (!before.surfaces || !after.surfaces) {
  die('selected snapshots predate public-surface fingerprints; take a fresh baseline and post-repair snapshot with touchlog.mjs');
}

const changed = [...new Set([...Object.keys(before.surfaces), ...Object.keys(after.surfaces)])]
  .filter((id) => before.surfaces[id] !== after.surfaces[id]).sort();

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

const impacts = [];
for (const source of changed) {
  const logical = new Set();
  const work = [...(reverseDeps.get(source) ?? [])];
  while (work.length) {
    const consumer = work.pop();
    if (logical.has(consumer)) continue;
    logical.add(consumer);
    for (const next of reverseDeps.get(consumer) ?? []) work.push(next);
  }
  const citations = directCitations.get(source) ?? new Map();
  const required = new Set([...logical, ...citations.keys()]);
  required.delete(source);
  impacts.push({
    source,
    source_exists: items.has(source),
    logical_consumers: [...logical].sort(),
    direct_citation_consumers: [...citations].map(([id, channels]) => ({ id, via: [...channels].sort() })).sort((a, b) => a.id.localeCompare(b.id)),
    required_review: [...required].sort(),
  });
}
const required = [...new Set(impacts.flatMap((impact) => impact.required_review))].sort();

const template = {
  version: 1,
  reviewer: '',
  source: { touch_ledger: touchesPath, from: before.label, to: after.label },
  changed_interfaces: changed,
  required_review: required,
  dispositions: required.map((id) => ({ id, status: 'pending', notes: '' })),
};
if (templatePath) {
  writeFileSync(resolvePath(templatePath), `${JSON.stringify(template, null, 2)}\n`);
  console.log(`impact-audit: wrote review template ${templatePath} for ${changed.length} changed interface(s) and ${required.length} affected item(s)`);
  process.exit(0);
}

if (receiptPath) {
  let receipt;
  try { receipt = JSON.parse(readFileSync(resolvePath(receiptPath), 'utf8')); }
  catch (cause) { error('receipt-read', `${receiptPath}: ${cause.message}`); }
  if (receipt) {
    if (receipt.version !== 1) error('receipt-version', `${receiptPath}: version must be 1`);
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

const summary = { changed_interfaces: changed.length, required_review: required.length, errors: errors.length, warnings: warnings.length };
const result = { summary, changed, impacts, required_review: required, errors, warnings };
if (asJson) console.log(JSON.stringify(result, null, 2));
else {
  console.log(`impact-audit: ${changed.length} changed public interface(s), ${required.length} affected item(s)`);
  for (const impact of impacts) console.log(`  ${impact.source}: ${impact.logical_consumers.length} logical, ${impact.direct_citation_consumers.length} direct citation consumer(s)`);
  for (const entry of warnings) console.warn(`WARN ${entry.code}: ${entry.message}`);
  for (const entry of errors) console.error(`ERROR ${entry.code}: ${entry.message}`);
}
process.exit(errors.length ? 1 : 0);

function usage() {
  console.error('usage: node tools/impact-audit.mjs --touches <touches.json> --from <snapshot-label> [--to <snapshot-label>] [--receipt <impact.json> | --template <impact.json>] [--json]');
  process.exit(2);
}
