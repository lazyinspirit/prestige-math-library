---
id: thm-the-interior-is-an-open-smooth-n-manifold
kind: theorem
title: "The interior is an open smooth n-manifold"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-interior-point-boundary-point-interior-and-boundary-of-a-manifold, thm-smooth-invariance-of-manifold-boundary, def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]
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

For an $n$-manifold with boundary, $\operatorname{Int}M$ is open and, with restricted charts, is a smooth boundaryless $n$-manifold.

## Facts & Assumptions

**Given:** A smooth $n$-manifold $M$ with boundary.

[L1] For $n>0$, interior points have positive last boundary-chart coordinate; for $n=0$, every point is interior, and these classifications are intrinsic ([[def-interior-point-boundary-point-interior-and-boundary-of-a-manifold]]; [[thm-smooth-invariance-of-manifold-boundary]]).

[L2] Boundary-chart images are relatively open in $\mathbb H^n$, and their transition maps are smooth ([[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]]).

## Proof

**Proof technique:** direct.

1.1 If $n=0$, [L1] gives $\operatorname{Int}M=M$; it is open, and its original charts have image in $\mathbb R^0$, so the conclusion follows. Assume $n\ge1$. Restrict each boundary chart to the inverse image of $\{x^n>0\}$. These sets are open and, by [L1], cover exactly $\operatorname{Int}M$. [given, L1, algebra]

2.1 In the $n\ge1$ case, their images are Euclidean-open, and [L2] shows that the old transition maps restrict to ordinary smooth transitions. The restricted charts therefore make $\operatorname{Int}M$ a smooth boundaryless $n$-manifold; step 1.1 already handled $n=0$. [given, L2, step 1.1] ∎
