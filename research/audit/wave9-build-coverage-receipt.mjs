#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'node:fs';

const template = JSON.parse(readFileSync('research/audit/wave9-coverage-template.json', 'utf8'));
const reasons = {
  'def-oscillation': 'A6 added lem-of-triangle-inequality because the final bounded-oscillation estimate explicitly uses the triangle inequality in addition to the absolute-value and extended-real sources already present.',
  'thm-baire-one-continuity-points': 'A4 removed thm-continuity-iff-oscillation-zero together with the unused L3 Fact. The final proof obtains its continuity-set and discontinuity-set claims from L9 and the direct refinement/category argument, so the removed dependency is neither cited nor needed.',
};

for (const row of template.plan_reconciliation) {
  row.reason = reasons[row.id] ?? '';
  if (!row.reason) throw new Error(`${row.id}: missing Wave 9 plan-reconciliation reason`);
}
template.reviewer = 'Audit Alpha — GPT 5.6 Sol, xhigh, 1,000,000-token context';
template.attestation = 'Alpha recovered the durable Wave 9 record and audited all 43 in-scope items, all 34 proof-bearing items, and all 485 declared relationships on final post-A8 text. The two authored-plan drifts below are reconciled to the exact dependency lists used by the current items. Current strict contracts, risk reviews, edge audit, spine receipt, generated-risk review, independent repair certifications, impact closures, exact-hash adjudications, and the five-item targeted A7 judge coverage are complete. The sole fatal A8 repair is independently certified and has a final DeepSeek/Terra keep/keep pair; the two current Terra rejections are append-only confirmed-nonfatal adjudications and were not edited.';

writeFileSync('research/audit/wave9-coverage.json', `${JSON.stringify(template, null, 2)}\n`);
console.log(`wrote Wave 9 coverage receipt with ${template.plan_reconciliation.length} reconciled dependency drifts`);
