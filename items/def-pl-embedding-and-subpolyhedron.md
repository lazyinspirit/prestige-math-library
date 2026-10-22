---
id: def-pl-embedding-and-subpolyhedron
kind: definition
title: "PL embeddings and subpolyhedra"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-simplicial-subcomplex-star-closure-and-link
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "C. P. Rourke and B. J. Sanderson, Introduction to Piecewise-Linear Topology"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rsplx.pdf"
      locator: "§§1.4, 1.7, PL maps and embeddings; §2.11–2.14, triangulations and common subdivisions, web text lines 177–229 and 482–514."
---

## Definition

Let $P$ and $Q$ be compact piecewise-linear polyhedra. A **piecewise-linear map** $f:P\to Q$ is a map that is simplicial after suitable finite subdivisions of triangulations of $P$ and $Q$. A **subpolyhedron** $A$ of $Q$ is a subset represented by the realization of a subcomplex in some finite linear triangulation of $Q$. A map $f:P\to Q$ is a **piecewise-linear embedding** if it is piecewise-linear, its image $f(P)$ is a subpolyhedron of $Q$, and $f:P\to f(P)$ is a piecewise-linear homeomorphism. A finite simplicial triangulation of a closed piecewise-linear $n$-manifold is **combinatorial** if the link of every $k$-simplex is a piecewise-linear sphere of dimension $n-k-1$. Thus in a closed combinatorial $3$-manifold every triangular face has link $S^0$ and is incident to exactly two tetrahedra.

## Definition references

[[def-simplicial-subcomplex-star-closure-and-link]] — a subcomplex is closed under taking faces.

[Rourke–Sanderson, §§1.4, 1.7, 2.14](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rsplx.pdf) — piecewise-linear maps, embeddings and their simplicial subdivisions.
