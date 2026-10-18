---
page: crouzeix-raviart-finite-elements-examples
title: "Crouzeix–Raviart finite elements — Examples"
status: draft
items: []
examples:
  - ex-crouzeix-raviart-one-face-degree-of-freedom
  - ex-crouzeix-raviart-broken-gradient-norm
  - cex-crouzeix-raviart-below-trace-threshold
requires:
  - crouzeix-raviart-finite-elements
---

The examples isolate one shared face-average degree of freedom, compute the
broken-gradient norm of its basis function on a two-triangle square, and
exhibit a zero-boundary $H^1$ function whose gradient is not in $H^{1/2}$.
The last example marks the strict trace-regularity boundary and explicitly
lies outside the method's $L^2$-load error theorem.
