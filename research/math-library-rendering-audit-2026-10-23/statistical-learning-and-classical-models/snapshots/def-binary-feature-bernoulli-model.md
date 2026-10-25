---
id: def-binary-feature-bernoulli-model
kind: definition
title: Binary-feature Bernoulli model
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
page: adversarial-robustness-and-robust-risk
dependency_level: 0
deps:
  - def-probability-measure
  - def-independent-random-elements
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Ludwig Schmidt, Shibani Santurkar, Dimitris Tsipras, Kunal Talwar, and Aleksander Madry, Adversarially Robust Generalization Requires More Data, arXiv:1804.11285v2, Definition 7"
      url: "https://arxiv.org/pdf/1804.11285v2"
---

## Definition

Let $d\ge1$ be an integer, let $\theta\in\{-1,+1\}^d$, and let $0<\tau\le1/2$. The $(\theta,\tau)$ binary-feature Bernoulli model is the probability law $P_{\theta,\tau}$ on $\{-1,+1\}^d\times\{-1,+1\}$ defined by
$$P_{\theta,\tau}(\{(x,y)\})=\frac12\prod_{j=1}^d\left[\left(\frac12+\tau\right)\mathbf1_{\{x_j=y\theta_j\}}+\left(\frac12-\tau\right)\mathbf1_{\{x_j=-y\theta_j\}}\right].$$
Thus $Y$ is uniform on $\{-1,+1\}$ and, conditional on $Y=y$, the feature coordinates are independent, with $X_j=y\theta_j$ with probability $1/2+\tau$ and $X_j=-y\theta_j$ with probability $1/2-\tau$. The displayed masses sum to one because each coordinate factor sums to one over its two possible signs and the label weights sum to one. The uniform-prior experiment used below draws $\Theta$ uniformly from $\{-1,+1\}^d$ and then draws observations conditionally independently from $P_{\Theta,\tau}$.

## Definition references

[[def-probability-measure]]: a probability law has total mass one.

[[def-independent-random-elements]]: for each fixed $y$, coordinate independence is taken under the conditional probability law given $Y=y$; in the prior experiment, observation independence is taken under each conditional law given $\Theta=\theta$.

[Schmidt et al., Definition 7 and the Bernoulli model setup](https://arxiv.org/pdf/1804.11285v2).
