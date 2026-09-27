---
id: cor-regular-sequences-permutable-local
kind: corollary
title: "Regular Sequences Permutable Local"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-regular-sequence-permutation-adjacent-swap]
proof_strategy: direct
verification:
  audited: 2026-09-06
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

## Statement

Every permutation of a regular sequence in the maximal ideal of a Noetherian local ring is regular on the finite module.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[lem-regular-sequence-permutation-adjacent-swap]].

## Proof

**Proof technique:** direct.

1.1 Every permutation is a product of adjacent transpositions. [given, algebra]

2.1 Apply the adjacent-swap result successively under the unchanged local finite hypotheses. [step 1.1, algebra] ∎
