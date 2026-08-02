#!/usr/bin/env node
// genrisk.mjs — the generated-statement blast-radius ledger for the
// published-page audit (AUDIT-WORKFLOW.md §6).
//
//   node tools/genrisk.mjs [--out research/audit/genrisk.json] [--json]
//   node tools/genrisk.mjs --receipt research/audit/genrisk.json
//
// SEEDS are published items whose provenance.statement is ai-generated, plus
// the legacy self-declared `authorship: ai-generated` items that have not yet
// received component provenance (owner decision D5: those are seeded from wave
// 0 regardless of when their wave is audited). The CONE of a seed is its
// transitive reverse-`deps` closure plus every direct citation consumer — the
// same consumer computation as impact-audit.mjs, run corpus-wide, because a
// dependence propagates while a mention does not. Seeds are ranked by cone
// size, the spine-audit ordering: the largest cones are the highest blast
// radius and get read first.
//
// Report mode recomputes seeds and cones from disk and REGENERATES the ledger,
// preserving each seed's recorded disposition by id, so a refresh after
// repairs never destroys Alpha's decisions. Receipt mode verifies that the
// ledger is current (same seeds, same cones) and that every LOAD-BEARING seed
// (nonzero cone) carries one concrete Alpha disposition:
//
//   retag               a deeper search found a source; provenance corrected
//   restate             repaired to a source-checked equivalent/narrower form
//   unfold              elementary content inlined into consumers; edge removed
//   narrow              weakened to what proof and sources license
//   verified-generated  stays ai-generated: counterexample-searched, refuter-
//                       read, judged; the cone stays flagged and content-policy
//                       forbids future batches from citing it
//   owner-queue         needs a deletion/id change/reading-order call; queued
//                       for the owner at A10 with evidence
//
// A disposition names its reviewer and concrete notes. A seed with an empty
// cone is non-load-bearing; it needs no disposition, only its ordinary
// truth-risk audit. This tool verifies accountable coverage, not mathematics.

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const argv = process.argv.slice(2);
const asJson = argv.includes('--json');
const outPath = option('--out') ?? 'research/audit/genrisk.json';
const receiptPath = option('--receipt');

const errors = [];
const warnings = [];
const error = (code, message, id = null) => errors.push({ code, message, id });
const warn = (code, message, id = null) => warnings.push({ code, message, id });

const DISPOSITIONS = new Set(['retag', 'restate', 'unfold', 'narrow', 'verified-generated', 'owner-queue']);

function split(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  return match ? { fm: match[1], body: match[2] } : { fm: '', body: source };
}
function scalar(fm, key) {
  const match = fm.match(new RegExp(`^${key}:[ \\t]*(.*)$`, 'm'));
  return match ? match[1].trim().replace(/^['"]|['"]$/g, '') || undefined : undefined;
}
function nested(fm, parent, child) {
  const start = fm.search(new RegExp(`^${parent}:[ \\t]*(?:#.*)?$`, 'm'));
  if (start < 0) return undefined;
  const rest = fm.slice(start);
  const match = rest.match(new RegExp(`^[ \\t]+${child}:[ \\t]*(.*)$`, 'm'));
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
    status: scalar(fm, 'status'),
    statement: nested(fm, 'provenance', 'statement'),
    authorship: scalar(fm, 'authorship'),
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

const seedItems = [...items.values()].filter((item) => item.status === 'published' && (
  item.statement === 'ai-generated' ||
  (!item.statement && item.authorship === 'ai-generated')
));

const seeds = seedItems.map((item) => {
  const logical = new Set();
  const work = [...(reverseDeps.get(item.id) ?? [])];
  while (work.length) {
    const consumer = work.pop();
    if (logical.has(consumer)) continue;
    logical.add(consumer);
    for (const next of reverseDeps.get(consumer) ?? []) work.push(next);
  }
  const citations = directCitations.get(item.id) ?? new Map();
  const cone = new Set([...logical, ...citations.keys()]);
  cone.delete(item.id);
  return {
    id: item.id,
    file: item.file,
    source: item.statement === 'ai-generated' ? 'provenance' : 'legacy-authorship',
    cone_size: cone.size,
    logical_consumers: [...logical].sort(),
    direct_citation_consumers: [...citations].map(([id, channels]) => ({ id, via: [...channels].sort() })).sort((a, b) => a.id.localeCompare(b.id)),
  };
}).sort((a, b) => b.cone_size - a.cone_size || a.id.localeCompare(b.id));

const coneFingerprint = (seed) => JSON.stringify([seed.id, seed.source, seed.logical_consumers, seed.direct_citation_consumers]);

if (receiptPath) {
  let ledger;
  try { ledger = JSON.parse(readFileSync(resolvePath(receiptPath), 'utf8')); }
  catch (cause) { console.error(`cannot read ${receiptPath}: ${cause.message}`); process.exit(2); }
  if (ledger.version !== 1 || !Array.isArray(ledger.seeds)) error('receipt-shape', `${receiptPath}: expected {version: 1, seeds: []}`);
  const recorded = new Map((ledger.seeds ?? []).map((seed) => [seed?.id, seed]));
  for (const seed of seeds) {
    const entry = recorded.get(seed.id);
    if (!entry) { error('receipt-seed-missing', `${seed.id}: current seed absent from the ledger; regenerate`, seed.id); continue; }
    if (coneFingerprint(entry) !== coneFingerprint(seed)) {
      error('receipt-stale-cone', `${seed.id}: recorded cone no longer matches disk; regenerate (dispositions are preserved)`, seed.id);
    }
    const disposition = entry.disposition ?? {};
    if (!seed.cone_size) continue;
    if (!DISPOSITIONS.has(disposition.status)) {
      error('receipt-disposition-missing', `${seed.id}: load-bearing seed (cone ${seed.cone_size}) needs a concrete disposition (${[...DISPOSITIONS].join(', ')})`, seed.id);
      continue;
    }
    if (typeof disposition.by !== 'string' || !disposition.by.trim()) error('receipt-disposition-reviewer', `${seed.id}: disposition needs its reviewer`, seed.id);
    if (typeof disposition.notes !== 'string' || !disposition.notes.trim()) error('receipt-disposition-notes', `${seed.id}: disposition needs concrete notes`, seed.id);
    // retag/restate/unfold/narrow claim the seed's generated load-bearing
    // surface was removed; a still-generated, still-load-bearing seed can only
    // be verified-generated or owner-queue. Verify the claim against disk.
    const stillGenerated = items.get(seed.id)?.statement === 'ai-generated' ||
      (!items.get(seed.id)?.statement && items.get(seed.id)?.authorship === 'ai-generated');
    const logicalCone = seed.logical_consumers.length > 0;
    if (['retag', 'restate'].includes(disposition.status) && stillGenerated) {
      error('receipt-disposition-unapplied', `${seed.id}: disposition ${disposition.status} but provenance.statement is still ai-generated on disk`, seed.id);
    }
    if (['unfold', 'narrow'].includes(disposition.status) && stillGenerated && logicalCone) {
      error('receipt-disposition-unapplied', `${seed.id}: disposition ${disposition.status} but the seed is still ai-generated with a nonzero reverse-deps cone`, seed.id);
    }
    if (disposition.status === 'verified-generated') {
      warn('verified-generated-seed', `${seed.id}: remains an ai-generated load-bearing seed (cone ${seed.cone_size}); future batches may not cite it`, seed.id);
    }
  }
  for (const id of recorded.keys()) {
    if (!seeds.some((seed) => seed.id === id)) warn('receipt-retired-seed', `${id}: recorded seed is no longer ai-generated on disk (retag applied); keep the row for history or regenerate`, id);
  }
  report(`genrisk receipt: ${seeds.length} seed(s), ${seeds.filter((seed) => seed.cone_size).length} load-bearing`);
  process.exit(errors.length ? 1 : 0);
}

// Report mode: regenerate, preserving dispositions by seed id.
let prior = new Map();
if (existsSync(resolvePath(outPath))) {
  try {
    const previous = JSON.parse(readFileSync(resolvePath(outPath), 'utf8'));
    prior = new Map((previous.seeds ?? []).map((seed) => [seed?.id, seed?.disposition]));
  } catch { warn('prior-unreadable', `${outPath}: existing ledger was unreadable; dispositions start empty`); }
}
const ledger = {
  version: 1,
  generated_at: new Date().toISOString(),
  seeds: seeds.map((seed) => ({
    ...seed,
    disposition: prior.get(seed.id) ?? { status: 'pending', by: '', notes: '' },
  })),
};
writeFileSync(resolvePath(outPath), `${JSON.stringify(ledger, null, 2)}\n`);
report(`genrisk: wrote ${outPath} — ${seeds.length} seed(s), ${seeds.filter((seed) => seed.cone_size).length} load-bearing, largest cone ${seeds[0]?.cone_size ?? 0} (${seeds[0]?.id ?? 'none'})`);
process.exit(errors.length ? 1 : 0);

function report(headline) {
  if (asJson) { console.log(JSON.stringify({ headline, seeds, errors, warnings }, null, 2)); return; }
  console.log(headline);
  for (const seed of seeds) console.log(`  ${String(seed.cone_size).padStart(4)}  ${seed.id}${seed.source === 'legacy-authorship' ? '  (legacy authorship tag)' : ''}`);
  for (const entry of warnings) console.warn(`WARN ${entry.code}${entry.id ? ` [${entry.id}]` : ''}: ${entry.message}`);
  for (const entry of errors) console.error(`ERROR ${entry.code}${entry.id ? ` [${entry.id}]` : ''}: ${entry.message}`);
}
