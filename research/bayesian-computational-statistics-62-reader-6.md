# Reader report — batch 6

Run: `bayesian-computational-statistics-62`  
Role: Step 3a reader  
Batch: `6`

## Opened inventory

### Assigned pages

- `library/bayesian-computational-statistics/conjugate-families-and-posterior-prediction.md` (A page)
- `library/bayesian-computational-statistics/conjugate-families-and-posterior-prediction-examples.md` (B/examples page)

### Assigned items, read in the manifest dependency order

1. `lem-beta-density-normalization`
2. `lem-binomial-count-law`
3. `lem-gamma-density-normalization`
4. `def-poisson-law`
5. `def-exponential-conjugate-prior-family`
6. `lem-finite-euclidean-space-is-standard-borel`
7. `def-dirichlet-density-kernel`
8. `lem-multinomial-law-normalization`
9. `thm-multivariate-normal-conditional-law`
10. `thm-iid-exponential-family-statistic-is-sufficient`
11. `def-beta-distribution`
12. `def-gamma-distribution-shape-rate`
13. `thm-dirichlet-density-normalization`
14. `def-multinomial-distribution`
15. `def-dirichlet-distribution`
16. `thm-beta-binomial-conjugate-update`
17. `thm-gamma-poisson-exposure-adjusted-update`
18. `thm-exponential-family-conjugate-update`
19. `thm-dirichlet-multinomial-conjugate-update`
20. `thm-normal-normal-conjugate-update`
21. `ex-multivariate-normal-conditioning-singular-state`
22. `ex-beta-binomial-update`
23. `ex-exposure-gamma-poisson-update`
24. `ex-normal-normal-conjugate-update`
25. `ex-dirichlet-multinomial-update`

### Dependency sources opened for the checks

- Beta/Gamma and integration: `def-real-beta-integral`, `thm-real-beta-integral-convergence`, `thm-real-beta-gamma-identity`, `def-real-gamma-function-by-the-euler-integral`, `thm-real-gamma-euler-integral-convergence`, `cor-real-gamma-positive-integer-values`, `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`, `thm-real-power-continuity-and-derivatives`, `thm-continuous-implies-integrable`, `thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral`, `thm-monotone-convergence-for-the-integral`, and `thm-borel-sets-are-lebesgue-measurable`.
- Discrete sampling and counts: `def-bernoulli-and-binomial-random-variables`, `def-binomial-coefficient`, `thm-independent-random-elements-have-product-joint-law`, `def-scalar-poisson-count-law`, `lem-poisson-count-law-normalization-and-moments`, `thm-multinomial-theorem`, and `def-multinomial-coefficient`.
- Gaussian and Euclidean claims: `def-standard-normal-and-normal-laws`, `lem-normal-density-has-total-mass-one`, `lem-normal-location-scale-density`, `def-multivariate-normal-law`, `lem-joint-gaussian-blocks-with-zero-cross-covariance-are-independent`, `lem-metrics-on-rn`, `thm-euclidean-space-complete`, `thm-rational-points-and-boxes-in-rn`, `thm-of-square-roots`, and `lem-ac-supplies-sequential-choices-for-probability-constructions`.
- Bayesian, kernel, and sufficiency claims: `def-bayesian-model-as-prior-and-sampling-kernel`, `def-posterior-evidence-normalizer-and-fiberwise-update`, `prop-fiberwise-posterior-propriety-iff-finite-positive-evidence`, `thm-bayes-formula-for-dominated-kernels`, `thm-conditional-density-formula`, `def-measure-kernel-and-probability-kernel`, `thm-measurability-of-integration-against-a-kernel`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, `thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets`, `prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets`, `thm-borel-products-of-euclidean-spaces-are-euclidean-borel`, `thm-measure-uniqueness-on-a-sigma-finite-pi-system`, `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`, `thm-arithmetic-and-lattice-operations-preserve-measurability`, `thm-derivative-of-exponential`, `thm-continuous-preimages-of-borel-sets-are-borel`, `def-exponential-family`, `def-sufficient-statistic`, and `thm-common-reference-factorization-criterion`.
- Continuous-function and sigma-finiteness facts used in the exponential-family definition: `def-finite-sigma-finite-and-semifinite-measures`, `thm-logarithm-derivative-and-integral`, `cor-differentiable-implies-continuous`, `lem-finite-products-of-standard-borel-spaces-are-standard-borel`, `thm-algebra-of-continuous-functions`, and `thm-composition-of-continuous-functions`.

## Edits and evidence

1. **`items/ex-beta-binomial-update.md`, Facts & Assumptions and Proof 1.1.** The original calculation wrote `B(2,3)=1!2!/3!=1/12`; the factorial quotient on the left is `1/3`, so the computation was false. I added the direct dependency and Fact `[F3]` for `thm-real-beta-gamma-identity`, corrected the denominator to `4!`, and retained the result `B(2,3)=1/12`. The integer Gamma values follow from `cor-real-gamma-positive-integer-values`, and the corrected evidence is `10(1/630)/(1/12)=4/21`. The Beta–Binomial theorem supplies the evidence ratio and endpoint updates. The batch and consolidated proof contracts now include `[F3]` and the corrected derivation.

2. **`items/thm-normal-normal-conjugate-update.md`, Facts & Assumptions and Proof 1.1.** The original `[F1]` attributed the positive-variance density formula to `def-standard-normal-and-normal-laws`, whose definition only constructs shifted laws as affine pushforwards. I linked `lem-normal-location-scale-density`, whose proof derives that density by the one-dimensional change-of-variables theorem. The original Step 1.1 also inferred a Bayesian model from joint measurability alone; `def-bayesian-model-as-prior-and-sampling-kernel` requires a parameter-measurable probability kernel. I added a local construction of the conditional sample kernel from the product density, checked its probability sections by Tonelli and density-measure formation, identified its rectangle probabilities with the conditional IID product law, and proved measurable event evaluations using the constant Lebesgue kernel with the finite cube exhaustion. The data sigma-algebra is specified as Borel, and the proof contract records the new sources and derivations.

For both repaired items, no `verification.judge` record was present to remove. The proof contracts were updated in `research/bayesian-computational-statistics-62-proof-contracts.json` and `research/bayesian-computational-statistics-62-batch-6.proof-contracts.json`. Reflow and precheck passed for both items. The final command `node tools/proof-layout.mjs items/ex-beta-binomial-update.md items/thm-normal-normal-conjugate-update.md` reported 2 items, 6 steps, and 0 defects.

## Unedited defects

None identified. The draft dependency `lem-normal-location-scale-density` was opened and its change-of-variables proof supports the assigned consumer.

## Page verdicts

- **`conjugate-families-and-posterior-prediction` — pass.** Its summary accurately describes the finite-positive evidence condition, the stated choice assumptions, the exposure-zero Poisson boundary, the Gaussian conditioning hypothesis, and the separate exponential-family sufficiency result.
- **`conjugate-families-and-posterior-prediction-examples` — pass.** The five listed examples match their statements and computations, including the Beta–Binomial evidence, zero-exposure Gamma–Poisson boundary, Normal precision update, Dirichlet–Multinomial evidence, and singular-state Gaussian conditioning.

## Blocker and coverage note

No blocker to this batch review. The recomputed run status reports a separate run-level blocker: `3a-collect`, dispatch `collect-23`, failed three times for batch 23. That batch is outside this dispatch, so I recorded the blocker without changing its state. All assigned pages and items were opened. The cited suppliers needed for the checked steps were opened, but this was not an audit of every transitive foundation beneath every supplier. An initial broad search used to locate the proof contract also surfaced earlier `*-dispatch` review artifacts; I disregarded their decisions and based the verdicts on the current item and page contents and the opened mathematical sources.
