---
page: numerical-optimization-globalization-and-inexact-certificates
title: Numerical optimization globalization and inexact certificates
status: draft
items:
  - alg-exact-gradient-line-search-step
  - lem-hessian-lower-bound-strong-convexity-gradient-gap
  - thm-exact-line-search-gradient-descent-global-contraction
  - thm-armijo-gradient-descent-global-linear-rate
  - thm-damped-newton-global-phase-and-local-quadratic-rate
  - thm-inexact-gradient-residual-distance-certificate
examples: []
---

## Objective

This page extends the canonical gradient and damped-Newton methods with global convex guarantees. It defines exact line search as an ideal oracle and proves that the compact initial sublevel set makes the ray minimizer exist. Under uniform Hessian bounds, exact search and Armijo backtracking contract the objective gap with explicit constants. Damped Newton has a finite globally damped phase followed, when updates continue past the decrement test, by the canonical local unit-step quadratic phase. A separate strong-convexity certificate converts a verified computed-gradient residual and a separately bounded gradient discrepancy into iterate distance. The published fixed-step gradient rate remains its own result; statistical targets and unverified software flags do not enter these proofs.
