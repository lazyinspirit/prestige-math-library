#!/usr/bin/env node
// audit-manifest.mjs — coverage checklist for the Beta/Alpha audit stage.
//
// Usage:
//   node tools/audit-manifest.mjs research/level<N>-batch-*.pages.json [--json]
//
// It enumerates in-flight batch membership and dependency edges from authored
// items on disk. It does NOT certify semantic correctness; it makes omissions in
// the human/LLM audit visible by classifying each edge as same-batch,
// cross-batch, published/backward, forward, or unresolved.

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const args = process.argv.slice(2);
const asJson = args.includes('--json');
const files = args.filter((a) => a !== '--json');
if (!files.length) {
  console.error('usage: node tools/audit-manifest.mjs research/level<N>-batch-*.pages.json [--json]');
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
for (const full of walk(join(REPO, 'items')).filter((f) => f.endsWith('.md'))) {
  const { fm } = split(readFileSync(full, 'utf8'));
  const id = scalar(fm, 'id') || basename(full).replace(/\.md$/, '');
  items.set(id, { id, file: full.slice(REPO.length + 1), status: scalar(fm, 'status') || 'draft', deps: list(fm, 'deps'), forward_refs: list(fm, 'forward_refs') });
}

const home = new Map();
for (const full of walk(join(REPO, 'library')).filter((f) => f.endsWith('.md') && !basename(f).startsWith('_'))) {
  const { fm } = split(readFileSync(full, 'utf8'));
  const page = scalar(fm, 'page') || basename(full).replace(/\.md$/, '');
  for (const id of [...list(fm, 'items'), ...list(fm, 'examples')]) if (!home.has(id)) home.set(id, page);
}

const edges = [];
for (const [id, batch] of itemBatch) {
  const it = items.get(id);
  if (!it) {
    edges.push({ source: id, batch, target: null, kind: 'missing-source' });
    continue;
  }
  for (const target of it.deps) {
    const tb = itemBatch.get(target);
    const targetItem = items.get(target);
    let kind = 'unresolved';
    if (tb === batch) kind = 'same-batch';
    else if (tb) kind = 'cross-batch';
    else if (targetItem?.status === 'published') kind = 'published-backward';
    else if (it.forward_refs.includes(target)) kind = 'forward';
    edges.push({ source: id, sourcePage: home.get(id) ?? null, batch, target, targetPage: home.get(target) ?? null, targetBatch: tb ?? null, kind });
  }
}

const summary = {};
for (const e of edges) summary[e.kind] = (summary[e.kind] ?? 0) + 1;
const out = { batches: Object.fromEntries(batchPages), summary, edges };
if (asJson) console.log(JSON.stringify(out, null, 2));
else {
  console.log('# Audit manifest');
  console.log('\n## Batches');
  for (const [b, pages] of batchPages) console.log(`- ${b}: ${pages.join(', ')}`);
  console.log('\n## Edge summary');
  for (const [k, v] of Object.entries(summary).sort()) console.log(`- ${k}: ${v}`);
  console.log('\n## Edges to audit outside a single batch');
  for (const e of edges.filter((x) => x.kind !== 'same-batch')) {
    console.log(`- [${e.kind}] ${e.source} (${e.sourcePage ?? '?'}, ${e.batch}) -> ${e.target ?? '?'} (${e.targetPage ?? '?'})`);
  }
}
