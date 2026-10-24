---
id: cor-local-minima-of-convex-functions-are-global
kind: corollary
title: "Every local minimum of a convex function on an interval is a global minimum"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-convex-concave-and-midpoint-convex-functions, def-local-extremum, cor-archimedean-reciprocal]
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

Every local minimum $c$ of a convex function $f:I\to\mathbb R$ on an interval is a global minimum: $f(c)\le f(y)$ for every $y\in I$.

## Facts & Assumptions

**Given:** A convex $f:I\to\mathbb R$ on an interval and a local minimum $c\in I$.

[L1] A function is convex when the convex-combination inequality holds for every weight in $[0,1]$ ([[def-convex-concave-and-midpoint-convex-functions]]).

[L2] To have a **local minimum at $c$** means that some radius $r>0$ satisfies $f(c)\le f(x)$ whenever $x\in I$ and $|x-c|<r$ ([[def-local-extremum]]).

## Proof

**Proof technique:** contradiction.

1.1 Fix $r>0$ as in [L2], and suppose for contradiction that some $y\in I$ has $f(y)<f(c)$. [assume-contra, L1, L2]

2.1 Choose $0<\lambda<\min\{1,r/|y-c|\}$ when $y\ne c$ and put $z=(1-\lambda)c+\lambda y$; then $z\in I$ and $|z-c|<r$. [step 1.1, L2, algebra]

3.1 Convexity gives $f(z)\le(1-\lambda)f(c)+\lambda f(y)<f(c)$, contradicting the local-minimum inequality. [step 1.1, step 2.1, discharge-contradiction] ∎
