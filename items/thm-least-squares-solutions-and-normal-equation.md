---
id: thm-least-squares-solutions-and-normal-equation
kind: theorem
title: "For a linear map $T:V\\to W$ between finite-dimensional inner-product spaces, $x$ minimises $\\lVert Tx-b\\rVert$ if and only if $T^*(Tx-b)=0$, equivalently $T^*Tx=T^*b$; minimisers exist and any two differ by an element of $\\ker T$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-orthogonal-projection-is-the-unique-nearest-point, def-adjoint-of-a-linear-map-between-inner-product-spaces, thm-adjoint-kernel-and-range-orthogonality]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Sergei Treil, Linear Algebra Done Wrong, §5.4.1'
      url: 'https://www.math.brown.edu/streil/papers/LADW/HTML_2026_04-30/Ch5.html'
pipeline_run: null
---

## Statement

Let $T:V\to W$ be a linear map between finite-dimensional inner product spaces and let $b\in W$. A vector $x\in V$ minimises $\lVert Tx-b\rVert$ if and only if

$$T^*(Tx-b)=0,$$

equivalently $T^*Tx=T^*b$. Minimisers exist, and if $x_0$ is one minimiser, then the full set of minimisers is $x_0+\ker T$.

## Facts & Assumptions

**Given:** A finite-dimensional map $T:V\to W$ and $b\in W$.

[L1] Orthogonal projection onto a finite-dimensional subspace is its unique nearest point ([[thm-orthogonal-projection-is-the-unique-nearest-point]]).

[L2] The adjoint is defined by $\langle Tv,w\rangle=\langle v,T^*w\rangle$ ([[def-adjoint-of-a-linear-map-between-inner-product-spaces]]).

[L3] The identity $\ker T^*=(\operatorname{im}T)^\perp$ holds in finite dimension ([[thm-adjoint-kernel-and-range-orthogonality]]).

## Proof

**Proof technique:** direct.

1.1 The subspace $\operatorname{im}T$ has the unique nearest point $P_{\operatorname{im}T}b$ to $b$ by [L1]. Choose $x_0$ with $Tx_0=P_{\operatorname{im}T}b$. Thus a minimiser exists. [L1, choose]

2.1 A vector $x$ is a minimiser exactly when $Tx=P_{\operatorname{im}T}b$, which by orthogonal projection is exactly when $b-Tx\in(\operatorname{im}T)^\perp$. By [L3], this is exactly $T^*(b-Tx)=0$. [step 1.1, L1, L3]

3.1 Linearity turns the last equation into $T^*Tx=T^*b$, equivalently $T^*(Tx-b)=0$. [step 2.1, L2, algebra]

4.1 If $x$ and $x_0$ are minimisers, uniqueness of the nearest image point gives $Tx=Tx_0$, so $x-x_0\in\ker T$. Conversely, adding any element of $\ker T$ leaves the image and residual unchanged. Hence the minimisers are exactly $x_0+\ker T$. [step 1.1, step 2.1] ∎
