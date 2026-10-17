---
page: numerical-optimization-globalization-and-inexact-certificates-examples
title: Numerical optimization globalization and inexact certificates — Examples
status: draft
items: []
examples:
  - ex-global-exact-line-search-on-an-anisotropic-quadratic
  - ex-damped-newton-halves-step-before-local-phase
  - ex-small-gradient-can-hide-error-at-ill-conditioned-minimizer
  - ex-approximate-gradient-residual-distance-certificate
  - ex-inner-quadrature-error-in-gradient-certificate
---

## Examples

These verifications calculate exact-search and Armijo steps on an anisotropic quadratic, a damped Newton step before its local quadratic phase, and the poor distance information in a small gradient when curvature is weak. The final two examples separate a computed-gradient residual from its discrepancy and calculate an inner quadrature contribution to that discrepancy exactly. Each certificate states the assumptions needed for its bound.
