---
page: nonlinear-conjugate-gradient-methods
title: "Nonlinear conjugate gradient methods"
status: draft
items:
  - alg-nonlinear-conjugate-gradient-methods
  - lem-fr-descent-and-direction-growth-bound
  - lem-safeguarded-pr-plus-uniform-angle
  - thm-nonlinear-cg-finite-budget-terminates
  - thm-fr-and-raw-prplus-exact-line-search-match-linear-cg
  - thm-fletcher-reeves-liminf-gradient-under-strong-wolfe
  - thm-safeguarded-pr-plus-gradient-norms-converge
examples: []
---

This page defines finite-budget Fletcher–Reeves and safeguarded PR+ methods, including zero-gradient exit, restart, and search-failure statuses. Strong Wolfe steps yield a strict FR descent bound and only the claimed gradient liminf result. The PR+ safeguard supplies a uniform angle bound and full gradient-norm convergence. Exact-line-search equivalence with linear CG is restricted to exact arithmetic and SPD quadratics; failed finite searches carry no convergence conclusion.
