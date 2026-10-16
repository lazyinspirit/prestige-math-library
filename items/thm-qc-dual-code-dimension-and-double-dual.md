---
id: thm-qc-dual-code-dimension-and-double-dual
kind: theorem
title: Dimension and double-dual identity for finite-field code duals
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 3
deps: [def-dimension, def-linear-map, def-linear-subspace, def-matrix-product-and-identity-matrix, def-matrix-space, def-qc-classical-linear-code-over-finite-field, def-qc-dual-of-a-finite-field-linear-code, def-row-space-column-space-nullspace-and-matrix-ranks, lem-standard-basis-of-f-n, thm-dimension-of-a-linear-subspace, thm-rank-nullity, thm-row-rank-equals-column-rank]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Richard Cleve, Quantum Information Processing course notes, §37.1.1
      url: https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf
    - title: John Preskill, Quantum Computation, Chapter 7, §7.6
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
---

## Statement

Let $F$ be a finite field, $n\in\mathbb N$, and let $D\le F^n$ be a linear subspace ([[def-linear-subspace]]) of dimension $r$. Then $D^\perp$ is a linear subspace of dimension $n-r$, and $(D^\perp)^\perp=D$. In particular this holds for every classical linear code, including $D=\{0\}$ and $D=F^n$ ([[def-qc-classical-linear-code-over-finite-field]]).

## Facts & Assumptions

**Given:** A finite field $F$, $n\in\mathbb N$, a subspace $D\le F^n$ of dimension $r$, and the bilinear dot product of [[def-qc-dual-of-a-finite-field-linear-code]].

[L1] [[def-qc-dual-of-a-finite-field-linear-code]]: $D^\perp$ consists of vectors whose dot product with every vector of $D$ is zero.

[F1] [[def-row-space-column-space-nullspace-and-matrix-ranks]]: The row space is the span of matrix rows, the column space is the span of columns, and the nullspace is $\{x:Ax=0\}$; row and column ranks are their dimensions.

[F2] [[thm-row-rank-equals-column-rank]]: For every finite matrix over a field, its row rank equals its column rank.

[F3] [[def-matrix-product-and-identity-matrix]]: Matrix products are the finite coordinate sums, including empty shapes.

[F4] [[def-linear-map]]: A map between vector spaces over $F$ is linear when it preserves linear combinations.

[F5] [[def-dimension]]: A finite-dimensional vector space has a finite basis, and its dimension is the cardinality of such a basis.

[F6] [[lem-standard-basis-of-f-n]]: $F^n$ has dimension $n$, including $F^0=\{0\}$.

[F7] [[thm-rank-nullity]]: For a linear map with finite-dimensional domain, domain dimension is kernel dimension plus image dimension.

[F8] [[thm-dimension-of-a-linear-subspace]]: A subspace of a finite-dimensional space has the same dimension as its ambient space exactly when it equals that space.

[F9] [[def-linear-subspace]]: A linear subspace contains zero and is closed under addition and scalar multiplication.

## Proof


1.1 Since $\dim_F D=r$, [F5] supplies a basis $d_0,\ldots,d_{r-1}$. Form the $r\times n$ matrix $A$ whose $i$th row is $d_i^T$. Its row space has dimension $r$ by [F1]. The map $T_A:F^n\to F^r$, $y\mapsto Ay$, is linear by [F3] and [F4]; the product formula writes $Ay$ as the linear combination of the columns of $A$ with coefficients $y_j$, so its image is the column space. Hence [F2] gives $\dim\operatorname{im}T_A=r$. This also works for $r=0$, with an empty row list. [L1, F1, F2, F3, F4, F5, F9]

2.1 A vector $y$ belongs to $\ker T_A$ exactly when $d_i\cdot y=0$ for every basis vector $d_i$, which by bilinearity is equivalent to $d\cdot y=0$ for every $d\in D$. Thus $\ker T_A=D^\perp$. Since $T_A$ is linear, this kernel contains zero and is closed under linear combinations, so it is a subspace. By [F6] and [F7], $\dim D^\perp=n-r$. [L1, F3, F4, F6, F7, F9, step 1.1]

3.1 Applying step 1.1 and step 2.1 with $D^\perp$ in place of $D$ gives $\dim(D^\perp)^\perp=n-(n-r)=r$. Symmetry of the dot product gives $D\subseteq(D^\perp)^\perp$. Apply [F8] to this inclusion inside the $r$-dimensional space $(D^\perp)^\perp$; equal dimensions force equality. This also covers $r=0$ and $r=n$. [L1, F5, F6, F7, F8, step 1.1, step 2.1] ∎

## Remarks

The coordinate pairing is nondegenerate over every field because the standard coordinate rows form a basis. No complex conjugation is used, and no choice principle is needed in finite dimension.
