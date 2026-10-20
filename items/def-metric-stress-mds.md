---
id: def-metric-stress-mds
kind: definition
title: "Metric distance-stress multidimensional scaling"
status: draft
dependency_level: 2
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [alg-classical-multidimensional-scaling]
justified_by: []
aliases: []
sources:
  references:
    - title: "The Elements of Statistical Learning, second edition, corrected 12th printing"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Definition

For a symmetric nonnegative zero-diagonal dissimilarity matrix $D\in\mathbb R^{n\times n}$, $n\ge2$, and a target dimension $q\ge1$, use the Euclidean norm $\|v\|_2=(\sum_{a=1}^q v_a^2)^{1/2}$. The **metric stress** of centered coordinates $Y=(y_1^T,\ldots,y_n^T)^T\in\mathbb R^{n\times q}$, with $\mathbf1_n^TY=0$, is

$$S_D(Y):=\sum_{1\le i<j\le n}\bigl(D_{ij}-\|y_i-y_j\|_2\bigr)^2.$$

Metric stress MDS is the separate optimization problem of minimizing $S_D(Y)$ over such centered $Y$. It is a distance-based, generally nonconvex objective and does not define the positive-eigenvalue solution used by classical multidimensional scaling; no solver convergence or global-optimizer guarantee is part of this definition.

## Definition references

[[alg-classical-multidimensional-scaling|Classical multidimensional scaling]]

[Hastie, Tibshirani, and Friedman, ESL II, §14.8, printed pp. 570–571](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

