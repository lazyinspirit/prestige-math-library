---
id: def-restriction-of-a-vector-bundle
kind: definition
title: "Restrictions of vector bundles"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-smooth-vector-bundle-rank-fibre-and-trivial-bundle, prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure]
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

Let $\pi:E\to M$ be a smooth vector bundle and let $U\subseteq M$ be open. The
**restriction** of $E$ to $U$ is

$$E|_U:=\pi^{-1}(U)$$

with projection $\pi|_{E|_U}:E|_U\to U$.

The fibres of $E|_U$ are the same vector spaces $E_p$ for $p\in U$, and the
smooth structure on $E|_U$ is the one induced from the open subset
$\pi^{-1}(U)\subseteq E$.
