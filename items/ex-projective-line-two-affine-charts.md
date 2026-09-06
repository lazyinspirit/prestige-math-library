---
id: ex-projective-line-two-affine-charts
kind: example
title: "projective line two affine charts"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-projective-space-points, lem-standard-projective-opens-are-affine-spaces]
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

For $\mathbf P_k^1$, $U_0=D_+(X)$ has coordinate $t=Y/X$ and $U_1=D_+(Y)$ has coordinate $s=X/Y$. On $U_0\cap U_1$, both coordinates are nonzero and $s=1/t$. Thus the two affine lines glue by inversion; $t=0$ is $[1:0]$ and the point outside $U_0$ is $[0:1]$.
