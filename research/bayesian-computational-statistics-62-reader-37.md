# Step 3a reader report — batch 37

Run: `bayesian-computational-statistics-62`  
Role: `reader-37`

## Opened inventory

Pages:

- A page: `library/bayesian-computational-statistics/hamiltonian-monte-carlo-and-leapfrog.md`
- B page: `library/bayesian-computational-statistics/hamiltonian-monte-carlo-and-leapfrog-examples.md`

Assigned items, read in dependency order:

- Level 0: `def-leapfrog-step-map`; `thm-exact-hamiltonian-flow-preserves-energy-and-volume`; `lem-real-line-exponential-tail-integrable`.
- Level 1: `thm-leapfrog-is-reversible-and-volume-preserving`.
- Level 2: `def-hamiltonian-monte-carlo`.
- Level 3: `alg-leapfrog-hamiltonian-monte-carlo`; `ex-hmc-globally-lipschitz-force`; `ex-hmc-exact-flow-limit`.
- Level 4: `thm-metropolized-hamiltonian-chain-preserves-target`; `ex-hmc-leapfrog-harmonic-resonance`; `ex-hmc-finite-step-energy-error`.

Current-run draft supplier items outside batch 37 whose statements/proofs were opened:
`alg-gradient-descent`, `alg-metropolis-hastings-kernel`,
`lem-common-submeasure-and-bounded-radon-nikodym-density`,
`lem-common-submeasure-density-is-pointwise-minimum`,
`lem-finite-euclidean-space-is-standard-borel`,
`thm-metropolis-hastings-kernel-is-reversible-and-invariant`,
`def-general-state-reversibility-by-symmetric-flow-measure`, and
`thm-general-state-reversibility-implies-invariance`.

Relevant published supplier statements/definitions were consulted from the direct dependency inventory of the assigned items, including:
`cor-additivity-of-the-nonnegative-lebesgue-integral`,
`cor-continuous-functions-are-borel-measurable`,
`cor-exponential-reciprocal-and-positivity`,
`cor-globally-lipschitz-odes-have-global-solutions`,
`cor-lebesgue-sigma-algebra-is-the-completion-of-borel-measure`,
`cor-lipschitz-ode-uniqueness-and-stability-estimate`,
`cor-mean-value-theorem`, `def-axiom-of-choice`, `def-canonical-natural`,
`def-cholesky-factorisation-with-positive-diagonal`,
`def-composition-of-probability-kernels`, `def-countable-choice`,
`def-dirac-measure`, `def-integer-power`,
`def-integral-of-a-nonnegative-simple-function`,
`def-integral-over-a-measurable-set`,
`def-invariant-and-stationary-distribution-for-a-markov-kernel`,
`def-jacobian-matrix-and-gradient`,
`def-lebesgue-measure-and-the-lebesgue-sigma-algebra`,
`def-measurable-function-between-measurable-spaces`, `def-measure`,
`def-measure-kernel-and-probability-kernel`,
`def-measure-preserving-transformation-and-system`,
`def-multivariate-normal-law`, `def-natural-numbers`,
`def-nonnegative-lebesgue-integral`, `def-probability-measure`,
`def-product-sigma-algebra-and-finite-product-sigma-algebras`,
`def-standard-borel-space`, `def-standard-normal-and-normal-laws`,
`lem-ac-supplies-sequential-choices-for-probability-constructions`,
`lem-c1-euclidean-maximal-flow-with-c2-upgrade`,
`lem-coordinate-maps-and-permutations-are-measurable-on-finite-products`,
`lem-dirac-integral-evaluation`,
`lem-kernel-composition-is-well-defined-and-associative`,
`lem-prior-and-model-kernel-define-joint-law`,
`prop-order-and-scalar-rules-for-the-nonnegative-integral`,
`thm-algebra-of-continuous-functions`,
`thm-arithmetic-and-lattice-operations-preserve-measurability`,
`thm-borel-products-of-euclidean-spaces-are-euclidean-borel`,
`thm-borel-sets-are-lebesgue-measurable`,
`thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`,
`thm-cauchy-schwarz-and-the-euclidean-norm`,
`thm-chain-rule-for-total-derivatives`,
`thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique`,
`thm-composition-of-continuous-functions`,
`thm-continuous-preimages-of-borel-sets-are-borel`,
`thm-determinant-differential-and-jacobis-formula`,
`thm-determinant-multiplicative`, `thm-determinant-of-a-triangular-matrix`,
`thm-exponential-addition-formula`, `thm-exponential-is-strictly-increasing`,
`thm-geometric-series`, `thm-induction-principle`,
`thm-integrals-are-invariant-under-measure-preserving-maps`,
`thm-lebesgue-measure-of-a-box-of-every-kind`,
`thm-lebesgue-measure-under-dilations-and-reflections`,
`thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`,
`thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets`,
`thm-measurability-of-integration-against-a-kernel`,
`thm-monotone-convergence-for-the-integral`,
`thm-nondegenerate-multivariate-normal-law-has-density`,
`thm-nonnegative-weighted-sums-of-measures`,
`thm-real-square-matrix-invertible-iff-determinant-nonzero`,
`thm-sections-of-product-measurable-functions-are-measurable`,
`thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, and
`thm-tonelli-theorem-for-sigma-finite-product-spaces`.

The dependency context was checked against the current authored carriers. The relevant exact source facts were enough to verify the assigned arguments; no external search was needed for these standard ODE, measure, and HMC calculations.

## Edits and evidence

1. `thm-leapfrog-is-reversible-and-volume-preserving`: the original slice calculation established preservation for Borel phase sets, while the statement claimed preservation of full Euclidean Lebesgue measure. The proof now identifies the Borel product measure with Euclidean measure using `thm-borel-products-of-euclidean-spaces-are-euclidean-borel` and `thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets`, then extends preservation to every Lebesgue-measurable set by the Borel-completion statement in `cor-lebesgue-sigma-algebra-is-the-completion-of-borel-measure`. The extension covers kicks, drifts, and the momentum flip. The item dependencies and its proof contract now include these suppliers.

2. `ex-hmc-globally-lipschitz-force`: Fact F5 omitted the continuity-on-the-closed-interval hypothesis in the cited mean value theorem. It now states the exact hypothesis; the proof applies it to the explicitly (C^1) function (U'). The positive lower bound for (Z_U) now displays the integral over ([-1,1]) and cites the measurable-set integral, monotonicity, and simple-integral definitions. The proof contract records the new citations and derivation.

3. `ex-hmc-exact-flow-limit`: Fact F3 now includes the Countable Choice hypothesis of `thm-exact-hamiltonian-flow-preserves-energy-and-volume`; Fact F5 supplies it from AC. Its contract was refreshed to remove stale source-hash template-review records.

4. `ex-hmc-leapfrog-harmonic-resonance`: AC is stated in the Given clause, matching the standard-normal law input. The positive target-mass estimate now cites the integral-over-a-set and monotonicity/simple-integral facts and displays the interval's unit measure. The item dependencies and proof contract were updated.

5. `ex-hmc-finite-step-energy-error`: AC is explicit in the Given clause. Fact F3 cites positivity and strict increase of the exponential, and step 3.1 uses those facts to justify (e^{-1/8}<1). Its proof contract was updated.

No stale `verification.judge` record was present in the five edited items. Stale template-review item hashes were removed from the affected proof-contract boundary records; no review stamp or acceptance was added.

## Page verdicts

- `hamiltonian-monte-carlo-and-leapfrog` (A): pass after the item repair. Its summary correctly distinguishes exact-flow hypotheses, finite-step energy error, shear-based volume preservation, and invariance from convergence.
- `hamiltonian-monte-carlo-and-leapfrog-examples` (B): pass. The summary matches the four examples and makes no unsupported convergence claim. B-page prose was not edited.

## Unedited defects

None found in the assigned items, pages, or reviewed dependency statements/proofs.

## Validation

- Reflow: all five changed items reported unchanged.
- Precheck: all five changed items passed. The first theorem precheck proposed canonical phase numbering; it was adopted, and the final precheck passed.
- Proof layout: 5 items, 19 numbered steps, 0 defects.

## Blocker

The batch-37 pages manifest still contains the pre-reader dependency arrays. The edited item carriers add direct dependencies to `thm-leapfrog-is-reversible-and-volume-preserving`, `ex-hmc-globally-lipschitz-force`, `ex-hmc-leapfrog-harmonic-resonance`, and `ex-hmc-finite-step-energy-error`. The manifest was left unchanged because this reader's permitted repair carriers are assigned items and A-page prose; owner reconciliation is needed before mechanical closure.
