---
id: def-triangulated-subcategory
kind: definition
title: "Triangulated subcategory"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-triangulated-category, def-exact-functor-between-triangulated-categories]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Definition 13.3.4"
      url: "https://stacks.math.columbia.edu/tag/05QK"
---

## Definition

A **triangulated subcategory** of $\mathcal T$ is a full additive subcategory
closed under $[1]$ and $[-1]$ such that, with the inherited distinguished
triangles, it satisfies the triangulated axioms. Equivalently in this full
setting it is closed under the two-out-of-three operation on distinguished
triangles.

