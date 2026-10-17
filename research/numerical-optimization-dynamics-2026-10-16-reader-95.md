# Step 3a reader report — batch 95

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: `reader-95`

## Opened inventory

Assigned pages:

- `library/numerical-differential-equations-and-stochastic-dynamics/deferred-correction-and-collocation-iterations.md`
- `library/numerical-differential-equations-and-stochastic-dynamics/deferred-correction-and-collocation-iterations-examples.md`

All 25 assigned item carriers were opened and reviewed: `lem-continuous-riemann-lebesgue-agreement`, `lem-unit-interval-lebesgue-gauss-data-valid`, `def-collocation-quadrature-tableau`, `lem-collocation-quadrature-matrix-well-defined`, `alg-explicit-left-euler-sdc-sweep`, `lem-sdc-sweep-work-and-storage-bound`, `lem-sdc-fixed-point-is-collocation-stage`, `lem-one-node-gauss-data-is-midpoint`, `lem-sdc-scalar-linear-iteration-matrix`, `thm-sdc-sweep-contraction-and-error-bound`, `lem-collocation-polynomial-scaled-derivatives`, `thm-collocation-local-defect-order-m`, `thm-collocation-one-step-stability`, `lem-gauss-collocation-weighted-defect-bound`, `prop-one-node-gauss-collocation-order-two`, `thm-collocation-global-order-m`, `thm-sdc-finite-sweeps-raise-order`, `thm-sdc-residual-tolerance-preserves-order`, `thm-gauss-collocation-local-defect-order-2m`, `thm-gauss-collocation-global-order-2m`, `ex-sdc-cost-accounting-per-sweep`, `ex-sdc-one-node-gauss-stiff-iteration-diverges`, `ex-sdc-two-node-gauss-nonstiff-cubic-ivp`, `ex-sdc-constant-predictor-too-few-sweeps`, and `ex-sdc-inexact-midpoint-stage-residual`.

The five A-page prerequisite pages were opened: `polynomial-interpolation-and-remainder`, `global-ode-and-density-error`, `runge-kutta-methods-and-order`, `implicit-stiff-time-stepping-and-algebraic-error`, and `gaussian-quadrature`.

Dependency carriers opened for the claims included the assigned frontier's interpolation and Gaussian suppliers (`def-cardinal-polynomial-interpolation`, `lem-cardinal-basis-degree-and-values`, `thm-cardinal-polynomial-interpolant-exists-uniquely`, `def-gauss-moment-data`, `def-gauss-quadrature-rule`, `lem-gauss-quadrature-rule-data-well-defined`, `def-gauss-polynomial-moment-inner-product`, `thm-gauss-polynomial-moment-pairing-is-an-inner-product`, `thm-monic-gauss-orthogonal-polynomials-exist-uniquely`, `thm-gauss-orthogonal-polynomial-has-simple-interior-zeros`, `thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights`, `thm-gauss-hermite-mean-value-remainder`, and `thm-hermite-interpolant-double-node-remainder`); ODE, integration, and global-error suppliers (`def-first-order-ode-initial-value-problem-and-solution`, `def-implicit-runge-kutta-stage-equations`, `def-oriented-integral`, `def-vector-valued-derivative-and-integral`, `thm-ftc-second-part`, `thm-norm-inequality-for-the-vector-valued-integral`, `thm-global-error-from-one-step-defect-and-stability`, `lem-discrete-one-step-error-recurrence-bound`, and `lem-small-step-implicit-rk-branch-and-residual-error`); and the specific measure, continuity, metric, Taylor, and exponential facts cited in the assigned arguments (`thm-continuous-implies-integrable`, `thm-heine-cantor-r`, `thm-heine-borel-characterisation-r`, `def-darboux-integral`, `def-darboux-sums`, `def-partition-and-refinement`, `def-continuity-real`, `def-borel-sigma-algebra`, `def-interval`, `def-bounded-set`, `def-integral-of-a-nonnegative-simple-function`, `def-integrable-real-and-complex-functions-and-their-integrals`, `prop-the-nonnegative-integral-agrees-with-the-simple-integral`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `prop-closure-properties-of-measurable-functions-used-by-the-integral`, `def-countable-choice`, `thm-algebra-of-continuous-functions`, `thm-extreme-value-r`, `thm-banach-fixed-point`, `thm-euclidean-space-complete`, `def-metric-space`, `def-complete-metric-space`, `def-cauchy-in-metric`, `def-euclidean-inner-product`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `thm-multivariable-taylor-formula-with-lagrange-remainder`, `thm-chain-sum-product-and-composition-rules-for-banach-derivatives`, `def-higher-derivatives-and-smoothness`, `thm-uniform-limit-continuous-real-functions`, `cor-continuous-image-of-an-interval-is-an-interval`, `def-real-exponential-function-and-e`, `lem-exponential-dominates-one-plus-x`, `thm-binomial-theorem`, `thm-derivative-of-exponential`, `thm-exponential-addition-formula`, `thm-exponential-is-strictly-increasing`, and `cor-mean-value-theorem`). The statements and proof portions relevant to the assigned uses were checked; this was not a re-audit of each supplier's entire transitive dependency closure.

Relevant cited source passages opened:

- Hunter, *Measure Theory*, §4.8, Theorem 4.28, PDF p. 55: a Riemann-integrable function on `[a,b]` is Lebesgue integrable with equal integral. [Source](https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes_old.pdf)
- Rutgers, *MATH 373 Lecture Notes*, §10.4, Theorem 11, PDF p. 44: Gaussian exactness through degree `2n+1` for `n+1` nodes and cardinal-integral weights; Theorem 12, PDF pp. 44–45: the Hermite derivative remainder. [Source](https://sites.math.rutgers.edu/~falk/math373/lecture14.pdf)
- Causley–Seal, §1.1, equation (9), PDF p. 4: the explicit SDC correction equation; §3.3, Corollary 3.3, PDF p. 13: the explicit SDC error estimate. [Source](https://arxiv.org/pdf/1706.06245)
- Gubner, *Gaussian Quadrature and the Eigenvalue Problem*, Theorems 6–7: the orthogonality criterion for exactness and real distinct roots. [Source](https://gubner.ece.wisc.edu/gaussquad.pdf)

The cited HNW PDF endpoint returned an internal error, so that PDF was not independently read. The assigned local proofs and their local suppliers supplied the checked arguments; no finding below relies on the inaccessible copy.

## Edits

- `lem-continuous-riemann-lebesgue-agreement`: added the closed-and-bounded to compact step for `[0,1]` before applying Heine–Cantor. The theorem `thm-heine-cantor-r` requires a compact domain, while `thm-heine-borel-characterisation-r` supplies compactness from the interval properties in `def-interval` and `def-bounded-set`. Added these dependencies and updated the item proof contract.
- `lem-collocation-quadrature-matrix-well-defined`: made the same compactness premise explicit before applying the Extreme Value Theorem to the cardinal sum on `[0,1]`. `thm-extreme-value-r` requires a nonempty compact set. Added the supporting dependencies and updated the proof contract.
- `lem-collocation-polynomial-scaled-derivatives`: step 1.1 now constructs a convex open ball around `(t,u)` inside `D`; continuity of the finitely many required partial derivatives bounds them on a smaller ball, and the `O(h)` stage displacement puts the Taylor segments inside it for small `h`. This supplies the open-convex-domain and uniform-remainder hypotheses of `thm-multivariable-taylor-formula-with-lagrange-remainder`. Updated the derivation contract and its `choose` input.

No item Statement or Definition changed. None of the three repaired items had a `verification.judge` record to remove.

Validation after the final item edits:

- Reflow: all three commands succeeded and reported `unchanged`.
- Precheck: all three items passed.
- Batched proof layout: `3 items, 11 steps, 0 defects`.

## Uneditable defects

No confirmed uneditable defect remains in the inspected dependency uses. In particular, an order-`2M` moment datum in `thm-gauss-hermite-mean-value-remainder` supplies the same measure's order-`2M-1` datum by restriction of its finite-moment list, so the lower-order Gaussian rule used in that theorem is available from the cited definition.

## Page verdicts

- `deferred-correction-and-collocation-iterations` (A page): **pass**. Its summary and caveats agree with the local collocation, SDC, Gaussian-order, and residual results, including the local contraction/tube qualifications and Countable Choice branch.
- `deferred-correction-and-collocation-iterations-examples` (B page): **pass**. Its listed examples and summary match the checked work-count, stiff scalar recurrence, cubic exactness, fixed-tolerance order loss, and one-step stage-residual computations.
- The five prerequisite pages listed above are compatible with the A page's declared requirements and summaries; no page defect was found.

## Blocker and coverage note

No mathematical blocker remains. No rendered evidence bundle was found in the searched run-local paths, so the review used the current item/page carriers, contracts for the repaired items, local dependency statements, and the relevant source passages above. The assigned carriers were opened before all external suppliers, so the file-opening sequence was not strictly topological; after opening the supplier statements, I rechecked each dependent argument against the already captured assigned text and did not reread those assigned item files. This is a process limitation. The HNW source-copy limitation is recorded above.
