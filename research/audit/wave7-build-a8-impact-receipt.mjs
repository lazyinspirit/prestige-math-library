#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'node:fs';

const templatePath = 'research/audit/wave7-A8-impact-template.json';
const receiptPath = 'research/audit/wave7-A8-impact-audit.json';
const receipt = JSON.parse(readFileSync(templatePath, 'utf8'));

const completenessConsumers = new Set([
  'cex-evt-and-ivt-fail-over-a-non-complete-field',
  'cex-rolle-fails-over-a-non-complete-field',
  'ex-cauchy-complete-not-complete-field',
  'fs-cauchy-complete-implies-lub',
  'fs-nested-intervals-implies-lub',
  'lem-bw-implies-archimedean',
  'lem-bw-implies-cauchy-complete',
  'lem-cauchy-complete-and-archimedean-imply-mct',
  'lem-lub-implies-nested-intervals',
  'lem-mct-implies-archimedean',
  'lem-mct-implies-lub',
  'lem-nested-intervals-and-archimedean-imply-bw',
  'rem-where-the-archimedean-hypothesis-is-needed',
  'thm-completeness-equivalences',
  'thm-nonnegative-series-bounded-partial-sums',
]);
const harmonicConsumers = new Set([
  'cex-comparison-needs-nonnegativity',
  'cex-limit-comparison-l-zero-one-directional',
  'ex-abel-dini-pair-for-the-harmonic-series',
  'ex-telescoping-sum-computed',
]);
const completionConsumers = new Set([
  'cex-the-samuel-map-need-not-preserve-the-original-uniformity',
  'cor-samuel-compactification-agrees-with-completion-for-totally-bounded-spaces',
  'cor-samuel-compactification-is-unique',
  'cor-stone-cech-compactification-maps-onto-samuel-compactification',
  'def-samuel-compactification',
  'ex-samuel-compactification-of-a-compact-hausdorff-space',
  'ex-samuel-compactification-of-discrete-naturals-is-beta-n',
  'ex-samuel-compactification-of-the-open-unit-interval',
  'ex-samuel-reflection-of-a-nonempty-indiscrete-uniform-space',
  'thm-samuel-compactification-universal-property',
  'thm-samuel-completion-is-a-compactification',
  'thm-uniform-completion-universal-property-and-uniqueness',
]);

receipt.reviewer = 'Wave 7 audit orchestrator personal audit, using Audit-Alpha A8 consumer-by-consumer disposition';
receipt.dispositions = receipt.required_review.map((id) => {
  const clauses = [];
  if (completenessConsumers.has(id)) {
    clauses.push('uses one of the five unchanged completeness definitions or their established equivalences, not the removed claim that the three developments meet only at the real numbers');
  }
  if (harmonicConsumers.has(id)) {
    clauses.push('uses only the unchanged divergence of the harmonic series; the removed slowest-divergence comparison is not a proof input');
  }
  if (completionConsumers.has(id)) {
    clauses.push('uses the unchanged Hausdorff-completion Statement and construction; narrowing the title from a categorical reflection claim changes no licensed theorem conclusion');
  }
  if (!clauses.length) throw new Error(`${id}: no A8 impact disposition class`);
  return {
    id,
    status: 'still-licensed',
    notes: `Audit-Alpha read this current consumer at A8 and confirmed it ${clauses.join('; and ')}.`,
  };
});

writeFileSync(receiptPath, `${JSON.stringify(receipt, null, 2)}\n`);
console.log(`wrote ${receiptPath}: ${receipt.dispositions.length}/${receipt.required_review.length} dispositions`);
