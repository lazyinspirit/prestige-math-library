---
id: ex-monkey-saddle
kind: example
title: "The monkey saddle $x^3-3xy^2$ has an indefinite higher-order critical point"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-hessian-and-euclidean-critical-point, thm-multivariable-second-derivative-test]
aliases: []
landmark: false
proof_strategy: calculation
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Analysis, Convexity, and Optimization"
      url: "https://www.math.columbia.edu/department/pinkham/Optimizationbook.pdf"
pipeline_run: null
---

## Statement

The function $f(x,y)=x^3-3xy^2$ has a critical point with zero Hessian at the origin, but the origin is a saddle.

## Facts & Assumptions

**Given:** $f(x,y)=x^3-3xy^2$.

[L1] A semidefinite but not definite Hessian is inconclusive in the second-derivative test ([[thm-multivariable-second-derivative-test]]).

## Proof

**Proof technique:** calculation.

1.1 The gradient is $(3x^2-3y^2,-6xy)$, and the Hessian entries are $6x,-6y,-6x$; both vanish at the origin. [given, algebra]

1.2 Along the $x$-axis, $f(t,0)=t^3$, which has positive and negative values arbitrarily near $0$. [given, algebra]

2.1 Hence the origin is a saddle even though its Hessian is zero, illustrating the inconclusive case [L1]. [step 1.1, step 1.2, L1, algebra] ∎
