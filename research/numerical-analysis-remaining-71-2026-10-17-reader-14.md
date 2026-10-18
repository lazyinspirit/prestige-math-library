# Step 3a reader report — batch 14

Run: `numerical-analysis-remaining-71-2026-10-17`
Batch: `14`

## Opened inventory

Assigned pages:

- `barycentric-rational-and-aaa-approximation` — [A page](</home/lazyinspirit/Projects/prestige-math-library/library/numerical-linear-algebra-and-approximation/barycentric-rational-and-aaa-approximation.md>)
- `barycentric-rational-and-aaa-approximation-examples` — [B page](</home/lazyinspirit/Projects/prestige-math-library/library/numerical-linear-algebra-and-approximation/barycentric-rational-and-aaa-approximation-examples.md>)

Assigned A-page items, read in dependency order:

- `alg-pade-coefficient-matching`, `def-distinct-node-divided-difference`, `lem-barycentric-denominator-polynomial-nonzero`
- `def-barycentric-rational-quotient`, `lem-divided-difference-lagrange-formula-and-symmetry`, `thm-pade-solvable-system-gives-local-order`
- `def-floater-hormann-interpolant`, `lem-adjacent-window-divided-difference-recurrence`, `lem-divided-difference-repeated-rolle-bound`, `lem-hermite-genocchi-simplex-integral`, `prop-barycentric-rational-quotient-well-defined`
- `alg-aaa-finite-sample-rational-approximation`, `def-floater-hormann-local-mesh-ratio`, `def-floater-hormann-window-polynomial`, `lem-hermite-genocchi-bv-window-variation`
- `lem-floater-hormann-local-mesh-ratio-bounded-by-global`, `lem-floater-hormann-window-polynomial-interpolates`, `thm-aaa-loewner-minimum-and-support-interpolation`
- `lem-floater-hormann-weight-and-blend-identity`, `lem-floater-hormann-window-newton-remainder`, `lem-floater-hormann-gap-partial-sums-positive`
- `lem-floater-hormann-denominator-lower-bound`, `thm-floater-hormann-no-real-poles`, `cex-floater-hormann-cd1-seminorm-rate-fails`, `thm-floater-hormann-error-rate-bv`, `thm-floater-hormann-error-rate-c2`

Assigned B-page items:

- `ex-pade-singular-system-and-froissart-cancellation`
- `ex-aaa-small-sample-error-does-not-control-off-grid`
- `ex-aaa-transfer-function-pole`

Published item suppliers opened to check the assigned proofs and exact-SVD path:

- `def-cardinal-polynomial-interpolation`, `thm-cardinal-polynomial-interpolant-exists-uniquely`
- `def-natural-numbers`, `thm-induction-principle`
- `def-higher-derivatives-and-smoothness`, `thm-extreme-value-r`, `thm-rolle`, `thm-newton-leibniz-with-interior-derivative`
- `thm-singular-value-decomposition`, `alg-householder-bidiagonalization`, `alg-implicit-shifted-bidiagonal-qr-with-deflation`
- `lem-implicit-bidiagonal-qr-bulge-chase-unitary-equivalence`, `thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries`, `lem-exact-householder-bidiagonal-reduction`, `def-real-and-complex-givens-transformations`
- `def-bounded-variation-and-total-variation`, `lem-mean-value-theorem-on-closed-interval`

The page-level prerequisites were also opened:

- `computed-singular-values-and-rank-revealing-factorizations` — published
- `minimax-approximation-and-remez-algorithms` — draft
- `outward-rounded-interval-and-ball-arithmetic` — published

## Review findings and edits

All assigned definitions, statements, proofs, examples, titles, and page summaries were checked. The divided-difference formula, Hermite–Genocchi formula, repeated-Rolle bound, AAA Loewner minimum, barycentric support interpolation, Floater–Hormann blend identity, positivity blocks, denominator lower bounds, no-real-pole argument, BV estimate, parity estimates, and uniform-grid counterexample are mathematically sound under their stated hypotheses.

The cited Floater–Hormann article was retrieved from the authors' accessible university page at [Floater and Hormann, *Barycentric rational interpolation with no poles and high rates of approximation*](https://www.inf.usi.ch/hormann/papers/Floater.2007.BRI.pdf). Section 2, Theorem 1, proves positivity of the cleared denominator on the real line; Section 3, Theorems 2–3, gives the parity bounds and the degree-zero local mesh-ratio estimate. The item-cited endpoint returned 403 during retrieval, so the author-hosted copy was used. The AAA source was checked at [Nakatsukasa, Sète, and Trefethen, *The AAA algorithm for rational approximation*](https://people.maths.ox.ac.uk/trefethen/AAAfinal.pdf), Section 2, Theorem 2.1, and Section 3, equations (3.4)–(3.5). The Padé source was checked at [Gonnet, Güttel, and Trefethen, *Robust Padé Approximation via SVD*](https://people.maths.ox.ac.uk/trefethen/gonnet_guettel_trefethen.pdf), Section 2, equations (2.4)–(2.11), and Section 7, page 113.

Repairs made:

1. `alg-pade-coefficient-matching`: the full-rank and empty-system branches now return the explicit `full-order-solvable` status. Previously those outputs had no defined status label. The solvability theorem and singular-system example were rechecked; both use the coefficient equations independently of the label.
2. `alg-aaa-finite-sample-rational-approximation`: the QR sweep budget is now explicitly an integer; the initial candidate is established as the last accepted candidate; the accepted and remaining support lists are initialized; support records and residual records are defined; and each failure, tolerance, and budget return has a common explicit output shape. This resolves the empty accepted state on zero-budget, first-iteration failure, and rejection branches. All current-run direct consumers are in batch 14 and were checked: the Padé theorem and example consume its procedure; the Loewner theorem and two AAA examples consume the AAA procedure; the transfer-function example also consumes the revised Loewner theorem.
3. `thm-aaa-loewner-minimum-and-support-interpolation`: its statement now requires that the exact SVD call completes. Its Facts & Assumptions already stated this condition, and the QR algorithm can return `inconclusive` when its finite budget is exhausted.
4. `ex-aaa-transfer-function-pole`: the explicit one-sweep QR calculation now precedes the appeal to the conditional AAA theorem. The example shows the second SVD call converges before using the minimum-singular-vector and support-interpolation conclusions.
5. `thm-floater-hormann-no-real-poles`: the final proof step's self-reference was corrected to cite steps 1.1–1.3, which cover the nodes, interior gaps, and both exterior intervals.
6. `ex-aaa-small-sample-error-does-not-control-off-grid`: the verification now supplies the completed-square upper bound that makes the stated uniform error exactly $M/4$.
7. A-page prose now limits the AAA least-squares guarantee to successful exact-SVD iterations and says the authored `requires` list matches the plan specification.

The affected batch-14 proof-contract citations and derivations were refreshed. None of the six changed items contained a `verification.judge` record to remove.

## Page verdicts

- A page: sound as authored after the summary repairs. It accurately limits the AAA guarantee, the Padé claim, and the role of the Minimax page. The page's `requires` list matches the current plan specification; it does not list the published Outward Interval page.
- B page: sound. The Padé cancellation and Froissart calculations, the off-grid witness, and the transfer-function pole recovery are exact. The transfer-function proof now establishes its finite-budget SVD success before using it.

No mathematical defect remains unedited in the assigned items or pages. The dispatch manifest lists `outward-rounded-interval-and-ball-arithmetic` as an additional A-page requirement, while the plan specification and authored page list only the SVD and Minimax pages. This is a manifest/plan/page metadata discrepancy; it was not edited because the reader scope excludes the manifest and plan. The additional page's mean-value theorem item was opened as a supplier, and no item proof depends on an unreviewed result. The Minimax page is draft and remains a page-level contextual prerequisite, not an item-level proof premise.

## Validation and blocker

Reflow and precheck were run for all six changed items. All prechecks passed. The final batched command

`node tools/proof-layout.mjs items/alg-pade-coefficient-matching.md items/alg-aaa-finite-sample-rational-approximation.md items/thm-aaa-loewner-minimum-and-support-interpolation.md items/thm-floater-hormann-no-real-poles.md items/ex-aaa-transfer-function-pole.md items/ex-aaa-small-sample-error-does-not-control-off-grid.md`

reported 6 items, 15 steps, and 0 defects.

There is no mathematical blocker for batch 14. The refreshed run status at 2026-10-18 00:36 UTC reports an unrelated Stage 3a collection blocker: batch 7's `collect-7` failed three times. That failure is outside this reader assignment.
