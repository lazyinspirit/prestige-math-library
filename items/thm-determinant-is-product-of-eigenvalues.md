---
id: thm-determinant-is-product-of-eigenvalues
kind: theorem
title: 'If $\chi_T(x)=\prod_{i<n}(x-\lambda_i)$ in $F[x]$, then $\det(T)=\prod_{i<n}\lambda_i$: determinant is the product of the eigenvalues counted with algebraic multiplicity'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-characteristic-polynomial-of-an-operator, lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients, def-determinant-of-a-linear-operator, thm-spectrum-is-the-root-set-of-the-characteristic-polynomial, def-algebraic-and-geometric-multiplicity-of-an-eigenvalue]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'H. Pinkham, Linear Algebra, §12.3.2'
      url: 'https://www.math.columbia.edu/department/pinkham/HCP_LinearAlgebra.pdf'
pipeline_run: null
---

## Statement

Let $T$ be an endomorphism of an $n$-dimensional vector space over $F$. If

$$\chi_T(x)=\prod_{i<n}(x-\lambda_i)$$

in $F[x]$, then $\det(T)=\prod_{i<n}\lambda_i$. Thus the determinant is the product of the eigenvalues counted with algebraic multiplicity.

## Facts & Assumptions

**Given:** $T$ as stated and a displayed factorization $\chi_T(x)=\prod_{i<n}(x-\lambda_i)$.

[L1] The operator characteristic polynomial is computed from any representing matrix and equals $1$ in dimension zero ([[def-characteristic-polynomial-of-an-operator]]).

[L2] In positive size, the constant coefficient of a characteristic polynomial is $(-1)^n$ times the determinant ([[lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients]]).

[L3] The determinant of an endomorphism is the determinant of any representing matrix and equals $1$ in dimension zero ([[def-determinant-of-a-linear-operator]]).

[L4] Roots of $\chi_T$ are precisely eigenvalues ([[thm-spectrum-is-the-root-set-of-the-characteristic-polynomial]]), and algebraic multiplicity is the exponent of the corresponding linear factor ([[def-algebraic-and-geometric-multiplicity-of-an-eigenvalue]]).

## Proof

**Proof technique:** direct.

1.1 If $n=0$, [L3] gives $\det(T)=1$, while the product indexed by the empty set is $1$. [L1, L3, algebra]

1.2 Suppose $n\ge1$. By [L1]–[L3], the constant coefficient of $\chi_T$ is $(-1)^n\det(T)$. The constant coefficient of the given product is $\prod_{i<n}(-\lambda_i)=(-1)^n\prod_{i<n}\lambda_i$. [L1, L2, L3, given, algebra]

2.1 Equality of coefficients and cancellation of the nonzero scalar $(-1)^n$ give $\det(T)=\prod_{i<n}\lambda_i$. By [L4], the factors list exactly the eigenvalues with their algebraic multiplicities. [step 1.2, L4, algebra]

3.1 Steps 1.1 and 2.1 prove the formula in every finite dimension. [step 1.1, step 2.1] ∎
