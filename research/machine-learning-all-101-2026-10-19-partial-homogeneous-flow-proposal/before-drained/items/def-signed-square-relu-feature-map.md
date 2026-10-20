---
id: def-signed-square-relu-feature-map
kind: definition
title: Signed-square ReLU feature parameterization
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps: [def-feature-measure-energy, def-single-hidden-layer-network]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport"
      url: "https://arxiv.org/pdf/1805.09545"
---
## Definition

Let $d\ge2$, let $\rho_X$ be a Borel probability measure on $\mathbb R^{d-1}$ with finite second moment, and define $s(t)=t|t|$ and $\sigma(t)=\max(t,0)$. For $\theta=(\theta_1,\ldots,\theta_d)\in\mathbb R^d$, define the signed-square ReLU feature in $L^2(\rho_X)$ by

$$\Phi(\theta)(x)=\sigma\!\left(\sum_{j=1}^{d-1}s(\theta_j)x_j+s(\theta_d)\right).$$

The two-copy parameterization uses this feature on one copy of $\mathbb R^d$ and its negative on the other copy; nonnegative measures on the disjoint union represent signed linear combinations of these features. The scalar signed-square map is continuously differentiable with derivative $s'(t)=2|t|$. This definition asserts differentiability of the resulting $L^2$ feature map only when its data law has the additional regularity needed for that conclusion; it does not assert that its differential is locally Lipschitz.

## Definition references

[[def-feature-measure-energy]]

[[def-single-hidden-layer-network]]

[Chizat and Bach, Section 4.2 and Appendix D.4.2](https://arxiv.org/pdf/1805.09545)

