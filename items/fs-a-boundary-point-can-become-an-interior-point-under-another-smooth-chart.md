---
id: fs-a-boundary-point-can-become-an-interior-point-under-another-smooth-chart
kind: false-statement
title: "Can a smooth chart turn a boundary point into an interior point?"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-smooth-invariance-of-manifold-boundary]
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

**False.** A smooth boundary-chart transition cannot send a face point to a relative-interior point.

## Facts & Assumptions

**Given:** Two compatible boundary charts whose overlap transition is $f:U\to V$, and a face point $p\in U$.

[L1] A smooth diffeomorphism between relatively open half-space sets maps face points to face points ([[thm-smooth-invariance-of-manifold-boundary]]).

## Refutation

**Proof technique:** direct.

1.1 Compatibility of the two charts makes $f$ a smooth half-space diffeomorphism. [given]

2.1 By [L1], $f(p)$ is a face point, not a relative-interior point. Thus no smooth boundary-chart transition can make the proposed change. [L1, step 1.1] ∎
