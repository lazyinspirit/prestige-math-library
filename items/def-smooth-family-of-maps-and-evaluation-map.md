---
id: def-smooth-family-of-maps-and-evaluation-map
kind: definition
title: "Smooth families of maps and their evaluation maps"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure,
       def-c-r-and-smooth-maps-between-smooth-manifolds]
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
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Definition

Let $M$, $S$, and $N$ be smooth manifolds. A **smooth family of maps from $M$
to $N$ parametrized by $S$** is a smooth map

$$\mathcal F:M\times S\to N.$$

For each $s\in S$, its **slice map** is

$$\mathcal F_s:M\to N,\qquad \mathcal F_s(p):=\mathcal F(p,s).$$

The map $\mathcal F$ itself is the **evaluation map** of the family.
