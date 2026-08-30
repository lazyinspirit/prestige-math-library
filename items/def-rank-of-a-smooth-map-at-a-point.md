---
id: def-rank-of-a-smooth-map-at-a-point
kind: definition
title: "The rank of a smooth map at a point"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-differential-of-a-smooth-map]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, Ch. 4"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry, Definition 6.11"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Definition

Let $F:M\to N$ be a smooth map and let $p\in M$. The **rank of $F$ at $p$** is

$$\operatorname{rank}_pF:=\operatorname{rank}(dF_p),$$

the rank of the linear map $dF_p:T_pM\to T_{F(p)}N$
([[def-differential-of-a-smooth-map]]).

This is chart-independent because the differential changes under coordinates by
composition with linear isomorphisms, so its rank is unchanged.
