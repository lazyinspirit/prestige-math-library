---
id: prop-convex-functions-have-convex-sublevel-sets
kind: proposition
title: "Every sublevel set of a convex function is convex"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-convex-and-strictly-convex-functions-on-euclidean-sets, def-convex-subset-of-euclidean-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Boyd and L. Vandenberghe, Convex Optimization, §3.1.6"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
pipeline_run: null
---

## Statement

If $f:C\to\mathbb R$ is convex and $\alpha\in\mathbb R$, then

$$\{x\in C:f(x)\le\alpha\}$$

is a convex subset of $\mathbb R^n$. Empty and singleton sublevel sets are included.

## Facts & Assumptions

**Given:** The function, domain, and level in the Statement, with convex subsets interpreted by [[def-convex-subset-of-euclidean-space]].

[F1] The function $f:C\to\mathbb R$ is convex when $f((1-t)x+ty)\le(1-t)f(x)+tf(y)$ for all $x,y\in C$ and $t\in[0,1]$ ([[def-convex-and-strictly-convex-functions-on-euclidean-sets]]).

## Proof

**Proof technique:** direct.

1.1 If $f(x),f(y)\le\alpha$, then [F1] gives $$f((1-t)x+ty)\le(1-t)f(x)+tf(y)\le\alpha$$ for every $t\in[0,1]$. [F1, given, algebra]

2.1 Thus every segment between two sublevel points remains in the sublevel set, which is convex. If it has fewer than two points, the same condition is vacuous. [step 1.1] ∎
