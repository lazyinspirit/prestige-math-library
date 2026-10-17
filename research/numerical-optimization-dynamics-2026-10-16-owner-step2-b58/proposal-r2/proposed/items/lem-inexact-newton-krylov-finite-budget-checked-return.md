---
id: lem-inexact-newton-krylov-finite-budget-checked-return
kind: lemma
title: "Safeguarded inexact Newton has a finite checked-return bound"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - alg-inexact-newton-krylov-with-descent-safeguard
  - lem-bracketing-zoom-finite-budget-checked-return
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, second edition"
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 7 \u00a77.1, Algorithm 7.1, printed pp. 165\u2013170 / PDF pp. 183\u2013188: Newton\u2013CG, forcing residual and descent-safeguard method context. The finite outer, regularization and search caps and statuses are the local adaptation in alg-inexact-newton-krylov-with-descent-safeguard; the present count/status consequences are proved locally, not quoted as an identical theorem from this reference."
---

## Statement

Under the inputs of [[alg-inexact-newton-krylov-with-descent-safeguard]], assume every call of the supplied Krylov procedure terminates within its budget of $M$ inner iterations, all requested in-domain function, gradient and Hessian-action evaluations terminate with real values, and the prescribed comparisons are exact. The algorithm terminates with its specified status, retaining the underlying search failure cause when applicable. Every iterate belongs to $U$. There are at most $N$ accepted updates, $N(J+1)$ Krylov calls, $N(J+1)M$ inner iterations, $N$ line-search calls, and $N(E+Z)$ evaluated line-search trial points. Separately, at most $N+1$ outer-iterate gradient evaluations and $N(J+1)$ recomputed candidate residuals occur. Each residual uses one Hessian action outside the Krylov solver. These counts do not bound the number of Hessian actions used internally by an arbitrary supplied solver, total arithmetic work, or convergence. In exact arithmetic the `no-descent-direction` branch is unreachable under the stated inputs.

## Facts & Assumptions

**Given:** The hypotheses and budgets of the Statement.

[F1] [[alg-inexact-newton-krylov-with-descent-safeguard]]: the outer loop ranges from $0$ through $N$; it returns at a stationary iterate or at $k=N$ before solving, and otherwise makes at most $J+1$ solver attempts, recomputes each candidate residual, checks descent or the fallback, and calls the bounded line search once before an update.

[F2] [[lem-bracketing-zoom-finite-budget-checked-return]]: each line-search call terminates, uses at most $E+Z$ evaluated trial points, and returns only a positive feasible checked strong Wolfe step or a failure status.

## Proof

**Given:** The hypotheses of the Statement.

1.1 Initially $x_0\in U$. At any nonstationary iteration the supplied solver calls and candidate residual evaluations terminate by assumption; the loop has at most $J+1$ attempts. Every accepted candidate satisfies $g_k^Tp<-\sigma\|g_k\|_2\|p\|_2<0$, since a candidate with $p=0$ cannot pass. If none passes, $p=-g_k$ gives $g_k^Tp=-\|g_k\|_2^2<-\sigma\|g_k\|_2^2$ because $g_k\ne0$ and $0<\sigma<1$. Thus a strict descent direction is always available and the fallback failure cannot occur in exact arithmetic. [given, F1, algebra]

1.2 By [F2] the ensuing search terminates. On failure the algorithm returns its last valid iterate, its line-search-failure status and the search cause. On success feasibility of the checked step gives $x_{k+1}\in U$. Induction proves feasibility of every iterate. [F1, F2, step 1.1, induction]

2.1 A solve or update can occur only for $k<N$. Thus at most $N$ updates and searches and $N(J+1)$ solver calls occur; each uses at most $M$ inner iterations. At most one candidate residual is recomputed per call, each by one Hessian action plus the displayed shift and vector arithmetic. By [F2] there are at most $N(E+Z)$ evaluated search trials. The outer loop computes its gradient once per visited index, at most $N+1$ times, separately from line-search gradient evaluations. [given, F1, F2, step 1.2, counting]

3.1 Every inner call and search terminates and every loop has its finite stated bound. Hence the algorithm reaches a specified return no later than its $k=N$ check. Steps 1.1–2.1 prove the asserted statuses, feasibility and counts; they do not specify the internal Hessian-action count of the arbitrary solver or a convergence theorem. [given, F1, step 1.1, step 1.2, step 2.1] ∎
