---
id: thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold
kind: theorem
title: "The boundary of a positive-dimensional manifold is a closed embedded smooth (n-1)-manifold"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-interior-point-boundary-point-interior-and-boundary-of-a-manifold, thm-smooth-invariance-of-manifold-boundary, def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary, def-embedded-smooth-submanifold-with-boundary]
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

If $M$ has dimension $n\ge1$, the restrictions of boundary charts to their faces give $\partial M$ the structure of a closed embedded smooth boundaryless $(n-1)$-manifold. For $n=0$, $\partial M=\varnothing$.

## Facts & Assumptions

**Given:** A smooth $n$-manifold $M$ with boundary.

[L1] The boundary and interior defined in boundary charts are intrinsic ([[thm-smooth-invariance-of-manifold-boundary]]).

[L2] Boundary-chart transition maps are smooth in the local-extension sense ([[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]]).

[L3] A submanifold with boundary is embedded when its inclusion into the ambient manifold is a smooth embedding ([[def-embedded-smooth-submanifold-with-boundary]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $n\ge1$. Restrict each boundary chart to the face $x^n=0$. By [L1] these restrictions cover exactly $\partial M$. Their images are open subsets of $\mathbb R^{n-1}$, and [L2] makes their transition maps smooth restrictions of extensions of the ambient transitions. They therefore define a smooth boundaryless $(n-1)$-manifold structure on $\partial M$. [given, L1, L2, construct]

2.1 In a boundary chart the inclusion $\partial M\hookrightarrow M$ is the coordinate map $(x^1,\ldots,x^{n-1})\mapsto(x^1,\ldots,x^{n-1},0)$, so it is a smooth injective immersion and a homeomorphism onto its subspace image. Thus it is a smooth embedding, and [L3] gives the asserted embedded submanifold. The complement is locally $\{x^n>0\}$, hence open, so $\partial M$ is closed. When $n=0$, the boundary is empty by the stated convention. [given, L3, step 1.1, algebra] ∎
