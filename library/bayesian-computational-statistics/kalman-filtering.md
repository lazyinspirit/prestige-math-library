---
page: kalman-filtering
title: Exact linear-Gaussian Kalman filtering
status: published
items:
  - lem-independent-noise-extends-a-conditional-law
  - alg-kalman-filter
  - lem-one-step-kalman-gaussian-conditioning
  - thm-kalman-filter-is-exact-posterior
examples: []
---

## Objective

This page proves the finite-horizon Kalman recursion gives an exact
filtering-kernel version for a linear-Gaussian state-space model. Initial,
process, measurement, predicted-state, and filtered-state covariances may be
positive semidefinite and singular. Each innovation covariance that is
solved must be positive definite. The recursion uses Cholesky triangular
solves and asserts no approximation or numerical-stability guarantee.
