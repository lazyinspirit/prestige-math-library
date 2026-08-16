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
//   node tools/splice-plan.mjs --run <run> --verify
//   node tools/splice-plan.mjs --run <run> --batch <i> --update
//
// Idempotent: a page whose items are already spliced and identical is left
// alone. A page whose items are already spliced and DIFFERENT is a hard error,
// never a silent overwrite — unless `--update` says the difference is a
// licensed in-flight change (a 6b/6c Alpha added or deleted an item in the
// batch manifest) and the plan should follow it, loudly.
//
// `--verify` exists because the judge sweep expands its `--pages` into item
// lists via plan-spec.json, which is spliced once at step 4: an item an Alpha
// legitimately added to a manifest afterwards would either escape judging or
// hard-stop closure. Verify diffs every batch manifest against the plan and
// fails on any divergence, so the drift is loud before the sweep spends.

import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';


const argv = process.argv.slice(2);
const opt = (n, d = null) => { const i = argv.indexOf(`--${n}`); return i >= 0 && argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : d; };
const run = opt('run');
const batch = opt('batch');
const dryRun = argv.includes('--dry-run');
const verify = argv.includes('--verify');
const update = argv.includes('--update');
const allMode = argv.includes('--all');
const refusalsGateMode = argv.includes('--refusals-gate');

// --refusals-gate: the stage gate over the refusals artifact. Exits 1 while
// any requires edge awaits adjudication, 2 when the artifact is absent (the
// splice never ran — never a pass), 0 when the artifact says none.
if (refusalsGateMode) {
  const path = `research/${run}-splice-refusals.json`;
  if (!existsSync(path)) { console.error(`splice-refusals: ${path} absent — the splice has not run`); process.exit(2); }
  const { refusals: rows } = JSON.parse(readFileSync(path, 'utf8'));
  for (const r of rows ?? []) {
    console.error(`ERROR splice-refusal: batch ${r.batch} ${r.page} declares requires the plan does not — ${r.requires.join(', ')}`);
  }
  console.log(`splice-refusals: ${rows?.length ?? 0} edge(s) awaiting adjudication`);
  process.exit(rows?.length ? 1 : 0);
}
const SIZE_CEILING = 60;

if (!run || (!batch && !verify && !allMode) || (update && !batch)) {
  console.error('usage: node tools/splice-plan.mjs --run <run> --batch <i> [--dry-run] [--update]');
  console.error('       node tools/splice-plan.mjs --run <run> --all [--dry-run]');
  console.error('       node tools/splice-plan.mjs --run <run> --verify');
  process.exit(2);
}

const specPath = 'research/plan-spec.json';
if (!existsSync(specPath)) { console.error(`splice-plan: missing ${specPath}`); process.exit(2); }

if (verify) {
  const spec = JSON.parse(readFileSync(specPath, 'utf8'));
  const byId = new Map(spec.pages.map((p) => [p.id, p]));
  const idOf = (i) => (typeof i === 'string' ? i : i.id);
  const manifests = readdirSync('research')
    .filter((f) => f.startsWith(`${run}-batch-`) && f.endsWith('.pages.json')).sort();
  if (!manifests.length) { console.error(`splice-plan: no batch manifests for ${run}`); process.exit(2); }
  const drift = [];
  let checked = 0;
  for (const f of manifests) {
    for (const page of JSON.parse(readFileSync(`research/${f}`, 'utf8'))) {
      checked += 1;
      const target = byId.get(page.id);
      if (!target) { drift.push(`${page.id} (${f}): not in plan-spec.json`); continue; }
      const want = (page.items ?? []).map(idOf);
      const have = (target.items ?? []).map(idOf);
      if (want.length === have.length && want.every((w, k) => w === have[k])) continue;
      const onlyM = want.filter((w) => !have.includes(w));
      const onlyP = have.filter((h) => !want.includes(h));
      drift.push(`${page.id} (${f}): manifest ${want.length} vs plan ${have.length} item(s)`
        + (onlyM.length ? `; only in manifest: ${onlyM.join(', ')}` : '')
        + (onlyP.length ? `; only in plan: ${onlyP.join(', ')}` : '')
        + (!onlyM.length && !onlyP.length ? '; same ids, different order' : ''));
    }
  }
  if (drift.length) {
    console.error(`splice-plan: ${drift.length} page(s) where the plan and the batch manifest disagree`);
    for (const d of drift) console.error(`  ${d}`);
    console.error('A licensed in-flight change is applied with: splice-plan --run <run> --batch <i> --update');
    process.exit(1);
  }
  console.log(`splice-plan: verified ${checked} page(s) across ${manifests.length} manifest(s) — plan and manifests agree`);
  process.exit(0);
}

// One process, one writer: `--all` splices every batch in one pass, because a
// per-batch dispatch at concurrency 1 costs a poll tick per batch for seconds
// of work. All-or-nothing either way: any problem in any batch writes nothing.
const batchList = allMode
  ? readdirSync('research')
      .filter((f) => f.startsWith(`${run}-batch-`) && f.endsWith('.pages.json'))
      .map((f) => f.slice(`${run}-batch-`.length, -'.pages.json'.length))
      .sort((a, b) => Number(a) - Number(b))
  : [batch];
if (!batchList.length) { console.error(`splice-plan: no batch manifests for ${run}`); process.exit(2); }

const spec = JSON.parse(readFileSync(specPath, 'utf8'));
const byId = new Map(spec.pages.map((p) => [p.id, p]));
const idOf = (i) => (typeof i === 'string' ? i : i.id);
const problems = [];
const refusals = [];
const perBatch = [];

for (const b of batchList) {
  const manifestPath = `research/${run}-batch-${b}.pages.json`;
  if (!existsSync(manifestPath)) { console.error(`splice-plan: missing ${manifestPath}`); process.exit(2); }
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
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
      if (update) {
        // A licensed in-flight change: the manifest is the batch-level truth and
        // the plan follows it — loudly, with the delta on the record.
        const wantIds = want.map(idOf);
        const haveIds = have.map(idOf);
        console.log(`splice-plan: UPDATING ${page.id} — plan ${haveIds.length} -> manifest ${wantIds.length} item(s)`);
        for (const w of wantIds.filter((x) => !haveIds.includes(x))) console.log(`  + ${w}`);
        for (const h of haveIds.filter((x) => !wantIds.includes(x))) console.log(`  - ${h}`);
      } else {
        problems.push(
          `${page.id}: already has ${have.length} item(s) that differ from the manifest's ${want.length}. `
          + 'Refusing to overwrite — a licensed in-flight change is applied with --update; anything else is a finding.');
        continue;
      }
    }

    // `requires` disagreement is a DECISION, not a splice — but it is the
    // tool's correct OUTPUT, not its failure. The first live run exited 1
    // here, the lane burned its three attempts on the same deterministic
    // refusal, and the adjudication the message asks for had no dispatch
    // route. A refusal now lands in the refusals artifact (exit 0); the
    // `splice-refusals` gate holds the stage and the repair loop dispatches
    // the adjudicating Alpha. The refusing page's whole batch is withheld —
    // no receipt, no spec edit — so its units stay uncovered and the lane
    // re-splices mechanically once the Alpha has decided.
    const manifestReq = new Set(page.requires ?? []);
    const planReq = new Set(target.requires ?? []);
    const onlyManifest = [...manifestReq].filter((r) => !planReq.has(r));
    if (onlyManifest.length) {
      refusals.push({ batch: String(b), page: page.id, requires: onlyManifest });
      continue;
    }

    if (page.kind === 'A' && want.length > SIZE_CEILING) {
      problems.push(`${page.id}: ${want.length} items exceeds the ${SIZE_CEILING} ceiling; split before authoring, not after`);
      continue;
    }

    target.items = want;
    spliced.push({ page: page.id, items: want.length });
  }
  perBatch.push({ batch: b, spliced, unchanged });
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

// ERRORS (unknown page, unlicensed overwrite, size ceiling, duplicate ids)
// are defects and still fail the lane: nothing is written, exit 1.
if (problems.length) {
  console.error(`splice-plan: ${problems.length} problem(s); nothing written`);
  for (const p of problems) console.error(`  ${p}`);
  process.exit(1);
}

// A batch containing any refusal is withheld WHOLE: its spec edits are
// rolled back, no receipt is written, so coverage keeps its units open.
const refusingBatches = new Set(refusals.map((r) => r.batch));
if (refusingBatches.size) {
  for (const { batch: b, spliced } of perBatch) {
    if (!refusingBatches.has(String(b))) continue;
    for (const s of spliced) { const t = byId.get(s.page); if (t) t.items = []; }
  }
}

if (!dryRun && perBatch.some((x) => !refusingBatches.has(String(x.batch)) && x.spliced.length)) {
  writeFileSync(specPath, JSON.stringify(spec, null, 2) + '\n');
}
// The refusals artifact is written EVERY run, empty or not, so the gate can
// tell "no refusals" from "the splice never ran".
if (!dryRun) {
  writeFileSync(`research/${run}-splice-refusals.json`, JSON.stringify({ run, refusals }, null, 2) + '\n');
}

for (const { batch: b, spliced, unchanged } of perBatch) {
  if (refusingBatches.has(String(b))) {
    const held = refusals.filter((r) => r.batch === String(b));
    console.log(`splice-plan: batch ${b} WITHHELD — ${held.length} requires edge(s) await adjudication`);
    for (const r of held) console.log(`  ${r.page}: ${r.requires.join(', ')}`);
    continue;
  }
  const receipt = {
    run, step: 4, batch: Number(b),
    spliced_by: 'tools/splice-plan.mjs (mechanical)',
    pages_spliced: spliced,
    pages_already_correct: unchanged,
    item_count: spliced.reduce((n, s) => n + s.items, 0),
    size_ceiling: SIZE_CEILING,
    duplicate_ids: 0,
    status: 'complete',
  };
  if (!dryRun) writeFileSync(`research/${run}-splice-${b}.json`, JSON.stringify(receipt, null, 2) + '\n');
  console.log(`splice-plan: batch ${b} — ${spliced.length} page(s) spliced, ${unchanged.length} already correct, ${receipt.item_count} item(s)`);
}
