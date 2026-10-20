---
id: def-generalized-wasserstein-geodesic-and-strong-subgradient
kind: definition
title: Generalized W2 geodesics and strong Wasserstein subgradients
status: draft
dependency_level: 3
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: [def-wasserstein-two-space-and-couplings, thm-wasserstein-two-is-a-metric, prop-existence-and-lower-semicontinuity-of-optimal-couplings, def-axiom-of-choice]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Luigi Ambrosio, Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport"
      url: "https://arxiv.org/pdf/1805.09545"
---
## Definition

Assume AC. Let $\mu_0,\mu_1\in\mathcal P_2(\mathbb R^d)$. A generalized $W_2$ geodesic from $\mu_0$ to $\mu_1$ with base $\nu\in\mathcal P_2(\mathbb R^d)$ is a probability measure $\pi$ on triples $(z,x,y)$ whose $(z,x)$ marginal is an optimal coupling of $\nu$ and $\mu_0$ and whose $(z,y)$ marginal is an optimal coupling of $\nu$ and $\mu_1$; its interpolating curve is $\mu_t=((1-t)x+ty)_\#\pi$. A functional $F$ is $\lambda$-convex along generalized geodesics if for every such $\pi$ its values satisfy $F(\mu_t)\le(1-t)F(\mu_0)+tF(\mu_1)-\frac{\lambda}{2}t(1-t)\int|x-y|^2d\pi$. A vector field $g_\mu\in L^2(\mu;\mathbb R^d)$ is a strong Wasserstein subgradient of $F$ at $\mu$ if for every $\eta\in\mathcal P_2(\mathbb R^d)$ and every coupling $\gamma$ of $\mu$ and $\eta$, $F(\eta)\ge F(\mu)+\int g_\mu(x)\cdot(y-x)d\gamma+o\!\left((\int|y-x|^2d\gamma)^{1/2}\right)$ as the coupling action tends to zero, with a remainder uniform over all such couplings. The definition imposes no global displacement-convexity claim.

## Definition references

[[def-wasserstein-two-space-and-couplings]]

[[prop-existence-and-lower-semicontinuity-of-optimal-couplings]]

[Ambrosio, Gigli, and Savaré, Definitions 9.2.4 and 10.3.1](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

[Chizat and Bach, Appendix B.2.1](https://arxiv.org/pdf/1805.09545)
