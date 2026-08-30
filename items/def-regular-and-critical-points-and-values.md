---
id: def-regular-and-critical-points-and-values
kind: definition
title: "Regular and critical points and values"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-immersion-submersion-and-constant-rank-map]
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
    - title: "John M. Lee, Introduction to Smooth Manifolds, Ch. 5"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry, Definition 6.9"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds, Definition 12"
      url: "https://courses.maths.ox.ac.uk/pluginfile.php/31073/mod_resource/content/1/Manifold_notes.pdf"
---

## Definition

Let $F:M\to N$ be a smooth map.

- A point $p\in M$ is a **regular point** of $F$ when $F$ is a submersion at
  $p$, and a **critical point** otherwise
  ([[def-immersion-submersion-and-constant-rank-map]]).
- A point $q\in N$ is a **regular value** of $F$ when every point of
  $F^{-1}(q)$ is a regular point. This includes the empty-fibre case.
- A point $q\in N$ that is not a regular value is a **critical value**.
