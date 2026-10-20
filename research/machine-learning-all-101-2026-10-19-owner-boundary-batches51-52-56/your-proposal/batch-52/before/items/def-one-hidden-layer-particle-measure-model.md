---
id: def-one-hidden-layer-particle-measure-model
kind: definition
title: One-hidden-layer particle-measure model
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps: [def-feature-measure-energy, def-wasserstein-gradient-flow-for-feature-energy, def-single-hidden-layer-network, def-population-and-empirical-risk, def-axiom-of-choice]
justified_by: []
axiom_use: "AC is an explicit inherited hypothesis for the Wasserstein-flow clause; the finite empirical predictor identity is choice-free."
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

Assume AC for the flow clause below. Let $(\mathsf X,\mathcal A,\rho_X)$ be an input probability space, let $\mathcal H=L^2(\rho_X)$, let $\sigma:\mathbb R\to\mathbb R$ be measurable, and put $\Theta=\mathbb R^{p+1}$ for hidden affine parameters $\theta=(w,b)$. Assume $\phi_\theta(x)=\sigma(w\cdot x+b)$ belongs to $\mathcal H$ for each $\theta$. On $\Omega=\mathbb R\times\Theta$, define the feature map $\Phi(a,w,b)=a\phi_{(w,b)}\in\mathcal H$. For a finite nonnegative Borel measure $\mu$ on $\Omega$ for which the Bochner integral exists, its particle-measure predictor is

$$f_\mu=\int_\Omega \Phi(u)\,d\mu(u)\in\mathcal H.$$

The corresponding objective is $F(\mu)=R(f_\mu)+\int_\Omega V\,d\mu$, whenever the scalar integral is finite, with $R:\mathcal H\to[0,\infty)$ a risk functional and $V:\Omega\to[0,\infty)$ a regularizer. For the empirical particle law defined on measurable $A\subseteq\Omega$ by $\mu_m(A)=m^{-1}\#\{j:(m a_j,w_j,b_j)\in A\}$, one has $f_{\mu_m}(x)=\sum_{j=1}^m a_j\sigma(w_j\cdot x+b_j)$, so a finite one-hidden-layer network is a particle-measure predictor (with an optional constant output bias added separately). A feature-energy Wasserstein gradient flow means an $AC^2_{\rm loc}$ curve of probability measures satisfying the finite-action continuity equation with Borel velocity equal almost everywhere to the negative minimum-norm element of the constrained subdifferential of the first-variation potential. This is the earlier model-flow definition; no existence or uniqueness follows from this definition. The flow use below requires all of the feature-energy regularity hypotheses. In particular, the classical ReLU feature map is not asserted here to meet those hypotheses merely because it is positively homogeneous.

## Definition references

[[def-feature-measure-energy]]

[[def-wasserstein-gradient-flow-for-feature-energy]]

[[def-single-hidden-layer-network]]

[[def-population-and-empirical-risk]]

[Chizat and Bach, Sections 2.1–2.3](https://arxiv.org/pdf/1805.09545)

[Ambrosio, Gigli, and Savaré, Chapters 8 and 10](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)
