#!/usr/bin/env node

// Record Wave 8 Alpha dispositions only after every generated seed has an
// exact-current, full-context DeepSeek result.  Other waves' rows are preserved.

import { readFileSync, writeFileSync } from "node:fs";

const ledgerPath = "research/audit/genrisk.json";
const index = JSON.parse(readFileSync("research/audit/wave8-refuter-index.json", "utf8"));
const preserved = JSON.parse(readFileSync("research/audit/wave8-preserved-refuters.json", "utf8"));
const ledger = JSON.parse(readFileSync(ledgerPath, "utf8"));
const routes = new Map(index.items.map((entry) => [entry.id, entry]));
const evidence = new Map();
for (const capture of preserved.captures ?? []) {
  const route = routes.get(capture.id);
  if (route?.normalized_sha256 !== capture.normalized_sha256 || route?.task_sha256 !== capture.task_sha256) continue;
  const prior = evidence.get(capture.id);
  if (!prior || capture.verdict === "DEFECTS" || capture.ended_at > prior.ended_at) evidence.set(capture.id, capture);
}

const decisions = new Map([
  ["cex-cantor-point-that-is-not-an-endpoint", "The exact 1/4 witness is a bespoke construction: the deeper source check found standard Cantor-set and ternary machinery but no exact packaged witness, so retag/restate did not apply. Unfolding or narrowing would only disturb four non-load-bearing wikilink/forward-reference mentions; there is no reverse-deps consumer. Alpha counterexample-searched the claim by checking the alternating 0,2 ternary expansion and constructing Cantor points on both sides at every scale; no endpoint gap can exist."],
  ["cex-abel-test-needs-monotonicity", "The exact alternating-square-root witness is bespoke; sources support Abel and p-series tests rather than this construction, so retag/restate did not apply. Its two consumers mention it only through wikilinks, so unfolding would add edits without removing a logical dependency, and no narrowing is needed. Alpha checked convergence of the alternating factor, bounded nonmonotonicity of (-1)^j, and divergence of the positive p=1/2 product series."],
  ["ex-cantor-function-values", "The four-value table and the 1/4 computation form a bespoke worked example, while sources provide only the underlying Cantor-function machinery; retag/restate did not apply. The two consumers are citation-only and no reverse-deps edge exists, so unfolding is not a useful containment repair; every displayed value is already exact and needs no narrowing. Alpha recomputed all ternary-to-binary sums and the middle-third constancy."],
  ["ex-fixed-point-from-the-ivt", "The particular map (x+2/x)/2 on [1,2] is a bespoke worked example rather than a sourced packaged assertion, so retag/restate did not apply. Its two consumers are non-load-bearing mentions and there is no reverse-deps cone; unfolding or narrowing would create unnecessary edits. Alpha checked that the map is continuous and self-maps [1,2], and that x=(x+2/x)/2 is equivalent on the domain to x^2=2 with the unique positive solution."],
  ["rem-paracompactness-choice-and-convention-ledger", "This is a page-specific synthesis of this repository's convention and its own proof expenditures, not a recoverable literature statement; retag/restate did not apply. Its sole consumer is a forward-reference/wikilink mention rather than a deps use, so unfolding would not remove load-bearing logic, and the on-disk wording is already narrowly limited to sufficient assumptions rather than exact choice strength. Alpha checked each sentence against the cited definitions and Ornstein construction items."],
  ["cex-a-non-locally-finite-sum-can-be-discontinuous", "The exact triangular-bump family is a locally designed witness. The source supports the local-finiteness theorem rather than this packaged counterexample, so retag/restate did not apply; the seed has no consumer cone, making unfold unnecessary, and the claim is already narrow. Alpha checked pairwise-disjoint cozero sets, pointwise finiteness, c_n tending to 0, f(0)=0, and f(c_n)=1."],
  ["ex-abel-test-applied", "The exact rational factor and series are a bespoke application of sourced Abel-test machinery, not a sourced packaged example; retag/restate did not apply. The seed has no consumers, so unfold is vacuous, and no narrowing is required. Alpha checked b_j=1+2/(j+1), strict decrease, 1<b_j<=3, convergence of the alternating harmonic base series, and conditional rather than absolute convergence."],
  ["ex-dirichlet-test-with-period-three-signs", "The period-three 1,1,-2 witness is a bespoke directly checkable construction; sources support Dirichlet and p-series tests rather than the exact example, so retag/restate did not apply. There are no consumers to unfold and the statement needs no narrowing. Alpha checked the recursive state cycle, partial sums in {0,1,2}, b_k decreasing to zero, harmonic lower bound for absolute values, and failure of the strict alternating pattern."],
  ["ex-finite-partition-of-unity-on-a-compact-space", "The cover thresholds and clipped affine formulas are a bespoke explicit witness. The source supports partitions of unity generally rather than this exact pair, so retag/restate did not apply. There is no consumer cone to unfold and no broader claim to narrow. Alpha checked continuity, nonnegativity, sum one, and the exact supports [0,2/3] within U and [1/3,1] within V."],
  ["ex-locally-finite-versus-point-finite-families", "The adjacent interval family is a bespoke elementary witness rather than a sourced packaged example, so retag/restate did not apply. It has no consumers, so unfold is vacuous, and the claim is already exact. Alpha checked pairwise disjointness and that every neighbourhood of 0 meets every sufficiently late interval, proving point-finite but not locally finite."],
]);

const changed = [];
for (const seed of ledger.seeds) {
  if (!decisions.has(seed.id)) continue;
  const capture = evidence.get(seed.id);
  if (!capture) throw new Error(`${seed.id}: no exact-current refuter result`);
  if (capture.verdict !== "CLEAN") throw new Error(`${seed.id}: refuter returned ${capture.verdict}; Alpha adjudication required before disposition`);
  seed.disposition = {
    status: "verified-generated",
    by: "Audit-Alpha wave 8 (owner-delegated)",
    notes: `${decisions.get(seed.id)} The read-only DeepSeek V4 Pro audit-refuter independently received the complete item and every cited dependency and returned CLEAN at normalized hash ${capture.normalized_sha256}; evidence: ${capture.preserved.result}. The existing on-disk judge pass is preserved, and the owner-mandated A7 scope does not rejudge unchanged seeds.`,
  };
  changed.push(seed.id);
}
if (changed.length !== decisions.size) throw new Error(`expected ${decisions.size} Wave 8 seeds, found ${changed.length}`);
writeFileSync(ledgerPath, `${JSON.stringify(ledger, null, 2)}\n`);
console.log(`recorded ${changed.length} Wave 8 verified-generated dispositions`);

