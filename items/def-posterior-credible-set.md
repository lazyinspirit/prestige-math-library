---
id: def-posterior-credible-set
kind: definition
title: Posterior credible set
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - thm-bayes-formula-for-dominated-kernels
  - def-measure-kernel-and-probability-kernel
  - thm-measurability-of-integration-against-a-kernel
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
    - title: "Andrew Gelman et al., Bayesian Data Analysis, 3rd ed., §§1.3 and 2.5"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
    - title: "Alicia A. Johnson, Miles Q. Ott, and Mine Dogucu, Bayes Rules!, Chapter 8 §8.1"
      url: "https://www.bayesrulesbook.com/chapter-8.html"
---

## Definition

Let $(\Theta,\mathcal T)$ and $(\mathsf Y,\mathcal Y)$ be measurable spaces and let $y\mapsto\Pi_y$ be a supplied posterior probability kernel. For $\alpha\in[0,1]$, a set-valued rule $C$ is **graph-measurable** when
$$\{(y,\theta)\in\mathsf Y\times\Theta:\theta\in C(y)\}\in\mathcal Y\otimes\mathcal T.$$
It is a **posterior credible set at level $1-\alpha$** when it is graph-measurable and
$$\Pi_y(C(y))\ge 1-\alpha\qquad\text{for every }y\text{ in its declared data domain}.$$
The posterior-mass function is measurable by integration of the indicator of the membership graph against the kernel. If a density is available relative to a specified dominating measure, a highest-posterior-density region selects parameter values with largest density; such regions need not be intervals and may be disconnected or nonunique.

## Remarks

On a real parameter space, equal-tailed intervals formed from posterior quantiles are one choice; [[thm-central-posterior-quantile-interval-is-credible]] proves their mass bound.
