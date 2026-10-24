---
id: def-triangulated-category-axiom-tr-three
kind: definition
title: "Triangulated-category axiom TR3"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-distinguished-triangle, def-morphism-and-isomorphism-of-triangles]
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

**TR3** says that if two distinguished triangles have first arrows $f,f'$ and
$bf=f'a$, then some $c$ makes $(a,b,c)$ a morphism of triangles. It is an
existence assertion: neither $c$ nor the completion is asserted unique.
