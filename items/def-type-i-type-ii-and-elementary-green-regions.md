---
id: def-type-i-type-ii-and-elementary-green-regions
kind: definition
title: "Type I, Type II, and elementary regions for Green's theorem"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-piecewise-c1-path-operations-and-oriented-reparametrizations, thm-fubini-over-a-region-between-continuous-graphs]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, section 10.6"
      url: "https://www.jirka.org/ra/html/sec_mvgreenstheorem.html"
pipeline_run: null
---

## Definition

A compact **Type I region** is

$$D=\{(x,y):a\le x\le b,\ \alpha(x)\le y\le\beta(x)\},$$

where $a<b$, the continuous piecewise-$C^1$ functions $\alpha,\beta$ satisfy $\alpha\le\beta$, and $\alpha<\beta$ on $(a,b)$. A compact **Type II region** is defined analogously by continuous piecewise-$C^1$ functions $\lambda\le\rho$ on $[c,d]$:

$$D=\{(x,y):c\le y\le d,\ \lambda(y)\le x\le\rho(y)\}.$$

An **elementary Green region** admits both descriptions. By [[thm-fubini-over-a-region-between-continuous-graphs]], each Type I description is compact and Jordan measurable.

A **finite elementary Green region** is a nonempty finite union $D=D_1\cup\cdots\cup D_N$ of elementary Green regions with pairwise disjoint interiors. Pairwise intersections must be finite unions of complete shared boundary arcs and endpoints, and every positive-length internal arc must belong to exactly two pieces with opposite induced orientations. This supplied decomposition is part of the data; it is not inferred from an arbitrary closed curve.
