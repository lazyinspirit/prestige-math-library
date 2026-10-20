---
id: def-wasserstein-gradient-flow-for-feature-energy
kind: definition
title: Wasserstein gradient flow for a feature-measure energy
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: [def-feature-measure-energy, def-wasserstein-two-space-and-couplings, def-ac2-curves-in-wasserstein-two, def-continuity-equation-with-finite-action, thm-wasserstein-two-is-a-metric, def-axiom-of-choice]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport"
      url: "https://arxiv.org/pdf/1805.09545"
    - title: "Luigi Ambrosio, Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
---
## Definition

Assume AC and the feature-measure energy hypotheses. For $\mu\in\mathcal P_2(\Omega)$ with finite energy, define $F'(\mu)(u)=dR_{m_\mu}[\Phi(u)]+V(u)$ on $\Omega$, and extend this potential by $+\infty$ off $\Omega$. Its constrained subdifferential at $u$ is the local Fréchet subdifferential of $F'(\mu)+\iota_\Omega$ defined in the feature-measure-energy convention. A Wasserstein gradient flow from $\mu_0\in\mathcal P_2(\Omega)$ is a curve $t\mapsto\mu_t$ in $AC^2_{\mathrm{loc}}([0,\infty);(\mathcal P_2(\mathbb R^d),W_2))$, with $\mu_{t=0}=\mu_0$, for which there is a Borel velocity $v_t(u)$ satisfying the finite-action continuity equation and $v_t(u)$ equals the negative minimum-norm element of $\partial(F'(\mu_t)+\iota_\Omega)(u)$ for $dt\,d\mu_t(u)$-almost every $(t,u)$. This definition does not assert that the energy is displacement convex.

## Definition references

[[def-feature-measure-energy]]

[[def-ac2-curves-in-wasserstein-two]]

[[def-continuity-equation-with-finite-action]]

[Chizat and Bach, Proposition 2.5](https://arxiv.org/pdf/1805.09545)
