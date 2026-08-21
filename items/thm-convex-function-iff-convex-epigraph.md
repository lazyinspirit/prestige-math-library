---
id: thm-convex-function-iff-convex-epigraph
kind: theorem
title: "A function is convex exactly when its epigraph is convex"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-convex-and-strictly-convex-functions-on-euclidean-sets, def-epigraph-and-hypograph, def-convex-subset-of-euclidean-space]
justified_by: []
aliases: []
landmark: true
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
    - title: "S. Boyd and L. Vandenberghe, Convex Optimization, §3.1.7"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
pipeline_run: null
---

## Statement

Let $C\subseteq\mathbb R^n$ be convex and let $f:C\to\mathbb R$. The function $f:C\to\mathbb R$ is convex if and only if its epigraph is a convex subset of $\mathbb R^{n+1}$. This includes the empty-domain convention.

## Facts & Assumptions

**Given:** The function and convex domain in the Statement, with convex subsets interpreted by [[def-convex-subset-of-euclidean-space]].

[F1] The function $f:C\to\mathbb R$ is convex when $f((1-t)x+ty)\le(1-t)f(x)+tf(y)$ for all $x,y\in C$ and $t\in[0,1]$ ([[def-convex-and-strictly-convex-functions-on-euclidean-sets]]).

[F2] The epigraph of $f:A\to\mathbb R$ is $\operatorname{epi}f=\{(x,s)\in A\times\mathbb R:f(x)\le s\}$ ([[def-epigraph-and-hypograph]]).

## Proof

**Proof technique:** direct.

1.1 For the forward implication, take $(x,r),(y,s)\in\operatorname{epi}f$ and $t\in[0,1]$. By [F1], $$f((1-t)x+ty)\le(1-t)f(x)+tf(y)\le(1-t)r+ts,$$ so [F2] puts the convex combination in the epigraph. [F1, F2]

2.1 For the reverse implication, assume the epigraph convex and apply its convexity to $(x,f(x))$ and $(y,f(y))$. By [F2], membership of their convex combination is exactly the inequality in [F1]. Thus $f$ is convex; if $C$ is empty, both conditions are vacuous. [step 1.1, F1, F2] ∎
