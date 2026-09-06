---
id: def-embedded-smooth-submanifold-with-boundary
kind: definition
title: "Embedded smooth submanifolds with boundary"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-smooth-immersion-and-embedding-for-manifolds-with-boundary]
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

An embedded smooth submanifold with boundary of $M$ is a subset $S\subseteq M$ supplied with a manifold-with-boundary smooth structure for which $S\hookrightarrow M$ is a smooth embedding. In particular this definition does not assert $S\cap\partial M=\partial S$.
