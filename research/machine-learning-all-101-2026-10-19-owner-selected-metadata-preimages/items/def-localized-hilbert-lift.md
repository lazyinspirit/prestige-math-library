---
id: def-localized-hilbert-lift
kind: definition
title: Localized Hilbert lift of the feature energy
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: [def-feature-measure-energy, lem-label-l2-space-is-separable-hilbert, def-bochner-integrable-function, thm-bochner-integrability-criterion, def-axiom-of-choice]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport"
      url: "https://arxiv.org/pdf/1805.09545"
    - title: "Luigi Ambrosio, Nicola Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
---
## Definition

Assume AC. Fix an arbitrary probability label space $(S,\Sigma,\sigma)$ and $r>0$. Let $K=L^2(\sigma;\mathbb R^d)$ with its usual real Hilbert inner product, and let
$$C_r=\{X\in K:X(s)\in Q_r\text{ for }\sigma\text{-almost every }s\}.$$
Define the indicator $\iota_{C_r}$ to be $0$ on $C_r$ and $+\infty$ outside it, and define the localized lifted energy on $K$ by
$$E_r(X)=R\!\left(\int_S\Phi(X(s))\,d\sigma(s)\right)+\int_SV(X(s))\,d\sigma(s)+\iota_{C_r}(X).$$
The first integral is a Bochner integral. The space $K$ is Hilbert for every probability label space and is separable when $\Sigma$ is countably generated. The latter condition holds for finite labels and for Euclidean Borel labels of any dimension, including joint and triple transport-plan labels. For the flow from a law $\mu_0$ the particular choice is $(S,\sigma)=(\Omega,\mu_0)$ and $X_0(s)=s$. Values of representatives on $\sigma$-null sets do not affect $C_r$ or $E_r$.

## Definition references

[[def-feature-measure-energy]]

[[lem-label-l2-space-is-separable-hilbert]]

[[def-bochner-integrable-function]]

[Chizat and Bach, Appendix B.2.1](https://arxiv.org/pdf/1805.09545)

[Ambrosio, Gigli, and Savaré, Chapter 4](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)
