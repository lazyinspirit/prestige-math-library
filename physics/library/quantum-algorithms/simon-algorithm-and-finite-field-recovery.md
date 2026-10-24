---
page: simon-algorithm-and-finite-field-recovery
title: Simon’s Algorithm and Finite-Field Recovery
status: published
items:
  - thm-qa-binary-field-f2-is-a-field
  - def-qa-binary-vector-space
  - alg-qa-f2-gaussian-elimination
  - lem-qa-computational-basis-measurement-law
  - def-qa-simon-promise
  - lem-qa-simon-annihilator-subspace-basis
  - alg-qa-simon-one-sample
  - def-qa-simon-random-instance-distribution
  - thm-qa-simon-postquery-coset-state
  - thm-qa-f2-gaussian-elimination-correct-and-cost
  - thm-qa-simon-classical-randomized-query-lower-bound
  - thm-qa-simon-hadamard-sampling-law
  - def-qa-simon-rank-process
  - thm-qa-simon-rank-growth-probability
  - alg-qa-simon-recovery-with-budget
  - thm-qa-simon-recovery-correctness-and-query-bound
examples: []
requires:
  - exact-oracle-algorithms
  - gaussian-elimination-and-row-reduction
  - primes-and-the-fundamental-theorem-of-arithmetic
  - series-and-nonnegative-tests
  - reversible-arithmetic-and-oracle-conversion
  - congruences-and-the-chinese-remainder-theorem
  - linear-maps-rank-nullity-and-quotient-spaces
  - computational-problems-promises-and-cost-models
  - measurements-povms-and-instruments
  - finite-probability-spaces-and-random-variables
  - finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces
---

This page defines the coordinate vector space $\mathbb F_2^n$, formalizes Simon’s nonzero hidden-XOR-period promise for total functions with output width at least $n-1$, and gives an explicit basis for the $(n-1)$-dimensional annihilator. It proves computational-basis Born weights from the trace formula, then derives the two-preimage state and uniform Fourier sample after one oracle query. Independent samples give exact rank-rise probabilities, finite-prefix expected query cost, and a vanishing termination tail. Gaussian elimination over $\mathbb F_2$ recovers the unique hidden mask from $n-1$ independent equations. A capped procedure returns either the mask or FAIL, with success at least $1-\delta$, at most $\lceil2(n-1)/\delta\rceil$ queries, and explicit bit costs. The page also proves a classical randomized $\Omega(2^{n/2})$ query lower bound for mask recovery under a uniform nonzero-mask and injective-label distribution. No general finite-abelian Fourier theorem is used.
