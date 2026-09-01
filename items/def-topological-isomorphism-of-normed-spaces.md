---
id: def-topological-isomorphism-of-normed-spaces
kind: definition
title: "A topological isomorphism of normed spaces"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-bounded-linear-operator, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations"
      url: "https://math.jhu.edu/~sire/brezis.pdf"
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
pipeline_run: frontier-28
---

## Definition

Let $X$ and $Y$ be normed spaces over the same scalar field. A map
$T:X\to Y$ is a **topological isomorphism of normed spaces** when

1. $T$ is a bounded linear operator ([[def-bounded-linear-operator]]);
2. $T$ is bijective ([[def-injection-surjection-bijection]]);
3. the inverse map $T^{-1}:Y\to X$ is also bounded.

## Remarks

- The definition does not hide item-level theorems: boundedness of the inverse
  is part of the data, not an automatic consequence here.
- A topological isomorphism is an algebraic isomorphism and a homeomorphism for
  the norm topologies.
