---
id: def-immersion-submersion-and-constant-rank-map
kind: definition
title: "Immersions, submersions, and constant-rank maps"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-rank-of-a-smooth-map-at-a-point]
justified_by: []
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
    - title: "John M. Lee, Introduction to Smooth Manifolds, Ch. 4"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry, Definition 6.11"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Definition

Let $F:M^m\to N^n$ be a smooth map.

- $F$ is an **immersion at $p\in M$** when $dF_p$ is injective.
- $F$ is a **submersion at $p\in M$** when $dF_p$ is surjective.
- $F$ has **constant rank $r$ on $A\subseteq M$** when
  $\operatorname{rank}_pF=r$ for every $p\in A$
  ([[def-rank-of-a-smooth-map-at-a-point]]).

The map is an **immersion** or **submersion** without qualification when the
corresponding pointwise condition holds at every point of $M$.
