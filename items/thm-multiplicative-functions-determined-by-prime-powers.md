---
id: thm-multiplicative-functions-determined-by-prime-powers
kind: theorem
title: "Multiplicative functions are determined by their prime-power values"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-multiplicative-arithmetic-function, thm-canonical-prime-factorisation]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Victor Shoup, A Computational Introduction to Number Theory and Algebra, Theorem 2.37"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
    - title: "Kiran S. Kedlaya, An Introduction to Analytic Number Theory, Section 3.2"
      url: "https://kskedlaya.org/ant/chapter-3.html"
pipeline_run: null
---

## Statement

Let $f$ be a multiplicative arithmetic function, and write the canonical prime
factorization of $n\ge1$ as

$$
n=\prod_{i<r} p_i^{e_i}
$$

with distinct primes $p_i$ and exponents $e_i\ge1$. Then

$$
f(n)=\prod_{i<r} f(p_i^{e_i}).
$$

Conversely, if values are prescribed on every prime power $p^e$ with $e\ge1$,
then there is a unique multiplicative arithmetic function having those
prime-power values and $f(1)=1$.

## Facts & Assumptions

**Given:** A multiplicative arithmetic function $f$ and a positive integer $n$.

## Proof

**Proof technique:** direct.

1.1 By [[thm-canonical-prime-factorisation]], the prime-power factors $p_i^{e_i}$ are pairwise coprime and their product is $n$. Repeatedly applying multiplicativity gives $f(n)=f(\prod_{i<r} p_i^{e_i})=\prod_{i<r} f(p_i^{e_i})$. For $n=1$ this is the empty product, so it reads $f(1)=1$. [given, algebra]

1.2 For the converse, define $F(1):=1$ and, for $n>1$ with canonical factorization $n=\prod_{i<r} p_i^{e_i}$, define $F(n):=\prod_{i<r} c(p_i^{e_i})$, where $c(p^e)$ is the prescribed prime-power datum. This is well defined because [[thm-canonical-prime-factorisation]] uniquely determines the primes and exponents. [given, construct]

2.1 If $\gcd(m,n)=1$, then the canonical factorization of $mn$ is exactly the disjoint union of the canonical factorizations of $m$ and $n$, again by [[thm-canonical-prime-factorisation]]. Therefore the defining products for $F(mn)$, $F(m)$, and $F(n)$ split as $F(mn)=F(m)F(n)$, so $F$ is multiplicative. [step 1.2, algebra]

3.1 Any multiplicative function with the prescribed prime-power values must satisfy the formula of step 1.1, so it agrees with $F$ on every positive integer. Thus the extension is unique. [step 1.1, step 2.1] ∎
