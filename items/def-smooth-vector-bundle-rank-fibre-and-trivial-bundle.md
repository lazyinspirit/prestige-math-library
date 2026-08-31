---
id: def-smooth-vector-bundle-rank-fibre-and-trivial-bundle
kind: definition
title: "Smooth vector bundles, rank, fibres, and trivial bundles"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-smooth-fibre-bundle-and-local-trivialization, def-vector-space, def-linear-map]
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

Let $\pi:E\to M$ be a smooth fibre bundle and let $r\in\mathbb N$.

A **smooth vector bundle of rank $r$** is a smooth fibre bundle for which every
fibre $E_p:=\pi^{-1}(p)$ is an $r$-dimensional real vector space and there is an
open cover $(U_\alpha)$ of $M$ such that each restriction
$\pi^{-1}(U_\alpha)\to U_\alpha$ admits a local trivialization

$$\Phi_\alpha: \pi^{-1}(U_\alpha)\to U_\alpha\times \mathbb R^r$$

whose restriction on each fibre $E_p$ is a linear isomorphism
$E_p\to\mathbb R^r$.

The fibre over $p\in M$ is called the **fibre at $p$**. A vector bundle is
**trivial** when it is globally isomorphic over $M$ to the product bundle
$M\times\mathbb R^r\to M$.
