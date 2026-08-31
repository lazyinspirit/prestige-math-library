# frontier-26 alpha-c 6b

Date: Sunday, August 30, 2026.
Run: `frontier-26`
Group: `c`
Batches: `2`, `3`, `4`

## Scope

- Reviewed the live Step-6 scope, reader reports, reader findings JSON, refuter reports, current carriers, and cited dependencies for batches `2`, `3`, and `4`.
- Verified the current bytes rather than trusting earlier prose. In batch `4`, the reader artifact `research/frontier-26-reader-4.md` is dated Monday, August 31, 2026 on disk; I still rechecked its claims against the current files before using them as evidence.
- Repaired only the owned group-`c` defects and stale owned records.

## Outcome

- Wrote `research/frontier-26-alpha-c-6b-decisions.json` with `39` stamped decisions: `7` `accepted_repair`, `15` `amended_repair`, `11` `confirmed_fatal`, and `6` `confirmed_nonfatal`.
- Wrote `research/frontier-26-alpha-c-6b-ledger-rows.json` with `36` closed defect rows and appended them to `research/defect-ledger.jsonl`.
- Wrote `research/frontier-26-alpha-c-6b-risk-reviews.json` and recorded all `46` required HIGH/CRITICAL `risk_review` dispositions across the owned batch contracts.

## Adjudication

- Batch `2` touched carriers: accepted the five reader repairs that still match the raw post-reader carrier, and marked `thm-directional-derivative-of-a-simple-positive-singular-value` as amended because the current contract now also carries the completed high-risk review.
- Batch `2` refuter findings: confirmed all three fatal hypothesis defects and repaired them by adding the missing differentiability and no-breakdown hypotheses to the affected spectral and Arnoldi statements.
- Batch `3` touched carriers: accepted the reciprocal-exponent Lyapunov remark repair; marked the dependent example and the corrected Lyapunov-exponent theorem as amended because their batch-3 contract entries were refreshed later during Step 6b, marked the six high/critical theorem carriers as amended because the current contracts now carry the completed high-risk reviews, and `thm-l-p-norms-converge-to-the-essential-supremum-for-essentially-bounded-l-r-functions` also needed a further 6b zero/epsilon repair.
- Batch `3` refuter findings: confirmed both nonfatal well-formedness defects in the `L^p -> L^infty` limit theorem and repaired them by splitting off the `M = 0` branch and restricting the lower-bound argument to `0 < epsilon < M`.
- Batch `4` touched carriers: accepted the reader repair to the singular-boundary definition, and marked the other six touched carriers, including the square-root example, as amended because Step 6b refreshed their downstream contract state, repaired the continuation framework, or added the required high-risk reviews.
- Batch `4` refuter findings: confirmed eight fatal defects and one nonfatal proof-gap defect. The repairs tightened admissible continuation to joining-point agreement, rebuilt the end-germ, uniqueness, complete-analytic-function, and monodromy items on that corrected definition, replaced the real-only geometric-series citation with the published complex one, replaced the circle-of-convergence Taylor citation with the actual holomorphic Taylor theorem plus coefficient formula, and rewrote Pringsheim's proof around the derivative-limit argument instead of the unlicensed boundary regrouping.

## Risk Review

- Batch `2`: read and reviewed all `8` HIGH items.
- Batch `3`: read and reviewed all `25` HIGH/CRITICAL items.
- Batch `4`: read and reviewed all `13` HIGH/CRITICAL items.
- Every owned HIGH/CRITICAL contract entry now contains `risk_review: {status: complete, reviewer: "alpha-6b-c", notes: ...}` with item-specific notes describing the actual risk and why the current proof resolves it.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts ...` on every materially edited item carrier in scope.
- `node tools/tsx-run.mjs tools/precheck.mts ...` on the `11` changed proof-bearing items -> `11 checked, 0 failing`.
- `node tools/regen-contract-entries.mjs ...` for the changed batch-`2`, batch-`3`, and batch-`4` proof-contract entries, plus the directly affected consumer entries whose source quotes changed.
- `node tools/proof-contract.mjs research/frontier-26-batch-2.proof-contracts.json --strict` -> `0 error(s), 0 warning(s), 48/48 item(s) checked`.
- `node tools/proof-contract.mjs research/frontier-26-batch-3.proof-contracts.json --strict` -> `0 error(s), 2 warning(s), 39/39 item(s) checked`.
- `node tools/proof-contract.mjs research/frontier-26-batch-4.proof-contracts.json --strict` -> `0 error(s), 0 warning(s), 24/24 item(s) checked`.
- `node tools/citation-fidelity.mjs ... --fail-on-missing-quote` for batches `2`, `3`, and `4` -> no missing quotes and no widening candidates.
- `node tools/content-policy.mjs research/frontier-26-batch-4.pages.json` -> `33 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/risk-report.mjs research/frontier-26-batch-2.proof-contracts.json --require-reviewed` -> `0 error(s), 48 item(s) routed`.
- `node tools/risk-report.mjs research/frontier-26-batch-3.proof-contracts.json --require-reviewed` -> `0 error(s), 39 item(s) routed`.
- `node tools/risk-report.mjs research/frontier-26-batch-4.proof-contracts.json --require-reviewed` -> `0 error(s), 24 item(s) routed`.
- `node tools/defect-ledger.mjs append --file research/frontier-26-alpha-c-6b-ledger-rows.json` -> appended `36` rows and re-rendered `research/DEFECT-LEDGER.md`.
- `node tools/step6-scope.mjs stamp --run frontier-26 --group c` -> stamped `36` current carrier hashes.
- `node tools/step6-scope.mjs check --run frontier-26 --phase adjudicate --batch 2` -> `60 item(s) routed, 9 adjudication obligation(s), 0 error(s)`.
- `node tools/step6-scope.mjs check --run frontier-26 --phase adjudicate --batch 3` -> `52 item(s) routed, 11 adjudication obligation(s), 0 error(s)`.
- `node tools/step6-scope.mjs check --run frontier-26 --phase adjudicate --batch 4` -> `33 item(s) routed, 16 adjudication obligation(s), 0 error(s)`.

## Blockers

- None in the owned Step-6 group-`c` scope.

## Gate repair - `step6-routing-adjudicate` (Monday, August 31, 2026)

- Reproduced the live `decision-not-applied` queue on the current tree and
  confirmed that
  `touched:3:ex-a-two-step-function-shows-the-l-p-norm-converging-to-the-essential-supremum`,
  `touched:3:thm-lyapunov-interpolation-inequality-for-l-p-norms`, and
  `touched:4:ex-square-root-continuation-around-the-origin-changes-sign` no
  longer matched the exact post-reader carriers sealed in
  `research/frontier-26-step6-hash-3-post.json` and
  `research/frontier-26-step6-hash-4-post.json`.
- Rechecked the current batch-3 and batch-4 items against
  `research/frontier-26-reader-3.md` and `research/frontier-26-reader-4.md`
  and found no new mathematical defect. I retagged the three touched decisions
  from `accepted_repair` to `amended_repair` and appended the supplemental gate
  rows `frontier-26-S6-c-gate-3-1`, `frontier-26-S6-c-gate-3-2`, and
  `frontier-26-S6-c-gate-4-1` via
  `research/frontier-26-alpha-c-6b-gate-ledger-rows.json`.
- Focused reruns:
  `node tools/step6-scope.mjs check --run frontier-26 --phase adjudicate --batch 3`
  -> `52 item(s) routed, 11 adjudication obligation(s), 0 error(s)`;
  `node tools/step6-scope.mjs check --run frontier-26 --phase adjudicate --batch 4`
  -> `33 item(s) routed, 16 adjudication obligation(s), 0 error(s)`.
- Full rerun:
  `node tools/step6-scope.mjs check --run frontier-26 --phase adjudicate`
  -> `441 item(s) routed, 128 adjudication obligation(s), 0 error(s)`.
