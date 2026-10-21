---
id: def-ip-statistical-ellipsoid-class
kind: definition
title: Weighted ellipsoid class for sequence inversion
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ip-gaussian-sequence-inverse-model
  - def-square-summable-family-on-an-arbitrary-index-set
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Litao Ding and Peter Mathé, Minimax rates for statistical inverse problems under general source conditions, Definition 1, equation (4), PDF p. 1"
      url: https://arxiv.org/pdf/1707.01706
    - title: "Iain M. Johnstone, Gaussian estimation: Sequence and wavelet models, Chapter 3, ellipsoid definition (3.4), printed p. 58; §3.1 begins on p. 57"
      url: https://mathweb.ucsd.edu/~jbradic/math281a/Johnstone.pdf
---

## Definition

Let $Q\in[0,\infty)$ and let $a=(a_j)_{j\in\mathbb N}$ be a nondecreasing sequence of positive real numbers, so $0<a_1\le a_2\le\cdots$. The statistical ellipsoid of radius $Q$ and weights $a$ in the Gaussian sequence inverse model is
$$\Theta_a(Q)=\left\{\theta\in\ell^2(\mathbb N,\mathbb R):\sum_{j=1}^{\infty}a_j^2\theta_j^2\le Q^2\right\}.$$
No assumption that $a_j\to\infty$ is included. In particular, this definition does not assert that the ellipsoid is compact in $\ell^2$.

## Definition references

[[def-ip-gaussian-sequence-inverse-model|Gaussian sequence inverse model]]

[[def-square-summable-family-on-an-arbitrary-index-set|Square-summable sequence convention]]

[Litao Ding and Peter Mathé, *Minimax rates for statistical inverse problems under general source conditions*, Definition 1, equation (4), PDF p. 1](https://arxiv.org/pdf/1707.01706)

[Iain M. Johnstone, *Gaussian estimation: Sequence and wavelet models*, Chapter 3, ellipsoid definition (3.4), printed p. 58; §3.1 begins on p. 57](https://mathweb.ucsd.edu/~jbradic/math281a/Johnstone.pdf)
