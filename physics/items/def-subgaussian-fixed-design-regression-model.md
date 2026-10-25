---
id: def-subgaussian-fixed-design-regression-model
kind: definition
title: "Fixed-design regression with sub-Gaussian noise"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps:
  - def-subgaussian-variable-and-vector
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 2, Section 2.4"
      url: "https://arxiv.org/pdf/2310.19244v1"
    - title: "Peter J. Bickel, Ya'acov Ritov and Alexandre B. Tsybakov, Simultaneous Analysis of Lasso and Dantzig Selector, Section 7"
      url: "https://www.stat.berkeley.edu/~bickel/BickelRitovTsybakov2009aos.pdf"
---

## Definition

Let $n,d\ge1$ be integers, let $X\in\mathbb R^{n\times d}$ be deterministic, and let $\theta^\ast\in\mathbb R^d$. The fixed-design regression model is
$$Y=X\theta^\ast+\varepsilon,$$
where $Y,\varepsilon$ are random vectors in $\mathbb R^n$. For $\sigma^2\ge0$, the noise is centered sub-Gaussian with proxy $\sigma^2$ when
$$\mathbb E e^{\lambda\langle u,\varepsilon\rangle}\le e^{\sigma^2\lambda^2\|u\|_2^2/2}\qquad(u\in\mathbb R^n,\ \lambda\in\mathbb R),$$
using the vector convention of [[def-subgaussian-variable-and-vector]]. No independence among the coordinates of $\varepsilon$ is assumed. The parameter is $s$-sparse when $1\le s\le d$ and $|\{j:\theta^\ast_j\ne0\}|\le s$.
