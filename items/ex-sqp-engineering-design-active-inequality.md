---
id: ex-sqp-engineering-design-active-inequality
kind: example
title: "Two-component design with an active demand constraint"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-sqp-linearized-quadratic-subproblem
  - alg-sqp-exhaustive-active-set-qp-solve
  - thm-sqp-exhaustive-active-set-qp-solve-correct-finite
  - thm-convex-kkt-sufficiency-and-normal-cone-certificate
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
      locator: "Chapter 16 §§16.1–16.4, active-set quadratic subproblems, printed pp. 451–465 / PDF pp. 469–483."
---

## Statement

Consider the design problem
$$\min_{x\in\mathbb R^2}\frac12(x_1^2+x_2^2) \quad\text{subject to }1-x_1-x_2\le0.$$
At $x_0=(0,0)$, use $B=I$ in the SQP quadratic subproblem. The exact
active-set solve returns $p=(1/2,1/2)$, and $x_0+p$ is the unique global
minimizer of the nonlinear problem, with active demand constraint and
multiplier $1/2$.

## Facts & Assumptions

**Given:** The quadratic objective, linear demand constraint, and SQP
subproblem and exact active-set conventions.

[F1] [[def-sqp-linearized-quadratic-subproblem]] defines the SQP model as
the objective gradient plus a positive-definite quadratic term and affine
linearized constraints.

[F2] [[alg-sqp-exhaustive-active-set-qp-solve]] tests feasible active KKT
supports and returns an accepted exact candidate.

[F3] [[thm-sqp-exhaustive-active-set-qp-solve-correct-finite]] identifies
that candidate as the unique global QP minimizer.

[F4] [[thm-convex-kkt-sufficiency-and-normal-cone-certificate]]: a
feasible KKT tuple for a convex objective with affine constraints certifies
global optimality.

[A1] The SQP model matrix at $x_0$ is $I$, and all arithmetic is exact.

## Proof

1.1 At $x_0$, $\nabla f(x_0)=0$ and the linearized inequality is $1-p_1-p_2\le0$. The unconstrained minimizer $p=0$ is infeasible. On the active face $p_1+p_2=1$, stationarity for $q(p)=\tfrac12\|p\|_2^2$ is $p-\lambda(1,1)^T=0$; combining with the face equation gives $p_1=p_2=\lambda=1/2$. This point is feasible with nonnegative multiplier. [given, A1, F1, algebra]

2.1 The positive-definite QP has a unique minimizer; its feasible KKT tuple passes the active-set acceptance filters in [F2]. By [F3] the returned step is exactly $(1/2,1/2)$. [A1, F2, F3, step 1.1]

3.1 The nonlinear point $x_*=(1/2,1/2)$ is feasible and has $\nabla f(x_*)=(1/2,1/2)$, $\nabla g(x_*)=(-1,-1)$, and multiplier $\lambda_*=1/2$. Thus stationarity holds, the multiplier is nonnegative, and complementarity holds with $g(x_*)=0$. Since the objective is convex and the constraint affine, [F4] proves global optimality; strict convexity of the objective makes the minimizer unique. [F4, algebra, step 2.1] ∎
