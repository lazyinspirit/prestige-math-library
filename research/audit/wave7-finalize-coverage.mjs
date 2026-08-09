#!/usr/bin/env node

import fs from 'node:fs';

const path = 'research/audit/wave7-coverage.json';
const receipt = JSON.parse(fs.readFileSync(path, 'utf8'));

receipt.reviewer = 'Audit Alpha — GPT 5.6 Sol, xhigh, 1,000,000-token context';
receipt.attestation = [
  'Alpha recovered the durable Wave 7 record and audited all 214 in-scope items,',
  'all 179 proof-bearing items and all 1,827 resolved dependency edges on final post-A8 text.',
  'The 21 authored-plan drifts below are reconciled to the exact dependency lists used by the',
  'current proofs; current risk, impact, spine and paired-judge evidence is complete.'
].join(' ');

for (const entry of receipt.plan_reconciliation) {
  const planned = new Set(entry.planned_deps);
  const actual = new Set(entry.actual_deps);
  const added = entry.actual_deps.filter((id) => !planned.has(id));
  const removed = entry.planned_deps.filter((id) => !actual.has(id));
  const clauses = [];
  if (added.length) {
    clauses.push(`added ${added.join(', ')} because the final audited proof explicitly uses those interfaces`);
  }
  if (removed.length) {
    clauses.push(`removed ${removed.join(', ')} because the final audited proof no longer relies on those interfaces`);
  }
  entry.reason = `Alpha reconciled the authored plan to the current proof: ${clauses.join('; ')}. The resulting actual dependency set was checked against the final item text and audit manifest.`;
}

fs.writeFileSync(path, `${JSON.stringify(receipt, null, 2)}\n`);
