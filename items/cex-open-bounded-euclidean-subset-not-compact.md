---
id: cex-open-bounded-euclidean-subset-not-compact
kind: counterexample
title: "The open unit ball in $\\mathbb{R}^n$ is bounded and not compact"
status: published
origin: session
deps: [def-metric-ball, thm-euclidean-heine-borel-pseudocompactness-and-extreme-values, def-metric-topology, lem-standard-basis-of-f-n]
aliases: []
landmark: false
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
    - title: "Open ball"
      url: "https://en.wikipedia.org/wiki/Ball_(mathematics)"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** every bounded subset of $\mathbb R^n$ is compact.

For $n\ge1$, the open unit ball $B_2(0,1)$ is bounded but not compact.

## Facts & Assumptions

**Given:** $n\ge1$, the open unit ball $B_2(0,1)$, and a standard unit vector $e_0$.

[A1] Every bounded Euclidean subset is compact.

[L1] Euclidean compactness is equivalent to closedness and boundedness ([[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]).

[L2] The unit vector $e_0$ exists and has Euclidean norm $1$ ([[lem-standard-basis-of-f-n]]).

[L3] The open ball $B_2(0,1)$ consists of the points of Euclidean distance less than $1$ from $0$, and metric balls form neighbourhoods in the metric topology ([[def-metric-ball]], [[def-metric-topology]]).

## Counterexample

**Proof technique:** direct.

1.1 The open unit ball is bounded, since every one of its points has distance less than $1$, hence less than $2$, from $0$. [L3]

1.2 It is not closed: $e_0\notin B_2(0,1)$, while for every $r>0$ the point $(1-\varepsilon)e_0$, with $0<\varepsilon<\min(r,1)$, lies in both $B_2(0,1)$ and $B_2(e_0,r)$. Thus every neighbourhood of $e_0$ meets the open unit ball. [L2, L3]

2.1 By [L1], the bounded nonclosed set $B_2(0,1)$ is not compact. It therefore refutes [A1]. [A1, L1, step 1.1, step 1.2] ∎
