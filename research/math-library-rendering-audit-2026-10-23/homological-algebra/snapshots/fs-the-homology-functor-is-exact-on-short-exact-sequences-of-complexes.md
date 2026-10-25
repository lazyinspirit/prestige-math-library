---
id: fs-the-homology-functor-is-exact-on-short-exact-sequences-of-complexes
kind: false-statement
title: "FALSE: the homology functor is exact on short exact sequences of complexes"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-long-exact-sequence-in-homology,
       prop-the-cone-connecting-map-agrees-with-the-shifted-identity-up-to-the-declared-sign]
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
pipeline_run: frontier-27
---

## Statement

The homology functor is exact on short exact sequences of complexes.

## Facts & Assumptions

**Given:** The canonical cone sequence of the identity map on $\mathbb Z[0]$.

[A1] The statement refuted is: the homology functor is exact on short exact sequences of complexes.

[L1] Short exact sequences of complexes give long exact homology sequences with a connecting morphism ([[thm-long-exact-sequence-in-homology]]).

[L2] For the cone sequence of the identity map, the connecting morphism is the shifted identity up to sign, hence nonzero ([[prop-the-cone-connecting-map-agrees-with-the-shifted-identity-up-to-the-declared-sign]]).

## Refutation

**Proof technique:** direct.

1.1 If homology were exact in the short sense claimed in [A1], then the connecting morphism in every long exact sequence from [L1] would be zero. [A1, L1, given, algebra]

2.1 But [L2] gives a short exact sequence of complexes whose connecting morphism is nonzero. So the homology functor is not exact on short exact sequences of complexes; instead it participates in the long exact sequence of [L1]. Therefore [A1] is false. [A1, L1, L2, step 1.1, algebra] ∎

