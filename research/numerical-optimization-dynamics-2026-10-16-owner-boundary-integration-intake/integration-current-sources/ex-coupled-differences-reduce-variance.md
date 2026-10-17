---
id: ex-coupled-differences-reduce-variance
kind: example
title: "Common random numbers can remove finite-difference noise"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-coupled-simulation-finite-difference-estimator
  - prop-coupled-simulation-difference-variance-identity
  - def-standard-normal-and-normal-laws
  - lem-gaussian-even-moment-bound-for-brownian-increments
  - def-axiom-of-choice
  - def-countable-choice
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-change-of-variables-for-expectation
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - def-moments-variance-and-covariance
  - lem-variance-and-covariance-identities-for-random-variables
  - thm-factorization-of-expectations-for-independent-variables
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

Assume AC. Let $Z\sim N(0,1)$ and let one simulation output be $Y(\theta,Z)=\theta+Z$, so $J(\theta)=\theta$. Using the same $Z$ at $\theta+c$ and $\theta-c$ gives a central-difference estimate identically equal to $1$. Using independent $Z_+$ and $Z_-$ gives variance $1/(2c^2)$.

## Facts & Assumptions

**Given:** A standard normal noise variable and the simulator $Y(\theta,Z)=\theta+Z$.

[F1] [[def-coupled-simulation-finite-difference-estimator]]: the paired estimate is $(Y^+-Y^-)/(2c)$, with the joint law fixed by the coupling.

[F2] [[prop-coupled-simulation-difference-variance-identity]]: the variance is $(\operatorname{Var}Y^++\operatorname{Var}Y^--2\operatorname{Cov}(Y^+,Y^-))/(4c^2)$.

[F3] [[def-standard-normal-and-normal-laws]], [[def-axiom-of-choice]], [[def-countable-choice]] and [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]: the density $\phi(z)$ is even, and reflection $z\mapsto-z$ preserves its probability measure, so the standard normal law is symmetric.

[F4] [[thm-factorization-of-expectations-for-independent-variables]]: independent integrable random variables have factorized product expectation.

[F5] [[lem-gaussian-even-moment-bound-for-brownian-increments]] gives $\mathbb E Z^2=1$; [[thm-change-of-variables-for-expectation]] and symmetry in [F3] then give $\mathbb E Z=0$. [[cor-expectation-linearity-monotonicity-and-modulus-bound]] gives linearity of expectation.

[F6] [[def-moments-variance-and-covariance]] and [[lem-variance-and-covariance-identities-for-random-variables]]: $\operatorname{Var}(Z)=\mathbb E[Z^2]-(\mathbb E Z)^2$.

## Verification

1.1 By [F5], $2|Z|\le1+Z^2$ gives integrability, and symmetry in [F3] implies $\mathbb E Z=\mathbb E[-Z]=-\mathbb E Z$, hence $\mathbb E Z=0$. Therefore [F5] gives $J(\theta)=\mathbb E[\theta+Z]=\theta$, as stated; [F5] and [F6] also give $\operatorname{Var}(Z)=1$. With a shared $Z$, $Y(\theta+c,Z)-Y(\theta-c,Z)=2c$ for every outcome. Thus the coupled estimate is exactly $1$ and has variance zero. [given, F1, F3, F5, F6, algebra]

1.2 With independent $Z_+,Z_-$, the estimate is $1+(Z_+-Z_-)/(2c)$. Each noise has the same mean zero and variance one just proved; by [F4] their product expectation factors, so their covariance is zero. [F3, F4, F5, F6, algebra]

2.1 Applying [F2] gives variance $(1+1)/(4c^2)=1/(2c^2)$. The variance contrast is caused by the coupling covariance; common random numbers do not guarantee this benefit for every payoff. [F2, step 1.1, step 1.2, algebra] ∎
