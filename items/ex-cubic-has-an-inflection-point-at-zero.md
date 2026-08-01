---
id: ex-cubic-has-an-inflection-point-at-zero
kind: example
title: "$x\\mapsto x^3$ changes from concave to convex at zero and has an inflection point there"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-second-derivative-sign-change-gives-an-inflection-point, def-inflection-point-by-change-of-convexity, lem-derivative-of-a-power, def-higher-derivatives-and-smoothness]
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

## Example

For $f(x)=x^3$, the power rule gives $f''(x)=6x$ ([[lem-derivative-of-a-power]]). It is negative on $(-\infty,0)$ and positive on $(0,\infty)$, while $f$ is continuous at $0$. Therefore the sign-change criterion ([[cor-second-derivative-sign-change-gives-an-inflection-point]]) makes $0$ an inflection point ([[def-inflection-point-by-change-of-convexity]]).
