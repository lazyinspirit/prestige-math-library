---
id: def-orientation-preserving-parametrization
kind: definition
title: "Orientation-preserving parametrizations"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-oriented-smooth-manifold-and-oriented-chart, def-smooth-immersion-and-embedding-for-manifolds-with-boundary]
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

A smooth parametrization $f:P\to S$ between oriented manifolds of the same dimension is orientation preserving when $df_p$ maps the positive determinant ray of $T_pP$ to that of $T_{f(p)}S$ for every $p$.
