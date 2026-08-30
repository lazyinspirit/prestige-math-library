---
id: thm-unpivoted-unit-lower-lu-exists-iff-leading-principal-minors-are-nonzero
kind: theorem
title: "A square matrix has an unpivoted unit-lower LU factorisation exactly when all leading principal minors are nonzero"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-normalised-lu-factorisation, thm-block-lu-factorisation-via-an-invertible-leading-block, thm-determinant-of-a-triangular-matrix, thm-determinant-multiplicative]
aliases: []
proof_strategy: induction
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Section 2.6"
      url: "https://fncbook.com/pivoting/"
    - title: "David Bindel, CS 4220: Numerical Analysis, Blocked LU and Cholesky"
      url: "https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-02-09.html"
---

## Statement

Let $F$ be a field, let $n\ge 1$, and let $A\in M_n(F)$. For
$1\le k\le n$, let $\Delta_k$ be the determinant of the leading $k\times k$
principal submatrix $A_k$.

Then $A$ has a normalised LU factorisation $A=LU$ whose upper factor $U$ has
nonzero diagonal if and only if

$$\Delta_k\ne 0\qquad(1\le k\le n).$$

In particular, the condition forces $\Delta_n=\det A\ne 0$, so $A$ is
invertible.

## Facts & Assumptions

**Given:** A field $F$, a natural number $n\ge 1$, and a matrix $A\in M_n(F)$.

[L1] A normalised LU factorisation is $A=LU$ with $L$ unit lower triangular and
$U$ upper triangular ([[def-normalised-lu-factorisation]]).

[L2] An invertible leading block gives the block LU factorisation through its
Schur complement ([[thm-block-lu-factorisation-via-an-invertible-leading-block]]).

[L3] The determinant of a triangular matrix is the product of its diagonal
entries ([[thm-determinant-of-a-triangular-matrix]]).

[L4] Determinants are multiplicative ([[thm-determinant-multiplicative]]).

## Proof

**Proof technique:** induction on $n$ using the Schur complement.

1.1 Suppose $A=LU$ as in [L1] and that the diagonal of $U$ is nonzero. For each $k$, the leading block also factors as $A_k=L_kU_k$, where $L_k$ is unit lower triangular and $U_k$ is upper triangular with diagonal $u_{00},\ldots,u_{k-1,k-1}$. By [L3] and [L4], $$\Delta_k=\det(A_k)=\det(L_k)\det(U_k)=1\cdot\prod_{i<k}u_{ii}\ne 0.$$ [L1, L3, L4, algebra]

1.2 For the converse, use induction on $n$. When $n=1$, the condition is $\Delta_1=a_{00}\ne 0$, and $A=(1)(a_{00})$ is already a normalised LU factorisation with nonzero diagonal. [base, algebra]

1.3 Assume $n>1$ and the converse for size $n-1$. Write $$A=\begin{pmatrix}a&r^{\mathsf T}\\ c&C\end{pmatrix}.$$ Then $a=\Delta_1\ne 0$. Set $S:=C-ca^{-1}r^{\mathsf T}$. For each $1\le j<n$, apply [L2] to the leading $(j+1)\times(j+1)$ block of $A$: its determinant is $a\det(S_j)$, where $S_j$ is the leading $j\times j$ block of $S$. Hence $$\det(S_j)=\Delta_{j+1}/a\ne 0.$$ By the induction hypothesis, $S$ has a normalised LU factorisation $S=\widetilde L\widetilde U$ with nonzero diagonal. [ih, L2, algebra]

2.1 Step 1.3 and [L2] give $$A= \begin{pmatrix}1&0\\ ca^{-1}&\widetilde L\end{pmatrix} \begin{pmatrix}a&r^{\mathsf T}\\0&\widetilde U\end{pmatrix},$$ which is a normalised LU factorisation of $A$. Its upper diagonal is $a$ followed by the diagonal of $\widetilde U$, so it is nonzero. [step 1.3, L1, L2, algebra]

3.1 Step 1.1 proves the forward implication, and steps 1.2-2.1 prove the reverse implication for every $n\ge 1$. The final sentence is the case $k=n$. [step 1.1, step 1.2, step 2.1, discharge-induction] ∎