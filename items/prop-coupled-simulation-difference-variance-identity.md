---
id: prop-coupled-simulation-difference-variance-identity
kind: proposition
title: "Coupled finite differences have a covariance-controlled variance"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-coupled-simulation-finite-difference-estimator
  - def-moments-variance-and-covariance
  - lem-variance-and-covariance-identities-for-random-variables
  - thm-factorization-of-expectations-for-independent-variables
provenance:
  statement: literature-derived
  proof: ai-altered
justified_by: []
verification:
  precheck: pass
proof_strategy: direct
sources:
  references:
    - title: "Michael C. Fu, Stochastic Gradient Estimation, preprint of Handbook of Simulation Optimization, §§3.1 and 3.3.4"
      url: "https://drum.lib.umd.edu/bitstreams/87a3c71b-9eca-4d5d-9287-e1e432f68a69/download"
---

## Statement

Let $Y^+$ and $Y^-$ be square-integrable real simulation outputs with any specified joint law, and let $h>0$. The central-difference estimator $D=(Y^+-Y^-)/(2h)$ satisfies
$\operatorname{Var}(D)=\frac{\operatorname{Var}(Y^+)+\operatorname{Var}(Y^-)-2\operatorname{Cov}(Y^+,Y^-)}{4h^2}.$
The formula applies in particular when the two outputs use common random numbers as in [[def-coupled-simulation-finite-difference-estimator]]. Positive covariance reduces this variance relative to independent outputs with the same marginals; coupling alone does not guarantee positive covariance.

## Facts & Assumptions

**Given:** Square-integrable real outputs $Y^+,Y^-$ on one probability space and a scalar $h>0$.

[F1] [[def-moments-variance-and-covariance]]: variance and covariance are the expectations of centered squares and products.

[F2] [[lem-variance-and-covariance-identities-for-random-variables]]: $\operatorname{Var}(X)=\mathbb E[X^2]-\mathbb E[X]^2$ and $\operatorname{Cov}(X,Y)=\mathbb E[XY]-\mathbb E[X]\mathbb E[Y]$.

[F3] [[def-coupled-simulation-finite-difference-estimator]]: the central difference is $(Y^+-Y^-)/(2h)$, with the joint law fixed by the simulation coupling.

[F4] [[thm-factorization-of-expectations-for-independent-variables]]: independent integrable factors have product expectation equal to the product of their expectations.

## Proof

1.1 By [F3], $D=(Y^+-Y^-)/(2h)$. Centering gives $D-\mathbb E D=\frac{(Y^+-\mathbb E Y^+)-(Y^--\mathbb E Y^-)}{2h}.$ All terms are square-integrable by the hypotheses. [given, F1, F3, algebra]

2.1 Squaring step 1.1, taking expectations, and expanding the cross term by [F1]–[F2] yields $\operatorname{Var}(D)=\frac{\operatorname{Var}(Y^+)+\operatorname{Var}(Y^-)-2\operatorname{Cov}(Y^+,Y^-)}{4h^2}.$ [step 1.1, F1, F2, algebra]

3.1 For independent outputs, [F4] gives $\mathbb E[Y^+Y^-]=\mathbb E[Y^+]\mathbb E[Y^-]$, so [F2] makes their covariance zero. Thus the right side in step 2.1 is no larger than the independent-output variance exactly when the chosen coupling has nonnegative covariance; no such sign is forced by sharing a random input. [F2, F4, step 2.1, algebra] ∎
