---
id: def-linear-isometry-and-orthogonal-or-unitary-operator
kind: definition
title: "Linear isometries, and orthogonal or unitary operators on finite-dimensional inner product spaces"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-inner-product-space, def-inner-product-norm, def-linear-map]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., definitions 7.44 and 7.51'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Definition

A linear map $T:V\to W$ ([[def-linear-map]]) between inner product spaces ([[def-inner-product-space]]) is a **linear isometry** if

$$\lVert Tv\rVert=\lVert v\rVert$$

for every $v\in V$, where the norm is the induced norm [[def-inner-product-norm]]. An invertible linear isometry from a real finite-dimensional inner product space to itself is an **orthogonal operator**; over $\mathbb C$ it is a **unitary operator**.

Equivalently, once the finite-dimensional characterisation is proved, orthogonal and unitary operators are the endomorphisms satisfying $T^*T=TT^*=I$.
