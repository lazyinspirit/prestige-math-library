#!/usr/bin/env node
// splice-plan — copy a batch's scaffolded item ids into plan-spec.json.
//
// WHY THIS IS CODE. Step 4 was dispatched to a lead Alpha. Its receipt records
// `item_ids_spliced`, `id_clash_check`, `size_check` and `validate_plan`, and
// the resulting plan item lists are BYTE-IDENTICAL to the batch manifests. That
// is transcription plus three mechanical gates — no judgment anywhere in it.
//
// Giving a model transcription work is the failure the owner's rule names: it
// does not error, it returns a plausible answer, and it is wrong at a rate
// nobody measures. It also cost a whole A/B pair on frontier-14, when a step-4
// Alpha met a page marked `not ready` and resolved the deadlock by dropping it.
//
// The one genuinely cognitive thing step 4 encountered was a `requires`
// disagreement between a batch manifest and the plan. That is not spliceable —
// it is a decision. This tool refuses to guess: it reports the disagreement and
// exits nonzero so the engine raises a blocker and an Alpha adjudicates.
//
//   node tools/splice-plan.mjs --run <run> --batch <i> [--dry-run]
//
// Idempotent: a page whose items are already spliced and identical is left
// alone. A page whose items are already spliced and DIFFERENT is a hard error,
// never a silent overwrite.

import { readFileSync, writeFileSync, existsSync } from 'node:fs';


const argv = process.argv.slice(2);
const opt = (n, d = null) => { const i = argv.indexOf(`--${n}`); return i >= 0 && argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : d; };
const run = opt('run');
const batch = opt('batch');
const dryRun = argv.includes('--dry-run');
const SIZE_CEILING = 60;

if (!run || !batch) {
  console.error('usage: node tools/splice-plan.mjs --run <run> --batch <i> [--dry-run]');
  process.exit(2);
}

const manifestPath = `research/${run}-batch-${batch}.pages.json`;
const specPath = 'research/plan-spec.json';
for (const p of [manifestPath, specPath]) {
  if (!existsSync(p)) { console.error(`splice-plan: missing ${p}`); process.exit(2); }
}

const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
const spec = JSON.parse(readFileSync(specPath, 'utf8'));
const byId = new Map(spec.pages.map((p) => [p.id, p]));

const idOf = (i) => (typeof i === 'string' ? i : i.id);
const problems = [];
const spliced = [];
const unchanged = [];

for (const page of manifest) {
  const target = byId.get(page.id);
  if (!target) { problems.push(`${page.id}: not in plan-spec.json`); continue; }

  const want = page.items ?? [];
  const have = target.items ?? [];

  if (have.length) {
    const same = have.length === want.length && have.every((h, k) => idOf(h) === idOf(want[k]));
    if (same) { unchanged.push(page.id); continue; }
    problems.push(
      `${page.id}: already has ${have.length} item(s) that differ from the manifest's ${want.length}. `
      + 'Refusing to overwrite — this is a finding, not a splice.');
    continue;
  }

  // `requires` disagreement is a DECISION, not a splice. Report and stop.
  const manifestReq = new Set(page.requires ?? []);
  const planReq = new Set(target.requires ?? []);
  const onlyManifest = [...manifestReq].filter((r) => !planReq.has(r));
  if (onlyManifest.length) {
    problems.push(
      `${page.id}: the manifest declares requires the plan does not — ${onlyManifest.join(', ')}. `
      + 'Adding a prerequisite edge is an adjudication, not a transcription; an Alpha decides.');
    continue;
  }

  if (page.kind === 'A' && want.length > SIZE_CEILING) {
    problems.push(`${page.id}: ${want.length} items exceeds the ${SIZE_CEILING} ceiling; split before authoring, not after`);
    continue;
  }

  target.items = want;
  spliced.push({ page: page.id, items: want.length });
}

// Duplicate ids anywhere in the plan would be a silent corruption.
const seen = new Map();
for (const p of spec.pages) {
  for (const i of p.items ?? []) {
    const id = idOf(i);
    if (seen.has(id) && seen.get(id) !== p.id) problems.push(`duplicate item id ${id} on ${seen.get(id)} and ${p.id}`);
    seen.set(id, p.id);
  }
}

if (problems.length) {
  console.error(`splice-plan: ${problems.length} problem(s); nothing written`);
  for (const p of problems) console.error(`  ${p}`);
  process.exit(1);
}

if (!dryRun && spliced.length) {
  writeFileSync(specPath, JSON.stringify(spec, null, 2) + '\n');
}

const receipt = {
  run, step: 4, batch: Number(batch),
  spliced_by: 'tools/splice-plan.mjs (mechanical)',
  pages_spliced: spliced,
  pages_already_correct: unchanged,
  item_count: spliced.reduce((n, s) => n + s.items, 0),
  size_ceiling: SIZE_CEILING,
  duplicate_ids: 0,
  status: 'complete',
};
if (!dryRun) writeFileSync(`research/${run}-splice-${batch}.json`, JSON.stringify(receipt, null, 2) + '\n');

console.log(`splice-plan: batch ${batch} — ${spliced.length} page(s) spliced, ${unchanged.length} already correct, ${receipt.item_count} item(s)`);
