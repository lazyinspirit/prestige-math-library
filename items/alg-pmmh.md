---
id: alg-pmmh
kind: algorithm
title: Particle marginal Metropolis–Hastings
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-measure
  - def-probability-measure
  - def-standard-borel-space
  - def-measure-kernel-and-probability-kernel
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - alg-metropolis-hastings-kernel
  - def-feynman-kac-path-targets-and-normalizers
  - thm-feynman-kac-path-radon-nikodym-weight
  - alg-sequential-importance-resampling
  - thm-sequential-particle-estimator-is-unbiased
justified_by:
  - thm-pmmh-exact-invariance
axiom_use: "Assume AC through the particle path Radon–Nikodym derivatives and general Metropolis–Hastings accepted-flow construction. The finite particle operations add no arbitrary choice."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Andrieu, Doucet, and Holenstein, Particle Markov chain Monte Carlo methods, §§2.4.2, 4.4, Theorem 4"
      url: "https://www.stats.ox.ac.uk/~doucet/andrieu_doucet_holenstein_PMCMC.pdf"
    - title: "Särkkä and Svensson, Bayesian Filtering and Smoothing, 2nd ed., §16.3.5"
      url: "https://users.aalto.fi/~ssarkka/pub/bfs_book_2023_online.pdf"
    - title: "Lindsten and Schön, On the use of backward simulation in particle Markov chain Monte Carlo methods (arXiv 1110.2873v2), §§3–4"
      url: "https://arxiv.org/pdf/1110.2873.pdf"
---

## Definition

Fix observations $y_{1:T}$, a standard-Borel parameter space $(\Theta,\mathcal T)$,
a prior probability $\pi_0$, and the finite-horizon Feynman–Kac path model in
[[def-feynman-kac-path-targets-and-normalizers]]. Write
$$L_\theta(y_{1:T})=\gamma_{\theta,T}(1),\qquad C=\int_\Theta L_\theta(y_{1:T})\,\pi_0(d\theta).$$
Require every prefix normalizer $0<Z_{\theta,t}<\infty$ for $t=0,\ldots,T$
and $\pi_0$-almost every $\theta$, together with $0<C<\infty$; then the
parameter posterior is
$$\pi_y(d\theta)=C^{-1}L_\theta(y_{1:T})\,\pi_0(d\theta).$$

For fixed particle count $N\ge1$, let $U$ contain the full output of
[[alg-sequential-importance-resampling]] at $\theta$ and a terminal index
$K\in\{1,\ldots,N\}$ drawn conditionally with its final normalized weight.
Let $m_\theta(du)$ be this measurable auxiliary-variable probability kernel and
let $\widehat L_\theta(U)=\widehat Z_T$ be jointly measurable and nonnegative
in $(\theta,U)$. The required interface is
$$\int\widehat L_\theta(u)\,m_\theta(du)=L_\theta(y_{1:T});$$
[[thm-sequential-particle-estimator-is-unbiased]] supplies this identity under
its finite-horizon support and integrability hypotheses. Define the extended
target probability by
$$\widetilde\pi(d\theta,du)=C^{-1}\pi_0(d\theta)m_\theta(du)\widehat L_\theta(u).$$

Given current $(\theta,U)$, propose $\theta'\sim R(\theta,\cdot)$ and then
$U'\sim m_{\theta'}$. Apply the general Metropolis–Hastings construction
[[alg-metropolis-hastings-kernel]] to this proposal kernel and target
$\widetilde\pi$. On rejection retain the entire current pair $(\theta,U)$,
including its stored likelihood estimate and selected path index. When $\pi_0$
and $R$ have densities $p_0$ and $r$, and the current extended target density
is positive, the acceptance probability is
$$1\wedge\frac{p_0(\theta')\widehat L_{\theta'}(U')r(\theta\mid\theta')}{p_0(\theta)\widehat L_\theta(U)r(\theta'\mid\theta)}.$$
For the displayed density-ratio formula, initialize at a current state where
$p_0(\theta)\widehat L_\theta(U)>0$. The density-free version uses the
accepted-flow Radon–Nikodym construction in the cited general-state algorithm;
it does not evaluate a pointwise prior mass or require this density condition.
Proposed zero estimates are rejected.
The input is the current extended state $(\theta,U)$; output the proposed
extended state $(\theta',U')$ on acceptance and retain $(\theta,U)$ on
rejection.

The selected path stored in $U$ is part of the auxiliary state. Refreshing its
estimate after rejection defines the different Monte Carlo within Metropolis
procedure, not this algorithm.
