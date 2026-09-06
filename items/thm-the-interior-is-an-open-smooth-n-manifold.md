---
id: thm-the-interior-is-an-open-smooth-n-manifold
kind: theorem
title: "The interior is an open smooth n-manifold"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-interior-point-boundary-point-interior-and-boundary-of-a-manifold, thm-smooth-invariance-of-manifold-boundary, def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]
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

For an $n$-manifold with boundary, $\operatorname{Int}M$ is open and, with restricted charts, is a smooth boundaryless $n$-manifold.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

## Proof

**Proof technique:** direct.

1.1 Restrict each boundary chart to the inverse image of $\{x^n>0\}$. These sets are open and cover exactly the intrinsic interior. [given]

2.1 Their images are Euclidean-open, and the old transition maps restrict to ordinary smooth transitions, proving the assertion. [step 1.1] ∎
