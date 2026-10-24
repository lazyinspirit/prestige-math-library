---
id: thm-orientability-is-equivalent-to-a-nowhere-vanishing-top-form
kind: theorem
title: "Orientability is equivalent to a nowhere-vanishing top form"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-orientable-manifold, def-oriented-smooth-manifold-and-oriented-chart, thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary, def-smooth-differential-k-form]
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

Assume $\mathrm{AC}_\omega$. A smooth manifold is orientable if and only if it has a nowhere-vanishing smooth top-degree form.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and a smooth manifold.

## Proof

**Proof technique:** direct.

1.1 A nonzero top form selects the determinant ray on which it is positive, producing an orientation. [given]

2.1 Conversely choose positive local top forms for an orientation and multiply them by a subordinate partition of unity. At every point all nonzero summands lie in the same positive ray, so their sum is nonzero and is a global top form. [step 1.1] ∎
