---
page: nonparametric-density-estimation-and-kernels
title: "Density Estimation"
status: published
items:
  - def-density-target-and-kernel-density-estimator
  - lem-kde-evaluation-is-a-measurable-statistic
  - lem-kde-jointly-measurable-in-sample-and-evaluation-point
  - lem-nonnegative-kde-integrates-to-one
  - lem-c2-density-with-bounded-hessian-is-bounded
  - lem-second-order-kernel-convolution-l2-bias-bound
  - thm-kde-pointwise-second-order-bias
  - thm-kde-pointwise-variance
  - thm-kde-global-mise-upper-rate
examples: []
---

For iid observations with a density on $\mathbb R^d$, this page defines the
pointwise density target and the kernel density estimator. It proves the
second-order pointwise bias, pointwise variance and a global mean integrated
squared error upper bound with explicit regularity, moment and bandwidth
hypotheses. The global rate uses an $L^2$ translation bound under
$W^{2,2}(\mathbb R^d)$; the pointwise variance regime includes both
$h\to0$ and $nh^d\to\infty$. Point targets refer to a selected density
version, and no minimax lower bound is claimed.
