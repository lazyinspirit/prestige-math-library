---
id: thm-adjoint-kernel-and-range-orthogonality
kind: theorem
title: "$\\ker T^*=(\\operatorname{im}T)^\\perp$ and $\\operatorname{im}T^*=(\\ker T)^\\perp$ in finite dimension"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-adjoint-of-a-linear-map-between-inner-product-spaces, prop-adjoint-algebra, cor-double-orthogonal-complement-and-dimension, def-orthogonal-complement]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., result 7.6'
      url: 'https://linear.axler.net/LADR4e.pdf'
    - title: 'Sergei Treil, Linear Algebra Done Wrong, Theorem 5.5.1'
      url: 'https://www.math.brown.edu/streil/papers/LADW/HTML_2026_04-30/Ch5.html'
pipeline_run: null
---

## Statement

For a linear map $T:V\to W$ between finite-dimensional inner product spaces,

$$\ker T^*=(\operatorname{im}T)^\perp,\qquad \operatorname{im}T^*=(\ker T)^\perp.$$

Equivalently, $\ker T=(\operatorname{im}T^*)^\perp$ and $\operatorname{im}T=(\ker T^*)^\perp$.

## Facts & Assumptions

**Given:** A finite-dimensional linear map $T:V\to W$.

[L1] The adjoint identity is $\langle Tv,w\rangle=\langle v,T^*w\rangle$ for all $v,w$ ([[def-adjoint-of-a-linear-map-between-inner-product-spaces]]).

[L2] Double adjoints satisfy $T^{**}=T$ ([[prop-adjoint-algebra]]).

[L3] In finite dimension, $U^{\perp\perp}=U$ for every subspace $U$ ([[cor-double-orthogonal-complement-and-dimension]]).

[L4] A vector lies in $U^\perp$ exactly when it pairs to zero with every vector of $U$ ([[def-orthogonal-complement]]).

## Proof

**Proof technique:** direct.

1.1 A vector $w\in W$ lies in $\ker T^*$ exactly when $\langle v,T^*w\rangle=0$ for every $v\in V$. By [L1], this is exactly $\langle Tv,w\rangle=0$ for every $v$, hence exactly $w\in(\operatorname{im}T)^\perp$ by [L4]. [L1, L4]

2.1 Apply step 1.1 to $T^*$ and use [L2]: $\ker T=(\operatorname{im}T^*)^\perp$. Taking orthogonal complements and applying [L3] gives $(\ker T)^\perp=\operatorname{im}T^*$. [step 1.1, L2, L3]

3.1 Taking orthogonal complements in step 1.1 and using [L3] also gives $\operatorname{im}T=(\ker T^*)^\perp$. [step 1.1, L3] ∎
