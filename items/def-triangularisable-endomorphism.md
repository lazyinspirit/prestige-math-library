---
id: def-triangularisable-endomorphism
kind: definition
title: "Triangularisable endomorphisms and simultaneous triangularisability"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-coordinate-column-and-matrix-of-a-linear-map]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Results 5.38-5.39"
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Definition

Let $V$ be a finite-dimensional vector space over $F$. An endomorphism $T:V\to V$ is **triangularisable over $F$** when some ordered basis $\mathcal B$ makes $[T]_{\mathcal B}^{\mathcal B}$ upper triangular ([[def-coordinate-column-and-matrix-of-a-linear-map]]).

A family $\mathcal A$ of endomorphisms of $V$ is **simultaneously triangularisable over $F$** when one ordered basis $\mathcal B$ makes $[S]_{\mathcal B}^{\mathcal B}$ upper triangular for every $S\in\mathcal A$. The empty family is simultaneously triangularisable in every ordered basis, including the empty basis of the zero space.
