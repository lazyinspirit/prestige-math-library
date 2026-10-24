---
id: lem-compact-hausdorff-targets-embed-in-unit-cubes-under-dependent-choice
kind: lemma
title: "Under dependent choice, every compact Hausdorff space embeds in a unit cube"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-a-compact-hausdorff-space-is-tychonoff, thm-tychonoff-embedding-theorem, def-dependent-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "E. Moorhouse, The Stone–Čech Compactification"
      url: "https://ericmoorhouse.org/handouts/stone-cech.pdf"
pipeline_run: null
---

## Statement

Assume dependent choice. Every compact Hausdorff space embeds in a cube $[0,1]^J$ for some set $J$.

## Facts & Assumptions

**Given:** Dependent choice and a compact Hausdorff space $K$.

[L1] Under dependent choice, a compact Hausdorff space is Tychonoff ([[cor-a-compact-hausdorff-space-is-tychonoff]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $K$ is Tychonoff. The forward implication of [[thm-tychonoff-embedding-theorem]] then supplies an embedding of $K$ into a unit cube. [L1]

2.1 This is the asserted embedding. [step 1.1] ∎
