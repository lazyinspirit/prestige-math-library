---
id: fs-first-countable-spaces-are-second-countable
kind: false-statement
title: "Refuted: every first countable space is second countable"
status: published
origin: session
deps: [def-first-countable-top, def-second-countable-space, def-standard-topologies, thm-r-uncountable]
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

Every first countable space is second countable.

## Facts & Assumptions

**Given:** The set $D=\mathbb R$ carrying the discrete topology.

[L1] Every subset of a discrete space is open ([[def-standard-topologies]]).

[L2] A space is first countable when every point has an at most countable local base, and second countable when it has an at most countable global basis ([[def-first-countable-top]], [[def-second-countable-space]]).

[L3] The real line is uncountable ([[thm-r-uncountable]]).

## Refutation

**Proof technique:** direct.

1.1 For each $x\in D$, the one-member family $\{\{x\}\}$ is a local base, because every neighbourhood of $x$ contains the open singleton $\{x\}$ by [L1]. [L1, L2]

1.2 If $\mathcal B$ is any basis of $D$, then for each $x\in D$ some $B_x\in\mathcal B$ satisfies $x\in B_x\subseteq\{x\}$, so $B_x=\{x\}$ and $\mathcal B$ contains every singleton. [L1]

2.1 Step 1.1 makes $D$ first countable, while steps 1.2 and [L3] make every basis uncountable; hence $D$ is not second countable. [step 1.1, step 1.2, L2, L3] ∎
