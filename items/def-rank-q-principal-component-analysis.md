---
id: def-rank-q-principal-component-analysis
kind: definition
title: "Rank-q principal component analysis by Frobenius reconstruction error"
status: draft
dependency_level: 1
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-centering-matrix, def-frobenius-matrix-norm]
justified_by: [thm-pca-frobenius-optimality]
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

For a finite data matrix $X\in\mathbb R^{n\times p}$ with $n,p\ge1$, set $H_n=I_n-n^{-1}\mathbf1_n\mathbf1_n^T$ and $X_c=H_nX$. For an integer $q$ with $1\le q\le p$, a rank-$q$ PCA frame is a matrix $Q\in\mathbb R^{p\times q}$ with $Q^TQ=I_q$. Its reconstruction is $X_cQQ^T$, and its squared Frobenius reconstruction error is

$$\|X_c-X_cQQ^T\|_F^2=\sum_{i<n}\sum_{j<p}(X_c-X_cQQ^T)_{ij}^2.$$

A rank-$q$ PCA solution is any frame minimizing this error over all such $Q$; its score matrix is $X_cQ$. A minimizing frame need not be unique when the relevant eigenvalues are tied.

## Definition references

[[def-finite-centering-matrix|Finite centering matrix and centered data]]

[[def-frobenius-matrix-norm|Frobenius matrix norm]]

[Hastie, Tibshirani, and Friedman, ESL II, §14.5.1, printed pp. 534–541](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Cameron, Linear and Nonlinear Dimensionality Reduction, §§2.1–2.2, PDF pp. 2–4](https://www.math.umd.edu/~mariakc/NumMetDSML/LectureNotes/4-DimReduction.pdf)

