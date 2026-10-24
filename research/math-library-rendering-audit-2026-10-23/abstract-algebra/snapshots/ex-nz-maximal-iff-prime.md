---
id: ex-nz-maximal-iff-prime
kind: example
title: 'For every integer $n>1$, $n\mathbb Z$ is a maximal ideal of $\mathbb Z$ if and only if $n$ is prime'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-integers-modulo-n-as-a-quotient-ring, thm-quotient-is-field-iff-ideal-maximal, cor-maximal-ideals-are-prime, cor-prime-iff-euclid-property, thm-z-mod-p-is-a-field, thm-int-comm-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Ernst, An Inquiry-Based Approach to Abstract Algebra, Maximal and Prime Ideals"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/An_Inquiry-Based_Approach_to_Abstract_Algebra_%28Ernst%29/08%3A_An_Introduction_to_Rings/8.04%3A_Maximal_and_Prime_Ideals"
pipeline_run: null
---

## Example

For every integer $n>1$, $n\mathbb Z$ is a maximal ideal of $\mathbb Z$ if and only if $n$ is prime.

## Facts & Assumptions

**Given:** An integer $n>1$.

[L1] $\mathbb Z/n$ is the quotient ring $\mathbb Z/n\mathbb Z$ ([[prop-integers-modulo-n-as-a-quotient-ring]]).

[L2] A quotient is a field exactly for a maximal ideal ([[thm-quotient-is-field-iff-ideal-maximal]]).

[L3] A maximal ideal in a commutative ring is prime ([[cor-maximal-ideals-are-prime]]).

[L4] An integer greater than $1$ is prime exactly when it has the Euclid property ([[cor-prime-iff-euclid-property]]).

[L5] $\mathbb Z/p$ is a field for prime $p$ ([[thm-z-mod-p-is-a-field]]).

[L6] $\mathbb Z$ is a commutative ring ([[thm-int-comm-ring]]).

## Verification

**Proof technique:** direct.

1.1 If $n$ is prime, [L5] and [L1] make $\mathbb Z/n\mathbb Z$ a field, so [L2] makes $n\mathbb Z$ maximal. [L1, L2, L3, L4, L5, L6, given]

2.1 If $n\mathbb Z$ is maximal, [L3] makes it prime; applying this to a factorisation $n=ab$ gives the Euclid property and [L4] makes $n$ prime. [step 1.1, L1, L2, L3, L4, L5, L6, given, algebra]

3.1 The two implications prove the example. [step 2.1] ∎
