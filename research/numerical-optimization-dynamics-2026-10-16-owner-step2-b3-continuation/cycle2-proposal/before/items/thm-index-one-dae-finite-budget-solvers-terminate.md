---
id: thm-index-one-dae-finite-budget-solvers-terminate
title: "The finite-budget index-one DAE solvers return a status in finite work"
kind: theorem
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
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

Suppose the initialization and stepper algorithms in [[alg-index-one-dae-consistent-initialization]], [[alg-index-one-dae-backward-euler-stepper]], and [[alg-index-one-dae-bdf2-stepper]] are run with finite grid length and finite Newton budget $B$. Each call returns a status after finitely many residual evaluations. A Newton call makes at most $B+1$ residual evaluations. Initialization makes at most one additional algebraic-residual evaluation after a root status to record the returned residual norm, so it uses at most $B+2$ evaluations. A backward-Euler call with $S$ attempted steps uses at most $1+S(B+2)$ residual evaluations, including its one starting algebraic-residual check; a BDF2 call with $S$ attempted steps uses at most $2+S(B+2)$, including its two starting algebraic-residual checks. These bounds include calls that return early with a failure status. This is a termination statement only; it does not assert that any residual tolerance is attained.

## Facts & Assumptions

**Given:** The finite grids, finite correction budget, and exact loops and status branches in the three DAE algorithms.

[F1] [[alg-finite-budget-newton-for-vector-residuals]]: for a budget $B$, Newton evaluates at iterates $0,\ldots,B$, performs at most $B$ corrections, and returns a status at a tolerance, domain, singular-Jacobian, or budget branch.

[F2] [[alg-index-one-dae-consistent-initialization]]: initialization makes one such Newton call and, on root status, one extra algebraic-residual evaluation.

[F3] [[alg-index-one-dae-backward-euler-stepper]]: the wrapper checks one starting algebraic residual, makes at most one such Newton call per attempted step, reevaluates the block residual once on root status, and returns immediately on a non-root status.

[F4] [[alg-index-one-dae-bdf2-stepper]]: the wrapper checks both starting algebraic residuals, makes at most one such Newton call per attempted step, reevaluates the block residual once on root status, and returns immediately on a non-root status.



## Proof

1.1 Number the Newton loop evaluations by $j=0,\ldots,B$. At each entered index $j$, [F1] evaluates the residual and either returns a status or, if $j<B$, makes at most one correction before advancing to $j+1$; at $j=B$ the budget branch returns without advancing. Induction on $j$ shows the loop never passes $B$, so there are at most $B+1$ evaluations and $B$ corrections. [given, F1, induction]

2.1 Initialization makes one Newton call by [F2]. If it returns a non-root status, the wrapper returns immediately; if it returns root, it reevaluates the algebraic residual once to distinguish exact from approximate consistency. Thus it uses at most $B+2$ residual evaluations. [F1, F2, step 1.1]

2.3 A backward-Euler call first evaluates its starting algebraic residual once, and a BDF2 call evaluates its two starting algebraic residuals, by [F3] and [F4]. Thus their preliminary checks use at most one and two evaluations, respectively, even when a bound fails. Each attempted step makes at most one Newton call; on a root status the wrapper reevaluates the block residual once to record the unscaled blocks, and otherwise returns immediately. Each attempted step therefore adds at most $B+2$ evaluations. Summing gives $1+S(B+2)$ for backward Euler and $2+S(B+2)$ for BDF2. The pre-call membership tests add no residual evaluation, and all loops and tests are finite. [F1, F3, F4, step 1.1, algebra]

3.1 The argument uses only finite loops and the specified status branches, so it proves termination without any assumption that Newton converges or accepts a step. [step 1.1, step 2.1, step 2.2, step 2.3] ∎
