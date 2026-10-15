---
id: thm-pmmh-exact-invariance
kind: theorem
title: PMMH preserves the exact parameter posterior
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 6
deps:
  - def-axiom-of-choice
  - alg-pmmh
  - alg-metropolis-hastings-kernel
  - thm-metropolis-hastings-kernel-is-reversible-and-invariant
  - thm-sequential-particle-estimator-is-unbiased
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
proof_strategy: direct
axiom_use: "Inherits AC only through the path Radon–Nikodym construction and the general Metropolis–Hastings kernel. The marginalization and finite likelihood-estimator identities are measure integrations."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Andrieu, Doucet, and Holenstein, Particle Markov chain Monte Carlo methods, §4.4 and Theorem 4"
      url: "https://www.stats.ox.ac.uk/~doucet/andrieu_doucet_holenstein_PMCMC.pdf"
    - title: "Särkkä and Svensson, Bayesian Filtering and Smoothing, 2nd ed., §16.3.5"
      url: "https://users.aalto.fi/~ssarkka/pub/bfs_book_2023_online.pdf"
---

## Statement

Under the hypotheses of [[alg-pmmh]], assume the unbiasedness identity there
holds and the evidence $C$ is finite and positive. Then $\widetilde\pi$ is a
probability measure whose parameter marginal is $\pi_y$. With the terminal
index included in $U$, the joint marginal of $(\theta,X_{0:T}^{K})$ is the
posterior $C^{-1}\pi_0(d\theta)\gamma_{\theta,T}(dx_{0:T})$. The PMMH
transition kernel is reversible, hence invariant, for $\widetilde\pi$; its
parameter and selected-path marginals are therefore exact for every fixed
$N\ge1$. This is an invariance result only; it asserts no irreducibility,
uniqueness, convergence rate, or mixing speed.

## Facts & Assumptions

**Given:** The hypotheses of [[alg-pmmh]], including the finite positive evidence, the unbiased particle likelihood estimate, and retention of the full auxiliary state after rejection.

[A1] [[def-axiom-of-choice]]: the path Radon–Nikodym suppliers assume AC.

[F1] [[alg-pmmh]]: $\widetilde\pi(d\theta,du)=C^{-1}\pi_0(d\theta)m_\theta(du)\widehat L_\theta(u)$, and the proposal on $(\theta,u)$ is $R(\theta,d\theta')m_{\theta'}(du')$.

[F2] [[thm-sequential-particle-estimator-is-unbiased]]: for each nonnegative measurable path test function $\varphi$ with finite target integral, $\mathbb E[\widehat Z_T\widehat\pi_T^N(\varphi)]=\gamma_{\theta,T}(\varphi)$; in particular $\mathbb E[\widehat Z_T]=L_\theta(y_{1:T})$.

[F3] [[alg-metropolis-hastings-kernel]]: the general accepted-flow construction defines the accept/reject transition rule and retains rejected proposals as self-transitions.

[F4] [[thm-metropolis-hastings-kernel-is-reversible-and-invariant]]: that rule is a probability kernel, reversible and invariant for its probability target.

[F5] [[def-invariant-and-stationary-distribution-for-a-markov-kernel]]: invariance means equality of the target measure after integrating the transition kernel.

## Proof

**Given:** [A1] and the hypotheses in the Statement.

1.1 Integrating [F1] first in $u$ gives $C^{-1}\pi_0(d\theta)\mathbb E_{m_\theta}\widehat L_\theta=C^{-1}L_\theta\pi_0(d\theta)$ by [F2]. Its total mass is $C^{-1}\int L_\theta\,d\pi_0=1$, so $\widetilde\pi$ is a probability and its parameter marginal is $\pi_y$. [F1, F2, given, algebra]

2.1 For a measurable set $B$ of parameter-path pairs, summing over the terminal index gives $\widetilde\pi\{(\theta,X^K_{0:T})\in B\}=C^{-1}\int\pi_0(d\theta)\,\mathbb E\!\left[\widehat Z_T\sum_{k=1}^NW_T^k1_B(\theta,X^k_{0:T})\right]=C^{-1}\int\pi_0(d\theta)\,\gamma_{\theta,T}(B_\theta)$, because the sum is the weighted empirical path integral in [F2]. Thus the selected path marginal is the joint posterior. [F1, F2, step 1.1, algebra]

2.2 The proposal in [F1] is a probability kernel because it is the composition of the probability kernel $R$ and the auxiliary probability kernels $m_{\theta'}$. Applying [F3] to this target and proposal defines the PMMH accept/reject rule, which is a probability kernel by [F4]; in the common-density case the factors $m_\theta(u)$ cancel between the target and proposal ratios, leaving exactly the displayed ratio in [[alg-pmmh]]. On rejection, [F3] retains the current extended state. [A1, F1, F3, F4, step 1.1, construct]

3.1 By [F4], this extended-space kernel is reversible and invariant for $\widetilde\pi$. Applying the measurable coordinate projections $(\theta,u)\mapsto\theta$ and $(\theta,u)\mapsto(\theta,X^K_{0:T})$ to the invariant law gives the exact marginals in steps 1.1 and 2.1, in the sense of [F5]. [F1, F4, F5, step 1.1, step 2.1] ∎
