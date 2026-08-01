---
id: thm-tychonoff-embedding-theorem
kind: theorem
title: "A space is Tychonoff if and only if it embeds in a cube $[0,1]^J$"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-evaluation-map-of-separating-family-is-an-embedding, def-completely-regular-and-tychonoff-spaces, thm-metric-spaces-are-tychonoff-and-perfectly-normal, lem-products-preserve-complete-regularity, lem-complete-regularity-is-hereditary, lem-products-preserve-t0-t1-and-hausdorff, lem-t0-t1-and-hausdorff-are-hereditary]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Moorhouse, The Stone–Čech Compactification"
      url: "https://ericmoorhouse.org/handouts/stone-cech.pdf"
pipeline_run: null
---

## Statement

A topological space $X$ is Tychonoff ([[def-completely-regular-and-tychonoff-spaces]]) if and only if there are a set $J$ and a topological embedding of $X$ into the cube $[0,1]^J$. The assertion includes $J=\varnothing$. More specifically, when $X$ is Tychonoff, its full evaluation map $e:X\to[0,1]^{C(X,[0,1])}$ is such an embedding.

## Facts & Assumptions

**Given:** A topological space $X$.

[L1] A completely regular space separates every point from every disjoint closed set by a continuous map to $[0,1]$, and a Tychonoff space is completely regular and $T_1$ ([[def-completely-regular-and-tychonoff-spaces]]).

[L2] Products preserve complete regularity and $T_1$, and subspaces inherit each property ([[lem-products-preserve-complete-regularity]], [[lem-products-preserve-t0-t1-and-hausdorff]], [[lem-complete-regularity-is-hereditary]], [[lem-t0-t1-and-hausdorff-are-hereditary]]).

[L3] Every metric space is Tychonoff ([[thm-metric-spaces-are-tychonoff-and-perfectly-normal]]).

[L4] A point–closed-set separating family has an evaluation map that is a topological embedding ([[lem-evaluation-map-of-separating-family-is-an-embedding]]).

## Proof

**Proof technique:** direct.

1.1 If $X$ is Tychonoff, let $J=C(X,[0,1])$. By [L1], complete regularity separates a point from a closed set and $T_1$ makes singletons closed, so this full family separates both points and points from closed sets. Hence [L4] embeds $X$ in $[0,1]^J$. [L1, L4]

1.2 Conversely, suppose $X$ embeds in $[0,1]^J$. The interval is a metric space and hence Tychonoff by [L3], so [L2] makes the cube completely regular and $T_1$, and then makes its subspace $X$ completely regular and $T_1$. [L2, L3]

2.1 The two implications are steps 1.1 and 1.2, so the equivalence holds. [step 1.1, step 1.2] ∎
