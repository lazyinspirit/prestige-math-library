---
id: ex-positive-convex-function-that-is-not-log-convex
kind: example
title: 'A positive convex function need not be log-convex'
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-log-convex-positive-function, def-convex-concave-and-midpoint-convex-functions, thm-natural-logarithm-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "University of Toronto MAT237Y1, The Gamma Function and the Beta Function, §1.5"
      url: "https://www.math.toronto.edu/campesat/ens/1920/gamma-beta.pdf"
pipeline_run: null
---

## Example

The identity function $f(x)=x$ on $(0,\infty)$ is positive and convex, but it is not log-convex.

## Facts & Assumptions

**Given:** The identity function on the positive real axis.

[F1] A positive function is log-convex when its logarithm is convex ([[def-log-convex-positive-function]]).

[F2] The natural logarithm is strictly increasing on $(0,\infty)$ ([[thm-natural-logarithm-laws]]).

## Verification

**Proof technique:** direct.

1.1 For $x,y>0$ and $0\le\lambda\le1$, $f((1-\lambda)x+\lambda y)=(1-\lambda)f(x)+\lambda f(y)$, so $f$ is affine and hence convex. [given, algebra]

1.2 The midpoint of $1$ and $4$ is $5/2>2$. By [F2], $\log(5/2)>\log2=(\log1+\log4)/2$, so $\log\circ f$ violates the midpoint convexity inequality and [F1] shows that $f$ is not log-convex. [F1, F2, algebra]

2.1 Thus this positive function is convex but not log-convex. [step 1.1, step 1.2] ∎
