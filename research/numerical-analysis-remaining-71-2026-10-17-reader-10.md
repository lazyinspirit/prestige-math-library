# Step 3a reader report — batch 10

Run: `numerical-analysis-remaining-71-2026-10-17`  
Batch: `10`  
Role: reader

## Opened inventory

Assigned pages:

- A-page `tensor-train-compression-and-truncation-error`
- B-page `tensor-train-compression-and-truncation-error-examples`

Required published page context:

- `computed-singular-values-and-rank-revealing-factorizations`

Assigned items, read in dependency order:

- Level 0: `def-finite-tensor-arrays-and-frobenius-inner-product`.
- Level 1: `lem-tensor-unfoldings-are-frobenius-isometries`, `def-tucker-multilinear-rank-and-mode-products`, `def-tensor-train-cores-bond-ranks-and-canonical-gauges`, `def-canonical-polyadic-rank`, `thm-best-rank-k-frobenius-matrix-approximation`, `lem-full-column-rank-matrix-least-squares-solution`.
- Level 2: `alg-sequential-tensor-train-svd`, `alg-tensor-train-rounding`, `thm-tensor-train-storage-and-inner-product-cost`, `alg-hosvd-truncation`, `alg-budgeted-cp-alternating-least-squares`, `cex-best-rank-two-cp-approximation-may-not-exist`.
- Level 3: `thm-tensor-train-exact-ranks-and-root-sum-square-truncation-error`, `thm-hosvd-quasioptimal-multilinear-rank-error`, `thm-exact-cp-als-block-updates-are-monotone`.
- Level 4: `ex-separable-grid-tensor-has-tt-rank-one`, `ex-two-tt-truncations-realise-root-sum-squares-bound`, `ex-diagonal-tensor-has-large-minimal-tt-ranks`.

Published mathematical context opened for the matrix-SVD uses includes `thm-singular-value-decomposition`, its direct premise statements, and `def-inner-product-space` to check the complex inner-product convention. The batch proof contracts were also inspected.

## Review and edits

The definitions, algorithms, theorem statements, proofs, witnesses, computations, remarks, contracts, and both page summaries were checked. The matrix approximation and full-column-rank least-squares arguments are supported by their local derivations. The TT-SVD and rounding proof tracks isometric prefix and suffix interfaces and nested projection spaces; the recorded tails give the stated sum-of-squares bound. The HOSVD proof derives the factor `sqrt(d)` by comparing each mode truncation with an arbitrary tensor in `T_r`. The CP-ALS update is the stated complex least-squares problem after taking adjoints. The CP nonattainment witness, rank-two matrix-pencil argument, TT examples, and numerical tails check out.

I made bibliographic corrections only; no mathematical proof or claim changed.

- In the ten assigned items that cite the 2026 Dupuy PDF—`def-tensor-train-cores-bond-ranks-and-canonical-gauges`, `thm-best-rank-k-frobenius-matrix-approximation`, `alg-sequential-tensor-train-svd`, `alg-tensor-train-rounding`, `thm-tensor-train-storage-and-inner-product-cost`, `thm-tensor-train-exact-ranks-and-root-sum-square-truncation-error`, `cex-best-rank-two-cp-approximation-may-not-exist`, `ex-separable-grid-tensor-has-tt-rank-one`, `ex-two-tt-truncations-realise-root-sum-squares-bound`, and `ex-diagonal-tensor-has-large-minimal-tt-ranks`—I corrected the author and title to match the PDF cover: Mi-Song Dupuy, *Tensor trains for high-dimensional problems*. Evidence: [the cited PDF](https://msdupuy.github.io/teaching/TT_lectures_2026.pdf), cover page 1, dated March 11, 2026.
- In `thm-best-rank-k-frobenius-matrix-approximation`, I corrected the locator to Chapter 1, §1.1.1, Theorem 1.1.2. The PDF contents identify §1.1.1 as matrix low-rank approximation and §1.1.2 as tensor generalizations; Theorem 1.1.2 states the matrix Frobenius best-rank approximation result (PDF pp. 7–8).
- In `ex-diagonal-tensor-has-large-minimal-tt-ranks`, I replaced the unrelated Example 1.2.3 locator with §1.2.3, Theorem 1.2.12. Example 1.2.3 discusses a separable tensor and a Bell-state tensor (PDF p. 12); Theorem 1.2.12 gives minimal TT ranks from unfolding ranks (PDF p. 18). The item’s own proof supplies the diagonal-tensor calculation.
- In `alg-tensor-train-rounding`, I pointed the Dupuy reference to §1.2.4, Algorithm 1.3, and §1.2.5, where the rounding algorithm and gauge material occur (PDF pp. 20–23).
- In `ex-two-tt-truncations-realise-root-sum-squares-bound`, I corrected the Oseledets locator from “§2.2” to §2, Theorem 2.2. That theorem and its proof establish the root-sum-square TT-SVD bound (journal pp. 2299–2300); Algorithm 1 appears on p. 2301. The same correction was made in its proof contract.
- I synchronized the `thm-best-rank-k-frobenius-matrix-approximation` and `ex-diagonal-tensor-has-large-minimal-tt-ranks` proof-contract source locators with their corrected references.

The other source checks included Oseledets, §§2–3, including the TT-SVD and rounding arguments; De Lathauwer–De Moor–Vandewalle, §§2–3 and §5, Property 10 and its proof (journal pp. 1267, 1269); Kolda–Bader, §§2.4, 3.3–3.4, and 4.2 for matricization, CP border rank/ALS, and HOSVD; and the Caltech ACM 270 notes, Lecture 13, §§4.2–4.3, and Lecture 14, §3, for CP rank/ALS and Tucker. These passages agree with the locally proved claims.

No stale `verification.judge` record was present on the edited items. Reflow reported all ten changed items unchanged. Precheck passed for all seven edited proof-bearing items; definitions and algorithms had no proof rows to check. The final `proof-layout` command covered all ten changed items: 21 proof steps, 0 defects.

## Page verdicts and outstanding defects

- `tensor-train-compression-and-truncation-error` (A): no confirmed defect. Its summary matches the exact-arithmetic scope, TT error result, HOSVD factor, storage count, and qualified CP-ALS result.
- `tensor-train-compression-and-truncation-error-examples` (B): no confirmed defect. Its summary matches the four example items and does not overstate their results.
- Uneditable defects: none confirmed. The findings file is empty.
- Blocker: none.

## Coverage note

All 19 assigned items and both assigned pages were read. The required published prerequisite page and the published SVD theorem needed by the matrix claims were opened. I inspected the SVD theorem’s direct premises and convention, but did not re-audit every transitive proof behind those published suppliers or every item listed on the prerequisite page; those were outside the claims needed for this batch’s local proofs.
