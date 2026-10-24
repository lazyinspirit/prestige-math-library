---
id: fs-the-connecting-morphism-is-defined-by-choosing-one-lift-with-no-independence-proof
kind: false-statement
title: "FALSE: the connecting morphism is defined by choosing one lift with no independence proof"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-elementwise-formula-for-the-connecting-map-in-module-categories,
       rem-the-connecting-morphism-depends-on-no-choices]
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

The connecting morphism is defined by choosing one lift of one cycle
representative, with no independence proof required.

## Facts & Assumptions

**Given:** A short exact sequence of module complexes.

[A1] The statement refuted is: the connecting morphism is defined by choosing one lift of one cycle representative, with no independence proof required.

[L1] The module formula proves independence of the chosen lift and of the chosen cycle representative ([[prop-elementwise-formula-for-the-connecting-map-in-module-categories]]).

[L2] The categorical construction leaves no residual choice at all once the universal-property data are fixed ([[rem-the-connecting-morphism-depends-on-no-choices]]).

## Refutation

**Proof technique:** direct.

1.1 The claim in [A1] ignores exactly the two choice-independence checks named in [L1] and the universal-property uniqueness recorded in [L2]. A single lift can at best produce one candidate value; it does not define a map on homology classes. [A1, L1, L2, given, algebra]

2.1 Since the actual construction either proves independence of all allowed choices or avoids those choices altogether, [A1] contradicts the established definition of the connecting morphism. Therefore [A1] is false. [A1, L1, L2, step 1.1, algebra] ∎

