---
id: prop-separable-spaces-are-ccc
kind: proposition
title: "Every separable space satisfies the countable chain condition"
status: published
origin: session
deps: [def-separable-space, def-countable-chain-condition, def-dense-top, lem-countable-iff-surjection-from-n]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources: {scraped: [], references: [{title: "UCR General Topology Notes", url: "https://math.ucr.edu/~res/math205C-2016/gentop-notes.pdf"}]}
pipeline_run: null
---

## Statement

Every separable space is ccc.

## Facts & Assumptions

**Given:** A countable dense set $D$ and a pairwise-disjoint family $\mathcal U$ of nonempty open sets.

[L1] A nonempty countable set can be enumerated by natural numbers ([[lem-countable-iff-surjection-from-n]]).

## Proof

**Proof technique:** direct.

1.1 If $\mathcal U=\varnothing$, it is already at most countable. Otherwise $X$ is nonempty, so the dense set $D$ is nonempty; enumerate $D$ and assign to each $U\in\mathcal U$ the first enumerated point of $D\cap U$, which is nonempty by density. [given, L1]

2.1 Disjointness makes this assignment injective into a countable set. [step 1.1]

3.1 Hence $\mathcal U$ is countable and $X$ is ccc. [step 2.1] ∎
