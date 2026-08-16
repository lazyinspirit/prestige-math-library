---
id: fs-jordan-canonical-form-is-a-unique-matrix
kind: false-statement
title: "FALSE: Jordan canonical form is a unique literal matrix without fixing block order"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-jordan-form-uniqueness-from-ranks-of-powers]
aliases: []
landmark: false
proof_strategy: counterexample
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
sources:
  scraped: []
  references:
    - title: "S. Treil, Linear Algebra Done Wrong, Chapter 9, Sections 4.3-4.4"
      url: "https://www.math.brown.edu/streil/papers/LADW/LADW_2017-09-04.pdf"
pipeline_run: null
---

## Statement

**False claim.** The Jordan canonical form of an endomorphism is a unique literal matrix even when no ordering convention for its blocks has been fixed.

## Facts & Assumptions

**Given:** The two block diagonal matrices $A=J_2(0)\oplus J_1(1)$ and $B=J_1(1)\oplus J_2(0)$.

[L1] Shifted-power ranks determine Jordan form uniquely only up to permutation of its blocks ([[thm-jordan-form-uniqueness-from-ranks-of-powers]]).

## Refutation

**Proof technique:** counterexample.

1.1 Both $A$ and $B$ are Jordan matrices with the same block multiset, and a permutation matrix that moves the one-dimensional block past the two-dimensional block conjugates one to the other. [algebra]

1.2 Their diagonal sequences are $(0,0,1)$ and $(1,0,0)$, so $A\ne B$ as literal matrices. [algebra]

2.1 This is precisely the block-order freedom retained in [L1], and it refutes literal uniqueness without an additional ordering convention. [step 1.1, step 1.2, L1] ∎
