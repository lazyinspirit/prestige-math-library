---
id: cor-initial-subsequences-of-a-regular-sequence-are-regular
kind: corollary
title: "Initial Subsequences Of A Regular Sequence Are Regular"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-regular-sequence-tail-on-quotient]
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

Every initial subsequence of an $M$-regular sequence is regular on $M$.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[lem-regular-sequence-tail-on-quotient]].

## Proof

**Proof technique:** direct.

1.1 Each injectivity requirement for an initial segment occurs among those of the full sequence. [given, algebra]

2.1 Its terminal quotient is an already-required nonzero intermediate quotient. [step 1.1, algebra] ∎
