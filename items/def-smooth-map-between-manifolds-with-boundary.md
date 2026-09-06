---
id: def-smooth-map-between-manifolds-with-boundary
kind: definition
title: "Smooth maps between manifolds with boundary"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary, def-smooth-function-on-a-relatively-open-subset-of-a-half-space]
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

A continuous map $f:M\to N$ is smooth if, for every pair of boundary charts around $p$ and $f(p)$, the coordinate representative $\psi\circ f\circ\varphi^{-1}$ is smooth on a relatively open subset of a half-space in the local-extension sense.
