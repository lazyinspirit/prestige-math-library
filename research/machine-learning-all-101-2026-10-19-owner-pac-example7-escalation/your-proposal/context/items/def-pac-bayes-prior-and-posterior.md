---
id: def-pac-bayes-prior-and-posterior
kind: definition
title: "PAC-Bayes priors, posteriors, and relative entropy"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-measurable-space
  - def-probability-measure
  - def-natural-logarithm
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Pierre Alquier, User-friendly Introduction to PAC-Bayes Bounds, Chapter 2"
      url: "https://arxiv.org/pdf/2110.11216v4"
---

## Definition

Let $(\Theta,\mathcal A)$ be a measurable space. A **prior** is a probability measure $\pi$ on $(\Theta,\mathcal A)$ fixed independently of the training sample. A **posterior** relative to $\pi$ is a probability measure $\rho$ on $(\Theta,\mathcal A)$ that is absolutely continuous with respect to $\pi$, meaning that $\pi(A)=0$ implies $\rho(A)=0$ for every $A\in\mathcal A$.

For such $\rho$ and $\pi$, define their **Kullback–Leibler relative entropy** by
$$\mathrm{KL}(\rho\|\pi):=\sup_{\mathcal P}\sum_{A\in\mathcal P}\rho(A)\log\frac{\rho(A)}{\pi(A)},$$
where the supremum is over all finite measurable partitions $\mathcal P$ of $\Theta$. A term with $\rho(A)=0$ is $0$; a term with $\rho(A)>0=\pi(A)$ is $+\infty$. The value may be $+\infty$.

## Definition references

[[def-measurable-space]]: a measurable space is a set equipped with a specified sigma-algebra.

[[def-probability-measure]]: a probability measure is a measure of total mass one.

[[def-natural-logarithm]]: $\log$ is the inverse of the real exponential on the positive reals.

[Alquier, *User-friendly Introduction to PAC-Bayes Bounds*, Chapter 2](https://arxiv.org/pdf/2110.11216v4): uses a sample-independent prior and relative entropy between posterior and prior.
