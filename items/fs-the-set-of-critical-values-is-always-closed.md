---
id: fs-the-set-of-critical-values-is-always-closed
kind: false-statement
title: "The critical-value set need not be closed"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-the-critical-value-set-of-a-smooth-map-is-sigma-compact,
       cor-regular-values-form-a-dense-g-delta-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Statement

**False claim:** the critical value set of a smooth map is always closed.

## Facts & Assumptions

**Given:** A smooth bump $\beta:\mathbb R\to\mathbb R$ supported in $[-1,1]$ with $\beta(0)=1$, $\beta'(0)=0$, and $0<\beta(t)<1$ for $0<|t|<1$, together with the smooth map
$$
f(x):=\sum_{k=1}^\infty \left(1-\frac1k\right)\beta\bigl(2^k(x-k)\bigr).
$$

[L1] A sigma-compact set need not be closed, and regular values can be dense despite the presence of critical values accumulating at them ([[prop-the-critical-value-set-of-a-smooth-map-is-sigma-compact]], [[cor-regular-values-form-a-dense-g-delta-set]]).

## Refutation
**Proof technique:** direct.

1.1 The supports of the summands are pairwise disjoint, so the series defines a smooth function. At each center $x=k$, the derivative is zero and $$ f(k)=1-\frac1k. $$ Thus every value $1-\frac1k$ is a critical value. [given, algebra]

2.1 The sequence $1-\frac1k$ converges to $1$. But $f(x)\neq 1$ for every $x$, because every summand has height strictly below $1$ and outside the supports the function is $0$. Hence $1$ is a regular value with empty fibre, not a critical value. [step 1.1, algebra]

3.1 Therefore the critical value set contains $\{1-\frac1k:k\ge 1\}$ but not its limit $1$, so it is not closed. This is consistent with [L1]. [L1, step 2.1] ∎