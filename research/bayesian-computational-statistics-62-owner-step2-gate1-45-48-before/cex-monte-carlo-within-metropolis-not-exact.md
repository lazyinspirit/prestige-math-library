---
id: cex-monte-carlo-within-metropolis-not-exact
kind: counterexample
title: Refreshing the current estimate can destroy exactness
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 7
deps:
  - alg-monte-carlo-within-metropolis
  - thm-pmmh-exact-invariance
proof_strategy: direct
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Andrieu, Doucet, and Holenstein, Particle Markov chain Monte Carlo methods, §4.4"
      url: "https://www.stats.ox.ac.uk/~doucet/andrieu_doucet_holenstein_PMCMC.pdf"
    - title: "Särkkä and Svensson, Bayesian Filtering and Smoothing, 2nd ed., §16.3.5"
      url: "https://users.aalto.fi/~ssarkka/pub/bfs_book_2023_online.pdf"
---

## Statement refuted

Replacing an exact likelihood by an unbiased estimate freshly drawn at both the
current and proposed parameter in every Metropolis step necessarily leaves the
exact parameter posterior invariant.

## Facts & Assumptions

**Given:** The MCWM procedure in [[alg-monte-carlo-within-metropolis]].

[F1] [[alg-monte-carlo-within-metropolis]]: MCWM refreshes the current estimate at every iteration instead of retaining it after rejection.

## Counterexample

Take $\Theta=\{0,1\}$, uniform prior, exact likelihoods $L_0=L_1=1$, and a
proposal that always flips the parameter. At $0$ use estimator $\widehat L_0=1$
surely; at $1$ use $\widehat L_1\in\{1/2,3/2\}$ with equal probabilities.
Both estimators are strictly positive and unbiased.

1.1 Under MCWM, a move $0\to1$ accepts with conditional probabilities $1/2$ and $1$ for the two proposed estimates. Thus $P(0,1)=(1/2)(1/2)+(1/2)(1)=3/4$. [F1, given, algebra]

1.2 For a move $1\to0$, the fresh current estimate is $1/2$ or $3/2$ with equal probability and the proposed estimate is $1$. The acceptance probabilities are $1$ and $2/3$, so $P(1,0)=(1/2)(1)+(1/2)(2/3)=5/6$. [F1, given, algebra]

2.1 Starting from the claimed uniform posterior, the next mass at state $1$ is $(1/2)(3/4)+(1/2)(1-5/6)=11/24\ne1/2$. Hence the exact posterior is not invariant. The unequal cross-flows also violate detailed balance. [F1, step 1.1, step 1.2, algebra] ∎
