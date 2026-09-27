---
id: cor-regular-sequences-permutable-local
kind: corollary
title: "Regular Sequences Permutable Local"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-regular-sequence-permutation-adjacent-swap, def-axiom-of-choice]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-04-maintenance-receipts.jsonl (cor-regular-sequences-permutable-local). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Koszul complexes and regular sequences"
      url: "https://stacks.math.columbia.edu/tag/062D"
pipeline_run: frontier-31a
---

## Statement

Assume the Axiom of Choice. Every permutation of a regular sequence in the maximal ideal of a Noetherian local ring is regular on the finite module.

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]) and the rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisite used here is [[lem-regular-sequence-permutation-adjacent-swap]].

## Proof

**Proof technique:** direct.

1.1 Every permutation is a product of adjacent transpositions. [given, algebra]

2.1 Under the assumed AC, apply the adjacent-swap result successively under the unchanged local finite hypotheses. This is the exact use of Choice. [step 1.1, algebra] ∎
