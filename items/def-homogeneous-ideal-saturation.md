---
id: def-homogeneous-ideal-saturation
kind: definition
title: "homogeneous ideal saturation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-homogeneous-polynomial-and-homogeneous-ideal]
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

## Definition

For homogeneous $J\subseteq k[x_0,\ldots,x_n]$, define $J:x_0^\infty=\{G:\exists r\ge0,\ x_0^rG\in J\}$. It is a homogeneous ideal, by applying the membership condition to homogeneous components.

