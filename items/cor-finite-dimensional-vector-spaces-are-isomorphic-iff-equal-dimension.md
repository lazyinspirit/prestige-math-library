---
id: cor-finite-dimensional-vector-spaces-are-isomorphic-iff-equal-dimension
kind: corollary
title: 'Two finite-dimensional vector spaces over $F$ are linearly isomorphic if and only if they have the same dimension'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-linear-isomorphism-and-invertible-linear-map, def-dimension,
       thm-unique-coordinates-with-respect-to-an-ordered-basis]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'S. Schiavone, MIT 18.700 Day 9, Theorem 22'
      url: 'https://math.mit.edu/~sschiavo/18-700/Lectures/LessonPlan9.pdf'
pipeline_run: null
---

## Statement

Two finite-dimensional vector spaces over the same field $F$ are linearly
isomorphic if and only if they have the same dimension.

## Facts & Assumptions

**Given:** Finite-dimensional $F$-vector spaces $V,W$.

[L1] A linear isomorphism has a linear inverse, and finite dimension is the size of a finite basis ([[def-linear-isomorphism-and-invertible-linear-map]], [[def-dimension]]).

## Proof

**Proof technique:** direct.

1.1 If $T:V\to W$ is an isomorphism and $(b_j)_{j<n}$ is a basis of $V$, then $(T(b_j))_{j<n}$ is independent because applying $T^{-1}$ to a vanishing linear combination makes every coefficient zero, and it spans because every $w$ equals $T(v)$ and $v$ expands in the $b_j$. Thus it is a basis of $W$, so the dimensions agree. [given, L1]

2.1 Conversely, if the dimensions agree, choose ordered bases $(b_j)_{j<n}$ of $V$ and $(c_j)_{j<n}$ of $W$ and define $T(\sum_jx_jb_j)=\sum_jx_jc_j$. Unique coordinates make this a linear map with $T(b_j)=c_j$. [step 1.1, L1]

3.1 Defining $S(\sum_jy_jc_j)=\sum_jy_jb_j$ gives a linear inverse to $T$. For $n=0$, both bases are empty and both spaces are zero, so the same formulas give the unique isomorphism. [step 2.1, L1] ∎
