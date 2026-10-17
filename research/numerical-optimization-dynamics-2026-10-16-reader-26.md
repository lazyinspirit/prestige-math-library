# Step 3a reader report — batch 26

Run: `numerical-optimization-dynamics-2026-10-16`  
Batch: `26`  
Role: `reader-26`

## Opened inventory

The batch manifest assigns these pages:

- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/revised-simplex-linear-programming-and-certificates.md`
- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/revised-simplex-linear-programming-and-certificates-examples.md`

All 15 A-page items and all five B-page examples were opened. A-page items, in dependency order, were `def-revised-simplex-standard-form-linear-program`, `def-revised-simplex-basis-dictionary`, `alg-revised-simplex-residual-audit`, `lem-revised-simplex-basic-feasible-extreme-point-equivalence`, `thm-revised-simplex-primal-pivot-objective-ray-optimality`, `alg-revised-primal-simplex-bland-rule`, `alg-revised-dual-simplex-with-finite-budget`, `prop-revised-simplex-sparse-pricing-operation-count`, `thm-revised-simplex-primal-dual-residual-gap`, `thm-revised-simplex-bland-rule-finite-termination`, `thm-revised-dual-simplex-invariant-and-farkas`, `alg-revised-simplex-phase-one`, `thm-revised-simplex-phase-one-extraction-and-farkas`, `alg-revised-simplex-qr-basis-recompute-and-audit`, and `thm-revised-simplex-qr-basis-residual-status-sound`.

The five B-page items were `ex-revised-simplex-unbounded-ray`, `ex-revised-simplex-ill-conditioned-basis-residual`, `ex-revised-simplex-primal-dual-trace`, `ex-revised-simplex-degenerate-cycle-prevented-by-bland`, and `ex-revised-simplex-phase-one-infeasible`.

I also opened the three required page summaries and the supplier items needed for their claims: `def-inequality-constrained-program-and-kkt-geometry`, `def-kkt-residual-and-normal-cone`, `thm-differentiable-convex-functions-and-gradient-inequality`, `thm-convex-kkt-sufficiency-and-normal-cone-certificate`; `def-csr-matrix-with-stored-entry-semantics` and `thm-csr-storage-and-exact-matvec-cost`; `thm-farkas-alternative-for-finite-linear-systems`, `lem-finitely-generated-euclidean-cones-are-closed`, `thm-nearest-point-in-a-nonempty-closed-convex-set`, `lem-projection-onto-a-closed-convex-set-has-the-variational-inequality`, and the relevant Euclidean-inner-product, field, matrix-space, and finite-sum definitions.

For the finite-precision QR composition I opened `def-standard-relative-floating-point-model-and-unit-roundoff`, `def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma`, `def-householder-reflector`, `def-full-reduced-and-column-pivoted-computational-qr-factorisations`, `thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries`, `alg-scaled-householder-reflector-formation-and-application`, `lem-scaled-householder-step-meets-local-backward-error-premise`, `thm-scaled-householder-qr-backward-stability`, `thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts`, `lem-product-of-one-plus-deltas-gives-theta-n`, `def-forward-and-back-substitution-for-triangular-systems`, `thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost`, `lem-rounded-triangular-substitution-componentwise-backward-error`, `thm-computed-full-rank-least-squares-backward-stability`, `lem-rounded-linear-and-normal-residual-certificates`, `thm-reduced-qr-solves-full-column-rank-least-squares-without-squaring-the-condition-number`, `thm-cauchy-schwarz-in-an-inner-product-space`, `def-frobenius-matrix-norm`, and `def-operator-norm-on-a-finite-dimensional-inner-product-space`.

## Edits and evidence

| Item | Edit | Evidence and effect |
| --- | --- | --- |
| `def-revised-simplex-standard-form-linear-program` | Removed the second identical Farkas-certificate paragraph. | The two paragraphs had identical hypotheses, certificate orientation, and contradiction. The definition now states that convention once. |
| `alg-revised-dual-simplex-with-finite-budget` | Removed the dual-feasibility invariant claim from the algorithm definition and changed the budget output to name its multiplier without asserting feasibility. | `thm-revised-dual-simplex-invariant-and-farkas` independently proves the invariant from the exact pivot rule. The inconclusive budget status remains explicit. Its direct theorem and example consumers were checked. |
| `alg-revised-simplex-qr-basis-recompute-and-audit` | Specified the infinity norm used by inverse witnesses, including empty cases; spelled out exact rational interval endpoint operations; made basis matching and interval tie handling explicit; required a validity witness on each later transition record; clarified that the procedure checks caller-supplied transitions. | These instructions make the two admitted-basis certificates and the interval transition path executable without an unstated interval-arithmetic oracle. The updated theorem below proves their mathematical soundness. |
| `thm-revised-simplex-qr-basis-residual-status-sound` | Replaced the assumption that every admitted basis is nonsingular with a proof from the exact inverse or $H,q$ witness. Added the inverse-norm bound, coordinate-enclosure argument, and proof that every admitted pivot is an exact primal/dual pivot with a nonsingular replacement basis. | From $\|I-HC\|_\infty\le q<1$, the row-sum norm inequality gives $(1-q)\|v\|_\infty\le\|HCv\|_\infty$; the supplied $M_D$ then bounds the corresponding inverse norm. The residual certificate and $\|z\|_\infty\le\|z\|_2$ give the coordinate intervals. Exact endpoint arithmetic preserves enclosure, and the checked nonzero pivot gives $\det(A_{B'})=\det(A_B)d_i\ne0$. |

I updated the batch proof-contract quotations for the two changed definitions and the QR algorithm, and updated the QR theorem derivations and boundary notes. The changed items had no `verification.judge` record to remove.

## Validation

- Reflow: all four changed items were unchanged.
- Precheck: all four passed; the three definition/algorithm items had zero applicable proof checks, and the QR theorem passed its direct proof check.
- Proof layout: one batched run on all four changed item paths reported 7 steps and 0 defects.

## Page verdicts

- `revised-simplex-linear-programming-and-certificates`: pass. Its exact-arithmetic, residual-audit, sparse-count, KKT, and finite-precision QR summaries match the current item statements and their caveats. The QR theorem now proves the basis-witness and accepted-transition claims in that summary.
- `revised-simplex-linear-programming-and-certificates-examples`: pass. The five examples match the page summary. I checked the unbounded ray, the exact residual and gap values, the one-pivot primal/dual trace, the Bland path and six-pivot cycle, and the Phase I Farkas vector. No B-page prose was edited.

## Uneditable finding

Published dependency `thm-reduced-qr-solves-full-column-rank-least-squares-without-squaring-the-condition-number`, Proof 1.1 (item line 63), extends the given columns of $\widehat Q$ to an orthogonal basis $Q$. Its stated hypotheses and named dependencies give $\widehat Q^{\mathsf T}\widehat Q=I$, but do not establish this completion for the arbitrary reduced QR factorization in the theorem statement. The cited [FNC QR chapter, §3.3.2](https://fncbook.com/qr/) states that a full QR factorization exists and forms a thin factor from one such full factor (lines 154–189); the [Cornell QR notes](https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-02-23.html) describe the full and economy forms at lines 22–24. Those passages do not prove extension for every reduced factorization quantified in the item. A Gram–Schmidt completion argument or a direct orthogonal-projection decomposition would close this short, nonfatal proof omission. Its assigned consumer is `alg-revised-simplex-qr-basis-recompute-and-audit`.

## Blocker and coverage note

No blocker remains. All assigned pages and items, and the supplier claims needed to verify them, were inspected. Some transitive KKT support definitions were opened during the closure check after the assigned primal-pivot theorem had first been read; they were considered before the final verdict. I did not audit unrelated items listed on the three prerequisite pages.
