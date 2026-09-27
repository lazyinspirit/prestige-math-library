---
id: lem-positive-powers-of-a-regular-sequence-remain-regular
kind: lemma
title: "Positive Powers Of A Regular Sequence Remain Regular"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-regular-sequences-permutable-local, def-regular-sequence-on-a-module]
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

Under the same local finite hypotheses, $x_1^{a_1},\ldots,x_n^{a_n}$ is regular whenever $x_1,\ldots,x_n$ is regular and all $a_i>0$.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[cor-regular-sequences-permutable-local]], [[def-regular-sequence-on-a-module]].

## Proof

**Proof technique:** direct.

1.1 For one non-zero-divisor $x$, if $x^am=0$, repeated injectivity of $x$ gives $m=0$; its quotient remains nonzero by the regularity convention. [given, algebra]

2.1 Use adjacent swaps to place one entry at a time, replace it by its positive power, and induct through the quotient stages. [step 1.1, algebra] ∎

