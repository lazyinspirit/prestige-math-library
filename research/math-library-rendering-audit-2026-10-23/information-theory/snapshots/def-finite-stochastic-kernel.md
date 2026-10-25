---
id: def-finite-stochastic-kernel
kind: definition
title: Finite stochastic kernels
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-finite-probability-vector
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 7, §§7.1–7.2"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-2022.pdf"
    - title: "Tim van Erven and Peter Harremoës, Rényi Divergence and Kullback-Leibler Divergence, §II-B"
      url: "https://arxiv.org/pdf/1206.2459"
---

## Definition

Let $\mathcal X,\mathcal Y$ be finite nonempty sets. A **stochastic kernel**
from $\mathcal X$ to $\mathcal Y$ is a matrix
$K=(K(y\mid x))_{x\in\mathcal X,y\in\mathcal Y}$ such that
$K(y\mid x)\ge0$ and $\sum_{y\in\mathcal Y}K(y\mid x)=1$ for every
$x\in\mathcal X$. The convention is input first in the condition and output
first in the value $K(y\mid x)$.

For a probability vector $P=(p_x)_{x\in\mathcal X}$, the output vector
$PK$ on $\mathcal Y$ is
$$(PK)_y:=\sum_{x\in\mathcal X}p_xK(y\mid x).$$
It is a probability vector because its coordinates are nonnegative and
$\sum_y(PK)_y=\sum_xp_x\sum_yK(y\mid x)=\sum_xp_x=1$.
