---
page: stationary-time-series-moments-and-autocovariance
title: "Stationary means and sample autocovariance"
status: draft
items:
  - def-strict-and-weak-stationarity-for-time-series
  - def-autocovariance-and-sample-autocovariance
  - cor-ergodic-time-series-sample-mean-converges-a-s-and-l1
  - thm-sample-acvf-properties-and-summable-covariance-mean-consistency
examples: []
---

For an integer-indexed real process, strict stationarity concerns all
finite-dimensional laws, while weak stationarity requires finite second
moments, a constant mean and lag-dependent covariance. Under weak stationarity,
the sample-mean variance is a triangularly weighted covariance sum; absolute
covariance summability gives an $O(n^{-1})$ variance bound and $L^2$ consistency,
without a mixing or central limit conclusion. The zero-extended biased sample
ACVF has nonnegative Toeplitz quadratic forms; the pair-count-normalized
rescaling need not. Ergodicity gives a separate almost-sure and $L^1$ mean
limit only with strict stationarity, integrability and the Axiom of Choice
required by the Birkhoff supplier. These are consequences of the specified
probability law; neither a model contract nor these theorems establish that a
scientific model adequately describes its application.

## Model contract for this pair

For horizon $n\ge1$, the observed record is the finite coordinate tuple
$D_n=(X_1,\ldots,X_n)$ in $\mathbb R^n$ with the finite product Borel
sigma-algebra; its law is the pushforward of the process law under the
coordinate map ([[def-stochastic-process-and-finite-dimensional-distributions]],
[[def-law-or-distribution-of-a-random-element]],
[[def-product-sigma-algebra-and-finite-product-sigma-algebras]],
[[def-borel-sigma-algebra]]). One record is one real coordinate at an integer
time index. The index set and origin for the displayed sample are fixed; a
physical time scale, sampling frame and scientific unit are application
fields, not supplied by this abstract pair. The coordinates are random and
$D_n$ is observed; no predictors, latent quantities, treatment assignment or
missingness mechanism is specified. The target is the common law mean $\mu$,
and the analysis uses the joint process law without conditioning on a design.
No support restriction beyond that law is imposed. This model-record
convention is the observation/index/quantity-status/law context of
[[def-scientific-statistical-model-contract]].

Stationarity and finite moments are empirically assessable assumptions: data
can challenge their implications but cannot prove them. Absolute covariance
summability and ergodicity are global law hypotheses that a finite record does
not verify. Whether the specified law describes a scientific population
requires application-level evidence and is not a consequence of the
mathematics here.
