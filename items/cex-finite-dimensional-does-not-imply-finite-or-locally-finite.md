---
id: cex-finite-dimensional-does-not-imply-finite-or-locally-finite
kind: counterexample
title: "Finite dimensional does not imply finite or locally finite"
status: draft
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-locally-finite-and-finite-dimensional-simplicial-complex]
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
    - title: "Vidit Nanda, Computational Algebraic Topology, Lecture 01: Complexes"
      url: "https://people.maths.ox.ac.uk/nanda/cat/Lecture%2001%20Complexes.pdf"
---

## Statement refuted

Every finite-dimensional simplicial complex is finite and locally finite.

Let the vertex set be $\{v\} \cup \{w_n:n \geq 1\}$ and let the simplices be
the empty face, all singletons, and all edges $\{v,w_n\}$. Every simplex has
dimension at most $1$, so the complex is finite dimensional. But it has
infinitely many edges, so it is not finite, and the vertex $v$ lies in
infinitely many simplices, so it is not locally finite.
