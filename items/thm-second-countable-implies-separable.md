---
id: thm-second-countable-implies-separable
kind: theorem
title: "Assuming countable choice, every second countable space is separable"
status: published
origin: session
deps: [def-second-countable-space, def-separable-space, def-dense-top, def-countable-choice]
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
sources: {scraped: [], references: [{title: "UCR General Topology Notes", url: "https://math.ucr.edu/~res/math205C-2016/gentop-notes.pdf"}]}
pipeline_run: null
---

## Statement

Assuming $\mathrm{AC}_\omega$, every second countable space is separable.

## Facts & Assumptions

**Given:** A countable basis $\mathcal B$ for $X$.

[A1] Countable choice selects one element from every nonempty member of a countable family ([[def-countable-choice]]).

## Proof

**Proof technique:** constructive.

1.1 Apply [A1] to the nonempty members of $\mathcal B$, and let $D$ be the selected points. [A1, construct]

2.1 The set $D$ is countable and meets every nonempty basic open set, hence every nonempty open set, so it is dense. [step 1.1]

3.1 Therefore $X$ is separable. [step 2.1, discharge-construct] ∎
