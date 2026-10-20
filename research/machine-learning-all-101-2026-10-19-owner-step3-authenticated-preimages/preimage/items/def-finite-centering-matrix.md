---
id: def-finite-centering-matrix
kind: definition
title: "Finite centering matrices and centered data"
status: draft
dependency_level: 0
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

For an integer $n\ge1$, let $\mathbf1_n\in\mathbb R^n$ be the vector whose entries are all $1$, and let $I_n$ be the $n\times n$ identity matrix. The **centering matrix** is

$$H_n:=I_n-\frac1n\mathbf1_n\mathbf1_n^T.$$

For $v\in\mathbb R^n$, write $\bar v:=n^{-1}\mathbf1_n^Tv$; then $H_nv=v-\bar v\mathbf1_n$. For a finite data matrix $X\in\mathbb R^{n\times p}$ with $p\ge1$, its **centered data matrix** is $X_c:=H_nX$; each column of $X_c$ has sum zero.

## Definition references

[Hastie, Tibshirani, and Friedman, ESL II, §14.5.1, printed pp. 534–541](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Cameron, Linear and Nonlinear Dimensionality Reduction, §2.2, PDF p. 4](https://www.math.umd.edu/~mariakc/NumMetDSML/LectureNotes/4-DimReduction.pdf)
