---
id: def-dual-and-hom-vector-bundles
kind: definition
title: "Dual and Hom vector bundles"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-smooth-vector-bundle-rank-fibre-and-trivial-bundle, def-algebraic-dual-and-linear-functional, def-vector-space-of-linear-maps]
justified_by: []
aliases: []
landmark: false
verification:
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

Let $E\to M$ and $F\to M$ be smooth vector bundles over the same base.

The **dual bundle** $E^*\to M$ has fibre $E_p^*$ over $p\in M$.

The **Hom bundle** $\operatorname{Hom}(E,F)\to M$ has fibre
$\operatorname{Hom}(E_p,F_p)$ over $p\in M$.

The next theorem equips these fibrewise constructions with smooth vector-bundle
structures.
