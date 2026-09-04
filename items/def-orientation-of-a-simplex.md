---
id: def-orientation-of-a-simplex
kind: definition
title: "An orientation of a simplex"
status: draft
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-abstract-simplicial-complex]
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
    - title: "Vidit Nanda, Computational Algebraic Topology, Lecture 03: Homology"
      url: "https://people.maths.ox.ac.uk/nanda/cat/Lecture%2003%20Homology.pdf"
---

## Definition

Let $\sigma=\{v_0,\dots,v_n\}$ be an $n$-simplex. An **orientation** of
$\sigma$ is an equivalence class of orderings of its vertices, where two
orderings are equivalent when they differ by an even permutation. For $n=0$
there is only one orientation.
