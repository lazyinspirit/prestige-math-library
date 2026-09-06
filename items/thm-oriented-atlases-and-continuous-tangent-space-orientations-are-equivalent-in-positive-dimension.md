---
id: thm-oriented-atlases-and-continuous-tangent-space-orientations-are-equivalent-in-positive-dimension
kind: theorem
title: "Positive oriented atlases characterize orientations except for one-manifolds with boundary"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-oriented-smooth-manifold-and-oriented-chart, prop-orientations-and-positive-basis-classes-agree-in-positive-dimension, def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary, def-inward-outward-and-boundary-tangent-vectors]
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

Let $M$ be an $n$-manifold with boundary. If $n\ge2$, or if $n>0$ and $\partial M=\varnothing$, an orientation of the tangent determinant lines is equivalent to an atlas whose transition Jacobians are positive. Any such atlas determines an orientation for every $n>0$, but the converse can fail when $n=1$ and $\partial M\ne\varnothing$. In dimension zero, arbitrary pointwise signs remain the governing formulation.

## Facts & Assumptions

**Given:** A smooth $n$-manifold $M$ with boundary.

[L1] An orientation is a smooth choice of determinant ray, and for $n>0$ a chart is oriented when its coordinate frame lies in that ray ([[def-oriented-smooth-manifold-and-oriented-chart]]).

[L2] In positive dimension, determinant rays are equivalent to positive-basis classes ([[prop-orientations-and-positive-basis-classes-agree-in-positive-dimension]]).

[L3] Boundary charts take values in $\mathbb H^n$, and their last positive coordinate direction is inward at the face ([[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]]; [[def-inward-outward-and-boundary-tangent-vectors]]).

## Proof

**Proof technique:** direct.

1.1 Suppose an orientation is selected and either $n\ge2$, or $n>0$ and $\partial M=\varnothing$. By [L1] and [L2], each chart frame has a sign relative to that ray; continuity makes this sign locally constant, so restrict to its sign components. On a negative interior chart, reverse one coordinate. On a negative boundary chart with $n\ge2$, reverse one of the first $n-1$ coordinates; this preserves $\mathbb H^n$ while reversing the frame orientation. The resulting positive charts cover $M$. [given, L1, L2, L3, construct, algebra]

2.1 On overlaps, [L2] says that both coordinate frames are positive precisely when their change determinant is positive. Thus step 1.1 gives a positive-transition atlas. Conversely, in every $n>0$, positive transition determinants make the chart-frame rays agree on overlaps and hence define the orientation of [L1]. [given, L1, L2, step 1.1]

3.1 The converse in step 2.1 is not reversible for an arbitrary orientation when $n=1$ and there is boundary: by [L3], a positive boundary chart necessarily declares the inward vector positive. On the standard oriented interval $[0,1]$, $+\partial_x$ is inward at $0$ but outward at $1$, so its orientation cannot be represented by positive boundary charts at both endpoints. Finally, when $n=0$, [L1] shows why independent pointwise signs, rather than the unique empty chart frame, remain the correct datum. [given, L1, L3, step 2.1, algebra] ∎
