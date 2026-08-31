---
id: def-pullback-vector-bundle-as-a-fibre-product
kind: definition
title: "Pullback vector bundles as fibre products"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-smooth-vector-bundle-rank-fibre-and-trivial-bundle, prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]
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

Let $\pi:E\to M$ be a smooth vector bundle and let $f:N\to M$ be a smooth map.
The **pullback set** of $E$ along $f$ is

$$f^*E:=\{(q,e)\in N\times E:f(q)=\pi(e)\}.$$

Its projection to $N$ is $(q,e)\mapsto q$, and its fibre over $q\in N$ is
canonically identified with $E_{f(q)}$. The following theorem shows that this
set carries a natural smooth vector-bundle structure.
