---
id: thm-elementary-symmetric-polynomials-are-algebraically-independent
kind: theorem
title: "The elementary symmetric polynomials are algebraically independent over the coefficient ring"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-leading-multidegrees-of-elementary-symmetric-monomials, def-multivariate-polynomial-ring-by-iteration]
justified_by: []
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "K. Conrad, Symmetric Polynomials, Section 2"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/symmfunction.pdf"
pipeline_run: null
---

## Statement

The elementary symmetric polynomials $e_1,\ldots,e_n$ are algebraically independent over $R$: if $Q\in R[T_1,\ldots,T_n]$ satisfies $Q(e_1,\ldots,e_n)=0$, then $Q=0$.

## Facts & Assumptions

**Given:** A commutative ring $R$ and a polynomial $Q\in R[T_1,\ldots,T_n]$.

[L1] Over a commutative ring with $1\ne0$, distinct exponent tuples $b$ give the monomials $e_1^{b_1}\cdots e_n^{b_n}$ distinct leading multidegrees, each with leading coefficient $1$ ([[lem-leading-multidegrees-of-elementary-symmetric-monomials]]).

[L2] A polynomial in an iterated polynomial ring has finite support and is zero exactly when every coefficient is zero ([[def-multivariate-polynomial-ring-by-iteration]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $Q\ne0$ but $Q(e_1,\ldots,e_n)=0$. [assume-contra]

2.1 Since $Q\ne0$, some coefficient $c_b$ is nonzero by [L2], so $1\ne0$ in $R$ and [L1] applies. Among the finitely many monomials $c_bT_1^{b_1}\cdots T_n^{b_n}$ of $Q$ with $c_b\ne0$, choose one whose substituted leading multidegree is greatest. [step 1.1, given, L1, L2, choose]

3.1 By [L1], no other substituted monomial has that leading multidegree, and the chosen substituted monomial has leading coefficient $c_b\ne0$. Hence this term cannot cancel in $Q(e_1,\ldots,e_n)$, even if $R$ has zero divisors. [step 2.1, L1, algebra]

4.1 This contradicts $Q(e_1,\ldots,e_n)=0$, whose every coefficient is zero by [L2]. Therefore $Q=0$. [step 1.1, step 3.1, L2, discharge-contradiction] ∎
