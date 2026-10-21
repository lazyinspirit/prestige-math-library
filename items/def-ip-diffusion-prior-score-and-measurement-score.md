---
id: def-ip-diffusion-prior-score-and-measurement-score
kind: definition
title: Diffusion prior and measurement scores
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - lem-ip-conditional-score-and-tweedie-identities
justified_by: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Giannis Daras et al., A Survey on Diffusion Models for Inverse Problems (2024), arXiv:2410.00083
      url: https://arxiv.org/pdf/2410.00083
    - title: Yang Song et al., Score-Based Generative Modeling through Stochastic Differential Equations (2021), arXiv:2011.13456
      url: https://arxiv.org/pdf/2011.13456
    - title: Hyungjin Chung et al., Diffusion Posterior Sampling for General Noisy Inverse Problems (2023), arXiv:2209.14687
      url: https://arxiv.org/pdf/2209.14687
---

## Definition

Let $p_\sigma$, $Q_\sigma$, $m_\sigma$, and $r_\sigma(y\mid x)$ be formed under the hypotheses of the conditional-score and Tweedie identities for Gaussian smoothing. The **diffusion prior score** is $s_\sigma(x)=\nabla_x\log p_\sigma(x)$, the exact score of the smoothed prior density. The **measurement score** is $g_\sigma(x,y)=\nabla_x\log r_\sigma(y\mid x)$, where $r_\sigma(y\mid x)=\int \ell_y(u)\,Q_\sigma(x,du)$ is the likelihood density averaged over the conditional law of the clean state. For general inverse problems, evaluating this clean-state likelihood integral is generally computationally intractable. The **conditional score** is $c_\sigma(x,y)=\nabla_x\log p_\sigma(x\mid y)$; it equals $s_\sigma(x)+g_\sigma(x,y)$, and the clean-state conditional mean is $m_\sigma(x)=x+\sigma^2s_\sigma(x)$. A learned field $\widehat s_\theta$ is an estimate of $s_\sigma$ and is exact only when it agrees with $s_\sigma$ almost everywhere under $p_\sigma(x)dx$. Replacing $r_\sigma(y\mid x)$ by the likelihood evaluated at $m_\sigma(x)$ is a plug-in likelihood approximation, not part of the exact measurement-score definition.

## Definition references

[[lem-ip-conditional-score-and-tweedie-identities]]

[Daras et al., §§2.2 and 2.4.3–2.4.4](https://arxiv.org/pdf/2410.00083)

[Song et al., §5](https://arxiv.org/pdf/2011.13456)

[Chung et al., §3.1](https://arxiv.org/pdf/2209.14687)
