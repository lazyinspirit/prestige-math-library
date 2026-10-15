---
id: def-posterior-risk-and-bayes-action
kind: definition
title: Finite posterior risk and Bayes action rule
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - thm-bayes-formula-for-dominated-kernels
  - def-measure-kernel-and-probability-kernel
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-measurable-function-between-measurable-spaces
  - thm-measurability-of-integration-against-a-kernel
  - def-loss-function-and-risk
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Andrew Gelman et al., Bayesian Data Analysis, 3rd ed., §9.1"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory, §5.3.1, PDF pp. 104–105"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
---

## Definition

Let $(\Theta,\mathcal T)$ have a supplied posterior probability kernel $\Pi_y$, let $(\mathsf A,\mathcal G)$ be a measurable action space, and let $L:\Theta\times\mathsf A\to[0,\infty]$ be a measurable function on the product measurable space [[def-product-sigma-algebra-and-finite-product-sigma-algebras]], in the sense of [[def-measurable-function-between-measurable-spaces]]. This strengthens the section-measurability convention in [[def-loss-function-and-risk]] so that posterior integrals vary measurably with measurable action rules.

For a fixed data fiber $y$ and action $a$, define the **posterior risk** only when
$$\rho_y(a):=\int_\Theta L(\theta,a)\,\Pi_y(d\theta)<\infty.$$
A **pointwise Bayes action** at $y$ is a finite-risk action attaining the minimum among all finite-risk actions. On a declared measurable data domain $D$, a **Bayes action rule** is a measurable map $\delta:D\to\mathsf A$ whose finite posterior risk attains that minimum at every $y\in D$. This definition makes no assertion that finite-risk actions or measurable minimizing rules always exist. It therefore does not infer a Bayes action merely from the existence of an infimum. The sampling risk in [[def-loss-function-and-risk]] is a different integral, taken over the data law at a fixed parameter.
