---
id: def-hadamard-differentiability-tangentially
kind: definition
title: Hadamard differentiability tangentially to a subspace
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "D. Pilavakis, E. Paparoditis, and T. Sapatinas, Moving block and tapered block bootstrap for functional time series with an application to the K-sample mean problem, Bernoulli 25 (2019), Remark 2.1"
      url: https://arxiv.org/pdf/1711.01070
---

## Definition

Let $E,F$ be normed spaces, let $D\subseteq E$, let $\theta\in D$, and let $E_0\subseteq E$ be a linear subspace. A map $\Psi:D\to F$ is **Hadamard differentiable at $\theta$, tangentially to $E_0$** if there is a continuous linear map $\Psi'_\theta:E_0\to F$ such that, for every sequence $t_m>0$ with $t_m\to0$, and every sequence $h_m\to h\in E_0$ for which $\theta+t_mh_m\in D$,

$$\frac{\Psi(\theta+t_mh_m)-\Psi(\theta)}{t_m}\longrightarrow \Psi'_\theta(h)\quad\hbox{in }F.$$

The subspace is part of the hypothesis: directions outside $E_0$ are not covered by this definition.
