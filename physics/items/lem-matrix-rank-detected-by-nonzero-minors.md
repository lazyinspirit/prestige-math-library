---
id: lem-matrix-rank-detected-by-nonzero-minors
kind: lemma
title: 'A matrix has rank at least $r$ exactly when it has a nonzero $r$-rowed minor'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-submatrix-minors-of-a-rectangular-matrix, def-row-space-column-space-nullspace-and-matrix-ranks, thm-row-rank-equals-column-rank, cor-matrix-rank-equals-the-rank-of-its-linear-map, thm-invertible-matrix-theorem, thm-real-square-matrix-invertible-iff-determinant-nonzero, def-linear-independence]
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
    - title: 'J. M. Lee, Introduction to Smooth Manifolds, Theorem 7.13'
      url: 'https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf'
    - title: 'L. W. Tu, An Introduction to Manifolds, Section 11.1'
      url: 'https://www.math.toronto.edu/~jeffrey/matd67/tu.pdf'
pipeline_run: null
---

## Statement

Let $A\in M_{m\times n}(\mathbb R)$ and let $1\le r\le\min\{m,n\}$. Then $\operatorname{rank}A\ge r$ if and only if some $r$-rowed minor of $A$ is nonzero ([[def-submatrix-minors-of-a-rectangular-matrix]]). Equivalently, the rank of $A$ is the largest positive size of a nonzero minor when $A\ne0$, and it is $0$ when every entry is zero ([[cor-matrix-rank-equals-the-rank-of-its-linear-map]]).

## Facts & Assumptions

**Given:** A real $m\times n$ matrix $A$ and a natural $r$ with $1\le r\le\min\{m,n\}$.

[L1] The rank of a matrix is the dimension of its column space, because row rank equals column rank ([[def-row-space-column-space-nullspace-and-matrix-ranks]], [[thm-row-rank-equals-column-rank]]); a list is independent exactly when only the zero coefficient list has zero linear combination ([[def-linear-independence]]).

[L2] A real $r\times r$ matrix has rank $r$ exactly when it is invertible, and it is invertible exactly when its determinant is nonzero ([[thm-invertible-matrix-theorem]], [[thm-real-square-matrix-invertible-iff-determinant-nonzero]]).

## Proof

**Proof technique:** direct.

1.1 Suppose first that the $(I,J)$-minor is nonzero, and write $B=A[I,J]$ for the corresponding $r\times r$ submatrix. [given]

1.2 Conversely, suppose $\operatorname{rank}A\ge r$. Choose $r$ independent columns and form the resulting $m\times r$ matrix $C$. Its column rank and hence its row rank are $r$, so its rows span $\mathbb R^r$ and contain $r$ independent rows. [given, L1, choose]

2.1 By [L2], $B$ is invertible. If a linear combination of the $r$ columns of $A$ indexed by $J$ vanishes, restricting that equality to the rows in $I$ gives $Bc=0$, hence $c=0$. Those columns are independent, so $\operatorname{rank}A\ge r$. [step 1.1, L1, L2]

3.1 The $r\times r$ submatrix determined by those columns and rows has rank $r$, so [L2] makes its determinant nonzero. This is an $r$-rowed minor of $A$, proving the converse and the equivalence. [step 1.2, L2] ∎
