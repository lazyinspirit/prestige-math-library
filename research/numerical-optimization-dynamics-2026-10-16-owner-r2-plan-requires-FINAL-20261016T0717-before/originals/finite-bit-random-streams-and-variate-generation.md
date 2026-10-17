---
page: finite-bit-random-streams-and-variate-generation
title: Finite bit random streams and variate generation
status: draft
requires: [conditional-and-finite-group-exact-inference, probability-spaces-random-variables-and-expectation, outward-rounded-interval-and-ball-arithmetic, computed-fast-transforms-and-convolution]
items:
  - alg-linear-congruential-generator-mod-power-of-two
  - alg-counter-based-keyed-permutation-stream
  - thm-finite-state-streams-eventually-periodic
  - thm-independent-fair-bit-streams-produce-uniforms
  - lem-generalized-inverse-sublevel-identity
  - lem-box-muller-product-density-and-radius-moment
  - thm-midpoint-bit-stream-coupling-and-error
  - thm-lcg-full-period-and-adjacent-dependence
  - lem-counter-based-keyed-stream-no-reuse
  - alg-rational-bernoulli-rejection-from-fair-bits
  - alg-finite-categorical-inverse-cdf
  - alg-certified-bracketed-cdf-inversion
  - cor-box-muller-from-independent-bits-gives-standard-normals
  - thm-rational-bernoulli-rejection-law-and-cost
  - thm-finite-categorical-midpoint-count-bound
  - thm-certified-bracketed-inverse-error
  - alg-box-muller-finite-bit-transform
  - thm-box-muller-finite-bit-coupling-error
examples: []
---

This page separates ideal independent fair bits from deterministic finite-state
streams. It proves that disjoint fair-bit subsequences give independent
uniforms, then quantifies midpoint discretization, including the fact that its
total-variation distance from a continuous uniform law is maximal. Finite
state and LCG results explain why a long period or uniform single-state
marginals do not imply independence. Inverse CDF, rational rejection, and
Box–Muller are developed with explicit endpoint, tail, and finite-work
behavior. The exact Box–Muller map has a product Gaussian law; its finite-bit
implementation requires certified elementary-function evaluators, and any
failed certification returns inconclusive.

The finite-bit implementation reuses the interval page's finite real evaluator
and the computed-transform page's certified unit-circle phase routine. Its
distribution-error theorem requires one fixed configuration to certify every
possible bit input, with uniform error bounds; conditioning on a successful
random sample does not establish that theorem.
