---
id: ex-gaussian-reparameterization-and-score-gradient
kind: example
title: "Gaussian reparameterization gives two gradient estimators"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-pathwise-simulation-gradient-estimator
  - thm-pathwise-simulation-gradient-is-unbiased-under-envelope
  - def-score-and-fisher-information
  - thm-likelihood-ratio-gradient-identity-on-fixed-support
  - def-standard-normal-and-normal-laws
  - lem-gaussian-even-moment-bound-for-brownian-increments
  - lem-normal-location-scale-density
  - thm-integration-against-a-density
  - thm-change-of-variables-for-expectation
  - def-moments-variance-and-covariance
  - lem-variance-and-covariance-identities-for-random-variables
  - def-axiom-of-choice
  - def-countable-choice
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - cor-expectation-linearity-monotonicity-and-modulus-bound
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
justified_by: []
verification:
  precheck: pass
---

## Example

Let $Z\sim N(0,1)$, set $X_\theta=\theta+Z$, and use payoff $H(x)=x$. The objective is $J(\theta)=\mathbb E X_\theta=\theta$. The pathwise estimator is constant $1$; the score estimator is $X_\theta(X_\theta-\theta)$, which is unbiased and has variance $\theta^2+2$.

## Facts & Assumptions

**Given:** A standard normal $Z$, the affine representation $X_\theta=\theta+Z$, and the identity payoff $H(x)=x$.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; AC is inherited by the normal-law and score interfaces below.

[F1] [[def-standard-normal-and-normal-laws]]: $Z$ has symmetric density $\phi(z)=(2\pi)^{-1/2}e^{-z^2/2}$, and $X_\theta$ has density $p_\theta(x)=\phi(x-\theta)$ on $\mathbb R$.

[F2] [[lem-gaussian-even-moment-bound-for-brownian-increments]]: $\mathbb E Z^2=1$ and $\mathbb E Z^4=3$.

[F3] [[def-pathwise-simulation-gradient-estimator]]: with the same $Z$ held fixed, the pathwise estimator is $\partial_\theta H(X_\theta)$.

[F4] [[thm-pathwise-simulation-gradient-is-unbiased-under-envelope]]: an integrably dominated continuous pathwise derivative is the derivative of the expected payoff and has finite variance under its second-moment hypothesis.

[F5] [[def-score-and-fisher-information]]: on positive density support the score is $\partial_\theta\log p_\theta$.

[F6] [[thm-likelihood-ratio-gradient-identity-on-fixed-support]]: under fixed support, dominated density differentiation, and a finite weighted second moment, $\partial_\theta\mathbb E_\theta H=\mathbb E_\theta[H S_\theta]$.

[F7] [[lem-normal-location-scale-density]]: $N(0,2)$ has density $(4\pi)^{-1/2}e^{-z^2/4}$.

[F8] [[thm-integration-against-a-density]]: expectation of a nonnegative or integrable function equals its integral against the law's density.

[F9] [[thm-change-of-variables-for-expectation]]: if $Z_2=\sqrt2 Z$ with $Z\sim N(0,1)$, then $\mathbb E Z_2^2=2\mathbb E Z^2$.

[F10] [[def-moments-variance-and-covariance]] and [[lem-variance-and-covariance-identities-for-random-variables]]: variance is the centered second moment and equals the second moment minus squared mean.

[F11] [[def-axiom-of-choice]], [[def-countable-choice]] and [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]: AC supplies Countable Choice, and applying change of variables to reflection $z\mapsto-z$ with the even density in [F1] shows that the standard normal law is symmetric.

[F12] [[thm-change-of-variables-for-expectation]] and [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: integrable functions of a random variable may be integrated against its law, and expectation is linear.

## Verification

1.1 From [F2], $2|Z|\le1+Z^2$ makes $Z$ integrable. By [F11], the law is symmetric; [F12] therefore gives $\mathbb E Z=\mathbb E[-Z]=-\mathbb E Z$, so $\mathbb E Z=0$. Linearity in [F12] gives $\mathbb E X_\theta=\theta$. The pathwise payoff derivative is $1$ by [F3], has envelope $M=1$ and second moment $1$, so [F4] gives the correct derivative $J'(\theta)=1$ and variance zero. [given, F1, F2, F3, F4, F11, F12, algebra]

1.2 Differentiating $\log p_\theta(x)=-\frac12(x-\theta)^2-\frac12\log(2\pi)$ gives $S_\theta(x)=x-\theta$. The support is the fixed set $\mathbb R$. [A1, F1, F5, algebra]

1.3 Fix $\theta_0$ and restrict $\eta$ to $|\eta-\theta_0|<1$. With $z=x-\theta_0$ and $a=\eta-\theta_0$, $(z-a)^2\ge z^2/2-a^2$, while $|x||x-\eta|\le(|z|+|\theta_0|)(|z|+1)$. Hence $|x\,\partial_\eta p_\eta(x)|\le C_{\theta_0}(1+z^2)e^{-z^2/4}$ for a finite constant $C_{\theta_0}$. By [F7]–[F9], the integral of this majorant is a constant times $\mathbb E[1+Z_2^2]<\infty$ for $Z_2\sim N(0,2)$. Also $2|Z|^3\le Z^2+Z^4$ makes $Z^3$ integrable by [F2]; symmetry in [F11] and [F12] gives $\mathbb E Z^3=0$. Therefore $\mathbb E_\theta[X_\theta^2S_\theta(X_\theta)^2]=\mathbb E[(\theta Z+Z^2)^2]=\theta^2+3<\infty$ by [F2], so [F6] applies. [A1, F1, F2, F6, F7, F8, F9, F11, F12, algebra]

2.1 By [F6], the score estimator has mean $J'(\theta)=1$. Its variance is $\mathbb E[(\theta Z+Z^2)^2]-1=\theta^2+3-1=\theta^2+2$, using [F2] and [F10]. [A1, F2, F6, F10, step 1.1, step 1.3, algebra] ∎
