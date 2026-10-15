---
id: def-gaussian-sequence-hyperrectangle-class
kind: definition
title: "Hyperrectangle classes in a Gaussian sequence model"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-square-summable-family-on-an-arbitrary-index-set
justified_by: []
proof_strategy: definition
axiom_use: "No choice principle is used in this definition."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Botond Szabó, Aad van der Vaart and Harry van Zanten, Frequentist coverage of adaptive nonparametric Bayesian credible sets, Annals of Statistics 43(4) (2015), §1.1"
      url: "https://arxiv.org/pdf/1310.4489v5"
      locator: "§1.1, equation (1.1), printed p. 4; sequence form of the hyperrectangle."
    - title: "B. T. Knapik, A. W. van der Vaart and J. H. van Zanten, Bayesian inverse problems with Gaussian priors, Annals of Statistics 39(5) (2011), Assumption 3.1"
      url: "https://research.vu.nl/ws/portalfiles/portal/2619416/276605.pdf"
      locator: "Assumption 3.1, printed pp. 2633–2634; weighted square-summability convention for Gaussian-sequence regularity."
---

## Definition

Write $\mathbb N_+=\{1,2,\ldots\}$. Let $\ell^2(\mathbb N_+,\mathbb R)$ be the real square-summable sequence space
from [[def-square-summable-family-on-an-arbitrary-index-set]]. For $\beta>0$
and $M>0$, the **Gaussian-sequence hyperrectangle** of smoothness index
$\beta$ and radius $M$ is
$$\Theta_\beta(M):= \left\{\theta\in\ell^2(\mathbb N_+,\mathbb R): \sup_{i\ge1}i^{1+2\beta}\theta_i^2\le M\right\}.$$
The definition uses a coordinatewise weighted bound. It is distinct from the
Sobolev ellipsoid $\{\theta:\sum_i i^{2\beta}\theta_i^2\le M\}$.
