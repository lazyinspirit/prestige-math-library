---
id: ex-usual-metric-uniformity-on-r
kind: example
title: "The usual metric entourages on $\\mathbb{R}$ induce its usual topology and usual uniform continuity"
status: published
origin: session
deps: [lem-metric-uniformity-dictionary, lem-real-line-is-a-metric-space, def-metric-uniform-continuity]
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}]
pipeline_run: null
---

## Example

For $\varepsilon>0$, let $E_\varepsilon=\{(x,y):|x-y|<\varepsilon\}$ on $\mathbb R$. These are the usual metric entourages.

## Facts & Assumptions

**Given:** The usual metric $d(x,y)=|x-y|$ on $\mathbb R$.

[L1] This is a metric and its metric topology is the usual topology ([[lem-real-line-is-a-metric-space]]).

[L2] The metric-uniformity dictionary identifies metric and entourage notions of topology and uniform continuity ([[lem-metric-uniformity-dictionary]], [[def-metric-uniform-continuity]]).

## Verification

**Proof technique:** direct.

1.1 The entourage $E_\varepsilon$ is exactly the relation $d(x,y)<\varepsilon$. [L1]

2.1 Applying [L2] gives the usual topology and identifies uniform continuity for these entourages with the usual $\varepsilon$-$\delta$ condition. [step 1.1, L2] ∎
