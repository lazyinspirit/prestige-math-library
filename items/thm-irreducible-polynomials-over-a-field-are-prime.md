---
id: thm-irreducible-polynomials-over-a-field-are-prime
kind: theorem
title: 'Every irreducible polynomial over a field is prime'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-bezout-identity-for-polynomials, def-irreducible-and-prime-elements-in-a-domain]
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
    - title: 'Neil Donaldson, Math 120B Notes, Theorem 23.10(2)'
      url: 'https://www.math.uci.edu/~ndonalds/math120b/2poly.pdf'
pipeline_run: null
---

## Statement

Let $F$ be a field. Every irreducible polynomial $p\in F[x]$ is prime: if $p$ divides $fg$, then $p$ divides $f$ or $p$ divides $g$.

## Facts & Assumptions

**Given:** A field $F$, an irreducible polynomial $p$, and polynomials $f,g$ with $p\mid fg$.

[L1] For polynomials not both zero, the monic gcd divides both inputs, every common divisor divides the gcd, and the gcd is a polynomial linear combination of the inputs ([[thm-bezout-identity-for-polynomials]]).

[L2] An irreducible element is a nonzero nonunit whose every factorization has a unit factor; a prime element divides one factor whenever it divides a product ([[def-irreducible-and-prime-elements-in-a-domain]]).

## Proof

**Proof technique:** direct.

1.1 If $p\mid f$ there is nothing to prove. Otherwise, if a common divisor $d$ of $p$ and $f$ were a nonunit, a factorization $p=de$ and irreducibility would make $e$ a unit, so $d$ would be associate to $p$ and $d\mid f$ would imply $p\mid f$, a contradiction. Thus every common divisor is a unit, and [L1] gives $A,B\in F[x]$ with $Ap+Bf=1$. [given, L1, L2, choose, algebra]

2.1 Multiplying the identity by $g$ gives $Apg+Bfg=g$; both terms on the left are divisible by $p$, the second because $p\mid fg$, so $p\mid g$. Thus $p$ satisfies the prime condition in [L2]. [step 1.1, L2, algebra] ∎
