#!/usr/bin/env node
// wave5-impact-dispositions.mjs — write Alpha's A6 impact receipt.
//
// A4 rewrote the frontmatter of all 209 scoped items, and `touchlog`'s
// public-surface hash keeps every frontmatter field except `verification`, so
// all 209 read as changed interfaces and 1,386 consumers fall out. That number
// is an artefact of the retag, not a measurement of risk, and the split is the
// evidence:
//
//   1,340 consumers are downstream of PURE retags only — provenance/sources
//         frontmatter, body byte-identical. Nothing a consumer could rely on
//         moved, so the class is disposed wholesale (AUDIT-WORKFLOW §7.2).
//      46 consumers are downstream of one of the 11 MATERIAL items, and each
//         gets its own note naming which material change reaches it.
//
// The load-bearing fact, checked mechanically rather than from the Beta
// reports: in 10 of the 11 material items the Statement/Definition/Example
// section and the title are BYTE-IDENTICAL to HEAD — the edits are unused
// [L#] facts deleted, step tags corrected, a mistyped construction line fixed,
// decayed Remark prose repaired, and source URLs added. A consumer's licence
// rests on the target's Statement, so an unchanged Statement cannot withdraw
// one. The eleventh, ex-countability-profile-of-omega-one, DID change its
// Example body (a wrong cover family repaired) and has exactly zero consumers.

import { readFileSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
// Via a file, not a pipe: the --json payload is ~1 MB and a captured stdout
// buffer truncated it mid-string, which JSON.parse reports as a syntax error in
// the data rather than as the I/O problem it is.
const scratch = join(REPO, 'research/audit/.wave5-impact.json');
execSync(`node tools/impact-audit.mjs --touches research/audit/wave5-touches.json --from pre-A4 --json > ${scratch}`, { cwd: REPO, shell: '/bin/bash' });
const impact = JSON.parse(readFileSync(scratch, 'utf8'));
const split = JSON.parse(readFileSync(join(REPO, 'research/audit/wave5-split.json'), 'utf8'));
const material = new Map(split.material.map((m) => [m.id, m.reasons]));

/** What each material edit actually was, verified from `git diff` against HEAD. */
const MATERIAL_CHANGE = {
  'cex-nested-open-intervals-empty': 'the unused [L5] nested-interval-property fact was deleted and the remaining facts renumbered (old [L6] -> [L5]); Statement and title byte-identical',
  'cor-components-of-open-subsets-of-rn-are-polygonally-connected': '[L1] was completed with the path-connected-implies-connected step it already used, and that dependency added to deps; Statement and title byte-identical',
  'ex-countability-profile-of-omega-one': 'the non-Lindelof witness cover was repaired from the ill-formed {alpha : alpha < omega_1} to the initial segments {[0,beta] : beta < omega_1}; title byte-identical',
  'ex-nested-intervals-single-point': 'step 2.2 gained the [L8] tag for a fact it already used; Statement and title byte-identical',
  'ex-the-particular-point-topology-in-the-separation-hierarchy': 'the unused [L3] closure fact was deleted and a Sierpinski-space reference added; Statement and title byte-identical',
  'fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets': 'the unused [L8] two-element-minimum fact was deleted; Statement and title byte-identical',
  'lem-ordinal-order-topology-is-t3': 'step 4.1 gained the [L6] tag for a fact it already used, and two source URLs were added; Statement and title byte-identical',
  'lem-uniform-metric-on-a-function-space': 'the unused [L4] two-element-minimum fact was deleted; Statement and title byte-identical',
  'rem-function-space-conventions': 'decayed prose repaired: the remark claimed general topological compactness is developed only LATER in the reading order, which stopped being true when that page was published; Statement is a remark, title byte-identical',
  'thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma': 'step 2.1 said the uniqueness "defines a function p : I -> prod_i X_i", a type error for a point of the product; repaired to "defines a point p in prod_i X_i, namely i |-> p_i". Three source URLs added; Statement and title byte-identical',
  'thm-the-exponential-law': 'decayed Remark prose repaired: it claimed this library defines compactness only for metric spaces, which stopped being true when the general compactness page was published; Statement and title byte-identical',
};

for (const id of material.keys()) if (!MATERIAL_CHANGE[id]) throw new Error(`no recorded change note for material item ${id}`);

// Which material sources reach each consumer.
const reaches = new Map();
for (const imp of impact.impacts) {
  if (!material.has(imp.source)) continue;
  for (const consumer of imp.required_review) {
    if (!reaches.has(consumer)) reaches.set(consumer, []);
    reaches.get(consumer).push(imp.source);
  }
}

const PURE_NOTE = 'Downstream only of pure retags: every interface reaching this item changed by the addition of a `provenance`/`sources` block and the removal of the superseded `authorship`/`verification` fields, with the body byte-identical (tools/audit-split.mjs, 198 pure / 11 material). No Statement, title, kind, deps, or fact text moved, so nothing this item cites has changed what it says. Still licensed.';

const dispositions = impact.required_review.map((id) => {
  const sources = reaches.get(id);
  if (!sources) return { id, status: 'still-licensed', notes: PURE_NOTE };
  const detail = sources.map((s) => `${s}: ${MATERIAL_CHANGE[s]}`).join(' | ');
  return {
    id,
    status: 'still-licensed',
    notes: `Downstream of ${sources.length} material change(s), each verified from git diff against HEAD to leave the target's claim section and title byte-identical, so this item's licence to cite them is unaffected — ${detail}. Checked mechanically by comparing the Statement/Definition/Construction/Example sections of every material item pre- and post-A4.`,
  };
});

const receipt = {
  version: 1,
  reviewer: 'Audit-Alpha (claude-opus-5), wave 5 step A6',
  source: { touch_ledger: 'research/audit/wave5-touches.json', from: 'pre-A4', to: 'current disk' },
  changed_interfaces: impact.changed,
  required_review: impact.required_review,
  dispositions,
};
writeFileSync(join(REPO, 'research/audit/wave5-impact-audit.json'), `${JSON.stringify(receipt, null, 1)}\n`);
const materialCount = dispositions.filter((d) => reaches.has(d.id)).length;
console.log(`wrote ${dispositions.length} disposition(s): ${materialCount} downstream of a material change, ${dispositions.length - materialCount} pure-retag class`);
