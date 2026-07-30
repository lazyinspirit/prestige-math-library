---
id: cor-euclidean-compactness-equivalence-chart
kind: corollary
title: "Assuming $\\mathrm{AC}_\\omega$ and $\\mathrm{DC}$, compactness, sequential compactness, countable compactness, limit point compactness, completeness and total boundedness, pseudocompactness, closedness and boundedness, and the extreme-value property are equivalent for nonempty subsets of $\\mathbb{R}^n$ with $n\\ge1$"
status: published
origin: session
deps: [thm-euclidean-heine-borel-pseudocompactness-and-extreme-values, thm-metric-compactness-equivalences, def-compactness-variants, def-countable-choice, def-dependent-choice, thm-compactness-agrees-with-metric-compactness]
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
    - title: "Sequentially compact space"
      url: "https://en.wikipedia.org/wiki/Sequentially_compact_space"
pipeline_run: null
---

## Statement

Assume $\mathrm{AC}_\omega$ and $\mathrm{DC}$. If $n\ge1$ and $A\subseteq\mathbb{R}^n$ is nonempty, then the following conditions are equivalent: compactness; closedness and boundedness; pseudocompactness; attainment of a maximum and minimum by every continuous $A\to\mathbb{R}$; countable compactness; sequential compactness; limit point compactness; and completeness together with total boundedness.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ ([[def-countable-choice]]), $\mathrm{DC}$ ([[def-dependent-choice]]), an integer $n\ge1$, and a nonempty Euclidean subset $A$.

[L1] The four Euclidean conditions compactness, closedness and boundedness, pseudocompactness, and the extreme-value property are equivalent in ZF ([[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]).

[L2] Under $\mathrm{AC}_\omega$ and $\mathrm{DC}$, a metric space is compact if and only if it is countably compact, limit point compact, sequentially compact, or complete and totally bounded ([[thm-metric-compactness-equivalences]]).

[L3] The topological and metric readings of compactness for a Euclidean subspace agree ([[thm-compactness-agrees-with-metric-compactness]]); the named topological variants have the meanings of [[def-compactness-variants]].

## Proof

**Proof technique:** direct.

1.1 The ZF part of the chart is exactly [L1]. [L1]

1.2 In the Euclidean metric, compactness is equivalent to each of countable compactness, limit point compactness, sequential compactness, and completeness together with total boundedness by [L2]. [L2]

2.1 By [L3], this metric compactness is the compactness already occurring in step 1.1. Joining the two equivalence classes proves the asserted chart. [L3, step 1.1, step 1.2] ∎
