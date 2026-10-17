---
page: preconditioner-algorithms-and-residual-metrics-examples
title: "Preconditioner algorithms and residual metrics — Examples"
status: draft
items: []
examples:
  - ex-left-preconditioned-residual-can-understate-physical-residual
  - ex-ilu0-tridiagonal-factorization
  - cex-ilu0-product-can-create-fill-outside-input-pattern
---

The examples separate the left-preconditioned residual from the physical
residual, run the fixed-pattern ILU(0) recurrence on a tridiagonal matrix, and
show that restricting the factors does not restrict every entry of their
product. The planned conditioning counterexample is reused from the published
[[cex-a-preconditioner-can-worsen-the-preconditioned-condition-number]] rather
than duplicated here.
