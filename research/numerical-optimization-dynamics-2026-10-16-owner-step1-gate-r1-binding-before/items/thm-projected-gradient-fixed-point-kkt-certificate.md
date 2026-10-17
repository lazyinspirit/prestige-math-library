---
id: thm-projected-gradient-fixed-point-kkt-certificate
kind: theorem
title: "Projected-gradient fixed points are normal-cone certificates"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-proximal-gradient-mapping
  - lem-prox-indicator-is-euclidean-projection
  - lem-projection-onto-a-closed-convex-set-has-the-variational-inequality
  - def-kkt-residual-and-normal-cone
  - thm-convex-kkt-sufficiency-and-normal-cone-certificate
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Amir Beck and Marc Teboulle, A Fast Iterative Shrinkage-Thresholding Algorithm for Linear Inverse Problems, Remark 2.1"
      url: "https://www.tau.ac.il/~becka/FISTA.pdf"
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization, Chapter 5, §§5.1–5.2"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
---

## Statement

Let $C=\{x\in\mathbb R^n:Ax=b,\ Gx\le d\}$ be a nonempty polyhedron and let $f:\mathbb R^n\to\mathbb R$ be convex and continuously differentiable with $L$-Lipschitz gradient, $L>0$. For $x\in C$, the projected-gradient mapping of [[def-proximal-gradient-mapping]] satisfies
$$G_L^C(x)=0\quad\Longleftrightarrow\quad-\nabla f(x)\in N_C(x),$$
where $N_C$ has the outward convention of [[def-kkt-residual-and-normal-cone]]. If a feasible tuple $(x_*,\nu,\lambda)$ satisfies $\lambda\ge0$, $\nabla f(x_*)+A^T\nu+G^T\lambda=0$, and $\lambda_i((Gx_*-d)_i)=0$ for every inequality, then $x_*$ is such a fixed point and is a global minimizer over $C$. The converse to this KKT-multiplier implication is not asserted.

## Facts & Assumptions

**Given:** The polyhedron, differentiable convex objective and, in the second claim, the feasible KKT tuple.

[F1] [[lem-prox-indicator-is-euclidean-projection]]: $\operatorname{prox}_{t\iota_C}$ equals the unique Euclidean projection $P_C$.

[F2] [[lem-projection-onto-a-closed-convex-set-has-the-variational-inequality]]: if $p=P_C(v)$, then $\langle v-p,z-p\rangle\le0$ for all $z\in C$.

[F3] [[def-kkt-residual-and-normal-cone]]: $N_C(x)=\{w:\langle w,z-x\rangle\le0\text{ for all }z\in C\}$.

[F4] [[thm-convex-kkt-sufficiency-and-normal-cone-certificate]]: for a differentiable convex objective, affine equalities and differentiable convex inequalities, a feasible KKT tuple with nonnegative inequality multipliers implies global minimality and $-\nabla f(x_*)\in N_C(x_*)$.

## Proof

1.1 Fix $x\in C$ and put $v=x-\nabla f(x)/L$. By [F1], $T_L^C(x)=P_C(v)$. If $G_L^C(x)=0$, then $x=P_C(v)$, so [F2] gives $\langle-\nabla f(x)/L,z-x\rangle\le0$ for every $z\in C$. Since $L>0$, this is exactly $-\nabla f(x)\in N_C(x)$ by [F3]. [F1, F2, F3, given, algebra]

1.2 Conversely suppose $-\nabla f(x)\in N_C(x)$. Then $\langle x-v,z-x\rangle=\langle\nabla f(x)/L,z-x\rangle\ge0$ for every $z\in C$. Expanding gives $$\|z-v\|_2^2=\|z-x\|_2^2+\|x-v\|_2^2+2\langle x-v,z-x\rangle\ge\|x-v\|_2^2.$$ Thus $x$ is the nearest point in $C$ to $v$; uniqueness of projection gives $x=P_C(v)=T_L^C(x)$, so $G_L^C(x)=0$. [F1, F3, given, algebra]

2.1 The feasible set has affine equalities $Ax=b$ and affine, hence convex differentiable, inequalities $G_i x-d_i\le0$. The tuple in the Statement meets the supplier's KKT hypotheses, so [F4] gives both global minimality and $-\nabla f(x_*)\in N_C(x_*)$. Steps 1.1–1.2 then give the projected-gradient fixed point. No constraint qualification or multiplier converse is used. [F3, F4, step 1.1, step 1.2, given] ∎