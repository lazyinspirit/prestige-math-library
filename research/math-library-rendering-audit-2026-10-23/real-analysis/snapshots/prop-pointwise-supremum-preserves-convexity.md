---
id: prop-pointwise-supremum-preserves-convexity
kind: proposition
title: "A pointwise supremum of convex functions is convex wherever it is finite"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-convex-and-strictly-convex-functions-on-euclidean-sets, thm-dedekind-complete]
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
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "S. Boyd and L. Vandenberghe, Convex Optimization, §3.2.3"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
pipeline_run: null
---

## Statement

Let $(f_i)_{i\in I}$ be a nonempty family of convex real-valued functions on a common convex set $C$, put $D=\{x\in C:\sup_{i\in I}f_i(x)<\infty\}$, and define $g(x)=\sup_{i\in I}f_i(x)$ on $D$. Then $D$ is convex and $g$ is convex on $D$. Here $x\in D$ means precisely that the nonempty set $\{f_i(x):i\in I\}$ is bounded above, so its real supremum exists.

## Facts & Assumptions

**Given:** The family, domain, and finite-valued set in the Statement.

[F1] The function $f:C\to\mathbb R$ is convex when $f((1-t)x+ty)\le(1-t)f(x)+tf(y)$ for all $x,y\in C$ and $t\in[0,1]$ ([[def-convex-and-strictly-convex-functions-on-euclidean-sets]]).

[L1] Every nonempty subset of $\mathbb R$ that is bounded above has a least upper bound in $\mathbb R$ ([[thm-dedekind-complete]]).

## Proof

**Proof technique:** direct.

1.1 Let $x,y\in D$ and $t\in[0,1]$. For every $i$, [F1] gives $$f_i((1-t)x+ty)\le(1-t)f_i(x)+tf_i(y)\le(1-t)g(x)+tg(y).$$ This common finite upper bound and [L1] show that the supremum exists at the combined point, so that point lies in $D$ and $D$ is convex. [F1, L1, given, algebra]

2.1 The common upper bound from step 1.1 also bounds the least upper bound supplied by [L1]. Hence $$g((1-t)x+ty)\le(1-t)g(x)+tg(y),$$ which is [F1] for $g$. [step 1.1, F1, L1, algebra] ∎
