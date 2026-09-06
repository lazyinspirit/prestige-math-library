---
id: def-distinguished-cone-triangle-in-the-homotopy-category
kind: definition
title: "Distinguished cone triangle in the homotopy category"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-standard-cone-triangle-in-the-homotopy-category, def-morphism-and-isomorphism-of-triangles]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Definition 13.10.1"
      url: "https://stacks.math.columbia.edu/tag/014P"
---

## Definition

A triangle in $K(\mathcal A)$ is **distinguished** when it is isomorphic to a
standard cone triangle. This is a definition in the quotient category and is
therefore invariant under replacement of a chain map by a homotopic map.
