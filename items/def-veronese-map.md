---
id: def-veronese-map
kind: definition
title: The degree-d Veronese map
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-projective-space-points, def-morphism-to-projective-space-homogeneous-coordinates]
sources:
  scraped: []
  references:
    - title: J. S. Milne, Algebraic Geometry, 6.23
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Definition

Fix $d\ge1$ and an ordering $M_0,\ldots,M_N$ of all degree-$d$ monomials in $x_0,\ldots,x_n$, where $N=\binom{n+d}{d}-1$. The **degree-$d$ Veronese map** is
$$\nu_{n,d}:\mathbf P_k^n\longrightarrow\mathbf P_k^N,\qquad [x]\longmapsto[M_0(x):\cdots:M_N(x)].$$
