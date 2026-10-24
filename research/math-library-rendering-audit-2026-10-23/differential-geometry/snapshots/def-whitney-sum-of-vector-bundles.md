---
id: def-whitney-sum-of-vector-bundles
kind: definition
title: "Whitney sums of vector bundles"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-smooth-vector-bundle-rank-fibre-and-trivial-bundle, def-internal-direct-sum]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-31
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---
## Definition

Let $E\to M$ and $F\to M$ be smooth vector bundles over the same base. Their
**Whitney sum** is the disjoint union

$$E\oplus F:=\coprod_{p\in M}(E_p\oplus F_p),$$

with projection sending $(p,v,w)$ to $p$. Fibrewise, the vector space over $p$
is the direct sum of $E_p$ and $F_p$.
