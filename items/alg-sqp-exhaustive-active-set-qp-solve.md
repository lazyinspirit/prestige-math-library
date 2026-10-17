---
id: alg-sqp-exhaustive-active-set-qp-solve
kind: algorithm
title: "Exact exhaustive active-set solve for the SQP quadratic subproblem"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-sqp-linearized-quadratic-subproblem
  - lem-sqp-kkt-matrix-nonsingularity-under-reduced-curvature
justified_by: [thm-sqp-exhaustive-active-set-qp-solve-correct-finite]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/NocedalJ.pdf
      locator: "Chapter 16 §§16.1–16.4, printed pp. 451–465 / PDF pp. 469–483; KKT systems for convex QPs and active sets."
---

## Definition

Input an SQP subproblem from [[def-sqp-linearized-quadratic-subproblem]],
using exact real arithmetic. Let $q$ and $m$ be the numbers of equality and
inequality constraints. Put $A^{\rm eq}=Dh(x)$, $b^{\rm eq}=-h(x)$,
$G=Dg(x)$, $d=g(x)$, and $c=\nabla f(x)$, so $G_i=Dg_i(x)$ and
$d_i=g_i(x)$ for $1\le i\le m$. First reduce the linearized equality system
$A^{\rm eq}p=b^{\rm eq}$: test consistency, and, if consistent, retain the
lexicographically first maximal independent set $E\subseteq\{1,\ldots,q\}$
of equality row indices with their right-hand sides. If it is inconsistent,
return `QP-infeasible`. Within each retained row set, use increasing original
indices; an empty row set contributes no rows or right-hand-side entries.

For each subset $J\subseteq\{1,\ldots,m\}$ in increasing bit-mask order:

1. Stack the equality rows $(A^{\rm eq})_E$ and the inequality rows $G_J$,
   in that order. If these rows are dependent, skip $J$.
2. Treat the selected inequalities as equalities $G_ip=-d_i$ and solve
   $$\begin{bmatrix}B&A_J^T\\A_J&0\end{bmatrix} \binom{p}{\eta}=\binom{-c}{b_J},$$
   where $A_J=\binom{(A^{\rm eq})_E}{G_J}$ and
   $b_J=\binom{(b^{\rm eq})_E}{-d_J}$. Thus the equality entries of $b_J$
   are $-h_a(x)$ for $a\in E$, followed by $-g_i(x)$ for $i\in J$,
   in the declared row order. The multiplier vector $\eta$ is stored in this
   same order. The KKT matrix is
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
failure. It requires no
feasible initial step and specifies no pivoting rule for an iterative working
set solver.
