---
id: thm-normalised-lu-and-ldu-factorisations-are-unique
kind: theorem
title: "Normalised LU and LDU factorisations with nonzero pivots are unique"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-normalised-lu-factorisation, def-ldu-factorisation, def-matrix-product-and-identity-matrix]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "David Bindel, CS 4220: Numerical Analysis, Blocked LU and Cholesky"
      url: "https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-02-09.html"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Section 2.6"
      url: "https://fncbook.com/pivoting/"
---

## Statement

Let $F$ be a field, let $n\ge 1$, and let $A\in M_n(F)$.

1. Suppose
   $$A=LU=L'U',$$
   where $L,L'$ are unit lower triangular and $U,U'$ are upper triangular with
   nonzero diagonal. Then $L=L'$ and $U=U'$.
2. Suppose
   $$A=LDU=L'D'U',$$
   where $L,L'$ are unit lower triangular, $D,D'$ are diagonal with nonzero
   diagonal entries, and $U,U'$ are unit upper triangular. Then
   $L=L'$, $D=D'$, and $U=U'$.

## Facts & Assumptions

**Given:** A field $F$, a natural number $n\ge 1$, a matrix $A\in M_n(F)$, and
two factorisations of $A$ of the shapes named in the statement.

[L1] A normalised LU factorisation is $A=LU$ with $L$ unit lower triangular and
$U$ upper triangular; an LDU factorisation is $A=LDU$ with $L$ unit lower
triangular, $D$ diagonal, and $U$ unit upper triangular
([[def-normalised-lu-factorisation]], [[def-ldu-factorisation]]).

[L2] Matrix multiplication is the product convention used throughout
([[def-matrix-product-and-identity-matrix]]).

## Proof

**Proof technique:** induction on the matrix size.

1.1 For claim 1, the first row of $A$ equals the first row of both $U$ and $U'$, because the first rows of $L$ and $L'$ are $(1,0,\ldots,0)$. Hence the first rows of $U$ and $U'$ agree, in particular $u_{00}=u'_{00}\ne 0$. Then the first-column equations are $a_{i0}=\ell_{i0}u_{00}=\ell'_{i0}u'_{00}$ for $i>0$, so $\ell_{i0}=\ell'_{i0}$. Subtracting the common first-column outer product leaves two factorizations of the same trailing principal block by unit lower and upper triangular matrices of size $n-1$ with nonzero diagonal. Induction gives equality of the trailing blocks, hence $L=L'$ and $U=U'$. [L1, L2, induction]

2.1 For claim 2, put $V:=DU$ and $V':=D'U'$. Because $D,D'$ are diagonal and $U,U'$ are unit upper triangular, $V,V'$ are upper triangular and their diagonals are exactly the diagonals of $D,D'$, so they are nonzero. The factorisations $A=LV=L'V'$ are therefore of the kind handled in step 1.1, which gives $L=L'$ and $V=V'$. Taking diagonals of $V=V'$ yields $D=D'$, and then $DU=D'U'$ forces $U=U'$. [step 1.1, L1, L2, algebra]

3.1 Steps 1.1 and 2.1 prove claims 1 and 2. The nonzero-pivot hypothesis is essential: without it, a zero row of the upper factor leaves lower-triangular multipliers undetermined. [step 1.1, step 2.1, discharge-induction] ∎
