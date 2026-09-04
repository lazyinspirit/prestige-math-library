---
id: def-simplicial-euler-characteristic
kind: definition
title: "The simplicial Euler characteristic"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-locally-finite-and-finite-dimensional-simplicial-complex]
verification:
  audited: 2026-09-04
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

If $K$ is a finite simplicial complex and $f_n(K)$ denotes the number of
$n$-simplices of $K$, the **simplicial Euler characteristic** of $K$ is
$$\chi(K):=\sum_{n \geq 0} (-1)^n f_n(K).$$
The sum is finite because a finite simplicial complex has only finitely many
simplices.
