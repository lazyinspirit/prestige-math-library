---
id: lem-mprk22-1-positive-tube-local-error-and-stability
kind: lemma
title: "MPRK22(1) has a uniform second-order defect and one-step bound on positive tubes"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-mprk22-1
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
  - cor-taylor-lagrange-and-cauchy-remainders
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice principle is used; the local expansions and bounds are finite-dimensional."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Stefan Kopecz and Andreas Meister, On order conditions for modified Patankar-Runge-Kutta schemes, §3.2"
      url: "https://arxiv.org/pdf/1702.04589"
    - title: "Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I: Nonstiff Problems, Chapter III"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
verification:
  precheck: pass
---

## Statement

Let $F$ be the vector field of a finite conservative PDS [[def-finite-conservative-production-destruction-system]] on a bounded open convex set $U\subset\Omega\cap\mathbb R_{>0}^m$ with $\overline U\subset\mathbb R_{>0}^m$. Assume the transfer rates are $C^2$ on an open neighborhood of $\overline U$, with derivatives through order two bounded there. Let $\Psi_h(y)$ be [[alg-mprk22-1]]. For sufficiently small $h>0$, there are constants $C,L,h_0>0$ such that:

1. for every exact solution segment in a compact subset of $U$, the exact-start defect satisfies $\|\Psi_h(y(t))-y(t+h)\|_2\le Ch^3$; and
2. for all $u,v\in U$, $\|\Psi_h(u)-\Psi_h(v)\|_2\le(1+Lh)\|u-v\|_2$.

The local order-two estimate requires the positive lower bound on the stage denominators and the stated smoothness. Positivity and conservation for every $h>0$ are separate preservation properties and are not used to claim the local error order.

## Facts & Assumptions

**Given:** A finite conservative PDS, the stated $C^2$ positive-state domain, an exact solution segment in the tube, and a sufficiently small step size.

[F1] [[def-finite-conservative-production-destruction-system]]: $F_i=\sum_j(p_{ij}-d_{ij})$, $p_{ij}=d_{ji}\ge0$, and $p_{ii}=d_{ii}=0$.

[F2] [[alg-modified-patankar-euler]]: with $\sigma_i=y_i$, the first stage is $z=(I-hA(y))^{-1}y$, where $A(y)y=F(y)$.

[F3] [[alg-mprk22-1]]: the final matrix has off-diagonal coefficients $(p_{ij}(y)+p_{ij}(z))/(2z_j)$, zero column sums before subtracting from $I$, and update $\Psi_h(y)=(I-hB(y,z))^{-1}y$.

[F4] [[lem-strict-column-dominance-implies-nonnegative-inverse]]: each stage/final matrix with positive declared denominators is invertible with nonnegative inverse, and its inverse maps a strictly positive right-hand side to a strictly positive solution.

[F5] [[def-first-order-ode-initial-value-problem-and-solution]]: an exact trajectory satisfies $y'=F(y)$.

[F6] [[def-higher-derivatives-and-smoothness]], [[thm-chain-rule-for-total-derivatives]], and [[thm-algebra-of-derivatives]]: $C^2$ transfer functions and the ODE imply that the exact solution is $C^3$ on the tube, with $y''=DF(y)F(y)$ and bounded third derivative.

[F7] [[thm-multivariable-taylor-formula-with-lagrange-remainder]] and [[cor-taylor-lagrange-and-cauchy-remainders]]: the rate vector and exact solution have the Taylor expansions with uniform remainders on the compact tube.

[F8] [[def-one-step-ode-method-local-defect-order-and-stability]]: exact-start defect and one-step stability have the conventions used in this statement.

[F9] [[def-induced-matrix-p-norm]] at $p=2$ and [[thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized]]: the induced Euclidean operator norm is a matrix norm and $\|I\|_2=1$.

[F10] [[thm-mean-value-inequality-for-total-derivatives]]: a uniform derivative bound on a convex open set implies the corresponding Lipschitz bound.

## Proof


1.1 Define $A(y)$ as in [F2]. It is $C^2$ on the positive tube by [F1] and [F6], and $A(y)y=F(y)$. The matrix $I-hA(y)$ is invertible for $h>0$ by [F4] and equals $I$ at $h=0$; its inverse is continuous on the compact set of admitted $(h,y)$ by the adjugate formula, so it is uniformly bounded for small $h$. Since $y>0$, [F4] gives $z=(I-hA(y))^{-1}y>0$, making all stage denominators valid. The identity $(I-hA)^{-1}=I+hA+h^2A^2(I-hA)^{-1}$ now gives $z=y+hF(y)+O(h^2)$ uniformly. [given, F1, F2, F4, F6, algebra]

2.1 Write $B=B(y,z)$ for the final coefficient matrix in [F3]. Its entries are $C^2$ on a compact neighborhood of the admitted $(y,z)$, its columns sum to zero, and direct multiplication using $p_{ij}=d_{ji}$ gives $B(y,z)z=\tfrac12(F(y)+F(z))$. For small $h$, step 1.1 keeps every $z_j$ bounded away from zero, so $B$ and its derivatives are uniformly bounded. Also $B(y,y)=A(y)$; the mean-value theorem on the compact tube and $z-y=O(h)$ give $B(y,z)=A(y)+O(h)$. The final matrix $I-hB$ is invertible by [F4] and its inverse is uniformly bounded by the adjugate formula. Expanding its inverse yields $\Psi_h(y)=y+hB(y,z)y+O(h^2)=y+hF(y)+O(h^2)$. Comparing with step 1.1 gives $\Psi_h(y)-z=O(h^2)$. [F1, F2, F3, F4, step 1.1, algebra]

2.2 The stage and final maps are $C^1$ in $y$ near the compact positive tube: their rates are $C^2$, their denominators stay bounded away from zero, and their matrix inverses are smooth by the adjugate formula and [F4]. For any direction $v$, differentiating $z=y+hA(y)z$ gives $(I-hA)D_yz[v]=v+h(DA(y)[v])z$; boundedness from step 1.1 therefore gives $D_yz[v]=v+O(h)$ uniformly for $\|v\|_2\le1$. [given, F1, F2, F3, F4, F6, step 1.1, algebra]

3.1 Using $\Psi_h-y=hB\Psi_h$, substitute $z$ and use step 2.1 to obtain $\Psi_h-y=hBz+hB(\Psi_h-z)=\tfrac h2(F(y)+F(z))+O(h^3)$. Taylor expansion of $F$ at $y$, together with $z-y=hF(y)+O(h^2)$ from step 1.1, gives $F(z)=F(y)+hDF(y)F(y)+O(h^2)$. Thus $\Psi_h(y)=y+hF(y)+\tfrac{h^2}{2}DF(y)F(y)+O(h^3)$. By [F5]–[F7], the exact solution has the same expansion: $y''=DF(y)F(y)$ and its third derivative is bounded, so the one-variable Taylor remainder applied coordinatewise is $O(h^3)$. Their difference is the asserted uniform exact-start defect in [F8]. [F1, F5, F7, F8, step 1.1, step 2.1, algebra]

3.2 Differentiating $\Psi_h=y+hB(y,z)\Psi_h$ in direction $v$ gives $D_y\Psi_h[v]=(I-hB(y,z))^{-1}(v+h(D_1B(y,z)[v]+D_2B(y,z)[D_yz[v]])\Psi_h)$, with the inverse defined by step 2.1. [F3, F4, F6, step 2.1, step 2.2, algebra]

4.1 Steps 1.1–2.2 give $z=y+O(h)$, $\Psi_h=y+O(h)$, $B(y,z)=A(y)+O(h)$, and $(I-hB)^{-1}=I+hB+O(h^2)$ uniformly. Substitution yields $D_y\Psi_h[v]=v+h(A(y)v+(D_1B(y,y)[v]+D_2B(y,y)[v])y)+o(h)$. Differentiating $B(y,y)y=F(y)$ identifies the coefficient as $DF(y)v$; compactness makes the remainder uniform, so $D_y\Psi_h(y)=I+hDF(y)+hE(h,y)$ with $\sup_{y\in U}\|E(h,y)\|_2\to0$. [F1, F2, F3, F6, step 1.1, step 2.1, step 2.2, step 3.2, algebra]

5.1 Compactness bounds $\|DF(y)\|_2$ uniformly, and step 4.1 makes the $E$ contribution at most $h$ for sufficiently small $h$. The norm properties in [F9] then give $\|D_y\Psi_h(y)\|_2\le1+Lh$ after decreasing $h_0$ and increasing $L$. Applying [F10] on convex $U$ proves $\|\Psi_h(u)-\Psi_h(v)\|_2\le(1+Lh)\|u-v\|_2$. [F9, F10, step 4.1, algebra] ∎
