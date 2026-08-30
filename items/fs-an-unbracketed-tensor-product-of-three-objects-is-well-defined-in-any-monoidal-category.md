---
id: fs-an-unbracketed-tensor-product-of-three-objects-is-well-defined-in-any-monoidal-category
kind: false-statement
title: "FALSE: an unbracketed three-fold tensor product is already well defined in any monoidal category"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [rem-unbracketed-tensor-strings-are-not-yet-defined]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, Chapter VII.2"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: null
---

## Statement

**False claim:** in any monoidal category, the expression
$A\otimes B\otimes C$ is already a defined object before any coherence theorem
is invoked.

## Facts & Assumptions

**Given:** The bracketing discipline fixed on this page.

[L1] Before coherence, only parenthesised tensor words are defined expressions; unbracketed strings are not yet defined ([[rem-unbracketed-tensor-strings-are-not-yet-defined]]).

## Refutation

**Proof technique:** direct.

1.1 The claim suppresses the choice between $(A\otimes B)\otimes C$ and $A\otimes(B\otimes C)$. [given]

1.2 But [L1] says the page does not identify those expressions automatically before coherence. [L1]

2.1 Therefore the claim is false. [step 1.1, step 1.2] ∎
