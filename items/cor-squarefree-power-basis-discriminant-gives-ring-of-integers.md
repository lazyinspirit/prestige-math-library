---
id: cor-squarefree-power-basis-discriminant-gives-ring-of-integers
kind: corollary
title: "Squarefree power discriminant criterion"
status: draft
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-power-basis-discriminant-is-polynomial-discriminant, cor-order-index-discriminant-formula]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Milne, Corollary 2.10"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
---

## Statement

If integral $\alpha$ generates $K$ and its power-basis discriminant is squarefree, then $\mathcal O_K=\mathbb Z[\alpha]$.

## Facts & Assumptions

**Given:** The stated integral generator.

[F1] The index-discriminant formula holds ([[cor-order-index-discriminant-formula]]).

## Proof

**Proof technique:** direct.

1.1 The power order is an order, and [F1] says its discriminant is the square of its index times $d_K$. [F1, given]

2.1 A square index dividing a squarefree integer is $1$, so the two orders coincide. [step 1.1, algebra] ∎
