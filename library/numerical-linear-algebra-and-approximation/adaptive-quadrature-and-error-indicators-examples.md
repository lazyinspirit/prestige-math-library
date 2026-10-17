---
page: adaptive-quadrature-and-error-indicators-examples
title: Adaptive quadrature and error indicators — Examples
status: published
items: []
examples:
  - ex-adaptive-simpson-misses-narrow-feature
  - ex-adaptive-simpson-cap-reached
  - ex-adaptive-simpson-leading-error-cancellation
---

## Objective

These exact examples show why an embedded Simpson difference remains an
indicator: the sampled nodes can miss a positive feature entirely, and
cancellation of the leading error coefficient changes the finite-level ratio.
A narrow peak with a zero depth budget also demonstrates the explicit
`cap-reached` result. None of these examples asserts a general accuracy rate.
