---
id: def-finite-convex-cell-complex-and-linear-subdivision
kind: definition
title: "Finite convex cell complex and linear subdivision"
status: published
origin: pipeline
deps: ["def-geometric-realization-of-an-abstract-simplicial-complex", "thm-heine-borel-rn", "lem-finite-simplicial-weak-topology-agrees-with-euclidean-topology"]
justified_by: ["lem-intersections-of-finite-linear-complexes-form-a-convex-cell-complex"]
provenance:
  statement: ai-altered
  proof: not-applicable
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

## Definition

A **compact convex polyhedral cell** is a nonempty bounded set in a finite-dimensional Euclidean affine subspace given by finitely many affine inequalities $\ell_i(x)\geq0$. It is closed, hence compact by [[thm-heine-borel-rn]] in positive ambient dimension; in dimension zero it is a singleton. A **face** is the empty set, the cell itself, or its intersection with a supporting hyperplane $\ell=0$ where $\ell\geq0$ on the cell. Equivalently, every nonempty face arises by turning some of the defining inequalities into equalities; this equivalence is proved in the face calculus below.

A **finite convex cell complex** is a finite family of such cells and the empty cell, containing every face of each cell, such that the intersection of any two cells is a face of each. Its underlying set is the union of its cells. A **finite linear simplicial complex** is one whose cells are geometric simplices. Its topology is the Euclidean subspace topology; for a finite abstract complex it agrees by [[lem-finite-simplicial-weak-topology-agrees-with-euclidean-topology]] with its realization topology from [[def-geometric-realization-of-an-abstract-simplicial-complex]].

A **linear subdivision** of a finite convex cell complex is a finite linear simplicial complex with the same underlying set and with every new simplex contained in an old cell. A subdivision on a subcomplex is **compatible** if it is precisely the restriction of the new triangulation. Zero-dimensional cells are singletons, whose only proper face is empty. The empty complex here means the family consisting only of the empty cell. These are convex polyhedral cells, not general CW cells.

## Source locators

Chapter 2, Cells and Cell Complexes, pp.13–15.
