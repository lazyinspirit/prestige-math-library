---
id: cor-uniform-compactness-equivalence
kind: corollary
title: "Assuming the ultrafilter lemma, a uniform space is compact if and only if it is complete and totally bounded"
status: published
origin: session
deps: [lem-compact-uniform-spaces-are-complete, lem-compact-uniform-spaces-are-totally-bounded, thm-complete-and-totally-bounded-uniform-spaces-are-compact]
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}]
pipeline_run: null
---

## Statement

**Assume the ultrafilter lemma.** A uniform space is compact if and only if it is complete and totally bounded.

## Facts & Assumptions

**Given:** A uniform space and the ultrafilter lemma.

[L1] Compact uniform spaces are complete ([[lem-compact-uniform-spaces-are-complete]]).

[L2] Compact uniform spaces are totally bounded ([[lem-compact-uniform-spaces-are-totally-bounded]]).

[L3] Under the ultrafilter lemma, complete totally bounded uniform spaces are compact ([[thm-complete-and-totally-bounded-uniform-spaces-are-compact]]).

## Proof

**Proof technique:** direct.

1.1 Compactness implies completeness and total boundedness by [L1] and [L2]. [L1, L2]

1.2 Completeness together with total boundedness implies compactness by [L3]. [L3]

2.1 The two implications prove the equivalence under the stated assumption. [step 1.1, step 1.2] ∎
