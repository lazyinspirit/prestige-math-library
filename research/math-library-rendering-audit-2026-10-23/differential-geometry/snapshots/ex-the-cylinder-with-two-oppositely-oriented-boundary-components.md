---
id: ex-the-cylinder-with-two-oppositely-oriented-boundary-components
kind: example
title: "A cylinder with oppositely oriented boundary components"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-product-orientation, def-induced-boundary-orientation]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ioan Mărcuț, Manifolds (2017 lecture notes), §§14.5, 15.1"
      url: "https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf"
    - title: "Will Merry, Differential Geometry (2021), Lecture 24"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Example

For the product orientation on $[0,1]\times S^1$, the boundary circles $\{1\}\times S^1$ and $\{0\}\times S^1$ receive opposite orientations.

## Facts & Assumptions

**Given:** The interval $[0,1]$ with positive tangent $\partial_t$, the circle $S^1$ with a chosen orientation, and $[0,1]\times S^1$ with the product orientation in that factor order.

[L1] The product orientation orders the interval tangent before an oriented basis of the circle tangent ([[def-product-orientation]]).

[L2] A boundary basis is positive exactly when placing an outward vector before it gives the ambient orientation ([[def-induced-boundary-orientation]]).

## Verification

**Proof technique:** direct.

1.1 Along $\{1\}\times S^1$, the outward vector is $+\partial_t$, whereas along $\{0\}\times S^1$ it is $-\partial_t$. [given, algebra]

2.1 If $v$ is a positive tangent vector to $S^1$, then $(\partial_t,v)$ is positive by [L1]. Thus [L2] makes $v$ positive on $\{1\}\times S^1$, while it makes $-v$ positive on $\{0\}\times S^1$, because $(-\partial_t,-v)$ has the same orientation as $(\partial_t,v)$. The two boundary-circle orientations are opposite. [given, L1, L2, step 1.1, algebra] ∎
