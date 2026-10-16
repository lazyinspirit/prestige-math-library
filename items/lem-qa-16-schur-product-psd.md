---
id: lem-qa-16-schur-product-psd
kind: lemma
title: Entrywise products of finite positive semidefinite matrices are positive semidefinite
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - def-inner-product-space
  - thm-non-negative-operator-characterisations
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: None; only finite Gram factorizations are used.
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Troy Lee, Rajat Mittal, Ben Reichardt, Robert Špalek, and Mario Szegedy, Quantum Query Complexity of State Conversion, Appendix A.1
      url: https://arxiv.org/pdf/1011.3020
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, Section 23.1
      url: https://cs.umd.edu/~amchilds/qa/qa.pdf
---

## Statement

If $A,B\in\mathbb R^{n\times n}$ are positive semidefinite, then their entrywise product $A\circ B$, defined by $(A\circ B)_{jk}=A_{jk}B_{jk}$, is positive semidefinite.

## Facts & Assumptions

**Given:** Two finite real symmetric positive semidefinite matrices $A,B$ of the same size.

[F1] [[def-inner-product-space]]: the standard real inner product on $\mathbb R^n$ is positive definite and bilinear.

[F2] [[thm-non-negative-operator-characterisations]]: a finite nonnegative real symmetric matrix has an orthonormal eigenbasis and nonnegative eigenvalues.

## Proof

1.1 By [F2], choose real vectors $a_1,\ldots,a_n$ with $A_{jk}=a_j^Ta_k$ and real vectors $b_1,\ldots,b_n$ with $B_{jk}=b_j^Tb_k$: diagonalize each matrix orthogonally and multiply each eigenvector coordinate by the square root of its nonnegative eigenvalue. [given, F2, choose, construct]

2.1 For each $j$, let $c_j\in\mathbb R^{n^2}$ have $(p,q)$-coordinate $(a_j)_p(b_j)_q$, and give $\mathbb R^{n^2}$ its standard dot product. Then $c_j^Tc_k=\sum_{p,q}(a_j)_p(b_j)_q(a_k)_p(b_k)_q=(a_j^Ta_k)(b_j^Tb_k)=A_{jk}B_{jk}$. Thus $A\circ B$ is the Gram matrix of the $c_j$. For every real vector $z$, $z^T(A\circ B)z=\left\|\sum_j z_jc_j\right\|^2\ge0$, so $A\circ B$ is positive semidefinite. [given, F1, step 1.1, algebra] ∎
