---
id: prop-tangent-space-of-the-boundary-is-the-boundary-tangent-hyperplane
kind: proposition
title: "The boundary tangent space is the boundary-tangent hyperplane"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold, thm-tangent-and-cotangent-bundles-extend-over-a-manifold-boundary, def-inward-outward-and-boundary-tangent-vectors]
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

For $p\in\partial M$ of an $n\ge1$ dimensional manifold, $T_p\partial M$ is the hyperplane of boundary-tangent vectors in the full space $T_pM$.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

## Proof

**Proof technique:** direct.

1.1 A restricted face chart has coordinate vectors $\partial_1,\ldots,\partial_{n-1}$, so its tangent space is their span. [given]

2.1 In the ambient boundary chart this is precisely the last-coordinate-zero hyperplane, which is the defined boundary-tangent condition. [step 1.1] ∎
