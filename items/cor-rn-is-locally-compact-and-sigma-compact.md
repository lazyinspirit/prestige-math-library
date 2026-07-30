---
id: cor-rn-is-locally-compact-and-sigma-compact
kind: corollary
title: "$\\mathbb{R}^n$ is locally compact and $\\sigma$-compact"
status: published
origin: session
deps: [def-locally-compact-space, def-compactness-variants, cor-euclidean-closed-balls-and-spheres-are-compact, thm-of-archimedean]
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Sigma-compact space"
      url: "https://en.wikipedia.org/wiki/Sigma-compact_space"
pipeline_run: null
---

## Statement

For $n\ge1$, Euclidean space $\mathbb{R}^n$ is locally compact and $\sigma$-compact.

## Facts & Assumptions

**Given:** $\mathbb{R}^n$ with $n\ge1$, its origin $0$, and its Euclidean norm.

[L1] Every Euclidean closed ball of positive radius is compact ([[cor-euclidean-closed-balls-and-spheres-are-compact]]).

[L2] A space is locally compact when every point has a compact neighbourhood, and it is $\sigma$-compact when it is a countable union of compact subsets ([[def-locally-compact-space]], [[def-compactness-variants]]).

[L3] For every real $M$ there is a natural $k\ge1$ with $M<k\cdot1_{\mathbb R}$ ([[thm-of-archimedean]]).

## Proof

**Proof technique:** constructive.

1.1 For $x\in\mathbb{R}^n$, the closed ball $\overline B_2(x,1)$ is compact by [L1] and contains the open ball $B_2(x,1)$ about $x$. Thus $x$ has a compact neighbourhood. [L1, L2]

1.2 For each $k\in\mathbb N$ put $K_k:=\overline B_2(0,k+1)$. Every $K_k$ is compact by [L1]. [L1, construct]

2.1 If $x\in\mathbb R^n$, [L3] gives $k\ge1$ with $\lVert x\rVert_2<k$, so $x\in K_k$. Hence $\mathbb R^n=\bigcup_{k\in\mathbb N}K_k$. [L3, step 1.2, choose]

3.1 Step 1.1 gives local compactness and step 2.1 gives $\sigma$-compactness. [L2, step 1.1, step 2.1, discharge-construct] ∎
