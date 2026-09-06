---
id: def-topological-manifold-with-boundary
kind: definition
title: "Topological manifolds with boundary"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-euclidean-upper-half-space-and-its-boundary, def-hausdorff-space, def-second-countable-space]
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

An $n$-dimensional topological manifold with boundary is a Hausdorff, second-countable space $M$ for which every $p\in M$ has a neighbourhood homeomorphic to a relatively open subset of $\mathbb H^n$. Dimension $0$ is allowed, using $\mathbb H^0=\mathbb R^0$.
