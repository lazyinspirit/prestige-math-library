---
id: ex-absolute-value-is-convex
kind: example
title: "The absolute-value function is convex"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-convex-concave-and-midpoint-convex-functions, lem-of-triangle-inequality, lem-of-abs-value]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "S. Boyd and L. Vandenberghe, Convex Optimization, §3.1"
      url: "https://web.stanford.edu/~boyd/cvxbook/"
pipeline_run: null
---

## Example

The function $f(x)=|x|$ is convex on $\mathbb R$. Indeed, for $0\le\lambda\le1$,

$$|\lambda x+(1-\lambda)y|\le|\lambda x|+|(1-\lambda)y|=\lambda|x|+(1-\lambda)|y|,$$

by the triangle inequality ([[lem-of-triangle-inequality]]) and absolute homogeneity ([[lem-of-abs-value]]), which is precisely the convexity inequality ([[def-convex-concave-and-midpoint-convex-functions]]).

## Remarks

Convexity does not entail differentiability at every point; the nondifferentiability of absolute value at zero is recorded in [[cex-absolute-value-is-not-differentiable-at-zero]] but is not a dependency of this example.
