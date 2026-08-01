---
id: def-inflection-point-by-change-of-convexity
kind: definition
title: "An inflection point as a point of continuity where convexity changes to concavity or conversely"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-convex-concave-and-midpoint-convex-functions, def-continuity-real]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "OpenStax Calculus Volume 1, §4.5"
      url: "https://openstax.org/books/calculus-volume-1/pages/4-5-derivatives-and-the-shape-of-a-graph"
pipeline_run: null
---

## Definition

Let $f:I\to\mathbb R$ and let $c$ be an interior point of the interval $I$.
The point $c$ is an **inflection point** when $f$ is continuous at $c$
([[def-continuity-real]]) and there is some $\delta>0$ such that, in either
order, $f$ is convex but not concave on $I\cap(c-\delta,c)$ and concave but
not convex on $I\cap(c,c+\delta)$
([[def-convex-concave-and-midpoint-convex-functions]]).

## Remarks

The condition $f''(c)=0$, even when defined, is neither part of this definition nor sufficient by itself: a change of shape is required.
