# Step 3a adjudication — batch 14

Run: `statistical-models-experiments-62`; group: `batch-14`; date: 2026-10-15.

The dispatch scope has no touched items, touched pages, reader findings, or refuter findings. The required decisions array is empty. The immutable pre/post snapshots agree for every item, contract, manifest and page projection. No reader repair is owed a verdict.

## Completed risk review: coefficient and effect variances

Reviewed `items/thm-full-factorial-estimator-and-effect-variances.md`, Statement and all four proof steps, against current F1–F8 carriers and contract citations. Dependencies: `def-two-level-full-factorial-design`, `thm-full-two-level-factorial-contrast-orthogonality`, `def-random-element-and-real-random-variable`, `def-independent-random-elements`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `def-moments-variance-and-covariance`, `lem-variance-and-covariance-identities-for-random-variables`, and `cor-variance-adds-for-pairwise-independent-random-variables`. Also read the independence sigma-algebra definition and the real-coordinate inner product/orthogonality carriers used in the Gram proof.

Step 1.1 correctly isolates the coefficient using the normalized Gram identity. Step 1.2 preserves each generated sigma-algebra under its fixed sign and establishes finite moments and unchanged variance. Step 2.1 adds variances of the finite independent family and scales by `(r 2^k)^{-2}`; adding the fixed coefficient does not affect variance. Step 3.1 balances the two sign groups by a coordinate flip and obtains twice the coefficient and four times its variance. Checked the empty subset (intercept only), `k=1`, `r=1`, zero variance, nonzero error means, and nonzero interactions. No AC is used. The explicit zero-mean caveat correctly distinguishes coefficient interpretation from the variance assertion. No defect found; complete risk review recorded in the owning contract.

Sources independently opened: [NIST §5.3.3.3.2](https://www.itl.nist.gov/div898/handbook/pri/section3/pri3332.htm), lines 20–23 and 38–39, describes the complete coded model and replication/variance convention. [Oehlert, Chapter 8 §§8.5–8.6](https://users.stat.umn.edu/~gary/book/fcdae.pdf), printed pp.175–181 (PDF zero-based indices 194–200; extracted lines 7924–8188), uses normal centered errors; that narrower model is contextual evidence, while the local proof supplies the stated broader variance result.

Initial check: `node tools/risk-report.mjs research/statistical-models-experiments-62-batch-14.proof-contracts.json` exited 0, reporting HIGH scores 7 for the variance theorem and 6 for the unequal-replication example; no CRITICAL item.

## Completed risk review: unequal replication

Reviewed `items/ex-unbalanced-full-factorial-loses-orthogonality.md`, Example/Given and steps 1.1–3.1, against all four current dependencies: `def-two-level-full-factorial-design`, `prop-standard-coordinate-inner-products`, `def-orthogonal-vectors-sets-and-orthonormal-bases`, and `thm-full-two-level-factorial-contrast-orthogonality`. The five first-factor signs are `(-1,-1,+1,-1,+1)`, giving intercept inner product `-1`. Deleting the duplicate row recovers the balanced four-row matrix. Hence any kernel vector also satisfies `4 b^T b=0` and is zero. This proves full column rank despite loss of orthogonality. The zero coefficient vector, intercept column, and positive multiplicities in every cell are handled correctly; no assertion about arbitrary missing-cell designs is made. No probabilistic or choice assumption is used. No defect found; complete risk review recorded in the owning contract.

[NIST §5.3.3.3.1](https://www.itl.nist.gov/div898/handbook/pri/section3/pri3331.htm), lines 9–27 and 29–46, supplies the coded complete-run and balanced-orthogonality conventions. The exact five-row witness and retained-rank conclusion were checked directly.

## Scope, carrier continuity, and consumer evidence

All five current item raw SHA-256 values match both immutable pre-reader and post-reader item snapshots, including the theorem hash `48bc60d8b555512fbcb81226ac90443f556cfc59f214932ea43eb0a18a57049d` and example hash `d110eedea468883d2fd288e5dfc559b0e4d744a564599b40bfc4d154828a8342`. The pre/post snapshots also agree on every contract, item-manifest, page and page-manifest projection. Current contract citations and derivations for the two HIGH items match the read carriers. Only the two required risk-review records were added to the contract; source claims and manifest dependencies remain unchanged.

Read the remaining batch example and both current page summaries as scope context: the raw interaction effect is `(1+6-2-3)/2=1` and the positive-response logarithmic effect is zero; the pages distinguish deterministic design orthogonality from response-error assumptions. No page-only obligation is routed. The batch manifest retains all five stable IDs. Reviewed the current cross-batch dependency inventory at the actual item interfaces; the published suppliers meet their consumers' finite real-coordinate, common-probability-space, square-integrability and independence hypotheses. No Statement or Definition changed, so no new consumer repair is triggered. Maintained the batch-owned consumer record in `briefs/tasks/frontier-dependency-ledger.md`; no withdrawal was deleted.

Reader report/findings and refuter report contain no findings, consistent with the independent reviews. No confirmed defect, published defect, repair, or escalation was found; no defect-ledger row or published-ledger entry is warranted. Published carriers were read-only. Foundational published results were checked at their actual interfaces, with their direct variance and coordinate proofs read; this is not a claim of a full transitive foundation audit.

## Checks and handoff

The initial risk report exited 0 and identified exactly the two HIGH items above. Final check: `node tools/risk-report.mjs research/statistical-models-experiments-62-batch-14.proof-contracts.json --require-reviewed` exited 0: `risk-report: 0 error(s), 5 item(s) routed`; both HIGH reviews are complete. No item was edited, so item reflow, precheck, and proof-layout are not applicable to this handoff. No judge, stamp, certification, dispatch or gate cycle was initiated. The task-named decisions file has an empty `decisions` array because there are no routed decision obligations.

Blockers: none. Remaining action: the engine owns hash stamping and the gate battery.
