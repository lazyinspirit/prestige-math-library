---
id: thm-matrix-representation-is-a-vector-space-isomorphism
kind: theorem
title: '$T\mapsto[T]_{\mathcal B}^{\mathcal C}$ is a vector-space isomorphism $\mathcal L(V,W)\cong M_{m\times n}(F)$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-linear-maps-form-a-vector-space, def-linear-isomorphism-and-invertible-linear-map,
       def-coordinate-column-and-matrix-of-a-linear-map,
       thm-unique-coordinates-with-respect-to-an-ordered-basis, def-matrix-space]
justified_by: []
aliases: []
landmark: true
short: 'Linear maps are matrices in bases'
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'S. Schiavone, MIT 18.700 Day 9, Proposition 26'
      url: 'https://math.mit.edu/~sschiavo/18-700/Lectures/LessonPlan9.pdf'
pipeline_run: null
---

## Statement

Let $V,W$ be finite-dimensional vector spaces over $F$, with ordered bases
$\mathcal B=(b_j)_{j<n}$ and $\mathcal C=(c_i)_{i<m}$. The map

$$\Phi:\mathcal L(V,W)\to M_{m\times n}(F),\qquad \Phi(T)=[T]_{\mathcal B}^{\mathcal C},$$

is a vector-space isomorphism.

## Facts & Assumptions

**Given:** The finite-dimensional spaces and ordered bases in the Statement.

[L1] $\mathcal L(V,W)$ is a vector space under pointwise operations ([[prop-linear-maps-form-a-vector-space]]).

[L2] An ordered basis gives every vector a unique coordinate list ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]).

[L3] A linear isomorphism is a linear map with a two-sided linear inverse ([[def-linear-isomorphism-and-invertible-linear-map]]).

## Proof

**Proof technique:** direct.

1.1 For every basis vector $b_j$, coordinate uniqueness in [L2] gives $[(S+T)(b_j)]_{\mathcal C}=[S(b_j)]_{\mathcal C}+[T(b_j)]_{\mathcal C}$ and $[(\lambda T)(b_j)]_{\mathcal C}=\lambda[T(b_j)]_{\mathcal C}$, so $\Phi$ is linear column by column. [given, L1, L2]

2.1 If $\Phi(S)=\Phi(T)$, then [L2] gives $S(b_j)=T(b_j)$ for every $j$; linearity and the unique expansion of every vector in $\mathcal B$ give $S=T$, so $\Phi$ is injective. [step 1.1, L1, L2]

3.1 Given $A=(a_{ij})\in M_{m\times n}(F)$, prescribe $T(b_j):=\sum_{i<m}a_{ij}c_i$ and, for the unique expansion $v=\sum_{j<n}x_jb_j$ from [L2], define $T(v):=\sum_{j<n}x_jT(b_j)$. This is well defined and linear, and the $j$-th matrix column is the $j$-th column of $A$; hence $\Phi(T)=A$. Together with steps 1.1 and 2.1, $\Phi$ is a linear bijection. Its set-theoretic inverse is linear: if $A=\Phi(S)$ and $B=\Phi(T)$, then injectivity and linearity give $\Phi^{-1}(A+B)=S+T$ and $\Phi^{-1}(\lambda A)=\lambda S$. Thus $\Phi$ is a linear isomorphism by [L3]. [step 1.1, step 2.1, L1, L2, L3]

4.1 If $n=0$, then $V$ is the zero space and both sides contain only their zero element; if $m=0$, then $W$ and $M_{m\times n}(F)$ are zero spaces and the only map is the zero map. Thus the construction also proves the isomorphism in every zero-dimensional case. [step 3.1, L1, L2, L3] ∎
