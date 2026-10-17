---
id: thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost
kind: theorem
title: "Forward and backward substitution are correct, unique, and quadratic in scalar operations"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-forward-and-back-substitution-for-triangular-systems]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Section 2.5.3"
      url: "https://fncbook.com/efficiency/"
    - title: "David Bindel, CS 4220: Numerical Analysis, Blocked LU and Cholesky"
      url: "https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-02-09.html"
---

## Statement

Let $F$ be a field, let $n\ge 1$, and let $b\in F^n$.

1. If $L\in M_n(F)$ is lower triangular with nonzero diagonal, the forward
   substitution recursion of
   [[def-forward-and-back-substitution-for-triangular-systems]] produces the
   unique solution of $Lx=b$.
2. If $U\in M_n(F)$ is upper triangular with nonzero diagonal, the backward
   substitution recursion produces the unique solution of $Ux=b$.

Each solve uses exactly $n$ divisions,
$\frac{n(n-1)}{2}$ multiplications, and $\frac{n(n-1)}{2}$ additions or
subtractions, hence $O(n^2)$ scalar operations.

## Facts & Assumptions

**Given:** A field $F$, a natural number $n\ge 1$, a vector $b\in F^n$, and a triangular matrix $T\in M_n(F)$ with nonzero diagonal; when $T=L$ it is lower triangular, and when $T=U$ it is upper triangular.

[L1] Forward substitution defines $x_i$ from the earlier coordinates by $$x_i=\ell_{ii}^{-1}\left(b_i-\sum_{j<i}\ell_{ij}x_j\right),$$and backward substitution defines $x_i$ from the later coordinates by$$x_i=u_{ii}^{-1}\left(b_i-\sum_{j>i}u_{ij}x_j\right)$$ ([[def-forward-and-back-substitution-for-triangular-systems]]).

## Proof

**Proof technique:** induction on the row index, then reverse induction for the upper-triangular case.

1.1 Forward substitution. For $i=0$, the sum over $j<0$ is empty, so [L1] gives $x_0=b_0/\ell_{00}$, the unique value satisfying row $0$. For $1\le i<n$, assume coordinates $x_0,\ldots,x_{i-1}$ are uniquely determined and rows $0,\ldots,i-1$ are satisfied. Lower triangularity makes row $i$ equal to $\sum_{j<i}\ell_{ij}x_j+\ell_{ii}x_i=b_i$. Since $\ell_{ii}\ne0$, its unique solution for the remaining coordinate is exactly the recursion in [L1]. Assigning $x_i$ leaves all earlier rows unchanged because they involve only earlier coordinates. Induction through $i=n-1$ therefore proves that the forward recursion solves every row of $Lx=b$ and uniquely determines every coordinate. [L1, induction]

1.2 Backward substitution is the same argument from the last row upward: the last row determines $x_{n-1}=b_{n-1}/u_{n-1,n-1}$, and once $x_{i+1},\ldots,x_{n-1}$ are fixed, the $i$-th row forces $x_i=u_{ii}^{-1}(b_i-\sum_{j>i}u_{ij}x_j)$. Hence the backward recursion solves $Ux=b$ and the solution is unique. [L1, induction]

2.1 In either triangular case, the $i$-th step forms one sum with $i$ products and $i$ additions in the lower-triangular solve, or with $n-1-i$ products and $n-1-i$ additions in the upper-triangular solve, followed by one division. Summing over all rows gives $n$ divisions and $\sum_{i=0}^{n-1} i = \sum_{i=0}^{n-1}(n-1-i)=n(n-1)/2$ multiplications and the same number of additions. [step 1.1, step 1.2, algebra]

3.1 Step 1.1 proves claim 1, step 1.2 proves claim 2, and step 2.1 gives the operation counts. [step 1.1, step 1.2, step 2.1, discharge-induction] ∎
