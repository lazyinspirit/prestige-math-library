---
page: nonparametric-regression-and-smoothing
title: "Regression Estimation"
status: draft
items:
  - def-regression-target-version
  - lem-local-linear-normalized-moment-matrix-converges-in-probability
  - def-nadaraya-watson-estimator
  - def-pointwise-regression-risk
  - def-local-polynomial-estimator
  - thm-pointwise-risk-bias-variance-decomposition
  - thm-nadaraya-watson-population-bias
  - thm-local-linear-population-bias
  - thm-local-linear-conditional-bias
  - thm-kernel-regression-conditional-asymptotic-variance
  - thm-nadaraya-watson-finite-sample-bias
examples: []
---

This page fixes a pointwise version of the regression function before imposing
smoothness, then defines local-constant and local-polynomial estimators and
pointwise squared-error risk. Its fixed interior-point bias formulas admit
compact kernels with local smoothness, general noncompact kernels with
explicit sufficient global bounds, and bounded rapid-tail kernels such as
the Gaussian with local smoothness and a finite response second moment.
These are sufficient localization conditions, not necessary conditions.
The population local-linear fit and its empirical conditional response-law
mean remove the design-gradient term; Nadaraya–Watson retains it. The page
also proves conditional variance limits for both estimators and an
unconditional Nadaraya–Watson variance expansion under the stated extra
moment bounds. The local-linear result does not assert an unconditional
expectation or variance: the companion counterexample has a nonsingular
near-collision design with infinite positive and negative expectation parts.
A separate companion calculation exhibits first-order boundary bias.
