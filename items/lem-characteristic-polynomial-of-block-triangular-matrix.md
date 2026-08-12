---
id: lem-characteristic-polynomial-of-block-triangular-matrix
kind: lemma
title: 'The characteristic polynomial of a block upper- or lower-triangular matrix is the product of the characteristic polynomials of its diagonal blocks'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-characteristic-polynomial-of-a-matrix, def-determinant-of-a-square-matrix, thm-polynomial-ring-is-a-commutative-ring]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'H. Pinkham, Linear Algebra, §12.1.3'
      url: 'https://www.math.columbia.edu/department/pinkham/HCP_LinearAlgebra.pdf'
pipeline_run: null
---

## Statement

Let $A\in M_r(F)$ and $D\in M_s(F)$. For either block-triangular matrix

$$M=\begin{pmatrix}A&C\\0&D\end{pmatrix}\quad\text{or}\quad M=\begin{pmatrix}A&0\\C&D\end{pmatrix},$$

one has $\chi_M(x)=\chi_A(x)\chi_D(x)$, including $r=0$ or $s=0$.

## Facts & Assumptions

**Given:** Square diagonal blocks $A,D$ and a compatible off-diagonal block $C$ over $F$.

[L1] Characteristic polynomials are determinants of $xI$ minus the matrix, with the empty-block value $1$ ([[def-characteristic-polynomial-of-a-matrix]]).

[L2] The determinant is the signed sum over permutations of products selecting one entry in each column and row ([[def-determinant-of-a-square-matrix]]).

[L3] The polynomial ring $F[x]$ is a commutative ring, so [L2] applies to matrices over $F[x]$ ([[thm-polynomial-ring-is-a-commutative-ring]]).

## Proof

**Proof technique:** direct.

1.1 Suppose first that $M$ is block upper triangular. In a nonzero Leibniz term for $xI-M$, a permutation cannot send an index from the second block into the first: if it did, bijectivity would force some first-block index into the second, where the lower-left block is zero. Thus every surviving permutation preserves both index blocks. [L2, L3, given]

2.1 The surviving permutation splits uniquely into one permutation of each block, and its sign and product split accordingly. The determinant sum therefore factors as $\det(xI_r-A)\det(xI_s-D)=\chi_A(x)\chi_D(x)$. [step 1.1, L1, L2, L3, algebra]

3.1 The lower-triangular case is identical with the two block directions interchanged. If either block has size zero, its characteristic polynomial is $1$ and the identity reduces to the other block. [step 2.1, L1]

4.1 Hence both block-triangular forms have the claimed characteristic polynomial. [step 2.1, step 3.1] ∎
