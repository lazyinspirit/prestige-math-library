---
id: thm-simple-polygon-content-is-the-sum-of-triangle-contents
kind: theorem
title: "A simple polygon is Jordan measurable and its content is the sum of the contents of its triangles"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-simple-polygon-admits-a-triangulation, thm-triangle-content-and-base-height-formula, cor-jordan-content-finite-additivity, thm-graphs-of-continuous-functions-have-content-zero, def-null-and-content-zero-in-rn]
justified_by: []
aliases: []
landmark: true
short: "Polygon content is the triangle sum"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Geometry: Combinatorics & Algorithms 2020, Chapter 4"
      url: "https://ti.inf.ethz.ch/ew/courses/Geo20/lecture/gca20-4.pdf"
pipeline_run: null
---

## Statement

A simple polygon is Jordan measurable and its content is the sum of the contents of the triangles in any triangulation.

## Facts & Assumptions

**Given:** A simple polygonal region $P$.

[L1] Every simple polygon admits a triangulation ([[thm-simple-polygon-admits-a-triangulation]]).

[L2] Every closed triangle is Jordan measurable and has the determinant content formula ([[thm-triangle-content-and-base-height-formula]]).

[L3] If bounded Jordan measurable sets $E,F$ have content-zero intersection, then their union is Jordan measurable and $\operatorname{cont}(E\cup F)=\operatorname{cont}(E)+\operatorname{cont}(F)$ ([[cor-jordan-content-finite-additivity]]).

[L4] The graph of a continuous function on a closed nondegenerate rectangle has content zero ([[thm-graphs-of-continuous-functions-have-content-zero]]).

[L5] Content zero passes to subsets ([[def-null-and-content-zero-in-rn]]).

## Proof

**Proof technique:** direct.

1.1 Choose a triangulation by [L1]. Each of its finitely many closed triangular faces is Jordan measurable by [L2]. [L1, L2, choose]

1.2 Distinct faces meet only in a common edge, a common vertex, or not at all. An edge is a graph of a continuous affine function after interchanging coordinates if necessary, so [L4] gives it content zero. A common vertex or the empty set is a subset of such a graph, so [L5] gives it content zero as well. Thus every face intersection has content zero. [given, L4, L5]

2.1 Apply [L3] repeatedly to the finite face family using step 1.2. The union $P$ is Jordan measurable and its content is the sum of all face contents. [step 1.1, step 1.2, L3]

3.1 The same argument applies to any triangulation, and every resulting sum equals the intrinsic number $\operatorname{cont}(P)$, so the sum is independent of the triangulation. [step 2.1] ∎
