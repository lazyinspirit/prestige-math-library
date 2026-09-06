---
id: fs-the-boundary-orientation-is-given-by-inward-normal-first
kind: false-statement
title: "Boundary orientation is inward-normal-first"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-induced-boundary-orientation, prop-boundary-orientation-is-independent-of-the-outward-vector-field]
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

**False under the library convention.** The induced boundary orientation is outward-normal-first.

## Facts & Assumptions

**Given:** The library's induced boundary-orientation convention and the standard orientation on an interval $[a,b]$.

[L1] The induced boundary orientation is defined by placing an outward normal first ([[def-induced-boundary-orientation]]).

[L2] For the standard orientation on $[a,b]$, this convention gives $\partial[a,b]=\{b\}-\{a\}$ ([[prop-boundary-orientation-is-independent-of-the-outward-vector-field]]).

## Refutation

**Proof technique:** direct.

1.1 By [L2], outward-normal-first gives the positive sign at $b$ and the negative sign at $a$. [given, L2]

2.1 At each endpoint the inward normal is the negative of the outward normal. By [L1], replacing the first vector by its negative reverses the induced zero-dimensional determinant ray, so inward-normal-first gives the opposite orientation. [L1, step 1.1, algebra] ∎
