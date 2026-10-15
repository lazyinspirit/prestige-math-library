---
id: def-posterior-predictive-law
kind: definition
title: Posterior-predictive probability kernel
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - thm-bayes-formula-for-dominated-kernels
  - def-measure-kernel-and-probability-kernel
  - thm-measurability-of-integration-against-a-kernel
justified_by:
  - thm-posterior-predictive-mixture-is-a-kernel
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Andrew Gelman et al., Bayesian Data Analysis, 3rd ed., §§1.3 and 2.5"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
    - title: "Alicia A. Johnson, Miles Q. Ott, and Mine Dogucu, Bayes Rules!, Chapter 8 §§8.1 and 8.3"
      url: "https://www.bayesrulesbook.com/chapter-8.html"
---

## Definition

Let $(\Theta,\mathcal T)$ and $(\mathsf Y,\mathcal Y)$ be measurable spaces. Suppose $\Pi$ is a supplied probability kernel from $\mathsf Y$ to $\Theta$; write its probability measure at $y$ as $\Pi_y$. Let $Q$ be a probability kernel from $\Theta$ to a measurable future-observation space $(\mathsf Z,\mathcal Z)$. Define the **posterior-predictive probability kernel** by
$$Q_y^{\mathrm{pred}}(B):=\int_\Theta Q_\theta(B)\,\Pi_y(d\theta),\qquad y\in\mathsf Y,\ B\in\mathcal Z.$$
A probability kernel has pointwise probability-measure sections and measurable event evaluations, as in [[def-measure-kernel-and-probability-kernel]]. This definition takes the posterior kernel as supplied; it does not form a likelihood quotient.

For a proper-prior dominated model, [[thm-bayes-formula-for-dominated-kernels]] supplies one such data-indexed kernel when the sampling laws have a specified nonnegative jointly measurable density against a sigma-finite data measure. Its stated filler on zero or infinite normalizers is part of that kernel version.

