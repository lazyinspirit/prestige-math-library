---
page: sparse-high-dimensional-estimation-and-covariance
title: Sparse Estimation and Covariance
status: draft
items:
- def-gaussian-sequence-sparse-means-model
- def-subgaussian-fixed-design-regression-model
- def-fixed-design-incoherence-condition
- def-restricted-eigenvalue-condition
- def-lasso-estimator
- lem-lasso-objective-has-minimizer
- thm-lasso-basic-inequality
- lem-incoherence-implies-restricted-eigenvalue
- lem-fixed-design-subgaussian-score-concentration
- thm-lasso-prediction-and-l1-error-under-incoherence
- def-sample-covariance-and-operator-norm-loss
- def-weak-lq-sparse-covariance-class
- def-minimax-squared-operator-risk
- def-soft-thresholding-function
- lem-products-of-subgaussian-coordinates-are-subexponential
- lem-epsilon-net-controls-symmetric-operator-norm
- lem-symmetric-matrix-operator-norm-rayleigh
- thm-centered-subgaussian-sample-covariance-bound
- alg-entrywise-thresholded-sample-covariance
- lem-weak-lq-thresholded-covariance-row-sum
- lem-directional-tail-implies-subgaussian-mgf
- lem-directional-tail-products-are-subexponential
- thm-weak-lq-sample-covariance-entrywise-deviation
- thm-thresholded-sparse-covariance-high-probability-bound
- cex-thresholded-sparse-covariance-rate-unbounded-at-superexponential-dimension
- lem-gaussian-sparse-covariance-mixture-lower-bound
- lem-weak-lq-thresholded-covariance-expected-risk
- lem-diagonal-covariance-minimax-lower-bound
- thm-thresholded-sparse-covariance-minimax-rate
examples: []
---

This page distinguishes sparse fixed-design regression from covariance
estimation. Its Lasso bounds state the noise proxy, incoherence condition,
cone argument and fitted-versus-coefficient losses explicitly. Dense sample
covariance concentration includes the correction for an unknown mean.

For clean weakly sparse covariance models, entrywise concentration and a
row-sum argument give thresholding bounds. The page proves expected risk for
the raw threshold estimator in the regular dimension regime, a diagonal
Gaussian lower bound, and a complete sparse Gaussian-mixture lower bound.
The minimax rate is capped when dimension outgrows the sample size; an
explicit threshold-or-zero rule attains it in every stated regime. The
uncapped super-exponential-dimension claim is refuted explicitly. These are
clean directional sub-Gaussian guarantees; contamination and heavy tails
require different models and arguments.
