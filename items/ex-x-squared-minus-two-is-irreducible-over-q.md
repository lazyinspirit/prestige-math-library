---
id: ex-x-squared-minus-two-is-irreducible-over-q
kind: example
title: 'The polynomial $x^2-2$ is irreducible over $\mathbb Q$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-rational-root-theorem, thm-quadratic-and-cubic-irreducibility-test, thm-rat-field, def-prime, lem-divisor-bound, def-int-abs, lem-int-abs-properties, thm-int-ordered-ring, lem-nat-embeds-int, lem-nat-discrete]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'Thomas W. Judson, Abstract Algebra: Theory and Applications, examples after Theorem 17.8'
      url: 'https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/17%3A_Polynomials'
pipeline_run: null
---

## Example

The polynomial $x^2-2$ is irreducible in $\mathbb Q[x]$.

## Facts & Assumptions

**Given:** The polynomial $f=x^2-2\in\mathbb Z[x]\subseteq\mathbb Q[x]$.

[L1] A reduced rational root $r/s$ of an integer polynomial has numerator dividing the constant coefficient and denominator dividing the leading coefficient ([[thm-rational-root-theorem]]).

[L2] A quadratic over a field is irreducible exactly when it has no root in that field ([[thm-quadratic-and-cubic-irreducibility-test]]).

[L3] An integer is prime when it exceeds $1$ and has no positive divisors other than $1$ and itself ([[def-prime]]).

[L4] A divisor of a nonzero integer has absolute value at most the absolute value of that integer ([[lem-divisor-bound]]).

[L5] Integer absolute value is given by the positive and negative cases ([[def-int-abs]]).

[L6] Integer absolute value is nonnegative and vanishes exactly at zero ([[lem-int-abs-properties]]).

[L7] The integers form an ordered ring ([[thm-int-ordered-ring]]).

[L8] The natural numbers embed in the integers preserving their arithmetic ([[lem-nat-embeds-int]]).

[L9] The natural-number order is discrete ([[lem-nat-discrete]]).

[L10] The rational numbers form a field ([[thm-rat-field]]).

## Verification

**Proof technique:** direct.

1.1 Facts [L3] through [L9] show that the positive divisors of $2$ are $1,2$ and the only positive divisor of $1$ is $1$. Hence [L3] makes $2$ prime, and [L1] forces a reduced rational root to have denominator $1$ and numerator in the complete list $1,-1,2,-2$. [given, L1, L3, L4, L5, L6, L7, L8, L9]

2.1 Evaluating gives $-1,-1,2,2$, respectively, so none is a root; [L10] supplies the field hypothesis and [L2] therefore makes the quadratic irreducible over $\mathbb Q$. [step 1.1, L2, L10, algebra] ∎
