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

This page defines finite-budget Fletcher–Reeves and safeguarded PR+ methods, including zero-gradient exit, restart, and search-failure statuses. For infinite sequences following the stated recurrence and successful strong Wolfe updates, the FR descent bound yields only the claimed gradient liminf result. For such infinite successful recurrence sequences, the PR+ safeguard supplies a uniform angle bound and full gradient-norm convergence. These convergence statements do not assert an infinite execution of the finite-budget procedure. Exact-line-search equivalence with linear CG is restricted to exact arithmetic and SPD quadratics; failed finite searches carry no convergence conclusion.
