---
id: cex-positive-semidefinite-hessian-without-strict-convexity
kind: counterexample
title: "A positive-semidefinite Hessian need not give strict convexity"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-hessian-characterises-convexity, def-definite-and-indefinite-hessian-quadratic-forms, def-convex-and-strictly-convex-functions-on-euclidean-sets, lem-derivative-of-a-power, thm-algebra-of-derivatives]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Boyd and L. Vandenberghe, Convex Optimization, §3.1.4"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
pipeline_run: null
---

## Statement refuted

If a $C^2$ function on an open convex set has a positive-semidefinite Hessian everywhere, then it is strictly convex.

The counterexample below establishes: The Hessian of $f(x,y)=x^2$ is positive semidefinite everywhere, but $f$ is not strictly convex.

## Facts & Assumptions

**Given:** The positive-semidefinite quadratic-form convention [[def-definite-and-indefinite-hessian-quadratic-forms]] and strict convexity [[def-convex-and-strictly-convex-functions-on-euclidean-sets]].

[L1] A $C^2$ function on an open convex set is convex if and only if its Hessian is positive semidefinite everywhere ([[thm-hessian-characterises-convexity]]).

[L2] The derivative of $x^d$ is $d x^{d-1}$ for every integer $d\ge1$ ([[lem-derivative-of-a-power]]).

[L3] Scalar multiples of differentiable real functions are differentiable with the expected derivatives ([[thm-algebra-of-derivatives]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L2] and [L3], the Hessian of $f(x,y)=x^2$ is $\operatorname{diag}(2,0)$, which is positive semidefinite. By [L1], $f$ is convex. [L1, L2, L3, algebra]

2.1 The distinct points $(0,0)$ and $(0,1)$, and every point of the segment joining them, all have value zero. Thus the strict convexity inequality is an equality on that segment. The Hessian of $f(x,y)=x^2$ is positive semidefinite everywhere, but $f$ is not strictly convex. [step 1.1, algebra] ∎
