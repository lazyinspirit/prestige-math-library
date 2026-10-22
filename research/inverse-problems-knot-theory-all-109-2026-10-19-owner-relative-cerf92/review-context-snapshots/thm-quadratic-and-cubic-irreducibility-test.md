---
id: thm-quadratic-and-cubic-irreducibility-test
kind: theorem
title: 'A polynomial of degree two or three over a field is irreducible exactly when it has no root in the field'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [cor-factor-theorem-over-a-commutative-ring, thm-polynomial-degree-of-a-product-over-a-domain, cor-units-in-a-polynomial-ring-over-a-domain, def-irreducible-and-prime-elements-in-a-domain]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'Neil Donaldson, Math 120B Notes, Theorem 23.8'
      url: 'https://www.math.uci.edu/~ndonalds/math120b/2poly.pdf'
pipeline_run: null
---

## Statement

Let $F$ be a field and let $f\in F[x]$ have degree $2$ or $3$. Then $f$ is irreducible over $F$ if and only if $f$ has no root in $F$.

## Facts & Assumptions

**Given:** A field $F$ and a polynomial $f\in F[x]$ of degree $2$ or $3$.

[L1] An element $a\in F$ is a root of $f$ exactly when $x-a$ divides $f$ ([[cor-factor-theorem-over-a-commutative-ring]]).

[L2] Degrees add in a product of nonzero polynomials over a field ([[thm-polynomial-degree-of-a-product-over-a-domain]]).

[L3] The units of $F[x]$ are exactly the nonzero constants ([[cor-units-in-a-polynomial-ring-over-a-domain]]).

[L4] A nonzero nonunit is irreducible exactly when every factorization has a unit factor ([[def-irreducible-and-prime-elements-in-a-domain]]).

## Proof

**Proof technique:** direct.

1.1 If $f$ has a root $a$, then [L1] gives $f=(x-a)q$; [L2] and $\deg f\ge2$ make both factors nonunits by [L3], so [L4] shows that $f$ is reducible. [given, L1, L2, L3, L4]

2.1 Conversely, if $f=gh$ with both factors nonunits, [L2] and [L3] give positive degrees summing to $2$ or $3$, so one factor has degree $1$; writing it as $cx+d$ with $c\ne0$, it has root $-c^{-1}d$, and that root is a root of $f$. Thus reducibility implies a root, proving the biconditional. [given, L2, L3, L4, algebra] ∎
