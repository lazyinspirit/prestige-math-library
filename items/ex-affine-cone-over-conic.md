---
id: ex-affine-cone-over-conic
kind: example
title: "affine cone over conic"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-affine-cone-projective-set, ex-projective-conic-standard-charts, lem-projective-variety-cone-irreducible]
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Michael Artin, Algebraic Geometry, Chapter 3"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Example

Assume $\operatorname{char}k\ne2$. The affine cone over $V_+(XZ-Y^2)$ is $V(XZ-Y^2)\subseteq\mathbf A_k^3$. Its partial derivatives are $Z,-2Y,X$, all zero at $(0,0,0)$; the defining equation also vanishes there. This is the elementary hypersurface-derivative diagnostic at the vertex only, not an invocation of a general singular-locus theorem.
