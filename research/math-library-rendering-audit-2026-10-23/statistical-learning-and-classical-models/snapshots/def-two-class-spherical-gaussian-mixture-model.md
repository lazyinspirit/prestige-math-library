---
id: def-two-class-spherical-gaussian-mixture-model
kind: definition
title: Two-class spherical Gaussian model
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
page: adversarial-robustness-and-robust-risk
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-multivariate-normal-law
  - def-probability-measure
justified_by: []
axiom_use: "AC is used through def-multivariate-normal-law to construct the finite-dimensional Gaussian laws; the two-class mixture uses only a finite probability mixture."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Ludwig Schmidt, Shibani Santurkar, Dimitris Tsipras, Kunal Talwar, and Aleksander Madry, Adversarially Robust Generalization Requires More Data, arXiv:1804.11285v2, Definition 1"
      url: "https://arxiv.org/pdf/1804.11285v2"
---

## Definition

Assume the Axiom of Choice. For an integer $d\ge1$, a vector $\theta\in\mathbb R^d$, and $\sigma>0$, the two-class spherical Gaussian model is the Borel probability law $P_{\theta,\sigma}$ on $\mathbb R^d\times\{-1,+1\}$ defined by
$$P_{\theta,\sigma}(C)=\frac12\sum_{y\in\{-1,+1\}}N_d(y\theta,\sigma^2 I_d)(C_y),\qquad C_y:=\{x\in\mathbb R^d:(x,y)\in C\},$$
for every Borel set $C\subseteq\mathbb R^d\times\{-1,+1\}$. Thus $Y$ is uniform on $\{-1,+1\}$ and, conditional on $Y=y$, $X$ has law $N_d(y\theta,\sigma^2I_d)$. In the normalized model used below, $\|\theta\|_2=\sqrt d$. Independent training and test observations are drawn from the corresponding finite product law.

## Definition references

[[def-multivariate-normal-law]]: $N_d(m,\Sigma)$ is the Borel law whose linear projections have the corresponding scalar normal laws; its construction assumes AC.

[[def-axiom-of-choice]]: AC asserts that every family of nonempty sets has a choice function.

[[def-probability-measure]]: a probability measure is a measure of total mass one.

[Schmidt et al., Definition 1 and the Gaussian-model setup](https://arxiv.org/pdf/1804.11285v2).
