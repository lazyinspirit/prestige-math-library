---
id: alg-implicit-stiff-time-stepper-with-consistent-starts
title: "Implicit stiff time stepping with a branch and residual ledger"
kind: algorithm
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - def-c-one-map-and-local-inverse
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

**Inputs.** Take a finite strictly increasing time grid $t_0<\cdots<t_N$, $N\ge1$, a state dimension $d\ge1$, an open time-state domain $D\subseteq\mathbb R\times\mathbb R^d$, a vector field $f:D\to\mathbb R^d$ defined at every attempted evaluation, a method selector in {BE, the selected two-stage SDIRK, two-stage Radau IIA, variable-step BDF2}, and an initial state $Y_0\in\mathbb R^d$. For BDF2 also supply $Y_1\in\mathbb R^d$ or select a BE startup; each later BDF2 branch ball is a closed ball in $\mathbb R^d$. For every finite residual solve, including each BE startup, Runge–Kutta stage solve and finite-solve BDF2 step, require that its residual is $C^1$ in the sense of [[def-c-one-map-and-local-inverse]] and supply an admissible open residual domain $U_n\subseteq\mathbb R^{m_n}$ with $m_n\ge1$, an initial iterate $z_{n,0}\in U_n$, tolerance $\varepsilon_n\ge0$, correction budget $M_n\in\mathbb N_0$, Newton or chord mode, refresh period $q_n\ge1$, and a terminating linear-system backend. Supply the exact residual derivative matrix whenever the selected solver requests a Jacobian; residual/Jacobian evaluations and domain tests are returning primitives. These per-call open domains are distinct from closed BDF2 root-selection balls; if a finite-solve BDF2 iterate is to remain on the selected branch, require its open residual domain to be contained in that branch ball. In chord mode that backend must satisfy the exact-solve interface of [[alg-newton-chord-implicit-residual-with-factorization-reuse]]. Give a BE startup its own domain, initial iterate, tolerance, budget, mode, refresh period, and admissible backend. Also supply a closed BDF2 branch ball for each later BDF2 step.

**Output.** Return $(\texttt{status},\texttt{state-prefix},\texttt{step-log})$. The prefix starts at $Y_0$ and ends at the last accepted grid state. Each log entry records the method, accepted endpoint and stage vector when applicable, residual norm when available, solver status, and work counts (Jacobian assemblies, factorization attempts, and linear solves, with dense-LU forward/backward solves recorded per correction); exact-root BDF2 entries also record the selected root. Label a run that uses any finite residual solve `completed-with-residual-tolerances`; label a BDF2 run using only exact-root updates after an externally supplied starter pair `completed` when every requested BDF2 root is selected. Failures preserve the accepted prefix and the status returned at the first failed step.

**Procedure.** For BE, form the endpoint residual of [[def-backward-euler-step-equation]]. For SDIRK or Radau IIA, form the stage residual of [[def-implicit-runge-kutta-stage-equations]] with the selected tableau and update by its formula. Call [[alg-newton-chord-implicit-residual-with-factorization-reuse]] for each finite solve. If it returns `root`, store the returned endpoint or stages, update the state, and record the returned residual norm and solver work; this status means only that the tolerance was met. On any other status, return immediately with the computed prefix, residual norm when available, and work log. An evaluation failure, singular Jacobian, invalid trial, or exhausted correction budget therefore cannot be reported as a successful step.

For BE, SDIRK, or Radau IIA, execute the preceding finite-solve instructions for each $n=0,\ldots,N-1$, with $h_n=t_{n+1}-t_n$ and current state $Y_n$. Before forming each step residual, test $(t_n,Y_n)\in D$; if it fails, return `evaluation-failure` with the existing prefix and work log. For BE, use endpoint time $t_{n+1}$ in its residual; for Runge–Kutta methods, use input time $t_n$, step $h_n$, and the selected tableau.

For BDF2 with a BE startup, first test $(t_0,Y_0)\in D$ before forming its residual; if the test fails, return `evaluation-failure` with the existing prefix and work log. Otherwise perform the BE finite solve from $(t_0,Y_0)$ over $h_0$ using that call's supplied settings; on a non-`root` status return, and on `root` use the returned endpoint as $Y_1$ and record its residual and work. For an exact-root BDF2 run, also supply the returning exact branch oracle of [[alg-variable-step-bdf2-with-selected-implicit-branch]] and call that procedure on the starter pair for steps $n=1,\ldots,N-1$ with this oracle and the supplied branch balls; it returns a computed prefix and `completed`, `no-root`, `ambiguous-branch`, or `evaluation-failure`. In a finite-solve BDF2 run, loop over $n=1,\ldots,N-1$, use the supplied branch ball for each step, and form the unscaled residual
$$G_n(Z)=(1+2r_n)Z-(1+r_n)^2Y_n+r_n^2Y_{n-1}-h_n(1+r_n)f(t_{n+1},Z),\qquad r_n=h_n/h_{n-1}.$$
Call the finite solver with this $C^1$ residual $G_n$, its supplied open domain $U_n$, initial iterate $z_{n,0}$, tolerance $\varepsilon_n$, correction budget $M_n$, mode, refresh period $q_n$, and backend; after a `root` status, store its approximate iterate and continue, labelling the run `completed-with-residual-tolerances` only after every requested step returns `root`. A finite residual status does not establish the exact-root completion of the BDF2 branch algorithm.

For BDF2, the order guarantee in [[thm-variable-step-bdf2-order-two-under-ratio-bound]] requires its smoothness, ratio, tube, unique-root, and $O(H^2)$ starter hypotheses. The exact-start BE estimate and branch conditions are proved in [[cor-constant-step-bdf2-order-two-with-consistent-start]]; a finite-tolerance startup must separately meet that result's starter error budget. For any method, a forward-error claim requires a separate residual-to-error estimate: for Runge–Kutta stages use [[lem-small-step-implicit-rk-branch-and-residual-error]], and for backward Euler the update-residual estimate is [[thm-backward-euler-algebraic-update-residual-error-budget]]. The BDF2 order theorem concerns exact selected roots; it is not a residual-to-error bound for finite-solve BDF2 output, which requires its own additional stability and accumulated residual-error analysis.

**Work record.** Count every Jacobian assembly and factorization attempt at a refresh, every linear solve, and, for dense LU, each correction's forward and backward triangular solve. Reuse a chord factorization only for its declared refresh period. Sparse cost depends on the actual stage matrix and backend; this procedure assigns no sparse complexity bound. No general Newton convergence or forward-accuracy claim is part of the algorithm.

