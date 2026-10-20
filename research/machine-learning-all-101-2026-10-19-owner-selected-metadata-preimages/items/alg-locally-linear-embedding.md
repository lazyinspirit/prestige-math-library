---
id: alg-locally-linear-embedding
kind: algorithm
title: "Finite locally linear embedding with minimum-norm weights and a simple constant kernel"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [alg-deterministic-neighbor-selection, def-lle-local-reconstruction-weights, thm-minimum-norm-lle-weights-exist-uniquely, prop-standard-coordinate-inner-products, def-trace-of-a-square-matrix]
justified_by: [thm-lle-trace-minimizers]
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

Input: a data matrix $X\in\mathbb R^{n\times p}$ with $n\ge2$, a neighbor count $1\le k<n$, and an output dimension $1\le q<n$, using $\|v\|_2=(\sum_{a=1}^p v_a^2)^{1/2}$. For every row point $x_i$, select the first $k$ other sample indices ordered by $(\|x_i-x_j\|_2,j)$ and use the minimum-Euclidean-norm affine least-squares weights on that neighborhood, with weights summing to $1$. Form $W\in\mathbb R^{n\times n}$ by placing those weights in the selected columns of row $i$ and zeros elsewhere; every row of $W$ then sums to $1$. If $\ker(I_n-W)\ne\operatorname{span}\{\mathbf1_n\}$, return the status “constant kernel not isolated” and do not specify an embedding. Otherwise put $M=(I_n-W)^T(I_n-W)$ and return any $Y\in\mathbb R^{n\times q}$ minimizing

$$\operatorname{tr}(Y^TMY)\quad\text{subject to}\quad Y^T\mathbf1_n=0,\qquad Y^TY=I_q,$$

where $\operatorname{tr}$ is the sum of diagonal entries. Equivalently, take orthonormal eigenvectors for the $q$ smallest positive eigenvalues of $M$. Ties allow multiple outputs. This finite-matrix procedure makes no guarantee of manifold recovery or consistency.

## Definition references

[[alg-deterministic-neighbor-selection|Deterministic finite neighbor selection]]

[[def-lle-local-reconstruction-weights|Minimum-norm affine reconstruction weights]]

[[thm-minimum-norm-lle-weights-exist-uniquely|Existence and uniqueness of the minimum-norm weights]]

[[thm-lle-trace-minimizers|Trace minimizers are the bottom positive eigenvectors under the kernel condition]]

[[def-trace-of-a-square-matrix|Trace as the sum of diagonal entries]]

[Hastie, Tibshirani, and Friedman, ESL II, §14.9, printed pp. 573–575](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Cameron, Linear and Nonlinear Dimensionality Reduction, §7, PDF pp. 13–16](https://www.math.umd.edu/~mariakc/NumMetDSML/LectureNotes/4-DimReduction.pdf)

