---
id: lem-grid-3x3-unknot-tilde-rank-four
kind: lemma
title: "A 3-by-3 unknot grid has tilde homology of rank four"
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
      locator: "Printed p.72; fully blocked homology of 3-by-3 unknot grids"
    - title: "Ciprian Manolescu, Peter Ozsvath, and Sucharit Sarkar, A combinatorial description of knot Floer homology, §4"
      url: "https://arxiv.org/pdf/math/0607691"
      locator: "Printed pp.14–15; examples of the tilde grid complex and its stable factor"
---

## Statement

Use row indices $r=0,1,2$ from bottom to top and column indices $c=0,1,2$ from left to right. Let $G_3$ have $O$-markings in cells $(r,c)=(0,0),(1,1),(2,2)$ and $X$-markings in cells $(0,1),(1,2),(2,0)$. This toroidal grid represents the unknot. Its tilde grid complex over $\mathbb F_2$, counting empty-state rectangles disjoint from both marking sets, has homology of rank four.

```tikz
\begin{tikzpicture}[scale=0.9]
  \draw[step=1,gray] (0,0) grid (3,3);
  \node at (0.5,0.5) {$O$}; \node at (1.5,0.5) {$X$};
  \node at (1.5,1.5) {$O$}; \node at (2.5,1.5) {$X$};
  \node at (2.5,2.5) {$O$}; \node at (0.5,2.5) {$X$};
  \node[left] at (0,0.5) {$r=0$};
  \node[left] at (0,1.5) {$r=1$};
  \node[left] at (0,2.5) {$r=2$};
  \node[below] at (0.5,0) {$c=0$};
  \node[below] at (1.5,0) {$c=1$};
  \node[below] at (2.5,0) {$c=2$};
\end{tikzpicture}
```

## Statement references

[[def-grid-diagram-for-an-oriented-knot|Grid orientation, components, states, rectangles, and markings]]

[[alg-grid-knot-floer-complex|The tilde grid differential]]

[[lem-grid-rectangle-differential-squares-to-zero|The tilde differential squares to zero]]

[Ozsvath, Stipsicz, and Szabo, *Grid Homology for Knots and Links*, Exercise 4.4.3](https://web.math.princeton.edu/~petero/GridHomologyBook.pdf)

[Manolescu, Ozsvath, and Sarkar, “A combinatorial description of knot Floer homology,” §4](https://arxiv.org/pdf/math/0607691)

## Facts & Assumptions

**Given:** The $3\times3$ marking pattern and row/column indices in the statement.

[F1] [[def-grid-diagram-for-an-oriented-knot]] defines the $O\to X\to O$ component permutation, identifies grid states with permutations, and defines empty torus rectangles.

[F2] [[alg-grid-knot-floer-complex]] defines the tilde differential by counting empty-state rectangles whose interiors avoid both $O$- and $X$-markings.

[F3] [[lem-grid-rectangle-differential-squares-to-zero]] proves that this differential squares to zero.

## Proof

1.1 The marking permutation sends the $O$ in row $0$ to the $X$ in column $1$ and then to the $O$ in row $1$; it continues from row $1$ through column $2$ to row $2$, and from row $2$ through column $0$ back to row $0$. Thus the grid has one component. In its planar projection the oriented path has vertices $(0.5,0.5),(1.5,0.5),(1.5,1.5),(2.5,1.5),(2.5,2.5),(0.5,2.5)$ and returns to $(0.5,0.5)$. These six axis-parallel edges form a simple polygon and meet only at consecutive endpoints, so the projection has no crossings and is an unknot diagram. [F1, given, construct]

1.2 The six grid states, in lexicographic order as row-to-column permutations, are $012,021,102,120,201,210$. The only cells containing neither marking are $(r,c)=(0,2),(1,0),(2,1)$; each is isolated from the other two by marked cells across every side, including the torus identifications. Every marking-free rectangle made of more than one cell contains a pair of side-adjacent cells and hence a marking. Therefore the only possible tilde rectangles are these three single-cell rectangles. [F1, F2, construct]

1.3 For state $201$, the SW and NE corners of cell $(r,c)=(0,2)$ lie in that state and the other two corners give state $021$; cell $(1,0)$ similarly gives $201\to210$, and cell $(2,1)$ gives $201\to102$, with the row interval in the last cell wrapping around the torus. No other state has the SW/NE pair of corners of any of these empty cells. Thus the differential matrix, with rows and columns ordered $012,021,102,120,201,210$ and rows indexing targets, has rows
$$000000,\quad 000010,\quad 000010,\quad 000000,\quad 000000,\quad 000010.$$
It sends only the basis vector for state $201$ to the sum of the three distinct target basis vectors, so its rank is one. [F1, F2, step 1.2, algebra]

1.4 By [F3] this is a chain complex. Rank-nullity gives $\dim\ker\partial=6-1=5$ and $\dim\operatorname{im}\partial=1$; hence the homology has dimension $5-1=4$. [F3, step 1.3, algebra] ∎
