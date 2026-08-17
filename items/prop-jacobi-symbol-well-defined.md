---
id: prop-jacobi-symbol-well-defined
kind: proposition
title: "The Jacobi symbol is well defined on numerator residue classes"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-jacobi-symbol, thm-canonical-prime-factorisation,
       prop-legendre-symbol-well-defined,
       lem-every-integer-above-one-has-a-prime-divisor]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "A. Gorodnik, Number Theory, Lecture 10, §1"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture10.pdf"
    - title: "V. Shoup, A Computational Introduction to Number Theory and Algebra, 2nd ed., §12.2"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Statement

For every integer $a$ and odd positive integer $n$, the product in [[def-jacobi-symbol]] is independent of the ordering used to list the canonical prime factors and belongs to $\{-1,0,1\}$. The Jacobi symbol depends only on $a\pmod n$, and it is zero exactly when $\gcd(a,n)>1$. At $n=1$ it has the value $1$.

## Facts & Assumptions

**Given:** An integer $a$ and an odd positive integer $n$.

[L1] For odd $n\ge1$ with canonical prime factorisation $n=\prod_{i<r}p_i^{e_i}$, define $\left(\frac an\right):=\prod_{i<r}\left(\frac a{p_i}\right)^{e_i}$ ([[def-jacobi-symbol]]).

[L2] In a prime factorisation of a positive integer, the exponents are determined by the integer; primes outside the factor list have exponent zero ([[thm-canonical-prime-factorisation]]).

[L3] For every odd prime $p$, the Legendre symbol belongs to $\{-1,0,1\}$, depends only on the numerator modulo $p$, and equals zero exactly when $p$ divides the numerator ([[prop-legendre-symbol-well-defined]]).

[L4] Every integer greater than $1$ has a prime divisor ([[lem-every-integer-above-one-has-a-prime-divisor]]).

## Proof

**Proof technique:** direct.

1.1 The uniqueness in [L2] fixes the set of prime factors and every exponent in [L1]; changing their order does not change a finite product of integers. Each factor belongs to $\{-1,0,1\}$ by [L3], so their product does too, and at $n=1$ the empty product is $1$. [L1, L2, L3, algebra]

2.1 If $a\equiv b\pmod n$, then $a\equiv b\pmod p$ for every prime factor $p$ of $n$, so [L3] makes every corresponding factor in [L1] equal. The product is zero exactly when some prime factor $p$ of $n$ divides $a$, which gives $\gcd(a,n)>1$; conversely, if $\gcd(a,n)>1$, [L4] supplies a prime divisor of the gcd, hence a prime factor of $n$ dividing $a$, and [L3] makes that Legendre factor zero. [step 1.1, L1, L3, L4, algebra] ∎
