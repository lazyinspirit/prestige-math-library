---
id: def-cohomological-functor-on-a-triangulated-category
kind: definition
title: "Cohomological functor on a triangulated category"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-triangulated-category, def-functor-and-contravariant-functor, def-abelian-category]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Definition 13.3.5"
      url: "https://stacks.math.columbia.edu/tag/05QK"
---

## Definition

An additive contravariant functor $H:\mathcal T^{\mathrm{op}}\to\mathcal A$
is **cohomological** if its corresponding functor to $\mathcal A^{\mathrm{op}}$
is homological. Equivalently, a distinguished triangle induces the oppositely
oriented long exact sequence of its values and their translates.

