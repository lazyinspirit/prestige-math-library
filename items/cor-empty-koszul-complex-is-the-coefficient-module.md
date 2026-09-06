---
id: cor-empty-koszul-complex-is-the-coefficient-module
kind: corollary
title: "Empty Koszul Complex Is The Coefficient Module"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-koszul-complex-of-a-sequence-with-coefficients]
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
      url: "https://stacks.math.columbia.edu/tag/0621"
pipeline_run: frontier-31a
---

## Statement

For the empty sequence, $K(\varnothing;M)$ is $M$ in degree $0$ and $0$ in every other degree.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[def-koszul-complex-of-a-sequence-with-coefficients]].

## Proof

**Proof technique:** direct.

1.1 For the zero free module, only $\bigwedge^0 0=R$ is nonzero. [given, algebra]

2.1 Tensoring with $M$ gives $M$ in degree zero and zero elsewhere, with zero differential. [step 1.1, algebra] ∎
