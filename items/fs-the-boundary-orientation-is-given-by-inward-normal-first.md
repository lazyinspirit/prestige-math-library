---
id: fs-the-boundary-orientation-is-given-by-inward-normal-first
kind: false-statement
title: "Boundary orientation is inward-normal-first"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-induced-boundary-orientation, prop-boundary-orientation-is-independent-of-the-outward-vector-field]
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

**False under the library convention.** The induced boundary orientation is outward-normal-first.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

## Refutation

**Proof technique:** direct.

1.1 At the endpoints of an oriented interval, outward-normal-first gives $\{b\}-\{a\}$. [given]

2.1 Replacing outward by inward reverses each determinant ray, so it gives the opposite convention. [step 1.1] ∎
