---
id: thm-tangent-and-cotangent-bundles-extend-over-a-manifold-boundary
kind: theorem
title: "Tangent and cotangent bundles extend over a boundary"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-smooth-half-space-extensions-have-the-same-derivatives-on-the-half-space, def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary, def-derivation-at-a-point-and-tangent-space, thm-coordinate-derivations-form-a-basis-of-the-tangent-space, def-cotangent-space-and-cotangent-bundle-as-a-disjoint-union]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
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

## Statement

For a smooth $n$-manifold with boundary, derivations of smooth boundary germs form an $n$-dimensional tangent space at every point, and the usual tangent and cotangent bundles have smooth boundary-chart transition maps.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

## Proof

**Proof technique:** direct.

1.1 Extend a boundary germ locally to Euclidean space. Extension-independent derivatives give the coordinate derivations $\partial_1,\ldots,\partial_n$ and the ordinary derivation argument makes them a basis. [given]

2.1 Differentiated chart transitions give the tangent transition matrices; their dual inverses give cotangent transitions. Thus no dimension is lost at the boundary. [step 1.1] ∎
