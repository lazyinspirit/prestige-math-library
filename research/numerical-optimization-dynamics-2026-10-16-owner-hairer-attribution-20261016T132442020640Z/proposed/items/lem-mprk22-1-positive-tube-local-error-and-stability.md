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
  - def-ck-and-multi-index-notation-in-several-variables
  - thm-continuous-partial-derivatives-imply-total-differentiability
  - thm-chain-rule-for-total-derivatives
  - thm-chain-sum-product-and-composition-rules-for-banach-derivatives
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
    - title: "Ernst Hairer, course notes, Chapter III: Équations Différentielles Ordinaires"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
verification:
  precheck: pass
---

## Statement

Let $F$ be the vector field of a finite conservative PDS [[def-finite-conservative-production-destruction-system]] on a bounded open convex set $U\subset\Omega\cap\mathbb R_{>0}^m$ with $\overline U\subset\mathbb R_{>0}^m$. Assume there is an open set $V$ with $\overline U\subset V\subset\Omega\cap\mathbb R_{>0}^m$ on which the transfer rates are multivariable $C^2$, with derivatives through order two bounded there. Let $\Psi_h(y)$ be [[alg-mprk22-1]]. For sufficiently small $h>0$, there are constants $C,L,h_0>0$ such that:

1. for every exact solution segment in a compact subset of $U$, the exact-start defect satisfies $\|\Psi_h(y(t))-y(t+h)\|_2\le Ch^3$; and
2. for all $u,v\in U$, $\|\Psi_h(u)-\Psi_h(v)\|_2\le(1+Lh)\|u-v\|_2$.

The local order-two estimate requires the positive lower bound on the stage denominators and the stated smoothness. Positivity and conservation for every $h>0$ are separate preservation properties and are not used to claim the local error order.

## Facts & Assumptions

**Given:** A finite conservative PDS, the stated multivariable $C^2$ rate data on $V\subset\Omega\cap\mathbb R_{>0}^m$, an exact solution segment in the tube, and a sufficiently small step size.

[F1] [[def-finite-conservative-production-destruction-system]]: $F_i=\sum_j(p_{ij}-d_{ij})$, $p_{ij}=d_{ji}\ge0$, and $p_{ii}=d_{ii}=0$.

[F2] [[alg-modified-patankar-euler]]: with $\sigma_i=y_i$, the first stage is $z=(I-hA(y))^{-1}y$, where $A(y)y=F(y)$.

[F3] [[alg-mprk22-1]]: the final matrix has off-diagonal coefficients $(p_{ij}(y)+p_{ij}(z))/(2z_j)$, zero column sums before subtracting from $I$, and update $\Psi_h(y)=(I-hB(y,z))^{-1}y$.

[F4] [[lem-strict-column-dominance-implies-nonnegative-inverse]]: each stage/final matrix with positive declared denominators is invertible with nonnegative inverse, and its inverse maps a strictly positive right-hand side to a strictly positive solution.

[F5] [[def-first-order-ode-initial-value-problem-and-solution]]: an exact trajectory satisfies $y'=F(y)$.

[F6] [[def-ck-and-multi-index-notation-in-several-variables]] and [[thm-continuous-partial-derivatives-imply-total-differentiability]]: continuous coordinate partials give total derivatives; applying the theorem to first partials also supplies the second total derivatives needed here.

[F7] [[thm-chain-rule-for-total-derivatives]] and [[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]]: compositions and bounded-bilinear products obey their total-derivative rules, including when applied to derivatives.

[F8] [[thm-multivariable-taylor-formula-with-lagrange-remainder]] and [[cor-taylor-lagrange-and-cauchy-remainders]]: the rate vector and exact solution have the Taylor expansions with uniform remainders on the compact tube.

[F9] [[def-one-step-ode-method-local-defect-order-and-stability]]: exact-start defect and one-step stability have the conventions used in this statement.

[F10] [[def-induced-matrix-p-norm]] at $p=2$ and [[thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized]]: the induced Euclidean operator norm is a matrix norm and $\|I\|_2=1$.

[F11] [[thm-mean-value-inequality-for-total-derivatives]]: a uniform derivative bound on a convex open set implies the corresponding Lipschitz bound.

## Proof


1.1 Define $A(y)$ as in [F2]. On $U$, the coordinate reciprocals $y_j^{-1}$ have continuous partials $\partial_k(y_j^{-1})=-\delta_{jk}y_j^{-2}$ and $\partial_\ell\partial_k(y_j^{-1})=2\delta_{jk}\delta_{\ell j}y_j^{-3}$, as follows from the scalar reciprocal difference quotients on $\mathbb R\setminus\{0\}$; the product rule [F7] then makes every entry of $A$ $C^2$ from the rate data [F6]. By the continuous-partials theorem [F6], these entries have continuous total derivatives through order two. Direct multiplication gives $A(y)y=F(y)$. The matrix $I-hA(y)$ is invertible for $h>0$ by [F4] and equals $I$ at $h=0$; its determinant and cofactors are $C^2$ finite sums of products, and its determinant is nonzero, so the adjugate formula and the scalar reciprocal calculation make its inverse $C^2$ on the compact set of admitted $(h,y)$. It is uniformly bounded there for small $h$. Since $y>0$, [F4] gives $z=(I-hA(y))^{-1}y>0$. The identity $(I-hA)^{-1}=I+hA+h^2A^2(I-hA)^{-1}$ now gives $z=y+hF(y)+O(h^2)$ uniformly; in particular $z-y=O(h)$, so after decreasing $h_0$ we have $z\in V\subset\Omega$ uniformly for $y\in U$. Thus all stage denominators and the final rate evaluations are valid. [given, F1, F2, F4, F6, F7, algebra]

2.1 Write $B=B(y,z)$ for the final coefficient matrix in [F3]. Its entries are $C^2$ on the compact region of pairs produced inside $V$ by step 1.1: the rates are $C^2$, the stage map is $C^2$, and each reciprocal $z_j^{-1}$ has the same coordinate derivative formulas as in step 1.1. Its columns sum to zero, and direct multiplication using $p_{ij}=d_{ji}$ gives $B(y,z)z=\tfrac12(F(y)+F(z))$. For small $h$, step 1.1 keeps every $z_j$ bounded away from zero, so $B$ and its first derivatives are uniformly bounded. Also $B(y,y)=A(y)$; the mean-value theorem on the compact tube and $z-y=O(h)$ give $B(y,z)=A(y)+O(h)$. The final matrix $I-hB$ is invertible by [F4] and its inverse is uniformly bounded by the adjugate formula. Expanding its inverse yields $\Psi_h(y)=y+hB(y,z)y+O(h^2)=y+hF(y)+O(h^2)$. Comparing with step 1.1 gives $\Psi_h(y)-z=O(h^2)$. [F1, F2, F3, F4, F6, F7, step 1.1, algebra]

2.2 The stage and final maps are $C^1$ in $y$ near the compact positive tube: their rates are $C^2$, their denominators stay bounded away from zero, and their matrix inverses are $C^2$ by the adjugate formula and the reciprocal calculation in steps 1.1–2.1. For any direction $v$, differentiating $z=y+hA(y)z$ gives $(I-hA)D_yz[v]=v+h(DA(y)[v])z$; boundedness from step 1.1 therefore gives $D_yz[v]=v+O(h)$ uniformly for $\|v\|_2\le1$. [given, F1, F2, F3, F4, F6, F7, step 1.1, algebra]

3.1 Using $\Psi_h-y=hB\Psi_h$, substitute $z$ and use step 2.1 to obtain $\Psi_h-y=hBz+hB(\Psi_h-z)=\tfrac h2(F(y)+F(z))+O(h^3)$. Taylor expansion of $F$ at $y$, together with $z-y=hF(y)+O(h^2)$ from step 1.1, gives $F(z)=F(y)+hDF(y)F(y)+O(h^2)$. Thus $\Psi_h(y)=y+hF(y)+\tfrac{h^2}{2}DF(y)F(y)+O(h^3)$. By [F5]–[F7], the exact solution has the same expansion: $y''=DF(y)F(y)$ and its third derivative is bounded, so the one-variable Taylor remainder applied coordinatewise is $O(h^3)$. Their difference is the asserted uniform exact-start defect in [F9]. [F1, F5, F6, F7, F8, F9, step 1.1, step 2.1, algebra]

3.2 Differentiating $\Psi_h=y+hB(y,z)\Psi_h$ in direction $v$ gives $D_y\Psi_h[v]=(I-hB(y,z))^{-1}(v+h(D_1B(y,z)[v]+D_2B(y,z)[D_yz[v]])\Psi_h)$, with the inverse defined by step 2.1. [F3, F4, F6, F7, step 2.1, step 2.2, algebra]

4.1 Steps 1.1–2.2 give $z=y+O(h)$, $\Psi_h=y+O(h)$, $B(y,z)=A(y)+O(h)$, and $(I-hB)^{-1}=I+hB+O(h^2)$ uniformly. Substitution yields $D_y\Psi_h[v]=v+h(A(y)v+(D_1B(y,y)[v]+D_2B(y,y)[v])y)+o(h)$. Differentiating $B(y,y)y=F(y)$ with the chain and product rules identifies the coefficient as $DF(y)v$; compactness makes the remainder uniform, so $D_y\Psi_h(y)=I+hDF(y)+hE(h,y)$ with $\sup_{y\in U}\|E(h,y)\|_2\to0$. [F1, F2, F3, F6, F7, step 1.1, step 2.1, step 2.2, step 3.2, algebra]

5.1 Compactness bounds $\|DF(y)\|_2$ uniformly, and step 4.1 makes the $E$ contribution at most $h$ for sufficiently small $h$. The norm properties in [F10] then give $\|D_y\Psi_h(y)\|_2\le1+Lh$ after decreasing $h_0$ and increasing $L$. Applying [F11] on convex $U$ proves $\|\Psi_h(u)-\Psi_h(v)\|_2\le(1+Lh)\|u-v\|_2$. [F10, F11, step 4.1, algebra] ∎
