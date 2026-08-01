---
id: ex-bounded-functions-on-n-extend-to-beta-n
kind: example
title: 'Every function from discrete $\mathbb N$ to $[0,1]$ extends uniquely to $\beta\mathbb N$'
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-stone-cech-compactification, def-standard-topologies, def-natural-numbers, thm-heine-borel-r, thm-metric-hausdorff-separation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Moorhouse, The Stone–Čech Compactification"
      url: "https://ericmoorhouse.org/handouts/stone-cech.pdf"
pipeline_run: null
---

## Example

For the discrete space $\mathbb N$, every function $g:\mathbb N\to[0,1]$ extends uniquely to every Stone–Čech compactification $\beta\mathbb N$.

## Facts & Assumptions

**Given:** A function $g:\mathbb N\to[0,1]$ and a Stone–Čech compactification $(\beta\mathbb N,i)$.

[L1] Every map with discrete domain is continuous ([[def-standard-topologies]]).

[L2] The interval $[0,1]$ is compact and Hausdorff ([[thm-heine-borel-r]], [[thm-metric-hausdorff-separation]]).

## Verification

**Proof technique:** direct.

1.1 The map $g$ is continuous by [L1]. By [L2], the interval $[0,1]$ is compact Hausdorff, so the extension and uniqueness clause of [[def-stone-cech-compactification]] gives a unique continuous $\bar g:\beta\mathbb N\to[0,1]$ with $\bar g\circ i=g$. [L1, L2]

2.1 This is the asserted extension. [step 1.1] ∎
