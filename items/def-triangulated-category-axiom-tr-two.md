---
id: def-triangulated-category-axiom-tr-two
kind: definition
title: "Triangulated-category axiom TR2"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-distinguished-triangle, def-rotation-of-a-triangle]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Definition 13.3.2"
      url: "https://stacks.math.columbia.edu/tag/05QK"
---

## Definition

**TR2** says that a triangle is distinguished if and only if its signed left
rotation is distinguished. In particular, the final arrow of that rotation is
the $-f[1]$ fixed in [[def-rotation-of-a-triangle]].

