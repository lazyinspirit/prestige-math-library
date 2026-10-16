---
page: quantum-complexity-classes-and-oracle-separations
title: "Quantum Complexity Classes and Oracle Separations"
status: draft
requires:
  - uniform-circuit-families-promise-problems-and-complexity
  - counting-complexity-and-sharpp
  - sat-tableaux-and-quantified-space-completeness
  - the-polynomial-hierarchy-and-relativization
  - effective-numberings-reductions-resources-and-randomness
  - logarithmic-space-nl-and-reachability
  - reversible-computation-ancillas-and-coherent-oracles
  - clifford-t-exact-and-approximate-synthesis
  - finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces
  - registers-tensor-products-and-partial-trace
  - measurements-povms-and-instruments
  - finite-probability-spaces-and-random-variables
items:
  - def-qa-32-promise-bpp
  - lem-qa-32-indexed-to-full-list-conversion
  - lem-qa-32-simon-function-register-instrument
  - def-qa-32-eqp-promise-class
  - def-qa-32-zqp-promise-class
  - lem-qa-32-exact-clifford-t-boolean-circuit-embedding
  - rem-qa-32-bqp-pp-pspace-proof-obligations
  - thm-qa-32-eqp-zqp-bqp-containments
  - thm-qa-32-promise-classical-containments
  - def-qa-32-simon-decision-oracle-promise
  - alg-qa-32-simon-query-rank-test
  - thm-qa-32-simon-classical-randomized-query-lower-bound
  - thm-qa-32-simon-sample-rank-correctness
examples: []
---

This page defines promise-class interfaces in the fixed QC14 model: exact finite gates, full-list uniform circuit generation, and unconstrained behavior outside the promise. It proves the elementary classical and zero-error containments by explicit circuit generation and exact reversible compilation. BQP-to-PP and BQP-to-PSPACE remain separate local proof obligations because their usual counting and simulation arguments must be checked over the exact algebraic gate entries.

The Simon decision promise compares injective functions with nonzero-mask two-to-one functions under XOR-oracle access. A sampled-rank algorithm uses $n+2$ quantum queries and has error below $1/4$; a complete distributional argument proves a classical randomized lower bound of $\Omega(2^{n/2})$ oracle queries. The query count is kept separate from the cost of implementing an explicitly represented function.
