---
id: def-grid-diagram-for-an-oriented-knot
kind: definition
title: "Toroidal grid diagrams and gradings for oriented knots"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-oriented-link-in-s-three-and-ambient-isotopy
dependency_level: 0
justified_by:
  - lem-grid-alexander-grading-integral
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Peter S. Ozsvath, Andras I. Stipsicz, and Zoltan Szabo, Grid Homology for Knots and Links, §§3.1–3.2 and 4.1–4.3"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Printed pp.43–56 and 65–71; toroidal grids, states, Maslov and Alexander functions"
    - title: "Ciprian Manolescu, Peter Ozsvath, and Sucharit Sarkar, A combinatorial description of knot Floer homology, §§1 and 3"
      url: "https://arxiv.org/pdf/math/0607691"
      locator: "Grid presentation, orientation, winding-number grading, and the grid-to-Heegaard identification setup"
    - title: "Ciprian Manolescu, An Introduction to Knot Floer Homology, §4.1"
      url: "https://web.stanford.edu/~cm5/hfk.pdf"
      locator: "Printed pp.14–16; grid diagrams, orientation, and toroidal Heegaard interpretation"
---

## Definition

Let $K\subset S^3$ be a smooth oriented knot, meaning one oriented component of a finite smooth oriented link in the standard oriented three-sphere $S^3=\mathbb R^3\cup\{\infty\}$. The grid orientation below fixes the sign convention for its Alexander grading.

For an integer $n\ge2$, put $T_n=\mathbb R^2/(n\mathbb Z)^2$, with horizontal circles $\alpha_i=\{y=i\}$ and vertical circles $\beta_j=\{x=j\}$ for $i,j\in\mathbb Z/n\mathbb Z$. A **toroidal grid diagram of grid number $n$** is a pair of disjoint sets $\mathbb O,\mathbb X$ of points in the open cells of this grid such that every row and every column contains exactly one point of each set. At each crossing of the projected link, the vertical segment is over and the horizontal segment is under. Orient each horizontal segment from its $O$-marking to its $X$-marking and each vertical segment from its $X$-marking to its $O$-marking. The markings and these segments determine an oriented link. Following each component from an $O$ along its row to an $X$ and then along that column to the next $O$ defines a permutation of the $n$ $O$-markings; its cycles are the link components. The grid represents a knot precisely when this permutation is one $n$-cycle.

A **grid state** is a subset $\mathbf x\subset\bigcup_{i,j}(\alpha_i\cap\beta_j)$ containing exactly one intersection on each horizontal and each vertical circle. After numbering the circles, grid states correspond bijectively to permutations of $\{1,\ldots,n\}$, so there are $n!$ states. For states $\mathbf x,\mathbf y$, a **rectangle from $\mathbf x$ to $\mathbf y$** is an embedded torus rectangle whose sides lie in grid circles, whose northeast and southwest corners lie in $\mathbf x$, whose northwest and southeast corners lie in $\mathbf y$, and whose remaining state points agree. Rectangles are subsets of the torus, so their lifts may cross a chosen fundamental-domain edge. Such a rectangle is **empty** when its interior contains no point of $\mathbf x$; write $\operatorname{Rect}^{\circ}(\mathbf x,\mathbf y)$ for the empty rectangles from $\mathbf x$ to $\mathbf y$.

To define the gradings, fix the fundamental square $[0,n)\times[0,n)$. For finite signed point sets $P,Q$ in this square, set $I(P,Q)=\#\{(p,q):p_1<q_1,\ p_2<q_2\}$ and $J(P,Q)=(I(P,Q)+I(Q,P))/2$, extended bilinearly to signed point sets. Regard $\mathbf x$, $\mathbb O$, and $\mathbb X$ as signed point sets and define

$$M_{\mathbb O}(\mathbf x)=J(\mathbf x-\mathbb O,\mathbf x-\mathbb O)+1,\qquad M_{\mathbb X}(\mathbf x)=J(\mathbf x-\mathbb X,\mathbf x-\mathbb X)+1.$$

For a knot grid, define the rational Alexander value

$$A_G(\mathbf x)=\frac{M_{\mathbb O}(\mathbf x)-M_{\mathbb X}(\mathbf x)}{2}-\frac{n-1}{2}.$$

The lemma establishing integrality and the rectangle-change formula is a well-definedness supplier for this grading. For any rectangle $r$, let $O_i(r)$ and $X_i(r)$ be $1$ if the interior of $r$ contains the corresponding marking and $0$ otherwise; let $n_{\mathbb O}(r)=\sum_iO_i(r)$ and $n_{\mathbb X}(r)=\sum_iX_i(r)$.

For illustration, this $3\times3$ marking pattern has one marking of each type in every row and column; its wraparound arrows are interpreted on the torus.

```tikz
\begin{tikzpicture}[scale=0.8]
  \draw[step=1,gray] (0,0) grid (3,3);
  \node at (0.5,0.5) {$O$}; \node at (1.5,0.5) {$X$};
  \node at (1.5,1.5) {$O$}; \node at (2.5,1.5) {$X$};
  \node at (2.5,2.5) {$O$}; \node at (0.5,2.5) {$X$};
  \node[left] at (0,0.5) {$1$}; \node[left] at (0,1.5) {$2$}; \node[left] at (0,2.5) {$3$};
\end{tikzpicture}
```

## Definition references

[[def-oriented-link-in-s-three-and-ambient-isotopy|Oriented links, knots, and ambient isotopy in the standard three-sphere]]

[[lem-grid-alexander-grading-integral|Integrality and rectangle-change formula for the grid Alexander grading]]

[Ozsvath, Stipsicz, and Szabo, *Grid Homology for Knots and Links*, §§3.1–3.2 and 4.1–4.3](https://web.math.princeton.edu/~petero/GridHomologyBook.pdf)

[Manolescu, Ozsvath, and Sarkar, “A combinatorial description of knot Floer homology,” §§1 and 3](https://arxiv.org/pdf/math/0607691)

[Manolescu, *An Introduction to Knot Floer Homology*, §4.1](https://web.stanford.edu/~cm5/hfk.pdf)
