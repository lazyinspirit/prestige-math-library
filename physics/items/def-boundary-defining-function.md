---
id: def-boundary-defining-function
kind: definition
title: "Boundary-defining functions"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-smooth-map-between-manifolds-with-boundary, thm-tangent-and-cotangent-bundles-extend-over-a-manifold-boundary, def-interior-point-boundary-point-interior-and-boundary-of-a-manifold]
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

A boundary-defining function on an open $U\subseteq M$ meeting $\partial M$ is a smooth $\rho:U\to[0,\infty)$ with $U\cap\partial M=\rho^{-1}(0)$ and $d\rho_p\ne0$ for each $p\in U\cap\partial M$.
