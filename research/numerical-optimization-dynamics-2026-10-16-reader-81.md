# Step 3a reader report — batch 81

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader  
Scope: batch `81` only

## Opened inventory

Assigned pages:

| Page | Path | Verdict |
|---|---|---|
| `matrix-exponential-and-phi-function-actions` (A) | `library/numerical-linear-algebra-and-approximation/matrix-exponential-and-phi-function-actions.md` | Pass after the recorded item repairs. Its series, logarithmic-norm, Taylor, and Arnoldi summaries match the assigned results and preserve the finite-dimensional and certification qualifications. |
| `matrix-exponential-and-phi-function-actions-examples` (B) | `library/numerical-linear-algebra-and-approximation/matrix-exponential-and-phi-function-actions-examples.md` | Pass. Its exact-arithmetic and conditional finite-precision summary matches the three example items. The page prose was not edited. |

All 12 A-page items were opened in dependency order:

1. `def-phi-functions-by-everywhere-convergent-series`
2. `def-logarithmic-norm-for-complex-matrices`
3. `def-certified-matvec-and-vector-arithmetic`
4. `lem-matrix-action-defect-variation-of-constants`
5. `lem-phi-series-converges-absolutely`
6. `lem-logarithmic-norm-is-real-and-variational`
7. `alg-scaled-taylor-exponential-action`
8. `thm-phi-recurrence-and-augmented-matrix-actions`
9. `lem-logarithmic-norm-bounds-the-matrix-exponential`
10. `thm-scaled-taylor-exponential-action-error-and-work`
11. `alg-arnoldi-exponential-and-phi-actions`
12. `thm-arnoldi-exponential-action-error-bound`

All three B-page example items were opened after their suppliers:
`ex-phi-one-at-zero-without-division`, `ex-stiff-diagonal-arnoldi-action`, and
`ex-nonnormal-transient-action-certificate`.

The A page's five declared page requirements were opened: the current A pages
`krylov-methods-and-lanczos-convergence` (batch 34) and
`matrix-functions-and-scaling-squaring` (batch 68), plus the published pages
`krylov-subspaces-arnoldi-and-gmres`,
`matrix-norms-condition-numbers-and-numerical-stability`, and
`strongly-continuous-semigroups-and-hille-yosida`. The B page's A-page
requirement was also opened. The current batch-34 and batch-68 pages are page
interfaces only for this batch: no item-level proof premise imports an item
from either batch. The batch-34 finite-precision Arnoldi result and the batch-68
Padé/contour results are not used in batch 81.

The 27 distinct published direct item suppliers in the batch manifest were
opened: `cor-exponential-is-a-bijection-onto-positive-reals`,
`cor-exponential-reciprocal-and-positivity`,
`cor-finite-dimensional-normed-spaces-are-banach`, `cor-mean-value-theorem`,
`cor-operator-norm-submultiplicative-and-t-star-t-identity`,
`cor-vector-valued-ftc-and-lipschitz-bound`,
`def-adjoint-of-a-linear-map-between-inner-product-spaces`,
`def-arnoldi-process`, `def-complex-exponential`, `def-inner-product-norm`,
`def-matrix-product-and-identity-matrix`, `def-matrix-space`,
`def-operator-norm-on-a-finite-dimensional-inner-product-space`,
`def-real-exponential-function-and-e`,
`def-self-adjoint-and-normal-endomorphism`,
`def-vector-valued-derivative-and-integral`,
`lem-exponential-series-has-infinite-radius`,
`lem-exponential-series-of-a-bounded-operator`,
`prop-standard-coordinate-inner-products`,
`thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization`,
`thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`,
`thm-chain-rule`, `thm-complex-exponential-addition-and-real-extension`,
`thm-complex-numbers-are-the-real-coordinate-plane`,
`thm-complex-spectral-theorem-for-normal-endomorphisms`,
`thm-derivative-of-exponential`, and
`thm-matrix-of-the-adjoint-is-the-conjugate-transpose`. During review,
`thm-continuous-implies-integrable` was also opened as the applicable published
supplier for the repairs below.

## Findings and repairs

Three confirmed proof gaps were repaired in assigned in-flight items.

1. In `lem-matrix-action-defect-variation-of-constants`, proof step 3.1 applied
   `cor-vector-valued-ftc-and-lipschitz-bound`, whose first clause requires an
   integrable derivative, after establishing only that the derivative was
   continuous. It also applied that corollary on `[0,t]` when `t=0`, although
   the corollary requires a strict interval `a<b`. The item now depends on
   `thm-continuous-implies-integrable`, explicitly obtains componentwise
   integrability, and handles `t=0` directly before applying the FTC on the two
   nondegenerate time branches. Evidence: the published corollary's Statement,
   clause 1, requires integrability of `f'`; the continuous-integrability
   theorem's Statement and proof establish the missing premise for each real
   coordinate on a closed interval.

2. In `ex-stiff-diagonal-arnoldi-action`, proof step 3.1 used the vector FTC to
   evaluate an antiderivative whose derivative is continuous, without
   establishing its integrability. The item now depends on
   `thm-continuous-implies-integrable` and explicitly records that the scalar
   integrand is continuous and integrable on `[0,1/10]` before using the FTC.
   The computation remains
   `sqrt(2) exp(-1/10) (1-exp(-99/20))` for the certificate.

3. In `ex-nonnormal-transient-action-certificate`, proof step 3.1 used the
   vector FTC to evaluate the scalar bound and constant-vector residual
   integral without establishing integrability of the integrands. The item now
   depends on `thm-continuous-implies-integrable` and records integrability of
   the continuous scalar integrand and the coordinates of the constant-vector
   residual integrand before applying the FTC. The exact residual remains
   `(3/e)e_1`, and the logarithmic-norm-weighted upper bound remains
   `2 exp(1/2)(1-exp(-3/2))`.

Each repair is supported by the published item
`thm-continuous-implies-integrable` (Statement; proof steps 1.1–6.1), together
with the cited vector FTC. No `verification.judge` record was present in any of
the three changed items. The three affected entries in
`research/numerical-optimization-dynamics-2026-10-16-batch-81.proof-contracts.json`
were regenerated from current item text with `tools/regen-contract-entries.mjs`.

No confirmed defect remained outside the edit scope. No finding is routed for
an in-run dependency: the page-level batch-34 and batch-68 interfaces are not
used as item proof premises, and no defect was found in either current page.

## Source checks

The relevant source passages were opened to check the citations and the
matrix-function/Arnoldi conventions:

| Source and locator | Statement checked |
|---|---|
| Al-Mohy and Higham, [*Computing the Action of the Matrix Exponential*](https://eprints.maths.manchester.ac.uk/1536/3/paper16.pdf), §2, equation (2.5), and Theorem 2.1 with proof, printed pp. 490–492 | The series convention for `phi_k`, recurrence, and the augmented-exponential block identity. The paper's special augmented-block case agrees with the local `B_k(X,w)` construction. |
| Niesen and Wright, [*A Krylov Subspace Algorithm for Evaluating the Phi-Functions Appearing in Exponential Integrators*](https://arxiv.org/pdf/0907.4631), §2 and §3.1, equations (5)–(6) | The projected formula `beta V_m phi_k(H_m)e_1` and the augmented exponential for reduced phi actions. The practical first-term residual estimate discussed later is not used as a certified bound here. |
| Higham and Lin, [*Functions of Matrices: A Short Course*](https://eprints.maths.manchester.ac.uk/2067/01/covered/MIMS_ep2013_73.pdf), §7.1, printed p. 22 | The Arnoldi factorization and projected matrix-function action. |
| Higham, [*What Is the Logarithmic Norm?*](https://nhigham.com/2022/01/18/what-is-the-logarithmic-norm/), Theorem 3 and Theorem 6, equations (2) and (4) | For `t>=0`, `||exp(tA)|| <= exp(mu(A)t)` for a consistent matrix norm, and `mu_2(A)=lambda_max((A+A*)/2)`. The local Rayleigh-quotient identity and its finite-matrix use are proved in batch 81. |
| Al-Mohy and Higham, §4, Lemma 4.1, printed pp. 497–498 | The normwise local-roundoff context cited by the abstract provider definition. The item does not claim the source certifies any particular kernel or rational enclosure. |

## Validation and handoff

- Contract regeneration: 3 entries regenerated, 0 skipped.
- Reflow: all 3 changed item files were already in the required paragraph layout; no reflow mutation was needed.
- Precheck: all 3 changed items passed.
- Final proof layout: 3 items, 10 steps, 0 defects.
- No other checks or tests were run.
- No blocker applies to batch 81. The autopilot status snapshot at review start
  recorded the unrelated run-level `3a-split` blocker `split-70 failed 3x`
  (covers batch 70); this reader did not change or adjudicate that batch.

The complete scope was the two assigned pages, all 15 assigned item carriers,
their declared required page interfaces, and the direct item dependencies
opened above. I did not re-audit unrelated transitive dependency closures or
historical run snapshots.
