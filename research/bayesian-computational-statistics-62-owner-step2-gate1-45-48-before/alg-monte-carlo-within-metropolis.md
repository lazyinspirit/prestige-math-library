---
id: alg-monte-carlo-within-metropolis
kind: algorithm
title: Monte Carlo within Metropolis
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 6
deps:
  - alg-pmmh
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Andrieu, Doucet, and Holenstein, Particle Markov chain Monte Carlo methods, §4.4 and discussion of pseudo-marginal updates"
      url: "https://www.stats.ox.ac.uk/~doucet/andrieu_doucet_holenstein_PMCMC.pdf"
    - title: "Särkkä and Svensson, Bayesian Filtering and Smoothing, 2nd ed., §16.3.5"
      url: "https://users.aalto.fi/~ssarkka/pub/bfs_book_2023_online.pdf"
---

## Definition

Use the parameter and likelihood-estimator inputs of [[alg-pmmh]], restricted
to the common-density case where the prior has density $p_0$ and the proposal
kernel has transition density $r(\theta'\mid\theta)$ with respect to a common
parameter reference measure. Initialize at a parameter with $p_0(\theta)>0$,
and assume $\widehat L_\vartheta(U)>0$ for $m_\vartheta$-almost every $U$ at
every parameter $\vartheta$ that the procedure can propose or visit. These
conditions make the displayed ratio defined almost surely. The input is the
current parameter $\theta$; the output is the next parameter.

At each iteration draw a fresh $U\sim m_\theta$, propose
$\theta'\sim R(\theta,\cdot)$, and independently draw $U'\sim m_{\theta'}$.
Accept $\theta'$ with probability
$$1\wedge\frac{p_0(\theta')\widehat L_{\theta'}(U')r(\theta\mid\theta')}{p_0(\theta)\widehat L_\theta(U)r(\theta'\mid\theta)}.$$
Output $\theta'$ on acceptance and $\theta$ on rejection. Discard both
auxiliary values before the next iteration and draw a new current estimate.

This is Monte Carlo within Metropolis (MCWM). It does not retain a single
extended state on rejection, so the pseudo-marginal invariance proof does not
apply. This definition makes no exactness or stationarity claim.
