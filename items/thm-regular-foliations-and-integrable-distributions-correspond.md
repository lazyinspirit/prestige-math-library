---
id: thm-regular-foliations-and-integrable-distributions-correspond
kind: theorem
title: "Regular foliations and integrable distributions correspond"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-integrable-distribution,
       thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds,
       thm-frobenius-local-coordinate-theorem,
       def-regular-foliation-atlas,
       def-leaf-of-a-regular-foliation,
       def-flat-chart-for-a-distribution,
       def-plaque-of-a-flat-chart]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=w4bhBwAAQBAJ"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

On an $n$-manifold $M$, regular foliations of leaf dimension $k$ and
integrable rank-$k$ distributions determine each other:

1. a regular foliation atlas defines an integrable tangent distribution;
2. an integrable rank-$k$ distribution defines a regular foliation atlas whose
   leaves are its maximal connected integral manifolds.

## Facts & Assumptions

**Given:** Either a regular foliation atlas of leaf dimension $k$ or an
integrable rank-$k$ distribution on $M$.

[A1] In foliation charts and flat charts, plaques are the local leaf pieces.

## Proof

**Proof technique:** direct.

1.1 In a regular foliation chart $(x,y)$, declare the tangent distribution to [given]
be the span of $\partial_{x^1},\dots,\partial_{x^k}$. Because overlap maps send
plaque directions to plaque directions, these local $k$-planes patch to a
smooth rank-$k$ distribution. Plaques are local integral manifolds, so the
distribution is integrable. [given, construct]

1.2 Conversely, let $\mathcal D$ be an integrable rank-$k$ distribution. By the [given]
local Frobenius theorem, every point has a flat chart $(x,y)$ for $\mathcal D$.
Choose a covering by sufficiently small restrictions of these charts, refining
overlap domains into plaque-coordinate neighborhoods. On each such overlap the
new transverse coordinate has differential zero in every old plaque direction,
so it is locally a function only of the old transverse coordinate. The refined
charts therefore have transitions of the form required by a regular foliation
atlas. This asserts existence of a compatible refined atlas; it does not claim
that every unrestricted flat chart belongs to one common atlas. [given, construct]

1.3 In that atlas the plaques are precisely the local integral pieces of [given]
$\mathcal D$, so the global leaves are exactly the maximal connected integral
manifolds. The two constructions therefore recover one another. [given]

2.1 Thus regular foliations and integrable distributions correspond. [given] ∎ [given]
