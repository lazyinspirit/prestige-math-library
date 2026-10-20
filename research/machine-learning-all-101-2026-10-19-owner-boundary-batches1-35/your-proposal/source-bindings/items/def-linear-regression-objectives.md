---
id: def-linear-regression-objectives
kind: definition
title: Fixed-design least-squares, ridge, lasso, group, and fused objectives
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: [def-lasso-estimator]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Hastie, Tibshirani, and Friedman, The Elements of Statistical Learning, 2nd ed., §§3.2, 3.4.1, 3.8.4, and §18.4.2"
      url: "https://hastie.su.domains/ElemStatLearn/download.html"
    - title: "Fixed-design Lasso objective convention"
      url: "https://arxiv.org/pdf/2310.19244v1"
---

## Definition

Let $n,p\ge1$, let $X\in\mathbb R^{n\times p}$ be a fixed design matrix, let $y\in\mathbb R^n$, and let $\beta\in\mathbb R^p$. The empirical squared loss is

$$\ell_n(\beta)=\frac{1}{2n}\|y-X\beta\|_2^2.$$

Ordinary least squares minimizes $\ell_n(\beta)$ over $\mathbb R^p$. For $\lambda>0$, the ridge (Tikhonov) objective is

$$J^{\mathrm{ridge}}_\lambda(\beta)=\|y-X\beta\|_2^2+\lambda\|\beta\|_2^2.$$

For $\lambda>0$, the lasso objective in the empirical-loss convention is

$$J^{\mathrm{lasso}}_\lambda(\beta)=\ell_n(\beta)+\lambda\|\beta\|_1,\qquad \|\beta\|_1=\sum_{j=1}^p|\beta_j|.$$

This lasso has the same minimizers as $n^{-1}\|y-X\beta\|_2^2+2\lambda\|\beta\|_1$, the fixed-design convention with penalty parameter $\tau=\lambda$.

For a partition $G_1,\ldots,G_m$ of $\{1,\ldots,p\}$, fixed weights $w_g>0$, and $\lambda\ge0$, the group-lasso objective is

$$J^{\mathrm{group}}_{\lambda}(\beta)=\ell_n(\beta)+\lambda\sum_{g=1}^m w_g\|\beta_{G_g}\|_2.$$

For a fixed matrix $D\in\mathbb R^{q\times p}$ and $\lambda_1,\lambda_2\ge0$, a fused-lasso objective is

$$J^{\mathrm{fused}}_{\lambda_1,\lambda_2}(\beta)=\ell_n(\beta)+\lambda_1\|\beta\|_1+\lambda_2\|D\beta\|_1.$$

These group and fused formulas define objectives only; no existence, uniqueness, or algorithm guarantee is asserted for them here. The formulas use the displayed feature scales, so rescaling a column changes the penalty unless its coefficient and penalty weight are adjusted. If an intercept is included, write $X=[\mathbf 1\;X_0]$ and $\beta=(\beta_0,\gamma)$, define the loss by $\|y-\beta_0\mathbf1-X_0\gamma\|_2^2/(2n)$, partition only the coordinates of $\gamma$, and use a fused matrix of the form $D=[0\;D_0]$. Each penalty then acts only on $\gamma$ and the intercept coordinate $\beta_0$ is unpenalized.

## Definition references

[[def-lasso-estimator|The published fixed-design Lasso objective convention]]

[The Elements of Statistical Learning, Chapter 3 and §18.4.2](https://hastie.su.domains/ElemStatLearn/download.html)

[High-Dimensional Statistics lecture notes, Definition 2.12](https://arxiv.org/pdf/2310.19244v1)
