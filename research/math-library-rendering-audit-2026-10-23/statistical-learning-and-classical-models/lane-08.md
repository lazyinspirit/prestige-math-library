# Statistical Learning and Classical Models — lane 08

Reviewed all **43 assigned items** and **66 receipt-listed PNG tiles**. Each tile was opened individually with `view_image` at original resolution. Frozen source and snapshot hashes, matching local HTML hashes, and tile hashes match their assignment and receipt values. No source, application, publication status, or live site was changed.

## Confirmed rendering finding

- **`lem-positive-minimal-dags-have-a-conditioned-reversal`**, source lines 105–128: the fenced TikZ schematic is displayed as literal preformatted source in matching HTML and tile 03. The receipt reports `tikz_count: 0` and no diagram failure, indicating the diagram was not recognized. The surrounding prose specifies in `G`: `c→l`, `y→l`, `w→l`; in `G′`: `c→l`, `d→l`, `l→y`, `l→e`, with `w` nonadjacent to `l`. The proof explicitly does not rely on the drawing. Suggested repair: make the fence compatible with renderer recognition and recapture.

## Existing diagrams

The TikZ graph in `ex-concentric-circles-spectral-embedding` and two-law table in `ex-unlabeled-law-two-point-lower-bound` render legibly and agree with their text. No additional missing diagram was sufficiently high-likelihood to report; optional diagrams were not elevated to findings.

## Exact item coverage

- `alg-deterministic-neighbor-selection` (1 tile)
- `alg-graph-harmonic-label-propagation` (1 tile)
- `alg-nystrom-kernel-ridge-fit` (1 tile)
- `alg-weighted-spectral-clustering` (1 tile)
- `cor-vc-minimax-rate-match` (2 tiles)
- `def-classification-calibration-of-a-surrogate` (1 tile)
- `def-finite-gaussian-mixture` (1 tile)
- `def-growth-function` (1 tile)
- `def-loss-discrepancy-between-domains` (1 tile)
- `def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces` (1 tile)
- `def-sample-compression-scheme` (1 tile)
- `def-uniform-algorithmic-stability` (1 tile)
- `ex-beta-min-below-lasso-threshold-loses-support` (1 tile)
- `ex-concentric-circles-spectral-embedding` (2 tiles)
- `ex-finite-lookup-table-pac-sample-complexities` (1 tile)
- `ex-gaussian-radial-kernel` (1 tile)
- `ex-identifiable-nonlinear-additive-noise-model` (2 tiles)
- `ex-linear-and-polynomial-kernels` (1 tile)
- `ex-nonseparable-perceptron-cycles` (1 tile)
- `ex-perfect-risk-prediction-with-unequal-base-rates` (1 tile)
- `ex-rbm-visible-units-conditionally-independent-given-hidden` (1 tile)
- `ex-star-class-linear-disagreements` (2 tiles)
- `ex-unlabeled-law-two-point-lower-bound` (1 tile)
- `lem-anm-parent-dependence-persists-under-conditioning` (2 tiles)
- `lem-covariate-shift-joint-law-density` (2 tiles)
- `lem-federated-recursion-averaging` (1 tile)
- `lem-gaussian-sample-covariance-operator-concentration` (2 tiles)
- `lem-laplace-product-density` (2 tiles)
- `lem-negative-root-power-is-convex` (1 tile)
- `lem-positive-minimal-dags-have-a-conditioned-reversal` (3 tiles)
- `lem-scaffold-convex-client-drift` (2 tiles)
- `lem-smooth-residual-independence-has-pointwise-density-factorization` (1 tile)
- `lem-youngest-child-descendants-conditionally-independent` (2 tiles)
- `thm-active-version-space-invariant-and-query-bound` (2 tiles)
- `thm-bivariate-additive-noise-identifiability` (2 tiles)
- `thm-dag-markov-equivalence-skeleton-vstructures` (2 tiles)
- `thm-finite-class-sample-complexity` (2 tiles)
- `thm-gp-regression-kernel-ridge-posterior-mean-equivalence` (2 tiles)
- `thm-laplace-mechanism-privacy` (2 tiles)
- `thm-node-mean-minimizes-squared-error` (2 tiles)
- `thm-private-online-learning-regret-under-composition` (3 tiles)
- `thm-sauer-shelah-growth-bound` (2 tiles)
- `thm-vc-agnostic-sample-complexity` (2 tiles)

The JSON file records every source, snapshot, HTML, receipt, tile path, expected and actual hash, individual original-resolution view attestation, and per-item visual review. This was a local rendering audit, not a proof audit or production-site inspection.
