---
id: prop-a-morphism-of-extensions-is-an-isomorphism
kind: proposition
title: "A morphism of extensions is an isomorphism"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-equivalence-of-extensions, thm-short-five-lemma-in-an-abelian-category]
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
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapters 3–4"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
pipeline_run: frontier-31a
---
## Statement

Every morphism of extensions which is the identity on the subobject and quotient is an isomorphism of the middle objects.

## Facts & Assumptions

**Given:** A commutative diagram of short exact sequences with identity outer vertical maps.

## Proof

**Proof technique:** direct.

1.1 The two outer vertical maps are isomorphisms, and both rows are exact. [given]

2.1 The short five lemma applied to this diagram makes the middle vertical map an isomorphism. [step 1.1] ∎
