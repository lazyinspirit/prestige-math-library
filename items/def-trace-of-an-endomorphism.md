---
id: def-trace-of-an-endomorphism
kind: definition
title: 'The basis-independent trace of an endomorphism of a finite-dimensional vector space'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-dimension, def-coordinate-column-and-matrix-of-a-linear-map,
       cor-trace-is-invariant-under-similarity,
       thm-similarity-is-an-equivalence-relation-and-models-basis-change]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'S. Axler, Linear Algebra Done Right, 4th ed., Definition 8.51'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Definition

Let $V$ be a finite-dimensional vector space over $F$ and let $T:V\to V$ be
linear. Choose any ordered basis $\mathcal B$ of $V$ and define the **trace of
the endomorphism $T$** by

$$\operatorname{tr}(T):=\operatorname{tr}([T]_{\mathcal B}^{\mathcal B}).$$

This is independent of the chosen basis: matrices of the same endomorphism in
two ordered bases are similar, and similar matrices have equal trace. When
$V$ is the zero space, the empty basis gives trace $0$.
