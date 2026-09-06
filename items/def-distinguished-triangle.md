---
id: def-distinguished-triangle
kind: definition
title: "Distinguished triangle"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-triangle-in-a-category-with-translation]
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

Given a category with translation, a **distinguished triangle** is a triangle
belonging to a specified class $\Delta$. The requirements on $\Delta$ are the
four axioms stated next; only after those axioms are imposed may it also be
called an exact triangle.

