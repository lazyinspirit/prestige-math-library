---
id: thm-polynomial-quotient-is-a-field-iff-irreducible
kind: theorem
title: 'For a nonconstant p in F[x], the ideal (p) is maximal and F[x]/(p) is a field exactly when p is irreducible'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-bezout-identity-for-polynomials, def-generated-and-principal-ideals, def-prime-and-maximal-ideals, def-quotient-ring, thm-quotient-is-field-iff-ideal-maximal, def-irreducible-and-prime-elements-in-a-domain]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Thomas W. Judson, Abstract Algebra: Theory and Applications, Theorem 17.22'
      url: 'https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/17%3A_Polynomials'
pipeline_run: null
---

## Statement

Let $F$ be a field and let $p\in F[x]$ be nonconstant. The following are equivalent:

1. $p$ is irreducible;
2. the principal ideal $(p)$ is maximal;
3. the quotient ring $F[x]/(p)$ is a field.

## Facts & Assumptions

**Given:** A field $F$ and a nonconstant polynomial $p\in F[x]$.

[L1] The monic gcd of two polynomials is a polynomial linear combination of them ([[thm-bezout-identity-for-polynomials]]).

[L2] The principal ideal $(p)$ consists of the multiples of $p$ ([[def-generated-and-principal-ideals]]).

[L3] A maximal ideal is a proper ideal with no proper ideal strictly between it and the whole ring ([[def-prime-and-maximal-ideals]]).

[L4] In the quotient ring $R/I$, multiplication is $(r+I)(s+I)=rs+I$ ([[def-quotient-ring]]).

[L5] For a commutative ring $R$, the quotient $R/M$ is a field if and only if $M$ is maximal ([[thm-quotient-is-field-iff-ideal-maximal]]).

[L6] An irreducible element is a nonzero nonunit with no factorization into two nonunits ([[def-irreducible-and-prime-elements-in-a-domain]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $p$ is irreducible and $f+(p)$ is a nonzero residue class; then $p\nmid f$, so every common divisor of $p,f$ is a unit and [L1] gives $A p+B f=1$, whence [L4] gives $(B+(p))(f+(p))=1+(p)$; every nonzero class is invertible, so the quotient is a field. [given, L1, L2, L4, L6]

1.2 Conversely, suppose the quotient is a field and $p=ab$. By [L4], the two residue classes have product zero, so one is zero; say $a\in(p)$, and write $a=pc$. Then $p=ab=pcb$. A direct leading-coefficient argument shows that $F[x]$ has no zero divisors, because $F$ is a field, so cancellation of the nonzero polynomial $p$ gives $cb=1$ and makes $b$ a unit. The other case similarly makes $a$ a unit, and [L6] makes $p$ irreducible. [given, L2, L4, L6, algebra]

2.1 Steps 1.1 and 1.2 prove that irreducibility is equivalent to quotient fieldness, and [L5] identifies quotient fieldness with maximality of $(p)$ in the sense of [L3]. [step 1.1, step 1.2, L3, L5] ∎
