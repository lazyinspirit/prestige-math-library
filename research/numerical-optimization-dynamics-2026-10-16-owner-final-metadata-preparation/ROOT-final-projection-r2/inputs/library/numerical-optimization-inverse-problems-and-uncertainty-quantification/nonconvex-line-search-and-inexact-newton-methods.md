---
page: nonconvex-line-search-and-inexact-newton-methods
title: "Nonconvex line search and inexact newton methods"
status: draft
items:
  - def-wolfe-and-strong-wolfe-conditions
  - lem-strong-wolfe-step-exists-on-a-bounded-below-ray
  - alg-bracketing-zoom-strong-wolfe-search
  - lem-bracketing-zoom-finite-budget-checked-return
  - lem-wolfe-step-lower-bound-from-the-descent-angle
  - thm-zoutendijk-summability-for-wolfe-steps
  - cor-uniform-descent-angle-implies-gradient-vanishing
  - alg-inexact-newton-krylov-with-descent-safeguard
  - lem-inexact-newton-krylov-finite-budget-checked-return
  - lem-inexact-newton-error-recurrence-under-lipschitz-jacobian
  - thm-inexact-newton-local-forcing-rates
examples: []
---

This page defines weak and strong Wolfe conditions, proves existence on a
bounded-below descent ray, and derives the angle-weighted Zoutendijk sum. A
uniform descent angle then forces gradient norms to vanish; without that angle
condition, the sum alone does not imply gradient convergence. The finite-budget
Newton–Krylov procedure recomputes each shifted-system residual, checks descent,
and returns only verified Wolfe steps. Local inexact-Newton rates apply to an
unshifted full-step sequence that remains in the stated tube. They do not assert
that a nonconvex globalization run necessarily enters that branch.
