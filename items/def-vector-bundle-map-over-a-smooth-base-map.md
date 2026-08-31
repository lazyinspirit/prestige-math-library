---
id: def-vector-bundle-map-over-a-smooth-base-map
kind: definition
title: "Vector bundle maps over a smooth base map"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-smooth-vector-bundle-rank-fibre-and-trivial-bundle, def-linear-map]
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

Let $\pi_E:E\to M$ and $\pi_F:F\to N$ be smooth vector bundles, and let
$f:M\to N$ be a smooth map.

A **vector bundle map over $f$** is a smooth map $\Phi:E\to F$ such that
$\pi_F\circ\Phi=f\circ\pi_E$ and, for every $p\in M$, the restriction
$\Phi|_{E_p}:E_p\to F_{f(p)}$ is linear.

When $f=\operatorname{id}_M$, one also says that $\Phi$ is a bundle map **over
the identity**.
