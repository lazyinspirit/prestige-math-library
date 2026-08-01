---
id: ex-stone-cech-of-a-finite-discrete-space
kind: example
title: "A finite discrete space is already its Stone–Čech compactification"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-stone-cech-of-compact-hausdorff-space-is-itself, def-standard-topologies, def-compact-space]
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

Let $D$ be a finite set with the discrete topology. Then its Stone–Čech compactification is $D$ itself.

## Facts & Assumptions

**Given:** A finite discrete space $D$.

[L1] A finite topological space is compact ([[def-compact-space]]).

## Verification

**Proof technique:** direct.

1.1 Every two distinct points of a discrete space have disjoint singleton neighbourhoods, so $D$ is Hausdorff; it is compact by [L1]. [L1]

2.1 [[cor-stone-cech-of-compact-hausdorff-space-is-itself]] applied to step 1.1 gives the claim. [step 1.1] ∎
