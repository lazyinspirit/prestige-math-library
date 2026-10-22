---
id: alg-ip-svd-truncated-estimator
kind: algorithm
title: Singular-value cutoff estimator
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ip-gaussian-sequence-inverse-model
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Litao Ding and Peter Mathé, Minimax rates for statistical inverse problems under general source conditions, equation (11), PDF p. 2"
      url: https://arxiv.org/pdf/1707.01706
    - title: "Iain M. Johnstone, Gaussian estimation: Sequence and wavelet models, §3.2, equation (3.12), printed p. 60"
      url: https://mathweb.ucsd.edu/~jbradic/math281a/Johnstone.pdf
---

## Definition

Input a normalized sequence observation $z=(z_j)_{j\in\mathbb N}\in\mathbb R^{\mathbb N}$ from the Gaussian sequence inverse model and a cutoff $D\in\mathbb N_0$, where $\mathbb N_0=\{0,1,2,\ldots\}$. Output the finite-support estimate $\widehat\theta_D(z)\in\ell^2(\mathbb N,\mathbb R)$ defined by
$$\widehat\theta_{D,j}(z)=\begin{cases}z_j,&1\le j\le D,\\0,&j>D.\end{cases}$$
For $D=0$ the output is the zero sequence.

## Definition references

[[def-ip-gaussian-sequence-inverse-model|Gaussian sequence inverse model]]

[Litao Ding and Peter Mathé, *Minimax rates for statistical inverse problems under general source conditions*, equation (11), PDF p. 2](https://arxiv.org/pdf/1707.01706)

[Iain M. Johnstone, *Gaussian estimation: Sequence and wavelet models*, §3.2, equation (3.12), printed p. 60](https://mathweb.ucsd.edu/~jbradic/math281a/Johnstone.pdf)
