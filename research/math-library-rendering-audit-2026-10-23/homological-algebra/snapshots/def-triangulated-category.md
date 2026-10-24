---
id: def-triangulated-category
kind: definition
title: "Triangulated category"
status: published
origin: pipeline
landmark: true
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-category-with-translation, def-distinguished-triangle, def-triangulated-category-axiom-tr-one, def-triangulated-category-axiom-tr-two, def-triangulated-category-axiom-tr-three, def-triangulated-category-axiom-tr-four-octahedral]
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

## Definition

A **triangulated category** is a category with translation $(\mathcal T,[1])$
and a class $\Delta$ of distinguished triangles satisfying TR1, TR2, TR3, and
TR4. Both the translation and the class $\Delta$ are specified structure, not
properties inferred from the underlying additive category.
