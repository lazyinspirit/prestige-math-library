---
page: nonconvex-line-search-and-inexact-newton-methods-examples
title: "Nonconvex line search and inexact newton methods — Examples"
status: published
items: []
examples:
  - ex-rosenbrock-newton-step-satisfies-strong-wolfe
  - ex-rosenbrock-indefinite-hessian-requires-descent-safeguard
  - ex-inexact-newton-forcing-tolerance-cost-and-rate
---

The examples calculate a unit strong-Wolfe Newton step at the standard
Rosenbrock start, show why an indefinite Hessian needs a descent safeguard, and
track how a scalar Krylov residual tolerance changes inner work and outer error.
The finite-budget search caveat is retained: existence of a Wolfe interval does
not guarantee a particular cap reaches it.
