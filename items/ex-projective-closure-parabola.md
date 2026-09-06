---
id: ex-projective-closure-parabola
kind: example
title: "projective closure parabola"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-projective-closure-affine-set, thm-ideal-projective-closure-saturation, lem-projective-closure-dense-affine-chart]
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

For the parabola $A=V(y-x^2)\subseteq\mathbf A_k^2$, use homogeneous coordinates $[Z:X:Y]$. Its homogenization is $YZ-X^2$, so $\overline A^{\rm proj}=V_+(YZ-X^2)$. The $Z=1$ chart is $y=x^2$. At infinity $Z=0$, the equation gives $X=0$, leaving exactly $[0:0:1]$.
