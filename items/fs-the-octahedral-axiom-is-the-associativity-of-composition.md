---
id: fs-the-octahedral-axiom-is-the-associativity-of-composition
kind: false-statement
title: "The octahedral axiom is the associativity of composition"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-triangulated-category-axiom-tr-four-octahedral, prop-octahedral-gives-a-triangle-relating-the-cones-of-f-g-and-gf]
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Definition 13.3.2"
      url: "https://stacks.math.columbia.edu/tag/05QK"
---

## Statement

The octahedral axiom merely asserts associativity of composition.

## Refutation

**Given:** The displayed data.

1.1 Associativity already holds in every category, before any distinguished triangles are specified. [given]

2.1 TR4 instead compares chosen completions of $f$, $g$, and $gf$ by a fourth distinguished cone triangle, so it supplies genuinely additional triangulated structure. [step 1.1, given] ∎
