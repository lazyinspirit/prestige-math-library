---
id: thm-every-manifold-with-boundary-has-a-global-inward-pointing-vector-field-along-the-boundary
kind: theorem
title: "A global inward-pointing boundary vector field exists"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary, def-inward-outward-and-boundary-tangent-vectors, thm-tangent-and-cotangent-bundles-extend-over-a-manifold-boundary]
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

Assume $\mathrm{AC}_\omega$. Let $M$ be a smooth manifold with boundary. There is a smooth vector field, defined on a neighbourhood of $\partial M$, which is inward at every boundary point.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and a smooth manifold $M$ with boundary.

## Proof

**Proof technique:** direct.

1.1 Choose boundary-chart neighbourhoods covering $\partial M$ and, on each one, take the coordinate field with positive last component. Add $\operatorname{Int}M$ to this cover and choose a smooth partition of unity subordinate to it. [given]

2.1 Extend each partition-weighted coordinate field by zero outside its chart and sum the locally finite family on a neighbourhood of $\partial M$; the term supported in $\operatorname{Int}M$ vanishes there. At a boundary point its normal component is a positive weighted sum of positive numbers, hence is positive. Thus this directly constructed smooth field is inward everywhere on the boundary. [step 1.1] ∎
