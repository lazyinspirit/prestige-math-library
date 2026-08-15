---
id: def-diagonalisable-endomorphism
kind: definition
title: "A diagonalisable endomorphism is one admitting a basis of eigenvectors, equivalently a diagonal matrix representation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-linear-basis, def-coordinate-column-and-matrix-of-a-linear-map, def-eigenvalue-eigenvector-eigenspace-and-spectrum]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., §§5A–5B'
      url: 'https://linear.axler.net/LADR4e.pdf'
    - title: 'Keith Conrad, The Minimal Polynomial and Some Applications, §§4–5'
      url: 'https://kconrad.math.uconn.edu/blurbs/linmultialg/minpolyandappns.pdf'
pipeline_run: null
---

## Definition

Let $T:V\to V$ be an endomorphism of a finite-dimensional vector space over a field $F$. The endomorphism $T$ is **diagonalisable over $F$** if $V$ has a basis consisting of eigenvectors of $T$ ([[def-eigenvalue-eigenvector-eigenspace-and-spectrum]], [[def-linear-basis]]).

Equivalently, $T$ is diagonalisable if some ordered basis $\mathcal B$ makes its matrix $[T]_{\mathcal B}^{\mathcal B}$ diagonal ([[def-coordinate-column-and-matrix-of-a-linear-map]]). The unique endomorphism of the zero space is diagonalisable: its empty ordered basis is a basis of eigenvectors and its $0\times0$ matrix is diagonal.
