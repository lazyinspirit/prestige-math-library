---
id: ex-bootstrap-and-informed-proposal-particle-filter
kind: example
title: "Bootstrap and informed proposals on a two-state particle filter"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - def-feynman-kac-path-targets-and-normalizers
  - thm-feynman-kac-path-radon-nikodym-weight
  - alg-sequential-importance-resampling
  - alg-importance-sampling
  - thm-ordinary-importance-sampling-is-unbiased
  - thm-change-of-variables-for-expectation
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
proof_strategy: direct
axiom_use: "No choice axiom is used in this finite example; all spaces are finite and the derivative ratios are explicitly computed."
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Arnaud Doucet and Adam M. Johansen, A Tutorial on Particle Filtering and Smoothing: Fifteen Years Later, §§3.3–3.5"
      url: "https://www.stats.ox.ac.uk/~doucet/doucet_johansen_tutorialPF2011.pdf"
    - title: "Simo Särkkä and Lennart Svensson, Bayesian Filtering and Smoothing, 2nd ed., §§11.2–11.5"
      url: "https://users.aalto.fi/~ssarkka/pub/bfs_book_2023_online.pdf"
    - title: "Nicolas Chopin, Central Limit Theorem for Sequential Monte Carlo Methods and its Application to Bayesian Inference, §2.2"
      url: "https://arxiv.org/pdf/math/0508594"
---

## Example

Let $\mathsf X_0=\{*\}$ and $\mathsf X_1=\{a,b\}$ with counting sigma-algebras. Set $\mu_0=\nu_0=\delta_*$, $M_1(*,\{a\})=M_1(*,\{b\})=1/2$, $G_0(*)=1$, $G_1(a)=1/5$, and $G_1(b)=4/5$. Compare the bootstrap proposal $R_1=M_1$ with the informed proposal $R_1(*,\{a\})=1/5$, $R_1(*,\{b\})=4/5$. With one particle, the bootstrap normalizer estimate is random, while the informed proposal gives the exact normalizer at this horizon.

## Facts & Assumptions

**Given:** The finite model in the Example and the one-particle algorithm.

[F1] [[def-feynman-kac-path-targets-and-normalizers]]: The path target weights the initial/transition path law by the product of the nonnegative potentials, and normalizes only for a finite positive normalizer.

[F2] [[alg-sequential-importance-resampling]]: The initial and incremental particle weights are $G_0\rho_0$ and $G_kr_k$, and the normalizer estimate is the product of their sample averages.

[F3] [[alg-importance-sampling]]: For a target density $\widetilde p$ and proposal density $q$, the ordinary importance weight is proportional to $\widetilde p/q$.

[F4] [[thm-ordinary-importance-sampling-is-unbiased]]: Under positive proposal support on the target integrand and integrability, the ordinary importance-sampling estimator has expectation equal to the target expectation.

## Verification

**Given:** Counting measure on $\{a,b\}$, one particle, and the model specified above.

1.1 The unnormalized path masses are $\gamma_1(a)=M_1(*,\{a\})G_1(a)=1/10$ and $\gamma_1(b)=M_1(*,\{b\})G_1(b)=2/5$. Thus $Z_1=1/2$ and the normalized target masses are $(1/5,4/5)$. [F1, given, algebra]

2.1 For the bootstrap proposal, $\rho_0=1$ and $r_1(a)=r_1(b)=1$. The one-particle incremental weight is therefore $1/5$ with probability $1/2$ and $4/5$ with probability $1/2$, so its expectation is $1/2$ but it is not constant. [F2, step 1.1, algebra]

2.2 For the informed proposal, $r_1(a)=(1/2)/(1/5)=5/2$ and $r_1(b)=(1/2)/(4/5)=5/8$. Multiplication by $G_1$ gives $G_1(a)r_1(a)=G_1(b)r_1(b)=1/2$, so the one-particle normalizer estimate equals $Z_1$ for either sampled state. [F2, step 1.1, algebra]

3.1 Against counting measure, the unnormalized target density is $\widetilde p(a)=1/10$, $\widetilde p(b)=2/5$, and both proposal densities are strictly positive, so the support and finite-integrability hypotheses of [F4] hold. Setting $f=1$ in [F4] gives $\mathbb E_Q[\widetilde p(X)/q(X)]=Z_1$ after multiplying the unbiased normalized estimate by $Z_1$; the explicit bootstrap and informed weights above are exactly these ordinary importance-sampling ratios. [F3, F4, step 1.1, step 2.1, step 2.2, algebra] ∎

## Remarks

The informed proposal is tailored to this single fixed potential and horizon. This finite example makes no claim that such a proposal is generally available or computationally cheaper.
