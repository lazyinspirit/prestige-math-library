---
id: def-fourier-neural-operator-layer
kind: definition
title: "Fourier neural-operator layer"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-neural-operator
  - def-measure-space
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-integral-over-a-measurable-set
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Kovachki et al., Neural Operator: Learning Maps Between Function Spaces With Applications to PDEs"
      url: "https://arxiv.org/pdf/2108.08481"
      locator: "§4.4, Fourier neural-operator multiplier equation (26)"
---

## Definition

Let $\mathbb T^d=(\mathbb R/\mathbb Z)^d$ with normalized Lebesgue measure, represented by the unit cube $[0,1]^d$, and let $v\in C(\mathbb T^d;\mathbb R^q)$ be a periodic vector field. Let $K\ge0$ be a frequency cutoff, and let $R_k\in\mathbb C^{q'\times q}$ be trainable matrices for integer multi-indices $k$ with $\|k\|_\infty\le K$. Define the truncated Fourier integral layer by
$$\mathcal K_Rv(x)=\sum_{\|k\|_\infty\le K}e^{2\pi i k\cdot x}R_k\widehat v(k),\qquad \widehat v(k)=\int_{\mathbb T^d}e^{-2\pi i k\cdot y}v(y)\,dy.$$
For real-valued outputs require $R_{-k}=\overline{R_k}$ and $R_0$ real. A Fourier neural-operator layer is
$$v_{t+1}(x)=\sigma\bigl(W_tv_t(x)+\mathcal K_Rv_t(x)+b_t(x)\bigr),$$
where $W_t$ is a real pointwise channel map, $b_t\in C(\mathbb T^d;\mathbb R^{q'})$ is a continuous periodic real bias, and $\sigma:\mathbb R\to\mathbb R$ is continuous and acts coordinatewise. The finite Fourier sum and these conditions give $v_{t+1}\in C(\mathbb T^d;\mathbb R^{q'})$. This definition gives a Fourier-parameterized layer only. It does not assert that the architecture is universal in any specified function-space topology.

## Definition references
[[def-neural-operator|neural operator]]

[[def-measure-space|measure space]]

[[def-lebesgue-measure-and-the-lebesgue-sigma-algebra|lebesgue measure and the lebesgue sigma algebra]]

[[def-integrable-real-and-complex-functions-and-their-integrals|integrable real and complex functions and their integrals]]

[[def-integral-over-a-measurable-set|integral over a measurable set]]

[Kovachki et al., §4.4, equation (26): Fourier neural-operator multiplier](https://arxiv.org/pdf/2108.08481)

