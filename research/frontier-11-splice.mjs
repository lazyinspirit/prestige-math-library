// frontier-11 step-4 splice — batch manifests into plan-spec.json
//
// LEVELS.md §Step 4: keep plan-spec's page metadata, take the UNION of
// `requires`, log every disagreement, hard-fail on an id clash.
//
// Adapted from frontier-10-splice.mjs with one addition this run needs: the D1
// re-home. Four items move from the-complex-exponential-and-eulers-formula
// (order 189) to field-extensions-and-the-complex-numbers (order 54). Batch 1's
// manifest declares them, so the append below puts them on order 54 — but 189's
// spec entry still lists them, and leaving it would make plan-spec claim two
// homes for one id. So 189's entry drops them here, in the same pass, and the
// receipt research/frontier-11-rehomed.json is what tells validate-plan that the
// disk home (still 189 until step 10) is a known, approved disagreement.
//
// --apply to write; default is a dry run that changes nothing.

import { readFileSync, writeFileSync, readdirSync, copyFileSync } from 'node:fs';

const apply = process.argv.includes('--apply');
const SPEC = 'research/plan-spec.json';
const spec = JSON.parse(readFileSync(SPEC, 'utf8'));
const byId = new Map(spec.pages.map((p) => [p.id, p]));

// D1 (owner, 2026-08-12, re-decided on the corrected premise — see D12).
const REHOME_FROM = 'the-complex-exponential-and-eulers-formula';
const REHOME_TO = 'field-extensions-and-the-complex-numbers';
const REHOMED_IDS = new Set(JSON.parse(readFileSync('research/frontier-11-rehomed.json', 'utf8'))
  .items.map((i) => i.id));

// 189 must now require 54: it keeps the metric/exponential material that cites
// the C it no longer defines. Level 19 sits below level 23, so no cycle.
const EXTRA_REQUIRES = {
  [REHOME_FROM]: [REHOME_TO],
};

const manifests = readdirSync('research')
  .filter((f) => /^frontier-11-batch-\d+\.pages\.json$/.test(f))
  .sort((a, b) => Number(a.match(/\d+/)[0]) - Number(b.match(/\d+/)[0]));

// An id may be minted by exactly one page across the whole run.
const mintedBy = new Map();
const clashes = [];
const log = [];
let itemTotal = 0;

for (const f of manifests) {
  for (const page of JSON.parse(readFileSync(`research/${f}`, 'utf8'))) {
    for (const it of page.items ?? []) {
      const prior = mintedBy.get(it.id);
      if (prior && prior !== page.id) clashes.push(`${it.id}: ${prior} vs ${page.id}`);
      mintedBy.set(it.id, page.id);
    }
  }
}
if (clashes.length) {
  console.error(`ID CLASH — refusing to splice:\n  ${clashes.join('\n  ')}`);
  process.exit(1);
}

// Guard: every id the receipt claims must actually be declared by the receiving
// page's manifest. A receipt naming an id no batch builds is a stale receipt,
// and applying it would silently delete published items from 189.
for (const id of REHOMED_IDS) {
  if (mintedBy.get(id) !== REHOME_TO) {
    console.error(`REHOME MISMATCH — ${id} is claimed by the receipt but minted by ${mintedBy.get(id) ?? '(nothing)'}`);
    process.exit(1);
  }
}

const idOf = (i) => (typeof i === 'string' ? i : i.id);

for (const f of manifests) {
  for (const page of JSON.parse(readFileSync(`research/${f}`, 'utf8'))) {
    const target = byId.get(page.id);
    if (!target) { console.error(`page ${page.id} is not in the spec`); process.exit(1); }

    // Append, never replace: an enrichment manifest holds only newly minted ids,
    // so replacing would delete published items. The manifest is authoritative
    // for every id it declares, which keeps the splice idempotent across repair
    // rounds.
    const existing = target.items ?? [];
    const fresh = page.items ?? [];
    const declared = new Set(fresh.map(idOf));
    const preserved = existing.filter((i) => !declared.has(idOf(i)));
    target.items = [...preserved, ...fresh];
    if (preserved.length) {
      log.push(`${page.id}: ENRICHMENT — ${preserved.length} published + ${fresh.length} new = ${target.items.length}`);
    }
    itemTotal += target.items.length;

    const before = new Set(target.requires ?? []);
    const union = new Set([...before, ...(page.requires ?? []), ...(EXTRA_REQUIRES[page.id] ?? [])]);
    const added = [...union].filter((r) => !before.has(r));
    if (added.length) log.push(`${page.id}: requires += ${added.join(', ')}`);
    target.requires = [...union];
  }
}

// The D1 donor. No manifest contains order 189, so the loop above never reaches
// it: drop the four rehomed ids and add the requires edge here, or plan-spec
// ends up claiming two homes for each id.
const donor = byId.get(REHOME_FROM);
if (!donor) { console.error(`rehome donor ${REHOME_FROM} is not in the spec`); process.exit(1); }
// Assert the END STATE, not the delta. The first run drops four; a re-run after
// a batch repair drops zero because they are already gone, and that is success,
// not failure. Checking the delta made the splice non-idempotent, which defeats
// the point of re-running it after a repair round.
const donorBefore = (donor.items ?? []).length;
donor.items = (donor.items ?? []).filter((i) => !REHOMED_IDS.has(idOf(i)));
const removed = donorBefore - donor.items.length;
const stillThere = (donor.items ?? []).filter((i) => REHOMED_IDS.has(idOf(i))).map(idOf);
if (stillThere.length) {
  console.error(`REHOME INCOMPLETE — ${REHOME_FROM} still lists ${stillThere.join(', ')}`);
  process.exit(1);
}
log.push(removed
  ? `${REHOME_FROM}: D1 re-home — ${donorBefore} items -> ${donor.items.length} (dropped ${removed})`
  : `${REHOME_FROM}: D1 re-home already applied — ${donor.items.length} items, none of the 4 present`);

for (const [pageId, extra] of Object.entries(EXTRA_REQUIRES)) {
  const target = byId.get(pageId);
  const before = new Set(target.requires ?? []);
  const added = extra.filter((r) => !before.has(r));
  if (added.length) {
    target.requires = [...before, ...added];
    log.push(`${pageId}: requires += ${added.join(', ')}  (off-manifest, D1)`);
  }
}

console.log(`${manifests.length} manifest(s), ${mintedBy.size} distinct ids, ${itemTotal} items spliced`);
for (const line of log) console.log(`  ${line}`);

if (!apply) { console.log('\nDRY RUN — nothing written. Pass --apply.'); process.exit(0); }
copyFileSync(SPEC, `${SPEC}.pre-frontier-11-splice`);
writeFileSync(SPEC, `${JSON.stringify(spec, null, 2)}\n`);
console.log(`\nwrote ${SPEC} (backup at ${SPEC}.pre-frontier-11-splice)`);
