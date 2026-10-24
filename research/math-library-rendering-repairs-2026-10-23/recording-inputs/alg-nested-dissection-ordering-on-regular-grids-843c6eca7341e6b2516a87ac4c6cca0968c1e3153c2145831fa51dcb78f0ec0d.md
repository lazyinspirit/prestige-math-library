---
id: alg-nested-dissection-ordering-on-regular-grids
kind: algorithm
title: Recursive coordinate-separator ordering for two- and three-dimensional grids
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-symmetric-structural-elimination-graph-and-ordering
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Jennifer Scott and Miroslav Tůma, Algorithms for Sparse Linear Systems, Chapter 8, §8.4"
      url: "https://library.oapen.org/bitstream/20.500.12657/62987/1/978-3-031-25820-6.pdf"
    - title: "David Bindel, CS 5220, Lecture 16: Sparse Direct Solvers, slides 7–17"
      url: "https://www.cs.cornell.edu/~bindel/class/cs5220-s10/slides/lec16.pdf"
---

## Definition

Input an integer $k\ge1$ and dimension $d\in\{2,3\}$. The coordinate vertices are $\{0,\ldots,k-1\}^d$. Identify them with the zero-based matrix indices $0,\ldots,k^d-1$ by the lexicographic bijection $q(i_1,\ldots,i_d)=\sum_{a=1}^d i_a k^{d-a}$. The grid graph has an edge between two coordinate vertices exactly when they differ by $1$ in one coordinate and agree in all others. Use the graph and ordering conventions of [[def-symmetric-structural-elimination-graph-and-ordering]] on these indices. Thus $d=2$ gives the five-point graph and $d=3$ the seven-point graph.

Order a rectangular coordinate subbox recursively as follows. For each coordinate whose side length is at least $2$, choose its lower median coordinate, namely the coordinate with $\lfloor(m-1)/2\rfloor$ positions below it in a side of length $m$. Let $S$ be the union of the coordinate hyperplanes at those selected medians. Delete $S$, obtaining at most $2^d$ nonempty rectangular child boxes. Recursively order the child boxes in lexicographic order of their lower corners, then append the vertices of $S$ in lexicographic order. If no coordinate has side length at least $2$, append the remaining vertex as a terminal separator. Apply this rule first to the whole grid. The resulting order is the **coordinate nested-dissection ordering**.

The recursion uses only the graph geometry. It makes no fill or complexity claim for arbitrary graphs.


## Remarks

For $k=6$ and $d=2$, both selected lower medians are $2$, since $\lfloor(6-1)/2\rfloor=2$. The orange vertices form $S=\{(i_1,i_2):i_1=2\text{ or }i_2=2\}$. Deleting them leaves the four child boxes shown below. Their lower corners, in the required lexicographic order, are $(0,0)$, $(0,3)$, $(3,0)$ and $(3,3)$, respectively.

```tikz
\begin{tikzpicture}[scale=0.85]
\foreach \x in {0,...,5} {
  \foreach \y in {0,...,4} {
    \draw[gray] (\x,\y) -- (\x,\y+1);
    \draw[gray] (\y,\x) -- (\y+1,\x);
  }
}
\foreach \x in {0,...,5} {
  \foreach \y in {0,...,5} {
    \fill[cyan] (\x,\y) circle (2.3pt);
  }
}
\foreach \t in {0,...,5} {
  \fill[orange] (2,\t) circle (3.1pt);
  \fill[orange] (\t,2) circle (3.1pt);
}
\node[left] at (-0.25,0.5) {$B_1$};
\node[left] at (-0.25,4) {$B_2$};
\node[right] at (5.25,0.5) {$B_3$};
\node[right] at (5.25,4) {$B_4$};
\node[orange,above] at (2,5.3) {$S$};
\draw[->] (0,-0.6) -- (5.6,-0.6) node[right] {$i_1$};
\draw[->] (-1,0) -- (-1,5.6) node[above] {$i_2$};
\node[below] at (0,-0.6) {$0$};
\node[below] at (2,-0.6) {$2$};
\node[below] at (5,-0.6) {$5$};
\node at (2.5,-1.6) {$B_1\ ;\ B_2\ ;\ B_3\ ;\ B_4\ ;\ S$};
\end{tikzpicture}
```

The bottom row denotes concatenation of the recursively computed orders on $B_1,B_2,B_3,B_4$, followed by the lexicographic order on $S$; it does not specify the internal child orders. The gray segments are exactly the original grid edges. The picture illustrates only the separator recursion, not fill edges or a complexity bound; the definition of the algorithm is independent of it.
