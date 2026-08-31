---
id: cor-the-long-exact-homology-sequence-is-natural
kind: corollary
title: "The long exact homology sequence is natural"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-long-exact-sequence-in-homology,
       thm-naturality-of-the-homology-connecting-morphism,
       thm-a-chain-map-induces-a-well-defined-map-on-homology]
proof_strategy: direct
verification:
  audited: 2026-09-01
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
    - title: "The Stacks Project, Section 12.13: Complexes"
      url: "https://stacks.math.columbia.edu/tag/010V"
pipeline_run: frontier-27
---

## Statement

A morphism of short exact sequences of complexes induces a morphism between the
associated long exact homology sequences.

## Facts & Assumptions

**Given:** A morphism of short exact sequences of complexes.

[L1] Every chain map induces a well-defined map on homology ([[thm-a-chain-map-induces-a-well-defined-map-on-homology]]).

[L2] The connecting square commutes under a morphism of short exact sequences ([[thm-naturality-of-the-homology-connecting-morphism]]).

## Proof

**Proof technique:** direct.

1.1 Each ordinary square in the two long exact sequences is induced by one of the three chain maps in the given ladder, so it commutes by [L1]. [L1, given, construct]

2.1 The only nonformal squares are the connecting ones, and they commute by [L2]. Therefore every square in the long exact ladder commutes. [L2, step 1.1, algebra] ∎

