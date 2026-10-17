---
id: alg-sqp-exact-hessian-newton-step
kind: algorithm
title: "Full-step exact-Hessian SQP after active-set identification"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-sqp-linearized-quadratic-subproblem
  - def-inequality-constrained-program-and-kkt-geometry
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
      locator: "Chapter 18 §§18.1–18.2, Newton SQP and KKT system, printed pp. 528–537 / PDF pp. 546–555."
    - title: "Ralf Herzog, Algorithms and Preconditioning in PDE-Constrained Optimization, lecture notes"
      url: "https://citeseerx.ist.psu.edu/document?doi=f681cd3f5021097b647a085b869853e713894a51&repid=rep1&type=pdf"
      locator: "Chapter 1 §2.2.2, printed pp. 14–15 / PDF pp. 14–15; SQP/Newton equivalence for the KKT system."
---

## Definition

Let $c_A(x)=(h(x),g_I(x))$ stack all equalities and the identified active
inequalities, and let $\mu=(\nu,\lambda_I)$. For a current pair $(x,\mu)$,
form
$$F_A(x,\mu)=\binom{\nabla_x L(x,\nu,\lambda_I,0_{I^c})}{c_A(x)},\qquad J_A(x,\mu)=\begin{bmatrix}\nabla^2_{xx}L(x,\nu,\lambda_I,0_{I^c})&Dc_A(x)^T\\Dc_A(x)&0\end{bmatrix}.$$
If $J_A$ is nonsingular, solve
$$J_A\binom{p}{\delta\mu}=-F_A(x,\mu)$$
and return the full Newton pair $(x+p,\mu+\delta\mu)$. A failed rank test
or solve returns `kkt-solve-failure`. The active set is supplied to this
step; this algorithm has no line search and makes no global convergence
claim.

## Facts & Assumptions

**Given:** The program convention of
[[def-inequality-constrained-program-and-kkt-geometry]], an identified
active set $I$, and a current primal-dual pair.

[F1] [[def-sqp-linearized-quadratic-subproblem]] uses the Lagrangian
Hessian in the quadratic model and linearizes the constraints.

[F2] [[lem-sqp-kkt-matrix-nonsingularity-under-reduced-curvature]] gives
the nonsingularity criterion for the displayed saddle-point matrix.

[F3] [[def-inequality-constrained-program-and-kkt-geometry]] fixes the
active-set Lagrangian $L=f+\nu^Th+\lambda^Tg$ and the nonnegative
inequality-multiplier convention.

[A1] The active set is identified, the active rows are independent, and
the exact Lagrangian Hessian is positive on their null space whenever a
step is claimed.

## Proof

1.1 Differentiating $F_A$ with respect to $(x,\mu)$ gives the block matrix $J_A$: the derivative of stationarity in $x$ is the exact Lagrangian Hessian, its derivative in $\mu$ is $Dc_A(x)^T$, and the derivative of the constraint block is $Dc_A(x)$. Thus the linear solve is precisely the Newton equation for $F_A=0$. [given, F1, F3, algebra]

2.1 When the active rows are independent and the Lagrangian Hessian is positive on their null space, [F2] makes that Newton equation uniquely solvable. Otherwise the algorithm reports failure and does not return a Newton step; a returned pair is the stated full step. [given, A1, F2, step 1.1, algebra] ∎
