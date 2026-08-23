---
id: lem-constant-rank-source-coordinate-map-is-locally-invertible
kind: lemma
title: 'A nonzero rank minor supplies the source coordinates for the constant-rank theorem'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-differential-rank-and-constant-rank, lem-matrix-rank-detected-by-nonzero-minors, thm-euclidean-inverse-function-theorem, thm-higher-regularity-of-local-inverses, thm-real-square-matrix-invertible-iff-determinant-nonzero, def-ck-euclidean-maps-and-diffeomorphisms]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: 'J. M. Lee, Introduction to Smooth Manifolds, proof of Theorem 7.13'
      url: 'https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf'
    - title: 'L. W. Tu, An Introduction to Manifolds, proof of Theorem 11.1'
      url: 'https://www.math.toronto.edu/~jeffrey/matd67/tu.pdf'
pipeline_run: null
---

## Statement

Let $k\ge1$, let $f:U\subseteq\mathbb R^m\to\mathbb R^n$ be $C^k$, and suppose $\operatorname{rank}Df(a)=r$. After permuting source and target coordinates, if $r>0$ the leading $r\times r$ minor of $Df(a)$ is nonzero and
$$\Phi(x)=\bigl(f_0(x),\ldots,f_{r-1}(x),x_r,\ldots,x_{m-1}\bigr)$$
is a local $C^k$ diffeomorphism at $a$. If $r=0$, the same conclusion holds with $\Phi$ equal to the identity map. Empty coordinate blocks are omitted.

## Facts & Assumptions

**Given:** The map $f$, the point $a$, and $r=\operatorname{rank}Df(a)$.

[L1] Positive matrix rank is detected by a nonzero minor ([[lem-matrix-rank-detected-by-nonzero-minors]], [[def-differential-rank-and-constant-rank]]).

[L2] A real square matrix is invertible exactly when its determinant is nonzero; a $C^1$ map between equal-dimensional Euclidean open sets with invertible derivative at a point is a local $C^1$ diffeomorphism there, and a $C^k$ map has a $C^k$ local inverse ([[thm-real-square-matrix-invertible-iff-determinant-nonzero]], [[thm-euclidean-inverse-function-theorem]], [[thm-higher-regularity-of-local-inverses]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

## Proof

**Proof technique:** direct.

1.1 If $r=0$, take $\Phi=\operatorname{id}_U$; it is a $C^k$ diffeomorphism on every open neighbourhood of $a$. [given]

1.2 Suppose $r>0$. By [L1], choose a nonzero $r$-rowed minor and permute coordinates so it is the leading minor. The derivative $D\Phi(a)$ is block triangular with that $r\times r$ block and an identity block of size $m-r$ on its diagonal. [given, L1, choose]

2.1 Its determinant is the nonzero leading minor, including the full-rank case $r=m$ where the identity block is empty. Thus [L2] makes $D\Phi(a)$ invertible and $\Phi$ a local $C^k$ diffeomorphism at $a$. [step 1.2, L2, algebra]

3.1 Steps 1.1 and 2.1 cover every possible rank and give the asserted source coordinates. [step 1.1, step 2.1] ∎
