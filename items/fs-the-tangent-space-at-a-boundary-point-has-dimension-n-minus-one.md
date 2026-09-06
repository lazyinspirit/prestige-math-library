---
id: fs-the-tangent-space-at-a-boundary-point-has-dimension-n-minus-one
kind: false-statement
title: "The tangent space at a boundary point has dimension n-1"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-tangent-and-cotangent-bundles-extend-over-a-manifold-boundary, prop-tangent-space-of-the-boundary-is-the-boundary-tangent-hyperplane]
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

**False.** $T_pM$ has dimension $n$ at a boundary point; only $T_p\partial M$ has dimension $n-1$.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

## Refutation

**Proof technique:** direct.

1.1 Boundary-germ derivations have all $n$ coordinate derivations. [given]

2.1 The last-coordinate-zero span is the proper boundary tangent hyperplane, not the full tangent space. [step 1.1] ∎
