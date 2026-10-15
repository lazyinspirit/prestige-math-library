---
id: ex-pseudo-marginal-rejection
kind: example
title: Pseudo-marginal rejection retains the current likelihood estimate
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 7
deps:
  - alg-pmmh
  - thm-pmmh-exact-invariance
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Andrieu, Doucet, and Holenstein, Particle Markov chain Monte Carlo methods, §4.4"
      url: "https://www.stats.ox.ac.uk/~doucet/andrieu_doucet_holenstein_PMCMC.pdf"
    - title: "Särkkä and Svensson, Bayesian Filtering and Smoothing, 2nd ed., §16.3.5"
      url: "https://users.aalto.fi/~ssarkka/pub/bfs_book_2023_online.pdf"
---

## Example

Let $\Theta=\{0,1\}$ with uniform prior, exact likelihoods $L_0=L_1=1$, and
a symmetric proposal that flips the parameter. At $\theta=0$ let the unbiased
likelihood estimator be $\widehat L_0=1$ surely. At $\theta=1$ let
$\widehat L_1=1/2$ or $3/2$, each with probability $1/2$. The pseudo-marginal
target on parameter and estimate has masses
$$\widetilde\pi(0,1)=1/2,\qquad \widetilde\pi(1,1/2)=1/8,\qquad \widetilde\pi(1,3/2)=3/8.$$
The parameter marginal is uniform, although the estimate conditional on
$\theta=1$ is size-biased. A rejection at $(1,3/2)$ retains $3/2$ for the next
ratio calculation.

## Facts & Assumptions

**Given:** The PMMH target and update in [[alg-pmmh]].

[F1] [[alg-pmmh]]: the extended target is proportional to prior times auxiliary-law density times the nonnegative unbiased likelihood estimate, and a rejected proposal retains the full current auxiliary state.

[F2] [[thm-pmmh-exact-invariance]]: under unbiasedness and finite positive evidence, the parameter marginal of the extended target is the exact posterior.

## Verification

**Given:** The finite two-point example above.

1.1 The prior mass is $1/2$ at each parameter. Multiplying by the estimator law and its value gives masses $1/2$ at $(0,1)$, $(1/2)(1/2)(1/2)=1/8$ at $(1,1/2)$, and $(1/2)(1/2)(3/2)=3/8$ at $(1,3/2)$. These sum to one, and the two masses over $\theta=1$ sum to $1/2$. [F1, algebra]

2.1 From $(0,1)$ the proposal $(1,3/2)$ occurs with probability $1/2$ and is accepted with probability one, so the stationary flow is $(1/2)(1/2)=1/4$. In reverse, from $(1,3/2)$ the proposal $(0,1)$ is accepted with probability $(1)/(3/2)=2/3$, so its flow is $(3/8)(2/3)=1/4$. The extended ratio uses the retained value $3/2$ until that move is accepted or rejected. [F1, F2, step 1.1, algebra] ∎
