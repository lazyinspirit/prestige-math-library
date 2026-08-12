---
id: thm-products-ab-and-ba-have-the-same-characteristic-polynomial
kind: theorem
title: 'For $A,B\in M_n(F)$, the products $AB$ and $BA$ have the same characteristic polynomial'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-characteristic-polynomial-of-a-matrix, def-determinant-of-a-square-matrix, thm-determinant-multiplicative, thm-ring-matrix-arithmetic-laws]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'H. Pinkham, Linear Algebra, §12.3.5'
      url: 'https://www.math.columbia.edu/department/pinkham/HCP_LinearAlgebra.pdf'
pipeline_run: null
---

## Statement

For $A,B\in M_n(F)$,

$$\chi_{AB}(x)=\chi_{BA}(x).$$

## Facts & Assumptions

**Given:** Matrices $A,B\in M_n(F)$.

[L1] The characteristic polynomial of $C$ is $\det(xI-C)$, with value $1$ in size zero ([[def-characteristic-polynomial-of-a-matrix]]).

[L2] For a positive-sized square matrix over a commutative ring, the determinant is the signed sum over permutations of products selecting one entry in each row and column ([[def-determinant-of-a-square-matrix]]).

[L3] Determinants are multiplicative for positive-sized square matrices over a commutative ring ([[thm-determinant-multiplicative]]).

[L4] Block multiplication follows from associative and distributive matrix arithmetic ([[thm-ring-matrix-arithmetic-laws]]).

## Proof

**Proof technique:** direct.

1.1 If $n=0$, both characteristic polynomials are $1$ by [L1]. Assume henceforth that $n\ge1$, and work over $F[t]$. [L1]

1.2 Put $N=\begin{pmatrix}I&tA\\-B&I\end{pmatrix}$. Left multiplication by $\begin{pmatrix}I&-tA\\0&I\end{pmatrix}$ produces $\begin{pmatrix}I+tAB&0\\-B&I\end{pmatrix}$, while left multiplication by $\begin{pmatrix}I&0\\B&I\end{pmatrix}$ produces $\begin{pmatrix}I&tA\\0&I+tBA\end{pmatrix}$. [L4, algebra]

2.1 In the Leibniz sum [L2] for a block-triangular matrix, every nonzero term preserves the two index blocks, so its determinant is the product of the two diagonal-block determinants. Both multiplying matrices in step 1.2 consequently have determinant $1$, and [L3] yields $\det(I+tAB)=\det(N)=\det(I+tBA)$ in $F[t]$. [step 1.2, L2, L3, algebra]

3.1 Replacing $t$ by $-t$, the coefficient of $t^k$ in $\det(I-tC)$ is the coefficient of $x^{n-k}$ in $\det(xI-C)$, directly from the Leibniz formula. Equality in step 2.1 therefore gives equality of every coefficient of $\chi_{AB}$ and $\chi_{BA}$. [step 2.1, L1, L2, algebra]

4.1 Together with the zero-sized case, $\chi_{AB}=\chi_{BA}$ for all $n$. [step 1.1, step 3.1] ∎
