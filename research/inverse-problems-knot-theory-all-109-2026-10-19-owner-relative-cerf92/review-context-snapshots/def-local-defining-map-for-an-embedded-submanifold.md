---
id: def-local-defining-map-for-an-embedded-submanifold
kind: definition
title: "Local defining maps for embedded submanifolds"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-codimension-and-hypersurface, def-embedded-submanifold-and-slice-chart, def-immersion-submersion-and-constant-rank-map]
justified_by: [thm-embedded-submanifolds-admit-local-defining-submersions]
aliases: []
landmark: false
verification:
  audited: 2026-08-31
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, Embedded Submanifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
---

## Definition

Let $S\subseteq M^m$ be an embedded $k$-submanifold and let $p\in S$. A
**local defining map** for $S$ at $p$ is a smooth submersion

$$\Phi:U\to\mathbb R^{m-k}$$

on an open neighbourhood $U$ of $p$ such that

$$S\cap U=\Phi^{-1}(0).$$

For a hypersurface, a local defining map is equivalently a local defining
function with values in $\mathbb R$.
