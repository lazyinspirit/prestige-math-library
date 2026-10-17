---
page: sqp-active-set-and-augmented-lagrangian-methods-examples
title: Sqp active set and augmented lagrangian methods — Examples
status: published
items: []
examples:
  - ex-sqp-engineering-design-active-inequality
  - ex-sqp-maratos-effect-and-second-order-correction
  - ex-sqp-augmented-lagrangian-penalty-conditioning
---

The design example solves a two-variable demand-constrained QP and checks
that its active KKT certificate also identifies the original convex
problem's unique minimizer. The Maratos calculation evaluates the L1 merit
change for a full SQP step and the corrected step exactly, showing why a
positive model prediction need not make the nonlinear full step acceptable.
The equality quadratic example computes both the augmented-Lagrangian
multiplier contraction and the penalty-dependent Hessian condition number,
so the penalty tradeoff is visible in exact formulas.
