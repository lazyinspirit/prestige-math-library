---
id: def-smooth-embedding
kind: definition
title: "Smooth embeddings"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-immersion-submersion-and-constant-rank-map, def-homeomorphism-and-open-maps, def-subspace-topology-top]
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
    - title: "Will J. Merry, Differential Geometry, Definition 6.1"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "John M. Lee, Introduction to Smooth Manifolds, Embeddings"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
---

## Definition

Let $F:M\to N$ be a smooth map. Then $F$ is a **smooth embedding** when

1. $F$ is injective,
2. $F$ is an immersion ([[def-immersion-submersion-and-constant-rank-map]]),
   and
3. $F:M\to F(M)$ is a homeomorphism, where $F(M)$ carries the subspace topology
   from $N$ ([[def-homeomorphism-and-open-maps]],
   [[def-subspace-topology-top]]).
