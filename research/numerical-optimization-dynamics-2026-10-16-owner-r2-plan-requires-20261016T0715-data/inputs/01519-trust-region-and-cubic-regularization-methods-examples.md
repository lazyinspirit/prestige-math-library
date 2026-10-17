---
page: trust-region-and-cubic-regularization-methods-examples
title: "Trust region and cubic regularization methods — Examples"
status: draft
items: []
examples:
  - ex-indefinite-trust-region-boundary-minimizer
  - ex-trust-region-singular-hard-case
  - ex-trust-region-newton-cauchy-truncated-cg
---

[[ex-indefinite-trust-region-boundary-minimizer]] computes an indefinite
trust-region problem with a unique boundary minimizer and compares it with
the Cauchy step. [[ex-trust-region-singular-hard-case]] exhibits two
minimizers from a singular shifted Hessian. The final example
[[ex-trust-region-newton-cauchy-truncated-cg]] compares the infeasible raw
Newton direction, the feasible Cauchy point, and a truncated-CG boundary
exit on the same quadratic, then checks the inexact-Newton descent test and
strong Wolfe acceptance directly.
