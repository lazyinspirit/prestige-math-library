---
id: ex-regular-sequence-powers-and-permutation
kind: example
title: "Regular Sequence Powers And Permutation"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-positive-powers-of-a-regular-sequence-remain-regular, cor-regular-sequences-permutable-local]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Koszul complexes and regular sequences"
      url: "https://stacks.math.columbia.edu/tag/062D"
pipeline_run: frontier-31a
---

## Example

In $k[x,y]_{(x,y)}$, $(x,y)$, $(x^2,y^3)$, and $(y^3,x^2)$ are regular sequences.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[lem-positive-powers-of-a-regular-sequence-remain-regular]], [[cor-regular-sequences-permutable-local]].

## Proof

**Proof technique:** direct.

1.1 $x,y$ are regular in the local polynomial ring because the successive quotients are domains. [given, algebra]

2.1 Positive powers and adjacent swaps preserve regularity under these Noetherian local hypotheses. [step 1.1, algebra] ∎
