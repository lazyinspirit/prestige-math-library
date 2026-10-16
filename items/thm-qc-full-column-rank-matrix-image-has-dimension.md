---
id: thm-qc-full-column-rank-matrix-image-has-dimension
kind: theorem
title: A full-column-rank matrix has image dimension equal to its number of columns
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps: [def-linear-map, def-linear-subspace, def-matrix-space, def-matrix-product-and-identity-matrix, lem-standard-basis-of-f-n, thm-rank-nullity]
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
    - title: Richard Cleve, Quantum Information Processing course notes, §37.1.2
      url: https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf
    - title: John Preskill, Quantum Computation, Chapter 7, §7.6
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
---

## Statement

Let $F$ be a field, let $n,k\in\mathbb N$, and let $G\in M_{n\times k}(F)$. Regard $G$ as the linear map $T_G:F^k\to F^n$, $x\mapsto Gx$, using column vectors. If the columns of $G$ are linearly independent, then $\operatorname{im}T_G$ is a $k$-dimensional linear subspace of $F^n$. This includes $k=0$ and $n=0$.

## Facts & Assumptions

**Given:** A field $F$, natural numbers $n,k$, a matrix $G\in M_{n\times k}(F)$ with linearly independent columns, and the associated column-vector map $T_G(x)=Gx$.

[F1] [[lem-standard-basis-of-f-n]]: The standard vectors form an ordered basis of $F^m$, including the empty basis when $m=0$, and $\dim_F F^m=m$.

[F2] [[def-matrix-product-and-identity-matrix]]: Matrix multiplication is defined entrywise by finite sums, including the empty-sum case.

[F3] [[def-linear-map]]: A map between $F$-vector spaces is linear when it preserves all two-term linear combinations.

[F4] [[def-linear-subspace]]: A subset containing zero and closed under addition and scalar multiplication is a linear subspace.

[F5] [[thm-rank-nullity]]: If $T:V\to W$ is linear and $V$ is finite-dimensional, then $\dim_F V=\dim_F\ker T+\dim_F\operatorname{im}T$.

## Proof

1.1 For $x,y\in F^k$ and $a,b\in F$, the entry formula for matrix multiplication gives $G(ax+by)=aGx+bGy$, so $T_G$ is linear by [F2] and [F3]. It sends zero to zero and its image is closed under linear combinations, hence its image is a subspace by [F4]; these calculations also cover empty coordinate sets. [F2, F3, F4, given]

1.2 If $x\in\ker T_G$, then $\sum_{j<k}x_j g_j=0$, where $g_j$ is column $j$ of $G$. Independence of the columns forces every $x_j=0$, so $\ker T_G=\{0\}$. For $k=0$, $F^0=\{0\}$ and the same conclusion holds. [given, algebra]

2.1 By [F1], $\dim_F F^k=k$. Applying [F5] to [step 1.1] and [step 1.2] gives $\dim_F\operatorname{im}T_G=k$. Since the image of $x\mapsto Gx$ is the span of the columns, it is the asserted subspace. [F1, F5, step 1.1, step 1.2] ∎

## Remarks

- No Choice axiom is used. The zero-column case is an empty matrix map from the zero space.
