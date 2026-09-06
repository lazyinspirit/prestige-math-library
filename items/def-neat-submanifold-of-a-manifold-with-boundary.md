---
id: def-neat-submanifold-of-a-manifold-with-boundary
kind: definition
title: "Neat submanifolds of a manifold with boundary"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-embedded-smooth-submanifold-with-boundary, thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold, def-transverse-embedded-submanifolds]
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

An embedded submanifold with boundary $S\subseteq M$ is **neat** when $S\cap\partial M=\partial S$ and $S$ is transverse to $\partial M$. Properness and closedness are not part of the term.
