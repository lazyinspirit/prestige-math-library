---
page: overlapping-schwarz-and-stable-subspace-decompositions-examples
title: "Overlapping Schwarz and stable subspace decompositions — Examples"
status: draft
items: []
examples:
  - ex-one-level-overlapping-schwarz-condition-number-growth
  - cex-schwarz-naive-coarse-space-misses-conductive-mode
  - ex-schwarz-overlap-shrinking-decomposition-bound
  - ex-schwarz-two-level-1d-poisson-coarse-plus-odd-corrections
  - ex-schwarz-inexact-local-solves-spectral-equivalence-bound
---

The examples compute the exact condition number of one-level point-patch
Schwarz on a uniform 1D Poisson mesh, show a two-level coarse correction with
a uniform finite-dimensional bound, and distinguish deterioration of a
sufficient overlap estimate from a claim about actual conditioning. The graph
counterexample shows that a one-node coarse space can miss a high-conductance
channel despite a fixed overlap graph.
The inexact example computes how local spectral-equivalence constants enter
the additive bound.
The overlap-shrinking example assumes Countable Choice, matching the
structured stable-decomposition theorem it uses.

~~~tikz
\begin{tikzpicture}[x=1.15cm,y=1cm]
  \draw (0,0) circle (0.22);
  \draw (2,0) circle (0.22);
  \node at (0,0) {$u_1$};
  \node at (2,0) {$u_2$};
  \draw[thick] (0.22,0) -- node[above] {$\alpha$} (1.78,0);
  \draw (0,-0.22) -- (0,-0.65);
  \draw (-0.2,-0.65) -- (0.2,-0.65);
  \draw (2,-0.22) -- (2,-0.65);
  \draw (1.8,-0.65) -- (2.2,-0.65);
  \node[below] at (0,-0.72) {$1$};
  \node[below] at (2,-0.72) {$1$};
\end{tikzpicture}
~~~

The two grounding edges have conductance $1$ and the connecting edge has
conductance $\alpha$, giving the matrix
$I_2+\alpha\begin{pmatrix}1&-1\\-1&1\end{pmatrix}$ in
[[cex-schwarz-naive-coarse-space-misses-conductive-mode]]. The diagram records
the graph used in the exact calculation; the counterexample proof is
algebraic.
