---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-star-orderings-produce-different-sparse-fill.json
  precheck: pass
id: ex-star-orderings-produce-different-sparse-fill
kind: example
title: A star graph has no fill in leaf-first order and a leaf clique in center-first order
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-symmetric-structural-elimination-graph-and-ordering
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Jennifer Scott and Miroslav Tůma, Algorithms for Sparse Linear Systems, Chapter 4, §§4.1–4.3"
      url: "https://library.oapen.org/bitstream/20.500.12657/62987/1/978-3-031-25820-6.pdf"
    - title: "David Bindel, CS 5220, Lecture 16: Sparse Direct Solvers, slides 8–12"
      url: "https://www.cs.cornell.edu/~bindel/class/cs5220-s10/slides/lec16.pdf"
---

## Example

For an integer $m\ge3$, let $G$ be the star with center $0$ and leaves $1,\ldots,m$. Let $A=I+t\,\operatorname{Adj}(G)$, where $t=1/(2\sqrt m)$ and $\operatorname{Adj}(G)$ is the adjacency matrix. In leaf-first order, elimination adds no fill. In center-first order, symbolic elimination adds every edge between leaves, and the actual Cholesky Schur complement has all those entries nonzero.

## Facts & Assumptions


**Given:** An integer $m\ge3$, the star graph $G$, and the matrix $A$ specified above.

[F1] [[def-symmetric-structural-elimination-graph-and-ordering]]: At each step the graph deletes the pivot and adds every edge between distinct later neighbors.

## Verification


1.1 Write a vector as $x=(x_0,y_1,\ldots,y_m)$. The quadratic form is $x^TAx=x_0^2+\sum_i y_i^2+2t x_0\sum_i y_i$. Since $m\sum_i y_i^2-(\sum_i y_i)^2=\sum_{i<j}(y_i-y_j)^2\ge0$, we have $|\sum_i y_i|\le\sqrt m\,\|y\|_2$. Therefore
$$2t|x_0|\left|\sum_i y_i\right|\le 2t\sqrt m\,|x_0|\|y\|_2\le t\sqrt m(x_0^2+\|y\|_2^2)=\tfrac12\|x\|_2^2.$$
It follows that $x^TAx\ge\tfrac12\|x\|_2^2>0$ for $x\ne0$, so $A$ is positive definite. [given, algebra]

1.2 In leaf-first order, each leaf has exactly one later neighbor, the center. By [F1] no pair of distinct remaining neighbors exists, so eliminating that leaf adds no edge. This holds for every leaf; eliminating the last center also adds no edge. [given, F1, algebra]

1.3 In center-first order, the center's later-neighbor set is all $m$ leaves. By [F1], the graph update inserts every pair of distinct leaves, so it has $\binom m2$ leaf-to-leaf fill edges not in the original star. [given, F1, algebra]

2.1 The pivot at the center is $1$. Its Schur complement on the leaves is $I_m-t^2\mathbf1\mathbf1^T$, whose off-diagonal entries are $-t^2\ne0$. Thus the symbolic fill edges from step 1.3 are also numerical nonzeros for this matrix, while step 1.2 gives no fill in the other order. [step 1.2, step 1.3, given, algebra]

3.1 Steps 1.2 and 2.1 exhibit respectively $0$ and $\binom m2$ fill edges for two orderings of the same positive-definite sparse matrix. [step 1.2, step 2.1] ∎


## Remarks

For $m=3$, the two first elimination steps are shown below. Solid edges belong to the original star; dashed edges are newly added symbolic fill. The upper branch starts the order $(1,2,3,0)$: after deleting leaf $1$, the remaining graph is still a star, and subsequent leaf eliminations add no fill. The lower branch starts $(0,1,2,3)$: deleting $0$ leaves the complete graph on the three leaves. All off-diagonal entries of its Schur complement are $-t^2=-1/12$. The picture illustrates steps 1.2, 1.3 and 2.1; the verification, including positive definiteness, is independent of it.

```tikz
\begin{tikzpicture}[every node/.style={font=\small},
  vertex/.style={circle,draw,minimum size=6mm,inner sep=1pt},
  every path/.style={thick}]
\node at (0,1.4) {Original star, $m=3$};
\node[vertex] (a0) at (0,-.5) {$0$};
\node[vertex] (a1) at (-1,.4) {$1$};
\node[vertex] (a2) at (1,.4) {$2$};
\node[vertex] (a3) at (0,-1.6) {$3$};
\draw (a0)--(a1) (a0)--(a2) (a0)--(a3);

\node at (5,3.5) {Leaf-first: no fill};
\node[vertex] (b0) at (5,2) {$0$};
\node[vertex] (b2) at (6,2.9) {$2$};
\node[vertex] (b3) at (5,.9) {$3$};
\draw (b0)--(b2) (b0)--(b3);
\draw[->] (1.6,.4)--(3.6,1.8);
\node[above] at (2.4,1.5) {delete $1$};

\node at (5,-1.2) {Center-first: three fill edges};
\node[vertex] (c1) at (4,-2) {$1$};
\node[vertex] (c2) at (6,-2) {$2$};
\node[vertex] (c3) at (5,-3.6) {$3$};
\draw[dashed] (c1)--(c2) (c2)--(c3) (c3)--(c1);
\draw[->] (1.6,-1.1)--(3.2,-2.1);
\node[below] at (2.3,-1.9) {delete $0$};
\end{tikzpicture}
```
