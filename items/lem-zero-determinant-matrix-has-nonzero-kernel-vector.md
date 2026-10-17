---
id: lem-zero-determinant-matrix-has-nonzero-kernel-vector
kind: lemma
title: "A square matrix with zero determinant has a nonzero kernel vector"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-determinant-of-a-square-matrix
  - cor-matrix-rank-nullity
  - cor-matrix-rank-equals-the-rank-of-its-linear-map
  - thm-operator-invertible-iff-determinant-nonzero
justified_by: []
proof_strategy: contradiction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "LAPACK Users' Guide, Generalized Nonsymmetric Eigenproblems"
      url: "https://www.netlib.org/lapack/lug/node35.html"
---

## Statement

If $M\in\mathbb F^{n\times n}$, $n\ge1$, $\mathbb F\in\{\mathbb R,\mathbb C\}$,
and $\det M=0$, then there is a nonzero vector $v\in\mathbb F^n$ with
$Mv=0$.

## Facts & Assumptions

**Given:** A square real or complex matrix $M$ of positive order.

[F1] [[cor-matrix-rank-nullity]]: $\operatorname{rank}(M)+\dim\ker M=n$.

[F2] [[cor-matrix-rank-equals-the-rank-of-its-linear-map]]: matrix rank is
the dimension of the image of the associated linear map.

[F3] [[thm-operator-invertible-iff-determinant-nonzero]]: a finite-dimensional
operator over a field is invertible exactly when its determinant is nonzero.

## Proof

1.1 Suppose $\ker M=\{0\}$. By [F1], $\operatorname{rank}(M)=n$; by [F2] the image of $M$ has dimension $n$ in the $n$-dimensional space $\mathbb F^n$, so $M$ is surjective. It is also injective by the supposition, hence invertible. [given, F1, F2, algebra, assume-contra]

2.1 By [F3], invertibility implies $\det M\ne0$, contradicting the given $\det M=0$. Therefore $\ker M\ne\{0\}$ and a nonzero $v$ with $Mv=0$ exists. [step 1.1, F3, contradiction, discharge-contradiction] ∎
