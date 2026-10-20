---
id: alg-isomap
kind: algorithm
title: "Finite ISOMAP with deterministic neighborhoods and connected-graph shortest paths"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [alg-deterministic-neighbor-selection, alg-classical-multidimensional-scaling]
justified_by: []
aliases: []
sources:
  references:
    - title: "The Elements of Statistical Learning, second edition, corrected 12th printing"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
    - title: "Maria Cameron, Linear and Nonlinear Dimensionality Reduction, lecture notes"
      url: "https://www.math.umd.edu/~mariakc/NumMetDSML/LectureNotes/4-DimReduction.pdf"
verification:
  precheck: n/a
---

## Definition

Input: a finite data matrix $X\in\mathbb R^{n\times p}$ with $n\ge2$, an embedding dimension $q\ge1$, and either a $k$-nearest-neighbor parameter $1\le k<n$ with an explicit union or mutual symmetrization choice, or a radius $r>0$. Use $\|v\|_2=(\sum_{a=1}^p v_a^2)^{1/2}$; for the $k$-nearest-neighbor option, each neighbor list orders candidates by increasing $(\|x_i-x_j\|_2,j)$, so equal distances are broken by sample index. Construct the selected undirected graph and give each edge $\{i,j\}$ weight $\|x_i-x_j\|_2$. If the graph is disconnected, return the status “disconnected” and do not claim finite all-pairs graph distances. If it is connected, define $d_G(i,j)$ as the minimum total edge weight over all paths from $i$ to $j$; because the graph is finite with nonnegative edge weights, a minimum occurs among its finitely many simple paths. Form the symmetric dissimilarity matrix $D_G=(d_G(i,j))$ and apply classical multidimensional scaling to $D_G$ with requested dimension $q$. This finite procedure makes no guarantee that graph distances accurately approximate manifold geodesics or that the output recovers a manifold.

## Definition references

[[alg-deterministic-neighbor-selection|Deterministic neighbor lists, radius graphs, and symmetrizations]]

[[alg-classical-multidimensional-scaling|Classical multidimensional scaling]]

[Hastie, Tibshirani, and Friedman, ESL II, §14.9, printed pp. 572–574](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Cameron, Linear and Nonlinear Dimensionality Reduction, §6, PDF pp. 9–13](https://www.math.umd.edu/~mariakc/NumMetDSML/LectureNotes/4-DimReduction.pdf)

