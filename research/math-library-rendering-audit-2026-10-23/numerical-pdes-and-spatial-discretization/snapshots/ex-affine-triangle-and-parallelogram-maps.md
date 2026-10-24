---
id: ex-affine-triangle-and-parallelogram-maps
kind: example
title: Affine maps for a triangle and a parallelogram
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-matching-affine-simplicial-meshes]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 8
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap08.pdf
      locator: "§§8.1–8.2, printed pp. 83–88: affine reference maps for simplicial meshes."
    - title: Luca Heltai, Numerical Methods for Partial Differential Equations, Lecture 2
      url: https://luca-heltai.github.io/nmpde/lectures/lecture-02/
      locator: "§6: affine cell maps and Jacobian scaling."
verification: {}
---

## Example

The orientation-preserving map $F(x,y)=(2x,3y)$ sends the reference
closed triangle $\overline{\widehat S_2}=\operatorname{conv}\{(0,0),(1,0),(0,1)\}$ to the
triangle with vertices $(0,0),(2,0),(0,3)$ and area $3$. The affine map
$G(s,t)=(2s+t,3t)$ sends the unit square to the parallelogram with vertices
$(0,0),(2,0),(1,3),(3,3)$ and area $6$.

## Facts & Assumptions

**Given:** The reference simplex and the convention that affine maps use their constant Jacobian matrix, as in [[def-matching-affine-simplicial-meshes]].

[F1] The reference triangle has vertices $(0,0),(1,0),(0,1)$, and a reference map is affine with a constant matrix. ([[def-matching-affine-simplicial-meshes]])

## Verification

1.1 The first matrix is $A=\begin{pmatrix}2&0\\0&3\end{pmatrix}$, with determinant $6>0$. Applying it to the three vertices gives $(0,0),(2,0),(0,3)$. This is a right triangle with legs $2$ and $3$, so its area is $\frac12\cdot2\cdot3=3$. [F1, given, algebra]

2.1 The second matrix is $B=\begin{pmatrix}2&1\\0&3\end{pmatrix}$, with determinant $6>0$. Applying it to the square's vertices gives $(0,0),(2,0),(1,3),(3,3)$, whose opposite edges are parallel because they are translates of the two column vectors $(2,0)$ and $(1,3)$. Hence the image is a parallelogram with base length $2$ and altitude $3$, so its area is $2\cdot3=6$. It is an affine image of a square, not a simplicial cell. [F1, step 1.1, algebra] ∎
