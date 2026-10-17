---
id: alg-sparse-cholesky-with-invalid-pivot-status
kind: algorithm
title: Ordered sparse Cholesky with explicit pivot and range statuses
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-hermitian-structural-graph-adapter
  - lem-hermitian-schur-support-is-contained-in-structural-fill
  - def-cholesky-factorisation-with-positive-diagonal
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Jennifer Scott and Miroslav Tůma, Algorithms for Sparse Linear Systems, Chapters 4–5"
      url: "https://library.oapen.org/bitstream/20.500.12657/62987/1/978-3-031-25820-6.pdf"
    - title: "Timothy A. Davis, Siva Rajamanickam, and Wissam M. Sid-Lakhdar, A survey of direct methods for sparse linear systems, §§4–5"
      url: "https://people.engr.tamu.edu/davis/publications_files/survey_tech_report.pdf"
---

## Definition

Input a Hermitian positive-definite $A\in\mathbb C^{n\times n}$ in the convention of [[def-cholesky-factorisation-with-positive-diagonal]], its Hermitian structural graph from [[def-hermitian-structural-graph-adapter]], and an ordering $\pi=(v_0,\ldots,v_{n-1})$. Use the operation model of [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]. Let $P$ be the permutation matrix whose row $j$ is row $v_j$ of $I_n$, so the ordered matrix is $B=PAP^*$ and $B_{ij}=A_{v_i v_j}$. Relabel the filled graph on the original vertices by positions: $\{i,j\}\in E^+_\pi$ exactly when $\{v_i,v_j\}$ is an edge of the filled graph. In every displayed sum, accumulate in increasing $k$ from left to right.

Preallocate only the diagonal and lower-triangular positions permitted by $E^+_\pi$. The support guarantee for complex Hermitian Schur complements is proved in [[lem-hermitian-schur-support-is-contained-in-structural-fill]]. Initialize those positions from the lower triangle of $B$, using zero where a position is not present in the original pattern. For $j=0,\ldots,n-1$, perform these instructions:

1. Compute $d_j=B_{jj}-\sum_{k<j}l_{jk}\overline{l_{jk}}$ using only already computed entries, with an empty sum equal to zero. If an operation reports range failure, return **range-failure**$(j)$. If $d_j$ is not a finite positive real number, return **invalid-pivot**$(j,d_j)$.
2. Set $l_{jj}=\sqrt{d_j}$. If the square root is not finite and positive, return **range-failure**$(j)$.
3. For each $i>j$ such that $\{i,j\}\in E^+_\pi$, compute
$$l_{ij}=\frac{B_{ij}-\sum_{k<j}l_{ik}\overline{l_{jk}}}{l_{jj}}.$$
If an operation reports range failure, return **range-failure**$(j)$. Set structurally absent entries to zero.

If all columns finish, return **success**$(P,L)$. In exact arithmetic, the intended factor convention is $PAP^*=LL^*$ with $L$ lower triangular and positive real diagonal. The finite-arithmetic procedure makes no claim that every positive-definite input returns success: a rounded pivot can fail the stated test.
