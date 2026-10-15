# Step 3a reader report — batch 42

Run: `bayesian-computational-statistics-62`  
Role: reader (`reader-42`)

## Opened inventory

Assigned pages:

- `library/bayesian-computational-statistics/kalman-filtering.md` (`kalman-filtering`, A page).
- `library/bayesian-computational-statistics/kalman-filtering-examples.md` (`kalman-filtering-examples`, B page).

Required page dependencies opened for context:

- `library/bayesian-computational-statistics/state-space-filtering-and-predictive-laws.md`.
- `library/bayesian-computational-statistics/conjugate-families-and-posterior-prediction.md`.
- `library/linear-algebra/direct-matrix-factorisations-lu-cholesky-and-qr.md`.

Assigned items, read in manifest dependency order:

- `lem-independent-noise-extends-a-conditional-law`
- `alg-kalman-filter`
- `lem-one-step-kalman-gaussian-conditioning`
- `thm-kalman-filter-is-exact-posterior`
- `ex-scalar-kalman-filter-update`
- `ex-kalman-filter-singular-prior-positive-innovation`

The direct mathematical suppliers in the batch manifest were opened. These include the conditional-law, kernel, product-sigma-algebra, regular-conditional-distribution, independence, Dynkin, kernel-integration and sigma-finite product-measure results; the linear-Gaussian model, filtering-law, Cholesky and triangular-solve interfaces; the multivariate-normal, finite independent Gaussian stack, conditional Gaussian and positive-semidefinite square-root results; and the path-law, filtering/smoothing existence, and triangular-solve correctness theorems. I also inspected the source items those arguments use directly, including the product-measure definition, finite-horizon kernel-law theorem, standard-Borel model definition, RCD existence and factorization results, Gaussian zero-cross-covariance independence result, product joint-law theorem, Tonelli theorem, and the event-class independence and random-element law definitions.

Current-run suppliers outside batch 42 that were checked were `thm-multivariate-normal-conditional-law` (batch 6), `def-state-space-filtering-laws` and `thm-state-space-filtering-and-smoothing-laws-exist` (batch 41). After the dimension clarification below, I checked the direct batch-46 consumer `lem-kalman-filter-is-exact-conditional-on-nonlinear-path`; its conditional model also inherits positive dimensions from `def-linear-gaussian-state-space-model-with-independent-noises`.

## Review and edit

The noise-extension lemma correctly constructs a probability kernel using product measures and kernel-integral measurability, then proves the conditional identities on rectangles and extends them by the pi-lambda theorem. Its measurable pushforward argument preserves the conditional-law identity.

The Kalman procedure has explicit inputs, admissibility condition, initialization, prediction, innovation, Cholesky factorization, triangular solves, update, and the zero-horizon branch. Its positive-definite innovation condition is exactly what its Cholesky and solve steps require; no inverse of a potentially singular state or noise covariance appears.

The one-step Gaussian lemma has correct joint moments, Schur-complement update, positive-semidefinite covariance conclusion, and Joseph-form identity. Its proof contract already assumed positive finite dimensions, and the Gaussian-law and finite-stack suppliers require positive dimensions. I repaired the omitted statement hypothesis in `items/lem-one-step-kalman-gaussian-conditioning.md`: it now says that `d`, `n`, and `p` are positive integers. This is inherited by the exact-filter theorem from the model definition and by the checked batch-46 consumer from its conditional linear-Gaussian model. I synchronized the `empty` boundary evidence in `research/bayesian-computational-statistics-62-batch-42.proof-contracts.json`. The item had no `verification.judge` record to remove.

The exact-filter theorem's induction applies the independent-noise extension to the past, conditions the resulting Gaussian block at every observation value, identifies the triangular-solve gain, proves kernel measurability, and extends the RCD identity from history rectangles to all history events. The hypotheses allow singular state and noise covariances while requiring each solved innovation matrix to be positive definite. Both examples' numerical updates, including the singular prior and posterior in the second example, are correct. No other defect was found in the assigned items or the two page summaries.

Required checks after the repair:

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-one-step-kalman-gaussian-conditioning.md` — exit 0; unchanged after the final wording edit.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-one-step-kalman-gaussian-conditioning.md` — pass, 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/lem-one-step-kalman-gaussian-conditioning.md` — exit 0; 3 steps, 0 defects.

## Page verdicts

- `kalman-filtering`: pass. The objective accurately states exact finite-horizon filtering, permits singular state/noise covariances, requires positive-definite solved innovations, and makes no numerical-stability claim.
- `kalman-filtering-examples`: pass. Its objective accurately describes the scalar and singular-covariance examples and the positive-innovation condition.

## Unedited defects and blockers

Unedited defects: none. No blocker prevents completion of batch 42. The live autopilot status separately records failures for `3a-collect` (batch 23) and `3a-split` (batch 25); neither concerns this assignment.

## Coverage note

All assigned pages and items, the three required page dependencies, all direct item dependencies in the batch manifest, and the additional local results needed to check the cited kernel, Gaussian-conditioning, and existence interfaces were inspected. I did not re-audit every transitive foundation proof behind the published suppliers; no such unresolved source claim affected the batch-42 conclusions.
