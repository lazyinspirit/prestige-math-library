---
id: ex-morphism-projective-line-power-map
kind: example
title: "morphism projective line power map"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-morphism-to-projective-space-homogeneous-coordinates, lem-projective-coordinate-morphisms-well-defined, ex-projective-line-two-affine-charts]
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

For $d\ge1$, $[X:Y]\mapsto[X^d:Y^d]$ is defined because $X^d,Y^d$ have common degree and no common projective zero. On $X\ne0$ it is $t=Y/X\mapsto t^d$, and on $Y\ne0$ it is $s=X/Y\mapsto s^d$. The formulas agree under $s=1/t$.
