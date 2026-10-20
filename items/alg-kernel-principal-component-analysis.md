---
id: alg-kernel-principal-component-analysis
kind: algorithm
title: "Kernel principal component analysis for a finite positive-semidefinite Gram matrix"
status: draft
dependency_level: 1
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-centering-matrix]
justified_by: [thm-centered-psd-kernel-gram-matrix-is-psd]
aliases: []
sources:
  references:
    - title: "The Elements of Statistical Learning, second edition, corrected 12th printing"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
    - title: "Maria Cameron, Linear and Nonlinear Dimensionality Reduction, lecture notes"
      url: "https://www.math.umd.edu/~mariakc/NumMetDSML/LectureNotes/4-DimReduction.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Definition

Given $n\ge1$ data points and a finite symmetric Gram matrix $K\in\mathbb R^{n\times n}$ satisfying $a^TKa\ge0$ for every $a\in\mathbb R^n$, define $H_n=I_n-n^{-1}\mathbf1_n\mathbf1_n^T$ and the centered Gram matrix $K_c=H_nKH_n$. The positive-semidefinite condition is an input hypothesis; no theorem that an arbitrary kernel formula produces such a matrix is assumed. For $1\le q\le n$, kernel PCA retains the $q$ largest eigenvalues $\lambda_1\ge\cdots\ge\lambda_n\ge0$ of $K_c$ and associated orthonormal eigenvectors $u_1,\ldots,u_q$, returning the score matrix $U_q\operatorname{diag}(\sqrt{\lambda_1},\ldots,\sqrt{\lambda_q})$. Eigenvectors inside a tied eigenspace may be chosen arbitrarily.

## Definition references

[[def-finite-centering-matrix|Finite centering matrix]]

[Hastie, Tibshirani, and Friedman, ESL II, §14.5.4, printed pp. 547–550, and §18.5.2, printed pp. 670–672](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Cameron, Linear and Nonlinear Dimensionality Reduction, §2.2, PDF pp. 3–4](https://www.math.umd.edu/~mariakc/NumMetDSML/LectureNotes/4-DimReduction.pdf)

