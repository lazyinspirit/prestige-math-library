---
id: ex-projective-conic-standard-charts
kind: example
title: "projective conic standard charts"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-degree-projective-hypersurface, lem-projective-hypersurface-affine-pieces, lem-standard-projective-opens-are-affine-spaces]
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Michael Artin, Algebraic Geometry, Chapter 3"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
verification:
  audited: 2026-09-06
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Example

For $Q=V_+(XZ-Y^2)\subseteq\mathbf P_k^2$, the $X=1$ chart has equation $z=y^2$, and the $Z=1$ chart has equation $x=y^2$. The $Y=1$ chart has equation $xz=1$. These are the standard affine pieces, related on overlaps by ratio-coordinate changes.
