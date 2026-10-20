---
id: def-two-homogeneous-measure-projection
kind: definition
title: Two-homogeneous measure projection
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

Let $d\ge2$, let $\mathbb S^{d-1}=\{\theta\in\mathbb R^d:|\theta|=1\}$, and let $\mu$ be a finite nonnegative Borel measure on $\mathbb R^d$ with $\int|u|^2d\mu(u)<\infty$. Define $\rho(u)=u/|u|$ for $u\ne0$. The **two-homogeneous projection** of $\mu$ is the set function on Borel $A\subseteq\mathbb S^{d-1}$

$$h^2(\mu)(A)=\int_{\mathbb R^d\setminus\{0\}}\mathbf1_A(\rho(u))|u|^2d\mu(u).$$

It is a finite nonnegative Borel measure: the integrand defines the weighted measure $|u|^2\mu$ on $\mathbb R^d\setminus\{0\}$, and preimages under the continuous map $\rho$ preserve disjoint unions; its total mass is at most $\int|u|^2d\mu$. Mass at $u=0$ contributes zero. If $\Phi$ or $V$ is positively two-homogeneous, this projection records its radial integral on the sphere; the exact identities are stated separately.

## Definition references

[[def-feature-measure-energy]]

[Chizat and Bach, Appendix A.2.2 and Appendix C.2.1](https://arxiv.org/pdf/1805.09545)

[Ambrosio, Gigli, and Savaré, Chapter 8](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)
