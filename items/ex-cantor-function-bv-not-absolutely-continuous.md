---
id: ex-cantor-function-bv-not-absolutely-continuous
kind: example
title: "The Cantor function is continuous and of bounded variation but not absolutely continuous"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-cantor-function-properties, cor-cantor-function-is-continuous,
       def-bounded-variation-and-total-variation,
       def-absolutely-continuous-function, lem-geometric-sequence-null,
       lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Christopher Heil, Absolute Continuity and the Banach-Zaretsky Theorem, Example 3.3"
      url: "https://heil.math.gatech.edu/papers/abscont_typosmarked.pdf"
pipeline_run: null
---

## Example

The Cantor function $c:[0,1]\to[0,1]$ is continuous and nondecreasing, so it has total variation one, but it is not absolutely continuous.

## Facts & Assumptions

**Given:** The Cantor function and its standard stage construction.

[L1] The Cantor function is continuous and nondecreasing, with $c(0)=0$ and $c(1)=1$ ([[cor-cantor-function-is-continuous]], [[thm-cantor-function-properties]]).

[L2] At stage $n$, the $2^n$ surviving closed intervals have total length $(2/3)^n$, and $c$ increases by $2^{-n}$ across each.

[L3] The sequence $(2/3)^n$ tends to zero ([[lem-geometric-sequence-null]]).

## Verification

**Proof technique:** direct.

1.1 Monotonicity makes every variation sum telescope after its absolute values are removed, so $\operatorname{Var}_{[0,1]}(c)=c(1)-c(0)=1$. Thus $c$ is BV. [L1]

2.1 For the finite disjoint family of the $2^n$ surviving intervals, the total length is $(2/3)^n$ but the sum of endpoint increments is $2^n2^{-n}=1$. By [L3], the former is eventually smaller than every prescribed $\delta>0$, while the latter never falls below, say, $1/2$. This contradicts the definition of absolute continuity. [L2, L3] ∎
