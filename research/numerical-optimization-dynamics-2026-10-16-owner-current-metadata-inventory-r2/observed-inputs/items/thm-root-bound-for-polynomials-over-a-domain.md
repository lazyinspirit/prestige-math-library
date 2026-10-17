---
id: thm-root-bound-for-polynomials-over-a-domain
kind: theorem
title: 'A nonzero polynomial of degree $n$ over an integral domain has at most $n$ distinct roots'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-factor-theorem-over-a-commutative-ring, thm-polynomial-degree-of-a-product-over-a-domain, def-zero-divisor-and-integral-domain, thm-induction-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'Thomas W. Judson, Abstract Algebra: Theory and Applications, Corollary 17.9'
      url: 'https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/17%3A_Polynomials'
    - title: 'Neil Donaldson, Math 120B Notes, Theorem 23.14'
      url: 'https://www.math.uci.edu/~ndonalds/math120b/2poly.pdf'
pipeline_run: null
---

## Statement

Let $D$ be an integral domain. A nonzero polynomial $f\in D[x]$ of degree $n$ has at most $n$ distinct roots in $D$.

## Facts & Assumptions

**Given:** An integral domain $D$ and a nonzero polynomial $f\in D[x]$ of degree $n$.

[L1] If $a$ is a root of $f$, then $f=(x-a)q$ for some polynomial $q$ ([[cor-factor-theorem-over-a-commutative-ring]]).

[L2] Degrees add when nonzero polynomials over a domain are multiplied ([[thm-polynomial-degree-of-a-product-over-a-domain]]).

[L3] In an integral domain, a product is zero only if one factor is zero ([[def-zero-divisor-and-integral-domain]]).

[L4] If a property holds at $0$ and passes from $n$ to $n+1$, it holds for every natural number ([[thm-induction-principle]]).

## Proof

**Proof technique:** induction.

1.1 If $n=0$, then $f$ is a nonzero constant and has no root, proving the base case. [base, given]

2.1 For $n>0$, if $f$ has no root the claim is immediate; otherwise choose a root $a$, use [L1] to write $f=(x-a)q$, and use [L2] to obtain $\deg q=n-1$. [step 1.1, ih, L1, L2, choose]

3.1 If $b\ne a$ is another root, then $0=f(b)=(b-a)q(b)$, and [L3] gives $q(b)=0$ because $b-a\ne0$; the induction hypothesis bounds the roots other than $a$ by $n-1$, so $f$ has at most $n$ roots, and [L4] completes the induction. [step 2.1, ih, L3, L4, discharge-induction] ∎
