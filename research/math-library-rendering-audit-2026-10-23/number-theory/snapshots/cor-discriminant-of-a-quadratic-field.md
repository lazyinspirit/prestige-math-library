---
id: cor-discriminant-of-a-quadratic-field
kind: corollary
title: "Discriminant of a quadratic field"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-ring-of-integers-of-a-quadratic-field, def-discriminant-of-a-number-field-basis-and-order]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Milne, Remark 2.12"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
---

## Statement

For squarefree $d\ne1$, $d_K=d$ if $d\equiv1\pmod4$, and $d_K=4d$ otherwise.

## Facts & Assumptions

**Given:** Squarefree $d\ne1$.

[F1] The integral bases are known ([[thm-ring-of-integers-of-a-quadratic-field]]).

## Proof

**Proof technique:** direct.

1.1 In each basis of [F1], form the $2\times2$ trace Gram matrix. [F1, given]

2.1 Its determinant is respectively $d$ and $4d$. [step 1.1, algebra] ∎
