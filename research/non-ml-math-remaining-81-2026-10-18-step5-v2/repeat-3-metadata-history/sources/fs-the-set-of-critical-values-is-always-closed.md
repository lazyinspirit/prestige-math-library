---
id: fs-the-set-of-critical-values-is-always-closed
kind: false-statement
title: "The critical-value set need not be closed"
status: published
dependency_level: 1
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [ def-critical-locus-and-critical-value-set ]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  repair: research/non-ml-math-remaining-81-2026-10-18-owner-step2-root-published-recording/receipts/fs-the-set-of-critical-values-is-always-closed.json
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Statement

**False claim:** the critical value set of a smooth map is always closed.

## Facts & Assumptions

**Given:** A smooth bump $\beta:\mathbb R\to\mathbb R$ supported in $[-1,1]$ with $\beta(0)=1$, $\beta'(0)=0$, and $0<\beta(t)<1$ for $0<|t|<1$, together with the smooth map $$ f(x):=\sum_{k=1}^\infty \left(1-\frac1k\right)\beta\bigl(2^k(x-k)\bigr). $$

[F1] For a smooth map, the critical-value set is the image of the points where the derivative is not surjective; values with empty fibre are regular ([[def-critical-locus-and-critical-value-set]]).

## Refutation
**Proof technique:** direct.

1.1 The supports of the summands are pairwise disjoint, so the series defines a smooth function. At each center $x=k$, the derivative of the $k$th summand is $\left(1-\frac1k\right)2^k\beta'(0)=0$, and every other summand vanishes nearby. Thus $f'(k)=0$, which is not surjective from $\mathbb R$ to $\mathbb R$, while $$ f(k)=1-\frac1k. $$ By [F1], every value $1-\frac1k$ is a critical value. [F1, given, algebra]

2.1 The sequence $1-\frac1k$ converges to $1$. But $f(x)\neq 1$ for every $x$, because every summand has height strictly below $1$ and outside the supports the function is $0$. Hence $1$ has empty fibre and is regular by [F1], not a critical value. [F1, step 1.1, algebra]

3.1 Therefore the critical value set contains $\{1-\frac1k:k\ge 1\}$ but not its limit $1$, so it is not closed. [step 2.1] ∎
