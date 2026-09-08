---
id: lem-two-finite-linear-subdivisions-have-a-common-simplicial-refinement
kind: lemma
title: "Two finite linear subdivisions have a common simplicial refinement"
status: published
origin: pipeline
deps: ["lem-finite-convex-cell-complexes-admit-compatible-triangulations", "lem-intersections-of-finite-linear-complexes-form-a-convex-cell-complex"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "C. P. Rourke and B. J. Sanderson, Introduction to Piecewise-Linear Topology"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rsplx.pdf"
---

## Statement

Two finite linear simplicial subdivisions $K_1,K_2$ of a fixed finite Euclidean simplicial complex have a common finite linear simplicial refinement. This asserts refinement of triangulations of the same embedded polyhedron, not of arbitrary abstractly homeomorphic triangulations.

## Source locators

2.8(5), 2.9 and 2.12, pp.15–16.


## Facts & Assumptions

[F1] Intersection cells form a finite complex refining both triangulations. [[lem-intersections-of-finite-linear-complexes-form-a-convex-cell-complex]].

[F2] A finite cell complex has a compatible simplicial triangulation. [[lem-finite-convex-cell-complexes-admit-compatible-triangulations]].


## Proof

**Given:** Two finite linear subdivisions $K_1,K_2$ with the same embedded underlying set.

1.1 Form the finite convex cell complex of all intersections $\sigma\cap\tau$, $\sigma\in K_1$, $\tau\in K_2$, and their faces. It covers the common polyhedron and every cell is contained in a simplex of each triangulation. [F1]

2.1 Choose a compatible simplicial triangulation $T$ of that finite cell complex. Each simplex of $T$ lies in an intersection cell, hence in one simplex of $K_1$ and one of $K_2$, and $|T|$ is their common underlying set. These are exactly the conditions for a common linear refinement. If the set is empty take the empty complex; for points and lower-dimensional intersections the same cell triangulation applies. Only finitely many interior-point choices are required. [F2, step 1.1] ∎
