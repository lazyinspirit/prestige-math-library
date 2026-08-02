---
id: def-kernel-and-image-of-a-linear-map
kind: definition
title: "Kernel and image of a linear map"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-linear-map]
justified_by: [thm-linear-kernel-image-and-injectivity]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Axler, Linear Algebra Done Right, Chapter 3"
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Definition

For a linear map $T:V\to W$, its **kernel** and **image** are respectively

$$\ker T:=\{v\in V:T(v)=0_W\},\qquad \operatorname{im}T:=\{T(v):v\in V\}.$$

That both sets are linear subspaces, and that a trivial kernel characterises
injectivity, is proved in [[thm-linear-kernel-image-and-injectivity]].
