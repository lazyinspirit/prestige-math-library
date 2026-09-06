---
id: thm-inward-pointing-vector-fields-have-local-forward-semiflows-at-the-boundary
kind: theorem
title: "Inward-pointing fields have local forward semiflows at the boundary"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-inward-outward-and-boundary-tangent-vectors, thm-tangent-and-cotangent-bundles-extend-over-a-manifold-boundary, thm-fundamental-theorem-on-flows]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Ioan Mărcuț, Manifolds (2017 lecture notes), §§14.5, 15.1"
      url: "https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf"
    - title: "Will Merry, Differential Geometry (2021), Lecture 24"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

Let $M$ be a smooth manifold with boundary and let $X$ be a smooth vector field on $M$ that is inward at every boundary point. Near each boundary point, $X$ has a sufficiently small forward flow that remains in $M$. No negative-time-in-$M$ assertion is made.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

## Proof

**Proof technique:** direct.

1.1 In a boundary chart, extend the coordinate components of the given field across the face and take its Euclidean local flow. At the chosen boundary point its normal component is positive. [given]

2.1 After shrinking, that normal component remains positive whenever the extended flow is near the face. A curve starting with nonnegative normal coordinate cannot first cross to a negative one: at a first zero its normal derivative would be positive. Thus a sufficiently small forward flow remains in $M$, as asserted. [step 1.1] ∎
