# Step 3a reader report — batch 69

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader  
Verdict: reviewed; confirmed defects repaired in assigned draft items and assigned A-page prose; no uneditable findings remain.

## Opened inventory

### Assigned pages

- `global-optimization-and-certified-branch-and-bound` (A), including the current page summary.
- `global-optimization-and-certified-branch-and-bound-examples` (B), including the current page summary.

### Assigned items, in dependency order

Level 0: `def-mccormick-bilinear-box-envelope`, `def-spatial-global-optimization-problem`, `lem-positive-noise-regularizes-observed-covariance`.

Level 1: `alg-finite-candidate-gp-acquisition-search`, `def-spatial-box-bound-certificate`, `lem-mccormick-envelope-equals-graph-convex-hull`.

Level 2: `alg-certified-spatial-branch-and-bound`, `thm-adaptive-finite-candidate-gp-search-posterior-correct`, `thm-finite-candidate-gp-search-terminates`.

Level 3: `thm-finite-budget-spatial-bnb-terminates`, `thm-spatial-bnb-eventual-epsilon-termination`, `thm-spatial-bnb-gap-certificate-sound`, `ex-noisy-biological-simulator-finite-candidate-gp-acquisition`.

Level 4: `alg-interval-dag-box-enclosure-and-bound`, `def-factorable-box-convex-relaxation-interface`, `cex-invalid-spatial-lower-bound-can-prune-global-minimum`.

Level 5: `alg-factorable-mccormick-box-relaxation`, `alg-lipschitz-midpoint-box-lower-bound`.

Level 6: `thm-factorable-dual-certificate-is-valid-box-lower-bound`, `thm-interval-lipschitz-bound-sound-consistent`.

Level 7: `alg-certified-constraint-emptiness-search`, `alg-bounded-mixed-integer-branch-and-bound`, `ex-multimodal-polynomial-spatial-bnb-gap-certificate`.

Level 8: `thm-uniform-constraint-margin-enables-empty-box-detection`, `thm-bounded-mixed-integer-finite-budget-terminates`, `thm-bounded-mixed-integer-gap-certificate-sound`.

Level 9: `ex-bounded-engineering-design-mixed-integer-gap-certificate`.

### Direct item dependencies and required pages opened

Direct item dependencies: `def-axiom-of-choice`, `def-cholesky-factorisation-with-positive-diagonal`, `def-convex-program-duality-and-slater-condition`, `def-convex-subset-of-euclidean-space`, `def-dyadic-floating-point-format-and-directed-rounding`, `def-forward-and-back-substitution-for-triangular-systems`, `def-gaussian-process`, `def-independent-random-elements`, `def-infimum`, `def-intervals-rectangles-and-complex-balls`, `def-max-min`, `def-metric-bounded-diameter`, `def-metric-continuity`, `def-outward-rounded-interval-and-ball-operations`, `lem-directed-dyadic-rounding-enclosure-and-error`, `lem-finite-set-has-max`, `lem-inf-epsilon`, `lem-of-square-monotone`, `lem-real-line-is-a-metric-space`, `thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost`, `thm-compact-subset-is-closed-and-bounded`, `thm-continuous-image-of-a-compact-space-is-compact`, `thm-finite-gaussian-process-posterior-and-predictive-laws`, `thm-heine-borel-rn`, `thm-infimum-property`, `thm-lagrangian-weak-duality`, `thm-metric-closure-characterisation`, `thm-nested-interval-property`, `thm-of-square-roots`, and `thm-outward-rounded-operations-are-isotone-and-dag-sound`.

Required pages opened for context: `matrix-norms-condition-numbers-and-numerical-stability`, `nonlinear-equations-and-newton-methods`, `inequality-kkt-duality-and-optimality-certificates`, `outward-rounded-interval-and-ball-arithmetic`, `barrier-and-primal-dual-interior-point-methods`, and `gaussian-process-priors-and-posterior-laws`.

## Repairs and evidence

- `items/alg-finite-candidate-gp-acquisition-search.md`: specified that coefficients are supplied for every stage `0 ≤ t < N` (empty for `N=0`); initialized the prior or initial-data posterior before selection; specified the no-stage `s=N` case; updated the posterior immediately after every appended observation, including the final one; and added a `complete` return with the terminal trace, posterior, and acquisition errors. The previous instructions stopped after appending the final observation and did not define that terminal posterior, and their coefficient input had no stage index range. The fixed-list posterior formulas and positive-definite observed-covariance conditions are supported by `thm-finite-gaussian-process-posterior-and-predictive-laws` and `lem-positive-noise-regularizes-observed-covariance`.
- `items/thm-adaptive-finite-candidate-gp-search-posterior-correct.md`: checked this direct consumer after the algorithm change. The induction now states why a measurable selection adds no information beyond the observed history, why the next observation is a Gaussian update under the current posterior, and why the posterior state is stored after the terminal observation. Evidence is the finite Gaussian posterior theorem and independence of the fresh observation error from the process and earlier errors.
- `items/thm-finite-candidate-gp-search-terminates.md`: aligned the conclusion with the procedure’s actual outcomes (`complete` or explicit failure status), removed the unsupported budget-status outcome, bounded successful observation calls by `N-s`, and included finite validation, positive-definiteness checks, factorization, solve, acquisition-certificate, and observation operations among the termination conditions.
- `items/ex-noisy-biological-simulator-finite-candidate-gp-acquisition.md`: updated the example to follow the final-state interface. After the finite observation at `b`, `C_2=2I_2` is positive definite, so the updated posterior exists and the procedure returns `complete`. The acquisition comparison remains `√(1/2) < 1`, selecting `b` with `δ_1=0`.
- `items/ex-bounded-engineering-design-mixed-integer-gap-certificate.md`: made the fallback execution concrete. It now states `ε=1/10`, total budget `N=4`, an unavailable root mixed-relaxation bound (one call), and one remaining root call per integer assignment. Exact root reports at `x=z/2` give matching lower and feasible upper values `2/5`, `1/10`, and `0`, so `L=U=0` and the returned gap is within tolerance.
- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/global-optimization-and-certified-branch-and-bound.md`: qualified its summary to retain exact midpoint upper bounds and exact singleton reports for eventual unconstrained termination; required a dual-feasible pair plus a verified lower bound for its dual value; and stated the compact-box, finite-continuous-constraint, positive-margin, finite-time sound-bound conditions for emptiness termination. These qualifications match the local termination and dual-certificate items.
- `research/numerical-optimization-dynamics-2026-10-16-batch-69.proof-contracts.json`: refreshed source excerpts and affected derivation claims for the repaired GP algorithm, its theorem consumers, and the two examples. Existing status labels were not changed.

No stale `verification.judge` records were present on the changed items.

## Uneditable defects

None found. No defect remains in an unassigned, published, or other-batch dependency that needs routing.

## Page verdicts

- `global-optimization-and-certified-branch-and-bound`: **Pass after summary repair.** The listed spatial, interval, McCormick, dual-certificate, integer, constraint-emptiness, and GP claims match the assigned items with their stated hypotheses and statuses.
- `global-optimization-and-certified-branch-and-bound-examples`: **Pass.** The GP example remains conditional on its stated surrogate; the counterexample correctly violates the valid-lower-bound premise; the quartic gap calculation is sound; and the mixed-integer fallback example now supplies its trigger and budget.

## Validation and blocker

- Reflow: all five changed items reported `unchanged`.
- Precheck: the four proof/example items passed; the algorithm definition reported `0 checked, 0 failing`.
- Final proof layout: `node tools/proof-layout.mjs` on all five changed item paths reported `5 items, 12 steps, 0 defects`.
- Blocker: none.

## Coverage note

All 27 listed items, both assigned pages, the 30 direct item dependencies, and the six required pages were opened. No batch-specific rendered reader evidence bundle was present in the supplied paths or run source cache, so the review used the current repository sources directly. The transitive proof chains beneath those suppliers were not re-audited beyond the statements and proof sections needed for this batch.
