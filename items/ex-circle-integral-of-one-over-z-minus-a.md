---
id: ex-circle-integral-of-one-over-z-minus-a
kind: example
title: "Direct computation of the integral of 1/(z-a) around a semicircle and a full circle centred at a"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-circle-integrals-of-integer-monomials, prop-reversal-and-concatenation-of-complex-line-integrals]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Weber, Lecture Notes in Complex Analysis, Example 1.7.1"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
pipeline_run: null
---

## Example

For $r>0$ and $\gamma(t)=a+r e^{it}$,
$$\int_{0\le t\le\pi}\frac{dz}{z-a}=i\pi,\qquad \int_{0\le t\le2\pi}\frac{dz}{z-a}=2\pi i.$$
Reversing either orientation negates its value.

## Facts & Assumptions

**Given:** The positively oriented semicircle and circle centred at $a$.

[L1] The integer-monomial circle theorem gives the full-circle value $2\pi i$ for exponent $-1$ ([[thm-circle-integrals-of-integer-monomials]]).

[L2] Reversal negates a complex contour integral ([[prop-reversal-and-concatenation-of-complex-line-integrals]]).

## Verification

**Proof technique:** direct.

1.1 Since $dz=ire^{it}dt$ and $z-a=re^{it}$, their quotient is the constant $i$; integration over $[0,\pi]$ and $[0,2\pi]$ gives $i\pi$ and $2\pi i$. [algebra]

2.1 The full-circle value agrees with [L1], and [L2] gives the negative values on reversed paths. [step 1.1, L1, L2]

3.1 The positive-radius hypothesis ensures that the denominator never vanishes. [given] ∎
