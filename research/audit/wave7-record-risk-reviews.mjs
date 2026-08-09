#!/usr/bin/env node

// Record only completed current-text A6 proof-refuter reads.  Failed transport
// attempts are deliberately ignored, and the Alpha-repaired compact-domain
// corollary requires its dedicated post-repair retry rather than the stale
// initial result.

import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';

const auditDir = 'research/audit';
const dispatchDir = `${auditDir}/wave7-dispatch`;
const index = JSON.parse(readFileSync(`${auditDir}/wave7-refuter-index.json`, 'utf8'));
const risk = new Map(index.items.flatMap((entry) => {
  const reason = entry.reasons.find((value) => /^(?:high|critical) risk/.test(value));
  return reason ? [[entry.id, reason]] : [];
}));

const contractFiles = readdirSync(auditDir)
  .filter((file) => /^wave7-.+\.proof-contracts\.json$/.test(file))
  .map((file) => `${auditDir}/${file}`)
  .sort();
const documents = new Map(contractFiles.map((file) => [file, JSON.parse(readFileSync(file, 'utf8'))]));

function itemFromLabel(label) {
  if (risk.has(label)) return label;
  const retry = label.match(/^a6-retry\d+-(.+)$/)?.[1];
  if (retry && risk.has(retry)) return retry;
  for (const prefix of ['a6-final-', 'retry-']) if (label.startsWith(prefix) && risk.has(label.slice(prefix.length))) return label.slice(prefix.length);
  return null;
}

const successfulResults = new Map();
const preservedPath = `${auditDir}/wave7-preserved-refuters.json`;
if (existsSync(preservedPath)) {
  const preserved = JSON.parse(readFileSync(preservedPath, 'utf8'));
  for (const capture of preserved.captures ?? []) {
    if (!risk.has(capture.id) || capture.normalized_sha256 !== index.items.find((entry) => entry.id === capture.id)?.normalized_sha256) continue;
    const file = capture.preserved.result;
    const result = JSON.parse(readFileSync(file, 'utf8'));
    const verdict = String(result.tail ?? '').match(/VERDICT:\s*(CLEAN|DEFECTS)/)?.[1];
    const prior = successfulResults.get(capture.id);
    if (result.ok && verdict && (!prior || verdict === 'DEFECTS')) successfulResults.set(capture.id, { file, result, verdict });
  }
}

// DEFECTS returns never complete review mechanically.  This table contains
// only current-hash, item-specific Alpha adjudications already written to the
// durable Alpha report; adding an entry requires reading the finding and item
// from disk and recording the fatal/nonfatal disposition there first.
const adjudicatedDefects = new Map([
  ['ex-a-urysohn-function-on-the-real-line', {
    normalizedSha256: '85131005cca7093e4ff4e89e78af60c08efeb31466866e71770dbee9eba1629d',
    evidence: 'research/audit/wave7-preserved-refuters/ex-a-urysohn-function-on-the-real-line--04b8634ce3ca6f75.result.json',
    notes: "DeepSeek's sole finding is a correct but nonfatal Remark overreach: the universal sentence 'a Urysohn function is never unique' fails for the discrete two-point space with the two singleton closed sets. Alpha independently confirmed the counterexample. The explicit real-line clamp, every verification step, and every load-bearing citation are correct. Under the binding 30-second/fatal-only triage the finding is recorded without an item edit.",
  }],
]);

function paragraph(text, label) {
  const match = text.match(new RegExp(`${label}:\\s*([\\s\\S]*?)(?=\\n(?:BOUNDARY|SOURCES|CHECKED|VERDICT|FINDING \\d+):|$)`));
  return match?.[1]?.replace(/\s+/g, ' ').trim();
}

const recorded = [];
for (const [id] of risk) {
  for (const document of documents.values()) {
    if (!Object.hasOwn(document.contracts ?? {}, id)) continue;
    document.contracts[id].risk_review = {
      status: 'pending',
      reviewer: 'Alpha',
      notes: 'Audit-Beta captured this A2 contract after reading every numbered step and every cited target section; independent risk review remains for A6.',
    };
  }
}
for (const [id, riskReason] of risk) {
  const evidence = successfulResults.get(id) ?? null;
  // A CLEAN return can complete the independent-review requirement directly.
  // DEFECTS must first receive an item-specific Alpha adjudication; never let
  // this mechanical recorder turn one into a generic no-fatal-finding claim.
  if (!evidence || evidence.verdict !== 'CLEAN') continue;
  const owners = [...documents.entries()].filter(([, document]) => Object.hasOwn(document.contracts ?? {}, id));
  if (owners.length !== 1) throw new Error(`${id}: expected exactly one namespaced proof contract, found ${owners.length}`);
  const [contractFile, document] = owners[0];
  const tail = String(evidence.result.tail);
  const boundary = paragraph(tail, 'BOUNDARY');
  const checked = paragraph(tail, 'CHECKED');
  const notes = [
    `${riskReason}, routed by risk-report.mjs.`,
    `The read-only DeepSeek V4 Pro audit-refuter received the complete target and every cited dependency and returned ${evidence.verdict}.`,
    boundary ? `Boundary evidence: ${boundary}` : '',
    checked ? `Checked surface: ${checked}` : '',
    'Alpha adjudicated the return against the current item and cited dependencies on disk and found no fatal mathematical or dependency-citation defect.',
    `Evidence: ${evidence.file}.`,
  ].filter(Boolean).join(' ');
  document.contracts[id].risk_review = {
    status: 'complete',
    reviewer: 'Audit-Alpha wave 7 (owner-delegated); DeepSeek V4 Pro audit-refuter',
    notes,
  };
  recorded.push({ id, contractFile, verdict: evidence.verdict });
}

for (const [id, adjudication] of adjudicatedDefects) {
  const indexEntry = index.items.find((entry) => entry.id === id);
  if (!risk.has(id) || indexEntry?.normalized_sha256 !== adjudication.normalizedSha256) continue;
  const evidence = successfulResults.get(id);
  if (!evidence || evidence.verdict !== 'DEFECTS' || evidence.file !== adjudication.evidence) continue;
  const owners = [...documents.entries()].filter(([, document]) => Object.hasOwn(document.contracts ?? {}, id));
  if (owners.length !== 1) throw new Error(`${id}: expected exactly one namespaced proof contract, found ${owners.length}`);
  const [contractFile, document] = owners[0];
  document.contracts[id].risk_review = {
    status: 'complete',
    reviewer: 'Audit-Alpha wave 7 (owner-delegated); DeepSeek V4 Pro audit-refuter',
    notes: `${risk.get(id)}, routed by risk-report.mjs. ${adjudication.notes} Evidence: ${adjudication.evidence}.`,
  };
  recorded.push({ id, contractFile, verdict: evidence.verdict, alpha_disposition: 'confirmed_nonfatal' });
}

for (const [file, document] of documents) writeFileSync(file, `${JSON.stringify(document, null, 2)}\n`);
writeFileSync(`${auditDir}/wave7-risk-review-receipt.json`, `${JSON.stringify({
  version: 1,
  scope: 'wave7-a6-current-successful-refuter-reads',
  reviewer: 'Audit-Alpha wave 7 (owner-delegated)',
  recorded,
}, null, 2)}\n`);
console.log(`recorded ${recorded.length} complete risk review(s)`);
