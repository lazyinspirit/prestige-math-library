---
id: prop-boundary-orientation-of-a-product-when-at-most-one-factor-has-boundary
kind: proposition
title: "Boundary orientation of a product with at most one boundary factor"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-product-orientation, def-induced-boundary-orientation, prop-boundary-orientation-is-independent-of-the-outward-vector-field]
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

For oriented $M^m,N$, if $\partial N=\varnothing$ then $\partial(M\times N)=\partial M\times N$ has the product boundary orientation; if $\partial M=\varnothing$ then $M\times\partial N$ has $(-1)^m$ times the product orientation.

## Facts & Assumptions

**Given:** Oriented manifolds $M^m$ and $N$, with at most one of $\partial M$ and $\partial N$ nonempty.

[L1] The product orientation uses the ordered determinant $\det(TM\oplus TN)\cong\det(TM)\otimes\det(TN)$ ([[def-product-orientation]]).

[L2] Boundary orientation places an outward normal before a positive boundary determinant ([[def-induced-boundary-orientation]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], compare the boundary orientation with the product orientation by moving the outward normal of the boundary factor to the first position in the ordered determinant of $TM\oplus TN$. [given, L1, L2]

2.1 On $\partial M\times N$, the normal is already first, so the two orientations agree. On $M\times\partial N$, it crosses the $m$ tangent vectors from $M$, producing $(-1)^m$. If both boundaries are nonempty, their product has corners and lies outside the stated hypotheses. [step 1.1, algebra] ∎
