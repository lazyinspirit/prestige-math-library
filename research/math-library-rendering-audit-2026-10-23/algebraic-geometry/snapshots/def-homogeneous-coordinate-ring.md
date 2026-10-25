---
id: def-homogeneous-coordinate-ring
kind: definition
title: "homogeneous coordinate ring"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-projective-algebraic-set, def-quotient-ring]
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

## Definition

For $X\subseteq\mathbf P_k^n$, let $I_+(X)$ be its homogeneous vanishing ideal and define its homogeneous coordinate ring by $S(X)=k[x_0,\ldots,x_n]/I_+(X)$, with the induced grading.

