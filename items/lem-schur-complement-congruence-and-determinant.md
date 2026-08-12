---
id: lem-schur-complement-congruence-and-determinant
kind: lemma
title: 'For symmetric $M=\begin{pmatrix}A&B\\B^{\mathsf T}&C\end{pmatrix}$ with $A$ invertible, a block-unitriangular congruence gives $A\oplus(C-B^{\mathsf T}A^{-1}B)$ and factors $\det M$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-change-of-basis-for-a-bilinear-form-is-congruence, def-determinant-of-a-square-matrix, thm-determinant-multiplicative, thm-determinant-of-a-triangular-matrix, thm-ring-matrix-arithmetic-laws]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'J. Kuan, Positive Definite Matrices'
      url: 'https://math.berkeley.edu/~jkuan/Lecture_July31.pdf'
pipeline_run: null
---

## Statement

Let

$$M=\begin{pmatrix}A&B\\B^{\mathsf T}&C\end{pmatrix}$$

be symmetric over a field, with square diagonal blocks and $A$ invertible. Put $S=C-B^{\mathsf T}A^{-1}B$. Then for

$$P=\begin{pmatrix}I&-A^{-1}B\\0&I\end{pmatrix}$$

one has $P^{\mathsf T}MP=A\oplus S$, and

$$\det M=\det A\det S,$$

where the determinant of a $0\times0$ block is interpreted as $1$.

## Facts & Assumptions

**Given:** The displayed symmetric block matrix with $A$ invertible; an empty square block has determinant $1$.

[L1] A basis change by $P$ changes a bilinear-form matrix to $P^{\mathsf T}MP$ ([[thm-change-of-basis-for-a-bilinear-form-is-congruence]]).

[L2] For a positive-sized square matrix over a commutative ring, the determinant is the signed sum over permutations of products selecting one entry in each row and column ([[def-determinant-of-a-square-matrix]]).

[L3] Determinants of positive-sized square matrices over a commutative ring are multiplicative ([[thm-determinant-multiplicative]]).

[L4] A triangular matrix has determinant equal to the product of its diagonal entries ([[thm-determinant-of-a-triangular-matrix]]).

[L5] Block products obey associative and distributive matrix arithmetic ([[thm-ring-matrix-arithmetic-laws]]).

## Proof

**Proof technique:** explicit block elimination.

1.1 If the total size is zero, every block and $P$ is empty, both displayed matrix identities are the empty identity, and the determinant formula reads $1=1\cdot1$. Otherwise $P$ is block upper triangular with identity diagonal blocks, and $P^{-1}=\begin{pmatrix}I&A^{-1}B\\0&I\end{pmatrix}$; hence it is invertible and [L4] gives $\det P=1=\det P^{\mathsf T}$. [L4, L5, given, algebra]

2.1 Since symmetry of $M$ makes $A^{\mathsf T}=A$ and therefore $(A^{-1})^{\mathsf T}=A^{-1}$, direct multiplication gives $P^{\mathsf T}MP=\begin{pmatrix}A&0\\0&C-B^{\mathsf T}A^{-1}B\end{pmatrix}=A\oplus S$. [step 1.1, L1, L5, algebra]

3.1 In positive total size, [L3] and step 1.1 give $\det(P^{\mathsf T}MP)=\det M$. In the Leibniz sum [L2] for the block diagonal matrix of step 2.1, every nonzero term preserves both index blocks, so its determinant is $\det A\det S$, with the stated empty-block convention when one block has size zero. Thus $\det M=\det A\det S$. [step 1.1, step 2.1, L2, L3, algebra]

4.1 The calculation proves both assertions. Zero-sized blocks, zero entries inside $A,B,C$, and singular $S$ require no cancellation and are all included. [step 1.1, step 2.1, step 3.1] ∎
