---
page: asymptotic-convergence-consistency-and-identification
title: "Consistency and Limiting Distributions"
status: published
items:
  - def-op-and-little-op-stochastic-bounds
  - def-asymptotic-distribution
  - thm-vector-stochastic-order-calculus
  - thm-vector-slutsky
  - def-estimator-sequence-in-iid-experiments
  - def-consistency-in-probability
  - thm-iid-sample-mean-consistency
  - thm-nonidentifiability-precludes-simultaneous-consistency
examples: []
---

This page fixes the stochastic-order notation $O_P(1)$ and $o_P(1)$ using the Euclidean norm for fixed finite-dimensional random vectors. It proves the finite-dimensional sum and bilinear-product rules, tightness of weakly convergent sequences, and vector Slutsky convergence with a constant probability limit. The vector result is proved locally; the scalar Slutsky theorem is not treated as a vector theorem.

For an IID statistical experiment, an estimator sequence is a measurable map on each finite product sample space. Consistency here is pointwise at a fixed parameter, and an asymptotic distribution is a weak limit of laws; neither term implies uniformity or moment convergence. If two parameter values induce the same observation law but have distinct target values, no estimator sequence can be consistent at both. For a real-valued observation with finite first absolute moment, Khinchin's weak law gives consistency of the sample mean at each fixed parameter. The law's integrability hypothesis is retained exactly.
