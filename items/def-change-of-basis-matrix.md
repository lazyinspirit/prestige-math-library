---
id: def-change-of-basis-matrix
kind: definition
title: 'The change-of-basis matrix $P_{\mathcal C\leftarrow\mathcal B}=[\operatorname{id}_V]_{\mathcal B}^{\mathcal C}$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-coordinate-column-and-matrix-of-a-linear-map,
       lem-composition-and-identity-linear-maps]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'S. Axler, Linear Algebra Done Right, 4th ed., §3D, result 3.82'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Definition

Let $\mathcal B$ and $\mathcal C$ be ordered bases of the same
finite-dimensional vector space $V$. The **change-of-basis matrix from
$\mathcal B$-coordinates to $\mathcal C$-coordinates** is

$$P_{\mathcal C\leftarrow\mathcal B}:=[\operatorname{id}_V]_{\mathcal B}^{\mathcal C}.$$

Its $j$-th column is $[b_j]_{\mathcal C}$. The arrow records the direction in
which coordinate columns are converted.
