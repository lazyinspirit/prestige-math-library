---
id: def-posterior-evidence-normalizer-and-fiberwise-update
kind: definition
title: Evidence normalizer and fiberwise posterior update
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-bayesian-model-as-prior-and-sampling-kernel
  - def-dominated-statistical-experiment
  - def-measure
  - def-integral-over-a-measurable-set
  - def-finite-sigma-finite-and-semifinite-measures
justified_by: []
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
    - title: "Gelman et al., Bayesian Data Analysis, 3rd ed., §§1.3, 2.8"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
    - title: "Johnson, Ott & Dogucu, Bayes Rules!, Chapter 2"
      url: "https://www.bayesrulesbook.com/chapter-2.html"
---

## Definition

Let $(\Theta,\mathcal T)$ be a measurable parameter space, let $\Pi$ be a
sigma-finite measure on it, and fix a data value $y$. Let
$L_y:\Theta\to[0,+\infty]$ be a $\mathcal T$-measurable function. Define its
**evidence normalizer** by
$$Z_\Pi(y):=\int_\Theta L_y(\theta)\,\Pi(d\theta)\in[0,+\infty].$$
Only when $0<Z_\Pi(y)<+\infty$ define the **fiberwise posterior update** by
$$\Pi_y(A):=\frac{\int_A L_y(\theta)\,\Pi(d\theta)}{Z_\Pi(y)}\qquad(A\in\mathcal T).$$
The definition makes no quotient at zero or infinite evidence. A prior is
**proper** when $\Pi(\Theta)=1$, as in
[[def-bayesian-model-as-prior-and-sampling-kernel]]. We call a sigma-finite
prior **improper** when $\Pi(\Theta)=+\infty$; the formula also applies to
other sigma-finite measures. For an improper prior, $Z_\Pi(y)$ is a fiberwise
normalizer only; it does not by itself define a prior-predictive probability or
a conditional law.

When the data are described by a dominated experiment, the dominating measure
and its sigma-finiteness are as in
[[def-dominated-statistical-experiment]]. A family of pointwise likelihood
sections is not assumed to be jointly measurable in parameter and data; that
additional condition must be supplied separately whenever Tonelli is used.

