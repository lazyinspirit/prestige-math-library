---
id: cor-short-five-lemma-for-quasi-isomorphisms
kind: corollary
title: "Short five lemma for quasi-isomorphisms"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-two-out-of-three-for-quasi-isomorphisms-in-a-short-exact-sequence-diagram]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-27
---

## Statement

In a morphism of short exact sequences of complexes, if the left and right
vertical maps are quasi-isomorphisms, then the middle vertical map is also a
quasi-isomorphism.

## Facts & Assumptions

**Given:** A morphism of short exact sequences of complexes whose outer two vertical maps are quasi-isomorphisms.

[L1] Any two quasi-isomorphisms in a morphism of short exact sequences force the third to be a quasi-isomorphism ([[cor-two-out-of-three-for-quasi-isomorphisms-in-a-short-exact-sequence-diagram]]).

## Proof

**Proof technique:** direct.

1.1 The hypothesis is exactly one of the three cases covered by [L1]. [L1, given]

2.1 Therefore the middle vertical map is a quasi-isomorphism. [L1, step 1.1] ∎

