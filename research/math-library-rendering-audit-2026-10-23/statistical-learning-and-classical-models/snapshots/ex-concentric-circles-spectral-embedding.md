---
id: ex-concentric-circles-spectral-embedding
kind: example
title: "A disconnected graph on concentric circles separates the rings"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - def-finite-weighted-graph-laplacian
  - lem-weighted-graph-laplacian-quadratic-form-and-kernel
  - alg-weighted-spectral-clustering
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Ulrike von Luxburg, A Tutorial on Spectral Clustering, Statistics and Computing 17(4), 2007"
      url: "https://cs.brown.edu/courses/csci1820/spring-2022/resources/vonLuxburg_2007.pdf"
    - title: "Jean Gallier, Notes on Elementary Spectral Graph Theory: Applications to Graph Clustering Using Normalized Cuts, 2013"
      url: "https://arxiv.org/pdf/1311.2492"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Example

Let $V=\{1,\ldots,8\}$ and, for $j\in\{0,1,2,3\}$, set $x_{j+1}=(\cos(\pi j/2),\sin(\pi j/2))$ and $x_{j+5}=3(\cos(\pi j/2),\sin(\pi j/2))$. Build a graph with unit-weight edges $\{1,2\},\{2,3\},\{3,4\},\{4,1\}$ and $\{5,6\},\{6,7\},\{7,8\},\{8,5\}$, and no other edges. Deterministic unnormalized spectral clustering with $k=2$ and no row normalization returns the two concentric rings as its clusters. This finite graph example makes no statement about manifold recovery for other graph constructions.

## Example references

[Ulrike von Luxburg, A Tutorial on Spectral Clustering, Statistics and Computing 17(4), 2007](https://cs.brown.edu/courses/csci1820/spring-2022/resources/vonLuxburg_2007.pdf)

[Jean Gallier, Notes on Elementary Spectral Graph Theory: Applications to Graph Clustering Using Normalized Cuts, 2013](https://arxiv.org/pdf/1311.2492)

## Graph diagram

Nodes $1$–$4$ lie on the inner radius-one circle and nodes $5$–$8$ on the outer radius-three circle. Each polygon edge has unit weight; there are no edges between the circles. The drawing uses the exact vertex order and support specified in the Example.

```tikz
\begin{tikzpicture}
\node[draw,circle] (v1) at (0,1) {$1$};
\node[draw,circle] (v2) at (1,0) {$2$};
\node[draw,circle] (v3) at (0,-1) {$3$};
\node[draw,circle] (v4) at (-1,0) {$4$};
\node[draw,circle] (v5) at (0,3) {$5$};
\node[draw,circle] (v6) at (3,0) {$6$};
\node[draw,circle] (v7) at (0,-3) {$7$};
\node[draw,circle] (v8) at (-3,0) {$8$};
\draw (v1)--(v2)--(v3)--(v4)--cycle;
\draw (v5)--(v6)--(v7)--(v8)--cycle;
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The eight vertices are ordered by radius as in the Example, and the graph consists of the two unit-weight four-cycles with no cross-edges.

[F1] [[def-finite-weighted-graph-laplacian]]: the support graph has edge $\{i,j\}$ exactly when $w_{ij}>0$.

[F2] [[lem-weighted-graph-laplacian-quadratic-form-and-kernel]]: $L$ is positive semidefinite and its kernel consists of vectors constant on each support component.

[F3] [[alg-weighted-spectral-clustering]]: unnormalized mode chooses the first $k$ eigenvectors increasingly; the zero-mode basis starts at $n^{-1/2}\mathbf1$ and then uses projected coordinate vectors in vertex order, and Lloyd centers use the smallest-index row followed by farthest-first selection.

## Verification

1.1 The support components are $C_1=\{1,2,3,4\}$ and $C_2=\{5,6,7,8\}$. By [F2], $L\succeq0$ and $E_0=\ker L=\operatorname{span}(\mathbf1_{C_1},\mathbf1_{C_2})$ has dimension $2$, so the two smallest eigenvalues are both $0$. [given, F1, F2, algebra]

2.1 The prescribed first vector is $q_0=\mathbf1/\sqrt8$. The projection of $e_1$ onto $E_0$ is $\frac14\mathbf1_{C_1}$. Its inner product with $q_0$ is $1/\sqrt8$, so subtracting that projection gives $\frac18(\mathbf1_{C_1}-\mathbf1_{C_2})$, with norm $1/\sqrt8$. Thus the next vector is $q_1=(\mathbf1_{C_1}-\mathbf1_{C_2})/\sqrt8$. The embedding rows are $(1/\sqrt8,1/\sqrt8)$ on $C_1$ and $(1/\sqrt8,-1/\sqrt8)$ on $C_2$. [given, F2, F3, step 1.1, construct, algebra]

3.1 The first center is the row for vertex $1$. Every outer-ring row is farther from it than any other inner-ring row, so farthest-first chooses vertex $5$ by the smallest-index tie rule. Each ring's rows equal its center, while the two ring row values are distinct; nearest-center assignments are therefore exactly $C_1,C_2$. Their means equal the selected centers, so the first Lloyd update is fixed and the algorithm returns the two rings. [F3, step 2.1, algebra] ∎
