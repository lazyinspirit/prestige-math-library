---
id: cor-unbracketed-and-unordered-tensor-strings-are-well-defined-in-a-symmetric-monoidal-category
kind: corollary
title: "Labelled unbracketed and unordered tensor strings are well defined in a symmetric monoidal category"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-symmetric-coherence]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Michael Muger, Tensor Categories: A Selective Guided Tour, Section 2"
      url: "https://arxiv.org/pdf/0804.3587"
---

## Statement

In a symmetric monoidal category, once a finite tensor product is regarded as a
labelled list of occurrences $X_1,\dots,X_n$, it may be written without
specifying either a bracketing or an order: any two parenthesised reorderings
of that same labelled list are canonically and uniquely identified.

## Facts & Assumptions

**Given:** A symmetric monoidal category and a labelled finite list of tensor factor occurrences.

[L1] Symmetric coherence supplies a unique canonical natural isomorphism between any two parenthesised reorderings of the same finite list of labelled factor occurrences ([[thm-symmetric-coherence]]).

## Proof

**Proof technique:** direct.

1.1 Any two written forms of the same labelled tensor expression differ only by a choice of brackets and a permutation of the listed occurrences. [given, algebra]

2.1 By [L1], those two parenthesised reorderings are canonically and uniquely isomorphic. Therefore suppressing both the brackets and the order does not change the resulting labelled tensor expression except by that unique canonical identification. [L1, step 1.1] ∎
