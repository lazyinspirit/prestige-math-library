---
id: fs-a-boundary-point-can-become-an-interior-point-under-another-smooth-chart
kind: false-statement
title: "A smooth chart can turn a boundary point into an interior point"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-smooth-invariance-of-manifold-boundary]
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

**False.** A smooth boundary-chart transition cannot send a face point to a relative-interior point.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

## Refutation

**Proof technique:** direct.

1.1 Such a transition is a smooth half-space diffeomorphism. [given]

2.1 Smooth boundary invariance sends face to face, contradicting the proposed chart change. [step 1.1] ∎
