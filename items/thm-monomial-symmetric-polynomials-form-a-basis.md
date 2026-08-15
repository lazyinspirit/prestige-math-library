---
id: thm-monomial-symmetric-polynomials-form-a-basis
kind: theorem
title: "Monomial symmetric polynomials form an $R$-basis of the symmetric-polynomial ring"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-monomial-symmetric-polynomials, def-symmetric-polynomial]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. Grinberg, An Introduction to Algebraic Combinatorics, Theorem 7.2.7"
      url: "https://arxiv.org/pdf/2506.00738v1"
pipeline_run: null
---

## Statement

As $\lambda$ ranges over partitions of length at most $n$, the polynomials $m_\lambda$ form an $R$-basis of $R[x_1,\ldots,x_n]^{\operatorname{Sym}_n}$.

## Facts & Assumptions

**Given:** A commutative ring $R$ and a natural number $n$.

[L1] The polynomial $m_\lambda$ is the sum of the distinct monomials whose exponent tuples lie in the permutation orbit of $\lambda$ ([[def-monomial-symmetric-polynomials]]).

[L2] A polynomial is symmetric exactly when every permutation of its variables fixes it ([[def-symmetric-polynomial]]).

## Proof

**Proof technique:** direct.

1.1 Variable permutations partition the monomials into disjoint orbits, and every orbit contains exactly one weakly decreasing exponent tuple $\lambda$. [L1, algebra]

1.2 If $f$ is symmetric, the coefficients of two monomials in the same orbit are equal, because a variable permutation carries either monomial to the other and fixes $f$. Since $f$ has finite support, it is therefore a finite $R$-linear combination of the corresponding orbit sums $m_\lambda$. [L1, L2]

1.3 Distinct $m_\lambda$ have disjoint monomial supports. Hence a finite relation $\sum_\lambda c_\lambda m_\lambda=0$ has $c_\lambda=0$ for every $\lambda$, by comparing the coefficient of any monomial in the orbit of $\lambda$. [L1, algebra]

2.1 Steps 1.2 and 1.3 give spanning and linear independence, respectively, so the $m_\lambda$ form an $R$-basis. [step 1.2, step 1.3] ∎
