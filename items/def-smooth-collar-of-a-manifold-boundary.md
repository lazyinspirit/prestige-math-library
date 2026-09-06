---
id: def-smooth-collar-of-a-manifold-boundary
kind: definition
title: "Smooth collars of a manifold boundary"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold, def-smooth-map-between-manifolds-with-boundary]
justified_by: []
aliases: []
verification:
  audited: 2026-09-07
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Ioan Mărcuț, Manifolds (2017 lecture notes), §§14.5, 15.1"
      url: "https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf"
    - title: "Will Merry, Differential Geometry (2021), Lecture 24"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Definition

A smooth collar is a smooth embedding $c:\partial M\times[0,\varepsilon)\to M$ such that $c(p,0)=p$ and whose image is an open neighbourhood of $\partial M$ in $M$. Locally one may first use a positive smooth width depending on $p$.
