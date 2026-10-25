---
id: def-log-convex-positive-function
kind: definition
title: 'Log-convex positive functions'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-convex-concave-and-midpoint-convex-functions, def-natural-logarithm]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "University of Toronto MAT237Y1, The Gamma Function and the Beta Function, §1.5"
      url: "https://www.math.toronto.edu/campesat/ens/1920/gamma-beta.pdf"
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 7 §4"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
pipeline_run: null
---

## Definition

A positive function $f:I\to(0,\infty)$ is log-convex when $\log\circ f$ is convex on $I$.

Equivalently, for $x,y\in I$ and $0\le\lambda\le1$ with $(1-\lambda)x+\lambda y\in I$,

$$f((1-\lambda)x+\lambda y)\le f(x)^{1-\lambda}f(y)^\lambda.$$

It is **strictly log-convex** when this inequality is strict for $x\ne y$ and $0<\lambda<1$. Positivity ensures that every logarithm and every real power in these formulas is defined.
