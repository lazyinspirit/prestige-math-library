---
id: def-graphical-lasso-objective
kind: definition
title: "Gaussian sparse-precision objective with the all-entry penalty"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: []
proof_strategy: definition
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Elements of Statistical Learning, second edition"
      url: "https://course.ccs.neu.edu/ds4420sp20/readings/ESLII.pdf"
      locator: "§17.3.1 equation (17.11) and §17.3.2 equation (17.21), printed pp. 632 and 635"
    - title: "Friedman, Hastie and Tibshirani, Sparse inverse covariance estimation with the lasso"
      url: "https://hastie.su.domains/Papers/graph.pdf"
      locator: "§2, objective (1), PDF p. 2"
---

## Definition

For $N,p\ge1$ and data $x_1,\ldots,x_N\in\mathbb R^p$, put $\bar x=N^{-1}\sum_{r=1}^N x_r$ and $S=N^{-1}\sum_{r=1}^N(x_r-\bar x)(x_r-\bar x)^T$. For any symmetric positive-semidefinite $S$ and any $\Theta\in\mathbb S_{++}^p$, set $\ell_S(\Theta)=\log\det\Theta-\operatorname{tr}(S\Theta)$, where $\mathbb S_{++}^p$ is the cone of symmetric positive-definite $p\times p$ matrices. Define $\|\Theta\|_1=\sum_{i=1}^p\sum_{j=1}^p|\Theta_{ij}|$, including diagonal entries, and for $\lambda>0$ define $F_{S,\lambda}(\Theta)=\ell_S(\Theta)-\lambda\|\Theta\|_1$. The off-diagonal-only convention $F^{\mathrm{off}}_{S,\lambda}(\Theta)=\ell_S(\Theta)-\lambda\sum_{i\ne j}|\Theta_{ij}|$ is a separate objective.

## Definition references

[The Elements of Statistical Learning, §17.3.1–§17.3.2](https://course.ccs.neu.edu/ds4420sp20/readings/ESLII.pdf)

[Friedman, Hastie and Tibshirani, §2](https://hastie.su.domains/Papers/graph.pdf)
