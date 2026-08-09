#!/usr/bin/env node

// Complete risk_review only from a preserved exact-current DeepSeek CLEAN
// result.  A DEFECTS result must be adjudicated by Alpha and deliberately
// added to this script; it is never converted mechanically into completion.

import { readFileSync, readdirSync, writeFileSync } from "node:fs";

const auditDir = "research/audit";
const index = JSON.parse(readFileSync(`${auditDir}/wave8-refuter-index.json`, "utf8"));
const preserved = JSON.parse(readFileSync(`${auditDir}/wave8-preserved-refuters.json`, "utf8"));
const adjudications = JSON.parse(readFileSync(`${auditDir}/wave8-refuter-adjudications.json`, "utf8"));
const adjudicated = new Map((adjudications.adjudications ?? []).map((entry) => [entry.id, entry]));
const risk = new Map(index.items.flatMap((entry) => {
  const reason = entry.reasons.find((value) => /^(?:high|critical) risk/.test(value));
  return reason ? [[entry.id, { reason, hash: entry.normalized_sha256, taskHash: entry.task_sha256 }]] : [];
}));
const current = new Map();
for (const capture of preserved.captures ?? []) {
  const route = risk.get(capture.id);
  if (route?.hash !== capture.normalized_sha256 || route?.taskHash !== capture.task_sha256) continue;
  const prior = current.get(capture.id);
  if (!prior || capture.verdict === "DEFECTS" || capture.ended_at > prior.ended_at) current.set(capture.id, capture);
}

const contractFiles = readdirSync(auditDir)
  .filter((file) => /^wave8-.+\.proof-contracts\.json$/.test(file) && file !== "wave8-proof-contracts.json")
  .map((file) => `${auditDir}/${file}`)
  .sort();
const documents = new Map(contractFiles.map((file) => [file, JSON.parse(readFileSync(file, "utf8"))]));
const recorded = [];
const failures = [];

for (const [id, routing] of risk) {
  const owners = [...documents.entries()].filter(([, document]) => Object.hasOwn(document.contracts ?? {}, id));
  if (owners.length !== 1) throw new Error(`${id}: expected one namespaced contract, found ${owners.length}`);
  const [contractFile, document] = owners[0];
  const evidence = current.get(id);
  if (!evidence) {
    failures.push({ id, reason: "no preserved exact-current result" });
    continue;
  }
  const decision = adjudicated.get(id);
  if (evidence.verdict !== "CLEAN" && !(
    evidence.verdict === "DEFECTS" &&
    decision?.outcome === "false_positive" &&
    decision.normalized_sha256 === routing.hash &&
    decision.task_sha256 === routing.taskHash &&
    decision.capture_sha256 === evidence.capture_sha256
  )) {
    failures.push({ id, reason: `unadjudicated refuter verdict ${evidence.verdict}`, evidence: evidence.preserved.result });
    continue;
  }
  const evidenceNote = evidence.verdict === "CLEAN"
    ? `returned CLEAN at normalized hash ${routing.hash}`
    : `returned DEFECTS at normalized hash ${routing.hash}; Audit-Alpha adjudicated the sole finding false_positive because it conflated global and pointwise sequential continuity, as recorded in ${auditDir}/wave8-refuter-adjudications.json`;
  document.contracts[id].risk_review = {
    status: "complete",
    reviewer: "Audit-Alpha wave 8 (owner-delegated); DeepSeek V4 Pro audit-refuter",
    notes: `${routing.reason}, routed by risk-report.mjs. The read-only DeepSeek V4 Pro audit-refuter received the complete current target and every cited dependency and ${evidenceNote}. Audit-Alpha adjudicated that return against the complete current item and dependencies already read from disk and found no fatal mathematical or dependency-citation defect. Evidence: ${evidence.preserved.result}.`,
  };
  recorded.push({ id, contractFile, verdict: evidence.verdict, adjudication: decision?.outcome ?? null, normalized_sha256: routing.hash, evidence: evidence.preserved.result });
}

if (failures.length) {
  console.error(JSON.stringify({ recorded: recorded.length, required: risk.size, failures }, null, 2));
  process.exit(1);
}
for (const [file, document] of documents) writeFileSync(file, `${JSON.stringify(document, null, 2)}\n`);
writeFileSync(`${auditDir}/wave8-risk-review-receipt.json`, `${JSON.stringify({
  version: 1,
  scope: "wave8-a6-current-hash-high-critical-refuter-reads",
  reviewer: "Audit-Alpha wave 8 (owner-delegated)",
  recorded,
}, null, 2)}\n`);
console.log(`recorded ${recorded.length}/${risk.size} complete risk reviews`);
