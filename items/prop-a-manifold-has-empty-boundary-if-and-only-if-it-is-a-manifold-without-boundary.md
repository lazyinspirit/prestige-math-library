---
id: prop-a-manifold-has-empty-boundary-if-and-only-if-it-is-a-manifold-without-boundary
kind: proposition
title: "Empty boundary is equivalent to being boundaryless"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-topological-manifold-with-boundary, def-interior-point-boundary-point-interior-and-boundary-of-a-manifold, thm-smooth-invariance-of-manifold-boundary, def-smooth-manifold]
justified_by: []
aliases: []
proof_strategy: direct
verification:
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

A manifold with boundary has empty boundary if and only if its charts may be taken Euclidean-open, hence it is a manifold without boundary.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

## Proof

**Proof technique:** direct.

1.1 If its boundary is empty, every chart point has positive last coordinate; restricting charts to that relative interior gives Euclidean charts. [given]

2.1 Conversely Euclidean charts have no face points, so the intrinsic boundary is empty. [step 1.1] ∎
