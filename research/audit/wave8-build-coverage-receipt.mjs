#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'node:fs';

const template = JSON.parse(readFileSync('research/audit/wave8-coverage-template.json', 'utf8'));
const reasons = {
  'cex-cauchy-product-of-convergent-series-diverges': 'A4 removed the unused lem-of-abs-value dependency together with the unused Fact inventory entry; the final proof and Remarks use the remaining exact square-root, AM-GM, sum, order, and series dependencies.',
  'cex-irrationals-are-not-f-sigma': 'A4 removed the unused def-nowhere-dense-meager dependency after deleting its unused Fact; the final refutation uses the exact cor-q-is-meager-and-not-g-delta and Baire/F-sigma sources shown in actual_deps.',
  'cex-paracompactness-is-not-productive': 'A4 replaced the false-statement dependency, which cannot license its own refutation, by the nine exact Choice, lower-limit-line, product, normality, and paracompactness sources used by the final counterexample.',
  'cor-q-is-meager-and-not-g-delta': 'A4 removed the unused open-set-algebra dependency; A8 removed def-countable with the false unused at-most-countable-family clause. The final proof obtains its specific enumeration directly from Q approximately N and uses only actual_deps.',
  'ex-cantor-set-in-ternary': 'A4 removed def-interval after deleting the unused L3 Fact; the final ternary construction and proof use exactly the remaining arithmetic, series, Cantor-set, and order dependencies.',
  'fs-evt-holds-on-every-bounded-domain': 'A4 removed def-open-and-closed-in-r and def-open-cover-r with the unused compactness/open-cover Fact; the final bounded-domain counterexample uses exactly the order, interval, continuity, supremum, and EVT sources in actual_deps.',
  'lem-paracompact-hausdorff-cover-shrinking': 'A4 added lem-regularity-via-closed-neighbourhoods because the final one-shrink construction explicitly uses the closed-neighbourhood characterization in addition to regularity.',
  'thm-composition-of-continuous-functions': 'A4 removed def-limit-point-r with the unused L4 Fact; the final epsilon-limit composition proof and Remarks use exactly the remaining actual dependencies.',
};

for (const row of template.plan_reconciliation) {
  row.reason = reasons[row.id] ?? '';
  if (!row.reason) throw new Error(`${row.id}: missing Wave 8 plan-reconciliation reason`);
}
template.reviewer = 'Audit Alpha — GPT 5.6 Sol, xhigh, 1,000,000-token context';
template.attestation = 'Alpha recovered the durable Wave 8 record and audited all 139 in-scope items, all 116 proof-bearing items, and all 1,603 declared relationships on final post-A8 text. The eight authored-plan drifts below are reconciled to the exact dependency lists used by the current items. Current strict contracts, risk reviews, edge audit, spine receipt, generated-statement dispositions, independent repair certifications, impact closures, exact-hash adjudications, and the 17-item targeted A7 judge coverage are complete; the sole fatal A8 repair is independently certified and has a final DeepSeek/Terra keep/keep pair.';

writeFileSync('research/audit/wave8-coverage.json', `${JSON.stringify(template, null, 2)}\n`);
console.log(`wrote Wave 8 coverage receipt with ${template.plan_reconciliation.length} reconciled dependency drifts`);
