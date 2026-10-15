---
id: def-bayesian-model-as-prior-and-sampling-kernel
kind: definition
title: Bayesian model as a prior and sampling kernel
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-measurable-space
  - def-statistical-experiment
  - def-parametric-statistical-model
  - def-parameter-measurable-statistical-model-as-markov-kernel
  - def-probability-measure
  - def-measure-kernel-and-probability-kernel
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Andrew Gelman, John B. Carlin, Hal S. Stern, David B. Dunson, Aki Vehtari, and Donald B. Rubin, Bayesian Data Analysis, 3rd ed."
      url: https://sites.stat.columbia.edu/gelman/book/BDA3.pdf
    - title: "Alicia A. Johnson, Miles Q. Ott, and Mine Dogucu, Bayes Rules!, Chapter 2"
      url: https://www.bayesrulesbook.com/chapter-2.html
---

## Definition

Let
$$\mathsf E=((\mathsf Y,\mathcal Y),\Theta,(P_\theta)_{\theta\in\Theta})$$
be a statistical experiment ([[def-statistical-experiment]]). Equip the parameter set with a specified measurable structure $(\Theta,\mathcal T)$ ([[def-measurable-space]]). A **proper Bayesian model** based on this experiment consists of a prior probability measure $\Pi$ on $(\Theta,\mathcal T)$ ([[def-probability-measure]]) and a probability kernel $K$ from $(\Theta,\mathcal T)$ to $(\mathsf Y,\mathcal Y)$ ([[def-measure-kernel-and-probability-kernel]]) that represents the experiment:
$$K(\theta,B)=P_\theta(B)\qquad(\theta\in\Theta,\ B\in\mathcal Y).$$
Thus $\theta\mapsto K(\theta,B)$ is $\mathcal T$-measurable for every data event $B$, as required for a parameter-measurable model ([[def-parameter-measurable-statistical-model-as-markov-kernel]]). The family of measures in a parametric model alone does not supply this parameter sigma-algebra or measurability condition ([[def-parametric-statistical-model]]).

The word **proper** means that the prior is a probability measure. A sigma-finite improper prior is not a proper Bayesian model in this definition; fixed-data posterior normalizers for such priors are handled separately.
