# Lane 04: Statistical Learning and Classical Models rendering audit

## Result

Reviewed all 43 assigned items and all 66 receipt-listed PNG tiles. Every tile was opened individually with `tools.view_image` at original resolution. Frozen source snapshot, local HTML, and tile hashes match the assignment and screenshot receipts.

No confirmed LaTeX/TikZ rendering defects or high-likelihood missing diagrams were found. Existing CART tree, graph-path, and SCAFFOLD communication-flow diagrams render and encode the stated objects/relations. Other reviewed content is adequately expressed by its text and formulas; no optional diagram candidate was raised.

## Coverage

| Item | Title | Tiles opened |
|---|---|---:|
| `alg-cart-greedy-split` | Greedy axis-aligned CART growth on a finite sample | 1 |
| `alg-finite-round-confidence-pseudolabeling` | Finite-round confidence-threshold pseudo-labeling | 1 |
| `alg-lloyd-k-means` | Lloyd's k-means algorithm with explicit tie handling | 1 |
| `alg-scaffold` | SCAFFOLD with client and server control variates | 1 |
| `cor-erm-excess-risk-from-uniform-deviation` | ERM excess risk from Rademacher uniform deviation | 3 |
| `def-binary-logistic-log-likelihood-and-l1-penalty` | Binary logistic log-likelihood and L1-penalized objective | 1 |
| `def-empirical-risk-minimizer` | Empirical risk minimizers | 1 |
| `def-global-l1-sensitivity` | Global L1 sensitivity | 1 |
| `def-linear-regression-objectives` | Fixed-design least-squares, ridge, lasso, group, and fused objectives | 1 |
| `def-poisson-nmf-model` | Poisson nonnegative matrix-factorization model | 1 |
| `def-realizable-and-agnostic-pac` | Realizable and agnostic PAC learning | 1 |
| `def-supervised-learning-problem` | Supervised prediction problems | 1 |
| `ex-add-remove-noisy-count` | Add/remove noisy count | 1 |
| `ex-cart-one-dimensional-threshold-tree` | A one-dimensional regression threshold tree | 1 |
| `ex-duplicate-predictors-and-distinct-class-size` | Duplicate predictors do not enlarge the finite class | 1 |
| `ex-fixed-target-lmnn-triplet-conflict` | A fixed LMNN target triplet can retain a positive margin loss | 1 |
| `ex-graph-harmonic-path-interpolation` | Harmonic extension on a three-vertex path | 1 |
| `ex-kernel-ridge-small-regularizer-amplifies-coefficient-error` | Small regularization can amplify coefficient error | 1 |
| `ex-multilabel-false-negative-risk-control` | Multilabel false-negative risk control | 1 |
| `ex-pac-bayes-single-hypothesis-posterior` | A posterior concentrated on one hypothesis | 2 |
| `ex-random-forest-out-of-bag-diagnostic` | An out-of-bag prediction can differ from the full finite forest | 1 |
| `ex-singular-mahalanobis-metric-identifies-distinct-points` | A rank-deficient Mahalanobis matrix identifies distinct points | 1 |
| `ex-threshold-rates-vary-under-score-balance` | Threshold rates can vary despite balanced mean scores | 2 |
| `fs-wainwright-signed-support-threshold-claim` | The unrestricted Wainwright signed-support threshold claim fails without active-dimension control | 3 |
| `lem-chordal-components-admit-both-orientations` | Edges of finite chordal graphs admit both collider-free orientations | 2 |
| `lem-dp-test-function-extension` | Differential privacy inequality for bounded measurable functions | 1 |
| `lem-finite-martingale-difference-sum-variance` | Second moment bound for a finite martingale-difference sum | 2 |
| `lem-ica-whitening-reduces-mixing-to-orthogonal` | Whitening a square ICA model gives orthogonal mixing | 1 |
| `lem-local-sgd-virtual-progress` | One-step progress of the virtual local-SGD iterate | 2 |
| `lem-pc-skeleton-separation` | DAG adjacency is equivalent to having no separating set | 1 |
| `lem-real-cholesky-recurrence-computes-factorization` | The real Cholesky recurrence computes the positive-diagonal factor | 2 |
| `lem-scaffold-nonconvex-round-progress` | Nonconvex SCAFFOLD progress in one communication round | 2 |
| `lem-symmetric-matrix-frobenius-isometry` | Symmetric matrices are Euclidean under the Frobenius norm | 1 |
| `rem-gp-regression-computation-and-scope-caveats` | Computational costs and limits of finite Gaussian-process regression | 3 |
| `thm-basic-adaptive-composition` | Basic adaptive composition | 2 |
| `thm-complete-separation-precludes-finite-logistic-mle` | Complete separation gives an unattained logistic likelihood supremum | 1 |
| `thm-fedavg-under-gradient-dissimilarity` | Strongly convex FedAvg under bounded gradient dissimilarity | 2 |
| `thm-gaussian-mixture-em-observed-likelihood-is-nondecreasing` | Exact Gaussian-mixture EM does not decrease observed log likelihood | 4 |
| `thm-kernel-ridge-gram-perturbation-bound` | Kernel ridge predictions are stable under Gram-matrix perturbations | 2 |
| `thm-local-sgd-convex-round-complexity` | Strongly convex local-SGD round complexity | 2 |
| `thm-perceptron-margin-mistake-bound` | The perceptron makes at most R squared over gamma squared mistakes | 2 |
| `thm-regression-forest-risk-under-unbiased-randomized-trees` | Unbiased randomized-tree residual correlation bounds forest risk | 2 |
| `thm-target-risk-bound-by-source-risk-divergence-and-joint-error` | Target risk bound by source risk, H-delta-H divergence, and joint error | 2 |

## Scope and integrity

Review covered the title and complete ItemBody in each frozen snapshot, checked against its matching local HTML. PNG tiles were viewed one by one at original resolution; per-item hashes and view attestations are recorded in `lane-04.json`. No live website or network was used. No item, library, application, or publication-status files were changed.
