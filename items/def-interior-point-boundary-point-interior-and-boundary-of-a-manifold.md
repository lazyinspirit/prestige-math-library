---
id: def-interior-point-boundary-point-interior-and-boundary-of-a-manifold
kind: definition
title: "Interior and boundary of a manifold with boundary"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-topological-manifold-with-boundary, def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]
justified_by: []
aliases: []
verification:
  audited: 2026-09-07
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Ioan Mărcuț, Manifolds (2017 lecture notes), §§14.5, 15.1"
      url: "https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf"
    - title: "Will Merry, Differential Geometry (2021), Lecture 24"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Definition

Let $p$ lie in an $n$-manifold with boundary. If $n>0$, call $p$ a provisional boundary point if a boundary-chart image has last coordinate $0$, and an interior point if it has last coordinate $>0$. If $n=0$, declare every point interior and no point a provisional boundary point. Write these sets as $\partial M$ and $\operatorname{Int}M$; chart independence is proved below.
