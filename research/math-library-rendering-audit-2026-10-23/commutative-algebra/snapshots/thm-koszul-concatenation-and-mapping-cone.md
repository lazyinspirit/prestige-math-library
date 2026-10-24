---
id: thm-koszul-concatenation-and-mapping-cone
kind: theorem
title: "Koszul Concatenation And Mapping Cone"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-koszul-complex-concatenation-tensor-isomorphism, lem-koszul-append-one-element-mapping-cone-identification, lem-koszul-mapping-cone-homology-exact-sequence]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Koszul complexes and regular sequences"
      url: "https://stacks.math.columbia.edu/tag/0621"
pipeline_run: frontier-31a
---

## Statement

The concatenation isomorphism and the append-one mapping-cone identification are natural in $M$ and give the displayed cone long exact sequence.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[lem-koszul-complex-concatenation-tensor-isomorphism]], [[lem-koszul-append-one-element-mapping-cone-identification]], [[lem-koszul-mapping-cone-homology-exact-sequence]].

## Proof

**Proof technique:** direct.

1.1 The direct-sum exterior identification supplies the signed concatenation chain isomorphism. [given, algebra]

2.1 Splitting off the final basis vector gives its multiplication cone, whose long exact sequence gives the stated package. [step 1.1, algebra] ∎
