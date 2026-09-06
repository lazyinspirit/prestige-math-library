---
id: cor-order-index-discriminant-formula
kind: corollary
title: "Order-index discriminant formula"
status: draft
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-orders-have-integral-bases-and-finite-index, lem-discriminant-change-of-basis, thm-number-field-discriminant-is-well-defined-and-nonzero]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Milne, Remark 2.25"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
---

## Statement

For an order $\mathcal O\subseteq\mathcal O_K$, $\operatorname{disc}(\mathcal O)=[\mathcal O_K:\mathcal O]^2d_K$.

## Facts & Assumptions

**Given:** An order $\mathcal O$.

[F1] Simultaneous bases exist with finite index ([[thm-orders-have-integral-bases-and-finite-index]]).

[F2] Discriminants change by a determinant square ([[lem-discriminant-change-of-basis]]).

## Proof

**Proof technique:** direct.

1.1 Choose the bases from [F1]; the absolute change determinant is the index. [F1, given]

2.1 Apply [F2] and square the determinant. [F2, step 1.1] ∎
