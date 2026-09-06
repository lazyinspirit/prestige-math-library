---
id: prop-boundary-orientation-of-a-product-when-at-most-one-factor-has-boundary
kind: proposition
title: "Boundary orientation of a product with at most one boundary factor"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-product-orientation, def-induced-boundary-orientation, prop-boundary-orientation-is-independent-of-the-outward-vector-field]
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

For oriented $M^m,N$, if $\partial N=\varnothing$ then $\partial(M\times N)=\partial M\times N$ has the product boundary orientation; if $\partial M=\varnothing$ then $M\times\partial N$ has $(-1)^m$ times the product orientation.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

## Proof

**Proof technique:** direct.

1.1 Put the outward normal of the boundary factor first in the ordered determinant of $TM\oplus TN$. [given]

2.1 For the first factor it is already first. For the second it crosses $m$ tangent vectors, producing $(-1)^m$. If both boundaries are nonempty, corners occur and no claim is made. [step 1.1] ∎
