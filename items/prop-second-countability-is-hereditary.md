---
id: prop-second-countability-is-hereditary
kind: proposition
title: "Second countability is hereditary"
status: published
origin: session
deps: [def-second-countable-space, def-subspace-topology-top, def-hereditary-property]
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

Every subspace of a second countable space is second countable.

## Facts & Assumptions

**Given:** A countable basis $\mathcal B$ of $X$ and a subspace $Y\subseteq X$.

## Proof

**Proof technique:** direct.

1.1 The nonempty traces $B\cap Y$ for $B\in\mathcal B$ form a countable basis for the subspace topology. [given]

2.1 Hence every subspace is second countable. [step 1.1] ∎
