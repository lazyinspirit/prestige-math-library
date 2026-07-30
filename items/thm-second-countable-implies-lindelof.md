---
id: thm-second-countable-implies-lindelof
kind: theorem
title: "Assuming countable choice, every second countable space is Lindelöf"
status: published
origin: session
deps: [def-second-countable-space, def-compactness-variants, def-countable-choice]
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
sources: {scraped: [], references: [{title: "nLab: second-countable spaces are Lindelöf", url: "https://ncatlab.org/nlab/show/second-countable%2Bspaces%2Bare%2BLindel%C3%B6f"}]}
pipeline_run: null
---

## Statement

Assuming $\mathrm{AC}_\omega$, every second countable space is Lindelöf.

## Facts & Assumptions

**Given:** A countable basis $\mathcal B$ and an open cover $\mathcal U$ of $X$.

[A1] Countable choice selects from the nonempty families indexed by the eligible basis members ([[def-countable-choice]]).

## Proof

**Proof technique:** constructive.

1.1 For each $B\in\mathcal B$ that lies in some $U\in\mathcal U$, use [A1] to select one such $U_B$. [A1, construct]

2.1 The selected family is countable and covers $X$: a point lies in a cover member, and a basis member containing it lies inside that member. [step 1.1]

3.1 Thus every open cover has a countable subcover, so $X$ is Lindelöf. [step 2.1, discharge-construct] ∎
