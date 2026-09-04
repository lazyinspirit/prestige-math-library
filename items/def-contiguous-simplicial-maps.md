---
id: def-contiguous-simplicial-maps
kind: definition
title: "Contiguous simplicial maps"
status: draft
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-simplicial-map-and-its-geometric-realization]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "Vidit Nanda, Computational Algebraic Topology, Lecture 02: Homotopy"
      url: "https://people.maths.ox.ac.uk/nanda/cat/Lecture%2002%20Homotopy.pdf"
---

## Definition

Two simplicial maps $f,g:K \to L$ are **contiguous** if for every simplex
$\sigma \in K$, the union of the vertex sets $f(\sigma) \cup g(\sigma)$ is a
simplex of $L$.
