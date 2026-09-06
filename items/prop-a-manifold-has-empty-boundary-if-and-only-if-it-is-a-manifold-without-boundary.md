---
id: prop-a-manifold-has-empty-boundary-if-and-only-if-it-is-a-manifold-without-boundary
kind: proposition
title: "Empty boundary is equivalent to being boundaryless"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-topological-manifold-with-boundary, def-interior-point-boundary-point-interior-and-boundary-of-a-manifold, thm-smooth-invariance-of-manifold-boundary, def-smooth-manifold]
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

A smooth manifold with boundary has empty boundary if and only if it admits a covering by boundary charts whose images avoid the model face. Those images are Euclidean-open, so the same atlas presents it as a smooth manifold without boundary.

## Facts & Assumptions

**Given:** A smooth manifold $M$ presented as a manifold with boundary.

[L1] In dimension $n>0$, boundary points are the points sent to the model face and interior points are sent to positive last coordinate; in dimension zero every point is interior ([[def-interior-point-boundary-point-interior-and-boundary-of-a-manifold]]).

[L2] The boundary/interior classification is independent of the chosen boundary chart ([[thm-smooth-invariance-of-manifold-boundary]]).

[L3] A compatible covering atlas with Euclidean-open chart images presents a smooth manifold without boundary ([[def-smooth-manifold]]).

## Proof

**Proof technique:** direct.

1.1 If $\partial M=\varnothing$ and $n=0$, every boundary-chart image lies in $\mathbb R^0$ and is already Euclidean-open. If $n>0$, [L1] and [L2] show that every point has a boundary chart whose image lies in $\{x^n>0\}$ after restricting its domain. Such images are Euclidean-open. The transition maps are restrictions of the original smooth half-space transitions; on these Euclidean-open images their local Euclidean extensions show that they and their inverses are ordinary smooth maps. Hence the restricted charts form the atlas in [L3]. [given, L1, L2, L3]

2.1 Conversely, suppose a covering by boundary charts has images avoiding the model face. For $n>0$, [L1] makes every covered point interior, hence $\partial M=\varnothing$; for $n=0$, [L1] gives the same conclusion directly. Thus both implications hold. [given, L1, L2] ∎
