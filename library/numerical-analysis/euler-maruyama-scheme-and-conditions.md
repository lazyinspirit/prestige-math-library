---
page: euler-maruyama-scheme-and-conditions
title: "Euler–Maruyama Scheme and Coefficient Conditions"
status: draft
items:
  - alg-euler-maruyama
  - lem-square-integrable-predictable-step-ito-integral-is-finite-sum
  - def-euler-maruyama-step-process-and-continuous-interpolation
  - lem-euler-maruyama-one-step-moment-and-increment-estimates
  - thm-euler-maruyama-uniform-moment-and-increment-bounds
examples: []
---

## Objective

This page defines the Euler–Maruyama grid recursion on any uniform finite
grid, its left-endpoint step process, and its continuous interpolation for jointly Borel coefficients
that are globally Lipschitz in state, have uniform linear growth, and satisfy
a half-Hölder time modulus. A local truncation argument extends the elementary
Itô finite-sum identity to the square-integrable step coefficients used by the
scheme. The page proves well-definedness, uniform pointwise finite-$p$ moments
for $0<h\le1$ under the matching initial $L^p$ assumption, and the order-$h$
interpolation increment estimate in that mesh range. The bounds do not assert a strong or weak convergence
rate, a path-supremum moment bound, or density regularity.
