---
id: lem-koszul-regular-implies-h-one-regular
kind: lemma
title: "Koszul Regular Implies H One Regular"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-koszul-regular-and-h-one-regular-sequences]
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

## Statement

Every $M$-Koszul-regular sequence is $M$-$H_1$-regular.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[def-koszul-regular-and-h-one-regular-sequences]].

## Proof

**Proof technique:** direct.

1.1 Koszul regularity says every positive homology group vanishes. [given, algebra]

2.1 Taking degree one is exactly $H_1$-regularity. [step 1.1, algebra] ∎
