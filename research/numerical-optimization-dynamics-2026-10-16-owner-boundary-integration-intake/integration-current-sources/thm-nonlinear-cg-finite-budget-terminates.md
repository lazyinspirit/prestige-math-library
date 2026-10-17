---
id: thm-nonlinear-cg-finite-budget-terminates
kind: theorem
title: "Finite-budget nonlinear conjugate gradient returns a status"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-nonlinear-conjugate-gradient-methods
  - alg-bracketing-zoom-strong-wolfe-search
  - lem-bracketing-zoom-finite-budget-checked-return
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, second edition"
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 3 §3.5 and Chapter 5 §5.2: line-search procedures and nonlinear CG outer iteration."
    - title: "Jean Charles Gilbert and Jorge Nocedal, Global Convergence Properties of Conjugate Gradient Methods for Optimization, SIAM Journal on Optimization 2(1), 21–42 (1992), DOI 10.1137/0802003"
      url: "https://who.rocq.inria.fr/Jean-Charles.Gilbert/preprint/06%2Bcg-convergence.pdf"
      locator: "§1, printed pp. 21–22: nonlinear CG iteration structure; the finite evaluation bound here follows from the local budgeted algorithm."
---

## Statement

Assume function and gradient evaluations at requested in-domain points return real values. For finite outer limit $K$ and finite expansion and zoom limits $E,Z$, the procedure of [[alg-nonlinear-conjugate-gradient-methods]] terminates with one of **stationary**, **search-failure**, or **iteration-limit**. In bounded-strong-Wolfe mode it makes at most $K$ line-search calls and at most $K(E+Z)$ line-search trial evaluations, each of which evaluates the objective and directional derivative at one trial point. Separately, the outer iteration evaluates the gradient at most $K+1$ times: once initially and once after each accepted update. The theorem does not claim a total gradient-evaluation count, because the line search also evaluates directional derivatives. It gives no arithmetic-work or finite-precision error bound.

## Facts & Assumptions

**Given:** The finite budgets, evaluation convention and algorithm in the Statement.

[F1] [[alg-nonlinear-conjugate-gradient-methods]]: the outer loop ranges over $k=0,\ldots,K-1$ and can accept at most one update per iteration.

[F2] [[lem-bracketing-zoom-finite-budget-checked-return]]: a bounded call uses at most $E$ expansion trial evaluations.

[F3] [[lem-bracketing-zoom-finite-budget-checked-return]]: at most one zoom call occurs, with at most $Z$ trial evaluations.

[F4] [[lem-bracketing-zoom-finite-budget-checked-return]]: each evaluated trial evaluates $\phi(t)$ and $\phi'(t)$, and a bounded call terminates with either a checked positive feasible strong Wolfe step or a failure status.

[F5] [[alg-nonlinear-conjugate-gradient-methods]]: the algorithm evaluates the initial gradient once.

[F6] [[alg-nonlinear-conjugate-gradient-methods]]: after each accepted update it evaluates one new iterate gradient and returns **stationary** if it is zero; when the loop ends with a nonzero last gradient, it returns **iteration-limit**.

## Proof

**Given:** The hypotheses and budgets in the Statement.

1.1 By [F2] and [F3], each bounded strong Wolfe call uses at most $E+Z$ trial evaluations; [F4] specifies that each trial evaluates $\phi(t)$ and $\phi'(t)$ and that the call returns a checked step or a failure. In exact-SPD-quadratic mode, the algorithm instead computes and checks its single formula step. [given, F2, F3, F4]

2.1 By [F1] and [F6], there are at most $K$ outer iterations; each either returns a terminal status or accepts one step, and after the loop any nonzero last gradient yields **iteration-limit**. Thus bounded mode makes at most $K$ line-search calls and $K(E+Z)$ trial evaluations. By [F5] and [F6], the outer algorithm evaluates the initial gradient once and one new iterate gradient per accepted update, hence at most $K+1$ outer-iterate gradient evaluations. [F1, F5, F6, step 1.1, algebra] ∎
