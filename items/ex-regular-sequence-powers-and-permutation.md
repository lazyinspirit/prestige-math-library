---
id: ex-regular-sequence-powers-and-permutation
kind: example
title: "Regular Sequence Powers And Permutation"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-positive-powers-of-a-regular-sequence-remain-regular, cor-regular-sequences-permutable-local, def-axiom-of-choice]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-04-maintenance-receipts.jsonl (ex-regular-sequence-powers-and-permutation). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Koszul complexes and regular sequences"
      url: "https://stacks.math.columbia.edu/tag/062D"
pipeline_run: frontier-31a
---

## Example

Assume the Axiom of Choice. In $k[x,y]_{(x,y)}$, $(x,y)$, $(x^2,y^3)$, and $(y^3,x^2)$ are regular sequences.

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]) and a field $k$. The declared prerequisites used here are [[lem-positive-powers-of-a-regular-sequence-remain-regular]] and [[cor-regular-sequences-permutable-local]].

## Proof

**Proof technique:** direct.

1.1 $x,y$ are regular in the local polynomial ring because the successive quotients are domains. [given, algebra]

2.1 Under the assumed AC, [[lem-positive-powers-of-a-regular-sequence-remain-regular]] applied to $(x,y)$ gives $(x^2,y^3)$; [[cor-regular-sequences-permutable-local]] then swaps its two entries to give $(y^3,x^2)$. These two applications are the uses of Choice. [step 1.1, algebra] ∎
