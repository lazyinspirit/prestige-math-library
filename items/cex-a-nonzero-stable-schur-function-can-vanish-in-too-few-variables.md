---
id: cex-a-nonzero-stable-schur-function-can-vanish-in-too-few-variables
kind: counterexample
title: A nonzero stable Schur function can vanish in too few variables
status: draft
origin: pipeline
deps:
  - def-stable-graded-ring-of-symmetric-functions
  - def-partition-young-diagram-and-conjugate-partition
  - def-stable-schur-function-by-bialternants
  - thm-jacobi-trudi-and-dual-jacobi-trudi-identities
  - thm-schur-functions-form-an-orthonormal-integral-basis
  - def-elementary-symmetric-polynomials
  - thm-elementary-and-complete-families-freely-generate-the-stable-ring
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Chapter I §2, equation (2.2), printed pp. 19–20; §3, equations (3.1)–(3.5), printed pp. 40–42
      url: https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf
    - title: Jeremy L. Martin, Lecture Notes on Algebraic Combinatorics, §9.13, printed pp. 204–207
      url: https://jeremymartinmath.github.io/CombinatoricsNotes.pdf
---

## Statement

For every integer $N\ge0$, let $\lambda=(1^{N+1})$ be the partition with
$N+1$ parts equal to $1$. The stable Schur function $s_\lambda$ is nonzero in
$\Lambda$, but its rank-$N$ specialization is zero. Thus a nonzero stable
symmetric function can vanish after specialization to fewer variables than
the length of its indexing partition.

## Facts & Assumptions

**Given:** The stable ring's coordinate projections, the partition convention, the stable Schur and elementary sequences, Jacobi–Trudi, the finite elementary polynomial, and the integral Schur basis.

[F1] Each $\Lambda^d$ is an inverse limit of finite-rank degree-$d$ polynomial spaces, and its rank-$N$ coordinate is specialization to $N$ variables ([[def-stable-graded-ring-of-symmetric-functions]]).

[F2] $\lambda=(1^{N+1})$ is a partition of $N+1$ with length $N+1$; partition size, length, and conjugation use the usual Young-diagram convention ([[def-partition-young-diagram-and-conjugate-partition]]).

[F3] The stable $e_r$ are compatible sequences obtained from the finite elementary polynomials by setting added variables to zero ([[thm-elementary-and-complete-families-freely-generate-the-stable-ring]]).

[F4] In rank $N$, $e_k$ is the sum over $k$-element subsets of $\{1,\ldots,N\}$, and $e_k=0$ when $k>N$ ([[def-elementary-symmetric-polynomials]]).

[F5] The dual Jacobi–Trudi identity expresses $s_\lambda$ as $\det(e_{\lambda'_i-i+j})$ for any allowed determinant size, including the empty-partition convention ([[thm-jacobi-trudi-and-dual-jacobi-trudi-identities]]).

[F6] In every degree, the stable Schur functions indexed by partitions form a $\mathbb Z$-basis of $\Lambda^d$ ([[thm-schur-functions-form-an-orthonormal-integral-basis]]).

[F7] Each $s_\lambda$ is the compatible stable sequence of its finite bialternant polynomials ([[def-stable-schur-function-by-bialternants]]).

## Proof

**Proof technique:** direct.

1.1 Fix $N\ge0$ and take $\lambda=(1^{N+1})$. By [F2] it is a partition of degree $N+1$, and [F7] identifies $s_\lambda$ as its stable Schur element. By [F6], this element is one vector in a $\mathbb Z$-basis of $\Lambda^{N+1}$, so $s_\lambda\ne0$. [F2, F6, F7, algebra]

1.2 The conjugate partition is $\lambda'=(N+1)$, so the dual Jacobi–Trudi identity [F5] with determinant size $c=1$ gives $s_{(1^{N+1})}=e_{N+1}$ in $\Lambda$. [F2, F5, algebra]

1.3 By [F1] and [F3], the rank-$N$ coordinate of this stable $e_{N+1}$ is the finite elementary polynomial $e_{N+1}(x_1,\ldots,x_N)$. [F1, F3, algebra]

2.1 By [F4], this polynomial is a sum indexed by the $(N+1)$-element subsets of an $N$-element set; there are no such subsets, including when $N=0$, so the sum is zero. Thus every stated rank-$N$ specialization vanishes although the stable element is nonzero, and the coordinate projection has a nontrivial kernel. [F1, F4, step 1.2, step 1.3, algebra] ∎
