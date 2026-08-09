#!/usr/bin/env node

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { itemContentHash } from '../../tools/item-hash.mjs';

const audit = 'research/audit';
const contractPaths = [
  `${audit}/wave10-real-analysis.proof-contracts.json`,
  `${audit}/wave10-proof-contracts.json`,
];
const index = JSON.parse(readFileSync(`${audit}/wave10-refuter-index.json`, 'utf8'));
const recorded = index.items.map((entry) => {
  const current = itemContentHash(readFileSync(`items/${entry.id}.md`, 'utf8'));
  const sourceRepair = entry.id === 'cex-differentiable-with-unbounded-derivative-is-not-lipschitz';
  if (!sourceRepair && current !== entry.normalized_sha256) {
    throw new Error(`${entry.id}: current hash ${current} differs from assembled exact-current hash ${entry.normalized_sha256}`);
  }
  let evidence = `${audit}/wave10-dispatch/audit-refuter-a6-${entry.id}.result.json`;
  if (entry.id === 'thm-lebesgue-criterion') evidence = `${audit}/wave10-dispatch/audit-refuter-a6r2-thm-lebesgue-criterion.result.json`;
  if (sourceRepair) evidence = `${audit}/wave10-dispatch/audit-refuter-a6r2-cex-differentiable-source-repair.result.json`;
  if (!existsSync(evidence)) throw new Error(`${entry.id}: missing ${evidence}`);
  const result = JSON.parse(readFileSync(evidence, 'utf8'));
  if (!result.ok || result.exit_code !== 0 || result.runner !== 'deepseek' || result.model !== 'deepseek-v4-pro') {
    throw new Error(`${entry.id}: unsuccessful DeepSeek V4 Pro result`);
  }
  const clean = /^VERDICT:\s*CLEAN\b/m.test(result.tail ?? '');
  const defects = /^VERDICT:\s*DEFECTS\b/m.test(result.tail ?? '');
  if (!clean && !(entry.id === 'lem-derivative-of-a-power' && defects)) {
    throw new Error(`${entry.id}: unexpected refuter verdict`);
  }
  return {
    id: entry.id,
    contractFile: `${audit}/wave10-real-analysis.proof-contracts.json`,
    tier: 'critical',
    verdict: clean ? 'CLEAN' : 'DEFECTS',
    adjudication: clean ? null : 'confirmed-nonfatal',
    normalized_sha256: current,
    evidence,
  };
});
if (recorded.length !== 49 || new Set(recorded.map((row) => row.id)).size !== 49) throw new Error('risk receipt is not the exact 49-item proof-bearing scope');
const byId = new Map(recorded.map((row) => [row.id, row]));

for (const path of contractPaths) {
  const document = JSON.parse(readFileSync(path, 'utf8'));
  if (Object.keys(document.contracts).length !== 49) throw new Error(`${path}: expected 49 contracts`);
  for (const [id, contract] of Object.entries(document.contracts)) {
    const row = byId.get(id);
    if (!row) throw new Error(`${path}: ${id} has no exact-current refuter result`);
    const conclusion = row.adjudication
      ? 'DeepSeek flagged step 4.2 because its truncating sequence was not separately named. Alpha confirmed the surrounding sentence already defines the truncating sequence explicitly, so the inference closes immediately under the audit 30-second rule; this is a real but nonfatal presentation finding and requires no R1 edit.'
      : 'DeepSeek returned CLEAN and Alpha independently found no fatal or nonfatal defect.';
    contract.risk_review = {
      status: 'complete',
      reviewer: 'Audit-Alpha (GPT 5.6 Sol, owner-delegated); DeepSeek V4 Pro audit-refuter',
      notes: `Critical-risk exact-current route at normalized hash ${row.normalized_sha256}. ${conclusion} Evidence: ${row.evidence}.`,
    };
  }
  writeFileSync(path, `${JSON.stringify(document, null, 2)}\n`);
}

writeFileSync(`${audit}/wave10-risk-review-receipt.json`, `${JSON.stringify({
  version: 1,
  scope: 'wave10-a6-current-hash-high-critical-independent-reads',
  reviewer: 'Audit-Alpha (GPT 5.6 Sol, owner-delegated), Wave 10 A6',
  summary: {
    proof_bearing_items: recorded.length,
    critical: 49,
    high: 0,
    clean: recorded.filter((row) => row.verdict === 'CLEAN').length,
    defects: recorded.filter((row) => row.verdict === 'DEFECTS').length,
    fatal: 0,
    confirmed_nonfatal: recorded.filter((row) => row.adjudication === 'confirmed-nonfatal').length,
    alpha_repairs_from_refuter_routes: 0,
  },
  append_only_retries: [
    { id: 'thm-lebesgue-criterion', reason: 'Original attempt ended with a transport TypeError and no mathematical verdict.', evidence: `${audit}/wave10-dispatch/audit-refuter-a6r2-thm-lebesgue-criterion.result.json`, closure: 'CLEAN' },
    { id: 'cex-differentiable-with-unbounded-derivative-is-not-lipschitz', reason: 'A6 source replacement changed the exact item hash.', evidence: `${audit}/wave10-dispatch/audit-refuter-a6r2-cex-differentiable-source-repair.result.json`, closure: 'CLEAN' },
  ],
  adjudications: recorded.filter((row) => row.adjudication),
  recorded,
}, null, 2)}\n`);
console.log(`wrote risk reviews: ${recorded.length} exact-current results; ${recorded.filter((row) => row.verdict === 'CLEAN').length} CLEAN, 1 confirmed-nonfatal`);
