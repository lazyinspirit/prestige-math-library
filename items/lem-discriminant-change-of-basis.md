---
id: lem-discriminant-change-of-basis
kind: lemma
title: "Change of basis for discriminants"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-discriminant-of-a-number-field-basis-and-order]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Milne, Lemma 2.23"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
---

## Statement

If $\beta_j=\sum_i a_{ij}\alpha_i$, then $\operatorname{disc}(\beta)=\det(A)^2\operatorname{disc}(\alpha)$.

## Facts & Assumptions

**Given:** Two ordered bases related by $A=(a_{ij})$.

## Proof

**Proof technique:** direct.

1.1 Bilinearity of trace gives $G_\beta=A^tG_\alpha A$ for the trace Gram matrices. [given, algebra]

2.1 Taking determinants gives the asserted square factor. [step 1.1, algebra] ∎
