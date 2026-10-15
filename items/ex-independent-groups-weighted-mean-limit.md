---
id: ex-independent-groups-weighted-mean-limit
kind: example
title: Weighted means from two independent subject groups
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-identically-distributed-and-iid-random-variables
  - def-independent-families-of-event-classes
  - def-moments-variance-and-covariance
  - thm-independent-groups-terminal-influence-limit
  - def-axiom-of-choice
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Example

Assume AC. Let $X_{1i}$ be IID Bernoulli$(p_1)$ and $X_{2i}$ IID Bernoulli$(p_2)$, with the two subject groups independent. Let deterministic sample sizes satisfy $n_1+n_2=n$, $n_1/n\to\rho\in(0,1)$, and $n_2/n\to1-\rho$. For $g\in\{1,2\}$ define $\bar X_g=n_g^{-1}\sum_{i=1}^{n_g}X_{gi}$. For the fixed target $\theta=\rho p_1+(1-\rho)p_2$, use the fixed-allocation-weight estimator $\hat\theta_n=\rho\bar X_1+(1-\rho)\bar X_2$.

## Facts & Assumptions

**Given:** The two independent Bernoulli groups and estimator in the Example. Find its exact group influence expansion and limit.

[A1] In group $g$, $P(X_{gi}=1)=p_g$ and $P(X_{gi}=0)=1-p_g$; the observations are IID within groups and the two groups are independent.

[A2] Assume AC. [[def-axiom-of-choice]]

[F1] [[def-identically-distributed-and-iid-random-variables]]: IID means a common law and mutual independence of the whole family.

[F2] [[def-independent-families-of-event-classes]]: For every finite selection of distinct independent indices and one event from each selected class, the probability of their intersection is the product of their probabilities.

[F3] [[def-moments-variance-and-covariance]]: For a square-integrable real random variable $X$, $\operatorname{Var}(X)=E[(X-E X)^2]$.

[F4] [[thm-independent-groups-terminal-influence-limit]]: For a fixed finite family of independent IID groups, the covariance of the terminal normal limit is $\sum_g\rho_g^{-1}\Sigma_g$, provided the stated group expansion and hypotheses hold.

## Verification

1.1 Put $\phi_1(x)=\rho(x-p_1)$ and $\phi_2(x)=(1-\rho)(x-p_2)$. The measurable maps preserve within-group identical laws and the finite event-product identities for independence across groups, so their sampled values meet [F1] and [F2], as required by [F4]. By [A1] and [F3], they are centered, square-integrable group contributions with variances $\Sigma_1=\rho^2p_1(1-p_1)$ and $\Sigma_2=(1-\rho)^2p_2(1-p_2)$. The identity $\sqrt n(\hat\theta_n-\theta)=\sqrt{n/n_1}\,n_1^{-1/2}\sum_{i=1}^{n_1}\phi_1(X_{1i})+\sqrt{n/n_2}\,n_2^{-1/2}\sum_{i=1}^{n_2}\phi_2(X_{2i})$ is exact, so its remainder is zero. [A1, F1, F2, F3, F4, algebra]

2.1 The covariance in [F4] is $\rho^{-1}\Sigma_1+(1-\rho)^{-1}\Sigma_2=\rho p_1(1-p_1)+(1-\rho)p_2(1-p_2)$. Thus $\sqrt n(\hat\theta_n-\theta)$ converges to the centered normal with this variance. The formula includes $p_g\in\{0,1\}$, where the corresponding group variance is zero. [A2, F4, step 1.1, algebra] ∎