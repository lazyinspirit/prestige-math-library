---
id: cor-strictly-convex-functions-have-at-most-one-minimizer
kind: corollary
title: "A strictly convex function has at most one global minimizer"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-convex-concave-and-midpoint-convex-functions]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "S. Boyd and L. Vandenberghe, Convex Optimization, §3.1"
      url: "https://web.stanford.edu/~boyd/cvxbook/"
pipeline_run: null
---

## Statement

A strictly convex function on an interval has at most one global minimizer. This does not assert that a minimizer exists.

## Facts & Assumptions

**Given:** A strictly convex $f:I\to\mathbb R$ on an interval.

[L1] Strict convexity makes the convexity inequality strict for distinct points and weights strictly between zero and one ([[def-convex-concave-and-midpoint-convex-functions]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose distinct points $x,y\in I$ are both global minimizers. [assume-contra, L1]

2.1 Their midpoint lies in $I$, and [L1] gives $f((x+y)/2)<(f(x)+f(y))/2=f(x)$. [step 1.1, algebra]

3.1 This value is below a global minimum, a contradiction; hence there are at most one such point. [step 1.1, step 2.1, discharge-contradiction] ∎
