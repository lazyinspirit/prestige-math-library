---
id: def-finite-triangulated-compact-surface
kind: definition
title: Finite triangulations of compact PL surfaces
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-simplicial-subcomplex-star-closure-and-link
  - def-simplicial-euler-characteristic
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: C. P. Rourke and B. J. Sanderson, Introduction to Piecewise-Linear
        Topology
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rsplx.pdf
      locator: §§1.8 and 2.1–2.14, PL manifolds, finite simplicial complexes, links
        and triangulations.
---

## Definition

A **finite triangulation of a compact PL surface** is a finite two-dimensional simplicial complex $K$ in which each edge is incident to one or two triangles and the link of each vertex is homeomorphic to a circle or a closed interval. Its realization $|K|$ is the surface; its boundary is the subcomplex formed by edges incident to one triangle and their vertices. If $V,E,F$ are the numbers of vertices, edges and triangles, its simplicial Euler characteristic is $\chi(K)=V-E+F$.

## Definition references

[[def-simplicial-subcomplex-star-closure-and-link]] — links in finite simplicial complexes.

[[def-simplicial-euler-characteristic]] — the alternating simplex count defining $\chi(K)$.
