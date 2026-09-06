---
id: def-morphism-and-isomorphism-of-triangles
kind: definition
title: "Morphism and isomorphism of triangles"
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
    - title: "The Stacks Project, Definition 13.3.1"
      url: "https://stacks.math.columbia.edu/tag/05QK"
---

## Definition

A morphism from $(X,Y,Z,f,g,h)$ to $(X',Y',Z',f',g',h')$ is a triple
$(a,b,c)$ with $bf=f'a$, $cg=g'b$, and $a[1]h=h'c$. It is an
**isomorphism of triangles** when $a,b,c$ are isomorphisms.

