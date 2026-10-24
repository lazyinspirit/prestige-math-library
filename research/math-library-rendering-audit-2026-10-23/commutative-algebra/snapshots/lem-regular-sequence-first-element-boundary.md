---
id: lem-regular-sequence-first-element-boundary
kind: lemma
title: "Regular Sequence First Element Boundary"
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

A nonempty $M$-regular sequence has $M\ne0$, has first element a non-zero-divisor on $M$, and has nonzero terminal quotient; thus neither a unit nor a zero module satisfies the adopted nonempty convention.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[def-regular-sequence-on-a-module]].

## Proof

**Proof technique:** direct.

1.1 At the first stage the definition requires injectivity of $x_1$ on $M$. [given, algebra]

2.1 It also requires all stage quotients, especially $M$ and the terminal quotient, to be nonzero; units and $M=0$ therefore fail. [step 1.1, algebra] ∎
