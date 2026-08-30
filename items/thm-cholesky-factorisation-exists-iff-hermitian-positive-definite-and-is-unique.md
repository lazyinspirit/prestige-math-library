---
id: thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
kind: theorem
title: "A matrix admits a Cholesky factorisation with positive diagonal exactly when it is Hermitian positive definite, and that factor is unique"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cholesky-factorisation-with-positive-diagonal, thm-determinant-of-a-triangular-matrix, thm-determinant-multiplicative, def-matrix-product-and-identity-matrix]
aliases: []
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Theorem 2.9.3"
      url: "https://fncbook.com/structure/"
    - title: "David Bindel, CS 4220: Numerical Analysis, Blocked LU and Cholesky"
      url: "https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-02-09.html"
---

## Statement

Let $n\ge 1$ and let $A\in M_n(\mathbb C)$, with the real case obtained by
restricting scalars to $\mathbb R$. Then the following are equivalent:

1. $A$ has a Cholesky factorisation $A=LL^*$ with $L$ lower triangular and
   positive real diagonal.
2. $A$ is Hermitian positive definite.

When these conditions hold, the factor $L$ is unique.

## Facts & Assumptions

**Given:** A matrix $A\in M_n(\mathbb C)$.

[L1] Hermitian positive-definite matrices and Cholesky factorisations with
positive diagonal are defined in
[[def-cholesky-factorisation-with-positive-diagonal]].

[L2] The determinant of a triangular matrix is the product of its diagonal
entries ([[thm-determinant-of-a-triangular-matrix]]).

[L3] Determinants are multiplicative ([[thm-determinant-multiplicative]]).

[L4] Matrix multiplication uses the convention of
[[def-matrix-product-and-identity-matrix]].

## Proof

**Proof technique:** block induction with a quotient comparison for uniqueness.

1.1 Suppose $A=LL^*$ as in [L1]. Then $A^*=LL^*=A$, so $A$ is Hermitian. For any nonzero $x$, one has $$x^*Ax=x^*LL^*x=(L^*x)^*(L^*x)=\|L^*x\|_2^2.$$ The diagonal of $L$ is positive, hence nonzero; [L2] and [L3] give $\det L\ne 0$, so $L$ is invertible and $L^*x\ne 0$ when $x\ne 0$. Therefore $x^*Ax>0$. [L1, L2, L3, L4, algebra]
1.2 For the converse, use induction on $n$. The case $n=1$ is immediate: $A=[a]$ is Hermitian positive definite exactly when $a>0$, in which case $A=[\sqrt a][\sqrt a]^*$. [base, L1, algebra]
1.3 Assume $n>1$ and the converse for size $n-1$. Write $$A=\begin{pmatrix}a&r^*\\ r&C\end{pmatrix}.$$ Positive definiteness of $A$ at $x=e_0$ gives $a>0$. Set $\ell:=r/\sqrt a$ and $S:=C-\ell\ell^*$. For nonzero $y\in\mathbb C^{n-1}$, apply positive definiteness to $x=\binom{-a^{-1}r^*y}{y}$: $$0<x^*Ax=y^*Sy.$$ Thus $S$ is Hermitian positive definite. By the induction hypothesis, $S=\widetilde L\widetilde L^*$ with $\widetilde L$ lower triangular and positive diagonal. [ih, L1, algebra]
2.1 Define $$L:=\begin{pmatrix}\sqrt a&0\\ \ell&\widetilde L\end{pmatrix}.$$ Direct multiplication gives $$LL^*=\begin{pmatrix}a&r^*\\ r&\ell\ell^*+\widetilde L\widetilde L^*\end{pmatrix} =\begin{pmatrix}a&r^*\\ r&C\end{pmatrix}=A.$$ The matrix $L$ is lower triangular and its diagonal is positive real, so this is a Cholesky factorisation. [step 1.3, L1, L4, algebra]
3.1 For uniqueness, suppose $A=L_1L_1^*=L_2L_2^*$ are two such factorizations. Then $M:=L_2^{-1}L_1$ is lower triangular, and $MM^*=I$ because $L_2MM^*L_2^*=L_1L_1^*=L_2L_2^*$. A lower-triangular unitary matrix has zero strict-lower entries and diagonal entries of modulus $1$; since the diagonal of $M$ is the ratio of two positive real diagonals, each diagonal entry is also positive real, hence equals $1$. Therefore $M=I$ and $L_1=L_2$. [step 1.1, step 2.1, L2, L3, algebra]
4.1 Step 1.1 proves that a Cholesky factorisation implies Hermitian positive definiteness. Steps 1.2-2.1 prove the converse by induction, and step 3.1 gives uniqueness. [step 1.1, step 1.2, step 2.1, step 3.1, discharge-induction] ∎
