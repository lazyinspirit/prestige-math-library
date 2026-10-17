---
page: numerical-optimization-globalization-and-inexact-certificates
title: Numerical optimization globalization and inexact certificates
status: published
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

This page extends the canonical gradient and damped-Newton methods with global convex guarantees. It defines exact line search as an ideal oracle and proves that the compact initial sublevel set makes the ray minimizer exist. Under uniform Hessian bounds, exact search and Armijo backtracking contract the objective gap with explicit constants. For the damped-Newton result, let $m,M$ be the global Hessian bounds and $\rho$ the local radius. If the decrement tolerance satisfies $\varepsilon<m^2\rho^2/(2M)$, the method reaches the local ball after finitely many accepted updates; otherwise it may stop at the decrement test first. From that ball, each attempted update that passes the decrement test is a unit step with a quadratic error bound. A separate strong-convexity certificate converts a verified computed-gradient residual and a separately bounded gradient discrepancy into iterate distance. The published fixed-step gradient rate remains its own result; statistical targets and unverified software flags do not enter these proofs.
