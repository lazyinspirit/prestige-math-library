---
id: alg-sqp-feasible-working-set-qp-solve
kind: algorithm
title: "Feasible active-set QP solve with blocking constraints and a finite cap"
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
      locator: "Chapter 16 §16.4, Algorithm 16.1 and finite-termination discussion, printed pp. 455–465 / PDF pp. 475–484."
---

## Definition

Input a strictly convex quadratic program
$$q(z)=\tfrac12z^TBz+c^Tz,\qquad Az=b,\qquad G_iz+d_i\le0\ (1\le i\le m),$$
with $B=B^T\succ0$, a feasible starting point $z_0$, a working set
$W_0$ of active inequality indices whose rows together with the equality
rows are independent, and a finite iteration cap $N\ge1$. Fix ties by least
index. For each iteration $k=0,\ldots,N-1$:

1. Solve the equality-constrained direction problem
   $$\min_u\quad (Bz_k+c)^Tu+\tfrac12u^TBu \quad\text{subject to}\quad Au=0,\quad G_iu=0\ (i\in W_k).$$
   Its KKT matrix is nonsingular by
   [[lem-sqp-kkt-matrix-nonsingularity-under-reduced-curvature]]. If the
   linear solve fails, return `numerical-failure`.
2. If $u=0$, inspect the inequality multipliers $\mu_i$ for $i\in W_k$.
   If every $\mu_i\ge0$, return `solution(z_k, multipliers, W_k)`. Otherwise
   delete the least-index $j\in W_k$ with $\mu_j<0$ and continue at the same
   feasible point with the reduced working set.
3. If $u\ne0$, for every $i\notin W_k$ with $G_iu>0$ compute
   $$\alpha_i=-\frac{G_iz_k+d_i}{G_iu},\qquad \alpha_k=\min\bigl(1,\min_{i\notin W_k,\ G_iu>0}\alpha_i\bigr),$$
   using $\alpha_k=1$ when there is no such index. If $\alpha_k=0$, return
   `degenerate-block`. Otherwise set $z_{k+1}=z_k+\alpha_ku$. If
   $\alpha_k<1$, add the least-index blocker attaining $\alpha_k$ to $W_k$;
   if adding it makes the rows dependent, return `dependent-blocker`. If
   $\alpha_k=1$, the new point minimizes $q$ on the current working-set
   face, even if an unselected inequality becomes active at the endpoint. Set
   all those unselected multipliers to zero, and return if the current
   inequality multipliers are nonnegative; otherwise delete the least-index
   negative-multiplier constraint before continuing.

If the cap is reached first, return `iteration-budget-exhausted` with the
last feasible iterate and multipliers. Every returned non-solution status is
inconclusive about optimality. The algorithm does not silently add a
zero-length blocking step.

## Facts & Assumptions

**Given:** A feasible starting point, independent initial working rows,
$B\succ0$, and a positive finite iteration cap.

[F1] [[def-sqp-linearized-quadratic-subproblem]] fixes the $\le0$
constraint convention and quadratic objective.

[F2] [[lem-sqp-kkt-matrix-nonsingularity-under-reduced-curvature]] makes
each stated working-face KKT system uniquely solvable.

[A1] The starting point is feasible, $B$ is symmetric positive definite,
the initial working rows are independent, and $N$ is a positive integer.

## Proof

1.1 The direction problem has Hessian $B\succ0$ on the null space of the working rows, and those rows are independent by the input condition and the dependent-blocker guard. Hence [F2] applies. If $G_i u>0$, feasibility of $z_k$ gives $\alpha_i\ge0$, and taking the minimum blocking fraction keeps every linear inequality feasible along $z_k+t u$ for $0\le t\le\alpha_k$. [given, F1, F2, algebra]

2.1 Deleting a row leaves the iterate feasible; adding an independent blocking row preserves independent working rows; a zero blocking step or failed solve exits explicitly. Since at most $N$ direction solves are attempted, the procedure returns a listed solution status or a listed inconclusive status after finitely many iterations. [given, A1, step 1.1, algebra] ∎
