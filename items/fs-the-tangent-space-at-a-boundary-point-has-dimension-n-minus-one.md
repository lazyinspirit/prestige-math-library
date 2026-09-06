---
id: fs-the-tangent-space-at-a-boundary-point-has-dimension-n-minus-one
kind: false-statement
title: "The tangent space at a boundary point has dimension n-1"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-tangent-and-cotangent-bundles-extend-over-a-manifold-boundary, prop-tangent-space-of-the-boundary-is-the-boundary-tangent-hyperplane]
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

**False.** $T_pM$ has dimension $n$ at a boundary point; only $T_p\partial M$ has dimension $n-1$.

## Facts & Assumptions

**Given:** An $n$-dimensional smooth manifold $M$ with boundary and a point $p\in\partial M$.

[L1] Boundary-germ derivations form an $n$-dimensional tangent space at every point ([[thm-tangent-and-cotangent-bundles-extend-over-a-manifold-boundary]]).

[L2] For $n\ge1$, $T_p\partial M$ is the boundary-tangent hyperplane in $T_pM$ ([[prop-tangent-space-of-the-boundary-is-the-boundary-tangent-hyperplane]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], the $n$ coordinate derivations form a basis of the full tangent space $T_pM$. [given, L1]

2.1 By [L2], only the last-coordinate-zero span is $T_p\partial M$, an $(n-1)$-dimensional hyperplane when $n\ge1$. Thus the false statement confuses the boundary tangent space with the full tangent space. [L2, step 1.1] ∎
