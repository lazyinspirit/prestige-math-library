---
page: stable-sde-schemes-for-superlinear-drift-examples
title: Stable sde schemes for superlinear drift — Examples
status: draft
requires:
  - stable-sde-schemes-for-superlinear-drift
items: []
examples:
  - cex-euler-moments-diverge-for-cubic-dissipative-sde
  - ex-cir-lamperti-scheme-positive-root-at-boundary
  - ex-noise-induced-instability-in-explicit-em
---

The cubic dissipative equation shows that explicit Euler moments can diverge
even when the exact SDE has finite moments. The CIR example checks positivity
of the implicit Lamperti step from the boundary input, including a negative
Brownian increment. The linear multiplicative-noise example separates
deterministic Euler stability from stochastic mean-square stability and
compares explicit and drift-implicit updates quantitatively.
