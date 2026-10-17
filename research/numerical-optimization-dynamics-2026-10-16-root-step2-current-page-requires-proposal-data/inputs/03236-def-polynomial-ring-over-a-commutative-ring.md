---
id: def-polynomial-ring-over-a-commutative-ring
kind: definition
title: 'The polynomial ring over a commutative ring as finitely supported coefficient sequences with convolution'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-commutative-ring, def-finite-sum-in-a-commutative-monoid]
justified_by: [lem-polynomial-operations-preserve-finite-support, thm-polynomial-ring-is-a-commutative-ring]
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'Thomas W. Judson, Abstract Algebra: Theory and Applications, Chapter 17.1'
      url: 'https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/17%3A_Polynomials'
    - title: 'Neil Donaldson, Math 120B Notes, Section 22'
      url: 'https://www.math.uci.edu/~ndonalds/math120b/2poly.pdf'
pipeline_run: null
---

## Definition

Let $R$ be a commutative ring ([[def-commutative-ring]]). A function $a\colon\mathbb N\to R$ has **finite support** when there is $N\in\mathbb N$ such that $a_i=0$ for every $i>N$. The **polynomial ring** $R[x]$ is the set of all finitely supported functions $a\colon\mathbb N\to R$.

For $a,b\in R[x]$ and $n\in\mathbb N$, define

$$ (a+b)_n:=a_n+b_n,\qquad (ab)_n:=\sum_{i+j=n}a_i b_j. $$

The convolution sum is a finite sum in the additive commutative monoid of $R$ ([[def-finite-sum-in-a-commutative-monoid]]). Write $0$ for the zero sequence, $1$ for the sequence with coefficient $1_R$ at index $0$ and zero elsewhere, and $x$ for the sequence with coefficient $1_R$ at index $1$ and zero elsewhere. The coefficient sequence supported at $0$ with value $r$ is denoted again by $r$, and a polynomial $a$ is written formally as $\sum_i a_i x^i$.

The closure of these operations and the commutative-ring axioms are established by [[lem-polynomial-operations-preserve-finite-support]] and [[thm-polynomial-ring-is-a-commutative-ring]].
