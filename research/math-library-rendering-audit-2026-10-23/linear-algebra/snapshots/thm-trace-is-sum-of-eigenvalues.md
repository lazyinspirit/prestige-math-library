---
id: thm-trace-is-sum-of-eigenvalues
kind: theorem
title: 'If $\chi_T(x)=\prod_{i<n}(x-\lambda_i)$ in $F[x]$, then $\operatorname{tr}(T)=\sum_{i<n}\lambda_i$: trace is the sum of the eigenvalues counted with algebraic multiplicity'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-characteristic-polynomial-of-an-operator, lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients, def-trace-of-an-endomorphism, thm-spectrum-is-the-root-set-of-the-characteristic-polynomial, def-algebraic-and-geometric-multiplicity-of-an-eigenvalue]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'H. Pinkham, Linear Algebra, §12.3.1'
      url: 'https://www.math.columbia.edu/department/pinkham/HCP_LinearAlgebra.pdf'
pipeline_run: null
---

## Statement

Let $T$ be an endomorphism of an $n$-dimensional vector space over $F$. If

$$\chi_T(x)=\prod_{i<n}(x-\lambda_i)$$

in $F[x]$, then $\operatorname{tr}(T)=\sum_{i<n}\lambda_i$. Thus the trace is the sum of the eigenvalues counted with algebraic multiplicity.

## Facts & Assumptions

**Given:** $T$ as stated and a displayed factorization $\chi_T(x)=\prod_{i<n}(x-\lambda_i)$.

[L1] The operator characteristic polynomial is the characteristic polynomial of any representing matrix, including value $1$ in dimension zero ([[def-characteristic-polynomial-of-an-operator]]).

[L2] In positive size, the coefficient of $x^{n-1}$ in a characteristic polynomial is the negative of the matrix trace ([[lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients]]).

[L3] The trace of an endomorphism is the trace of any representing matrix and is $0$ in dimension zero ([[def-trace-of-an-endomorphism]]).

[L4] Roots of $\chi_T$ are precisely eigenvalues ([[thm-spectrum-is-the-root-set-of-the-characteristic-polynomial]]), and algebraic multiplicity is the exponent of the corresponding linear factor ([[def-algebraic-and-geometric-multiplicity-of-an-eigenvalue]]).

## Proof

**Proof technique:** direct.

1.1 If $n=0$, [L3] gives $\operatorname{tr}(T)=0$, while the sum indexed by the empty set is $0$. [L1, L3, algebra]

1.2 Suppose $n\ge1$. By [L1]–[L3], the coefficient of $x^{n-1}$ in $\chi_T$ is $-\operatorname{tr}(T)$. In the given product, obtaining degree $n-1$ means choosing $-\lambda_i$ from exactly one factor, so the same coefficient is $-\sum_{i<n}\lambda_i$. [L1, L2, L3, given, algebra]

2.1 Equality of coefficients and additive cancellation give $\operatorname{tr}(T)=\sum_{i<n}\lambda_i$. By [L4], the factors list exactly the eigenvalues with their algebraic multiplicities. [step 1.2, L4, algebra]

3.1 Steps 1.1 and 2.1 prove the formula in every finite dimension. [step 1.1, step 2.1] ∎
