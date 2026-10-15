# BCS supplier-interface planning resolution

All 36 named MSF/SME supplier interfaces resolve at their exact requested IDs and are published. No external rename, alias substitution, or new external claim is required. All 59 Requires clauses were compared with current item paths; the 17 absent required IDs are already planned BCS-local obligations.

Native status reports both upstream runs COMPLETE. MSF publication: `ee9a9c408d` (closeout `c7f867636a`); SME publication: `e41d69e60f` (closeout `8335ff1642`). This resolves the stale unauthored planning premise and claims no new proof audit.

## Exact published interfaces

| Provider pair | Exact item | Actual home | BCS consumers |
|---|---|---|---|
| MSF-10 | `def-confidence-set-and-coverage` | `confidence-sets-pivots-and-test-inversion` | BCS-48, BCS-49 |
| MSF-04 | `def-dominated-statistical-experiment` | `dominated-experiments-likelihood-and-sufficiency` | BCS-02, BCS-06, BCS-07, BCS-08, BCS-09, BCS-10, BCS-13, BCS-15, BCS-58 |
| MSF-05 | `def-exponential-family` | `complete-sufficiency-exponential-families-and-basu` | BCS-03, BCS-59 |
| MSF-11 | `def-finite-group-randomization-test` | `conditional-and-finite-group-exact-inference` | BCS-51 |
| SME-44 | `def-general-state-space-model-by-kernels` | `state-space-models-as-probability-laws` | BCS-38 |
| MSF-01 | `def-identifiability-of-an-estimand` | `statistical-experiments-models-and-identifiability` | BCS-24, BCS-58, BCS-59 |
| MSF-21 | `def-kullback-leibler-divergence` | `minimax-lower-bounds-and-information-theoretic-methods` | BCS-07, BCS-08, BCS-09, BCS-15, BCS-19, BCS-20 |
| MSF-36 | `def-l2-m-approximable-causal-bernoulli-shift` | `hilbert-valued-clt-for-weakly-dependent-functional-time-series` | BCS-50 |
| MSF-04 | `def-likelihood-density` | `dominated-experiments-likelihood-and-sufficiency` | BCS-02, BCS-03, BCS-06, BCS-07, BCS-08, BCS-09, BCS-10, BCS-13, BCS-15, BCS-20, BCS-21, BCS-22, BCS-58 |
| SME-44 | `def-linear-gaussian-state-space-model-with-independent-noises` | `state-space-models-as-probability-laws` | BCS-39 |
| MSF-03 | `def-loss-function-and-risk` | `losses-risk-and-decision-rules` | BCS-04, BCS-53 |
| MSF-01 | `def-observational-equivalence` | `statistical-experiments-models-and-identifiability` | BCS-59 |
| MSF-12 | `def-op-and-little-op-stochastic-bounds` | `asymptotic-convergence-consistency-and-identification` | BCS-10 |
| MSF-11 | `def-orbit-rank-p-value` | `conditional-and-finite-group-exact-inference` | BCS-51 |
| MSF-01 | `def-parameter-measurable-statistical-model-as-markov-kernel` | `statistical-experiments-models-and-identifiability` | BCS-01, BCS-05 |
| MSF-01 | `def-parametric-statistical-model` | `statistical-experiments-models-and-identifiability` | BCS-01, BCS-05, BCS-38 |
| MSF-16 | `def-qmd-path` | `likelihood-asymptotics-wald-score-and-likelihood-ratio` | BCS-10 |
| MSF-02 | `def-randomized-procedure-as-a-markov-kernel` | `estimators-and-randomized-procedures` | BCS-51 |
| MSF-02 | `def-randomized-test` | `estimators-and-randomized-procedures` | BCS-51 |
| MSF-02 | `def-statistic-and-estimator` | `estimators-and-randomized-procedures` | BCS-24, BCS-47, BCS-48, BCS-52, BCS-53, BCS-58 |
| MSF-01 | `def-statistical-experiment` | `statistical-experiments-models-and-identifiability` | BCS-01, BCS-06, BCS-47 |
| MSF-08 | `def-test-size-and-power` | `finite-sample-tests-neyman-pearson-and-valid-p-values` | BCS-51 |
| MSF-36 | `lem-finite-dependent-vector-clt` | `hilbert-valued-clt-for-weakly-dependent-functional-time-series` | BCS-50 |
| MSF-36 | `lem-long-run-covariance-is-trace-class` | `hilbert-valued-clt-for-weakly-dependent-functional-time-series` | BCS-50 |
| MSF-36 | `lem-positive-trace-class-covariance-defines-hilbert-gaussian` | `hilbert-valued-clt-for-weakly-dependent-functional-time-series` | BCS-50 |
| MSF-11 | `thm-finite-group-randomization-validity` | `conditional-and-finite-group-exact-inference` | BCS-51 |
| MSF-14 | `thm-first-and-second-order-delta-method-for-random-vectors` | `delta-method-and-asymptotic-normality` | BCS-28, BCS-48, BCS-49, BCS-53 |
| MSF-05 | `thm-full-rank-exponential-family-sufficiency` | `complete-sufficiency-exponential-families-and-basu` | BCS-24, BCS-59 |
| MSF-36 | `thm-hilbert-valued-clt-for-l2-m-approximable-bernoulli-shifts` | `hilbert-valued-clt-for-weakly-dependent-functional-time-series` | BCS-50 |
| MSF-01 | `thm-identifiability-iff-constant-on-equivalence-classes` | `statistical-experiments-models-and-identifiability` | BCS-58, BCS-59 |
| MSF-08 | `thm-p-value-superuniformity` | `finite-sample-tests-neyman-pearson-and-valid-p-values` | BCS-51 |
| MSF-21 | `thm-pinsker` | `minimax-lower-bounds-and-information-theoretic-methods` | BCS-07, BCS-08, BCS-15 |
| MSF-16 | `thm-qmd-implies-lan-for-iid` | `local-asymptotic-normality-contiguity-and-efficiency` | BCS-10 |
| MSF-15 | `thm-regular-mle-asymptotic-linearity-and-normality` | `likelihood-asymptotics-wald-score-and-likelihood-ratio` | BCS-10 |
| MSF-12 | `thm-vector-slutsky` | `asymptotic-convergence-consistency-and-identification` | BCS-10 |
| MSF-12 | `thm-vector-stochastic-order-calculus` | `asymptotic-convergence-consistency-and-identification` | BCS-10 |

## Page-only SME interface

SME-12 resolves to `randomized-treatment-assignment-and-sharp-null-tests` (`library/statistical-models-and-experiments/randomized-treatment-assignment-and-sharp-null-tests.md`), published and canonical A page. BCS-47/51 may use `def-finite-randomized-treatment-assignment-model`, `def-fisher-sharp-null-and-predeclared-test-orderings`, `thm-fisher-sharp-null-randomization-pvalues-are-valid`. Only design-based assignment examples: known finite possibly unequal assignment law; fixed units and potential outcomes; Fisher sharp null; predeclared ordering. Weighted inclusive p-values conservative; independent uniform tie randomization exact. No weak-average-effect or iid-resampling validity imported.

## Contract boundaries

- BCS-01/02 and likelihood consumers: statistical-experiment and likelihood-density supply neither parameter sigma-algebra nor parameter/joint measurability. Use the exact parameter-measurable kernel supplier and explicitly impose jointly measurable dominated density as already planned.
- BCS-07/08/09/15/19/20: KL has its published direction and AC premise; Pinsker uses event-supremum TV, natural log and TV <= sqrt(D(P||Q)/2).
- BCS-10: QMD implies proxy LAN, not blanket local absolute continuity. MLE supplier requires correct specification, QMD, positive-definite information, L2 log-likelihood Lipschitz envelope on a common full set, and consistent measurable exact MLE. Posterior normality/tail control remains BCS-local.
- BCS-03/24/59: exponential-family normalization and sufficiency are for the published standard-Borel, sigma-finite model; sufficiency assumes AC. No arbitrary-summary sufficiency or positive-tolerance ABC theorem is imported.
- BCS-38/39: SME-44 supplies finite-horizon standard-Borel kernel models under AC. Linear Gaussian state/noise covariance may be singular; every innovation inverse needs its separate SPD premise. No filtering or convergence theorem is imported.
- BCS-50: MSF-36 uses H=L2([0,1]), centered L2-m-approximable Bernoulli shifts, and a sample-sum Hilbert CLT. It is not a time-indexed partial-sum FCLT or a bootstrap-validity result. Block-bootstrap validity remains local.
- BCS-51/52: the MSF-11 finite-group supplier has a finite sample space and invariant null law, with orbit uniformity on distinct orbit points. General measurable-space or asymptotic permutation validity remains local.
- BCS-48: historical supplier-index assigns thm-conditional-iid-bootstrap-clt-for-empirical-law to BCS-47, but controlling BCS-48 Requires says add local theorem; assign BCS-48. No extra pair needed.

## Existing local authoring obligations

These are existing BCS-scope items, with no new external prerequisite needed.

| Authoring pair | Missing planned ID | Consumers |
|---|---|---|
| BCS-03 | `thm-multivariate-normal-conditional-law` | BCS-11, BCS-39, BCS-40 |
| BCS-12 | `thm-fernique-integrability-for-separable-banach-gaussian-law` | BCS-12 |
| BCS-12 | `thm-cameron-martin-translation-for-separable-banach-gaussian-law` | BCS-12 |
| BCS-12 | `thm-support-of-banach-gaussian-is-closure-of-rkhs` | BCS-12 |
| BCS-12 | `thm-borell-concentration-for-separable-banach-gaussian-law` | BCS-12 |
| BCS-12 | `thm-gaussian-concentration-sieve-bounds` | BCS-12 |
| BCS-03 | `def-poisson-law` | BCS-14 |
| BCS-14 | `thm-existence-of-dirichlet-process-by-normalized-gamma-poisson-random-measure` | BCS-14 |
| BCS-33 | `alg-overlapping-batch-means-mcse` | BCS-33 |
| BCS-48 | `thm-conditional-iid-bootstrap-clt-for-empirical-law` | BCS-48 |
| BCS-52 | `def-two-sample-u-statistic-parameter` | BCS-52 |
| BCS-52 | `def-two-sample-order-r-u-statistic-and-first-projections` | BCS-52 |
| BCS-52 | `lem-two-sample-u-statistic-hoeffding-decomposition` | BCS-52 |
| BCS-52 | `lem-two-sample-u-statistic-degenerate-remainder-order` | BCS-52 |
| BCS-52 | `lem-permutation-mixture-coupling-for-two-sample-u-statistics` | BCS-52 |
| BCS-52 | `lem-pooled-mixture-projection-and-variance` | BCS-52 |
| BCS-52 | `thm-two-sample-u-statistic-projection-clt` | BCS-52 |

The companion JSON binds current input and item bytes, records actual page homes and canonical page kinds, and quotes each external Statement/Definition interface. Preserve the historical audit as dated evidence. No items, pages, canonical plan, engine, or other-run sources were edited; no tests or gates were run. P-SDE/P-NUM-SDE are outside this scope.
