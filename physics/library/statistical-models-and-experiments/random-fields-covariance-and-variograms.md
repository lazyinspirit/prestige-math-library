---
page: random-fields-covariance-and-variograms
title: "Random fields and variograms"
status: published
items:
  - def-random-field-stationarity-covariance-and-variogram
  - lem-random-field-covariance-kernel-is-positive-semidefinite
  - thm-gaussian-random-field-existence-from-a-positive-semidefinite-kernel
  - thm-order-two-field-variogram-is-conditionally-negative-definite
  - thm-continuous-stationary-field-covariance-has-bochner-measure
examples: []
---

A random field assigns a real random variable to each spatial location on one
probability space. Coordinate measurability is distinct from the joint
measurability needed for spatial integration. Strict stationarity concerns
shift-invariant finite-dimensional laws; wide stationarity concerns a
constant mean and lag-dependent covariance; order-two intrinsic stationarity
concerns the first and second moments of increments. A covariance kernel is
positive semidefinite by a finite variance calculation.

Given a mean on $T\subseteq\mathbb R^d$ and a symmetric positive-semidefinite
kernel, AC supplies the finite Gaussian laws and Kolmogorov extension supplies
a field on the cylinder sigma-algebra. That construction asserts no path
continuity or joint measurability. An order-two variogram is displacement-only and is
conditionally negative definite for real zero-sum coefficients. For a
wide-stationary field on all of $\mathbb R^d$, the variogram is
$C(0)-C(h)$. A continuous stationary covariance has a Bochner representing
measure on the Pontryagin dual of $\mathbb R^d$ under AC+DC; a measure need not
have a density.

These are properties under a specified probability law. They do not establish
that the law is empirically adequate for a spatial application.
