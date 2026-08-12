#!/usr/bin/env node
// frontier-12-splice.mjs — merge the seven Beta batch manifests into the plan.
//
//   node research/frontier-12-splice.mjs --dry   -> write a scratch spec, touch nothing
//   node research/frontier-12-splice.mjs         -> splice research/plan-spec.json
//
// IDEMPOTENT BY CONSTRUCTION. It asserts the END STATE, never a delta: every
// page named by a batch manifest ends with exactly that manifest's items, and
// the assertions check the result rather than the change. Re-running is a no-op,
// not a failure. (Run `frontier-11`'s splice asserted "4 items were removed" and
// so could not be run twice.)
//
// A batch manifest is a bare JSON ARRAY of page objects, each carrying the full
// page record — order, id, kind, category, title, companion, requires, items.
// The spec is the authority on page identity: a manifest may only fill in the
// items of a page the spec already declares, never mint or renumber one. Minting
// is the orchestrator's job at step 0 (or a step-3 split decision), so a manifest
// naming an unknown page id is an error, not an insertion.

import { readFileSync, writeFileSync } from 'node:fs';

const REPO = '/Users/ianx/Projects/prestige-math-library';
const SPEC = `${REPO}/research/plan-spec.json`;
const SCRATCH = '/private/tmp/claude-501/-Users-ianx-Projects-prestige-math-library/c97b02e9-dbd1-472a-8232-642f59aef178/scratchpad/frontier-12-spec-merged.json';
const BATCHES = [1, 2, 3, 4, 5, 6, 7];
const dry = process.argv.includes('--dry');

const spec = JSON.parse(readFileSync(SPEC, 'utf8'));
const byId = new Map(spec.pages.map((p) => [p.id, p]));

let spliced = 0;
let items = 0;
const missing = [];
const seen = new Set();

for (const i of BATCHES) {
  const path = `${REPO}/research/frontier-12-batch-${i}.pages.json`;
  let manifest;
  try {
    manifest = JSON.parse(readFileSync(path, 'utf8'));
  } catch (e) {
    missing.push(`batch ${i}: ${e.code === 'ENOENT' ? 'not written yet' : e.message}`);
    continue;
  }
  const pages = Array.isArray(manifest) ? manifest : manifest.pages;
  if (!Array.isArray(pages)) throw new Error(`batch ${i}: manifest is neither an array nor {pages:[...]}`);

  for (const p of pages) {
    const target = byId.get(p.id);
    if (!target) throw new Error(`batch ${i}: page ${p.id} is not declared in plan-spec — a manifest may not mint a page`);
    if (seen.has(p.id)) throw new Error(`page ${p.id} is claimed by two batches`);
    seen.add(p.id);

    // The spec owns identity and reading order; the manifest owns content.
    if (p.order !== undefined && p.order !== target.order) {
      throw new Error(`batch ${i}: ${p.id} claims order ${p.order}, spec says ${target.order} — a manifest may not renumber`);
    }
    target.items = p.items ?? [];
    // A Beta may legitimately refine a title or declare the companion; take those.
    if (p.title) target.title = p.title;
    if (p.companion) target.companion = p.companion;
    if (p.requires) target.requires = p.requires;

    spliced += 1;
    items += target.items.length;
  }
}

// ---- end-state assertions ------------------------------------------------
// Accumulate rather than throw on the first: at step 3 the orchestrator needs
// EVERY page needing a split at once, not the alphabetically unluckiest one.
const problems = [];
const oversize = [];
for (const id of seen) {
  const p = byId.get(id);
  if (p.kind === 'A' && p.items.length === 0) problems.push(`${id}: A page spliced with zero items`);
  if (p.kind === 'A' && p.items.length > 60) {
    oversize.push(`${id}: ${p.items.length} items, over the 60-item ceiling — SPLIT it (validate-plan error \`size\`)`);
  }
  const ids = p.items.map((it) => it.id);
  if (new Set(ids).size !== ids.length) problems.push(`${id}: duplicate item id within the page`);
}
const allIds = spec.pages.flatMap((p) => (p.items ?? []).map((it) => it.id ?? it));
if (new Set(allIds).size !== allIds.length) {
  const dup = allIds.filter((x, n) => allIds.indexOf(x) !== n);
  problems.push(`duplicate item id across pages (ids are IMMUTABLE): ${[...new Set(dup)].slice(0, 10).join(', ')}`);
}

if (problems.length) {
  console.error(`SPLICE BLOCKED — ${problems.length} problem(s):\n  ${problems.join('\n  ')}`);
  process.exit(1);
}
// Oversize is a step-3 DECISION, not a defect: the remedy is minting split pages,
// which only the orchestrator may do. Report every one and refuse the real splice;
// a dry run still writes the scratch spec so the rest can be gated meanwhile.
if (oversize.length) {
  console.error(`OVER THE SIZE CEILING — ${oversize.length} page(s) need a step-3 split decision:\n  ${oversize.join('\n  ')}`);
  if (!dry) process.exit(1);
}

const out = dry ? SCRATCH : SPEC;
writeFileSync(out, JSON.stringify(spec, null, 2) + '\n');
console.log(`${dry ? '[dry] ' : ''}spliced ${spliced} page(s), ${items} item(s) -> ${out}`);
if (missing.length) console.log(`NOT YET AVAILABLE:\n  ${missing.join('\n  ')}`);
