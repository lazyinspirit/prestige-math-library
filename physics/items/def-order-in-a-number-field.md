---
id: def-order-in-a-number-field
kind: definition
title: "Order in a number field"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-ring-of-integers-of-a-number-field, def-number-field]
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Stein, Definition 2.3.17"
      url: "https://wstein.org/books/ant/ant.pdf"
---

## Definition

An **order** in $K$ is a unital subring $\mathcal O\subseteq\mathcal O_K$ whose additive group is free of rank $[K:\mathbb Q]$.
