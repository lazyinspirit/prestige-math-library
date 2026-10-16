---
id: thm-qc-generator-and-parity-check-matrix-existence
kind: theorem
title: Every finite-field linear code has generator and parity-check matrices
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 5
deps: [def-dimension, def-matrix-product-and-identity-matrix, def-matrix-space, def-qc-classical-linear-code-over-finite-field, def-qc-dual-of-a-finite-field-linear-code, def-qc-generator-and-parity-check-matrices, def-row-space-column-space-nullspace-and-matrix-ranks, thm-qc-dual-code-dimension-and-double-dual]
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

Let $C\le F^n$ have dimension $k$. There are matrices $G\in M_{n\times k}(F)$ and $H\in M_{(n-k)\times n}(F)$ such that the columns of $G$ form a basis of $C$, the rows of $H$ form a basis of $C^\perp$ after transpose identification, $\ker H=C$, and $HG=0$. This includes $k=0$ and $k=n$.

## Facts & Assumptions

**Given:** A finite field $F$, $n\in\mathbb N$, a code $C\le F^n$ of dimension $k$, and the matrix conventions of [[def-qc-generator-and-parity-check-matrices]].

[L1] [[def-qc-classical-linear-code-over-finite-field]]: $C$ is a finite-dimensional linear subspace of $F^n$ with $k=\dim_F C$.

[L2] [[def-qc-dual-of-a-finite-field-linear-code]]: $C^\perp$ is defined using the bilinear dot product $x\cdot y=\sum_j x_jy_j$.

[L3] [[thm-qc-dual-code-dimension-and-double-dual]]: $C^\perp$ is a subspace of dimension $n-k$ and $(C^\perp)^\perp=C$.

[F1] [[def-dimension]]: A finite-dimensional vector space has a finite basis whose size is its dimension.

[F2] [[def-matrix-space]]: An $m\times n$ matrix is a function on the row-column index set, with rows and columns given by its coordinates.

[F3] [[def-matrix-product-and-identity-matrix]]: Matrix multiplication uses the finite coordinate sum; zero-sized shapes use the empty sum.

[F4] [[def-row-space-column-space-nullspace-and-matrix-ranks]]: The row space is the span of the rows and the nullspace is $\{x:Hx=0\}$.

## Proof


1.1 By [F1], choose a basis $c_0,\ldots,c_{k-1}$ of $C$; making these vectors the columns of $G$ gives shape $n\times k$, independent columns, and column span exactly $C$. If $k=0$, the basis and column list are empty and $G$ is the unique $n\times0$ matrix. [L1, F1, F2, choose]

1.2 By [L3], $C^\perp$ has dimension $n-k$; [F1] supplies a basis $d_0,\ldots,d_{n-k-1}$. Place their transposes as the rows of $H$. These rows are independent and span the row space corresponding to $C^\perp$. If $k=n$, this is the empty row list and $H$ has shape $0\times n$. [F1, L3, F2, choose]

2.1 Every row of $H$ is orthogonal to every column of $G$, by [L2] and [L3]. Hence every entry of $HG$ is zero by [F3], so $HG=0$ with shape $(n-k)\times k$, including when a dimension is zero. [L2, L3, F3, step 1.1, step 1.2]

3.1 By [F4], $Hx=0$ exactly when every row of $H$ has zero dot product with $x$. The transposed rows span $C^\perp$ by step 1.2, so $\ker H=(C^\perp)^\perp=C$ by [L3]. Thus $H$ is a parity-check matrix and $G$ is a generator matrix. [F4, L3, step 1.2, step 2.1] ∎

## Remarks

The choices in steps 1.1 and 1.2 are choices of one finite basis at a time; the finite-dimensional basis theorem used here is choice-free. For $k=0$, $H$ can be chosen as the identity matrix of size $n$; for $k=n$, $G$ can be chosen as the identity and $H$ is the unique $0\times n$ matrix.
