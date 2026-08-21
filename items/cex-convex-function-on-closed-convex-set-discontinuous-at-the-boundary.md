---
id: cex-convex-function-on-closed-convex-set-discontinuous-at-the-boundary
kind: counterexample
title: "A convex function on $[0,1]$ that is discontinuous at the boundary"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-convex-and-strictly-convex-functions-on-euclidean-sets, cor-convex-functions-on-open-convex-sets-are-continuous]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "S. Boyd and L. Vandenberghe, Convex Optimization, §3.1"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
pipeline_run: null
---

## Statement refuted

Every convex real-valued function on a convex subset of Euclidean space is continuous on its whole domain.

The counterexample below establishes: The function is convex on $[0,1]$ but is not continuous at $0$.

## Facts & Assumptions

**Given:** Define $f:[0,1]\to\mathbb R$ by $f(0)=1$ and $f(x)=0$ for $0<x\le1$.

[F1] The function $f:C\to\mathbb R$ is convex when $f((1-t)x+ty)\le(1-t)f(x)+tf(y)$ for all $x,y\in C$ and $t\in[0,1]$ ([[def-convex-and-strictly-convex-functions-on-euclidean-sets]]).

[L1] Every convex function on an open convex set is continuous on that set ([[cor-convex-functions-on-open-convex-sets-are-continuous]]).

## Counterexample

**Proof technique:** direct.

1.1 A convex combination of two domain points equals zero only when every endpoint having positive weight is zero. In that case [F1] is an equality. Otherwise the left side is zero and the right side is nonnegative, so [F1] again holds. [F1, algebra]

2.1 For every positive $x$, $f(x)=0$, whereas $f(0)=1$, so the right-hand limit at zero is not the function value. The function is convex on $[0,1]$ but is not continuous at $0$. This does not contradict [L1], because the domain is not open at zero. [step 1.1, L1] ∎
