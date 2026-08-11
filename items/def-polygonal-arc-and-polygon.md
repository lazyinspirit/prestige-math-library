---
id: def-polygonal-arc-and-polygon
kind: definition
title: "Polygonal arcs and polygons as non-self-intersecting finite unions of line segments in $\\mathbb R^2$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-polygonal-path-and-polygonal-connectedness, def-injection-surjection-bijection, def-finite-cardinality, lem-metrics-on-rn]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Chapter 4, Section 4.1"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
pipeline_run: null
---

## Definition

Work in the metric plane $\mathbb R^2$ of [[lem-metrics-on-rn]]. A **polygonal arc** from $x$ to $y$ is the image of an injective continuous map $\gamma:[0,1]\to\mathbb R^2$ ([[def-injection-surjection-bijection]]) for which there are finitely many parameters $0=t_0<\cdots<t_m=1$ such that $\gamma$ is affine and nonconstant on each $[t_{i-1},t_i]$. Its vertices are the finitely many points $\gamma(t_i)$ ([[def-finite-cardinality]]). This is a simple polygonal path in the terminology of [[def-polygonal-path-and-polygonal-connectedness]].

A **polygon** is the image of a continuous map $\gamma:[0,1]\to\mathbb R^2$ with $\gamma(0)=\gamma(1)$, affine and nonconstant on finitely many consecutive parameter intervals, and injective on $[0,1)$. Nonconsecutive constituent segments are disjoint, and consecutive ones meet only at their common endpoint. A polygon is therefore a simple closed polygonal curve, not the filled region it may bound.

