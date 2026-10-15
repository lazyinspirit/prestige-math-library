---
page: adaptive-empirical-bayes-credible-set-calibration
title: Adaptive empirical-Bayes credible-set calibration and failure
status: draft
items:
  - def-gaussian-sequence-hyperrectangle-class
  - def-polished-tail-class-for-gaussian-sequence
  - def-adaptive-empirical-bayes-gaussian-sequence-procedure
  - lem-gaussian-sequence-empirical-bayes-posterior-formula
  - lem-uniform-empirical-bayes-marginal-score-bound
  - lem-empirical-bayes-maximizer-bracket-on-polished-tails
  - lem-empirical-bayes-radius-bias-and-noise-comparison
  - thm-adaptive-empirical-bayes-credible-ball-conservative-coverage-on-polished-tails
  - cex-sparse-gap-truth-causes-empirical-bayes-credible-set-undercoverage
examples: []
requires:
  - conjugate-families-and-posterior-prediction
  - marginal-likelihoods-bayes-factors-and-empirical-bayes
---

This page fixes the mildly ill-posed Gaussian sequence model and its
empirical-Bayes marginal-likelihood selector. It defines the polished-tail
class and retains the source-specific conservative-coverage result, including
the first-coordinate restriction and the separate growing-hyperparameter
inflation regime. It also records the sparse-gap undercoverage claim inside a
polynomial hyperrectangle. Local score control brackets the fitted regularity; posterior radius, bias
and noise comparisons prove conservative coverage. For each $\beta>0$, the
sparse-gap construction in
[[cex-sparse-gap-truth-causes-empirical-bayes-credible-set-undercoverage]]
gives undercoverage along a subsequence when the fixed cap is $A>\beta$,
$0<M\le(1984C^8)^{-1}$, and, for some finite $K_L$, eventually
$L_{n_j}\le K_L\sqrt M\,\rho_j^{(1+2p)/(8+8\beta+8p)}$. The positive source result is
conservative coverage tending to one after inflation, not exact nominal
coverage.
