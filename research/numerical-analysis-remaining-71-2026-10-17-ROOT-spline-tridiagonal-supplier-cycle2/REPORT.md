# Final focused owner review and repairs: spline supplier and shape consumers

Run: `numerical-analysis-remaining-71-2026-10-17`. This is the second and final owner review/repair cycle for the actual computational natural-system and knot-refinement escalations. Root retains acceptance, sidecar integration, source currency, readiness, certification and native controls. No acceptance or verification stamp was added.

## Actual drained boundary verified

Before editing, inspected the native state and the stable completed result for `batch-3-refresh-dac856a8-a7f5-463e-9868-2be31626f0d7`. Its native dispatch ended successfully at `2026-10-17T12:40:15.030Z`; the successful result ended at `2026-10-17T12:40:14.996Z`, exit zero, task complete, unaborted. Also checked the matching immutable attempt-1 result. Batch 5 ended successfully at `2026-10-17T12:06:25.032Z`. The state had no live writer covering batch 3 or 5, and a second inspection after focused edits confirms the same. No other run or live batch was controlled or edited.

The native result reports genuine completed construction and records stale readiness/tool-input failures from loading unrelated batch-56 bare-string inventory IDs. That is metadata/bookkeeping, not an additional mathematical defect in this closure. No global manifest, native result, sidecar, readiness record, gate or control was changed here.

## Full scope read and independent comparison

Read all 18 actual batch-3 items and all 15 actual batch-5 items, including definitions, algorithms, statements, facts and complete proofs, and all four actual A/B page carriers. Read the prior cycle1 proof and knot-refinement constructions and compared them with the native implementation. Re-read the actual current published supplier Statements/Definitions for the operationwise arithmetic model, rounded Cholesky, triangular backward lemma, rounded linear-residual certificate, Cholesky backward-error theorem, canonical natural interpolation and B-spline knot/basis definition. Their full relevant proofs had already been read in cycle1; also read the actual Taylor integral-remainder proof used by the focused shape-consumer repair.

The computational construction matches its promised scope. Its successful assembled matrix is SPD by the strict row margin, including n=1. The bidiagonal factor and solve outputs equal the generic published routines after removing only exact-zero work. The small-u factor and triangular hypotheses remain distinct from the weaker a posteriori residual hypothesis. The residual is actually computed and its certificate uses exact rational sums as certified norm bounds. Intended-system discrepancies alpha and beta include rounded width, matrix and RHS assembly. The final transfer uses the original exact stored knots, positive delta and exact reconstruction. The r=2 line branch is retained. Floating work, storage and rational-operation counts are linear; rational bit complexity remains unclaimed. The returned piecewise cubic reconstruction need not be C1, and floating-point evaluation error is expressly separate.

The native repaired knot lemma now derives all first, middle and last coefficients. Verified the two boundary indices, strict interior, q=0, q=1 with empty strict interior, repeated old knots, the only possible zero denominators, right-cell values at interior knots and u, and b's left-limit convention. No illegal cancellation occurs. The preservation proof's two bookkeeping zero controls and finite reindexing are valid for every degree, including p=0. Its direct linear example is correct. The earlier residual-transfer row-margin correction is present and correct, including r=3, and its rho display is repaired. None of these carriers required another mathematical rewrite.

## Confirmed focused defects and exact repairs

Seven canonical item paths were changed, with original bytes retained under this packet's `before/` directory:

1. `items/alg-natural-cubic-tridiagonal-cholesky-with-residual-certificate.md`: clarified the square-root return condition from “failed or nonpositive normal result” to failure or a nonpositive or nonnormal result. This exactly states the published positive-normal success convention; no allowed successful execution or arithmetic method changes.
2. `items/thm-computed-natural-cubic-spline-forward-error-certificate.md`: Fact F1 incorrectly called `T mhat=f` the rounded system as though it were an exact equation satisfied by the computed result. Replaced it with the stored matrix T and RHS f used by the rounded solve. The proof already used the correct nonzero residual and required no change. The Statement is unchanged.
3. `items/alg-pchip-slope-selection.md`: the endpoint-formula bullets were not explicitly guarded, leaving a literal n=2 execution able to reach nonexistent h_1 or h_(n-3) despite the intended two-node branch. Both endpoint bullets now explicitly apply only for n>=3. This preserves the approved two-node line and every n>=3 rule; it does not narrow the input domain or change PCHIP's intended slope formulas.
4. `items/lem-pchip-slope-selection-well-defined.md`: clarified that the two-node branch evaluates neither endpoint formula, and that the endpoint denominator existence/positivity argument applies for n>=3. Statement unchanged.
5. `items/thm-pchip-normalized-slopes-in-square.md`: supplied the previously implicit nonzero two-node case (both normalized slopes are 1), in addition to its zero-secant case, before invoking the n>=3 interior/endpoint arguments. Statement unchanged.
6. `items/thm-pchip-third-order-away-from-extrema.md`: defined the exact-derivative Hermite piece H before first use; removed the later redundant definition; replaced a nonexistent prose reference to step 1.3 by the actual step 1.2; and made Fact F6 explicitly include the degree-one Taylor bound for f' that step 1.1 uses. The actual published Taylor lemma supplies both applications. Statement, rate, uniform-grid and nonvanishing-derivative hypotheses unchanged.
7. `items/thm-hermite-monotonicity-for-normalized-slopes-in-square.md`: corrected the diagram's obsolete reference from proof step 1.2 to the actual corner-polynomial calculation in step 2.1. Statement and proof unchanged.

No original theorem Statement, published supplier, page inventory, dependency array, verification stamp or sidecar was changed. The two algorithm Definition clarifications above required—and received—the same reviewer's complete actual downstream examination rather than a separate read-only consumer handoff.

## Same-reviewer consumer dispositions

Computational chain: the algorithm, `thm-natural-tridiagonal-cholesky-solve-residual-certificate`, and `thm-computed-natural-cubic-spline-forward-error-certificate` remain sound with the precise status/fact wording above. The perturbation lemma and residual-transfer supplier remain sound; neither asserts first-derivative matching for arbitrary replacement derivatives. There is no other current item consumer of the three new computational carriers.

Knot chain: `alg-single-new-b-spline-knot-insertion`, `lem-b-spline-basis-refinement-under-single-knot-insertion`, `thm-single-new-knot-insertion-preserves-b-spline-curve`, and `ex-single-new-knot-insertion-preserves-linear-curve` were fully checked and need no further repair. The separate de Boor algorithm/equivalence/error/work chain, its double-knot example, clamped definition/existence/error chain and natural x-squared endpoint example were also read and remain sound in their current approved scopes.

For the PCHIP Definition guard, reviewed every actual direct/indirect consumer: `lem-pchip-slope-selection-well-defined`, `thm-pchip-normalized-slopes-in-square`, `lem-pchip-slopes-second-order-uniform-grid`, `thm-pchip-shape-preserving-no-overshoot`, `thm-pchip-third-order-away-from-extrema`, `ex-natural-cubic-spline-undershoots-nonnegative-table`, `ex-pchip-flat-monotone-data`, and `ex-pchip-limiter-second-order-at-smooth-extremum`. The first, second and fifth needed only the listed focused proof repairs; all other current claims and proofs remain compatible and correct. The two-node line is monotone/constant as appropriate, and the order lemmas already require at least three uniform-grid nodes. The flat and smooth-extremum explicit calculations are correct.

Also read the Hermite definition/properties/monotonicity suppliers, the Bernstein representation/control-hull theorem and positive-endpoint counterexample. The only focused change there was the stale diagram reference. No new Bernstein premise or PCHIP input restriction is needed.

Read both batch-5 page carriers and its exact historical notes/cross-batch finding. Its natural-spline example directly verifies its three exact C2 pieces using the published natural definition; it uses neither a numerical solver nor the knot lemma. Its held APP-SPLINE page edge is therefore a supplier-readiness observation, not an unproved premise in local shape theorems. The actual mathematical causes of that observation now have native construction and complete focused examination, but this report does not overwrite or close its native readiness record.

## Required layout verification and remaining root work

After the final canonical edits, ran only the specifically required formatter/layout check:

    node tools/proof-layout.mjs items/alg-natural-cubic-tridiagonal-cholesky-with-residual-certificate.md items/thm-computed-natural-cubic-spline-forward-error-certificate.md items/alg-pchip-slope-selection.md items/lem-pchip-slope-selection-well-defined.md items/thm-pchip-normalized-slopes-in-square.md items/thm-pchip-third-order-away-from-extrema.md items/thm-hermite-monotonicity-for-normalized-slopes-in-square.md

Actual result: exit 0; `proof-layout: 7 items, 15 steps, 0 defects`.

No tests, hashes, recertification, readiness changes, full-run checks or gates were performed. No unresolved genuine mathematical gap was found in these two escalation groups or their actual examined consumer closure. Root still owes current sidecar/quoted-contract refresh for the seven changed paths, actual dependency/context and readiness reconciliation (including batch 5), and all ordinary native independent reviews, certification and gates. This report grants no canonical acceptance or gate exemption.
