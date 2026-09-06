---
id: def-hopf-formula-quotient
kind: definition
title: "Hopf-formula quotient"
status: draft
origin: pipeline
deps: [lem-hopf-formula-subgroups-are-normal-and-the-quotient-exists]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Clara Löh, Group Cohomology"
      url: https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf
---

## Definition

For a free presentation $1\to R\to F\to G\to1$, the **Hopf quotient** is

$$\frac{R\cap[F,F]}{[F,R]}.$$
