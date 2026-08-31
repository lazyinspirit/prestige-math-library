---
id: def-smooth-fibre-bundle-and-local-trivialization
kind: definition
title: "Smooth fibre bundles and local trivializations"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-smooth-manifold, def-diffeomorphism-and-local-diffeomorphism-of-manifolds, prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]
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

Let $M$ and $E$ be smooth manifolds, let $F$ be a smooth manifold, and let
$\pi:E\to M$ be a smooth surjection.

A **smooth local trivialization with model fibre $F$** on an open set
$U\subseteq M$ is a diffeomorphism

$$\Phi: \pi^{-1}(U)\to U\times F$$

over $U$, meaning that $\operatorname{pr}_1\circ\Phi=\pi$.

The map $\pi:E\to M$ is a **smooth fibre bundle with model fibre $F$** when
there is an open cover $(U_\alpha)$ of $M$ such that each restriction
$\pi^{-1}(U_\alpha)\to U_\alpha$ admits a smooth local trivialization.

Thus each point of $M$ has a neighborhood on which $E$ is smoothly identified
with a product over the identity on the base.
