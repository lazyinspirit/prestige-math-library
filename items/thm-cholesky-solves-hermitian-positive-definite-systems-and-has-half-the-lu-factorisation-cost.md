---
id: thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost
kind: theorem
title: "Cholesky solves Hermitian positive-definite systems and has about half the factorisation cost of LU"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost, thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique, def-cholesky-factorisation-with-positive-diagonal]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Theorem 2.5.1 and Observation 2.9.3"
      url: "https://fncbook.com/efficiency/"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Section 2.9"
      url: "https://fncbook.com/structure/"
---

## Statement

Let $A\in M_n(\mathbb C)$ be Hermitian positive definite and let
$A=LL^*$ be its Cholesky factorisation with positive diagonal.

1. For every right-hand side $b\in\mathbb C^n$, the system $Ax=b$ is solved by
   first solving $Ly=b$ and then solving $L^*x=y$.
2. The two triangular solves cost $2n^2+O(n)$ scalar operations altogether, and
   the dense Cholesky factorisation costs
   $$\frac{1}{3}n^3+O(n^2)$$
   scalar operations, compared with
   $$\frac{2}{3}n^3+O(n^2)$$
   for dense LU factorisation without exploiting symmetry.

## Facts & Assumptions

**Given:** A Hermitian positive-definite matrix $A\in M_n(\mathbb C)$, its Cholesky factor $A=LL^*$, and a right-hand side $b\in\mathbb C^n$.

[L1] Forward and backward substitution correctly and uniquely solve triangular systems in $O(n^2)$ scalar operations ([[thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost]]).

[L2] Hermitian positive-definite matrices admit a unique Cholesky factorisation with positive diagonal ([[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]]).

[L3] Cholesky factorisation means $A=LL^*$ with $L$ lower triangular and positive diagonal ([[def-cholesky-factorisation-with-positive-diagonal]]).

## Proof

**Proof technique:** factor the solve through two triangular systems and count the work column by column.

1.1 By [L2] and [L3], the equation $Ax=b$ is $LL^*x=b$. Solve $Ly=b$ by forward substitution and then $L^*x=y$ by backward substitution. Stepwise uniqueness in [L1] makes both solves unique, and substituting $y=L^*x$ back into the first equation gives $Ax=b$. [L1, L2, L3, algebra]
1.2 The solve cost is the sum of two triangular solves, so [L1] gives $$2\left(n+\frac{n(n-1)}{2}+\frac{n(n-1)}{2}\right)=2n^2+O(n)$$ scalar operations, or $n^2+O(n)$ multiply-add pairs. [L1, algebra]
2.1 In the dense factorisation, column $k$ computes one square root, $n-1-k$ divisions in the column below the pivot, and updates the trailing symmetric submatrix of size $n-1-k$ by a rank-one outer product. That update touches $\frac{(n-1-k)(n-k)}{2}$ stored entries, and each one costs one multiplication and one subtraction, so the update work is $$(n-1-k)(n-k).$$ Summing with $m=n-1-k$ gives $$\sum_{m=0}^{n-1}m(m+1)=\frac{1}{3}n(n-1)(n+1)=\frac{1}{3}n^3+O(n^2),$$ which dominates the cost. LU performs the same style of update on the full trailing matrix, giving $$2\sum_{m=0}^{n-1}m^2=\frac{1}{3}n(n-1)(2n-1)=\frac{2}{3}n^3+O(n^2)$$ scalar operations. Thus Cholesky uses about half the factorisation work. [step 1.1, algebra]
3.1 Step 1.1 proves the solve statement, while steps 1.2 and 2.1 give the operation counts. [step 1.1, step 1.2, step 2.1] ∎
