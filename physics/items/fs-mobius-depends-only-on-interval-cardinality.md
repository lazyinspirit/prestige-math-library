---
id: fs-mobius-depends-only-on-interval-cardinality
kind: false-statement
title: "False: $\\mu_P(x,y)$ depends only on the cardinality of $[x,y]$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-mobius-function-of-a-finite-chain, thm-mobius-function-of-a-boolean-lattice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "R. Stanley, Enumerative Combinatorics, Volume 1, §§3.6–3.8"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
pipeline_run: null
---

## Statement

If two finite intervals have the same cardinality, then their endpoint Möbius values are equal.

## Facts & Assumptions

**Given:** A four-element chain $c_0<c_1<c_2<c_3$ and the four-element diamond $\{\bot,a,b,\top\}$ with $\bot<a<\top$, $\bot<b<\top$, and $a,b$ incomparable.

[L1] On a finite chain the endpoint value is $0$ whenever the interval contains an intermediate element ([[thm-mobius-function-of-a-finite-chain]]).

[L2] The diamond is the Boolean lattice on a two-element set, whose endpoint value is $(-1)^2=1$ ([[thm-mobius-function-of-a-boolean-lattice]]).

## Refutation

**Proof technique:** direct.

1.1 The endpoint interval $[c_0,c_3]$ has four elements and Möbius value $0$ by [L1]. [L1]

1.2 The endpoint interval $[\bot,\top]$ in the diamond also has four elements but has Möbius value $1$ by [L2]. [L2]

2.1 Equal interval cardinality therefore does not determine the Möbius value; the internal order structure matters. [step 1.1, step 1.2] ∎
