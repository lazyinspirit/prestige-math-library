---
id: lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation
kind: lemma
title: "A PL embedded polyhedron becomes a subcomplex after subdivision"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-pl-embedding-and-subpolyhedron
  - def-simplicial-subcomplex-star-closure-and-link
  - lem-two-finite-linear-subdivisions-have-a-common-simplicial-refinement
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "C. P. Rourke and B. J. Sanderson, Introduction to Piecewise-Linear Topology"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rsplx.pdf"
      locator: "§2.11–2.14, triangulations, common subdivisions and simplicialization of PL maps, web text lines 482–514."
---

## Statement

Let $Q$ be a compact piecewise-linear polyhedron with a fixed finite linear triangulation $T$. If $f:P\to Q$ is a piecewise-linear embedding of a compact piecewise-linear polyhedron, then some finite subdivision $T'$ of $T$ contains $f(P)$ as the realization of a subcomplex.

## Statement references

[[def-pl-embedding-and-subpolyhedron]] — the image of a piecewise-linear embedding is a subpolyhedron in some finite triangulation.

[[def-simplicial-subcomplex-star-closure-and-link]] — a subcomplex is closed under taking faces.

[[lem-two-finite-linear-subdivisions-have-a-common-simplicial-refinement]] — finite linear triangulations of the same polyhedron have a common refinement.

## Facts & Assumptions

**Given:** A compact piecewise-linear polyhedron $Q$, a finite linear triangulation $T$ of $Q$, and a piecewise-linear embedding $f:P\to Q$.

[F1] [[def-pl-embedding-and-subpolyhedron]]: $f(P)$ is a subcomplex in some finite linear triangulation $T_0$ of $Q$.

[F2] [[lem-two-finite-linear-subdivisions-have-a-common-simplicial-refinement]]: two finite linear triangulations of the same polyhedron have a common finite linear refinement.

[F3] [[def-simplicial-subcomplex-star-closure-and-link]]: a subcomplex is closed under taking faces.

## Proof

1.1 By [F1], choose a finite linear triangulation $T_0$ of $Q$ in which $f(P)$ is a subcomplex. [given, F1, construct]

1.2 Apply [F2] to $T$ and $T_0$ to obtain a common finite linear refinement $T'$. It is a subdivision of $T$, and it refines every simplex of the subcomplex representing $f(P)$; therefore the simplices of $T'$ contained in $f(P)$ form a subcomplex by [F3], with realization exactly $f(P)$. [given, F2, F3, step 1.1, construct] ∎

