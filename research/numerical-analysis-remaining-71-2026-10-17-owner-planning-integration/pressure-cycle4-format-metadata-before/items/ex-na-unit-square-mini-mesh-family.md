---
id: ex-na-unit-square-mini-mesh-family
kind: example
title: "A matching shape-regular MINI mesh family on the unit square"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 8
deps: [def-matching-affine-simplicial-meshes, lem-shape-regular-affine-simplex-scaling, def-na-mini-element-p1-bubble-p1-spaces, thm-na-mini-element-fortin-stability]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references: []
---

## Example

For each positive integer $n$, divide $D=(0,1)^2$ into $n^2$ equal squares and split every square along its lower-left to upper-right diagonal.

\begin{center}
\begin{tikzpicture}[scale=1.25]
\draw[thick] (0,0) rectangle (2,2);
\draw (1,0)--(1,2);
\draw (0,1)--(2,1);
\draw (0,0)--(1,1);
\draw (1,0)--(2,1);
\draw (0,1)--(1,2);
\draw (1,1)--(2,2);
\node at (0.25,1.75) {$K_1$};
\node at (1.75,0.25) {$K_2$};
\end{tikzpicture}
\end{center}

The figure shows the $n=2$ case only; it draws all grid edges and the same diagonal in each square. The cell diameter is $h_n=\sqrt2/n$, so this family refines to zero mesh size.

## Facts & Assumptions

**Given:** The open unit square and the family of square grids with the stated diagonal convention.

[F1] A matching affine simplicial mesh consists of nondegenerate simplices meeting in common full faces, with conforming affine maps and bounded shape ratio. ([[def-matching-affine-simplicial-meshes]], [[lem-shape-regular-affine-simplex-scaling]])

[F2] On a connected polyhedral domain, the MINI velocity-pressure pair on a shape-regular matching simplicial mesh has a uniformly bounded Fortin map and inf-sup constant. ([[def-na-mini-element-p1-bubble-p1-spaces]], [[thm-na-mini-element-fortin-stability]])

## Verification

1.1 Every small triangle is a right isosceles triangle with legs $1/n$ and diameter $\sqrt2/n$. Two triangles in one square share the full diagonal, and triangles in adjacent squares meet along either a full grid edge or a grid vertex; hence the family is matching and conforming. All cells are scaled copies of the same two reference triangles, so their shape ratios are constant and the family is shape-regular and quasi-uniform. [F1, given, algebra]

2.1 Since $h_n=\sqrt2/n\to0$, each mesh lies in the MINI mesh class and the Fortin stability result [F2] applies uniformly in $n$. The displayed mesh picture fixes the diagonal convention; the stability conclusion follows from the stated geometry and the cited theorem, not from the drawing. [F2, step 1.1, algebra] ∎
