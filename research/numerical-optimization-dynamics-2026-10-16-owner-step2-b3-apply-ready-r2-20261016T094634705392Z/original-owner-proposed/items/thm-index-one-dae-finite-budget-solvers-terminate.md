---
id: thm-index-one-dae-finite-budget-solvers-terminate
title: "The finite-budget index-one DAE solvers return a status in finite work"
kind: theorem
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - lem-finite-budget-newton-work-and-status
  - alg-index-one-dae-consistent-initialization
  - alg-index-one-dae-backward-euler-stepper
  - alg-index-one-dae-bdf2-stepper
  - alg-finite-budget-newton-for-vector-residuals
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Ernst Hairer and Gerhard Wanner, Solving Ordinary Differential Equations II, Chapter VI §VI.1, Solving Index 1 Problems, pp. 372–381"
      url: "https://isy.gitlab-pages.liu.se/fs/phd-courses/simulation/Papers/HairerWanner_VI_1_clean.pdf"
      locator: "The source motivates the implicit index-one solve; finite-budget termination is proved here from the declared procedure."
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Julia edition, §4.5 Newton for nonlinear systems"
      url: "https://tobydriscoll.net/fnc-julia/nonlineqn/newtonsys.html"
      locator: "Complete online §4.5: multidimensional Newton corrections, the finite maxiter implementation, and the qualification that quadratic convergence holds only under suitable circumstances and when the iteration converges."
---

## Statement

In the exact-arithmetic model with returning residual, Jacobian, domain-test and correction primitives, suppose the initialization and stepper algorithms in [[alg-index-one-dae-consistent-initialization]], [[alg-index-one-dae-backward-euler-stepper]], and [[alg-index-one-dae-bdf2-stepper]] are run with finite grid length and finite Newton budget $B$. Count explicit residual queries separately from work internal to Jacobian assembly and linear-system backends. Each call returns a status after finitely many such queries. A Newton call makes at most $B$ correction calls and $B+1$ explicit residual evaluations. Initialization makes at most one additional algebraic-residual evaluation after a root status to record the returned residual norm, so it uses at most $B+2$ evaluations. A backward-Euler call with $S$ attempted steps uses at most $1+S(B+2)$ residual evaluations, including its one starting algebraic-residual check; a BDF2 call with $S$ attempted steps uses at most $2+S(B+2)$, including its two starting algebraic-residual checks. These bounds include calls that return early with a failure status. Every successful correction solves one current Jacobian system, of dimension $m$ in initialization and $d+m$ in either stepper; assembly and solve costs depend on the backend.

For either stepper, every appended candidate satisfies $\|r^d_n\|_2\le\eta_d$ and $\|r^a_n\|_2\le\eta_a$ for its defined derivative and algebraic residuals. These are conditional accepted-residual bounds. No residual tolerance is guaranteed to be attained, and these bounds assert neither an exact zero, uniqueness nor a discretization error estimate.

## Facts & Assumptions

**Given:** The finite grids, finite correction budget, exact loops and status branches in the three DAE algorithms, and the returning-primitive convention in the Statement.

[F1] [[lem-finite-budget-newton-work-and-status]]: with budget $B$, an admissible Newton call makes at most $B$ correction calls and $B+1$ explicit residual evaluations and returns a stated status under the returning-primitive convention.

[F2] [[alg-index-one-dae-consistent-initialization]]: initialization makes one such Newton call in $m$ algebraic unknowns and, on root status, one extra algebraic-residual evaluation.

[F3] [[alg-index-one-dae-backward-euler-stepper]]: the wrapper checks one starting algebraic residual and checks the previous-state seed against the open slice $\mathcal T_{t_n}$ before each Newton call, returning `invalid-trial` with the computed prefix if that check fails. Otherwise it calls Newton once with budget $B$, tolerance $1$ and scaled residual $\mathcal R_n=(r^d_n/\eta_d,r^a_n/\eta_a)$ on that slice. It reevaluates the unscaled block residual once after a root status and returns immediately on any non-root status. The unknown has dimension $d+m$.

[F4] [[alg-index-one-dae-bdf2-stepper]]: the wrapper checks both starting algebraic residuals and checks its extrapolated seed against the open slice $\mathcal T_{t_n}$ before each Newton call, returning `invalid-trial` with the computed prefix if that check fails. Otherwise it calls Newton once with budget $B$, tolerance $1$ and scaled residual $\mathcal R_n=(r^d_n/\eta_d,r^a_n/\eta_a)$ on that slice. It reevaluates the unscaled block residual once after a root status and returns immediately on any non-root status. The unknown has dimension $d+m$.



## Proof

1.1 Apply the proved work bound [F1] to each admissible Newton call. It gives at most $B+1$ explicit residual evaluations and $B$ correction calls. The exact procedure [[alg-finite-budget-newton-for-vector-residuals]] passes its current Jacobian and residual to the correction routine; a successful correction solves that single square system. The input dimensions in [F2]–[F4] are $m$ and $d+m$, respectively, giving the asserted system dimensions. This does not bound assembly or solve costs. [given, F1, F2, F3, F4]

2.1 Initialization makes one Newton call by [F2]. If it returns a non-root status, the wrapper returns immediately; if it returns root, it reevaluates the algebraic residual once to distinguish exact from approximate consistency. Thus it uses at most $B+2$ residual evaluations. [F1, F2, step 1.1]

2.2 A backward-Euler call first evaluates its starting algebraic residual once, and a BDF2 call evaluates its two starting algebraic residuals, by [F3] and [F4]. Thus their preliminary checks use at most one and two evaluations, respectively, even when a bound fails. Each attempted step makes at most one Newton call; on a root status the wrapper reevaluates the block residual once to record the unscaled blocks, and otherwise returns immediately. Each attempted step therefore adds at most $B+2$ evaluations. Summing gives $1+S(B+2)$ for backward Euler and $2+S(B+2)$ for BDF2. The pre-call membership tests add no residual evaluation, and all loops and tests are finite. [F1, F3, F4, step 1.1, algebra]

3.1 All remaining tests, assignments and arithmetic are finite under the returning-primitive convention. The argument therefore proves termination without assuming that Newton converges or accepts a step. [given, step 1.1, step 2.1, step 2.2]

3.2 For each appended candidate, [F3] or [F4] gives a Newton root status with tolerance $1$. The procedure's residual test gives $\|\mathcal R_n\|_2\le1$. In both methods its blocks equal $r^d_n/\eta_d$ and $r^a_n/\eta_a$. Each block norm is at most the concatenated Euclidean norm, and both tolerances are positive; hence $\|r^d_n\|_2\le\eta_d$ and $\|r^a_n\|_2\le\eta_a$. No other solver status supplies this premise. [given, F3, F4, algebra] ∎
