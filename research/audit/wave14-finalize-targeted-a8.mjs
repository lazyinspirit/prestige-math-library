#!/usr/bin/env node

import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("../../", import.meta.url).pathname;
const audit = join(root, "research/audit");
const readJson = (path) => JSON.parse(readFileSync(join(root, path), "utf8"));
const writeJson = (path, value) => writeFileSync(join(root, path), `${JSON.stringify(value, null, 2)}\n`);

const template = JSON.parse(readFileSync("/tmp/wave14-coverage-template.json", "utf8"));
const driftReasons = {
  "cor-exponential-reciprocal-and-positivity": "Wave14 A4 removed two insufficient ordered-field dependencies and added lem-of-square-positive, whose exact Statement licenses the nonzero-square positivity step. Alpha read the changed dependency and its use in full.",
  "ex-exponential-product-limit-at-negative-input": "Wave14 A4 added the exponential definition, addition formula, and integer-power definition required to identify exp(-2)=e^-2. A8 then repaired the n=0 definition defect and added lem-limit-of-tail as the exact transfer from the n>2 tail to the full sequence. Alpha read all six final dependencies and Terra certified the exact-final repair.",
  "lem-exponential-series-has-infinite-radius": "Wave14 A4 added lem-of-naturals-positive, whose exact Statement supplies strict increase, positivity/nonzeroness, and product preservation for the embedded factorial ratio. Alpha read the dependency and its use in full.",
  "thm-e-is-irrational": "Wave14 A4 added lem-of-naturals-positive. A8 added the positive-denominator, N-to-Z-to-Q-to-R embedding, binomial-factorial divisibility, and integer-ring dependencies required by the typed integrality argument. Alpha read every added target completely; independent Terra certification found no defect in the exact-final repair.",
  "thm-normalized-exponential-functional-equation": "Wave14 A4 added def-real-exponential-function-and-e and thm-derivative-of-exponential to license existence of the normalized exponential solution in both uniqueness arguments. Alpha read the added dependencies and exact uses in full.",
};
for (const drift of template.plan_reconciliation) {
  const reason = driftReasons[drift.id];
  if (!reason) throw new Error(`missing plan reconciliation reason for ${drift.id}`);
  drift.reason = reason;
}
if (template.plan_reconciliation.length !== Object.keys(driftReasons).length) throw new Error("unexpected Wave14 plan-drift scope");
template.reviewer = "Audit-Alpha (GPT 5.6 Sol xhigh/1M, owner-delegated), Wave 14 exact-final A8 coverage";
template.attestation = "Alpha recovered the complete durable Wave14 record and audited all 25 scoped items, both page files, all 23 proof-bearing items and strict contracts, all 178 exact-final relationships, all 16 frozen Wave14-to-Wave11/Wave12/Wave13 barrier edges, all 66 distinct outside targets, all 59 proof-bearing top-100 spine items, and every required impact consumer without sampling. A7 covered exactly the ten recorded A4/A6 repair targets with paired DeepSeek/Terra verdicts; all nine initial rejection tuples have exact Alpha outcomes. A8 changed exactly two confirmed-fatal items, independently Terra-certified both exact-final repairs, dispositioned the sole consumer still-licensed, and rejudged exactly those two items. The targeted example is keep/keep and honestly judge-stamped. The repaired e theorem is DeepSeek keep/Terra reject; Alpha appended an exact-current false-positive adjudication because the cited ordered embeddings and canonical-natural positivity prove integer discreteness. No adjudication manufactures a pass, so that theorem remains without a judge stamp. All ten required target pairs are covered and every current rejection has an exact nonfatal or false-positive disposition.";
writeJson("research/audit/wave14-coverage.json", template);

const adjudicationReceipt = readJson("research/audit/wave14-A8-adjudication-receipt.json");
adjudicationReceipt.a7_scope = {
  target_receipt: "research/audit/wave14-rejudge-targets.json",
  targets: 10,
  substantive_verdict_rows: 20,
  deepseek_pass: 7,
  deepseek_reject: 3,
  terra_pass: 4,
  terra_reject: 6,
  rejection_rows: 9,
  unique_rejected_ids: 7,
};
adjudicationReceipt.targeted_a8_rejudge = {
  target_receipt: "research/audit/wave14-targeted-judge-receipt.json",
  targets: 2,
  verdict_rows: 4,
  deepseek_pass: 2,
  deepseek_reject: 0,
  terra_pass: 1,
  terra_reject: 1,
  rejection_rows: 1,
  adjudicated_rejection_rows: 1,
  confirmed_fatal: 0,
  confirmed_nonfatal: 0,
  false_positive: 1,
  unadjudicated: 0,
  pass_only_stamp_report: "research/audit/wave14-A8-targeted-stamps.json",
  stamped: ["ex-exponential-product-limit-at-negative-input"],
  honestly_unstamped: ["thm-e-is-irrational"],
};
adjudicationReceipt.stamps.judge_added = 1;
adjudicationReceipt.stage_boundary.targeted_rejudge_completed_by_orchestrator = true;
adjudicationReceipt.a9_handoff = {
  coverage_receipt: "research/audit/wave14-coverage.json",
  coverage_status: "pass",
  exact_repaired_target_count: 2,
  unresolved_fatal_rejections: 0,
  instruction: "A8 is closed. A9 may inspect the two repaired files and exact scope-denial candidates without rejudging any unchanged item or treating the honestly unstamped false-positive theorem as a failure.",
};
writeJson("research/audit/wave14-A8-adjudication-receipt.json", adjudicationReceipt);

writeJson("research/audit/wave14-A8-gate-receipt.json", {
  version: 1,
  scope: "wave14-a8-gates",
  reviewer: "Audit-Alpha (GPT 5.6 Sol xhigh/1M, owner-delegated), Wave 14 exact-final A8",
  authoritative_command: "node tools/gates.mjs --audit --step A8 --run wave14 --json",
  authoritative_execution: "approved host route after exact targeted rejudge and coverage closure",
  authoritative_summary: {
    gates: 3,
    passed: 3,
    failed: 0,
    warned: 0,
  },
  passed: [
    "step8-guard.mjs: exactly two changed ids, both hash-licensed by confirmed-fatal adjudications, zero errors/warnings",
    "impact-audit.mjs: exactly two changed public interfaces, one required consumer, zero errors/warnings",
    "level-coverage.mjs: 25 items, 23 proofs, 178 relationships, 10/10 paired targets, zero errors and seven expected adjudicated-rejection warnings",
  ],
  additional_passes: [
    "precheck.mts: 2/2 repaired items",
    "proof-contract.mjs --strict: 23/23, zero errors/warnings",
    "risk-report.mjs --require-reviewed: 23/23",
    "content-policy.mjs --audit: 25 scoped items, zero errors, one expected generated-kind warning",
    "spine-audit.mjs: 59 exact-hash attestations, zero errors/warnings",
    "genrisk.mjs --receipt: 125 seeds, zero errors",
    "audit-manifest.mjs: 178 exact-current relationships",
    "independent Terra repair certification: 2/2 CERTIFIED/FINDINGS NONE",
    "targeted stamp gate: one keep/keep example stamped; one Terra-rejected theorem skipped honestly",
    "git diff --check",
  ],
  coverage_closure: {
    receipt: "research/audit/wave14-coverage.json",
    item_scope: 25,
    proof_scope: 23,
    relationships: 178,
    judge_scope: 10,
    judge_pairs: 10,
    errors: 0,
    warnings: 7,
    unresolved_fatal_rejections: 0,
  },
  stage_boundary: {
    targeted_rejudge_started_by_alpha: false,
    targeted_rejudge_completed_by_orchestrator: true,
    a9_started: false,
    commit_or_push: false,
  },
});

writeJson("research/audit/wave14-A8-targeted-handoff-receipt.json", {
  version: 1,
  run: "wave14",
  stage: "A8-targeted",
  reviewer: "Audit-Alpha (GPT 5.6 Sol xhigh/1M, owner-delegated)",
  source: {
    targets: "research/audit/wave14-A8-rejudge-targets.json",
    judge_ledger: "research/audit/wave14-judge.jsonl",
    adjudications: "research/audit/wave14-judge-adjudications.jsonl",
    targeted_receipt: "research/audit/wave14-targeted-judge-receipt.json",
    stamp_report: "research/audit/wave14-A8-targeted-stamps.json",
  },
  target_count: 2,
  verdict_rows: 4,
  outcomes: [
    {
      id: "ex-exponential-product-limit-at-negative-input",
      context_sha256: "c6fbe5bd86357a64fe8a524f7712757dd92300ac5c2bd030cb5a6730bbb5c6ff",
      normalized_sha256: "8829d15a4f637c1c7d421a770db48d6aecec84f10a70120ca4f9b8b1a1912d8f",
      deepseek: "keep",
      terra: "keep",
      judge_stamp: "applied",
    },
    {
      id: "thm-e-is-irrational",
      context_sha256: "25881e78f3101aa0f146fd4c68c42f337ff830247daa7c77841021a31f0fada0",
      normalized_sha256: "8ea24c102b30f21259e235b2839c2ed7ee5c73384f714b01ca0bdbd13dbc75ea",
      deepseek: "keep",
      terra: "reject",
      terra_adjudication: "false_positive",
      judge_stamp: "withheld-honestly",
    },
  ],
  coverage: {
    receipt: "research/audit/wave14-coverage.json",
    item_scope: 25,
    proof_scope: 23,
    relationships: 178,
    judge_pairs: 10,
    errors: 0,
    warnings: 7,
  },
  content_mutation_after_targeted_rejudge: false,
  additional_rejudges: 0,
  a9_started: false,
});

const reportPath = join(audit, "wave14-A8.md");
let report = readFileSync(reportPath, "utf8");
report = report.replace(
  "Coverage cannot become exact-current for the two repaired items until the orchestrator runs the required paired targeted rejudge; Alpha did not start it.",
  "The orchestrator then ran the required paired targeted rejudge on exactly the two repaired ids. The product-limit example passed both lanes and received the only honest targeted judge stamp. The e theorem passed DeepSeek; Terra rejected only the claimed integer-discreteness step. Alpha appended an exact-current false-positive adjudication: the cited ordered embeddings turn a positive embedded integer into the image of a natural q>=1, and canonical-natural positivity gives A>=1, contradicting A<1. The theorem therefore remains byte-identical and, because one lane rejected, honestly has no judge-pass stamp. Exact-final coverage passes for all ten recorded A7 targets with seven expected adjudicated-rejection warnings and zero errors."
);
report = report.replace(
  "Alpha did not rejudge unchanged items, write any judge stamp, start A9, commit, or push.",
  "No unchanged item was rejudged. The orchestrator's exact targeted run produced one pass-only judge stamp; Alpha wrote no manufactured pass for the rejected theorem and did not start A9, commit, or push."
);
writeFileSync(reportPath, report);

const repairPath = join(audit, "wave14-published-repairs.md");
let repairLedger = readFileSync(repairPath, "utf8");
if (!repairLedger.includes("## A8 exact targeted rejudge closure")) {
  repairLedger += `\n## A8 exact targeted rejudge closure\n\nThe orchestrator rejudged only the two A8-repaired ids. \`ex-exponential-product-limit-at-negative-input\` returned DeepSeek/Terra keep/keep at context \`c6fbe5bd...\` and received the sole pass-only judge stamp. \`thm-e-is-irrational\` returned DeepSeek keep and Terra reject at context \`25881e78...\`; Alpha adjudicated the discreteness objection false positive from the exact ordered-embedding chain. The theorem remains unchanged and honestly unstamped. Coverage closes 10/10 target pairs, 25 items, 23 proofs, and 178 relationships with zero errors.\n`;
  writeFileSync(repairPath, repairLedger);
}

console.log(JSON.stringify({ coverage: { scope: 25, proofs: 23, relationships: 178, judge_pairs: 10 }, stamped: 1, honestly_unstamped: 1, a9_started: false }, null, 2));
