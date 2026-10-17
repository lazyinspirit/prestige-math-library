---
page: composite-quadrature-rules
title: Composite quadrature rules
status: draft
items:
  - alg-composite-midpoint-rule
  - alg-composite-simpson-rule
  - lem-composite-midpoint-panel-error-kernel
  - thm-composite-midpoint-error-bound
  - lem-simpson-panel-peano-kernel
  - thm-composite-simpson-exact-through-degree-three
  - thm-composite-simpson-error-bound
examples: []
---

## Objective

This page supplies exact uniform-panel midpoint and composite Simpson
procedures, their derivative-norm error bounds, and Simpson exactness through
cubic degree. The composite trapezoid definition and its matching
$C^2$ error theorem already have canonical published homes:
[[def-composite-trapezoidal-rule]] and
[[thm-composite-trapezoidal-rule-error-bound]]. They are used here without
duplicating their carriers. All bounds concern exact-real quadrature; floating
point evaluation and summation error are separate. The midpoint proof uses an
explicit nonnegative panel kernel. The Simpson proof supplies its own signed
Peano kernel and then sums over the even number of panels.
