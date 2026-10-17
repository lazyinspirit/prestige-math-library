---
id: alg-sqp-exhaustive-active-set-qp-solve
kind: algorithm
title: "Exact exhaustive active-set solve for the SQP quadratic subproblem"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-sqp-linearized-quadratic-subproblem
  - lem-sqp-kkt-matrix-nonsingularity-under-reduced-curvature
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/NocedalJ.pdf
      locator: "Chapter 16 §§16.1–16.4, printed pp. 451–465 / PDF pp. 469–483; KKT systems for convex QPs and active sets."
---

## Definition

Input an SQP subproblem from [[def-sqp-linearized-quadratic-subproblem]],
using exact real arithmetic. First reduce the linearized equality system
$A_Ep=b_E$: test consistency, and, if consistent, retain the
lexicographically first maximal independent set $E$ of equality row indices
with their right-hand sides. If it is inconsistent, return
`QP-infeasible`.

For each subset $J\subseteq\{1,\ldots,m\}$ in increasing bit-mask order:

1. Stack the retained equality rows and the inequality rows $G_i$ for $i\in J$.
   If these rows are dependent, skip $J$.
2. Treat the selected inequalities as equalities $G_ip=-d_i$ and solve
   $$\begin{bmatrix}B&A_J^T\\A_J&0\end{bmatrix} \binom{p}{\eta}=\binom{-c}{b_J},$$
   where $c=\nabla f(x)$, $A_J$ is the stacked matrix with equality rows $E$
   followed by selected inequality rows $J$, and $b_J$ is the right-hand side
   in that same row order. The multiplier vector $\eta$ is stored in this row
   order. The KKT matrix is
   nonsingular by [[lem-sqp-kkt-matrix-nonsingularity-under-reduced-curvature]].
3. Discard the candidate if any linearized inequality is violated or any
   selected inequality multiplier is negative. Otherwise store $(p,\eta,J)$.

If no candidate is stored, return `QP-infeasible`. Otherwise return the
stored candidate with least quadratic objective, breaking an exact tie by the
least subset bit mask, as `solution(p, nu, lambda, E, J)`. Here $\nu$ is
the full equality-multiplier vector, initialized to zero and filled from the
equality components of $\eta$ at indices $E$; $\lambda$ is the full
inequality-multiplier vector, initialized to zero and filled from the selected
components at indices $J$. A finite-precision
implementation that cannot complete a rank test or solve must return
`numerical-failure`; this definition's exact-arithmetic branch has no such
failure. The loop tests at most $2^m$ inequality subsets. It requires no
feasible initial step and specifies no pivoting rule for an iterative working
set solver.

## Facts & Assumptions

**Given:** An affine-constraint quadratic subproblem with $B\succ0$ and
exact real arithmetic.

[F1] [[def-sqp-linearized-quadratic-subproblem]] defines the quadratic
objective and affine feasible set.

[F2] [[lem-sqp-kkt-matrix-nonsingularity-under-reduced-curvature]] states
that the KKT block matrix is nonsingular when its constraint rows are
independent and the Hessian is positive definite on their null space.

[A1] The quadratic matrix $B$ is symmetric positive definite and all rank,
consistency, solve, and comparison operations use exact real arithmetic.

## Proof

1.1 The equality reduction and subset enumeration each examine finitely many row subsets. Every retained equality system is equivalent to the original consistent system, and every selected subset passing the rank test has a nonsingular KKT matrix by [F2], because $B\succ0$ on every subspace. Thus each candidate solve is uniquely defined. [given, A1, F1, F2, algebra]

2.1 Each accepted candidate is checked against all inequalities and has nonnegative selected inequality multipliers. The returned full vectors $(\nu,\lambda)$ are the reduced KKT multipliers placed at their original indices and zero elsewhere, so they give the same stationarity equation; feasibility of the retained equality system is equivalent to feasibility of the original consistent system. Thus the return is a feasible KKT tuple for the full QP. If none is accepted, the routine returns its specified infeasibility status. The exact meaning of that status is a separate theorem claim. [given, A1, F1, step 1.1, algebra] ∎

