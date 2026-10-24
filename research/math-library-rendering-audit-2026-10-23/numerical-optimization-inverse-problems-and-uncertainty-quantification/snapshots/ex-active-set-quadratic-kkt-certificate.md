---
id: ex-active-set-quadratic-kkt-certificate
kind: example
title: Active-set quadratic with an exact KKT certificate
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-inequality-constrained-program-and-kkt-geometry
  - prop-licq-implies-mfcq-and-unique-kkt-multipliers
  - thm-convex-kkt-sufficiency-and-normal-cone-certificate
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Nocedal and Wright, Numerical Optimization, second edition
      url: https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/NocedalJ.pdf
      locator: Chapter 12, Sections 12.1–12.2, printed pp. 317–331; active inequalities and first-order KKT certificates.
    - title: Boyd and Vandenberghe, Convex Optimization
      url: https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf
      locator: Chapter 5, Sections 5.1 and 5.5, KKT and global convex optimality certificates.
---

## Example

Minimize
$$f(x_1,x_2)=\tfrac12\bigl((x_1+1)^2+(x_2-2)^2\bigr)$$
subject to $g(x_1,x_2)=-x_1\le0$. The point $x_*=(0,2)$ has one active
constraint and multiplier $\lambda_*=1$.

## Facts & Assumptions

**Given:** The quadratic objective, the inequality $g=-x_1\le0$, and the
candidate $x_*=(0,2)$.

[F1] LICQ requires independence of the equality and active inequality
gradient rows; LICQ implies MFCQ and makes any KKT multiplier unique
([[def-inequality-constrained-program-and-kkt-geometry]],
[[prop-licq-implies-mfcq-and-unique-kkt-multipliers]]).

[F2] For a differentiable convex program, a feasible KKT tuple is a global
minimizer ([[thm-convex-kkt-sufficiency-and-normal-cone-certificate]]).

## Verification

1.1 The constraint is feasible exactly when $x_1\ge0$. At $x_*=(0,2)$ it is active, and $\nabla f(x_*)=(1,0)$ while $\nabla g(x_*)=(-1,0)$. Therefore $\nabla f(x_*)+\lambda_*\nabla g(x_*)=0$ for $\lambda_*=1\ge0$, and $\lambda_*g(x_*)=0$. The active gradient is nonzero, so the one-row LICQ holds. [given, F1, algebra]

2.1 The quadratic is convex and differentiable. Primal feasibility and the multiplier checks in step 1.1 satisfy the hypotheses of [F2], so $x_*$ is a global minimizer. Directly, for every feasible $x$, $ f(x)-f(x_*)=x_1+\tfrac12x_1^2+\tfrac12(x_2-2)^2\ge0, $ with equality only when $x_1=0$ and $x_2=2$. Thus the minimizer is unique, and [F1] makes $\lambda_*=1$ the unique multiplier. [step 1.1, F1, F2, algebra]

3.1 The active-set KKT certificate is exact: it proves the unique global minimizer $x_*=(0,2)$ and its unique nonnegative multiplier $\lambda_*=1$. [step 1.1, step 2.1] ∎
