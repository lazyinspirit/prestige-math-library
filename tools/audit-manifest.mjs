#!/usr/bin/env node
// audit-manifest.mjs — coverage checklist for the Beta/Alpha audit stage.
//
// Usage:
//   node tools/audit-manifest.mjs research/level<N>-batch-*.pages.json [--json] [--output receipt.json]
//
// It enumerates in-flight batch membership and every declared mathematical
// relationship from authored items on disk: logical `deps`, well-definedness
// `justified_by` discharges, orientation-only `forward_refs`, and recorded
// external mentions. It does NOT certify semantic correctness; it makes an
// omitted reader check visible by classifying each relationship as same-batch,
// cross-batch, published/backward, forward, or unresolved.
//
// TWO OF THOSE CLASSIFICATIONS ARE DEFECTS, AND THIS EXITS 1 ON THEM.
//
//   missing-source  a manifest lists an item id that is on no page of disk.
//                   The batch claims content that does not exist, and every
//                   downstream count of that batch is short by it.
//   unresolved      a declared `deps` / `justified_by` / `external_refs` target
//                   names no item and no alias, or names a DRAFT item that is
//                   in no batch of this run — the level resting on content
//                   nobody in this run is auditing.
//
// Until 2026-08-16 this file contained no `process.exit(1)` at all: it printed
// `missing-source: 3` and exited 0, so the 6c gate that runs it could only ever
// pass. A gate that cannot fail is decorative, and the engine reads exit codes,
// not prose. The summary line at the end is what the gate's liveness probe
// reads, so a run over an empty or mis-selected manifest set cannot pass as a
// clean audit either.

import { readFileSync, readdirSync, statSync, existsSync, writeFileSync } from 'node:fs';
import { join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const args = process.argv.slice(2);
const asJson = args.includes('--json');
const outputIndex = args.indexOf('--output');
const outputPath = outputIndex >= 0 ? args[outputIndex + 1] : null;
const files = args.filter((arg, index) =>
  arg !== '--json' && arg !== '--output' && !(outputIndex >= 0 && index === outputIndex + 1),
);
if (outputIndex >= 0 && !outputPath) {
  console.error('ERROR output-path: --output needs a path');
  process.exit(2);
}
if (!files.length) {
  console.error('usage: node tools/audit-manifest.mjs research/level<N>-batch-*.pages.json [--json] [--output receipt.json]');
  process.exit(2);
}

function split(src) {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  return m ? { fm: m[1], body: m[2] } : { fm: '', body: src };
}
function scalar(fm, key) {
  const m = fm.match(new RegExp(`^${key}:[ \\t]*(.*)$`, 'm'));
  if (!m) return '';
  return m[1].trim().replace(/^['"]|['"]$/g, '');
}
function nested(fm, parent, child) {
  const start = fm.search(new RegExp('^' + parent + ':[ \\t]*(?:#.*)?$', 'm'));
  if (start < 0) return '';
  const m = fm.slice(start).match(new RegExp('^[ \\t]+' + child + ':[ \\t]*(.*)$', 'm'));
  return m ? m[1].trim().replace(/^['"]|['"]$/g, '') : '';
}
function list(fm, key) {
  const m = fm.match(new RegExp(`^${key}:[ \\t]*(?:\\r?\\n((?:[ \\t]*-[^\\n]*\\r?\\n?)+)|\\[([^\\]]*)\\])`, 'm'));
  if (!m) return [];
  if (m[2] != null) return m[2].split(',').map((s) => s.trim().replace(/^['"]|['"]$/g, '')).filter(Boolean);
  return m[1].split(/\r?\n/).map((l) => l.replace(/^[ \t]*-[ \t]*/, '').trim().replace(/^['"]|['"]$/g, '')).filter(Boolean);
}
function walk(dir, out=[]) {
  if (!existsSync(dir)) return out;
  for (const f of readdirSync(dir)) {
    const full = join(dir, f);
    if (statSync(full).isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

const batches = new Map();
const itemBatch = new Map();
const batchPages = new Map();
for (const f of files) {
  const batch = basename(f).replace(/\.pages\.json$/, '');
  const pages = JSON.parse(readFileSync(f, 'utf8'));
  batches.set(batch, pages);
  batchPages.set(batch, pages.map((p) => p.id));
  for (const p of pages) for (const it of (p.items ?? [])) itemBatch.set(it.id, batch);
}

const items = new Map();
const aliases = new Map();
for (const full of walk(join(REPO, 'items')).filter((f) => f.endsWith('.md'))) {
  const { fm } = split(readFileSync(full, 'utf8'));
  const id = scalar(fm, 'id') || basename(full).replace(/\.md$/, '');
  items.set(id, {
    id,
    file: full.slice(REPO.length + 1),
    status: scalar(fm, 'status') || 'draft',
    statement_provenance: nested(fm, 'provenance', 'statement') || null,
    deps: list(fm, 'deps'),
    justified_by: list(fm, 'justified_by'),
    forward_refs: list(fm, 'forward_refs'),
    external_refs: list(fm, 'external_refs'),
  });
  for (const alias of list(fm, 'aliases')) aliases.set(alias, id);
}
const resolve = (id) => items.has(id) ? id : aliases.get(id);

const home = new Map();
for (const full of walk(join(REPO, 'library')).filter((f) => f.endsWith('.md') && !basename(f).startsWith('_'))) {
  const { fm } = split(readFileSync(full, 'utf8'));
  const page = scalar(fm, 'page') || basename(full).replace(/\.md$/, '');
  for (const id of [...list(fm, 'items'), ...list(fm, 'examples')]) if (!home.has(id)) home.set(id, page);
}

const edges = [];
function classify(source, target, edgeType) {
  const resolved = resolve(target);
  const targetItem = resolved && items.get(resolved);
  if (!targetItem) return { target: resolved ?? target, kind: 'unresolved' };
  // A declared orientation reference is forward by definition. Preserve that
  // fact even where the target is already published.
  if (edgeType === 'forward_ref') return { target: resolved, kind: 'forward' };
  const sourceBatch = itemBatch.get(source);
  const targetBatch = itemBatch.get(resolved);
  if (targetBatch === sourceBatch) return { target: resolved, kind: 'same-batch' };
  if (targetBatch) return { target: resolved, kind: 'cross-batch' };
  if (targetItem.status === 'published') return { target: resolved, kind: 'published-backward' };
  return { target: resolved, kind: 'unresolved' };
}

for (const [id, batch] of itemBatch) {
  const it = items.get(id);
  if (!it) {
    edges.push({ source: id, batch, target: null, edge_type: 'source', kind: 'missing-source', requires_semantic_audit: true });
    continue;
  }
  const relationships = [
    ['dependency', it.deps],
    ['well_definedness_discharge', it.justified_by],
    ['forward_ref', it.forward_refs],
    ['external_mention', it.external_refs],
  ];
  for (const [edge_type, targets] of relationships) {
    for (const declaredTarget of targets) {
      const classified = classify(id, declaredTarget, edge_type);
      const target = classified.target;
      edges.push({
        source: id,
        sourcePage: home.get(id) ?? null,
        batch,
        target,
        declared_target: declaredTarget,
        target_statement_provenance: target ? items.get(target)?.statement_provenance ?? null : null,
        targetPage: target ? home.get(target) ?? null : null,
        targetBatch: target ? itemBatch.get(target) ?? null : null,
        edge_type,
        kind: classified.kind,
        // Forward references and external mentions are not proof premises, but
        // their surrounding claims still need an explicit semantic read.
        requires_semantic_audit: true,
      });
    }
  }
}

const summary = {};
for (const e of edges) summary[e.kind] = (summary[e.kind] ?? 0) + 1;
const out = { batches: Object.fromEntries(batchPages), summary, edges };
const json = JSON.stringify(out, null, 2);
if (outputPath) {
  const resolved = outputPath.startsWith('/') ? outputPath : join(process.cwd(), outputPath);
  writeFileSync(resolved, `${json}\n`);
}
if (asJson && !outputPath) console.log(json);
else if (!asJson) {
  console.log('# Audit manifest');
  console.log('\n## Batches');
  for (const [b, pages] of batchPages) console.log(`- ${b}: ${pages.join(', ')}`);
  console.log('\n## Edge summary');
  for (const [k, v] of Object.entries(summary).sort()) console.log(`- ${k}: ${v}`);
  console.log('\n## Relationships to audit outside a single batch');
  for (const e of edges.filter((x) => x.kind !== 'same-batch')) {
    console.log(`- [${e.edge_type}; ${e.kind}] ${e.source} (${e.sourcePage ?? '?'}, ${e.batch}) -> ${e.target ?? '?'} (${e.targetPage ?? '?'})`);
  }
}

// The defects, one named line each, then a summary line the gate can read.
// Stdout is a pure JSON document when `--json` is given without `--output`, so
// in that one case the human-readable tail goes to stderr; the engine reads
// both streams.
const DEFECT_KINDS = ['missing-source', 'unresolved'];
const say = (asJson && !outputPath) ? console.error : console.log;
const defects = edges.filter((e) => DEFECT_KINDS.includes(e.kind));
for (const e of defects) {
  say(e.kind === 'missing-source'
    ? `ERROR missing-source: ${e.batch} lists ${e.source}, which is on no page of items/`
    : `ERROR unresolved: ${e.source} (${e.batch}) declares ${e.edge_type} `
      + `"${e.declared_target}", which resolves to no published or in-run item`);
}
say(`audit-manifest: ${edges.length} relationship(s) over ${itemBatch.size} item(s) `
  + `in ${batches.size} batch(es); ${defects.length} defect(s)`);
process.exit(defects.length ? 1 : 0);
