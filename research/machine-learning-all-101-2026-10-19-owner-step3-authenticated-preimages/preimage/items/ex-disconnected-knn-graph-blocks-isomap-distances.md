---
id: ex-disconnected-knn-graph-blocks-isomap-distances
kind: example
title: "A one-nearest-neighbor graph can disconnect finite ISOMAP"
status: draft
dependency_level: 3
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [alg-deterministic-neighbor-selection, alg-isomap]
justified_by: []
aliases: []
proof_strategy: direct
sources:
  references:
    - title: "The Elements of Statistical Learning, second edition, corrected 12th printing"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
    - title: "Maria Cameron, Linear and Nonlinear Dimensionality Reduction, lecture notes"
      url: "https://www.math.umd.edu/~mariakc/NumMetDSML/LectureNotes/4-DimReduction.pdf"
verification:
  precheck: pass
---

## Example

Let $x_1=0$, $x_2=1/10$, $x_3=10$, and $x_4=101/10$ in $\mathbb R$, use $k=1$, and symmetrize by union. The resulting undirected neighbor graph has exactly the two edges $\{1,2\}$ and $\{3,4\}$, so it is disconnected. ISOMAP therefore returns its disconnected status and does not form finite all-pairs graph distances.

The diagram shows the two union-graph components; labels are the sample indices.

```tikz
\begin{tikzpicture}[vertex/.style={draw,circle,minimum size=7mm}]
  \node[vertex] (x1) at (0,0) {$1$};
  \node[vertex] (x2) at (1.4,0) {$2$};
  \node[vertex] (x3) at (4,0) {$3$};
  \node[vertex] (x4) at (5.4,0) {$4$};
  \draw (x1)--node[above] {$1/10$}(x2);
  \draw (x3)--node[above] {$1/10$}(x4);
\end{tikzpicture}
```

## Example references

[Hastie, Tibshirani, and Friedman, ESL II, §14.9, printed pp. 572–574](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Cameron, Linear and Nonlinear Dimensionality Reduction, §6, PDF pp. 9–13](https://www.math.umd.edu/~mariakc/NumMetDSML/LectureNotes/4-DimReduction.pdf)

## Facts & Assumptions

**Given:** The four stated real points, $k=1$, union symmetrization, and the ISOMAP connected-graph condition.

[F1] The nearest-neighbor order is by $(\|x_i-x_j\|_2,j)$, and union edges are included when either endpoint selects the other ([[alg-deterministic-neighbor-selection]]).

[F2] ISOMAP returns a disconnected status and does not claim finite all-pairs graph distances when its graph is disconnected ([[alg-isomap]]).

## Verification

1.1 The nearest neighbor of $x_1$ and $x_2$ is each other at distance $1/10$; the nearest neighbor of $x_3$ and $x_4$ is each other at distance $1/10$. Every distance between the two pairs is at least $99/10$, so no cross-pair edge is selected. By [F1], the union graph has exactly the two edges $\{1,2\}$ and $\{3,4\}$. [given, F1, algebra]

2.1 The graph in step 1.1 has two connected components, so [F2] returns the disconnected status; a path between either cross-component pair does not exist, and the algorithm does not produce a finite all-pairs graph-distance matrix. [step 1.1, F2] ∎
