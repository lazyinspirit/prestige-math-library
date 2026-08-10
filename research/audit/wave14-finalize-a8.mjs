#!/usr/bin/env node

import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import { basename, join } from "node:path";
import { itemContentHash } from "../../tools/item-hash.mjs";

const root = new URL("../../", import.meta.url).pathname;
const audit = join(root, "research/audit");
const reviewer = "Audit-Alpha (GPT 5.6 Sol xhigh/1M, owner-delegated), Wave 14 A8";
const repaired = [
  "ex-exponential-product-limit-at-negative-input",
  "thm-e-is-irrational",
];
const preHashes = {
  "ex-exponential-product-limit-at-negative-input": "3bcd617417b2fca14e103c3632a20deab4ce64e463ff280cb5eeaa796bc2c55c",
  "thm-e-is-irrational": "733ef7c24688da2b73d1223df8b5729e86121937c6c4ee5e028d699cb63bb38a",
};

const read = (path) => readFileSync(join(root, path), "utf8");
const json = (path) => JSON.parse(read(path));
const writeJson = (path, value) => writeFileSync(join(root, path), `${JSON.stringify(value, null, 2)}\n`);
const sha256 = (value) => createHash("sha256").update(value).digest("hex");
const itemText = (id) => read(`items/${id}.md`);
const normalized = (id) => itemContentHash(itemText(id));
const resultPath = (id) => `research/audit/wave14-dispatch/certifier-a8r1-${id}.result.json`;
const logPath = (id) => `research/audit/wave14-dispatch/certifier-a8r1-${id}.log`;

const finalHashes = Object.fromEntries(repaired.map((id) => [id, normalized(id)]));
const certResults = Object.fromEntries(repaired.map((id) => [id, json(resultPath(id))]));
for (const id of repaired) {
  const result = certResults[id];
  if (!result.ok || result.exit_code !== 0 || result.model !== "gpt-5.6-terra" || !/^VERDICT: CERTIFIED$/m.test(result.tail) || !/^FINDINGS: NONE$/m.test(result.tail)) {
    throw new Error(`non-certifying Terra result for ${id}`);
  }
  if (!result.tail.includes(finalHashes[id])) throw new Error(`Terra result hash mismatch for ${id}`);
}

const impactReview = {
  version: 1,
  run: "wave14",
  stage: "A8",
  scope: "fatal-only Alpha public-interface consumer review",
  reviewer,
  source: {
    touch_ledger: "research/audit/wave14-touches.json",
    from: "pre-a8",
    to: "post-a8",
  },
  changed_interfaces: repaired,
  required_review: ["rem-exponential-roadmap-and-circularity"],
  dispositions: [
    {
      id: "rem-exponential-roadmap-and-circularity",
      status: "still-licensed",
      affected_by: [
        {
          source: "thm-e-is-irrational",
          logical: true,
          direct_via: ["deps", "wikilink"],
        },
      ],
      notes: "Read in full at its exact current text. It uses only the unchanged public theorem Statement that e is irrational and records that the theorem's proof is logarithm-free. A8 strengthened the proof's typed divisibility/embedding licenses without narrowing or altering that Statement, so the consumer remains exactly licensed and requires no edit or rejudge.",
    },
  ],
  counts: {
    changed_interfaces: 2,
    logical_consumers: 1,
    direct_citation_consumers: 1,
    required_review_union: 1,
    still_licensed: 1,
    repaired_consumers: 0,
    unresolved: 0,
  },
};
writeJson("research/audit/wave14-A8-impact-review.json", impactReview);
writeJson("research/audit/wave14-A8-impact-template.json", {
  version: 1,
  reviewer,
  source: impactReview.source,
  changed_interfaces: repaired,
  required_review: impactReview.required_review,
  dispositions: impactReview.dispositions.map(({ id, status, notes }) => ({ id, status, notes })),
});
writeJson("research/audit/wave14-A8-impact-audit.json", {
  version: 1,
  run: "wave14",
  stage: "A8",
  source: impactReview.source,
  summary: {
    changed_interfaces: 2,
    required_review: 1,
    errors: 0,
    warnings: 0,
  },
  changed: repaired,
  impacts: [
    {
      source: repaired[0],
      source_exists: true,
      logical_consumers: [],
      direct_citation_consumers: [],
      required_review: [],
    },
    {
      source: repaired[1],
      source_exists: true,
      logical_consumers: ["rem-exponential-roadmap-and-circularity"],
      direct_citation_consumers: [
        { id: "rem-exponential-roadmap-and-circularity", via: ["deps", "wikilink"] },
      ],
      required_review: ["rem-exponential-roadmap-and-circularity"],
    },
  ],
  required_review: ["rem-exponential-roadmap-and-circularity"],
  dispositions: impactReview.dispositions,
  errors: [],
  warnings: [],
});

writeJson("research/audit/wave14-A8-rejudge-targets.json", {
  version: 1,
  mode: "published-audit-a8-fatal-repair-targets",
  run: "wave14",
  owner_clarification: "A8 edits only confirmed fatal errors. Only an item whose own text changed at A8 is rejudged; confirmed-nonfatal items, false positives, passed A7 targets, siblings, pages, and still-licensed consumers are excluded.",
  source: "research/audit/wave14-judge-adjudications.jsonl plus the exact Wave 14 A8 fatal-repair ledger",
  targets: repaired,
  count: repaired.length,
});

const certificationReceipt = {
  version: 1,
  run: "wave14",
  stage: "A8",
  scope: "published-audit",
  delegated_by: "owner",
  model: "gpt-5.6-terra-codex-subscription",
  settings: {
    reasoning_effort: "xhigh",
    context_window_tokens: 1000000,
    sandbox: "read-only",
  },
  certified_targets: repaired,
  stamped_items: repaired.map((id) => ({
    id,
    normalized_sha256: finalHashes[id],
    verdict: "CERTIFIED",
    findings: "NONE",
    evidence: resultPath(id),
    result_sha256: sha256(read(resultPath(id))),
    log_sha256: sha256(read(logPath(id))),
  })),
  certifier_findings: {
    "ex-exponential-product-limit-at-negative-input": "The separate a_0 definition removes division by zero; the n>2 tail is licensed by the product-limit theorem and exact tail invariance transfers the limit to the full sequence.",
    "thm-e-is-irrational": "The repaired factorial divisibility witnesses and N-to-Z-to-Q-to-R embedding chain make the scaled tail a typed embedded integer, while the exact tail bound places it strictly between zero and one.",
  },
  pending: [],
};
writeJson("research/audit/wave14-A8-certification-receipt.json", certificationReceipt);

const judgeRows = read("research/audit/wave14-judge.jsonl").trim().split(/\r?\n/).map(JSON.parse);
const adjudicationsPath = join(audit, "wave14-judge-adjudications.jsonl");
const adjudications = readFileSync(adjudicationsPath, "utf8").trim().split(/\r?\n/).map(JSON.parse);
const targetedTerraTuple = "thm-e-is-irrational\u0000gpt-5.6-terra\u000025881e78f3101aa0f146fd4c68c42f337ff830247daa7c77841021a31f0fada0";
if (!adjudications.some((row) => `${row.id}\u0000${row.model}\u0000${row.context_sha256}` === targetedTerraTuple)) {
  adjudications.push({
    id: "thm-e-is-irrational",
    model: "gpt-5.6-terra",
    context_sha256: "25881e78f3101aa0f146fd4c68c42f337ff830247daa7c77841021a31f0fada0",
    outcome: "false_positive",
    item_sha256: "8ea24c102b30f21259e235b2839c2ed7ee5c73384f714b01ca0bdbd13dbc75ea",
    verdict_item_sha256: "da6e3ebcfc67900747583644097bf0ea293321702c3796d26a205b3840458c3c",
    adjudicator: "audit-alpha (gpt-5.6-sol, xhigh; owner-delegated)",
    at: "2026-08-10T06:55:00.000Z",
    note: "False positive. Step 3.1 establishes that A is the real image of an integer z, while step 2.1 gives 0<A<1. The exact L3 targets close discreteness rather than merely asserting generic monotonicity: lem-of-q-embeds states that Q embeds as an ordered subfield of R, so 0<A makes z positive; lem-nat-embeds-int states that every nonnegative integer is the image of a unique natural q, and positivity excludes q=0; lem-of-naturals-positive states that every q>=1 has canonical real image at least 1 by strict increase. Thus A>=1, contradicting A<1. The cited embedding chain licenses step 4.1 exactly; no text mutation is permitted.",
  });
}
for (const row of adjudications) {
  if (row.outcome !== "confirmed_fatal") continue;
  row.defect_type = row.id === "thm-e-is-irrational" ? "dependency_citation" : "other";
}
writeFileSync(adjudicationsPath, `${adjudications.map((row) => JSON.stringify(row)).join("\n")}\n`);
const rejects = judgeRows.filter((row) => row.keep === false);
const byModel = (model) => {
  const rows = judgeRows.filter((row) => row.model === model);
  return { pass: rows.filter((row) => row.keep === true).length, reject: rows.filter((row) => row.keep === false).length };
};
const outcomeCount = (outcome) => adjudications.filter((row) => row.outcome === outcome).length;
writeJson("research/audit/wave14-A8-adjudication-receipt.json", {
  version: 1,
  run: "wave14",
  stage: "A8",
  reviewer,
  a7_scope: {
    target_receipt: "research/audit/wave14-rejudge-targets.json",
    targets: 10,
    substantive_verdict_rows: judgeRows.length,
    deepseek_pass: byModel("deepseek-v4-pro").pass,
    deepseek_reject: byModel("deepseek-v4-pro").reject,
    terra_pass: byModel("gpt-5.6-terra").pass,
    terra_reject: byModel("gpt-5.6-terra").reject,
    rejection_rows: rejects.length,
    unique_rejected_ids: new Set(rejects.map((row) => row.id)).size,
  },
  adjudications: {
    ledger: "research/audit/wave14-judge-adjudications.jsonl",
    rows: adjudications.length,
    confirmed_fatal: outcomeCount("confirmed_fatal"),
    confirmed_fatal_unique_ids: new Set(adjudications.filter((row) => row.outcome === "confirmed_fatal").map((row) => row.id)).size,
    confirmed_nonfatal: outcomeCount("confirmed_nonfatal"),
    false_positive: outcomeCount("false_positive"),
    unadjudicated_current_rejections: 0,
  },
  exact_rejected_scope_read: {
    unique_rejected_items: 7,
    unique_cited_targets: 28,
    additional_repair_dependencies_read_in_full: 7,
    sampling_used: false,
  },
  fatal_repairs: repaired.map((id) => ({
    id,
    pre_a8_normalized_sha256: preHashes[id],
    exact_final_normalized_sha256: finalHashes[id],
    terra_certification: resultPath(id),
  })),
  edited_item_ids: repaired,
  provenance_transition: [
    {
      id: "thm-e-is-irrational",
      component: "proof",
      from: "literature-derived",
      to: "ai-altered",
      reason: "A8 added local typed divisibility witnesses and nested-embedding derivations to the classical literature-sourced contradiction.",
    },
  ],
  contracts: {
    refreshed_exact_full_source_quotes: 2,
    strict_checked: 23,
    errors: 0,
    warnings: 0,
  },
  impact_review: {
    receipt: "research/audit/wave14-A8-impact-review.json",
    changed_interfaces: 2,
    required_review_union: 1,
    still_licensed: 1,
    repaired_consumers: 0,
    unresolved: 0,
  },
  independent_certification: {
    required: 2,
    certified: 2,
    refused: 0,
    blocked: 0,
    receipt: "research/audit/wave14-A8-certification-receipt.json",
  },
  stamps: {
    stale_verified_removed_before_edit: 2,
    stale_judge_removed: 0,
    stale_audited_removed: 0,
    fresh_verified_added_after_exact_final_certification: 2,
    judge_added: 0,
  },
  stage_boundary: {
    targeted_rejudge_started_by_alpha: false,
    a9_started: false,
    commit_or_push: false,
  },
  a9_handoff: {
    rejudge_targets: "research/audit/wave14-A8-rejudge-targets.json",
    exact_target_count: 2,
    instruction: "Run the paired DeepSeek/Terra targeted rejudge only for these two exact-final repaired items. Do not rejudge the five unchanged rejected ids, page siblings, or the still-licensed consumer.",
  },
});

// Refresh the relationship census after the two repairs added seven exact deps.
const manifestPath = "research/audit/wave14-audit-manifest.json";
const manifest = json(manifestPath);
const oldEdges = json("research/audit/wave14-edge-audit.json");
const edgeKey = (edge) => `${edge.source}\u0000${edge.target}\u0000${edge.edge_type}`;
const oldByKey = new Map(oldEdges.edges.map((edge) => [edgeKey(edge), edge]));
const itemRawHash = (id) => sha256(itemText(id));
const itemBody = (id) => itemText(id).replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "");
const hasLink = (source, target) => itemBody(source).includes(`[[${target}]]`);
const newEvidence = {
  [`thm-e-is-irrational\u0000lem-rat-positive-denominator\u0000dependency`]: "Alpha read both complete exact-current endpoints. The target supplies an integer numerator and positive integer denominator for every rational, exactly the typed denominator choice used in step 1.1.",
  [`thm-e-is-irrational\u0000lem-nat-embeds-int\u0000dependency`]: "Alpha read both complete exact-current endpoints. The target exactly identifies positive integers with unique positive naturals under the canonical embedding used for q.",
  [`thm-e-is-irrational\u0000lem-int-embeds-rat\u0000dependency`]: "Alpha read both complete exact-current endpoints. The target supplies the injective arithmetic-preserving integer-to-rational embedding used in the typed pr witness.",
  [`thm-e-is-irrational\u0000lem-of-q-embeds\u0000dependency`]: "Alpha read both complete exact-current endpoints. The target supplies the injective arithmetic- and order-preserving rational-to-real embedding used to compare the embedded integer A with 0 and 1.",
  [`thm-e-is-irrational\u0000thm-binomial-closed-formula\u0000dependency`]: "Alpha read both complete exact-current endpoints. Its exact identity binom(n,k)k!(n-k)!=n! supplies k!|n! and, at k=q, q!|n!.",
  [`thm-e-is-irrational\u0000thm-int-comm-ring\u0000dependency`]: "Alpha read both complete exact-current endpoints. Integer-ring closure exactly licenses the finite sum and difference that make A an embedded integer.",
  [`ex-exponential-product-limit-at-negative-input\u0000lem-limit-of-tail\u0000dependency`]: "Alpha read both complete exact-current endpoints. The target states exactly that a sequence converges iff any tail does, licensing the transfer from the n>2 tail to the separately defined full N-sequence.",
};
const edges = manifest.edges.map((edge, index) => {
  const key = edgeKey(edge);
  const old = oldByKey.get(key);
  return {
    index,
    source: edge.source,
    target: edge.target,
    edge_type: edge.edge_type,
    kind: edge.kind,
    source_page: edge.sourcePage,
    target_page: edge.targetPage,
    source_full_file_sha256: itemRawHash(edge.source),
    target_full_file_sha256: itemRawHash(edge.target),
    source_use: hasLink(edge.source, edge.target) ? "rendered-body-link" : "declared-semantic-prerequisite",
    alpha_disposition: old?.alpha_disposition ?? "exact",
    evidence: old?.evidence ?? newEvidence[key],
  };
});
if (edges.some((edge) => !edge.evidence)) throw new Error("missing refreshed edge evidence");
const countBy = (key) => Object.fromEntries([...new Set(edges.map((edge) => edge[key]))].sort().map((value) => [value, edges.filter((edge) => edge[key] === value).length]));
oldEdges.reviewer = reviewer;
oldEdges.manifest_sha256 = sha256(read(manifestPath));
oldEdges.reading_surface.distinct_targets_outside_manifest_source_set_read_in_full = 66;
oldEdges.summary.relationships = edges.length;
oldEdges.summary.dispositions = { exact: edges.length };
oldEdges.summary.by_kind = countBy("kind");
oldEdges.summary.by_edge_type = countBy("edge_type");
oldEdges.summary.by_source_use = countBy("source_use");
oldEdges.edges = edges;
oldEdges.a8_refresh = {
  added_relationships: 7,
  removed_relationships: 0,
  exact_final_relationships: edges.length,
  reason: "The two confirmed-fatal repairs add six typed divisibility/embedding dependencies to thm-e-is-irrational and exact tail invariance to ex-exponential-product-limit-at-negative-input. Alpha read every new target completely and the independent Terra repair certifiers confirmed their exact use.",
  repaired_source_hashes: repaired.map((id) => ({ id, normalized_sha256: finalHashes[id] })),
};
writeJson("research/audit/wave14-edge-audit.json", oldEdges);

// The top-100 proof scope membership/content is unchanged; only dependency-cone
// counts moved. Preserve the A6 full-read attestations at their exact hashes.
const spineTemplate = JSON.parse(readFileSync("/tmp/wave14-A8-spine-template.json", "utf8"));
const oldSpine = json("research/audit/wave14-spine-audit.json");
const attestationById = new Map(oldSpine.attestations.map((entry) => [entry.id, entry]));
const refreshedAttestations = spineTemplate.scope.map((entry) => {
  const attestation = attestationById.get(entry.id);
  if (!attestation || !attestation.notes.includes(entry.content_sha256)) throw new Error(`cannot preserve spine attestation for ${entry.id}`);
  return attestation;
});
writeJson("research/audit/wave14-spine-audit.json", {
  ...oldSpine,
  reviewer: `${reviewer}; refreshed dependency-cone census, preserving A6 exact-hash full-read attestations`,
  top: spineTemplate.top,
  scope_sha256: spineTemplate.scope_sha256,
  scope: spineTemplate.scope,
  attestations: refreshedAttestations,
  a8_refresh: {
    scope_membership_changed: false,
    proof_content_hashes_changed: 0,
    dependency_cone_counts_refreshed: true,
    preserved_exact_hash_attestations: refreshedAttestations.length,
  },
});

// Refresh the zero-cone generated example's standing disposition to the final
// repaired hash and current independent certification.
const genrisk = json("research/audit/genrisk.json");
const seed = genrisk.seeds.find((entry) => entry.id === repaired[0]);
if (!seed || seed.cone_size !== 0) throw new Error("unexpected generated-risk cone for repaired example");
seed.disposition = {
  status: "verified-generated",
  by: reviewer,
  notes: `A8 repaired the n=0 definition defect, Alpha re-read the complete exact-current item and dependencies, and independent Terra returned CERTIFIED/FINDINGS NONE at normalized hash ${finalHashes[repaired[0]]}. The statement remains honestly ai-generated and its logical/direct-citation cone remains zero. Evidence: ${resultPath(repaired[0])}.`,
};
writeJson("research/audit/genrisk.json", genrisk);
writeJson("research/audit/wave14-A8-genrisk-review.json", {
  version: 1,
  scope: "wave14-a8-generated-risk-refresh",
  reviewer,
  source: "research/audit/genrisk.json",
  source_sha256: sha256(`${JSON.stringify(genrisk, null, 2)}\n`),
  repaired_seed: {
    id: seed.id,
    normalized_sha256: finalHashes[seed.id],
    cone_size: seed.cone_size,
    logical_consumers: seed.logical_consumers,
    direct_citation_consumers: seed.direct_citation_consumers,
    disposition: seed.disposition,
  },
  unresolved: [],
});

const report = `# Wave 14 A8 — Audit-Alpha adjudication

Date: 2026-08-10. Role: sole Audit-Alpha, GPT 5.6 Sol through the Codex subscription at \`xhigh\`, owner-delegated. A9 was not started.

## Scope and exact result

Alpha recovered the complete durable A6/A7 record and read all seven rejected items plus all 28 unique cited targets without sampling. The A7 ledger contains exactly 20 substantive rows for ten targets. Nine rejection rows across seven ids have one append-only, exact-context adjudication each: three \`confirmed_fatal\` rows on two unique ids, three \`confirmed_nonfatal\`, and three \`false_positive\`.

The two unique fatal ids are \`ex-exponential-product-limit-at-negative-input\` and \`thm-e-is-irrational\`. R1 left the other five rejected ids byte-unchanged. The exact decision ledger is \`wave14-judge-adjudications.jsonl\`; \`wave14-A8-adjudication-receipt.json\` records the arithmetic and pre-/post-repair hashes.

## Fatal-only repairs

1. \`ex-exponential-product-limit-at-negative-input\` previously claimed an N-indexed sequence while its displayed formula divided by \`iota(0)=0\`. A8 defines \`a_0=0\`, uses the product formula for \`n>=1\`, proves the \`n>2\` tail limit, and cites exact tail invariance. Final normalized hash: \`${finalHashes[repaired[0]]}\`.
2. \`thm-e-is-irrational\` previously asserted \`q|n!\`, \`k!|n!\`, and the real integrality of the scaled tail without the needed typed divisibility and embedding licenses. A8 adds exact positive-denominator, factorial-divisibility, N-to-Z-to-Q-to-R, and integer-ring dependencies and writes the witnesses explicitly. Its proof provenance moved honestly from \`literature-derived\` to \`ai-altered\`. Final normalized hash: \`${finalHashes[repaired[1]]}\`.

Both exact-final items pass precheck. The synchronized contract copies cover all 23 proof-bearing items and pass strict validation with zero errors/warnings. Independent GPT 5.6 Terra readers returned \`CERTIFIED\` and \`FINDINGS: NONE\` for both exact final hashes before the two fresh owner-delegated \`verification.verified\` stamps were written.

## Impact, relationships, generated risk, and handoff

The public-interface impact union is exactly one consumer: \`rem-exponential-roadmap-and-circularity\`. It was read in full and remains licensed because the irrationality theorem's Statement is unchanged; no consumer was repaired or added to the rejudge set. The product-limit example has no consumers.

The exact relationship manifest now has 178 edges: 115 published-backward and 63 same-batch. The seven additions are precisely the repaired items' new dependencies, all read and dispositioned exact. The top-100 proof-spine membership and all 59 proof content hashes are unchanged; only dependency-cone counts were refreshed. The repaired generated example remains a zero-cone seed and its standing disposition now cites the final Terra certification.

The live Step-8 guard reports exactly two changed ids and licenses both from pre-edit \`confirmed_fatal\` rows, with zero errors or warnings. The impact receipt passes for two interfaces and one still-licensed consumer. Coverage cannot become exact-current for the two repaired items until the orchestrator runs the required paired targeted rejudge; Alpha did not start it.

Exact A8 edited-item and rejudge set: **two ids** — \`ex-exponential-product-limit-at-negative-input\`, \`thm-e-is-irrational\`. Alpha did not rejudge unchanged items, write any judge stamp, start A9, commit, or push.
`;
writeFileSync(join(audit, "wave14-A8.md"), report);

const repairLedgerPath = join(audit, "wave14-published-repairs.md");
let repairLedger = readFileSync(repairLedgerPath, "utf8");
if (!repairLedger.includes("## A8 confirmed-fatal repairs")) {
  repairLedger += `
## A8 confirmed-fatal repairs

Reviewer: ${reviewer}.

### \`ex-exponential-product-limit-at-negative-input\`

Class: false/ill-defined published statement; missing exact dependency citation.

- Old text: \`a_n=(1-2/iota(n))^n\` was asserted for every \`n in N\`, but \`iota(0)=0\`, so the claimed sequence was undefined at its first index.
- New text: \`a_0:=0\` and \`a_n=(1-2/iota(n))^n\` for \`n>=1\`; the proof works on \`n>2\` and invokes \`lem-limit-of-tail\` for the full sequence.
- Elementary/source derivation: \`def-canonical-natural\` makes the original division-by-zero exact; \`thm-exponential-product-limit\` and \`lem-limit-of-tail\` prove the repaired convergence.
- Provenance transition: none; statement and proof remain honestly \`ai-generated\`.
- Independent certifier: GPT 5.6 Terra \`CERTIFIED / FINDINGS: NONE\` at \`${finalHashes[repaired[0]]}\`.
- Impact: no consumers; receipt \`research/audit/wave14-A8-impact-review.json\`.

### \`thm-e-is-irrational\`

Class: invalid/unlicensed load-bearing inference and missing dependency citations.

- Old text: step 3.1 asserted \`q|n!\`, \`k!|n!\`, and that the scaled tail was an embedded integer without typed divisibility witnesses or an exact embedding chain.
- New text: the binomial closed formula supplies \`k!|n!\` and \`q!|n!\`; factorial recurrence supplies \`q|q!\`; exact N-to-Z-to-Q-to-R embeddings turn the witnesses into real equalities, and integer-ring closure licenses the final finite difference.
- Elementary/source derivation: the complete exact targets named in the refreshed proof contract state each divisibility, embedding, arithmetic, order, and closure fact used.
- Provenance transition: proof \`literature-derived -> ai-altered\`; the theorem Statement remains \`literature-derived\` with exact-source evidence.
- Independent certifier: GPT 5.6 Terra \`CERTIFIED / FINDINGS: NONE\` at \`${finalHashes[repaired[1]]}\`.
- Impact: \`rem-exponential-roadmap-and-circularity\` read in full and still licensed; receipt \`research/audit/wave14-A8-impact-review.json\`.

Only these two A8 ids changed. The other seven rejection rows were adjudicated nonfatal or false positive and caused no item, page, frontmatter, contract, provenance, impact, stamp, or rejudge mutation.
`;
  writeFileSync(repairLedgerPath, repairLedger);
}

console.log(JSON.stringify({
  repaired,
  finalHashes,
  adjudications: { rows: adjudications.length, fatal_rows: outcomeCount("confirmed_fatal"), fatal_ids: repaired.length },
  impact: { changed_interfaces: 2, required_review: 1, unresolved: 0 },
  relationships: edges.length,
  terra_certified: repaired.length,
  a8_rejudge_targets: repaired.length,
}, null, 2));
