---
id: def-localized-hilbert-lift
kind: definition
title: Localized Hilbert lift of the feature energy
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: [def-feature-measure-energy, lem-label-l2-space-is-separable-hilbert, def-bochner-integrable-function, thm-bochner-integrability-criterion]
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

Assume AC. Fix $\mu_0\in\mathcal P_2(\Omega)$ and $r>0$. Let $K=L^2(\mu_0;\mathbb R^d)$ with its usual real Hilbert inner product, and let
$$C_r=\{X\in K:X(s)\in Q_r\text{ for }\mu_0\text{-almost every }s\}.$$
Define the indicator $\iota_{C_r}$ to be $0$ on $C_r$ and $+\infty$ outside it, and define the localized lifted energy on $K$ by
$$E_r(X)=R\!\left(\int_{\mathbb R^d}\Phi(X(s))\,d\mu_0(s)\right)+\int_{\mathbb R^d}V(X(s))\,d\mu_0(s)+\iota_{C_r}(X).$$
The first integral is a Bochner integral. Values of representatives on $\mu_0$-null sets do not affect $C_r$ or $E_r$.

## Definition references

[[def-feature-measure-energy]]

[[lem-label-l2-space-is-separable-hilbert]]

[[def-bochner-integrable-function]]

[Chizat and Bach, Appendix B.2.1](https://arxiv.org/pdf/1805.09545)

[Ambrosio, Gigli, and Savaré, Chapter 4](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)
