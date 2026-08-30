---
id: def-immersed-submanifold
kind: definition
title: "Immersed submanifolds"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-immersion-submersion-and-constant-rank-map]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, Immersed Submanifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry, Definition 6.5"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Definition

An **immersed submanifold** of a smooth manifold $M$ is a smooth manifold $S$
together with an injective immersion $i:S\to M$
([[def-immersion-submersion-and-constant-rank-map]]).

The topology of $S$ is its own manifold topology; it need not agree with the
subspace topology on the subset $i(S)\subseteq M$.
