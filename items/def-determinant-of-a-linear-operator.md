---
id: def-determinant-of-a-linear-operator
kind: definition
title: "The determinant of an endomorphism of a finite-dimensional vector space: its matrix determinant in an ordered basis in positive dimension, and $1$ on the zero space"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-coordinate-column-and-matrix-of-a-linear-map,
       def-determinant-of-a-square-matrix, def-dimension]
justified_by: [thm-operator-determinant-is-basis-independent]
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, 4th ed."
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Definition

Let $T:V\to V$ be a linear operator on a finite-dimensional vector space over
a field $F$ ([[def-dimension]]).

If $\dim V=n\geq 1$, choose an ordered basis $\mathcal B$ and define

$$\det(T):=\det([T]_{\mathcal B}),$$

where $[T]_{\mathcal B}$ is the coordinate matrix of $T$
([[def-coordinate-column-and-matrix-of-a-linear-map]]) and the determinant on
the right is the matrix determinant
([[def-determinant-of-a-square-matrix]]). If $V=\{0\}$, define $\det(T):=1$.

The positive-dimensional definition is justified by
[[thm-operator-determinant-is-basis-independent]], which proves that the value
does not depend on the chosen ordered basis.
