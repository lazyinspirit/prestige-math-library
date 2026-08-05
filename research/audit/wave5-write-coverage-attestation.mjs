// wave5-write-coverage-attestation.mjs — Alpha's A8 round-3 attestation of the
// wave-5 coverage receipt. Fills the three fields level-coverage.mjs refuses a
// generated template for: reviewer, attestation, and a concrete drift reason
// per plan_reconciliation entry. Every number here was recomputed from disk.
import fs from "node:fs";

const p = "research/audit/wave5-coverage.json";
const c = JSON.parse(fs.readFileSync(p, "utf8"));

c.reviewer = "claude-opus-5 (wave-5 audit Alpha, sole adjudicator; AUDIT-WORKFLOW.md A6/A8)";

c.attestation = [
  "Wave-5 published-page retro-audit, AUDIT-WORKFLOW.md A0 through A8 round 3, adjudicated from disk by the audit Alpha (claude-opus-5). Scope: 209 published items on 12 pages in 4 batches, 155 of them proof-bearing; every scoped item carries component provenance and every proof-bearing item a merged proof contract.",

  "A6. 131 of 131 risk_review records written. Alpha read in full the 100 items with the largest transitive dependency cones plus every item named in a Beta finding, an A3 adjudication or a refuter report, and sampled the remainder in risk order; risk level ordered the reading and never bounded it. Read-only cross-family deepseek-v4-pro refuter lanes covered the high and critical items, the ai-generated seeds and the largest-cone consumers. All 29 cross-batch edges were audited against wave5-audit-manifest.json and reconciled against the generated checklist. Every genrisk seed and every impact-audit consumer of a changed public interface carries a disposition.",

  "Repairs. Alpha authored every repair in this wave and certified none of them: each was read on its final text by an independent read-only claude-sonnet-5 certifier lane, and one of those lanes REFUSED (def-regular-and-t3-spaces), finding a second independent fatal defect that no judge had seen. Repairs carry verification.verified with scope published-audit and delegated_by owner. verification.audited was never written by any actor in this wave.",

  "A7 and A8. Both lanes (deepseek-v4-pro at max thinking; a fresh headless claude-sonnet-5) hold a verdict on all 209 items. 108 rejections adjudicated, exactly one per (id, model, context_sha256) key with none left open: 10 confirmed fatal across 7 items, 91 confirmed nonfatal, 7 false positive. Every adjudication row is bound to an item_sha256 of the normalized text as it stood when adjudicated, and step8-guard is green at each of the three rounds, so only confirmed-fatal findings licensed an edit. Measured precision this wave: deepseek-v4-pro 50 of 57, claude-sonnet-5 51 of 51.",

  "Where the fatal defects were. None of the seven fatal items was an invalid inference inside a numbered proof step. Five were false claims in Remark or page-structure prose (what a sibling page proves; how many false statements a page carries; which constant is smallest; which direction of a biconditional can fail; which item a described construction yields) and two were Facts-block restatements stronger than the item they cited. No mechanical gate in this repository reads Remark prose for mathematical content.",

  "LIMITS THIS RECEIPT RECORDS RATHER THAN PAPERS OVER.",

  "(1) Paired judge coverage was not obtained in one clean sweep. At the standard concurrency of 16 the claude-sonnet-5 lane refused 207 calls; those verdicts were recovered only by a replay at concurrency 4. A capacity refusal is a null and not a verdict, so the coverage claimed here rests on that replay rather than on the original sweep.",

  "(2) Coverage is current for 178 items, not 209, at the moment this receipt is written. The A8 round-3 repair of cex-unbounded-with-convergent-subsequence is a Remark-only edit that impact-audit confirms changes 0 public interfaces and affects 0 items, yet because the judge context unit is the A/B pair it re-froze the whole library/real-analysis/monotone-sequences-and-cauchy-completeness pair: 31 items, 62 verdicts, are stale against current text and need a targeted paired rejudge. That rejudge also subsumes the 4 remaining deepseek-v4-pro NO_CONTENT nulls, all of which fall on that same page.",

  "(3) The second judge lane is not a cross-family screen. claude-sonnet-5 is the same model family as this Alpha, as the certifier lanes and as much of the corpus it reads; deepseek-v4-pro is the only cross-family reader in the loop. Weight a Sonnet-only agreement with Claude-authored text accordingly.",

  "(4) The wave-4 A10 policy question is unanswered on its fifth consecutive wave and dominates the nonfatal record: roughly 75 of the 91 confirmed-nonfatal findings are one class, an [F#] or [L#] stating a true one-line consequence of an item that does not itself state it.",
].join(" ");

const reasons = {
  "cor-components-of-open-subsets-of-rn-are-polygonally-connected":
    "Gained thm-path-connected-implies-connected. A3 finding N2 (research/audit/wave5-topology-countability.findings.md, adjudicated in research/audit/wave5-A3.md) showed [L1] asserting that a Euclidean ball is path-connected, hence connected, while citing only def-metric-ball, def-norm-and-normed-space and lem-euclidean-polygonal-paths-are-continuous, none of which states that implication; step 1.1 then used the ball's connectedness from [L1], so the unlicensed inference was load-bearing. Alpha APPROVED the repair at A3 over the Beta's recommendation to leave it as a citational quirk, and A4 added the target both to [L1]'s citation list and to deps. The Statement is unchanged, so no consumer's licence changed, and the sibling cor-rn-is-polygonally-connected-and-locally-path-connected already declared the same target for the identical inference. Certified by certifier lane a6cert-002 (CERTIFY), which checked the addition against claim 2 of the cited theorem.",

  "lem-radial-normalisation-is-continuous":
    "Gained def-subspace-topology-top. Confirmed fatal at A8 round 1 by BOTH judge lanes: [L2]'s subspace-continuity criterion was attributed to two items that do not state it. The repair names the criterion's actual source in the fact and adds it to deps; the Statement, the numbered steps and the title are unchanged. Certified by certifier lane a8cert-004 (CERTIFY).",

  "thm-radial-straight-line-map-on-punctured-rn":
    "Gained lem-continuity-is-local-and-pastes. Confirmed fatal at A8 round 1 (deepseek-v4-pro): [L4] widened thm-algebra-of-continuous-functions from its stated domain, a subset of R, to an arbitrary domain. Alpha's FIRST repair was wrong and fwdcheck caught it: it swapped in lem-algebra-of-continuous-real-maps-on-a-space, which states the right thing but lives forward of this item's page, turning a citation repair into a load-bearing forward reference. The repair on disk instead routes the one clause the cited items genuinely do not cover, composites, through backward material via lem-continuity-is-local-and-pastes claim 1, with step 1.2 naming the route; that lemma is the added dep. Certified by certifier lane a8cert-005 (CERTIFY).",
};

for (const e of c.plan_reconciliation) {
  if (!reasons[e.id]) throw new Error("no drift reason authored for " + e.id);
  e.reason = reasons[e.id];
}

fs.writeFileSync(p, JSON.stringify(c, null, 2) + "\n");
console.log(
  `written: reviewer set, attestation ${c.attestation.length} chars, ` +
    `${c.plan_reconciliation.length} drift reason(s)`,
);
