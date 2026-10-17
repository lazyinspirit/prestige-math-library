---
id: thm-sqp-exhaustive-active-set-qp-solve-correct-finite
kind: theorem
title: "The exhaustive active-set QP solve terminates with the unique minimizer exactly when feasible"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps: [lem-sqp-convex-quadratic-subproblem-has-unique-kkt-certificate, alg-sqp-exhaustive-active-set-qp-solve, lem-sqp-kkt-matrix-nonsingularity-under-reduced-curvature, def-sqp-linearized-quadratic-subproblem]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/NocedalJ.pdf
      locator: "Chapter 16 §§16.1–16.4, printed pp. 451–465 / PDF pp. 469–483; KKT conditions and active-set QP."
---

## Statement

For the SQP subproblem of [[def-sqp-linearized-quadratic-subproblem]] with
$B$ symmetric positive definite, the exact algorithm of
[[alg-sqp-exhaustive-active-set-qp-solve]] terminates after finitely many
subset tests. It returns `QP-infeasible` exactly when the subproblem's
polyhedron is empty; otherwise it returns the unique global minimizer, full
equality and inequality multiplier vectors, and the retained equality basis
$E$ and inequality support $J$ of its KKT certificate.

## Facts & Assumptions

**Given:** The exact-arithmetic algorithm and a subproblem with positive-
definite $B$.

[A1] The equality rows retained by the algorithm are independent and their
right-hand sides define the same consistent equality set as the original rows.

[F1] [[lem-sqp-convex-quadratic-subproblem-has-unique-kkt-certificate]]:
feasibility gives a unique minimizer with a KKT certificate supported on a
set of active rows independent together with the equality rows.

[F2] [[lem-sqp-kkt-matrix-nonsingularity-under-reduced-curvature]]: if the
active/equality rows are independent and $B$ is positive definite on their
null space, the KKT matrix is nonsingular.

[F3] [[alg-sqp-exhaustive-active-set-qp-solve]] tests every inequality subset
in a finite order and accepts only feasible candidates with nonnegative
selected inequality multipliers; it returns their multipliers expanded to the
original equality and inequality indices, together with $E$ and $J$.

## Proof

1.1 The equality reduction is finite: there are finitely many row subsets to check, and exact rank and consistency tests decide each one. Under [A1] it preserves the equality feasible set; if it reports inconsistency, that set is empty and the full QP is infeasible. [A1, F3, algebra]

1.2 For any enumerated subset whose rows are independent, the KKT matrix is nonsingular by [F2], because $B$ is positive definite on every subspace. Thus its equality-constrained candidate is uniquely defined. If that candidate passes the inequality feasibility and multiplier-sign filters, its zero-extended multipliers give a feasible KKT tuple for the original QP, with primal point $\bar p$. For every feasible $y$, stationarity and complementarity give $(B\bar p+c)^T(y-\bar p)=-\sum_i\lambda_iG_i(y-\bar p)\ge0$, since only active inequalities have positive multipliers. Thus $q(y)-q(\bar p)=(B\bar p+c)^T(y-\bar p)+\tfrac12(y-\bar p)^TB(y-\bar p)\ge0$, with equality only for $y=\bar p$. Hence the accepted candidate is the unique global minimizer. [given, F2, F3, algebra]

2.1 If the QP is feasible, [F1] supplies an active KKT support whose rows are independent together with the reduced equality rows. [F3] therefore tests that support. The solve in step 1.2 returns its KKT point, and its feasibility and nonnegative multipliers make it pass both filters. Hence the algorithm cannot report `QP-infeasible` on a feasible subproblem. [A1, F1, F2, F3]

3.1 There are exactly $2^m$ inequality subsets. Every subset requires only finitely many exact rank, solve, and feasibility operations, so [F3] terminates. If no candidate was found, step 2.1 shows the QP is infeasible; if a candidate was found, step 1.2 shows it is the unique minimizer with the returned full KKT multipliers and support data. [F1, F3, step 1.1, step 1.2, step 2.1] ∎
