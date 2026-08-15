#!/usr/bin/env node
// frontier-13 step-4 splice, one batch at a time (lead Alpha, group A).
//
//   node scratchpad/frontier-13-splice.mjs <batchNumber> [--dry]
//
// Splices research/frontier-13-batch-<i>.pages.json item lists into
// research/plan-spec.json. Keeps the spec's page metadata, takes the UNION of
// `requires` (logging any disagreement), and hard-fails on an id clash.

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const REPO = '/Users/ianx/Projects/prestige-math-library';
const batch = process.argv[2];
const dry = process.argv.includes('--dry');
if (!batch) { console.error('usage: frontier-13-splice.mjs <batch> [--dry]'); process.exit(2); }

const specPath = join(REPO, 'research/plan-spec.json');
const raw = readFileSync(specPath, 'utf8');
const spec = JSON.parse(raw);
const batchPages = JSON.parse(readFileSync(join(REPO, `research/frontier-13-batch-${batch}.pages.json`), 'utf8'));
const bpages = Array.isArray(batchPages) ? batchPages : (batchPages.pages ?? Object.values(batchPages));

const specById = new Map(spec.pages.map((p) => [p.id, p]));
const fatal = [];
const log = [];

// every id declared anywhere in the spec, mapped to its page (before this splice)
const declaredElsewhere = new Map();
for (const p of spec.pages) for (const it of p.items ?? []) {
  if (bpages.some((b) => b.id === p.id)) continue;   // this batch's own prior content
  declaredElsewhere.set(it.id, p.id);
}

// ids already composed onto a published page, with their home
const homePageOf = new Map();
const walk = (dir) => {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const fp = join(dir, e.name);
    if (e.isDirectory()) walk(fp);
    else if (e.name.endsWith('.md') && !e.name.startsWith('_')) {
      const src = readFileSync(fp, 'utf8');
      const pageId = src.match(/^page:\s*(\S+)/m)?.[1] ?? e.name.slice(0, -3);
      for (const key of ['items', 'examples']) {
        const m = src.match(new RegExp(`^${key}:\\s*\\[([\\s\\S]*?)\\]`, 'm'));
        if (m) for (const id of m[1].split(',').map((s) => s.trim())) if (id && !homePageOf.has(id)) homePageOf.set(id, pageId);
      }
    }
  }
};
walk(join(REPO, 'library'));

let spliced = 0;
const seenThisBatch = new Map();
const pagesTouched = [];

for (const bp of bpages) {
  const sp = specById.get(bp.id);
  if (!sp) { fatal.push(`page ${bp.id} is not declared in plan-spec.json`); continue; }

  // metadata: the spec's wins; report every disagreement
  for (const k of ['order', 'kind', 'category', 'title', 'companion']) {
    const a = sp[k], b = bp[k];
    if (b !== undefined && String(a) !== String(b))
      log.push(`metadata ${bp.id}.${k}: spec=${JSON.stringify(a)} batch=${JSON.stringify(b)} — SPEC KEPT`);
  }

  // requires: union, spec order first
  const specReq = sp.requires ?? [];
  const batchReq = bp.requires ?? [];
  const union = [...specReq];
  for (const r of batchReq) if (!union.includes(r)) { union.push(r); log.push(`requires ${bp.id}: batch adds "${r}" — UNIONED IN`); }
  for (const r of specReq) if (!batchReq.includes(r)) log.push(`requires ${bp.id}: spec has "${r}", batch omits it — KEPT`);

  // id clashes
  for (const it of bp.items ?? []) {
    if (seenThisBatch.has(it.id)) fatal.push(`duplicate id inside batch ${batch}: ${it.id} on ${seenThisBatch.get(it.id)} and ${bp.id}`);
    seenThisBatch.set(it.id, bp.id);
    if (declaredElsewhere.has(it.id)) fatal.push(`id clash: ${it.id} already declared on planned page ${declaredElsewhere.get(it.id)}`);
    const home = homePageOf.get(it.id);
    if (home && home !== bp.id) fatal.push(`id clash: ${it.id} is already composed onto published page ${home} (ids are IMMUTABLE)`);
  }

  if (!dry && !fatal.length) {
    sp.requires = union;
    sp.items = JSON.parse(JSON.stringify(bp.items ?? []));
  }
  spliced += (bp.items ?? []).length;
  pagesTouched.push({ id: bp.id, order: sp.order, kind: sp.kind, items: (bp.items ?? []).length });
}

for (const l of log) console.log(`  [log] ${l}`);
if (fatal.length) {
  console.error(`\n${fatal.length} FATAL:`);
  for (const f of fatal) console.error('  ' + f);
  process.exit(1);
}
if (!dry) {
  writeFileSync(specPath, JSON.stringify(spec, null, 2) + '\n');
  console.log(`spliced batch ${batch}: ${spliced} items across ${pagesTouched.length} pages -> plan-spec.json`);
} else {
  console.log(`DRY batch ${batch}: ${spliced} items across ${pagesTouched.length} pages`);
}
for (const p of pagesTouched) console.log(`   ${String(p.order).padStart(8)} ${p.kind} ${p.id.padEnd(54)} ${p.items} items`);
console.log(JSON.stringify({ batch: Number(batch), pages: pagesTouched.map((p) => p.id), items_spliced: spliced, metadata_log: log }));
