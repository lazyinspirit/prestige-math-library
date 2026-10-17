# Step 3a reader report — batch 8

Run: `numerical-optimization-dynamics-2026-10-16`  
Batch: `8`  
Role: reader

## Opened inventory

Assigned pages:

- A page: `rare-event-importance-sampling-and-multilevel-splitting`
- B page: `rare-event-importance-sampling-and-multilevel-splitting-examples`

Assigned A-page items, read in dependency order:

- `def-rare-event-efficiency-criteria`
- `lem-standard-normal-mills-ratio`
- `alg-cross-entropy-pilot-production`
- `def-nested-rare-event-levels`
- `def-finite-budget-stopped-event-kernel`
- `lem-sir-bounded-potential-unnormalized-update-variance`
- `thm-zero-variance-importance-sampling-proposal`
- `thm-gaussian-tail-exponential-tilting`
- `thm-cross-entropy-production-unbiased-given-pilot`
- `lem-nested-level-probability-factorization`
- `alg-independent-fixed-level-splitting`
- `alg-fixed-level-sir-splitting`
- `lem-finite-budget-stopped-normalizer`
- `lem-stopped-kernel-discretization-bias`
- `thm-independent-splitting-product-moments-and-work`
- `thm-fixed-level-sir-estimator-unbiased`
- `thm-fixed-level-sir-absolute-mse-bound`
- `thm-fixed-level-sir-relative-mse-under-conditional-event-second-moment-bounds`
- `cex-sir-l2-bound-from-conditional-means-is-false`
- `rem-sir-finite-particle-error-bound-scope`

Assigned B-page items:

- `ex-gaussian-barrier-exponential-tilting`
- `ex-queue-overflow-and-redundant-splitting-work`
- `ex-cross-entropy-pilot-misses-event-support`
- `cex-dependent-level-samples-bias-product-estimator`
- `ex-sir-zero-particle-prefix-positive-event`
- `ex-finite-budget-crossing-misses-between-grid-times`
- `ex-importance-sampling-finite-mean-infinite-second-moment`

Published dependencies opened for the assigned claims:

- `alg-importance-sampling`
- `thm-ordinary-importance-sampling-is-unbiased`
- `thm-ordinary-importance-sampling-finite-variance-under-weighted-second-moment`
- `def-standard-normal-and-normal-laws`
- `def-axiom-of-choice`
- `def-identically-distributed-and-iid-random-variables`
- `def-probability-measure`
- `def-standard-borel-space`
- `def-measure-kernel-and-probability-kernel`
- `def-product-sigma-algebra-and-finite-product-sigma-algebras`
- `def-moments-variance-and-covariance`
- `thm-measurability-of-integration-against-a-kernel`
- `thm-iid-monte-carlo-mean-moments`
- `def-feynman-kac-path-targets-and-normalizers`
- `thm-ionescu-tulcea-construction-of-a-markov-chain`
- `alg-sequential-importance-resampling`
- `thm-sequential-particle-estimator-is-unbiased`
- `lem-feynman-kac-path-measures-satisfy-forward-recursion`
- `def-iid-monte-carlo-estimators`
- `cor-conditional-variance-decomposition`
- `thm-smc-time-uniform-variance-bound-under-uniform-incremental-weights`

Also checked the batch-8 page manifest, coverage record, cross-batch dependency record (empty), and proof-contract citation/derivation maps and boundary statuses. The manifest contains 20 A-page items and 7 B-page items. There are no draft suppliers in another current-run batch in this batch's dependency record.

## Review and edits

### `def-rare-event-efficiency-criteria`

The definition gave logarithmic efficiency in terms of nonnegativity and the second moment but did not explicitly carry forward its unbiased-estimator scope. That scope is material to the stated relationship with bounded relative error. Chan, Glynn, and Kroese, “A Comparison of Cross-Entropy and Variance Minimization Strategies,” §2, journal pp. 184–185 (PDF pp. 2–3), defines logarithmic efficiency for an unbiased estimator and states that bounded relative error implies asymptotic optimality. I made the unbiased-family hypothesis explicit and added this source with its locator.

I rechecked the consumers in this batch: `thm-zero-variance-importance-sampling-proposal` uses the benchmark density; `thm-gaussian-tail-exponential-tilting` proves unbiasedness before invoking logarithmic efficiency; and `ex-importance-sampling-finite-mean-infinite-second-moment` makes no logarithmic-efficiency claim. Their uses remain valid under the explicit scope.

### `thm-fixed-level-sir-relative-mse-under-conditional-event-second-moment-bounds`

Its fact F2 relied on bounds on the backward functions and on (P(q_0)=Z). Those facts are established in step 1.2 of `thm-fixed-level-sir-absolute-mse-bound`; they do not appear in that theorem's Statement. I changed F2 to point to the proof step and updated the batch proof contract from `Statement` to `Proof`, binding the exact step 1.2 passage. The relative-MSE argument and bound are unchanged. The item had no `verification.judge` record to remove.

Validation after the edits:

- `node tools/tsx-run.mjs tools/reflow.mts items/def-rare-event-efficiency-criteria.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/def-rare-event-efficiency-criteria.md` — 0 checked, 0 failing; no proof section is present.
- `node tools/tsx-run.mjs tools/reflow.mts items/thm-fixed-level-sir-relative-mse-under-conditional-event-second-moment-bounds.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-fixed-level-sir-relative-mse-under-conditional-event-second-moment-bounds.md` — pass, direct strategy.
- `node tools/proof-layout.mjs items/def-rare-event-efficiency-criteria.md items/thm-fixed-level-sir-relative-mse-under-conditional-event-second-moment-bounds.md` — 2 items, 3 steps, 0 defects.
- The updated batch proof-contract JSON parses, and the relative-MSE F2 contract now binds the supplier's proof step.

Neither changed item had a stale `verification.judge` record.

## Page verdicts

- `rare-event-importance-sampling-and-multilevel-splitting` (A): **Pass after the noted repairs.** Its summary accurately describes the efficiency criteria, Gaussian tilt, independent and SIR splitting results, finite-particle bounds, counterexample, and stopped-event qualifications. The proof calculations and their hypotheses were checked against the opened suppliers.
- `rare-event-importance-sampling-and-multilevel-splitting-examples` (B): **Pass.** The Gaussian substitution, queue level probabilities and equal-work variances, pilot failure probability, dependent-sample coupling, zero-particle branch, missed-crossing path, and infinite-second-moment series calculation are correct. The summary matches the examples.

## Unedited defects and blockers

No confirmed defects remain unedited. No blocker.

## Coverage limits

All 27 assigned item carriers, both assigned pages, and the direct dependency statements or proof passages needed to check their claims were reviewed. The deeper transitive closure of published dependencies was not audited as a separate frontier. External source passages were independently checked for the two repairs/scope questions above; the other item claims were verified from their local proofs and computations rather than by re-auditing every bibliography entry.
