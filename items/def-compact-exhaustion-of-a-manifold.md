---
id: def-compact-exhaustion-of-a-manifold
kind: definition
title: "Compact exhaustions of a manifold"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-compact-space]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-30
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
---

## Definition

A **compact exhaustion** of a manifold $M$ is a sequence $(K_n)_{n\ge 1}$ of compact subsets such that $K_n\subseteq \operatorname{int}(K_{n+1})$ for every $n\ge 1$ and $M=\bigcup_{n\ge 1} K_n$.

## Remarks

The interior condition is what makes the exhaustion useful for local constructions.
