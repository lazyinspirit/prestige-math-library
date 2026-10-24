---
id: ex-shape-regular-and-sliver-triangle-families
kind: example
title: A shape-regular family and a degenerating sliver family
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
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 11
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap11.pdf
      locator: "§11.1, printed pp. 117–119: shape regularity and cell inradius."
    - title: Luca Heltai, Numerical Methods for Partial Differential Equations, Lecture 2
      url: https://luca-heltai.github.io/nmpde/lectures/lecture-02/
      locator: "§5: diameter-to-inradius shape-regularity convention and sliver warning."
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-17}}
---

## Statement

Let $\Delta$ be a unit-side equilateral triangle. For each integer $n\ge1$,
its standard triangular-grid subdivision, obtained by dividing each side into
$n$ equal segments and drawing the parallel grid lines, consists of equilateral
cells of side $1/n$; these cells form a shape-regular family with
$h/\rho=2\sqrt3$.
For $\epsilon=1/n$, triangulate the fixed unit square into horizontal
strips of height $\epsilon$, each split along a diagonal. Its cells include
translates and reflections of the triangle with vertices
$(0,0),(1,0),(0,\epsilon)$; their $h/\rho\to\infty$, so this mesh family
is not shape regular under the convention of
[[def-matching-affine-simplicial-meshes]].

## Facts & Assumptions

**Given:** The inradius-to-diameter shape-regularity convention.

[F1] A family is shape regular when the ratios of cell diameter to inradius are uniformly bounded. ([[def-matching-affine-simplicial-meshes]])

## Proof

1.1 Each cell in the stated triangular-grid subdivision has side $a=1/n$. Its altitude is $\sqrt3a/2$, so its area is $\sqrt3a^2/4$ and its incenter lies one third of the altitude from each side; hence $\rho=\sqrt3a/6$. Its diameter is $h=a$, so $h/\rho=2\sqrt3$, independently of $n$. By [F1] this family is shape regular. [F1, given, algebra]

2.1 For $0<\epsilon\le1$, the sliver triangle's incenter joined to its three vertices partitions it into three triangles with common altitude $\rho_\epsilon$, so its area is $\rho_\epsilon$ times half its perimeter. Its side lengths are $1,\epsilon,\sqrt{1+\epsilon^2}$, its longest side is $h_\epsilon=\sqrt{1+\epsilon^2}$ and its area is $\epsilon/2$. Its perimeter is $1+\epsilon+\sqrt{1+\epsilon^2}$, so $$\rho_\epsilon= \frac{\epsilon}{1+\epsilon+\sqrt{1+\epsilon^2}}.$$ The numerator of $h_\epsilon/\rho_\epsilon$ tends to $1$, while its denominator is of order $\epsilon$; hence the ratio tends to infinity. The second triangle in each strip is congruent, so every cell has the same ratio. Thus no uniform shape-regularity constant exists for this fixed-square mesh family. [F1, step 1.1, algebra] ∎
