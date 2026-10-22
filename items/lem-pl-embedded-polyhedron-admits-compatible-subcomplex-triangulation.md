---
id: lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation
kind: lemma
title: "A PL embedded polyhedron becomes a subcomplex after subdivision"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-pl-embedding-and-subpolyhedron
  - def-simplicial-subcomplex-star-closure-and-link
  - lem-two-finite-linear-subdivisions-have-a-common-simplicial-refinement
  - lem-intersections-of-finite-linear-complexes-form-a-convex-cell-complex
  - lem-finite-convex-cell-complexes-admit-compatible-triangulations
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
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Let $Q$ be a compact piecewise-linear polyhedron with a fixed finite linear triangulation $T$. If $f:P\to Q$ is a piecewise-linear embedding of a compact piecewise-linear polyhedron, then some finite subdivision $T'$ of $T$ contains $f(P)$ as the realization of a subcomplex.

## Statement references

[[def-pl-embedding-and-subpolyhedron]] — the image of a piecewise-linear embedding is a subpolyhedron in some finite triangulation.

[[def-simplicial-subcomplex-star-closure-and-link]] — a subcomplex is closed under taking faces.

[[lem-two-finite-linear-subdivisions-have-a-common-simplicial-refinement]] — common refinement for subdivisions of a fixed finite Euclidean complex; the intersection-cell construction below handles the two given linear triangulations directly.

## Facts & Assumptions

**Given:** A compact piecewise-linear polyhedron $Q$, a finite linear triangulation $T$ of $Q$, and a piecewise-linear embedding $f:P\to Q$.

[F1] [[def-pl-embedding-and-subpolyhedron]]: $f(P)$ is a subcomplex in some finite linear triangulation $T_0$ of $Q$.

[F2] [[lem-intersections-of-finite-linear-complexes-form-a-convex-cell-complex]] forms a finite convex intersection-cell complex from two finite linear simplicial complexes in one Euclidean space with the same underlying polyhedron. [[lem-finite-convex-cell-complexes-admit-compatible-triangulations]] gives it a compatible finite linear simplicial triangulation. These are the construction used in the narrower [[lem-two-finite-linear-subdivisions-have-a-common-simplicial-refinement]].

[F3] [[def-simplicial-subcomplex-star-closure-and-link]]: a subcomplex is closed under taking faces.

## Proof

1.1 By [F1], choose a finite linear triangulation $T_0$ of $Q$ in which $f(P)$ is a subcomplex. [given, F1, construct]

2.1 Regard $T$ and $T_0$ as finite linear complexes on the same embedded polyhedron $Q$. Form all nonempty cells $\sigma\cap\tau$ for $\sigma\in T$ and $\tau\in T_0$, together with their faces. By [F2] these form a finite convex cell complex covering $Q$, and a compatible finite simplicial triangulation $T'$ of that cell complex exists. Each simplex of $T'$ lies in a cell contained in a simplex of $T$ and a simplex of $T_0$, so $T'$ is a common linear refinement. In particular it is a subdivision of $T$. Every simplex of the subcomplex representing $f(P)$ is a union of these refined simplices; thus the simplices of $T'$ contained in $f(P)$ have realization exactly $f(P)$ and form a subcomplex by [F3]. [given, F2, F3, step 1.1, construct] ∎

