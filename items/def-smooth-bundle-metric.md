---
id: def-smooth-bundle-metric
kind: definition
title: "Smooth bundle metrics"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-smooth-vector-bundle-rank-fibre-and-trivial-bundle, def-inner-product-space]
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

Let $E\to M$ be a smooth vector bundle. A **smooth bundle metric** on $E$ is a
choice of inner product $\langle\cdot,\cdot\rangle_p$ on each fibre $E_p$ such
that, for every pair of smooth local sections $s,t$, the function

$$p\mapsto\langle s(p),t(p)\rangle_p$$

is smooth on the common domain of $s$ and $t$.
