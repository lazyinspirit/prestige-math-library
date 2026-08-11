---
id: cor-xn-minus-p-is-irreducible-over-q
kind: corollary
title: 'For every prime p and positive n, x^n-p is irreducible over Q'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-eisenstein-irreducibility-criterion, def-prime, lem-int-cancellation, lem-units-of-z]
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

## Statement

For every prime integer $p$ and every positive natural number $n$, the polynomial $x^n-p$ is irreducible in $\mathbb Q[x]$.

## Facts & Assumptions

**Given:** A prime integer $p$ and a natural number $n\ge1$.

[L1] A primitive integer polynomial is irreducible over $\mathbb Q$ when a prime divides every nonleading coefficient, does not divide the leading coefficient, and its square does not divide the constant coefficient ([[thm-eisenstein-irreducibility-criterion]]).

[L2] A prime integer satisfies $p>1$ and has no positive divisor other than $1,p$ ([[def-prime]]).

[L3] Nonzero integers cancel in products ([[lem-int-cancellation]]).

[L4] The only integer units are $1$ and $-1$ ([[lem-units-of-z]]).

## Proof

**Proof technique:** direct.

1.1 The polynomial $x^n-p$ is primitive because its leading coefficient is the unit $1$ from [L4]; the prime $p$ divides every nonleading coefficient, including the zero intermediate coefficients, and does not divide $1$. [given, L2, L4]

2.1 If $p^2$ divided $p$, cancellation by the nonzero $p$ using [L3] would make $p$ a unit, contradicting [L2] and [L4]; thus Eisenstein's criterion [L1] applies and proves irreducibility. [step 1.1, L1, L2, L3, L4] ∎
