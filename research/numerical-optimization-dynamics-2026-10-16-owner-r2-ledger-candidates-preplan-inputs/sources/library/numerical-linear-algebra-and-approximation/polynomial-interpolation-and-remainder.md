---
page: polynomial-interpolation-and-remainder
title: "Polynomial interpolation and remainder"
status: draft
requires:
  - darboux-lhopital-and-taylor
  - fundamental-trigonometric-identities
  - the-derivative-and-mean-value-theorems
items:
  - lem-finite-coefficient-vector-has-polynomial-representative
  - lem-finite-double-sum-interchange
  - lem-finite-product-of-nonzero-reals-is-nonzero
  - lem-polynomial-highest-derivative
  - lem-product-of-linear-factors-is-monic-polynomial
  - def-cardinal-polynomial-interpolation
  - lem-finite-product-of-quotients
  - lem-cardinal-basis-degree-and-values
  - prop-equispaced-interpolation-basis-growth
  - thm-cardinal-polynomial-interpolant-exists-uniquely
  - thm-barycentric-interpolation-identities
  - thm-lagrange-interpolation-remainder
  - alg-finite-barycentric-interpolation-evaluator
  - prop-finite-barycentric-interpolation-evaluator-returns-status
examples: []
---

For distinct real nodes, this page defines the cardinal interpolation functions and proves that their interpolant is the unique polynomial of degree at most the node count minus one. It derives the barycentric denominator identity and the pointwise Lagrange remainder from the published higher-order Rolle theorem. The local coefficient-list and finite-product lemmas make the products, quotients, finite sums, and degree claims precise in the library's formal-polynomial convention.

The page also gives a finite checked-arithmetic barycentric evaluator with exact node handling and explicit invalid-input and range-failure statuses. Its finite-precision definition makes no forward-error or conditioning guarantee. On equispaced nodes, a cardinal basis function has a value bounded below proportionally to the degree; this varying-data amplification example makes no fixed-function divergence claim.
