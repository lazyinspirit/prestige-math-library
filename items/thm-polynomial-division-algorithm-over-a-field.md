---
id: thm-polynomial-division-algorithm-over-a-field
kind: theorem
title: 'Division algorithm for polynomials over a field'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-monic-polynomial-division, thm-polynomial-degree-of-a-product-over-a-domain, def-field, def-polynomial-degree-leading-coefficient-and-monic]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Thomas W. Judson, Abstract Algebra: Theory and Applications, Theorem 17.6'
      url: 'https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/17%3A_Polynomials'
    - title: 'Neil Donaldson, Math 120B Notes, Theorem 23.2'
      url: 'https://www.math.uci.edu/~ndonalds/math120b/2poly.pdf'
pipeline_run: null
---

## Statement

Let $F$ be a field, let $f\in F[x]$, and let $0\ne g\in F[x]$. There are unique polynomials $q,r\in F[x]$ such that

$$ f=qg+r,\qquad r=0\ \text{or}\ \deg r<\deg g. $$

The statement includes $f=0$ and nonzero constant divisors.

## Facts & Assumptions

**Given:** A field $F$, a polynomial $f$, and a nonzero polynomial $g$ with leading coefficient $c$.

[L1] Division by a monic polynomial over a commutative ring has a unique quotient and degree-small remainder ([[thm-monic-polynomial-division]]).

[L2] Degrees add under multiplication of nonzero polynomials over a domain ([[thm-polynomial-degree-of-a-product-over-a-domain]]).

[L3] Every nonzero element of a field has a multiplicative inverse, and a field is commutative ([[def-field]]).

[L4] A nonzero polynomial has a nonzero leading coefficient; it is monic when that coefficient is $1$ ([[def-polynomial-degree-leading-coefficient-and-monic]]).

## Proof

**Proof technique:** direct.

1.1 By [L3] the coefficient $c$ has an inverse, and $h=c^{-1}g$ is monic with the same degree as $g$; [L1] gives unique $Q,r$ with $f=Qh+r$ and $r=0$ or $\deg r<\deg g$, so $q=c^{-1}Q$ gives $f=qg+r$. [given, L1, L3, L4, construct]

2.1 If $f=qg+r=q'g+r'$, then $(q-q')g=r'-r$; unless $q=q'$, [L2] makes the left side have degree at least $\deg g$, while the right side is zero or has degree below $\deg g$, so $q=q'$ and then $r=r'$. [step 1.1, L2, L4, algebra] ∎
