---
id: thm-characteristic-polynomial-of-a-recurrence-companion-matrix
kind: theorem
title: "A recurrence companion matrix has the recurrence characteristic polynomial"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-companion-matrix-of-a-linear-recurrence, def-characteristic-polynomial-of-a-matrix, thm-laplace-cofactor-expansion]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Waldschmidt, Linear Recurrence Sequences VI, slide 17"
      url: "https://webusers.imj-prg.fr/~michel.waldschmidt/articles/pdf/LinRecSeqVI.pdf"
    - title: "H. Pinkham, Linear Algebra, Chapter 10"
      url: "https://www.math.columbia.edu/department/pinkham/HCP_LinearAlgebra.pdf"
pipeline_run: null
---

## Statement

Let $K$ be a field, let $d\ge1$, and let $C$ be the row-shift companion matrix associated with

$$\chi(t)=t^d+c_1t^{d-1}+\cdots+c_d.$$

Then the matrix characteristic polynomial is exactly

$$\chi_C(t)=\det(tI_d-C)=t^d+c_1t^{d-1}+\cdots+c_d.$$

## Facts & Assumptions

**Given:** A positive integer $d$, coefficients $c_1,\ldots,c_d$, and their row-shift companion matrix $C$.

[L1] The row-shift companion matrix has superdiagonal entries $1$ and final row $(-c_d,\ldots,-c_1)$ ([[def-companion-matrix-of-a-linear-recurrence]]).

[L2] For a field matrix $A$, its characteristic polynomial is $\chi_A(t)=\det(tI-A)$ ([[def-characteristic-polynomial-of-a-matrix]]).

[L3] A determinant may be expanded along any row or column as the sum of entries times their cofactors ([[thm-laplace-cofactor-expansion]]).

## Proof

**Proof technique:** induction.

1.1 For $d=1$, one has $C=(-c_1)$ and $\det(tI-C)=t+c_1$. [base, L1, L2]

1.2 Assume the formula for size $d-1$. In $tI_d-C$, the first column has only two nonzero entries: $t$ in row $0$ and $c_d$ in row $d-1$. [ih, L1, L2]

2.1 Expanding that column by [L3], the cofactor of $t$ is the size-$(d-1)$ companion determinant $t^{d-1}+c_1t^{d-2}+\cdots+c_{d-1}$ by the induction hypothesis. [step 1.2, L3]

2.2 The minor of the entry $c_d$ is triangular with diagonal entries $-1$; its determinant is $(-1)^{d-1}$, and the cofactor sign is also $(-1)^{d-1}$, so this contribution is $c_d$. [step 1.2, L3, algebra]

3.1 Therefore $\det(tI_d-C)=t(t^{d-1}+c_1t^{d-2}+\cdots+c_{d-1})+c_d$, which is the claimed polynomial. [step 2.1, step 2.2, algebra]

4.1 The base case and induction step prove the formula for every $d\ge1$. [step 1.1, step 3.1, discharge-induction] ∎

