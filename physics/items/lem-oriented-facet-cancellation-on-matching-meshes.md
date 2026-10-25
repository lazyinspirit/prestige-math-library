---
id: lem-oriented-facet-cancellation-on-matching-meshes
kind: lemma
title: Interior facet orientations cancel in a matching mesh
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-matching-affine-simplicial-meshes, def-oriented-simplicial-cell-chains]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 10, “Mesh orientation”
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap10.pdf
      locator: "§§10.1–10.4, printed pp. 105–112: globally oriented mesh faces and simplicial orientation."
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 8
      url: https://jschoeberl.github.io/iFEM/_downloads/900feda304f95ee42fd24abe742d7564/numpde.pdf
      locator: "§8.3, printed pp. 170–172: oriented incidence and boundary cancellation."
---

## Statement

Orient every top-dimensional cell of a matching simplicial mesh by the
ambient orientation of $\mathbb R^d$, and orient each facet by the induced
boundary convention of [[def-oriented-simplicial-cell-chains]]. In the sum
of the oriented boundaries of all top-dimensional cells, every interior
facet occurs twice with opposite signs; every boundary facet occurs once.

## Facts & Assumptions

**Given:** A finite face-to-face triangulation of a polyhedral domain, with each interior facet incident to two cells and each boundary facet to one.

[F1] A matching mesh is face-to-face: a shared facet is a whole facet of both cells. ([[def-matching-affine-simplicial-meshes]])

[F2] The oriented boundary of an ordered simplex is the alternating sum of its codimension-one faces. ([[def-oriented-simplicial-cell-chains]])

## Proof

1.1 Let $F$ be an interior facet. Its two incident simplex interiors lie on opposite sides of the affine hyperplane containing $F$; otherwise their interiors would overlap near a relative-interior point of $F$, contradicting the mesh definition. Therefore the two outward unit normals along $F$ are opposites. [F1, given]

2.1 The boundary orientation is defined by the condition that the outward normal followed by an oriented basis of the facet gives the ambient cell orientation. Replacing the outward normal by its negative reverses the induced facet orientation. Hence the two contributions of $F$ in the cell boundary sum have opposite signs and cancel. A boundary facet has one incident cell, so it appears once with its induced boundary orientation. [F2, step 1.1, given] ∎
