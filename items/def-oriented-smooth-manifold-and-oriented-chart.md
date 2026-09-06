---
id: def-oriented-smooth-manifold-and-oriented-chart
kind: definition
title: "Oriented smooth manifolds and oriented charts"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space, thm-tangent-and-cotangent-bundles-extend-over-a-manifold-boundary, def-exterior-power-bundle-of-the-cotangent-bundle]
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

An orientation of an $n$-manifold is a smooth choice of a ray in $\det T_pM$ for every $p$. For $n>0$, a chart is oriented when its coordinate frame is in that ray. For $n=0$, the datum is a sign at each point; the unique empty frame does not encode both choices.
