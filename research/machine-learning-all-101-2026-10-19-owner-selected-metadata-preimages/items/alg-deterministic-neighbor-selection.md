---
id: alg-deterministic-neighbor-selection
kind: algorithm
title: "Deterministic finite nearest-neighbor lists and graph symmetrizations"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
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

Let $x_1,\ldots,x_n\in\mathbb R^p$ with $n\ge2$, using the Euclidean norm $\|v\|_2=(\sum_{a=1}^p v_a^2)^{1/2}$. For $1\le k<n$, the deterministic $k$-nearest-neighbor list $N_k(i)$ consists of the first $k$ indices $j\ne i$ when the other indices are ordered by increasing pair $(\|x_i-x_j\|_2,j)$ lexicographically; thus equal distances are broken by increasing sample index. The **union symmetrization** is the undirected graph with edge $\{i,j\}$ when $j\in N_k(i)$ or $i\in N_k(j)$; the **mutual symmetrization** has edge $\{i,j\}$ exactly when both inclusions hold. Each included edge may be assigned weight $\|x_i-x_j\|_2$. For a radius $r>0$, the radius graph has edge $\{i,j\}$ exactly when $\|x_i-x_j\|_2\le r$. An undirected graph is connected when every two vertices are joined by a finite edge path.

## Definition references

[Hastie, Tibshirani, and Friedman, ESL II, §14.9, printed pp. 572–574](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Cameron, Linear and Nonlinear Dimensionality Reduction, §6 and §7, PDF pp. 9–15](https://www.math.umd.edu/~mariakc/NumMetDSML/LectureNotes/4-DimReduction.pdf)
