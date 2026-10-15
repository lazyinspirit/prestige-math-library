---
page: adaptive-empirical-bayes-credible-set-calibration
title: "Adaptive empirical-Bayes credible-set calibration and failure"
status: draft
items:
  - def-gaussian-sequence-hyperrectangle-class
  - def-polished-tail-class-for-gaussian-sequence
  - def-adaptive-empirical-bayes-gaussian-sequence-procedure
  - lem-gaussian-sequence-empirical-bayes-posterior-formula
  - lem-empirical-bayes-maximizer-bracket-on-polished-tails
  - thm-adaptive-empirical-bayes-credible-ball-conservative-coverage-on-polished-tails
  - cex-sparse-gap-truth-causes-empirical-bayes-credible-set-undercoverage
examples: []
requires:
  - marginal-likelihoods-bayes-factors-and-empirical-bayes
---

This page fixes the mildly ill-posed Gaussian sequence model and its
empirical-Bayes marginal-likelihood selector. It defines the polished-tail
class and retains the source-specific conservative-coverage result, including
the first-coordinate restriction and the separate growing-hyperparameter
inflation regime. It also records the sparse-gap undercoverage claim inside a
polynomial hyperrectangle. Complete local proofs of the coverage and
undercoverage claims remain escalated. The positive source result is
conservative coverage tending to one after inflation, not exact nominal
coverage.
