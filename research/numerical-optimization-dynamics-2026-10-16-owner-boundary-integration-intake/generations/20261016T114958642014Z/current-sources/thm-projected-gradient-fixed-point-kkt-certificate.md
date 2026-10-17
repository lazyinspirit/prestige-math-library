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
  - def-euclidean-inner-product
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

Let $n\in\mathbb N$, let $p,m\in\mathbb N$ (zero allowed), and take $A\in\mathbb R^{p\times n}$, $b\in\mathbb R^p$, $G\in\mathbb R^{m\times n}$, and $d\in\mathbb R^m$. Let $C=\{x\in\mathbb R^n:Ax=b,\ Gx\le d\}$ be nonempty and let $f:\mathbb R^n\to\mathbb R$ be convex and continuously differentiable with $L$-Lipschitz gradient, $L>0$. For $x\in C$, the projected-gradient mapping of [[def-proximal-gradient-mapping]] satisfies
$$G_L^C(x)=0\quad\Longleftrightarrow\quad-\nabla f(x)\in N_C(x),$$
where $N_C$ has the outward convention of [[def-kkt-residual-and-normal-cone]]. If a feasible tuple $(x_*,\nu,\lambda)$ satisfies $\lambda\ge0$, $\nabla f(x_*)+A^T\nu+G^T\lambda=0$, and $\lambda_i((Gx_*-d)_i)=0$ for every inequality, then $x_*$ is such a fixed point and is a global minimizer over $C$. The converse to this KKT-multiplier implication is not asserted.

## Facts & Assumptions

**Given:** The polyhedron, differentiable convex objective and, in the second claim, the feasible KKT tuple.

[F1] [[lem-prox-indicator-is-euclidean-projection]]: $\operatorname{prox}_{t\iota_C}$ equals the unique Euclidean projection $P_C$.

[F2] [[lem-projection-onto-a-closed-convex-set-has-the-variational-inequality]]: if $p=P_C(v)$, then $\langle v-p,z-p\rangle\le0$ for all $z\in C$.

[F3] [[def-kkt-residual-and-normal-cone]]: $N_C(x)=\{w:\langle w,z-x\rangle\le0\text{ for all }z\in C\}$.

[F4] [[thm-convex-kkt-sufficiency-and-normal-cone-certificate]]: when $n\ge1$, for a differentiable convex objective on an open convex set, affine equalities and differentiable convex inequalities, a feasible KKT tuple with nonnegative inequality multipliers implies global minimality and $-\nabla f(x_*)\in N_C(x_*)$.

[F5] [[def-euclidean-inner-product]]: $\mathbb R^0$ consists of its unique zero vector, and its inner product and norm vanish.

[A1] The displayed $C$ is closed and convex as the intersection of affine equality sets and affine closed half-spaces; it is nonempty by hypothesis.

## Proof

1.1 If $n=0$, then $\mathbb R^0=\{0\}$ by [F5], and nonempty $C$ is $\{0\}$. Its projection fixes $0$, so $G_L^C(0)=0$; also $N_C(0)=\{0\}$ and $\nabla f(0)=0$. Thus the fixed-point/normal-cone equivalence holds. [A1, F3, F5, given, algebra]

1.2 Now assume $n\ge1$. Fix $x\in C$ and put $v=x-\nabla f(x)/L$. By [F1], $T_L^C(x)=P_C(v)$. If $G_L^C(x)=0$, then $x=P_C(v)$, so [F2] gives $\langle-\nabla f(x)/L,z-x\rangle\le0$ for every $z\in C$. Since $L>0$, this is exactly $-\nabla f(x)\in N_C(x)$ by [F3]. [A1, F1, F2, F3, given, algebra]

1.3 Conversely suppose $n\ge1$ and $-\nabla f(x)\in N_C(x)$. Then $\langle x-v,z-x\rangle=\langle\nabla f(x)/L,z-x\rangle\ge0$ for every $z\in C$. Expanding gives $$\|z-v\|_2^2=\|z-x\|_2^2+\|x-v\|_2^2+2\langle x-v,z-x\rangle\ge\|x-v\|_2^2.$$ Thus $x$ is the nearest point in $C$ to $v$; uniqueness of projection gives $x=P_C(v)=T_L^C(x)$, so $G_L^C(x)=0$. [A1, F1, F3, given, algebra]

2.1 If $n=0$, nonempty $C=\mathbb R^0=\{0\}$, so every feasible $x_*$ is the global minimizer and is the projected-gradient fixed point by step 1.1. If $n\ge1$, write the inequalities as $g_i(x)=G_i x-d_i\le0$ on the open convex set $U=\mathbb R^n$; these functions are affine, differentiable and convex. The feasible tuple meets the hypotheses of [F4], which gives global minimality and $-\nabla f(x_*)\in N_C(x_*)$; step 1.3 then gives the fixed point. No constraint qualification or multiplier converse is used. [F3, F4, step 1.1, step 1.3, given] ∎
