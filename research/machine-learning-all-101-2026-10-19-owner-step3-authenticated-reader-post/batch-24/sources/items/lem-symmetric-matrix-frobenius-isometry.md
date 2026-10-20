---
id: lem-symmetric-matrix-frobenius-isometry
kind: lemma
title: "Symmetric matrices are Euclidean under the Frobenius norm"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: [def-frobenius-matrix-norm, def-euclidean-inner-product, thm-of-square-roots]
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Nicholas J. Higham, Computing a Nearest Symmetric Positive Semidefinite Matrix, Linear Algebra and its Applications 103 (1988), 103–118"
      url: "https://nhigham.com/wp-content/uploads/2023/10/high88d.pdf"
    - title: "David Bindel, Matrix Computations, CS 6210, Matrix Nearness Problems, Fall 2022"
      url: "https://www.cs.cornell.edu/courses/cs6210/2022fa/lec/2022-10-06.pdf"
aliases: []
landmark: false
proof_strategy: direct
---

## Statement

Let $d\ge1$, let $\mathbb S^d$ be the real vector space of symmetric $d\times d$ matrices, and set $m=d(d+1)/2$. Equip $\mathbb S^d$ with the Frobenius inner product $\langle A,B\rangle_F:=\sum_{i=1}^{d}\sum_{j=1}^{d}A_{ij}B_{ij}$ and its induced norm. Define $\operatorname{svec}:\mathbb S^d\to\mathbb R^m$ by listing $A_{11},\ldots,A_{dd}$ first, followed by $\sqrt2 A_{ij}$ for $1\le i<j\le d$ in lexicographic order. Then $\operatorname{svec}$ is a linear bijection and preserves inner products and norms; in particular, $\|\operatorname{svec}(A)-\operatorname{svec}(B)\|_2=\|A-B\|_F$ for all $A,B\in\mathbb S^d$.

## Statement references

[[def-frobenius-matrix-norm|Entry-sum definition of the Frobenius norm]]

[[def-euclidean-inner-product|Euclidean inner product on real coordinate space]]

[[thm-of-square-roots|Positive square root used in the off-diagonal coordinates]]

[Higham, §2, Theorem 2.1, printed pp. 105–106](https://nhigham.com/wp-content/uploads/2023/10/high88d.pdf)

[Bindel, §2, PDF pp. 1–2](https://www.cs.cornell.edu/courses/cs6210/2022fa/lec/2022-10-06.pdf)

## Facts & Assumptions

**Given:** An integer $d\ge1$, symmetric real matrices $A,B\in\mathbb S^d$, and $m=d(d+1)/2$.

[F1] For a real matrix, the squared Frobenius norm is the sum of the squares of all entries ([[def-frobenius-matrix-norm]]).

[F2] The Euclidean inner product on $\mathbb R^m$ is the coordinate dot product, with norm the square root of the sum of coordinate squares ([[def-euclidean-inner-product]]).

[F3] Every nonnegative real number has a unique nonnegative square root, so $\sqrt2>0$ and division by $\sqrt2$ is defined ([[thm-of-square-roots]]).

## Proof

1.1 The coordinate list has $d+d(d-1)/2=m$ entries. Its first $d$ entries recover each diagonal entry of $A$, and each later entry recovers the corresponding symmetric pair by division by $\sqrt2$ from [F3]. Thus it has a unique inverse on $\mathbb R^m$; its coordinate formulas are linear, so $\operatorname{svec}$ is a linear bijection. [given, F3, algebra]

1.2 For $A,B\in\mathbb S^d$, the Euclidean dot product of their coordinate lists is $\sum_i A_{ii}B_{ii}+2\sum_{i<j}A_{ij}B_{ij}$, because each off-diagonal coordinate contributes $(\sqrt2 A_{ij})(\sqrt2 B_{ij})$. Symmetry gives $\langle A,B\rangle_F=\sum_i A_{ii}B_{ii}+\sum_{i<j}(A_{ij}B_{ij}+A_{ji}B_{ji})$, which is the same expression. Hence $\langle\operatorname{svec}(A),\operatorname{svec}(B)\rangle_2=\langle A,B\rangle_F$. [F2, given, algebra]

2.1 Linearity gives $\operatorname{svec}(A)-\operatorname{svec}(B)=\operatorname{svec}(A-B)$. Applying step 1.2 to $A-B$ with itself and taking the unique nonnegative square roots from [F1]–[F3] yields $\|\operatorname{svec}(A)-\operatorname{svec}(B)\|_2=\|A-B\|_F$. This proves norm preservation. [step 1.2, F1, F2, F3, algebra] ∎
