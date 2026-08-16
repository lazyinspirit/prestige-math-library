#!/usr/bin/env node
// scaffold-verdicts — the step-3 closure predicate.
//
// WHY THIS EXISTS. Step 3 is where a thin scaffold is still cheap to fix: after
// step 4 it is a rewrite. Alpha reviews every pair for breadth and depth and
// returns `sufficient` or `insufficient`. That verdict was written in markdown,
// so the pipeline could not act on it — the review, the Beta fix and the
// re-check ran once each, in a line, and whatever the re-check concluded, the
// build spliced and moved on. A scaffold that was still insufficient advanced
// exactly like one that was not.
//
// This is the same shape as `level-coverage --judge-only` on the judge side:
// a machine-readable verdict per unit, a closure predicate over all of them, and
// a receipt naming what is still open so a stage can dispatch from it.
//
//   node tools/scaffold-verdicts.mjs --run <run> [--require-sufficient]
//        [--out research/<run>-scaffold-closure.json]
//
// Default (step 3 review): every A page in the manifests must HAVE a verdict.
// --require-sufficient (step 3 re-check): every verdict must BE `sufficient`.

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const argv = process.argv.slice(2);
const opt = (n, d = null) => { const i = argv.indexOf(`--${n}`); return i >= 0 && argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : d; };
const run = opt('run');
const requireSufficient = argv.includes('--require-sufficient');
const outPath = opt('out');
const asJson = argv.includes('--json');

if (!run) {
  console.error('usage: node tools/scaffold-verdicts.mjs --run <run> [--require-sufficient] [--out <closure.json>] [--json]');
  process.exit(2);
}

const errors = [];

// ---- scope: every A page the run owes ---------------------------------------
const manifests = readdirSync('research')
  .filter((f) => f.startsWith(`${run}-batch-`) && f.endsWith('.pages.json'))
  .sort();
if (!manifests.length) { console.error(`scaffold-verdicts: no batch manifests for ${run}`); process.exit(2); }

const aPages = [];
for (const f of manifests) {
  let pages;
  try { pages = JSON.parse(readFileSync(join('research', f), 'utf8')); }
  catch (cause) { errors.push(`manifest-read: ${f}: ${cause.message}`); continue; }
  for (const p of pages ?? []) if (p?.kind === 'A' && p.id) aPages.push(p.id);
}

// ---- the verdicts Alpha wrote ------------------------------------------------
// One file per group Alpha, namespaced, so groups never overwrite one another —
// the same reason reader reports are namespaced, and the defect that destroyed
// eleven findings when they were not.
const verdictFiles = readdirSync('research')
  .filter((f) => f.startsWith(`${run}-alpha-`) && f.endsWith('-step3-verdicts.json'))
  .sort();

const verdicts = new Map();  // page id -> {verdict, missing[], by}
for (const f of verdictFiles) {
  let rows;
  try { rows = JSON.parse(readFileSync(join('research', f), 'utf8')); }
  catch (cause) { errors.push(`verdict-read: ${f}: ${cause.message}`); continue; }
  for (const row of Array.isArray(rows) ? rows : rows?.pages ?? []) {
    if (!row || typeof row.page !== 'string') { errors.push(`verdict-shape: ${f}: a row has no \`page\``); continue; }
    if (!['sufficient', 'insufficient'].includes(row.verdict)) {
      errors.push(`verdict-shape: ${f}: ${row.page} needs verdict \`sufficient\` or \`insufficient\`, got ${JSON.stringify(row.verdict)}`);
      continue;
    }
    // An `insufficient` with nothing named is not a finding anybody can act on.
    // "Could be deeper" is exactly what the step-3 brief forbids.
    if (row.verdict === 'insufficient' && !(Array.isArray(row.missing) && row.missing.length)) {
      errors.push(`verdict-shape: ${f}: ${row.page} is insufficient but names no missing result; say which result and which source carries it`);
      continue;
    }
    verdicts.set(row.page, { ...row, by: f });
  }
}

const missingVerdict = aPages.filter((id) => !verdicts.has(id));
const insufficient = aPages.filter((id) => verdicts.get(id)?.verdict === 'insufficient');

for (const id of missingVerdict) {
  errors.push(`verdict-missing: ${id} has no step-3 breadth/depth verdict from any group Alpha`);
}
if (requireSufficient) {
  for (const id of insufficient) {
    const row = verdicts.get(id);
    errors.push(`scaffold-insufficient: ${id} is still insufficient — missing ${row.missing.join(', ')}`);
  }
}

// ---- the receipt -------------------------------------------------------------
// Written whether or not the gate passes: a failing gate is when the ids it
// names need to become the next Beta's work.
const receipt = {
  version: 1,
  run,
  a_pages: aPages.length,
  verdicts: verdicts.size,
  missing_verdict: missingVerdict.sort(),
  insufficient: insufficient.sort(),
  // What each insufficient pair still needs, so a fix stage reads the file
  // rather than a report's prose.
  work: insufficient.sort().map((id) => ({ page: id, missing: verdicts.get(id).missing })),
  closed: missingVerdict.length === 0 && insufficient.length === 0,
};
if (outPath) writeFileSync(outPath, `${JSON.stringify(receipt, null, 2)}\n`);

if (asJson) console.log(JSON.stringify({ ...receipt, errors }, null, 2));
else {
  console.log(`scaffold-verdicts: ${verdicts.size}/${aPages.length} A page(s) reviewed; `
    + `${insufficient.length} insufficient, ${missingVerdict.length} unreviewed`);
  for (const e of errors) console.error(`ERROR ${e}`);
}
process.exit(errors.length ? 1 : 0);
