---
id: lem-exact-householder-bidiagonal-reduction
kind: lemma
title: "Exact unitary equivalence of Householder bidiagonalization"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [alg-householder-bidiagonalization, thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries]
dependency_level: 1
verification:
  precheck: pass
proof_strategy: direct
sources:
  references:
    - title: "Wen-Wei Lin, Lecture Notes of Matrix Computations, §3.2.2, Algorithm 3.2.6"
      url: "https://zhims.github.io/doc/note/computing/matrixComputations.pdf"
    - title: "James Demmel and W. Kahan, Accurate Singular Values of Bidiagonal Matrices, §1"
      url: "https://www.netlib.org/lapack/lawnspdf/lawn03.pdf"
---

## Statement

For $A\in\mathbb F^{m\times n}$ over $\mathbb F=\mathbb R$ or $\mathbb C$, the exact-arithmetic algorithm [[alg-householder-bidiagonalization]] returns unitary $U,V$ and an upper bidiagonal $B\in\mathbb F^{p\times p}$, $p=\min(m,n)$, such that if $m\ge n$ then $U^*AV=\begin{bmatrix}B\\0\end{bmatrix}$, and if $m<n$ then $U^*A^*V=\begin{bmatrix}B\\0\end{bmatrix}$.

## Facts & Assumptions

**Given:** A matrix $A\in\mathbb F^{m\times n}$ and the exact-arithmetic Householder bidiagonalization algorithm.

[F1] [[alg-householder-bidiagonalization]] applies a left Householder to the active column at step $k$ and, when $k<p$, a right Householder to the active row after column $k$.

[F2] [[thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries]]: each selected Householder is unitary and maps its chosen active vector to a scalar multiple of the first coordinate vector.

## Proof

1.1 At step $k$, the left reflector acts only on rows $k:M$. It therefore leaves all rows $1,\ldots,k-1$ unchanged and maps the active part of column $k$ to its first coordinate, making entries below $(k,k)$ zero. The right reflector acts only on columns $k+1:p$, so it preserves the zeros already made in column $k$ and maps the active part of row $k$ to its first coordinate, making entries beyond $(k,k+1)$ zero. [F1, F2]

2.1 Subsequent left reflectors act on rows strictly below row $k$, so they do not change row $k$; subsequent right reflectors act on columns strictly beyond column $k+1$, so they do not change its retained first two entries. Induction on $k$ shows the final transformed matrix has no entries below the diagonal or beyond the first superdiagonal in its first $p$ rows. [step 1.1, F1, induction]

3.1 The update rules in [F1] maintain the invariant $C=U^*C_0V$, where $C_0$ is the initial tall-oriented matrix. Every factor is unitary by [F2], so the accumulated $U,V$ are unitary. Combining this invariant with step 2.1 gives the asserted tall reduction. In the wide case it applies to $A^*$, and taking adjoints gives $A=V\begin{bmatrix}B^*&0\end{bmatrix}U^*$. [F1, F2, step 2.1, algebra] ∎
