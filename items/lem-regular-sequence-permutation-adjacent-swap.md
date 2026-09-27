---
id: lem-regular-sequence-permutation-adjacent-swap
kind: lemma
title: "Regular Sequence Permutation Adjacent Swap"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-regular-sequence-on-a-module, cor-local-koszul-acyclicity-iff-regular-sequence, cor-koszul-complex-invariant-under-invertible-generator-change, def-axiom-of-choice]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-04-maintenance-receipts.jsonl (lem-regular-sequence-permutation-adjacent-swap). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Koszul complexes and regular sequences"
      url: "https://stacks.math.columbia.edu/tag/062D"
pipeline_run: frontier-31a
---

## Statement

Assume the Axiom of Choice. For finite $M$ over a Noetherian local ring and a regular sequence in $\mathfrak m$, interchanging two adjacent terms preserves regularity.

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]) and the ring, finite module, and regular sequence stated in the claim. The declared prerequisites used here are [[def-regular-sequence-on-a-module]], [[cor-local-koszul-acyclicity-iff-regular-sequence]], and [[cor-koszul-complex-invariant-under-invertible-generator-change]].

## Proof

**Proof technique:** direct.

1.1 Under the assumed AC, the local criterion makes the original regular sequence Koszul-acyclic. Interchanging two adjacent generators is multiplication by an invertible permutation matrix, so invariance under invertible generator change gives an isomorphic Koszul complex for the swapped sequence. [given, algebra]

2.1 The swapped sequence still lies in $\mathfrak m$ and generates the same ideal, so its terminal quotient is the same nonzero module. Applying the AC-qualified reverse direction of the local criterion to its acyclic Koszul complex proves that it is regular. These two applications are the uses of Choice. [step 1.1, algebra] ∎
