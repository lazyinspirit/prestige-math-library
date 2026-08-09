#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'node:fs';

const template = JSON.parse(readFileSync('research/audit/wave10-coverage-template.json', 'utf8'));
if (template.item_scope.length !== 57 || template.proof_scope.length !== 49 || template.plan_reconciliation.length !== 0) {
  throw new Error('unexpected Wave 10 coverage template census');
}
template.reviewer = 'Audit Alpha — GPT 5.6 Sol, xhigh, 1,000,000-token context';
template.attestation = 'Alpha recovered the durable Wave 10 record and audited all 57 in-scope items, all 49 proof-bearing items, all 888 declared relationships, all 115 frozen Wave10-to-Wave8/Wave9 barrier edges, all 59 proof-bearing top-100 spine items, and all 338 isolated Wave 10 impact consumers. Current strict contracts, risk reviews, edge audit, spine receipt, generated-risk review, independent repair certifications, combined and isolated impact closures, and exact-hash A7/A8 evidence are complete. A7 covered exactly four repair targets with DeepSeek/Terra pairs. The three Terra rejections have exact current Alpha outcomes: two false positives and one confirmed nonfatal under the binding thirty-second rule. A8 produced no fatal repair, no content or stamp mutation, and an empty rejudge set.';
writeFileSync('research/audit/wave10-coverage.json', `${JSON.stringify(template, null, 2)}\n`);
console.log(`wrote Wave 10 coverage receipt: ${template.item_scope.length} items, ${template.proof_scope.length} proofs, ${template.plan_reconciliation.length} plan drifts`);
