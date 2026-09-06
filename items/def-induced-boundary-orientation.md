---
id: def-induced-boundary-orientation
kind: definition
title: "Induced boundary orientation"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space, def-inward-outward-and-boundary-tangent-vectors, prop-tangent-space-of-the-boundary-is-the-boundary-tangent-hyperplane]
justified_by: []
aliases: []
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Ioan Mărcuț, Manifolds (2017 lecture notes), §§14.5, 15.1"
      url: "https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf"
    - title: "Will Merry, Differential Geometry (2021), Lecture 24"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Definition

For an oriented manifold with boundary, orient $T_p\partial M$ by the **outward-normal-first** rule: an outward vector first, followed by a positive boundary determinant, is a positive determinant of $T_pM$.
