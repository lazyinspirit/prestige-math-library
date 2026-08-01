---
id: lem-product-lower-bound-for-jordan-content
kind: lemma
title: "If every finite interval cover of $A\\subseteq\\mathbb{R}$ has total length at least $c$, then every rectangle cover of $A\\times[0,d]$ has total area at least $cd$"
status: published
origin: session
deps: [def-jordan-inner-and-outer-content, def-multidimensional-rectangle-and-volume, def-multidimensional-grid-partition, def-finite-sum, lem-finite-sum-laws, def-interval]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Jordan Measurable Sets"
      url: "https://www.jirka.org/ra/html/sec_jordansets.html"
    - title: "J. Lebl, Basic Analysis, Outer Measure and Null Sets"
      url: "https://www.jirka.org/ra/html/sec_outermeasure.html"
pipeline_run: null
---

## Statement

Let $A\subseteq\mathbb R$. If every finite interval cover of $A$ has total length at least $c\ge0$, then every finite rectangle cover of $A\times[0,d]$, $d\ge0$, has total area at least $cd$.

## Facts & Assumptions

**Given:** A finite rectangle cover and the stated interval-cover lower bound.

[L1] Rectangles and grids are [[def-multidimensional-rectangle-and-volume]] and [[def-multidimensional-grid-partition]].

[L2] Finite sums split and distribute ([[def-finite-sum]], [[lem-finite-sum-laws]]).

## Proof

**Proof technique:** direct.

1.1 If $d=0$, then every covering area is nonnegative and the required lower bound is $cd=0$. Hence assume $d>0$. Clip the rectangles to a common bounding rectangle and partition the nondegenerate interval $[0,d]$ at every vertical endpoint.   [L1, given]

2.1 On each nondegenerate horizontal strip, choose an interior height. The horizontal projections of the rectangles active at that height cover $A$, so their total widths are at least $c$.  [given, step 1.1, choose]

3.1 Multiply the inequality for each strip by its height and sum. Reindexing the nested finite sums counts each covering rectangle by its width times its total active height, at most its area. Thus the covering area is at least $c\sum\text{strip heights}=cd$.  [step 2.1, L2, algebra] ∎
