---
id: def-cohomological-dimension-of-a-group
kind: definition
title: "Integral cohomological dimension"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-integral-group-ring-module-and-trivial-module-convention, def-projective-module]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Löh, Definition 4.2.1"
      url: "https://loeh.app.ur.de/teaching/grouphom_ss19/lecture_notes.pdf"
---

## Definition

The integral cohomological dimension is $\operatorname{cd}_{\mathbb Z}G=\operatorname{pd}_{\mathbb Z[G]}\mathbb Z$, the least length of a projective resolution of the trivial module, or $\infty$ if none has finite length.
