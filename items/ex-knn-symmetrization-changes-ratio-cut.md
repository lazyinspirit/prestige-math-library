---
id: ex-knn-symmetrization-changes-ratio-cut
kind: example
title: "KNN symmetrization changes a graph cut"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-finite-weighted-graph-laplacian
  - def-ratio-cut-and-normalized-cut
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

Take $x_1=0$, $x_2=1$, and $x_3=3$ on $\mathbb R$, and let each point choose its unique nearest neighbor ($k=1$). Define the union graph to contain a unit-weight edge when either directed nearest-neighbor choice selects it, and the mutual graph to contain a unit-weight edge only when both directions select it. For the partition $\{1,2\},\{3\}$, the RatioCut is $3/2$ on the union graph and $0$ on the mutual graph.

## Example references

[Ulrike von Luxburg, A Tutorial on Spectral Clustering, Statistics and Computing 17(4), 2007](https://cs.brown.edu/courses/csci1820/spring-2022/resources/vonLuxburg_2007.pdf)

[Jean Gallier, Notes on Elementary Spectral Graph Theory: Applications to Graph Clustering Using Normalized Cuts, 2013](https://arxiv.org/pdf/1311.2492)

## Graph diagrams

The labels are vertex indices, and each drawn edge has unit weight. The left path is the union symmetrization; the right single edge is the mutual symmetrization. The verification above computes the cuts from the stated edge sets.

```tikz
\begin{tikzpicture}
\node[draw,circle] (u1) at (0,0) {$1$};
\node[draw,circle] (u2) at (1.5,0) {$2$};
\node[draw,circle] (u3) at (3,0) {$3$};
\draw (u1)--node[above] {$1$}(u2);
\draw (u2)--node[above] {$1$}(u3);
\node at (1.5,-0.8) {Union};
\node[draw,circle] (m1) at (5,0) {$1$};
\node[draw,circle] (m2) at (6.5,0) {$2$};
\node[draw,circle] (m3) at (8,0) {$3$};
\draw (m1)--node[above] {$1$}(m2);
\node at (6.5,-0.8) {Mutual};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** Three real data points $x_1=0$, $x_2=1$, $x_3=3$, one-nearest-neighbor selection with no distance ties, and the union and mutual graph rules in the Example.

[A1] The Euclidean distance on $\mathbb R$ is $d(x,y)=|x-y|$.

[F1] [[def-finite-weighted-graph-laplacian]]: an admissible graph has symmetric nonnegative weights and zero diagonal; its support edge $\{i,j\}$ is present exactly when $w_{ij}>0$.

[F2] [[def-ratio-cut-and-normalized-cut]]: $\operatorname{cut}(A,A^c)=\sum_{i\in A,j\notin A}w_{ij}$ and $\operatorname{RatioCut}(A_1,A_2)=\operatorname{cut}(A_1,A_1^c)/|A_1|+\operatorname{cut}(A_2,A_2^c)/|A_2|$.

## Verification

1.1 The pairwise Euclidean distances are $|x_1-x_2|=1$, $|x_2-x_3|=2$, and $|x_1-x_3|=3$. Therefore the directed choices are $1\to2$, $2\to1$, and $3\to2$. [given, A1, algebra]

2.1 The union rule keeps an edge selected in either direction, so its undirected edges are $\{1,2\}$ and $\{2,3\}$. The mutual rule keeps only edges selected in both directions, so its only edge is $\{1,2\}$. Both weight matrices satisfy [F1]. [given, F1, step 1.1, algebra]

3.1 In the union graph, the only crossing edge for $A_1=\{1,2\}$ and $A_2=\{3\}$ is $\{2,3\}$, of weight $1$; hence both one-sided cuts equal $1$. In the mutual graph there is no crossing edge, so both cuts equal $0$. [F1, step 2.1, algebra]

4.1 By [F2], the union RatioCut is $1/2+1=3/2$, while the mutual RatioCut is $0/2+0/1=0$. Thus the fixed data, neighbor count, and partition have different cut values under the two symmetrizations. [F2, step 3.1, algebra] ∎

## Graph diagrams

The labels are vertex indices, and each drawn edge has unit weight. The left path is the union symmetrization; the right single edge is the mutual symmetrization. The verification above computes the cuts from the stated edge sets.

```tikz
\begin{tikzpicture}
\node[draw,circle] (u1) at (0,0) {$1$};
\node[draw,circle] (u2) at (1.5,0) {$2$};
\node[draw,circle] (u3) at (3,0) {$3$};
\draw (u1)--node[above] {$1$}(u2);
\draw (u2)--node[above] {$1$}(u3);
\node at (1.5,-0.8) {Union};
\node[draw,circle] (m1) at (5,0) {$1$};
\node[draw,circle] (m2) at (6.5,0) {$2$};
\node[draw,circle] (m3) at (8,0) {$3$};
\draw (m1)--node[above] {$1$}(m2);
\node at (6.5,-0.8) {Mutual};
\end{tikzpicture}
```

