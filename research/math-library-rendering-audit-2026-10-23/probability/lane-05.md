# Probability rendering audit — lane 05

Reviewed all **69 assigned items** and opened all **106 receipt-listed tiles** individually with tools.view_image(detail="original"). No collages or downscales were used. Every title and complete rendered ItemBody was reviewed. The frozen per-item sources, screenshot paths and hashes, section coverage, and per-tile view attestations are recorded in [lane-05.json](lane-05.json).

The local captures contain 2828 KaTeX renderings, zero recorded KaTeX parser errors, and no TikZ diagrams or diagram failures. The scope is the frozen title and local rendered ItemBody only. No HTTP(S) source, live site, production source, library content, or publication state was accessed or changed.

## Confirmed rendering defect

**thm-discrete-strong-markov-property, frozen snapshot line 51.** The two-row aligned conditional-expectation identity in proof step 2.1 is emitted as inline math within the prose paragraph. The original-resolution tile [thm-discrete-strong-markov-property--01.png](screenshots/thm-discrete-strong-markov-property--01.png) (SHA-256 `b7d58353eb400e23d6dc1d9869d7644901c5c4b4ead405b7b6b8c1307dfe6479`) shows the equation colliding with nearby proof text. The standalone HTML DOM has a span.katex containing a two-row mtable inside the paragraph rather than a display block, consistent with the overlap. Move the equation to its own display-math paragraph and split the surrounding prose; retain the identity.

## Optional diagram suggestions

- **ex-discrete-continuous-and-mixed-distribution-functions, lines 31–40 and 54–58.** Three aligned CDF plots would clarify the discrete jumps, continuous ramp, and mixed jump-plus-ramp. Preserve right-continuity, jump sizes, and endpoint markers; do not imply a density for the atomic law.
- **cex-positive-recurrence-without-aperiodicity-does-not-give-total-variation-convergence, lines 42–50, 55, 81, 85, 93, and 95–99.** A directed cycle 0→1→2→0, with edge probabilities 1, invariant π=(1/3,1/3,1/3), and a repeating δ₀, δ₁, δ₂ sequence would show period three and the difference between ordinary and Cesàro convergence. Keep the ordinary-time distance at 2/3; show convergence only for Cesàro averages.

Both suggestions are optional instructional support; the source already supplies the formulas and checks.

## Rejected viewer observation

**def-pairwise-independence, line 28; tile SHA-256 `61394d7e4dc12c79a9a2eb1b6d0702fa60be69aca96d4bc25b49c36db56d708`.** The coordinator independently reopened this tile at original resolution and confirmed that the full opening “Let (A_i)…” is visible at the normal left inset. The initial apparent omission was a viewer observation error and is rejected; this item has no confirmed clipping defect.

## Exhaustive item coverage

| Item ID | Review status | Tiles opened individually |
|---|---|---:|
| cex-a-noncylinder-path-functional-may-fail-measurability | clean | 1 |
| cex-almost-sure-convergence-need-not-imply-lp-convergence | clean | 1 |
| cex-conditioning-does-not-preserve-strict-inequalities | clean | 1 |
| cex-feller-negligibility-cannot-be-removed-from-the-converse | clean | 2 |
| cex-kolmogorov-extension-alone-does-not-give-a-continuous-version | clean | 2 |
| cex-positive-recurrence-without-aperiodicity-does-not-give-total-variation-convergence | editorial-diagram-candidate | 3 |
| cex-time-inhomogeneous-chain-cannot-be-encoded-by-one-kernel-without-enlarging-state | clean | 1 |
| cor-brownian-filtration-local-martingales-have-continuous-versions | clean | 2 |
| cor-characteristic-function-criterion-for-weak-convergence | clean | 1 |
| cor-de-moivre-laplace-central-limit-theorem | clean | 1 |
| cor-finite-random-variable-independence-agreement | clean | 2 |
| cor-kolmogorov-strong-law-for-independent-uniformly-bounded-variances | clean | 1 |
| cor-one-dimensional-brownian-motion-is-recurrent | clean | 2 |
| cor-submartingale-doob-decomposition-has-increasing-compensator | clean | 1 |
| cor-weakly-convergent-sequences-are-tight | clean | 1 |
| def-brownian-motion-started-at-x | clean | 1 |
| def-conditional-law-given-a-random-element | clean | 1 |
| def-convergence-in-lp-for-random-variables | clean | 1 |
| def-filtration-and-filtered-probability-space | clean | 1 |
| def-initial-distribution-of-a-markov-chain | clean | 1 |
| def-limsup-and-infinitely-often-event | clean | 1 |
| def-pairwise-independence | clean | 1 |
| def-quadratic-variation-along-a-partition-sequence | clean | 1 |
| def-sigma-algebra-at-a-stopping-time | clean | 1 |
| def-tail-sigma-algebra-of-a-sequence | clean | 1 |
| def-wiener-measure-on-continuous-path-space | clean | 2 |
| ex-borel-cantelli-eventually-no-large-deviations | clean | 1 |
| ex-characteristic-function-of-the-uniform-law | clean | 2 |
| ex-countable-discrete-spaces-are-standard-borel | clean | 1 |
| ex-discrete-continuous-and-mixed-distribution-functions | editorial-diagram-candidate | 1 |
| ex-expected-duration-of-simple-gamblers-ruin | clean | 1 |
| ex-gaussian-point-mass-endpoint-coupling-bound | clean | 1 |
| ex-independent-sums-via-characteristic-functions | clean | 3 |
| ex-likelihood-ratio-martingale | clean | 2 |
| ex-negative-drift-reflected-walk-has-a-finite-mean-small-set-hitting-time | clean | 3 |
| ex-quantile-coupling-on-the-real-line | clean | 2 |
| ex-square-of-a-martingale-minus-quadratic-compensator | clean | 2 |
| ex-truncated-centering-weak-law-with-infinite-mean | clean | 2 |
| ex-zero-one-law-for-convergence-of-a-random-series | clean | 1 |
| lem-borel-subspaces-admit-polish-presentations | clean | 2 |
| lem-cesaro-limit-of-truncated-means | clean | 1 |
| lem-conditional-hoeffding-bound-for-bounded-martingale-differences | clean | 1 |
| lem-countable-compactly-supported-tests-determine-euclidean-weak-convergence | clean | 2 |
| lem-equivalent-event-tests-for-a-discrete-stopping-time | clean | 1 |
| lem-general-ito-integral-is-independent-of-the-approximating-sequence-and-ae-representative | clean | 2 |
| lem-kronecker-summation-lemma | clean | 1 |
| lem-matrix-chapman-kolmogorov-equations | clean | 2 |
| lem-period-is-constant-on-a-communicating-class | clean | 1 |
| lem-second-order-characteristic-function-expansion | clean | 2 |
| lem-total-variation-half-l1-formula-on-a-countable-space | clean | 2 |
| rem-cylinder-sigma-algebra-versus-full-product-power-set | clean | 1 |
| rem-skorokhod-representation-does-not-couple-the-original-variables | clean | 1 |
| thm-blumenthal-zero-one-law | clean | 2 |
| thm-brownian-quadratic-variation-along-dyadic-partitions | clean | 2 |
| thm-conditional-density-formula | clean | 2 |
| thm-convergence-in-probability-implies-convergence-in-distribution | clean | 1 |
| thm-discrete-strong-markov-property | confirmed-rendering-defect | 1 |
| thm-etemadi-strong-law-for-pairwise-independent-iid-variables | clean | 3 |
| thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces | clean | 1 |
| thm-independent-series-probability-and-almost-sure-convergence-agree | clean | 2 |
| thm-kac-return-time-formula-for-a-positive-mass-set | clean | 3 |
| thm-kolmogorov-three-series-theorem | clean | 2 |
| thm-levy-upward-convergence-of-conditional-expectations | clean | 1 |
| thm-markov-chain-law-is-determined-by-initial-law-and-kernel | clean | 1 |
| thm-optional-stopping-under-uniform-integrability | clean | 2 |
| thm-quadratic-covariation-of-brownian-ito-processes | clean | 4 |
| thm-square-minus-predictable-quadratic-variation-is-a-martingale | clean | 2 |
| thm-tower-property-of-conditional-expectation | clean | 1 |
| thm-variance-of-a-finite-sum | clean | 1 |

See the JSON for exact tile paths, SHA-256 values, original dimensions, vertical offsets, frozen snapshot and HTML hashes, headings reviewed, capture diagnostics, and each view attestation.
