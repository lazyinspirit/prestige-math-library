---
id: thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
kind: theorem
title: "For a nonempty subset of $\\mathbb{R}^n$ with $n\\ge1$, compactness, closedness and boundedness, pseudocompactness, and attainment of extrema by every continuous real-valued function are equivalent"
status: published
origin: session
deps: [lem-pseudocompact-euclidean-subset-is-bounded, lem-pseudocompact-euclidean-subset-is-closed, thm-heine-borel-rn, thm-compactness-under-continuous-maps, def-pseudocompact-space, thm-compactness-agrees-with-metric-compactness]
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
    - title: "Heine-Borel theorem"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "Extreme value theorem"
      url: "https://en.wikipedia.org/wiki/Extreme_value_theorem"
pipeline_run: null
---

## Statement

Let $n\ge1$ and let $A\subseteq\mathbb{R}^n$ be nonempty. The following are equivalent.

1. $A$ is compact.
2. $A$ is closed and bounded.
3. $A$ is pseudocompact.
4. Every continuous $f:A\to\mathbb{R}$ attains a maximum and a minimum on $A$.

This theorem is a ZF statement. The nonemptiness hypothesis is necessary for condition 4, because the empty image has neither a maximum nor a minimum.

## Facts & Assumptions

**Given:** A nonempty subset $A\subseteq\mathbb{R}^n$ with $n\ge1$, carrying the Euclidean subspace topology.

[L1] In Euclidean space, a subset is compact if and only if it is closed and bounded ([[thm-heine-borel-rn]]).

[L2] A pseudocompact Euclidean subset is bounded and is closed ([[lem-pseudocompact-euclidean-subset-is-bounded]], [[lem-pseudocompact-euclidean-subset-is-closed]]).

[L3] A continuous real-valued map on a nonempty compact topological space attains a maximum and a minimum ([[thm-compactness-under-continuous-maps]], claim 2).

[L4] Pseudocompactness means that every continuous real-valued function has bounded image ([[def-pseudocompact-space]]).

[L5] Compactness for the Euclidean metric and for its metric topology is the same condition ([[thm-compactness-agrees-with-metric-compactness]]).

## Proof

**Proof technique:** direct.

1.1 Conditions 1 and 2 are equivalent by [L1] and [L5]. [L1, L5]

1.2 Condition 3 implies condition 2 by [L2]. [L2]

1.3 Suppose condition 1 holds. Every continuous $f:A\to\mathbb{R}$ then attains a maximum and a minimum by [L3], so condition 4 holds. [L3]

1.4 Suppose condition 4 holds. For every continuous $f:A\to\mathbb{R}$, its maximum and minimum bound $f[A]$, so $A$ is pseudocompact and condition 3 holds. [L4]

2.1 The implications $1\Leftrightarrow2$, $3\Rightarrow2\Rightarrow1$, and $1\Rightarrow4\Rightarrow3$ prove all four conditions equivalent. [step 1.1, step 1.2, step 1.3, step 1.4] ∎
