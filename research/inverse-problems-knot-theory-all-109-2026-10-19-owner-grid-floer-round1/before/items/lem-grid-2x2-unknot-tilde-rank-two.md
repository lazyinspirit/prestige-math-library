---
id: lem-grid-2x2-unknot-tilde-rank-two
kind: lemma
title: "The 2-by-2 unknot grid has tilde homology of rank two"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-grid-diagram-for-an-oriented-knot
  - alg-grid-knot-floer-complex
  - lem-grid-rectangle-differential-squares-to-zero
dependency_level: 5
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Peter S. Ozsvath, Andras I. Stipsicz, and Zoltan Szabo, Grid Homology for Knots and Links, Exercise 4.4.3"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Printed p.72; 2-by-2 and 3-by-3 fully blocked unknot grids"
    - title: "Ciprian Manolescu, Peter Ozsvath, and Sucharit Sarkar, A combinatorial description of knot Floer homology, §4"
      url: "https://arxiv.org/pdf/math/0607691"
      locator: "Printed pp.14–15; grid example calculations and the tilde stable factor statement"
---

## Statement

Let $G_2$ be the toroidal $2\times2$ grid whose bottom row has $O$ in its left cell and $X$ in its right cell, and whose top row has $X$ in its left cell and $O$ in its right cell. With the row and column orientation convention for grid diagrams, this is a one-component unknot grid. The tilde grid complex over $\mathbb F_2$, whose differential counts empty-state rectangles disjoint from both marking sets, has homology of rank two.

```tikz
\begin{tikzpicture}[scale=0.9]
  \draw[step=1,gray] (0,0) grid (2,2);
  \node at (0.5,0.5) {$O$}; \node at (1.5,0.5) {$X$};
  \node at (0.5,1.5) {$X$}; \node at (1.5,1.5) {$O$};
  \node[left] at (0,0.5) {bottom row};
  \node[left] at (0,1.5) {top row};
\end{tikzpicture}
```

## Statement references

[[def-grid-diagram-for-an-oriented-knot|The grid orientation and toroidal rectangle convention]]

[[alg-grid-knot-floer-complex|The tilde differential]]

[[lem-grid-rectangle-differential-squares-to-zero|The tilde differential squares to zero]]

[Ozsvath, Stipsicz, and Szabo, *Grid Homology for Knots and Links*, Exercise 4.4.3](https://web.math.princeton.edu/~petero/GridHomologyBook.pdf)

[Manolescu, Ozsvath, and Sarkar, “A combinatorial description of knot Floer homology,” §4](https://arxiv.org/pdf/math/0607691)

## Facts & Assumptions

**Given:** The specified 2-by-2 marking array on a torus.

[F1] [[def-grid-diagram-for-an-oriented-knot]] traces each component by following the row from $O$ to $X$ and the column from $X$ to the next $O$; it identifies the components with cycles of this finite marking permutation and gives exactly two grid states for a 2-by-2 knot grid.

[F2] [[alg-grid-knot-floer-complex]] defines the tilde differential by counting empty-state rectangles whose interiors contain no $O$- or $X$-marking.

[F3] [[lem-grid-rectangle-differential-squares-to-zero]] establishes that the tilde differential is a chain-complex differential.

## Verification

1.1 Starting at the bottom-left $O$, the oriented route follows its row to the bottom-right $X$, then follows that column to the top-right $O$, then that row to the top-left $X$, then that column back to the starting $O$. Thus the link has one component. Its planar projection has no transverse self-intersection: the four segments meet only at these marked turning points, and smoothing the four corners gives a simple closed planar curve, which bounds a disk. Therefore it is an unknot. [F1, given, construct]

1.2 There are exactly two grid states, the two permutations of two columns. For either ordered pair of distinct states, the rectangles from the first state to the second are the bottom-left and top-right cells, each containing one $O$; the reverse rectangles are the bottom-right and top-left cells, each containing one $X$. No such rectangle is counted in tilde mode, and there are no rectangles from a state to itself. Hence the tilde differential is zero. [F1, F2, construct]

1.3 The tilde chain group has its two grid states as a basis, and its differential is zero by step 1.2. The chain condition is supplied by [F3], so its homology equals this two-dimensional chain group and has rank two. [F3, step 1.2, algebra] ∎
