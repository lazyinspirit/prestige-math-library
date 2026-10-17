# Step 3a reader report — batch 107

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader  
Verdict: both assigned pages pass after the repairs below; no uneditable finding remains.

## Opened inventory

Assigned pages:

- A page: `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/global-sensitivity-anova-and-sobol-estimation.md`
- B page: `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/global-sensitivity-anova-and-sobol-estimation-examples.md`

All 22 assigned items were opened in dependency order:

- `def-dependent-input-shapley-effects`
- `def-product-coordinate-projections`
- `lem-uniform-interval-poincare-inequality`
- `alg-exact-permutation-shapley-effects`
- `alg-monte-carlo-permutation-shapley-effects`
- `lem-product-coordinate-projections-commute-and-contract`
- `thm-shapley-effects-are-nonnegative-and-efficient`
- `def-product-hoeffding-anova-components`
- `thm-monte-carlo-shapley-effects-clt-and-standard-errors`
- `thm-product-hoeffding-anova-decomposition`
- `def-first-and-total-sobol-indices`
- `thm-complete-chaos-tensor-expansions-give-sobol-coefficients`
- `thm-pick-freeze-sobol-covariance-identities`
- `thm-poincare-bound-for-total-sobol-effect`
- `alg-pick-freeze-monte-carlo-sobol-estimators`
- `thm-pick-freeze-sobol-ratio-joint-clt-and-mcse`
- `ex-perfectly-correlated-inputs-and-shapley-allocation`
- `ex-ishigami-function-sobol-decomposition`
- `ex-polynomial-chaos-coefficients-and-sobol-indices`
- `ex-zero-variance-sobol-indices-undefined`
- `ex-noisy-simulator-intrinsic-noise-and-input-sensitivity`
- `ex-ratio-pick-freeze-index-estimator-is-biased`

Dependency sources opened to check the assigned proofs and summaries:

- Pages: `conditional-expectation`, `randomized-quasi-monte-carlo-and-replicates`, and `polynomial-chaos-stochastic-collocation-and-galerkin-uq`.
- Shapley/measure foundations: `thm-conditional-expectation-is-the-l2-orthogonal-projection`, `def-axiom-of-choice`, `def-countable-choice`, `def-dependent-choice`, `def-moments-variance-and-covariance`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, and `cor-cauchy-schwarz-inequality-for-l-two`.
- Fourier/Poincaré foundations: `def-absolutely-continuous-function`, `thm-integration-by-parts-for-absolutely-continuous-functions`, `def-the-one-dimensional-torus-and-normalized-haar-integral`, and `thm-fourier-basis-and-parseval-on-the-n-torus`.
- Limit and estimator foundations: `cor-iid-finite-variance-strong-law`, `lem-measurable-functions-preserve-independence`, `thm-multivariate-iid-central-limit-theorem`, `thm-khinchin-weak-law-for-iid-integrable-variables`, `thm-first-and-second-order-delta-method-for-random-vectors`, and `cor-expectation-linearity-monotonicity-and-modulus-bound`.
- Hilbert/ANOVA and probability foundations: `def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis`, `thm-parseval-equivalences-for-a-complete-orthonormal-family`, `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`, `def-independent-random-elements`, `thm-independent-random-elements-have-product-joint-law`, and `def-conditional-expectation-given-a-sigma-algebra`.
- Chaos/RQMC references: `def-finite-product-chaos-input`, `lem-positive-moment-gram-produces-univariate-chaos-polynomials`, `def-chaos-total-degree-and-hyperbolic-cross-index-sets`, `def-chaos-orthonormal-tensor-basis`, `thm-independent-polynomial-chaos-tensors-are-orthonormal`, and `lem-b-adic-anova-parseval`.

## Repairs and evidence

- Renamed `ex-ishigami-function-sobol-decomposition` to “The Ishigami function's only possible interaction is X1-X3.” The example allows every real `b`, including `b=0`, so the former title asserted an interaction even when its interaction component vanishes. The formulas and proof already compute the X1-X3 component for all parameters.
- Clarified `thm-poincare-bound-for-total-sobol-effect` to require a real product-measurable representative of the real L2 class and to state all section regularity and derivative conditions using that representative. Pointwise sections are not defined by an L2 equivalence class alone. The proof and the assigned A-page summary now use the same representative convention. Its interval inequality, ANOVA numerator identity, hypotheses, and conclusion were otherwise preserved.
- Added a proved finite-run result to `thm-monte-carlo-shapley-effects-clt-and-standard-errors`: the permutation procedure terminates after `n` rows, makes at most `2nd` coalition-value calls, and computes sample means/covariance in `O(nd^2)` arithmetic operations, apart from permutation generation and oracle costs. Step 3.1 supplies the finite-loop and call-count argument.
- Extended the proved finite-run result in `thm-pick-freeze-sobol-ratio-joint-clt-and-mcse`: the procedure terminates after `n` rows, uses at most `n(2d+5)` function evaluations, and has `O(nd^2+d^3)` scalar arithmetic cost for covariance and plug-in MCSE. Step 4.1 proves those bounds.
- Updated the affected entries for the Poincaré, Monte Carlo Shapley, and pick-freeze ratio results in `research/numerical-optimization-dynamics-2026-10-16-batch-107.proof-contracts.json`. The edited draft items had no `verification.judge` record to remove.

Consumer trace for the three theorem statement edits found only the assigned A page, besides each theorem's self-reference. Its Poincaré summary was updated; its Monte Carlo summaries remain compatible with the added finite-run bounds.

## Page verdicts

- `global-sensitivity-anova-and-sobol-estimation`: pass. Its summary matches the product-law decomposition, positive-variance convention, explicit completeness boundary, dependent-input Shapley convention, Poincaré hypotheses, and RQMC boundary checked against the assigned items and required pages. The Poincaré sentence now names the representative.
- `global-sensitivity-anova-and-sobol-estimation-examples`: pass. Its summaries accurately distinguish dependent Shapley allocation from independent-input ANOVA and correctly describe the zero-variance, noisy-output, finite-chaos, and finite-sample ratio examples. No B-page prose was edited.

No defect remained outside edit scope, so the findings array is empty.

## Validation and blocker

- `reflow` and `precheck` passed for all four edited items; reflow reported each unchanged after formatting.
- The final batched `node tools/proof-layout.mjs` pass reported 4 items, 16 steps, and 0 defects.
- No blocker prevented this review. The live run status separately reports `3a-collect` blocked because `collect-83` failed three times; this is outside batch 107 and was not changed.

## Coverage note

All assigned items and pages, their direct logical dependencies, the named cross-batch chaos suppliers, and the three required pages were opened. I did not independently re-audit every lower-level dependency in the transitive foundations of those supplier theorems; their statements and the proof portions needed to check batch 107 were inspected.
