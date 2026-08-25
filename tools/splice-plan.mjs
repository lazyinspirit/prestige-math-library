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
// disagreement between a batch manifest and the plan. That is not spliceable
// until an Alpha adjudicates it. Ordinary mode records a refusal; Step 6 may
// pass --accept-requires only after its exact adjudication gate has closed.
//
//   node tools/splice-plan.mjs --run <run> --batch <i> [--dry-run]
//   node tools/splice-plan.mjs --run <run> --verify
//   node tools/splice-plan.mjs --run <run> --batch <i> --update
//   node tools/splice-plan.mjs --run <run> --batch <i> --update --accept-requires
//
// Idempotent: a page whose items are already spliced and identical is left
// alone. A page whose items are already spliced and DIFFERENT is a hard error,
// never a silent overwrite — unless `--update` says the difference is a
// licensed in-flight change (a 6b/6c Alpha added or deleted an item in the
// batch manifest) and the plan should follow it, loudly. `--accept-requires`
// also reconciles the manifest's exact page prerequisite set after Step 6 has
// adjudicated that metadata carrier.
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
const acceptRequires = argv.includes('--accept-requires');
const allMode = argv.includes('--all');
const refusalsGateMode = argv.includes('--refusals-gate');
// --fail-on-refusal: the REPAIR-path variant of --all. The splice itself is
// identical; the exit code says whether edges still await adjudication, so
// the stage's mechanical-repair hook can distinguish "re-splice done, all
// clear" (0) from "the residue needs the adjudicating Alpha" (1).
const failOnRefusal = argv.includes('--fail-on-refusal');

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

if (!run || (!batch && !verify && !allMode) || (update && !batch)
  || (acceptRequires && (!update || !batch))) {
  console.error('usage: node tools/splice-plan.mjs --run <run> --batch <i> [--dry-run] [--update [--accept-requires]]');
  console.error('       node tools/splice-plan.mjs --run <run> --all [--dry-run]');
  console.error('       node tools/splice-plan.mjs --run <run> --verify');
  process.exit(2);
}

const specPath = 'research/plan-spec.json';
if (!existsSync(specPath)) { console.error(`splice-plan: missing ${specPath}`); process.exit(2); }

/** Key-sorted stringify, so two item objects compare by CONTENT. A bare id
 *  string and `{id}` carrying nothing else are the same item in two spellings
 *  and compare equal; an object with any further field (deps, strategy, kind)
 *  is a change the plan must carry. */
const stable = (v) => {
  if (typeof v === 'string') return JSON.stringify(v);
  const entries = Object.entries(v ?? {}).sort(([a], [b]) => (a < b ? -1 : 1));
  if (entries.length === 1 && entries[0][0] === 'id') return JSON.stringify(v.id);
  return JSON.stringify(Object.fromEntries(entries));
};

if (verify) {
  const spec = JSON.parse(readFileSync(specPath, 'utf8'));
  const byId = new Map(spec.pages.map((p) => [p.id, p]));
  const idOf = (i) => (typeof i === 'string' ? i : i.id);
  const manifests = readdirSync('research')
    .filter((f) => f.startsWith(`${run}-batch-`) && f.endsWith('.pages.json')).sort();
  if (!manifests.length) { console.error(`splice-plan: no batch manifests for ${run}`); process.exit(2); }

  // Item -> owning page, across this run's manifests, the plan, and the
  // published library. This is what lets `--verify` see an edge the PLAN is
  // missing: frontier-15's `cor-cauchy-inequalities` depended on
  // `pi-the-equivalent-characterizations`, whose page was in nobody's
  // `requires`, and the old id-list comparison had no concept of it — the
  // undeclared prerequisite reached step 4 unflagged.
  const ownerOf = new Map();
  const onDiskPages = new Set();
  for (const f of manifests) {
    for (const page of JSON.parse(readFileSync(`research/${f}`, 'utf8'))) {
      for (const i of page.items ?? []) ownerOf.set(idOf(i), page.id);
    }
  }
  for (const p of spec.pages) for (const i of p.items ?? []) {
    if (!ownerOf.has(idOf(i))) ownerOf.set(idOf(i), p.id);
  }
  try {
    for (const cat of readdirSync('library')) {
      let files = [];
      try { files = readdirSync(`library/${cat}`).filter((x) => x.endsWith('.md')); } catch { continue; }
      for (const file of files) {
        const text = readFileSync(`library/${cat}/${file}`, 'utf8');
        const pageId = /^page:\s*(\S+)/m.exec(text)?.[1];
        const items = /^items:\s*\[([\s\S]*?)\]/m.exec(text)?.[1] ?? '';
        if (!pageId) continue;
        onDiskPages.add(pageId);
        for (const i of items.split(',').map((s) => s.trim()).filter(Boolean)) {
          if (!ownerOf.has(i)) ownerOf.set(i, pageId);
        }
      }
    }
  } catch { /* no library dir: item->page falls back to plan+manifests */ }

  const drift = [];
  let checked = 0;
  for (const f of manifests) {
    for (const page of JSON.parse(readFileSync(`research/${f}`, 'utf8'))) {
      checked += 1;
      const target = byId.get(page.id);
      if (!target) { drift.push(`${page.id} (${f}): not in plan-spec.json`); continue; }
      const want = (page.items ?? []).map(idOf);
      const have = (target.items ?? []).map(idOf);
      if (want.length === have.length && want.every((w, k) => w === have[k])) {
        // Same ids is no longer the same PLAN: a deps- or strategy-only edit
        // to a manifest item used to read "already correct" here and never
        // propagate — step 4 mirrored two repaired item objects into the plan
        // by hand to work around exactly this.
        const changed = (page.items ?? []).filter((i, k) => stable(i) !== stable((target.items ?? [])[k]));
        if (changed.length) {
          drift.push(`${page.id} (${f}): same ids, ${changed.length} item object(s) changed `
            + `(${changed.slice(0, 3).map(idOf).join(', ')}${changed.length > 3 ? ', …' : ''}) — re-splice to propagate`);
        }
      } else {
        const onlyM = want.filter((w) => !have.includes(w));
        const onlyP = have.filter((h) => !want.includes(h));
        drift.push(`${page.id} (${f}): manifest ${want.length} vs plan ${have.length} item(s)`
          + (onlyM.length ? `; only in manifest: ${onlyM.join(', ')}` : '')
          + (onlyP.length ? `; only in plan: ${onlyP.join(', ')}` : '')
          + (!onlyM.length && !onlyP.length ? '; same ids, different order' : ''));
      }
      if (stable(page.requires ?? []) !== stable(target.requires ?? [])) {
        drift.push(`${page.id} (${f}): manifest requires [${(page.requires ?? []).join(', ')}] `
          + `vs plan [${(target.requires ?? []).join(', ')}]`);
      }

      // A dep landing on a page that exists ONLY in the plan or this run's
      // manifests — no file on disk — is a dep on an UNBUILT page, and those
      // are exactly what `requires` licenses. A dep to a page on disk is
      // licensed by reading order and needs no requires entry (the first
      // version of this check flagged 640+ ordinary cross-level citations to
      // published pages before that distinction was made). Unresolved ids are
      // validate-plan's; the splice refusal owns reconciling manifest and
      // plan requires.
      const pairIds = new Set([page.id, `${page.id}-examples`, page.id.replace(/-examples$/, '')]);
      const declared = new Set([...(page.requires ?? []), ...(target.requires ?? [])]);
      for (const item of page.items ?? []) {
        if (typeof item === 'string') continue;
        for (const dep of item.deps ?? []) {
          const owner = ownerOf.get(dep);
          if (!owner || pairIds.has(owner) || onDiskPages.has(owner)) continue;
          const ownerPair = owner.replace(/-examples$/, '');
          if (!declared.has(owner) && !declared.has(ownerPair)) {
            drift.push(`${page.id} (${f}): ${item.id} deps ${dep} on UNBUILT page ${owner}, `
              + `which is in nobody's requires — an undeclared prerequisite`);
          }
        }
      }
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

    let itemsChanged = !have.length && want.length > 0;
    if (have.length) {
      const sameIds = have.length === want.length && have.every((h, k) => idOf(h) === idOf(want[k]));
      const sameItems = sameIds && have.every((h, k) => stable(h) === stable(want[k]));
      if (!sameItems && sameIds) {
        // Same ids, changed bodies: a deps/strategy edit on existing items.
        // No scope moved, so this is a REFRESH, not an unlicensed overwrite —
        // the manifest is the batch-level truth and the plan follows it. The
        // old id-only test read this as "already correct" and step 4 mirrored
        // repaired objects into the plan by hand.
        const changed = want.filter((w, k) => stable(w) !== stable(have[k])).map(idOf);
        console.log(`splice-plan: REFRESHING ${page.id} — same ids, ${changed.length} item object(s) changed: ${changed.join(', ')}`);
        itemsChanged = true;
      } else if (!sameItems && update) {
        // A licensed in-flight change: the manifest is the batch-level truth and
        // the plan follows it — loudly, with the delta on the record.
        const wantIds = want.map(idOf);
        const haveIds = have.map(idOf);
        console.log(`splice-plan: UPDATING ${page.id} — plan ${haveIds.length} -> manifest ${wantIds.length} item(s)`);
        for (const w of wantIds.filter((x) => !haveIds.includes(x))) console.log(`  + ${w}`);
        for (const h of haveIds.filter((x) => !wantIds.includes(x))) console.log(`  - ${h}`);
        itemsChanged = true;
      } else if (!sameItems) {
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
    const onlyPlan = [...planReq].filter((r) => !manifestReq.has(r));
    if (onlyManifest.length && !acceptRequires) {
      refusals.push({ batch: String(b), page: page.id, requires: onlyManifest });
      continue;
    }
    const requiresChanged = acceptRequires && (onlyManifest.length > 0 || onlyPlan.length > 0);
    if (requiresChanged) {
      console.log(`splice-plan: RECONCILING ${page.id} requires — plan [${[...planReq].join(', ')}] -> manifest [${[...manifestReq].join(', ')}]`);
    }

    if (page.kind === 'A' && want.length > SIZE_CEILING) {
      problems.push(`${page.id}: ${want.length} items exceeds the ${SIZE_CEILING} ceiling; split before authoring, not after`);
      continue;
    }

    if (itemsChanged || requiresChanged) {
      spliced.push({ page: page.id, items: want.length, nextItems: want,
        nextRequires: [...manifestReq], requiresChanged });
    } else {
      unchanged.push(page.id);
    }
  }
  perBatch.push({ batch: b, spliced, unchanged });
}

// Project only complete batches into memory before global validation. No file
// is written until the duplicate scan below passes.
const refusingBatches = new Set(refusals.map((r) => r.batch));
for (const { batch: b, spliced } of perBatch) {
  if (refusingBatches.has(String(b))) continue;
  for (const change of spliced) {
    const target = byId.get(change.page);
    target.items = change.nextItems;
    if (change.requiresChanged) target.requires = change.nextRequires;
  }
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

// Apply only complete batches. Mutations are deferred until every page has
// been inspected, so withholding one batch cannot corrupt its plan entries
// while another batch is written.
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
    pages_spliced: spliced.map(({ page, items, requiresChanged }) => ({ page, items, requires_reconciled: requiresChanged })),
    pages_already_correct: unchanged,
    item_count: spliced.reduce((n, s) => n + s.items, 0),
    size_ceiling: SIZE_CEILING,
    duplicate_ids: 0,
    status: 'complete',
  };
  if (!dryRun) writeFileSync(`research/${run}-splice-${b}.json`, JSON.stringify(receipt, null, 2) + '\n');
  console.log(`splice-plan: batch ${b} — ${spliced.length} page(s) spliced, ${unchanged.length} already correct, ${receipt.item_count} item(s)`);
}

if (failOnRefusal && refusals.length) {
  console.error(`splice-plan: ${refusals.length} requires edge(s) still await adjudication`);
  process.exit(1);
}
