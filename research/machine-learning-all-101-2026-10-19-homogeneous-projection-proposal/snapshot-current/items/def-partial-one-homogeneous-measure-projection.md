---
id: def-partial-one-homogeneous-measure-projection
kind: definition
title: Partially one-homogeneous signed measure projection
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [def-feature-measure-energy]
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
    - title: "Luigi Ambrosio, Nicola Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
---
## Definition

Let $\Theta$ be a measurable space, let $\mu$ be a finite nonnegative Borel measure on $\mathbb R\times\Theta$, and assume $\int|w|d\mu(w,\theta)<\infty$. For each measurable $B\subseteq\Theta$, define

$$h^1(\mu)(B)=\int_{\mathbb R\times B}w\,d\mu(w,\theta).$$

This is a finite signed measure: its positive and negative parts are the pushforwards to $\Theta$ of $w_+\mu$ and $w_-\mu$, respectively, where $w_+=\max(w,0)$ and $w_- =\max(-w,0)$. For every bounded measurable $\varphi:\Theta\to\mathbb R$, $\int\varphi\,dh^1(\mu)=\int w\varphi(\theta)d\mu$. When $\Phi(w,\theta)=w\varphi(\theta)$, the feature integral factors through this signed measure. The projection is not assumed nonnegative and does not by itself determine a penalty of the form $\int|w|\widetilde V(\theta)d\mu$.

## Definition references

[[def-feature-measure-energy]]

[Chizat and Bach, Appendix A.2.1 and Appendix C.2.2](https://arxiv.org/pdf/1805.09545)

[Ambrosio, Gigli, and Savaré, Chapters 8 and 10](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)
