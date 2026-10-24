---
id: def-convex-concave-and-midpoint-convex-functions
kind: definition
title: "Convex, strictly convex, concave, strictly concave, and midpoint-convex real functions on an interval"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-interval]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "R. Gardner, Convex Functions, Notes 6.6"
      url: "https://faculty.etsu.edu/gardnerr/5210/notes/6-6.pdf"
pipeline_run: null
---

## Definition

Let $I\subseteq\mathbb R$ be an interval ([[def-interval]]) and let $f:I\to\mathbb R$. For $x,y\in I$ and $\lambda\in[0,1]$, the point $\lambda x+(1-\lambda)y$ belongs to $I$. The function $f$ is **convex** when the convex-combination inequality holds for every weight in $[0,1]$:

$$f(\lambda x+(1-\lambda)y)\le \lambda f(x)+(1-\lambda)f(y).$$

It is **strictly convex** when this inequality is strict whenever $x\ne y$ and $0<\lambda<1$. It is **concave** (respectively **strictly concave**) when $-f$ is convex (respectively strictly convex). It is **midpoint convex** when the displayed inequality is required only at $\lambda=1/2$.

## Remarks

The endpoint weights $0$ and $1$ impose equalities, so strict convexity does not ask for strictness there. A singleton interval satisfies the convexity and strict-convexity conditions vacuously.
