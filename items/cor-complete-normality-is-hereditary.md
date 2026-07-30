---
id: cor-complete-normality-is-hereditary
kind: corollary
title: "Complete normality, and hence $T_5$, is hereditary"
status: published
origin: session
deps: [thm-completely-normal-iff-hereditarily-normal, lem-t0-t1-and-hausdorff-are-hereditary, def-completely-normal-and-perfectly-normal-spaces]
aliases: []
landmark: true
proof_strategy: direct
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
    - title: "S. Willard, General Topology, §15"
      url: "https://en.wikipedia.org/wiki/General_topology"
pipeline_run: null
---

## Statement

Complete normality is hereditary. Consequently $T_5$ is hereditary.

## Facts & Assumptions

**Given:** A subspace of a completely normal, respectively $T_5$, space.

[L1] A completely normal space is exactly a space all of whose subspaces are normal ([[thm-completely-normal-iff-hereditarily-normal]]).

[L2] $T_1$ is hereditary ([[lem-t0-t1-and-hausdorff-are-hereditary]]).

[F1] $T_5$ means completely normal plus $T_1$ ([[def-completely-normal-and-perfectly-normal-spaces]]).

## Proof

**Proof technique:** direct.

1.1 If $S\subseteq X$ and $X$ is completely normal, every subspace of $S$ is also a subspace of $X$ and hence is normal by [L1]. Therefore [L1] applied to $S$ makes $S$ completely normal. [L1]

2.1 If $X$ is $T_5$, step 1.1 gives complete normality of $S$ and [L2] gives $T_1$ of $S$, so $S$ is $T_5$. [F1, L2, step 1.1] ∎
