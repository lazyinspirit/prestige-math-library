# Reader report — batch 48

Run: `numerical-analysis-remaining-71-2026-10-17`  
Role: Step 3a reader  
Scope: batch `48`

## Opened inventory

Assigned pages:

- A `nystrom-product-integration-and-fredholm-error` — `library/numerical-pdes-and-spatial-discretization/nystrom-product-integration-and-fredholm-error.md`
- B `nystrom-product-integration-and-fredholm-error-examples` — `library/numerical-pdes-and-spatial-discretization/nystrom-product-integration-and-fredholm-error-examples.md`

All 17 assigned items were opened and reviewed:

- A: `def-nystrom-quadrature-and-finite-rank-operators`; `lem-finite-node-equation-reconstruction-equivalence`; `lem-continuous-kernel-integral-operator-is-compact-on-c`; `thm-collectively-compact-operator-stability-and-error`; `lem-half-order-singular-integral-exists`; `lem-half-order-kernel-translation-modulus-in-l1`; `thm-nystrom-operator-norm-perturbation-error`; `lem-midpoint-nystrom-collective-compactness-and-consistency`; `def-half-order-product-integration`; `lem-half-order-product-weights-closed-form`; `thm-midpoint-nystrom-smooth-solution-error`; `lem-half-order-product-integration-stability-and-consistency`; `thm-half-order-product-integration-fredholm-error`.
- B: `ex-gaussian-two-node-nystrom-exact-separable-equation`; `ex-near-resonant-midpoint-solution-error`; `cex-standard-midpoint-nystrom-not-operator-norm-convergent`; `ex-half-order-midpoint-order-loss`.

The 39 distinct direct suppliers outside this batch were also opened where needed to verify assigned claims: `alg-composite-midpoint-rule`; `cor-cauchy-reals-lub-complete`; `def-axiom-of-choice`; `def-banach-space`; `def-bounded-linear-operator`; `def-compact-linear-operator`; `def-continuous-real-functions-on-a-compact-metric-space`; `def-countable-choice`; `def-dependent-choice`; `def-gauss-moment-data`; `def-gauss-quadrature-rule`; `def-higher-derivatives-and-smoothness`; `def-linear-map`; `def-operator-norm`; `def-riemann-stieltjes-sum-and-integral`; `lem-ac-supplies-countable-and-dependent-choice-for-banach-integration`; `lem-composition-operator-norm-inequality`; `lem-linear-interpolation-error-bound`; `lem-neumann-series-and-small-perturbations-of-bounded-inverses`; `lem-uniform-integral-error-bound`; `thm-additivity-over-subintervals`; `thm-algebra-of-derivatives`; `thm-arzela-ascoli-for-real-ck`; `thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral`; `thm-c-k-complete-in-the-sup-metric`; `thm-chain-rule`; `thm-compact-subset-is-closed-and-bounded`; `thm-composite-midpoint-error-bound`; `thm-continuous-implies-integrable`; `thm-fredholm-alternative-for-identity-minus-compact`; `thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights`; `thm-heine-cantor-metric`; `thm-linearity-of-the-integral`; `thm-metric-compactness-equivalences`; `thm-monotonicity-of-the-integral`; `thm-nth-roots-exist`; `thm-rank-nullity`; `thm-reals-cauchy-complete`; `thm-riemann-stieltjes-fundamental-theorems-for-c1-integrators`.

Relevant source passages checked:

- Neubauer and Ramlau, *Lecture Notes: Integral Equations and Boundary Value Problems*, §3.3: Method 3.12 and equations (3.18)–(3.23), printed pp. 60–61; Theorems 3.18–3.19 and Corollary 3.20, printed pp. 63–65. <https://www.jyu.fi/en/file-download/download/public/28300>
- Ammari, Fitzpatrick, and Yu, *Mathematical and Computational Methods in Photonics: Tutorial Notes*, §1.4.1: norm perturbation, finite-system reconstruction, and convergence statements, printed pp. 10–16. <https://people.math.ethz.ch/~grsam/HS16/MCMP/Mathematical%20and%20Computational%20Methods%20in%20Photonics%20-%20Tutorial%20Notes.pdf>
- Lebl, *Basic Analysis I*, §5.5, Proposition 5.5.2: endpoint power integrability for the (y^{-1/2}) example. <https://www.jirka.org/ra/html/sec_impropriemann.html>
- Rutgers MATH 373 lecture notes, §8.2, printed pp. 37–38 (PDF pp. 3–4): single-panel and composite midpoint error estimates. This replaced the inaccurate midpoint-error locator in `thm-midpoint-nystrom-smooth-solution-error`; the cited FNC §5.6 page covers other equally spaced rules but not the required composite midpoint bound.

## Edits and evidence

Confirmed proof gaps were repaired in the assigned draft items, and the A-page normalization prose was corrected. The changes supply prerequisites that had been silently assumed; they do not alter the intended theorem conclusions.

- `def-nystrom-quadrature-and-finite-rank-operators`: replaced the unsupported Banach-space justification with compactness of the interval and the cited completeness theorem for continuous functions.
- `lem-continuous-kernel-integral-operator-is-compact-on-c`: supplied compactness of the interval and square, the Banach/normed-space facts, and the bounded-linear-operator conditions needed before applying Arzelà–Ascoli. The kernel bound and compactness argument now explicitly establish the operator hypotheses.
- `lem-half-order-singular-integral-exists`: stated the interval and function-space prerequisites and defined the operator norm used in the argument; the endpoint integral is justified by the cited (p)-test.
- `lem-half-order-kernel-translation-modulus-in-l1`: supplied compactness of ([-1,1]), needed to apply Heine–Cantor to the smoothed kernels.
- `thm-nystrom-operator-norm-perturbation-error`: removed the false inference that bounded invertibility makes (A) bounded. Explicit estimates from the continuous-kernel bound and the finite quadrature weights now prove boundedness of (K), (K_Q-K), and (I-K) before the perturbation estimate is applied.
- `lem-midpoint-nystrom-collective-compactness-and-consistency`: supplied the compact-domain, Banach-space, and bounded-linear-operator prerequisites and proved boundedness of each midpoint operator before invoking collective compactness.
- `ex-gaussian-two-node-nystrom-exact-separable-equation`: verified that Lebesgue measure on the interval satisfies the Gauss moment-data assumptions and stated the moments as Lebesgue integrals; the moment calculations now invoke the integral linearity and power-integral facts explicitly.
- `lem-half-order-product-integration-stability-and-consistency`: supplied the compactness, Banach-space, bounded-linearity, and compact-operator facts required by its stability and consistency arguments.
- `thm-midpoint-nystrom-smooth-solution-error`: stated the Banach and nonzero-space prerequisites and made explicit that the cited collective-compactness result applies to the bounded linear midpoint operators. Replaced its inaccurate FNC midpoint-error citation with Rutgers MATH 373 §8.2.
- `ex-half-order-midpoint-order-loss`: supplied the derivative-based convexity argument for (y^{-1/2}) on panels after the first, and made the improper-integral, interval-additivity, monotonicity, and affine Riemann-sum steps explicit.
- `thm-half-order-product-integration-fredholm-error`: stated the Banach and nonzero-space prerequisites and that each product-integration operator is bounded linear before applying collective compactness.
- A page `nystrom-product-integration-and-fredholm-error`: corrected the affine normalization paragraph by establishing compactness of the interval and the Banach structure of both continuous-function spaces, then verifying that the map (U) is a linear isometry.

The batch proof contract was updated for the changed proof-bearing items. The changed definition has no proof derivation entry; changed items had no stale `verification.judge` record to remove.

## Defects outside edit scope

No confirmed defect requiring an uneditable-finding entry remains. No defective published dependency or other-batch draft supplier was confirmed. The repaired defects are recorded above and are intentionally absent from the findings array.

## Page verdicts

- A `nystrom-product-integration-and-fredholm-error`: the Nyström/Fredholm summary is consistent with the reviewed statements after the normalization prose repair. The page verdict is clear after that edit.
- B `nystrom-product-integration-and-fredholm-error-examples`: the examples page and its four assigned items were reviewed; no confirmed page-level defect remains.

## Validation and blockers

- Reflow passed for all 11 changed item files; all were already in canonical reflow form.
- Precheck passed for all 11 changed item files.
- `proof-contract.mjs --strict` passed: 0 errors, 0 warnings, 17/17 assigned items checked.
- The required final `proof-layout.mjs` batch run passed: 11 items, 36 steps, 0 defects.
- No blocker.

## Coverage note

Both assigned pages, all 17 assigned items, the 39 distinct direct external suppliers listed above, and the cited source passages needed for the reviewed claims were examined. This was a frontier review, not a recursive re-audit of every transitive published supplier in the library; no defect in an unreviewed transitive supplier is asserted or ruled out.
