---
id: thm-bezout-identity-for-polynomials
kind: theorem
title: 'Bézout identity and the Euclidean algorithm for polynomials over a field'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-monic-greatest-common-divisor-of-polynomials, thm-polynomial-division-algorithm-over-a-field]
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
    - title: 'Thomas W. Judson, Abstract Algebra: Theory and Applications, Theorem 17.10'
      url: 'https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/17%3A_Polynomials'
    - title: 'Neil Donaldson, Math 120B Notes, Section 23'
      url: 'https://www.math.uci.edu/~ndonalds/math120b/2poly.pdf'
pipeline_run: null
---

## Statement

Let $F$ be a field and let $f,g\in F[x]$ be not both zero. Repeated polynomial division terminates at a last nonzero remainder, whose monic associate is $d=\gcd(f,g)$. There are $A,B\in F[x]$ such that

$$ Af+Bg=d. $$

Moreover, $d$ divides both $f$ and $g$, and every common divisor of $f$ and $g$ divides $d$.

## Facts & Assumptions

**Given:** A field $F$ and polynomials $f,g\in F[x]$ not both zero.

[L1] The monic gcd is the monic generator of the ideal $(f,g)$ ([[def-monic-greatest-common-divisor-of-polynomials]]).

[L2] Division by a nonzero polynomial over a field gives a unique remainder of smaller degree or zero ([[thm-polynomial-division-algorithm-over-a-field]]).

## Proof

**Proof technique:** direct.

1.1 If necessary interchange $f$ and $g$ so the second input is nonzero. Repeatedly apply [L2]; this also covers a zero first input, when the first remainder is already zero. Each nonzero remainder has strictly smaller natural degree than its divisor, so the process terminates. Every remainder is a polynomial linear combination of the original $f,g$ by back-substitution, and the last nonzero remainder $r$ divides the preceding remainder and hence, successively, both inputs. [given, L2, algebra]

2.1 Every common divisor of $f,g$ divides each remainder and therefore divides $r$; after multiplying $r$ and its back-substituted coefficients by $\operatorname{lc}(r)^{-1}$, the resulting monic polynomial $d=Af+Bg$ has the divisibility property and generates $(f,g)$, so [L1] identifies it with $\gcd(f,g)$. [step 1.1, L1, L2, algebra] ∎
