---
id: lem-modified-patankar-euler-positive-tube-local-error-and-stability
kind: lemma
title: "Modified Patankar Euler has a uniform first-order defect and one-step bound on positive tubes"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-modified-patankar-euler
  - def-finite-conservative-production-destruction-system
  - lem-strict-column-dominance-implies-nonnegative-inverse
  - def-first-order-ode-initial-value-problem-and-solution
  - def-one-step-ode-method-local-defect-order-and-stability
  - def-higher-derivatives-and-smoothness
  - thm-chain-rule-for-total-derivatives
  - thm-algebra-of-derivatives
  - def-euclidean-inner-product
  - def-induced-matrix-p-norm
  - thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized
  - thm-mean-value-inequality-for-total-derivatives
  - thm-multivariable-taylor-formula-with-lagrange-remainder
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice principle is used; all bounds are finite-dimensional and local on the stated tube."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Stefan Kopecz and Andreas Meister, On order conditions for modified Patankar-Runge-Kutta schemes, §§2–3.1"
      url: "https://arxiv.org/pdf/1702.04589"
    - title: "Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I: Nonstiff Problems, Chapter III"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
verification:
  precheck: pass
---

## Statement

Let $F$ be the vector field of a finite conservative PDS [[def-finite-conservative-production-destruction-system]] on a bounded open convex set $U\subset\Omega\cap\mathbb R_{>0}^m$ with $\overline U\subset\mathbb R_{>0}^m$. Suppose the transfer rates are $C^2$ on an open neighborhood of $\overline U$, and their derivatives through order two are bounded there. For $y\in U$, let $\Phi_h(y)$ be [[alg-modified-patankar-euler]] with the standard denominators $\sigma_i=y_i$. Then there are constants $C,L,h_0>0$ such that, for $0<h\le h_0$:

1. for every exact solution $y(t)$ whose segment and the method states under consideration remain in a compact subset of $U$, the exact-start local defect satisfies $\|\Phi_h(y(t))-y(t+h)\|_2\le Ch^2$; and
2. for all $u,v\in U$, $\|\Phi_h(u)-\Phi_h(v)\|_2\le(1+Lh)\|u-v\|_2$.

The defect is the method output minus the exact next state and the second inequality is one-step Lipschitz stability in the convention of [[def-one-step-ode-method-local-defect-order-and-stability]]. This result is restricted to a compact positive tube; it does not define the standard ratio formula at zero compartments.

## Facts & Assumptions

**Given:** A finite conservative PDS, the stated $C^2$ positive-state domain and derivative bounds, an exact solution segment and method states in a compact subset of that domain, and $h>0$ sufficiently small.

[F1] [[def-finite-conservative-production-destruction-system]]: $F_i(y)=\sum_j(p_{ij}(y)-d_{ij}(y))$, $p_{ij}=d_{ji}\ge0$, and $p_{ii}=d_{ii}=0$.

[F2] [[alg-modified-patankar-euler]] with $\sigma_i=y_i$ is the linear system $\Phi_h(y)=(I-hA(y))^{-1}y$, where $A_{ij}(y)=p_{ij}(y)/y_j$ for $i\ne j$ and $A_{jj}(y)=-\sum_{i\ne j}p_{ij}(y)/y_j$.

[F3] [[lem-strict-column-dominance-implies-nonnegative-inverse]]: the Patankar matrix $I-hA(y)$ is invertible; its inverse is entrywise nonnegative.

[F4] [[def-one-step-ode-method-local-defect-order-and-stability]]: local defect is the exact-start method output minus the exact next state; uniform local order one means a uniform $O(h^2)$ bound; one-step stability is the stated $(1+Lh)$ Lipschitz bound.

[F5] [[def-higher-derivatives-and-smoothness]]: $C^2$ means that derivatives through order two exist and are continuous.

[F6] [[thm-chain-rule-for-total-derivatives]]: the derivative of a composition is the composition of the total derivatives.

[F7] [[thm-algebra-of-derivatives]]: sums, products, and quotients with nonzero denominators preserve differentiability and obey the corresponding derivative formulas.

[F8] [[def-induced-matrix-p-norm]] at $p=2$: $\|A\|_2=\sup_{\|w\|_2\le1}\|Aw\|_2$ is the Euclidean induced operator norm and is a matrix norm.

[F9] [[thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized]]: $\|I\|_2=1$ and the induced norm is compatible with matrix products.

[F10] [[thm-mean-value-inequality-for-total-derivatives]]: on an open convex set, a uniform derivative operator bound $\|Dg(z)w\|_2\le M\|w\|_2$ implies $\|g(u)-g(v)\|_2\le M\|u-v\|_2$.

[F11] [[thm-multivariable-taylor-formula-with-lagrange-remainder]]: a $C^2$ function on an open convex set has a first-order Taylor expansion with a remainder bounded uniformly by its second-derivative bound on the intervening segment.

## Proof


1.1 Since $U\subset\mathbb R_{>0}^m$, each $y_j$ is nonzero. Define $A(y)$ as in [F2]. Its entries are $C^2$ on $U$ by [F1], [F5]–[F7], since all denominators $y_j$ stay positive. The row equations give $A(y)y=F(y)$: the off-diagonal terms contribute $\sum_{j\ne i}p_{ij}$, and the diagonal term is $-\sum_{j\ne i}d_{ij}$. For column $j$, $\sum_i A_{ij}=0$ because $A_{jj}=-\sum_{i\ne j}A_{ij}$. [given, F1, F2, F5, F6, F7, algebra]

1.2 The off-diagonal entries of $A$ are nonnegative and its diagonal entries are nonpositive. Thus $I-hA(y)$ has positive diagonal, nonpositive off-diagonal entries, and strict column diagonal-dominance margin $1$; [F3] makes it invertible. On $[0,h_0]\times\overline U$, the entries of $I-hA(y)$ and its determinant are continuous and the determinant is nonzero by [F3]. The adjugate formula therefore makes the inverse a smooth matrix-valued function there; compactness gives uniform bounds for the inverse and its derivatives. [given, F1, F3, F5, F7, algebra]

2.1 The matrix identity $(I-hA)^{-1}=I+hA+h^2A^2(I-hA)^{-1}$ yields $\Phi_h(y)=y+hF(y)+h^2G(h,y)$ with $G(h,y):=A(y)^2(I-hA(y))^{-1}y$. Step 1.2 and compactness bound $G$ uniformly. Along the exact solution, [F5]–[F6] give $y''(t)=DF(y(t))F(y(t))$, which is uniformly bounded on the compact tube. Taylor's formula [F11] gives $y(t+h)=y(t)+hF(y(t))+O(h^2)$ uniformly. Subtracting the expansions proves the local-defect estimate in [F4]. [given, F1, F2, F4, F5, F6, F11, step 1.2, algebra]

3.1 The function $G$ in step 2.1 is continuously differentiable in $y$ with uniformly bounded derivative on $\overline U$ by [F5]–[F7] and step 1.2. Differentiating that identity gives $D_y\Phi_h(y)=I+hDF(y)+h^2D_yG(h,y)$. Compactness bounds $\|DF(y)\|_2$ by $L_0$ and $\|D_yG(h,y)\|_2$ by $G_0$. The matrix-norm triangle inequality from [F8] and $\|I\|_2=1$ from [F9] yield $\|D_y\Phi_h(y)\|_2\le1+hL_0+h^2G_0\le1+(L_0+h_0G_0)h$ for $0<h\le h_0$. [given, F5, F7, F8, F9, step 1.2, step 2.1, algebra]

4.1 Apply [F10] to $\Phi_h$ on the convex open set $U$ using the uniform derivative bound from step 3.1. This gives $\|\Phi_h(u)-\Phi_h(v)\|_2\le(1+Lh)\|u-v\|_2$ for every $u,v\in U$, exactly the one-step stability assertion of [F4]. [F4, F10, step 3.1] ∎
