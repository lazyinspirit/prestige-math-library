---
page: exact-gaussian-linear-regression-inference
title: "Exact Gaussian regression inference and prediction"
status: published
items:
  - lem-full-column-rank-matrix-has-economy-qr
  - thm-exact-gaussian-linear-regression-inference
  - thm-gaussian-regression-confidence-and-prediction-intervals
examples: []
---

## Objective

Derive exact finite-sample coefficient, nested-model, mean-response, and prediction inference for a fixed full-column-rank Gaussian linear model.

## Scope and assumptions

Throughout, $X\in\mathbb R^{n\times p}$ is deterministic with $1\le p<n$ and full column rank, and the errors are independent $N(0,\sigma^2)$ with $\sigma^2>0$. The exact $t$ and partial $F$ laws use the Gaussian sampling law and positive residual degrees of freedom. The page distinguishes the Gaussian maximum-likelihood estimate $RSS_F/n$ from the residual mean square $RSS_F/(n-p)$.

For a nested reduced design, the null is that the full-model mean lies in the reduced design space. A mean-response interval describes the mean $x_0^T\beta$; a prediction interval for one independent future response includes its additional error variance. These are conditional fixed-design calculations and do not establish that a scientific application satisfies the Gaussian model.
