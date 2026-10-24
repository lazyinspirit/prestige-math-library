---
id: lem-regular-sequence-tail-on-quotient
kind: lemma
title: "Regular Sequence Tail On Quotient"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-regular-sequence-on-a-module]
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

A nonempty sequence $(x_1,\ldots,x_n)$ is $M$-regular if and only if $x_1$ is injective on $M$ and $(x_2,\ldots,x_n)$ is regular on $M/x_1M$.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[def-regular-sequence-on-a-module]].

## Proof

**Proof technique:** direct.

1.1 Separate the first condition: $x_1$ must be injective on $M$. [given, algebra]

2.1 Every remaining condition is precisely the regularity condition for the tail on $M/x_1M$, including the nonzero terminal quotient. [step 1.1, algebra] ∎
