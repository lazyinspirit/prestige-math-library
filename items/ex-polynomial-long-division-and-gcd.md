---
id: ex-polynomial-long-division-and-gcd
kind: example
title: 'Long division, the Euclidean algorithm and a Bézout identity in Q[x]'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-polynomial-division-algorithm-over-a-field, thm-bezout-identity-for-polynomials, thm-rat-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Thomas W. Judson, Abstract Algebra: Theory and Applications, Example 17.7'
      url: 'https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/17%3A_Polynomials'
    - title: 'Neil Donaldson, Math 120B Notes, Section 23'
      url: 'https://www.math.uci.edu/~ndonalds/math120b/2poly.pdf'
pipeline_run: null
---

## Example

In $\mathbb Q[x]$, put $f=x^3-2x+1$ and $g=x^2-1$. Long division and the Euclidean algorithm give

$$ f=xg+(-x+1),\qquad g=(-x-1)(-x+1). $$

Thus $\gcd(f,g)=x-1$ and

$$ x-1=-f+xg. $$

## Facts & Assumptions

**Given:** The displayed polynomials $f,g\in\mathbb Q[x]$.

[L1] Polynomial division over a field gives a unique remainder of degree below the divisor ([[thm-polynomial-division-algorithm-over-a-field]]).

[L2] The last nonzero Euclidean remainder, normalized to be monic, is the gcd and is a polynomial linear combination of the inputs ([[thm-bezout-identity-for-polynomials]]).

[L3] The rational numbers form a field ([[thm-rat-field]]).

## Verification

**Proof technique:** direct.

1.1 Direct multiplication gives $x(x^2-1)+(-x+1)=x^3-2x+1=f$, and $(-x-1)(-x+1)=x^2-1=g$, so these are the divisions licensed by [L1] over the field [L3]. [given, L1, L3, algebra]

2.1 The last nonzero remainder is $-x+1$, whose monic associate is $x-1$; negating the first remainder identity gives $x-1=-f+xg$, in agreement with [L2]. [step 1.1, L2, algebra] ∎
