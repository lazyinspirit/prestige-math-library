---
id: def-ip-credible-set-and-frequency-coverage
kind: definition
title: Posterior credibility and frequentist coverage
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-posterior-credible-set
  - def-confidence-set-and-coverage
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
axiom_use: A proper posterior kernel and the sampling laws are supplied; this definition introduces no existence or choice principle.
sources:
  references:
    - title: "Botond Szabó, A. W. van der Vaart, and J. H. van Zanten, Frequentist coverage of adaptive nonparametric Bayesian credible sets, Annals of Statistics 43(4) (2015)"
      url: https://arxiv.org/pdf/1310.4489v5
      locator: "§1, distinction between posterior credible mass and repeated-sampling coverage; §§2–3, inverse Gaussian sequence setup and frequentist coverage formulation."
    - title: "Evarist Giné and Richard Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, Cambridge University Press (2016)"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
      locator: "§6.4, confidence sets; §8.3, adaptive honest confidence sets and self-similarity restrictions."
    - title: "Kolyan Ray, Adaptive Bernstein–von Mises theorems in Gaussian white noise"
      url: https://arxiv.org/pdf/1407.3397
      locator: "§1, posterior credible sets and their frequentist interpretation; §4.1, adaptive full-parameter confidence sets in direct Gaussian white noise."
---

## Definition

Let $(\Theta,\mathcal T)$ be a measurable parameter space and, for each integer $n\ge1$, let $\mathcal E_n=((\mathsf Y_n,\mathcal Y_n),(P_{\theta,n})_{\theta\in\Theta})$ be a statistical experiment. Let $\Pi_{0,n}$ be a proper prior on $(\Theta,\mathcal T)$ and let $y\mapsto\Pi_n(\cdot\mid y)$ be a supplied posterior probability kernel under the associated prior-predictive law. For $0<\gamma<1$, a data-indexed set rule $C_n:\mathsf Y_n\to\mathcal P(\Theta)$ is a posterior credible set at level $1-\gamma$ if its membership graph $\{(y,\theta):\theta\in C_n(y)\}$ is in $\mathcal Y_n\otimes\mathcal T$ and $\Pi_n(C_n(y)\mid y)\ge1-\gamma$ for every $y$ in its declared data domain. At a fixed truth $\theta\in\Theta$, its frequentist coverage is $c_n(\theta):=P_{\theta,n}\{y:\theta\in C_n(y)\}$. For a truth class $\mathcal T_n\subseteq\Theta$, the rule is asymptotically honest at level $1-\gamma$ on $\mathcal T_n$ if $\liminf_{n\to\infty}\inf_{\theta\in\mathcal T_n}c_n(\theta)\ge1-\gamma$, and it is asymptotically exactly calibrated there if $\sup_{\theta\in\mathcal T_n}|c_n(\theta)-(1-\gamma)|\to0$.

## Definition references

[[def-posterior-credible-set|A graph-measurable set has posterior mass at least its declared level under a supplied posterior kernel.]]

[[def-confidence-set-and-coverage|Coverage is the fixed-truth probability of set membership under the corresponding sampling law.]]

[Szabó, van der Vaart, and van Zanten, §1 and §§2–3](https://arxiv.org/pdf/1310.4489v5)

[Giné and Nickl, §§6.4 and 8.3](https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf)

[Ray, §4.1](https://arxiv.org/pdf/1407.3397)
