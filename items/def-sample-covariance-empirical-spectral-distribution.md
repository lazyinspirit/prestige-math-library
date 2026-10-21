---
id: def-sample-covariance-empirical-spectral-distribution
kind: definition
title: "Sample covariance matrices and their empirical spectral distributions"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-dirac-measure
  - def-probability-measure
  - def-weak-convergence-of-borel-probability-measures
justified_by:
  - lem-sample-covariance-empirical-law-is-a-probability-measure
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Bai and Silverstein, Spectral Analysis of Large Dimensional Random Matrices, 2nd ed., Chapter 3"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf"
    - title: "Junyi Liao, Random Matrix Theory, Chapter 2"
      url: "https://jurrivhleon.github.io/notes/rmt.pdf"
verification:
  precheck: n/a
---

## Definition

For positive integers $n$ and $p$, let $X\in\mathbb R^{n\times p}$ and define its (uncentered, unit-variance-normalized) sample covariance matrix by
$$S(X):=\frac1nX^{\mathsf T}X\in\mathbb R^{p\times p}.$$
It is real symmetric and non-negative. If its eigenvalues, counted with multiplicity, are $\lambda_1(S(X)),\ldots,\lambda_p(S(X))$, its empirical spectral distribution (ESD), normalized by the matrix dimension $p$, is
$$\mu_{S(X)}:=\frac1p\sum_{j=1}^p\delta_{\lambda_j(S(X))}.$$
The largest eigenvalue is $\lambda_{\max}(S(X)):=\max_j\lambda_j(S(X))$. When $S(X)$ has at least one positive eigenvalue, its smallest positive eigenvalue is $\lambda_{\min}^{+}(S(X)):=\min\{\lambda_j(S(X)):\lambda_j(S(X))>0\}$. For a sequence $(X_n)_{n\ge1}$ with $X_n\in\mathbb R^{n\times p_n}$ and positive integer $p_n$ for every $n\ge1$, write $S_n=S(X_n)$ and $\mu_n=\mu_{S_n}$.

## Definition references

Bai and Silverstein, Chapter 3, §§3.1–3.3, printed pp. 39–58 ([complete book PDF](https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf)).

Junyi Liao, Chapter 2, §2.1, printed pp. 29–38 ([complete lecture notes](https://jurrivhleon.github.io/notes/rmt.pdf)).
