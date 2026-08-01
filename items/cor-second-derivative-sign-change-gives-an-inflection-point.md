---
id: cor-second-derivative-sign-change-gives-an-inflection-point
kind: corollary
title: "A continuous function whose second derivative has opposite signs on the two sides of a point has an inflection point there"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-inflection-point-by-change-of-convexity, cor-second-derivative-characterises-convexity, def-higher-derivatives-and-smoothness]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "OpenStax Calculus Volume 1, §4.5"
      url: "https://openstax.org/books/calculus-volume-1/pages/4-5-derivatives-and-the-shape-of-a-graph"
pipeline_run: null
---

## Statement

Let $f$ be continuous at an interior point $c$ and twice differentiable on each of $(a,c)$ and $(c,b)$. If $f''\ge0$ on one of those intervals and $f''\le0$ on the other, then $c$ is an inflection point of $f$.

## Facts & Assumptions

**Given:** The stated continuity and one-sided twice-differentiability hypotheses.

[L1] A twice differentiable function on an open interval is convex if and only if its second derivative is nonnegative ([[cor-second-derivative-characterises-convexity]]).

[L2] An inflection point is a point of continuity where convexity changes to concavity or conversely ([[def-inflection-point-by-change-of-convexity]]).

## Proof

**Proof technique:** cases.

1.1 On the side where $f''\ge0$, [L1] makes $f$ convex; on the side where $f''\le0$, apply [L1] to $-f$ to make $f$ concave. [assume-case convex_left, L1, L2]

2.1 If the signs occur in the opposite order, the same argument interchanges the two sides. [assume-case convex_right, step 1.1, L2, algebra]

3.1 In either case the assumed continuity at $c$ and the change of convexity/concavity meet [L2]'s definition. [step 1.1, step 2.1, cases-exhaustive] ∎
