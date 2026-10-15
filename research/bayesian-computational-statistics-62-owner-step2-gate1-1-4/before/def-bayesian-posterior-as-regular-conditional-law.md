---
id: def-bayesian-posterior-as-regular-conditional-law
kind: definition
title: Bayesian posterior as a regular conditional law
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-bayesian-model-as-prior-and-sampling-kernel
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - lem-prior-and-model-kernel-define-joint-law
  - def-probability-measure
  - def-random-element-and-real-random-variable
  - def-law-or-distribution-of-a-random-element
  - def-regular-conditional-distribution
  - def-conditional-law-given-a-random-element
  - def-measure-kernel-and-probability-kernel
  - thm-bayes-formula-for-dominated-kernels
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Andrew Gelman, John B. Carlin, Hal S. Stern, David B. Dunson, Aki Vehtari, and Donald B. Rubin, Bayesian Data Analysis, 3rd ed., Chapter 1 §§1.1–1.3"
      url: https://sites.stat.columbia.edu/gelman/book/BDA3.pdf
    - title: "Alicia A. Johnson, Miles Q. Ott, and Mine Dogucu, Bayes Rules!, Chapter 2"
      url: https://www.bayesrulesbook.com/chapter-2.html
---

## Definition

Let a proper Bayesian model be given, and let $J$ be its joint prior-predictive probability on $(\Theta\times\mathsf Y,\mathcal T\otimes\mathcal Y)$, supplied by [[lem-prior-and-model-kernel-define-joint-law]]. More generally, let $(\Omega,\mathcal F,Q)$ be any probability space carrying parameter and data random elements $X:\Omega\to\Theta$ and $Y:\Omega\to\mathsf Y$ whose joint law is $J$ ([[def-probability-measure]], [[def-random-element-and-real-random-variable]], [[def-law-or-distribution-of-a-random-element]]). A **posterior regular conditional distribution (posterior RCD)** is a regular conditional distribution of $X$ given $\sigma(Y)$, in the sense of [[def-regular-conditional-distribution]]. It is a kernel indexed by the sample point $\omega\in\Omega$. The canonical realization is $\Omega=\Theta\times\mathsf Y$ with $Q=J$ and coordinate maps $X(\theta,y)=\theta$, $Y(\theta,y)=y$.

A **data-indexed posterior kernel** is a probability kernel $\Pi_{\cdot}$ from $(\mathsf Y,\mathcal Y)$ to $(\Theta,\mathcal T)$ ([[def-measure-kernel-and-probability-kernel]]) for which $\omega\mapsto\Pi_{Y(\omega)}$ is a conditional law of $X$ given $Y$ ([[def-conditional-law-given-a-random-element]]). Equivalently, for every $A\in\mathcal T$ and $B\in\mathcal Y$,
$$Q(X\in A,\ Y\in B)=\int_B\Pi_y(A)\,Q_Y(dy),$$
where $Q_Y$ is the data marginal (equal to $J_Y$). This kernel is indexed by data values, not sample points.

The definition asserts no existence of either conditional kernel. Values of a data-indexed version on a measurable $J_Y$-null set are not fixed by the conditional-law identities; replacing them there by a fixed probability preserves those identities. A dominated-density construction is a separate route: [[thm-bayes-formula-for-dominated-kernels]] requires a proper prior, a sigma-finite data measure, and a specified jointly measurable sampling density, and fills fibres whose marginal density is zero or infinite with the prior. It does not require the data space to be standard Borel.
