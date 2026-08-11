---
id: ex-eisenstein-proves-a-family-irreducible
kind: example
title: 'Eisenstein proves x^n-2 irreducible over Q for every positive n'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [cor-xn-minus-p-is-irreducible-over-q, def-prime, lem-divisor-bound, def-int-abs, lem-int-abs-properties, thm-int-ordered-ring, lem-nat-embeds-int, lem-nat-discrete]
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
    - title: 'Keith Conrad, Irreducibility Tests in Q[T], Example 1.6'
      url: 'https://kconrad.math.uconn.edu/blurbs/ringtheory/irredtestsoverQ.pdf'
pipeline_run: null
---

## Example

For every positive natural number $n$, the polynomial $x^n-2$ is irreducible in $\mathbb Q[x]$.

## Facts & Assumptions

**Given:** A natural number $n\ge1$.

[L1] For every prime $p$ and positive $n$, the polynomial $x^n-p$ is irreducible over $\mathbb Q$ ([[cor-xn-minus-p-is-irreducible-over-q]]).

[L2] An integer is prime when it exceeds $1$ and has no positive divisors other than $1$ and itself ([[def-prime]]).

[L3] A divisor of a nonzero integer is bounded in absolute value ([[lem-divisor-bound]]).

[L4] Integer absolute value is defined by sign cases ([[def-int-abs]]).

[L5] Integer absolute value is nonnegative and detects zero ([[lem-int-abs-properties]]).

[L6] The integers form an ordered ring ([[thm-int-ordered-ring]]).

[L7] Natural numbers embed in the integers preserving arithmetic ([[lem-nat-embeds-int]]).

[L8] The natural order is discrete ([[lem-nat-discrete]]).

## Verification

**Proof technique:** direct.

1.1 Facts [L2] through [L8] verify that $2>1$ and that its only positive divisors are $1$ and $2$, so $2$ is prime. [given, L2, L3, L4, L5, L6, L7, L8]

2.1 Apply [L1] with $p=2$ and the given positive $n$ to obtain the claimed irreducibility. [step 1.1, L1] ∎
