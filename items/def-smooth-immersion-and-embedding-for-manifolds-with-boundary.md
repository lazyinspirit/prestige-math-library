---
id: def-smooth-immersion-and-embedding-for-manifolds-with-boundary
kind: definition
title: "Immersions and embeddings for manifolds with boundary"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-smooth-map-between-manifolds-with-boundary, thm-tangent-and-cotangent-bundles-extend-over-a-manifold-boundary]
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

A smooth $f:M\to N$ is an immersion if $df_p:T_pM\to T_{f(p)}N$ is injective for every $p$, using the full tangent spaces. It is an embedding if it is an immersion and a homeomorphism onto its image. No neatness, properness, closed-image, or boundary-preservation condition is included.
