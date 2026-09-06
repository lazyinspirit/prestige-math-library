---
id: def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary
kind: definition
title: "Smooth charts, atlases, and structures with boundary"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-topological-manifold-with-boundary, def-smooth-function-on-a-relatively-open-subset-of-a-half-space, prop-chain-rule-for-smooth-half-space-maps]
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

A boundary chart is a homeomorphism $\varphi:U\to V\subseteq\mathbb H^n$, where $U\subseteq M$ is open and $V$ is relatively open. Two charts are compatible if each transition map is smooth in the local-extension sense. A smooth atlas is a compatible covering atlas; its smooth structure is its maximal compatible atlas.
