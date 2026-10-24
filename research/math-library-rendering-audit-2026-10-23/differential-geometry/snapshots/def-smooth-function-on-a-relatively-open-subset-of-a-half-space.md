---
id: def-smooth-function-on-a-relatively-open-subset-of-a-half-space
kind: definition
title: "Smooth functions on relatively open half-space sets"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-euclidean-upper-half-space-and-its-boundary]
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

If $U$ is relatively open in $\mathbb H^n$, a map $f:U\to\mathbb R^q$ is **smooth** when every $p\in U$ has an Euclidean-open neighbourhood $W$ of $p$ and a smooth $F:W\to\mathbb R^q$ with $F=f$ on $W\cap U$. This is a local condition; maps into a relatively open half-space are smooth when their Euclidean coordinate functions are.
