---
id: lem-regular-sequence-permutation-adjacent-swap
kind: lemma
title: "Regular Sequence Permutation Adjacent Swap"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-regular-sequence-on-a-module, cor-local-koszul-acyclicity-iff-regular-sequence, cor-koszul-complex-invariant-under-invertible-generator-change]
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

For finite $M$ over a Noetherian local ring and a regular sequence in $\mathfrak m$, interchanging two adjacent terms preserves regularity.

## Facts & Assumptions

**Given:** The ring, finite module, and regular sequence stated in the claim. The declared prerequisites used here are [[def-regular-sequence-on-a-module]], [[cor-local-koszul-acyclicity-iff-regular-sequence]], and [[cor-koszul-complex-invariant-under-invertible-generator-change]].

## Proof

**Proof technique:** direct.

1.1 The local criterion makes the original regular sequence Koszul-acyclic. Interchanging two adjacent generators is multiplication by an invertible permutation matrix, so invariance under invertible generator change gives an isomorphic Koszul complex for the swapped sequence. [given, algebra]

2.1 The swapped sequence still lies in $\mathfrak m$ and generates the same ideal, so its terminal quotient is the same nonzero module. Applying the reverse direction of the local criterion to its acyclic Koszul complex proves that it is regular. [step 1.1, algebra] ∎
