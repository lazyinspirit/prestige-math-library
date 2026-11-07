---
dependency_level: 0
id: def-gl3-distribution-vanishing-to-infinite-order-and-canonical-extension
kind: definition
title: "Vanishing to Infinite Order and Canonical Extension for Distributions"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
justified_by: [lem-gl3-canonical-extension-is-unique]
verification:
  precheck: n/a
sources:
  references:
    - title: "Stephen D. Miller and Wilfried Schmid, Distributions and Analytic Continuation of Dirichlet Series, §§2.1–2.2"
      url: "https://arxiv.org/pdf/math/0403030v1"
    - title: "Stephen D. Miller and Wilfried Schmid, Automorphic Distributions, L-functions, and Voronoi Summation for GL(3), §5.2"
      url: "https://arxiv.org/pdf/math/0408100v3"
pipeline_run: number-theory-all-141-2026-10-25
---

## Definition

Write $\mathcal D'(U)$ for the continuous linear functionals on compactly supported smooth densities on an open set $U\subseteq\mathbb R$. A distribution $T\in\mathcal D'((-\varepsilon,\varepsilon))$ vanishes to order $r\geq0$ at $0$ if, on some neighborhood of $0$, it has a representation
$$T(x)=x^r\sum_{j=1}^{N_r}x^{m_j}D^{m_j}f_j(x),$$
where $N_r<\infty$, each $m_j$ is a nonnegative integer, each $f_j$ is essentially bounded, and $D^{m_j}$ is the distributional derivative of order $m_j$. For an integer $r<0$, it vanishes to order $r$ at $0$ if $x^{-r}T$ vanishes to order $0$ there. It vanishes to infinite order at $0$ if it vanishes to order $r$ for every nonnegative integer $r$. For a distribution defined off $0$, a canonical extension across $0$ is an extension to a distribution on a neighborhood of $0$ that vanishes to infinite order there; the uniqueness assertion in the word “canonical” is supplied by the following lemma. A canonical extension across $\infty$ on $\mathbb R\cup\{\infty\}$ is defined by using the coordinate $u=1/x$ near $\infty$, and vanishing to order $r$ at $\infty$ means vanishing to order $r$ at $u=0$ in that coordinate.

## Definition references

[Miller and Schmid, *Distributions and Analytic Continuation of Dirichlet Series*, §2.2, Definition 2.4 and Lemma 2.8](https://arxiv.org/pdf/math/0403030v1)

[Miller and Schmid, *Automorphic Distributions, L-functions, and Voronoi Summation for GL(3)*, §5.2](https://arxiv.org/pdf/math/0408100v3)
