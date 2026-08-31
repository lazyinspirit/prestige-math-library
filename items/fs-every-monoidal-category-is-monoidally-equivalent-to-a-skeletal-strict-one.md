---
id: fs-every-monoidal-category-is-monoidally-equivalent-to-a-skeletal-strict-one
kind: false-statement
title: "Every monoidal category is monoidally equivalent to a skeletal strict one"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-skeletal-category-and-skeleton, rem-strictification-gives-equivalence-and-never-isomorphism]
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
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Remark 2.8.7"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: null
---

## Statement

**False claim:** every monoidal category is monoidally equivalent to a
strict monoidal category that is also skeletal.

## Facts & Assumptions

**Given:** The meaning of skeletal category and the scope warning about
strictification.

[L1] A skeletal category is one in which isomorphic objects are equal ([[def-skeletal-category-and-skeleton]]).

[L2] The strictification remark records that one cannot in general ask for a model that is both strict and skeletal at once ([[rem-strictification-gives-equivalence-and-never-isomorphism]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], adding the word "skeletal" strengthens the strictification target by requiring equality of all isomorphic objects there. [L1]

1.2 But [L2] states that this stronger simultaneous requirement can fail even though ordinary strictification succeeds. [L2]

2.1 Hence the claim is false. [step 1.1, step 1.2] ∎
