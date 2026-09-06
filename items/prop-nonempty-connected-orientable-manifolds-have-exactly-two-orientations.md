---
id: prop-nonempty-connected-orientable-manifolds-have-exactly-two-orientations
kind: proposition
title: "Nonempty connected orientable manifolds have exactly two orientations"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-orientable-manifold, def-oriented-smooth-manifold-and-oriented-chart, thm-oriented-atlases-and-continuous-tangent-space-orientations-are-equivalent-in-positive-dimension]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ioan Mărcuț, Manifolds (2017 lecture notes), §§14.5, 15.1"
      url: "https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf"
    - title: "Will Merry, Differential Geometry (2021), Lecture 24"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

A nonempty connected orientable manifold has exactly two orientations; on a disconnected manifold the choices are componentwise.

## Facts & Assumptions

**Given:** A nonempty connected orientable smooth manifold $M$ and one chosen orientation $o$ on it.

[L1] An orientation is a smooth pointwise choice of a determinant-line ray ([[def-oriented-smooth-manifold-and-oriented-chart]]).

[L2] Orientability asserts the existence, but not a preferred choice, of such an orientation ([[def-orientable-manifold]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], at each point any other orientation $o'$ is either $o$ or its opposite. Smoothness of both ray choices makes the relative sign locally constant. [given, L1, L2]

2.1 Connectedness makes that sign constant, so $o'=o$ everywhere or $o'=-o$ everywhere. Both choices exist and are distinct because $M$ is nonempty. On a disconnected manifold the same locally constant sign may be selected independently on each component. [given, step 1.1] ∎
