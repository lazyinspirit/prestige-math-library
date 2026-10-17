---
id: lem-simplicial-boundary-squared-zero
kind: lemma
title: The simplicial boundary of a boundary is zero
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-oriented-simplicial-cell-chains]
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
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 8
      url: https://jschoeberl.github.io/iFEM/_downloads/900feda304f95ee42fd24abe742d7564/numpde.pdf
      locator: "§8.3, printed pp. 170–172: incidence matrices and zero composition of consecutive boundaries."
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 10
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap10.pdf
      locator: "§10.1, printed p. 106: edge-face and face-cell incidence products vanish."
---

## Statement

For every $1\le k\le d$, the boundary maps of
[[def-oriented-simplicial-cell-chains]] satisfy
$$\partial_{k-1}\circ\partial_k=0.$$

## Facts & Assumptions

**Given:** An oriented simplicial mesh and its alternating boundary maps.

[F1] An oriented generator has boundary $\partial_k[v_0,\ldots,v_k]=\sum_{i=0}^k(-1)^i[v_0,\ldots,\widehat v_i,\ldots,v_k]$, extended linearly. ([[def-oriented-simplicial-cell-chains]])

## Proof

1.1 If $k=1$, then $\partial_{k-1}=\partial_0=0$ by the definition, so the double boundary vanishes. Now let $k\ge2$ and fix an oriented generator $[v_0,\ldots,v_k]$. In $\partial_{k-1}\partial_k[v_0,\ldots,v_k]$, a codimension-two face is obtained by deleting a unique pair of vertices with indices $i<j$. Deleting $i$ first contributes coefficient $(-1)^i(-1)^{j-1}$ because the original index $j$ shifts down by one; deleting $j$ first contributes $(-1)^j(-1)^i$. [F1, given]

2.1 The sum of those two coefficients is $(-1)^{i+j-1}+(-1)^{i+j}=0$. Every codimension-two face arises from exactly these two deletion orders, so every basis coefficient in the double boundary is zero. The double boundary therefore vanishes on each generator and, by linearity, on all of $C_k$. [step 1.1, algebra] ∎
