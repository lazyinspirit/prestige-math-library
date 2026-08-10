---
id: ex-reduction-mod-two-proves-a-cubic-irreducible
kind: example
title: 'Reduction modulo 2 proves x^3+17x+391 irreducible over Q'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-reduction-mod-prime-irreducibility-test, thm-quadratic-and-cubic-irreducibility-test, prop-integers-modulo-n-as-a-quotient-ring, def-prime, lem-divisor-bound, def-int-abs, lem-int-abs-properties, thm-int-ordered-ring, lem-nat-embeds-int, lem-nat-discrete]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Neil Donaldson, Math 120B Notes, example after Theorem 23.13'
      url: 'https://www.math.uci.edu/~ndonalds/math120b/2poly.pdf'
pipeline_run: null
---

## Example

The polynomial $f=x^3+17x+391$ is irreducible in $\mathbb Q[x]$.

## Facts & Assumptions

**Given:** The primitive integer polynomial $f=x^3+17x+391$.

[L1] If a primitive integer polynomial has leading coefficient nonzero modulo a prime and its reduction is irreducible, then it is irreducible over $\mathbb Q$ ([[thm-reduction-mod-prime-irreducibility-test]]).

[L2] A cubic over a field is irreducible exactly when it has no root in the field ([[thm-quadratic-and-cubic-irreducibility-test]]).

[L3] The ring $\mathbb Z/2$ is the quotient $\mathbb Z/2\mathbb Z$ ([[prop-integers-modulo-n-as-a-quotient-ring]]).

[L4] The integer $2$ is prime ([[def-prime]]).

[L5] Integer divisors of a nonzero integer are bounded in absolute value ([[lem-divisor-bound]]).

[L6] Integer absolute value is defined by sign cases ([[def-int-abs]]).

[L7] Integer absolute value is nonnegative and detects zero ([[lem-int-abs-properties]]).

[L8] The integers form an ordered ring ([[thm-int-ordered-ring]]).

[L9] Natural numbers embed in the integers preserving arithmetic ([[lem-nat-embeds-int]]).

[L10] The natural order is discrete ([[lem-nat-discrete]]).

## Verification

**Proof technique:** direct.

1.1 Using [L3], reduction modulo the prime $2$ of [L4] gives $\bar f=x^3+x+1$; its values at the only residues $0$ and $1$ are both $1$, so [L2] makes $\bar f$ irreducible. [given, L2, L3, L4, L5, L6, L7, L8, L9, L10, algebra]

2.1 The leading coefficient survives modulo $2$, and $f$ is primitive because it is monic, so [L1] proves that $f$ is irreducible over $\mathbb Q$. [step 1.1, L1] ∎
