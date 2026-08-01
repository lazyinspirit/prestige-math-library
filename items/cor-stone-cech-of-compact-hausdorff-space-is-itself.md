---
id: cor-stone-cech-of-compact-hausdorff-space-is-itself
kind: corollary
title: "The Stone–Čech compactification of a compact Hausdorff space adds no points"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-stone-cech-compactification, thm-compactness-under-continuous-maps, thm-compact-subset-of-a-hausdorff-space-is-closed, thm-closure-characterisation-top]
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

## Statement

If $(B,i)$ is a Stone–Čech compactification of a compact Hausdorff space $X$, then $i[X]=B$. Thus $i$ identifies $B$ homeomorphically with $X$.

## Facts & Assumptions

**Given:** A compact Hausdorff space $X$ and a Stone–Čech compactification $(B,i)$ of $X$.

[L1] The continuous image of a compact space is compact, and a compact subset of a Hausdorff space is closed ([[thm-compactness-under-continuous-maps]], [[thm-compact-subset-of-a-hausdorff-space-is-closed]]).

## Proof

**Proof technique:** direct.

1.1 The image $i[X]$ is compact by [L1], hence closed in the Hausdorff space $B$ by [L1]. [L1]

2.1 By the compactification condition in [[def-stone-cech-compactification]], $i[X]$ is dense in $B$. A closed dense subset equals $B$, so $i[X]=B$. [step 1.1] ∎
