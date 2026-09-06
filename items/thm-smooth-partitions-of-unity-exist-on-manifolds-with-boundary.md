---
id: thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary
kind: theorem
title: "Smooth partitions of unity exist on manifolds with boundary"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary, def-smooth-partition-of-unity-subordinate-to-an-open-cover, thm-smooth-partitions-of-unity-exist-on-manifolds]
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

Assume $\mathrm{AC}_\omega$. Every open cover of a smooth manifold with boundary admits a smooth partition of unity subordinate to it.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a smooth manifold with boundary, and an open cover.

## Proof

**Proof technique:** direct.

1.1 In half-space charts, restrict the Euclidean bumps used in the boundaryless construction; their supports and local finiteness survive restriction. [given]

2.1 The same countable locally finite shrinking and normalization construction produces a positive locally finite family summing to one. Thus it is subordinate to the prescribed cover, with the same $\mathrm{AC}_\omega$-sufficient choice bound as the precursor construction. [step 1.1] ∎
