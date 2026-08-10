// frontier-10 step-4 splice — batch manifests into plan-spec.json
//
// LEVELS.md §Step 4: keep plan-spec's page metadata, take the UNION of
// `requires`, log every disagreement, hard-fail on an id clash.
//
// --apply to write; default is a dry run that changes nothing.

import { readFileSync, writeFileSync, readdirSync, copyFileSync } from 'node:fs';

const apply = process.argv.includes('--apply');
const SPEC = 'research/plan-spec.json';
const spec = JSON.parse(readFileSync(SPEC, 'utf8'));
const byId = new Map(spec.pages.map((p) => [p.id, p]));

// D1: Fubini gains the two determinant pages batch 9 builds.
const EXTRA_REQUIRES = {
  'fubini-and-change-of-variables': [
    'determinants-of-matrices-over-a-commutative-ring',
    'gaussian-elimination-and-row-reduction',
  ],
  // Alpha's re-check finding R1. The re-home moves two items onto
  // rings-subrings-and-integral-domains (46) whose own dependencies —
  // def-finite-cardinality, def-sum-over-a-finite-index-set, thm-product-rule,
  // thm-sum-rule — are homed on finite-counting-and-binomial-coefficients (20).
  // That page currently requires only divisibility-gcd-and-bezout, so once the
  // re-home is applied validate-plan raises undeclared-prereq. Nothing else owns
  // this edge: it is a consequence of the move, not of any batch's scaffold.
  'rings-subrings-and-integral-domains': ['finite-counting-and-binomial-coefficients'],
};

const manifests = readdirSync('research')
  .filter((f) => /^frontier-10-batch-\d+\.pages\.json$/.test(f))
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

for (const f of manifests) {
  for (const page of JSON.parse(readFileSync(`research/${f}`, 'utf8'))) {
    const target = byId.get(page.id);
    if (!target) { console.error(`page ${page.id} is not in the spec`); process.exit(1); }

    // items. For a NEW page the spec list is empty and the batch is authoritative.
    // For an ENRICHMENT of a published pair the batch manifest deliberately holds
    // only the newly minted ids, so replacing would DELETE the published items
    // from the spec. Append instead, published first, preserving reading order.
    const existing = target.items ?? [];
    const fresh = page.items ?? [];
    if (existing.length && fresh.length) {
      const existingIds = new Set(existing.map((i) => (typeof i === 'string' ? i : i.id)));
      const additions = fresh.filter((i) => !existingIds.has(typeof i === 'string' ? i : i.id));
      target.items = [...existing, ...additions];
      log.push(`${page.id}: ENRICHMENT — ${existing.length} published + ${additions.length} new = ${target.items.length}`);
    } else {
      target.items = fresh;
    }
    itemTotal += target.items.length;

    // requires: UNION, never replacement. Beta computes the closure
    // validate-plan demands and may legitimately have found more than step 0 knew.
    const before = new Set(target.requires ?? []);
    const union = new Set([...before, ...(page.requires ?? []), ...(EXTRA_REQUIRES[page.id] ?? [])]);
    const added = [...union].filter((r) => !before.has(r));
    const dropped = [...before].filter((r) => !union.has(r));   // union can't drop; guard anyway
    if (added.length) log.push(`${page.id}: requires += ${added.join(', ')}`);
    if (dropped.length) log.push(`${page.id}: WARNING requires would drop ${dropped.join(', ')} — kept`);
    target.requires = [...union];
  }
}

// An EXTRA_REQUIRES entry for a page NO batch manifest contains — R1's
// rings-subrings edge is exactly that: a consequence of the re-home, not of any
// batch's scaffold. The per-page loop above never reaches such a page, so apply
// the remainder here or the edge is silently dropped.
const touched = new Set(manifests.flatMap((f) =>
  JSON.parse(readFileSync(`research/${f}`, 'utf8')).map((p) => p.id)));
for (const [pageId, extra] of Object.entries(EXTRA_REQUIRES)) {
  if (touched.has(pageId)) continue;
  const target = byId.get(pageId);
  if (!target) { console.error(`EXTRA_REQUIRES names unknown page ${pageId}`); process.exit(1); }
  const before = new Set(target.requires ?? []);
  const added = extra.filter((r) => !before.has(r));
  if (added.length) {
    target.requires = [...before, ...added];
    log.push(`${pageId}: requires += ${added.join(', ')}  (off-manifest, R1)`);
  }
}

console.log(`${manifests.length} manifest(s), ${mintedBy.size} distinct ids, ${itemTotal} items spliced`);
for (const line of log) console.log(`  ${line}`);

if (!apply) { console.log('\nDRY RUN — nothing written. Pass --apply.'); process.exit(0); }
copyFileSync(SPEC, `${SPEC}.pre-frontier-10-splice`);
writeFileSync(SPEC, `${JSON.stringify(spec, null, 2)}\n`);
console.log(`\nwritten. backup: ${SPEC}.pre-frontier-10-splice`);
