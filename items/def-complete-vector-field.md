---
id: def-complete-vector-field
kind: definition
title: "Complete vector fields"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-unique-maximal-integral-curve-through-each-point]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Definition

A smooth vector field $X$ on $M$ is **complete** if, for every $p\in M$, the
maximal integral curve $\gamma_p$ of $X$ is defined on all of $\mathbb R$.
