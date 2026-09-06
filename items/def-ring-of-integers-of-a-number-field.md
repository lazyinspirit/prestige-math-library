---
id: def-ring-of-integers-of-a-number-field
kind: definition
title: "Ring of integers"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-number-field, def-integral-closure-and-integrally-closed-domain]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Milne, Definition 2.5"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
---

## Definition

For a number field $K$, its **ring of integers** is $\mathcal O_K$, the integral
closure of $\mathbb Z$ in $K$. It is not an arbitrary order.
