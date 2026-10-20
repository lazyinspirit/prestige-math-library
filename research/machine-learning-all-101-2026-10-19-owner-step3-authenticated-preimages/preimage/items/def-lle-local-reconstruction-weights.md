---
id: def-lle-local-reconstruction-weights
kind: definition
title: "Minimum-norm affine reconstruction weights for a finite LLE neighborhood"
status: draft
dependency_level: 1
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [alg-deterministic-neighbor-selection]
justified_by: [thm-minimum-norm-lle-weights-exist-uniquely]
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

Let $x_1,\ldots,x_n\in\mathbb R^p$, $n\ge2$, and $1\le k<n$. For each $i$, let $N_i$ be the first $k$ indices $j\ne i$ under the increasing lexicographic order of $(\|x_i-x_j\|_2,j)$, so equal distances are broken by sample index; the norm on $\mathbb R^p$ is $\|z\|_2=(\sum_{a=1}^p z_a^2)^{1/2}$. The local affine reconstruction weights are the vector $w_i=(w_{ij})_{j\in N_i}\in\mathbb R^k$ minimizing

$$\left\|x_i-\sum_{j\in N_i}w_{ij}x_j\right\|_2^2\quad\text{subject to}\quad\sum_{j\in N_i}w_{ij}=1,$$

Among all minimizers, choose the one of smallest Euclidean norm $\|w_i\|_2=(\sum_{j\in N_i}w_{ij}^2)^{1/2}$. This minimum-norm rule fixes the weights even when the local covariance matrix is singular.

## Definition references

[[alg-deterministic-neighbor-selection|Deterministic finite neighbor lists]]

[Hastie, Tibshirani, and Friedman, ESL II, §14.9, printed pp. 573–575](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Cameron, Linear and Nonlinear Dimensionality Reduction, §7, PDF pp. 14–16](https://www.math.umd.edu/~mariakc/NumMetDSML/LectureNotes/4-DimReduction.pdf)

