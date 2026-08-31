---
id: fs-naturality-of-the-long-exact-sequence-follows-without-checking-the-connecting-square
kind: false-statement
title: "FALSE: naturality of the long exact sequence follows without checking the connecting square"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-naturality-of-the-homology-connecting-morphism,
       cor-the-long-exact-homology-sequence-is-natural]
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

Naturality of the long exact sequence follows without checking the connecting
square.

## Facts & Assumptions

**Given:** A morphism of short exact sequences of complexes.

[A1] The statement refuted is: naturality of the long exact sequence follows without checking the connecting square.

[L1] The connecting square itself requires a separate naturality theorem ([[thm-naturality-of-the-homology-connecting-morphism]]).

[L2] The long exact ladder is natural only after that connecting square is included ([[cor-the-long-exact-homology-sequence-is-natural]]).

## Refutation

**Proof technique:** direct.

1.1 The ordinary homology squares commute formally, but [L1] shows that the square involving the connecting morphisms is an additional theorem rather than an automatic byproduct. [A1, L1, given, algebra]

2.1 Because [L2] depends on that separate connecting-square result, [A1] omits a necessary part of the proof of naturality. Therefore [A1] is false. [A1, L1, L2, step 1.1, algebra] ∎

