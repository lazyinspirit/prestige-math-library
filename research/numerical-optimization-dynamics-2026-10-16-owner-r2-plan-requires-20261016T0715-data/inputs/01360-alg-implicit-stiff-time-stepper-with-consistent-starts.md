---
id: alg-implicit-stiff-time-stepper-with-consistent-starts
title: "Implicit stiff time stepping with a branch and residual ledger"
kind: algorithm
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - def-backward-euler-step-equation
  - def-implicit-runge-kutta-stage-equations
  - def-two-stage-sdirk-tableau
  - def-two-stage-radau-iia-tableau
  - lem-small-step-implicit-rk-branch-and-residual-error
  - thm-backward-euler-dissipative-resolvent-contraction
  - thm-backward-euler-algebraic-update-residual-error-budget
  - alg-variable-step-bdf2-with-selected-implicit-branch
  - alg-newton-chord-implicit-residual-with-factorization-reuse
  - thm-variable-step-bdf2-order-two-under-ratio-bound
  - cor-constant-step-bdf2-order-two-with-consistent-start
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "John C. Butcher, Implicit Runge–Kutta Methods, tutorial accompanying Numerical Methods for Ordinary Differential Equations"
      url: "https://www.math.auckland.ac.nz/~butcher/ODE-book-2008/Tutorials/IRK.pdf"
      locator: "PDF pp. 21–25: diagonally implicit stages and modified Newton factorization reuse."
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §4.5.2 Newton's method for systems"
      url: "https://fncbook.com/newtonsys/"
      locator: "§4.5.2: finite Newton solves, residual stopping, and local-convergence caveat."
---

## Definition

**Inputs.** Take a finite strictly increasing time grid $t_0<\cdots<t_N$, $N\ge1$, a vector field $f$ defined at every attempted evaluation, a method selector in {BE, the selected two-stage SDIRK, two-stage Radau IIA, variable-step BDF2}, and an initial state $Y_0$. For every BE or Runge–Kutta solve supply an admissible open residual domain $U_n$, an initial iterate $z_{n,0}\in U_n$, tolerance $\varepsilon_n\ge0$, correction budget $M_n\in\mathbb N_0$, Newton or chord mode, refresh period $q_n\ge1$, and a linear-system backend. In chord mode that backend must satisfy the exact-solve interface of [[alg-newton-chord-implicit-residual-with-factorization-reuse]]. For BDF2 supply $Y_1$, or select a BE startup and give that solve its own domain, initial iterate, tolerance, budget, mode, and refresh period. Also supply a closed BDF2 branch ball for each later BDF2 step.

**Procedure.** For BE, form the endpoint residual of [[def-backward-euler-step-equation]]. For SDIRK or Radau IIA, form the stage residual of [[def-implicit-runge-kutta-stage-equations]] with the selected tableau and update by its formula. Call [[alg-newton-chord-implicit-residual-with-factorization-reuse]] for each finite solve. If it returns `root`, store the returned endpoint or stages, update the state, and record the returned residual norm and solver work; this status means only that the tolerance was met. On any other status, return immediately with the computed prefix, residual norm when available, and work log. An evaluation failure, singular Jacobian, invalid trial, or exhausted correction budget therefore cannot be reported as a successful step.

For an exact-root BDF2 run, call [[alg-variable-step-bdf2-with-selected-implicit-branch]] on the supplied starter pair for steps $n=1,\ldots,N-1$ with the supplied branch balls; it returns a computed prefix and `completed`, `no-root`, `ambiguous-branch`, or `evaluation-failure`. In a finite-solve BDF2 run, use the same branch balls for steps $n=1,\ldots,N-1$ and form the unscaled residual
$$G_n(Z)=(1+2r_n)Z-(1+r_n)^2Y_n+r_n^2Y_{n-1}-h_n(1+r_n)f(t_{n+1},Z),\qquad r_n=h_n/h_{n-1}.$$
Call the finite solver with this $G_n$; after a `root` status, store its approximate iterate and continue, labelling the run `completed-with-residual-tolerances` only after every requested step returns `root`. A finite residual status does not establish the exact-root completion of the BDF2 branch algorithm.

For BDF2, the order guarantee in [[thm-variable-step-bdf2-order-two-under-ratio-bound]] requires its smoothness, ratio, tube, unique-root, and $O(H^2)$ starter hypotheses. The exact-start BE estimate and branch conditions are proved in [[cor-constant-step-bdf2-order-two-with-consistent-start]]; a finite-tolerance startup must separately meet that result's starter error budget. For any method, a forward-error claim requires a separate residual-to-error estimate such as [[lem-small-step-implicit-rk-branch-and-residual-error]], [[thm-backward-euler-algebraic-update-residual-error-budget]], or the BDF2 order theorem.

**Work record.** Count every Jacobian assembly and factorization attempt at a refresh, every linear solve, and, for dense LU, each correction's forward and backward triangular solve. Reuse a chord factorization only for its declared refresh period. Sparse cost depends on the actual stage matrix and backend; this procedure assigns no sparse complexity bound. No general Newton convergence or forward-accuracy claim is part of the algorithm.

