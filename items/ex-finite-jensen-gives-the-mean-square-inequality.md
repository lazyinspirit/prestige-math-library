---
id: ex-finite-jensen-gives-the-mean-square-inequality
kind: example
title: "Finite Jensen for $x\\mapsto x^2$ gives that the square of a weighted mean is at most the weighted mean of the squares"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-finite-jensen-inequality, def-convex-concave-and-midpoint-convex-functions, lem-of-square-positive, def-finite-sum, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "S. Boyd and L. Vandenberghe, Convex Optimization, §3.1"
      url: "https://web.stanford.edu/~boyd/cvxbook/"
pipeline_run: null
---

## Example

For nonnegative weights $\lambda_i$ with $\sum_i\lambda_i=1$ and real $x_i$,

$$\left(\sum_i\lambda_i x_i\right)^2\le\sum_i\lambda_i x_i^2.$$

The function $q(t)=t^2$ is convex because

$$\lambda x^2+(1-\lambda)y^2-(\lambda x+(1-\lambda)y)^2=\lambda(1-\lambda)(x-y)^2\ge0$$

for $0\le\lambda\le1$, using nonnegativity of squares ([[lem-of-square-positive]]). Applying finite Jensen ([[thm-finite-jensen-inequality]]) to $q$ gives the displayed inequality.
