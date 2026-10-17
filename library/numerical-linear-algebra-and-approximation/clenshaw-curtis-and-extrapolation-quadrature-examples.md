---
page: clenshaw-curtis-and-extrapolation-quadrature-examples
title: "Clenshaw–Curtis and extrapolation quadrature — Examples"
status: published
requires:
  - clenshaw-curtis-and-extrapolation-quadrature
items: []
examples:
  - ex-na-square-root-endpoint-breaks-romberg-order
  - ex-na-clenshaw-curtis-integrates-quadratics
  - ex-na-eight-panel-newton-cotes-negative-weight-amplification
---

The examples show why endpoint smoothness matters for Romberg extrapolation,
compute the three-point Clenshaw–Curtis weights and its exact quadratic
evaluation, and verify the sharp sample-error amplification of the
nine-point closed Newton–Cotes rule. The last example keeps deterministic
Peano integration error separate from perturbations in the supplied samples.
