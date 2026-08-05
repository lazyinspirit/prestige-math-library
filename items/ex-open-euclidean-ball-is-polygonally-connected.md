---
id: ex-open-euclidean-ball-is-polygonally-connected
kind: example
title: "The straight segment between two points of an open Euclidean ball stays in the ball"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-polygonal-path-and-polygonal-connectedness, lem-euclidean-polygonal-paths-are-continuous, def-norm-and-normed-space, def-metric-ball]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Convex set"
      url: "https://en.wikipedia.org/wiki/Convex_set"
pipeline_run: null
---

## Example

Let $x,y\in B_2(c,r)\subseteq\mathbb R^n$, with $0\le t\le1$. The triangle inequality and absolute homogeneity give

$$\lVert(1-t)x+ty-c\rVert_2\le(1-t)\lVert x-c\rVert_2+t\lVert y-c\rVert_2<r.$$

So the segment from $x$ to $y$ stays in the ball. By [[lem-euclidean-polygonal-paths-are-continuous]] it is a polygonal path, and $B_2(c,r)$ is polygonally connected in the sense of [[def-polygonal-path-and-polygonal-connectedness]]. The norm and ball conventions are those of [[def-norm-and-normed-space]] and [[def-metric-ball]].
