---
id: def-locally-finite-and-finite-dimensional-simplicial-complex
kind: definition
title: "Local finiteness, finiteness, and finite dimensionality of a simplicial complex"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-abstract-simplicial-complex]
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
    - title: "Vidit Nanda, Computational Algebraic Topology, Lecture 01: Complexes"
      url: "https://people.maths.ox.ac.uk/nanda/cat/Lecture%2001%20Complexes.pdf"
---

## Definition

Let $(V,K)$ be an abstract simplicial complex.

The complex is **finite** if $K$ has only finitely many simplices.

It is **locally finite** if each vertex $v \in V$ lies in only finitely many
simplices of $K$.

It is **finite dimensional** if there is an integer $N \geq 0$ such that every
simplex of $K$ has dimension at most $N$.

These are distinct conditions: finite implies locally finite and finite
dimensional, but local finiteness and finite dimensionality do not imply
finiteness, and finite dimensionality does not imply local finiteness.
