---
id: def-l-intersecting-family
kind: definition
title: "$L$-intersecting families"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-set-family-and-its-incidence-matrix, def-finite-cardinality, thm-subset-of-a-finite-set]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §4.3"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
    - title: "J. Matousek, Thirty-three Miniatures, Miniature 17"
      url: "https://users.math.cas.cz/~matousek/mini.ps"
pipeline_run: null
---

## Definition

Fix $n\in\mathbb N$ and let $L\subseteq\mathbb{N}$ be finite. A family $\mathcal{F}$ of subsets of $[n]$
is **$L$-intersecting** when

$$\lvert A\cap B\rvert\in L\qquad\text{for every distinct }A,B\in\mathcal{F}.$$

No condition is imposed on the sizes $\lvert A\rvert$ of the individual sets.

## Remarks

- The case $L=\{t\}$ is the constant-intersection situation of Fisher's
  inequality. The Frankl-Wilson theorem treats several allowed intersection
  sizes at once.
