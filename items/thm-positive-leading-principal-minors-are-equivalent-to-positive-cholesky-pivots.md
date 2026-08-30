---
id: thm-positive-leading-principal-minors-are-equivalent-to-positive-cholesky-pivots
kind: theorem
title: "For real symmetric matrices, positive leading principal minors are equivalent to positive Cholesky pivots"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique, thm-sylvesters-criterion-for-positive-definiteness, thm-determinant-of-a-triangular-matrix]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Section 2.9"
      url: "https://fncbook.com/structure/"
    - title: "David Bindel, CS 4220: Numerical Analysis, Beyond linear solves + using structure"
      url: "https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-02-13.html"
---

## Statement

Let $n\ge 1$, let $A\in M_n(\mathbb R)$ be symmetric, and let $\Delta_k$ be the determinant of
its leading $k\times k$ principal submatrix.

Then the following are equivalent:

1. $\Delta_k>0$ for every $1\le k\le n$.
2. $A$ has a Cholesky factorisation $A=LL^{\mathsf T}$ with positive diagonal.

When $A=LL^{\mathsf T}$, one has

$$\Delta_k=\prod_{i<k}\ell_{ii}^2,$$

so positivity of the leading principal minors is equivalent to positivity of the
Cholesky pivots.

## Facts & Assumptions

**Given:** A real symmetric matrix $A\in M_n(\mathbb R)$.

[L1] A matrix has a Cholesky factorisation with positive diagonal exactly when
it is Hermitian positive definite ([[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]]).

[L2] A real symmetric matrix is positive definite exactly when all of its
leading principal minors are positive
([[thm-sylvesters-criterion-for-positive-definiteness]]).

[L3] The determinant of a triangular matrix is the product of its diagonal
entries ([[thm-determinant-of-a-triangular-matrix]]).

## Proof

**Proof technique:** compare Sylvester's criterion with the determinant formula
for leading Cholesky blocks.

1.1 By [L1] and [L2], condition 1 is equivalent to positive definiteness, and positive definiteness is equivalent to existence of a Cholesky factorisation with positive diagonal. Hence conditions 1 and 2 are equivalent. [L1, L2]

2.1 Suppose $A=LL^{\mathsf T}$ with $L$ lower triangular and positive diagonal. Its leading $k\times k$ principal block factors as $A_k=L_kL_k^{\mathsf T}$, where $L_k$ is the leading $k\times k$ block of $L$. By [L3], $$\Delta_k=\det(A_k)=\det(L_k)^2=\left(\prod_{i<k}\ell_{ii}\right)^2 =\prod_{i<k}\ell_{ii}^2.$$ Since each $\ell_{ii}>0$, every $\Delta_k$ is positive. [step 1.1, L3, algebra]

3.1 Step 1.1 proves the equivalence, and step 2.1 identifies the leading principal minors with the squared pivot products. [step 1.1, step 2.1] ∎
