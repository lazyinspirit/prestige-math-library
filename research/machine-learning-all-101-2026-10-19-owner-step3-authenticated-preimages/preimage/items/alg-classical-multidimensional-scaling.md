---
id: alg-classical-multidimensional-scaling
kind: algorithm
title: "Classical multidimensional scaling from a finite dissimilarity matrix"
status: draft
dependency_level: 1
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-centering-matrix]
justified_by: [thm-classical-mds-recovers-euclidean-distances]
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

Let $n\ge1$ and let $D\in\mathbb R^{n\times n}$ be symmetric with nonnegative entries and zero diagonal, and write $D^{\circ2}$ for the matrix with entries $(D^{\circ2})_{ij}=D_{ij}^2$. Define $H_n=I_n-n^{-1}\mathbf1_n\mathbf1_n^T$ and the centered matrix

$$B:=-\frac12H_nD^{\circ2}H_n.$$

For a requested dimension $q\ge1$, classical multidimensional scaling diagonalizes the real symmetric matrix $B$, retains up to the $q$ largest strictly positive eigenvalues $\lambda_j$ with orthonormal eigenvectors $u_j$, and returns coordinates whose columns are $u_j\sqrt{\lambda_j}$. If fewer than $q$ positive eigenvalues exist, it returns only those positive-eigenvalue coordinates. For non-Euclidean dissimilarities this is a spectral procedure; it does not assert exact recovery of all entries of $D$.

## Definition references

[[def-finite-centering-matrix|Finite centering matrix]]

[Hastie, Tibshirani, and Friedman, ESL II, §14.8, printed pp. 570–572, and §18.5.2, printed pp. 670–672](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Cameron, Linear and Nonlinear Dimensionality Reduction, §3, PDF pp. 4–6](https://www.math.umd.edu/~mariakc/NumMetDSML/LectureNotes/4-DimReduction.pdf)

