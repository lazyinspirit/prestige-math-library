---
id: ex-quadratic-veronese-conic
kind: example
title: The quadratic Veronese image of P1 is a plane conic
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-veronese-map-well-defined-closed-immersion, cor-homogeneous-polynomial-becomes-hyperplane-section]
sources:
  scraped: []
  references:
    - title: J. S. Milne, Algebraic Geometry, 6.23--6.24
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
verification:
  audited: 2026-09-07
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Example

The quadratic Veronese map is $[s:t]\mapsto[s^2:st:t^2]=[Z_0:Z_1:Z_2]$. Its image has equation $Z_0Z_2-Z_1^2=0$. The line $aZ_0+bZ_1+cZ_2=0$ pulls back to the binary quadratic $as^2+bst+ct^2=0$, illustrating the hyperplane-section correspondence.
