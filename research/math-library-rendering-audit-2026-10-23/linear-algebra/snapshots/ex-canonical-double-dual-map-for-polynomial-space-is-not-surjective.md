---
id: ex-canonical-double-dual-map-for-polynomial-space-is-not-surjective
kind: example
title: 'For the polynomial space $F[x]$, the canonical map to the algebraic double dual is injective but not surjective'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-canonical-map-to-double-dual-is-surjective-iff-finite-dimensional, def-polynomial-ring-over-a-commutative-ring, thm-dual-family-does-not-span-in-infinite-dimension, lem-linear-functionals-separate-points-from-subspaces]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'K. Conrad, Infinite-Dimensional Dual Spaces'
      url: 'https://kconrad.math.uconn.edu/blurbs/linmultialg/dualspaceinfinite.pdf'
pipeline_run: null
---

## Example

Assume the axiom of choice. For the polynomial vector space $V=F[x]$, the canonical map $J_V:V\to V^{**}$ is injective but not surjective.

## Facts & Assumptions

**Given:** The axiom of choice and a field $F$.

[L1] A polynomial over $F$ is a coefficient sequence with finite support ([[def-polynomial-ring-over-a-commutative-ring]]).

[L2] Under Choice, the canonical map is onto exactly in finite dimension and is always injective ([[thm-canonical-map-to-double-dual-is-surjective-iff-finite-dimensional]]).

[L3] The coordinate functionals of an infinite Hamel basis span a proper subspace of the dual ([[thm-dual-family-does-not-span-in-infinite-dimension]]), and a vector outside a subspace can be separated from it by a functional ([[lem-linear-functionals-separate-points-from-subspaces]]).

## Verification

**Proof technique:** explicit double-dual witness.

1.1 By [L1], the monomials $1,x,x^2,\ldots$ form an infinite Hamel basis. Let $\delta_n$ extract the coefficient of $x^n$, and put $\Phi=\operatorname{span}\{\delta_n:n\ge0\}$. Define $\phi(\sum_na_nx^n)=\sum_na_n$; finite support makes this a functional. Every member of $\Phi$ vanishes on all but finitely many monomials, whereas $\phi(x^n)=1$ for every $n$, so $\phi\notin\Phi$. [L1, L3, algebra]

2.1 Apply the separation statement in [L3] inside $V^*$ to choose $L\in V^{**}$ with $L|_\Phi=0$ and $L(\phi)=1$. If $L=J_V(p)$, then $0=L(\delta_n)=\delta_n(p)$ for every $n$, so all coefficients of $p$ vanish and $p=0$; this would give $L=0$, contradicting $L(\phi)=1$. [step 1.1, L3, choose]

3.1 Thus $L$ is outside the image, while injectivity follows from [L2]. This explicitly realizes the finite-dimensional boundary in [L2]. [step 2.1, L2] ∎
