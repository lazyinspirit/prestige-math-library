---
page: global-ode-and-density-error-examples
title: Global ODE and Log-density Integration Error — Examples
status: draft
items: []
examples:
  - ex-euler-linear-flow-exact-log-density-update
  - ex-exact-state-with-inexact-log-density-quadrature
---

The scalar linear flow $x'=x$ has a nonzero Euler state error even though its constant divergence is integrated exactly by the Euler log-density update. For $x'=tx$ started at zero, the state error is identically zero while left-Euler divergence quadrature has terminal error $h/2$; midpoint quadrature removes that error without changing the state solver. Together the examples separate state-solver error from density-quadrature error.
