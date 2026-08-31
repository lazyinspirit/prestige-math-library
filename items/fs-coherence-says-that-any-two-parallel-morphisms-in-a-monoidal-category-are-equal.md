---
id: fs-coherence-says-that-any-two-parallel-morphisms-in-a-monoidal-category-are-equal
kind: false-statement
title: "Coherence says that any two parallel morphisms in a monoidal category are equal"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [rem-the-exact-scope-of-the-coherence-statement]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Theorem 2.9.2"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: null
---

## Statement

**False claim:** coherence says that any two parallel morphisms in a monoidal
category are equal.

## Facts & Assumptions

**Given:** The scope remark for the coherence theorem.

[L1] Coherence compares only canonical morphisms between parenthesisations of one ordered tensor word; arbitrary parallel morphisms lie outside its scope ([[rem-the-exact-scope-of-the-coherence-statement]]).

## Refutation

**Proof technique:** direct.

1.1 If the claim were true, the theorem would identify every parallel pair in the category, with no restriction on how those morphisms were built. [given]

1.2 That contradicts [L1], which records the theorem's actual quantifiers and restricts it to canonical structural morphisms. [L1]

2.1 Therefore the claim is false. [step 1.1, step 1.2] ∎
