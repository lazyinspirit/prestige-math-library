---
id: def-ip-posterior-contraction-rate
kind: definition
title: "Posterior contraction rate in a Gaussian sequence inverse experiment"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ip-gaussian-sequence-inverse-model
  - def-bayesian-posterior-as-regular-conditional-law
justified_by: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
sources:
  references:
    - title: "B. T. Knapik, A. W. van der Vaart, and J. H. van Zanten, Bayesian inverse problems with Gaussian priors, The Annals of Statistics 39 (2011), §4, Theorem 4.1"
      url: "https://arxiv.org/pdf/1103.2692"
      locator: "Theorem 4.1 states expected posterior tail convergence outside M_n times a rate for every M_n tending to infinity."
    - title: "Iain M. Johnstone, Gaussian estimation: Sequence and wavelet models, 2013 draft"
      url: "https://mathweb.ucsd.edu/~jbradic/math281a/Johnstone.pdf"
      locator: "§2.3, printed pp. 25–29, for product priors/posteriors and posterior risk terminology."
axiom_use: "No additional axiom is required to define this rate; a posterior kernel and the sequence experiment are inputs."
---

## Definition

Let $\mathbb N_{>0}=\{1,2,3,\ldots\}$. For each positive noise level $\epsilon$, let $\Pi_{0,\epsilon}$ be a proper Borel prior on $\ell^2(\mathbb N_{>0},\mathbb R)$ in the Gaussian sequence inverse experiment, and let $\mathbb P_{\Pi_{0,\epsilon}}$ be the resulting prior-predictive joint law of parameter and data. A posterior kernel is a data-measurable assignment $y\mapsto\Pi_\epsilon(\cdot\mid y)$ of Borel probability measures on $\ell^2$ satisfying
$$\mathbb P_{\Pi_{0,\epsilon}}(\theta\in A,\,Y\in B)=\int_B\Pi_\epsilon(A\mid y)\,\mathbb P_{\Pi_{0,\epsilon}}^Y(dy)$$
for every Borel $A\subseteq\ell^2$ and every product-Borel $B\subseteq\mathbb R^{\mathbb N_{>0}}$, where $\mathbb P_{\Pi_{0,\epsilon}}^Y$ is the prior-predictive data marginal. Fix a truth $\theta^\dagger\in\ell^2$ and write $\mathbb P_{\theta^\dagger}^\epsilon$ for its data law. Since a conditional-law version is specified only up to a prior-predictive null set, any contraction claim under $\mathbb P_{\theta^\dagger}^\epsilon$ refers to the stated version. A positive function $r_\epsilon\to0$ is a posterior contraction rate in the $\ell^2$ norm at $\theta^\dagger$ if, for every positive function $M_\epsilon\to\infty$,
$$\mathbb E_{\theta^\dagger}^\epsilon\!\left[\Pi_\epsilon\!\left(\{\theta\in\ell^2:\|\theta-\theta^\dagger\|_2>M_\epsilon r_\epsilon\}\mid Y\right)\right]\longrightarrow0\quad\text{as }\epsilon\downarrow0.$$

## Definition references

[[def-ip-gaussian-sequence-inverse-model|The parameter is square-summable, the data space has its product Borel sigma-algebra, and the signal coordinates use positive singular values.]]

[[def-bayesian-posterior-as-regular-conditional-law|A posterior version is a data-indexed conditional law under the prior-predictive joint distribution.]]

[Knapik, van der Vaart, and van Zanten, *Bayesian inverse problems with Gaussian priors*, §4, Theorem 4.1](https://arxiv.org/pdf/1103.2692)

[Johnstone, *Gaussian estimation: Sequence and wavelet models*, §2.3](https://mathweb.ucsd.edu/~jbradic/math281a/Johnstone.pdf)
