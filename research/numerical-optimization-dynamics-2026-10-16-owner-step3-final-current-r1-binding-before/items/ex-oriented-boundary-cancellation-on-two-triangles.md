---
id: ex-oriented-boundary-cancellation-on-two-triangles
kind: example
title: Opposite orientations cancel on a two-triangle mesh
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps: [def-oriented-simplicial-cell-chains, lem-oriented-facet-cancellation-on-matching-meshes]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 10
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap10.pdf
      locator: "§10.1, printed p. 106: oriented edge-face incidence cancellation."
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 8
      url: https://jschoeberl.github.io/iFEM/_downloads/900feda304f95ee42fd24abe742d7564/numpde.pdf
      locator: "§8.3, printed pp. 170–172: oriented simplicial incidence and boundary cancellation."
verification: {}
---

## Statement

Split the unit square along the diagonal from $v_0=(0,0)$ to
$v_2=(1,1)$, with $v_1=(1,0)$ and $v_3=(0,1)$. Orient the two triangles
counterclockwise as $[v_0,v_1,v_2]$ and $[v_0,v_2,v_3]$. Their shared
diagonal occurs once with each orientation and cancels in the sum of their
oriented boundaries.

## Facts & Assumptions

**Given:** The alternating simplicial boundary convention of [[def-oriented-simplicial-cell-chains]] and the matching two-cell mesh.

[F1] For an ordered triangle, $\partial[v_0,v_1,v_2]=[v_1,v_2]-[v_0,v_2]+[v_0,v_1]$. ([[def-oriented-simplicial-cell-chains]])

[F2] A shared facet of a matching mesh has opposite induced orientations in the two cell boundaries. ([[lem-oriented-facet-cancellation-on-matching-meshes]])

## Proof

1.1 Apply [F1] to the first triangle and the ordered triangle $[v_0,v_2,v_3]$ to obtain $$\partial[v_0,v_1,v_2]=[v_1,v_2]-[v_0,v_2]+[v_0,v_1],$$ $$\partial[v_0,v_2,v_3]=[v_2,v_3]-[v_0,v_3]+[v_0,v_2].$$ The edge $[v_0,v_2]$ appears with coefficient $-1$ in the first boundary and $+1$ in the second. [F1, given, algebra]

2.1 Adding the two formulas cancels the shared diagonal and leaves $[v_0,v_1]+[v_1,v_2]+[v_2,v_3]-[v_0,v_3]$, which is the oriented outer boundary since $-[v_0,v_3]=[v_3,v_0]$. This explicit calculation agrees with the general cancellation rule [F2]. [F1, F2, step 1.1, algebra] ∎
