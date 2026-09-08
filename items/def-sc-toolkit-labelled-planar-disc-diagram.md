---
id: def-sc-toolkit-labelled-planar-disc-diagram
kind: definition
title: "Sc toolkit labelled planar disc diagram"
status: draft
origin: pipeline
deps: [def-sc-toolkit-symmetrised-relators-and-pieces, def-alphabet-words-and-reduction]
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Touikan \u00a73.4 opening definitions"
      url: "https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/section-17.html"
---

## Definition

Over the symmetrised presentation of [[def-sc-toolkit-symmetrised-relators-and-pieces]], a **diagram** is a finite connected simply connected combinatorial $2$-complex embedded in the plane. Its $1$-skeleton is a finite graph, allowing loops and parallel edges. Each oriented edge has a letter of $X^{\pm1}$ as label; reversal inverts that letter, as in [[def-alphabet-words-and-reduction]]. Faces are polygonal $2$-cells attached along finite edge walks, each reading a member of $R$. Orienting a face oppositely or changing its starting corner is allowed by symmetrisation. Area is the number of faces.

The **outer boundary walk** follows the unbounded complementary region, with the complex on its right. Choose a starting edge occurrence to obtain a word. A bridge is traversed twice, once in each direction. Length counts occurrences, not distinct edges. At a cut vertex the walk completes the incident excursions in their planar order. The diagram consisting of one vertex has empty boundary and area zero.

A **nonsingular disc diagram** has underlying space a closed topological disc. General diagrams may have cut vertices, bridges and **spurs** (vertices incident with exactly one edge germ). The topological frontier is a set; the outer walk is a parametrised walk and must not be confused with that set. A finite tree is a zero-face diagram.
