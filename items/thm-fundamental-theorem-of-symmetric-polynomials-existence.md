---
id: thm-fundamental-theorem-of-symmetric-polynomials-existence
kind: theorem
title: "Every symmetric polynomial over a commutative ring is a polynomial in the elementary symmetric polynomials"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-leading-multidegree-of-a-symmetric-polynomial-is-a-partition, lem-leading-multidegrees-of-elementary-symmetric-monomials, prop-symmetric-polynomials-form-a-subring]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Symmetric Polynomials, Section 2"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/symmfunction.pdf"
    - title: "D. Grinberg, An Introduction to Algebraic Combinatorics, Theorem 7.1.16"
      url: "https://arxiv.org/pdf/2506.00738v1"
pipeline_run: null
---

## Statement

For every commutative ring $R$ and every $n\in\mathbb N$, each symmetric polynomial $f\in R[x_1,\ldots,x_n]$ has the form

$$f=Q(e_1,\ldots,e_n)$$

for some $Q\in R[T_1,\ldots,T_n]$.

## Facts & Assumptions

**Given:** A commutative ring $R$, a natural number $n$, and a symmetric polynomial $f$.

[L1] The leading multidegree of a nonzero symmetric polynomial is weakly decreasing ([[lem-leading-multidegree-of-a-symmetric-polynomial-is-a-partition]]).

[L2] Over a commutative ring with $1\ne0$, the leading multidegree of $e_1^{b_1}\cdots e_n^{b_n}$ is the cumulative-sum tuple of $b$, with leading coefficient $1$ ([[lem-leading-multidegrees-of-elementary-symmetric-monomials]]).

[L3] The symmetric polynomials form a subring ([[prop-symmetric-polynomials-form-a-subring]]).

## Proof

**Proof technique:** direct.

1.1 The assertion is immediate for $f=0$ and for $n=0$, when the symmetric-polynomial ring is $R$. Assume now that $n>0$ and $f\ne0$; then some coefficient of $f$ is nonzero, so $1\ne0$ in $R$ and [L2] applies. [given, L3]

1.2 Let $a=(a_1,\ldots,a_n)$ be the leading multidegree of $f$ and let $c$ be its leading coefficient. By [L1], set $b_i=a_i-a_{i+1}$ for $i<n$ and $b_n=a_n$, all natural numbers. [given, L1]

2.1 By [L2], the polynomial $c e_1^{b_1}\cdots e_n^{b_n}$ has the same leading term as $f$, so their difference $f_1$ is either zero or has strictly smaller leading multidegree. It remains symmetric by [L3]. [step 1.2, L2, L3, algebra]

3.1 Repeat step 2.1 while the remainder is nonzero. The process terminates because all exponent tuples encountered are bounded coordinatewise by the finite support box of the original polynomial and strictly decrease lexicographically at each subtraction. [step 2.1]

4.1 Summing the finitely many subtracted monomials in the $e_i$ gives a polynomial $Q$ with $f=Q(e_1,\ldots,e_n)$. [step 3.1, algebra] ∎
