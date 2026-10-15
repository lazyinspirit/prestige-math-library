---
id: thm-posterior-predictive-mixture-is-a-kernel
kind: theorem
title: A posterior mixture of future kernels is a probability kernel
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-posterior-predictive-law
  - lem-prior-and-model-kernel-define-joint-law
  - def-measure-kernel-and-probability-kernel
  - thm-measurability-of-integration-against-a-kernel
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Andrew Gelman et al., Bayesian Data Analysis, 3rd ed., §1.3"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
    - title: "Alicia A. Johnson, Miles Q. Ott, and Mine Dogucu, Bayes Rules!, Chapter 8 §8.3"
      url: "https://www.bayesrulesbook.com/chapter-8.html"
---

## Statement

Let $\Pi$ be a probability kernel from $(\mathsf Y,\mathcal Y)$ to $(\Theta,\mathcal T)$ and let $Q$ be a probability kernel from $(\Theta,\mathcal T)$ to $(\mathsf Z,\mathcal Z)$. For
$$
Q_y^{\mathrm{pred}}(B)=\int_\Theta Q_\theta(B)\,\Pi_y(d\theta),
$$
each $Q_y^{\mathrm{pred}}$ is a probability measure, the evaluations $y\mapsto Q_y^{\mathrm{pred}}(B)$ are measurable, and, for every nonnegative measurable $g:\mathsf Z\to[0,\infty]$,
$$
\int_{\mathsf Z} g(z)\,Q_y^{\mathrm{pred}}(dz)=\int_\Theta\left(\int_{\mathsf Z}g(z)\,Q_\theta(dz)\right)\Pi_y(d\theta).
$$
## Facts & Assumptions

**Given:** The probability kernels $\Pi$ and $Q$ above, and the definition of $Q^{\mathrm{pred}}$.

[F1] The posterior-predictive set function is the stated mixture integral. [[def-posterior-predictive-law]]

[F2] A probability kernel has probability-measure sections and measurable event evaluations. [[def-measure-kernel-and-probability-kernel]]

[F3] A probability measure and parameter-measurable probability kernel define a joint probability measure whose nonnegative integrals are the iterated kernel integrals. [[lem-prior-and-model-kernel-define-joint-law]]

[F4] Integrating a nonnegative product-measurable function against a probability kernel gives a measurable function of the kernel index. [[thm-measurability-of-integration-against-a-kernel]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 Fix $y\in\mathsf Y$ and regard $\Pi_y$ as a probability measure on $\Theta$. By [F2], $Q$ is a probability kernel, so [F3] gives a joint probability measure $J_y$ on $\Theta\times\mathsf Z$ satisfying $J_y(A\times B)=\int_A Q_\theta(B)\,\Pi_y(d\theta)$ and the iterated-integral identity for every nonnegative product-measurable function. Taking $A=\Theta$ shows $Q_y^{\mathrm{pred}}(B)=J_y(\Theta\times B)$; hence it is the second marginal of a probability measure and is itself a probability measure. The same identity applied to $(\theta,z)\mapsto g(z)$ gives the displayed integral formula. [given, F1, F2, F3]

2.1 Fix $B\in\mathcal Z$. The function $\theta\mapsto Q_\theta(B)$ is $\mathcal T$-measurable by [F2], so $(y,\theta)\mapsto Q_\theta(B)$ is $\mathcal Y\otimes\mathcal T$-measurable as the composition with the measurable coordinate projection. By [F4], $y\mapsto\int_\Theta Q_\theta(B)\Pi_y(d\theta)$ is measurable. By [F1] this is $Q_y^{\mathrm{pred}}(B)$, proving kernel measurability. [given, F1, F2, F4] ∎