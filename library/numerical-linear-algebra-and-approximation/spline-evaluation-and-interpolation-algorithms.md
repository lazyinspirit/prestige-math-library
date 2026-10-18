---
page: spline-evaluation-and-interpolation-algorithms
title: Spline evaluation and interpolation algorithms
status: draft
requires:
  - finite-precision-direct-factorizations
  - polynomial-interpolation-and-remainder
  - splines-series-and-approximation-rates
items:
  - alg-de-boor-coefficient-evaluation
  - alg-single-new-b-spline-knot-insertion
  - def-clamped-cubic-spline-interpolant
  - lem-natural-cubic-spline-second-derivative-perturbation
  - alg-natural-cubic-tridiagonal-cholesky-with-residual-certificate
  - lem-b-spline-basis-refinement-under-single-knot-insertion
  - thm-de-boor-coefficient-evaluation-equivalence
  - thm-de-boor-coefficient-evaluation-work
  - thm-clamped-cubic-spline-interpolant-exists-uniquely
  - thm-natural-cubic-spline-tridiagonal-residual-transfer
  - thm-natural-tridiagonal-cholesky-solve-residual-certificate
  - thm-de-boor-forward-error-under-operationwise-model
  - thm-single-new-knot-insertion-preserves-b-spline-curve
  - thm-clamped-cubic-spline-fourth-order-error
  - thm-computed-natural-cubic-spline-forward-error-certificate
examples: []
---

This page evaluates a B-spline curve from its local coefficient list, proves
the exact de Boor recurrence, its $O(p^2)$ arithmetic count, and a
range-qualified forward-error bound. It also gives a single new-knot insertion,
proves the associated basis refinement identity and establishes curve
preservation. Natural cubic interpolation reuses the published tridiagonal
system and exact solution. A local sparse rounded Cholesky and substitution
specialization computes an actual rounded residual certificate, includes the
matrix and right-hand-side assembly discrepancies, and transfers them to a
conditional forward bound for the associated piecewise cubic reconstruction.
That reconstruction need not be $C^1$ at interior knots, and floating-point
error from evaluating its pieces is separate. The clamped variant prescribes
endpoint slopes and has a proved $O(H^4)$ maximum-norm error bound for exact
boundary derivatives on arbitrary partitions.
