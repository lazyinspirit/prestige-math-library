---
id: prop-tangent-space-of-the-boundary-is-the-boundary-tangent-hyperplane
kind: proposition
title: "The boundary tangent space is the boundary-tangent hyperplane"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold, thm-tangent-and-cotangent-bundles-extend-over-a-manifold-boundary, def-inward-outward-and-boundary-tangent-vectors]
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

For $p\in\partial M$ of an $n\ge1$ dimensional manifold and the inclusion $i:\partial M\hookrightarrow M$, the differential $di_p$ identifies $T_p\partial M$ with the hyperplane of boundary-tangent vectors in $T_pM$.

## Facts & Assumptions

**Given:** An $n$-dimensional smooth manifold $M$ with boundary, where $n\ge1$, and a point $p\in\partial M$.

[L1] The boundary is an embedded smooth $(n-1)$-manifold with charts obtained by restricting boundary charts to their faces ([[thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold]]).

[L2] The full tangent space $T_pM$ has the $n$ boundary-chart coordinate derivations as a basis ([[thm-tangent-and-cotangent-bundles-extend-over-a-manifold-boundary]]).

[L3] Boundary-tangent vectors are exactly those with zero last coordinate in a boundary chart ([[def-inward-outward-and-boundary-tangent-vectors]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], a restricted face chart on $\partial M$ has coordinate vectors $\partial_1,\ldots,\partial_{n-1}$. In the corresponding boundary chart on $M$, the inclusion is $i(x^1,\ldots,x^{n-1})=(x^1,\ldots,x^{n-1},0)$, so $di_p$ sends those vectors to the first $n-1$ ambient coordinate derivations. Hence $di_p$ is injective and its image is their span. [given, L1, construct, algebra]

2.1 In the full basis from [L2], the image found in step 1.1 is precisely the last-coordinate-zero hyperplane, which [L3] identifies with the boundary-tangent vectors. [given, L2, L3, step 1.1] ∎
