---
id: thm-classical-error-attenuation-in-simple-linear-regression
kind: theorem
title: "Classical error attenuates the simple linear regression slope"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-measurement-error-models
  - def-moments-variance-and-covariance
  - thm-covariance-bilinearity-and-symmetry
  - def-independent-random-elements
  - thm-expectation-of-products-of-independent-random-variables
  - cor-cauchy-schwarz-for-random-variables
  - thm-normal-equations-for-best-affine-l2-prediction
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Hernán and Robins, Causal Inference: What If, Chapter 9"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_19aug26.pdf"
      locator: "§§9.1–9.2 and Fine Point 9.1, printed pp. 125–128"
    - title: "Keogh et al., STRATOS guidance on measurement error and misclassification, Part 1"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7450672/"
      locator: "§§2.1 and 3.1.1"
---

## Statement

Let $X,U,\epsilon,W,Y$ be square-integrable real random variables on one
probability space with
$\mathbb E[X]=\mathbb E[U]=\mathbb E[\epsilon]=0$,
$U$ independent of the random element $(X,\epsilon)$, and $\epsilon$
independent of $X$. Set
$$W=X+U,\qquad Y=\alpha+\beta X+\epsilon,\qquad \alpha,\beta\in\mathbb R,$$
so $W$ has classical additive error. If
$\operatorname{Var}(X)+\operatorname{Var}(U)>0$, the coefficient $\gamma$
of the best affine $L^2$ predictor of $Y$ from $W$ is
$$\gamma=\frac{\operatorname{Cov}(Y,W)}{\operatorname{Var}(W)}=\beta\frac{\operatorname{Var}(X)}{\operatorname{Var}(X)+\operatorname{Var}(U)}.$$
The attenuation factor lies in $[0,1]$. When both variances are positive, it
is strictly between $0$ and $1$, so for $\beta\ne0$ the coefficient has the
same sign as $\beta$ and smaller absolute value; when $\beta=0$, $\gamma=0$.
The boundary cases are: if $\operatorname{Var}(X)=0$, the factor is $0$; if
$\operatorname{Var}(U)=0$ and $\operatorname{Var}(X)>0$, it is $1$.

## Facts & Assumptions

**Given:** The square-integrable centered variables and independence hypotheses in the Statement.

[F1] The classical model has $W=X+U$, with centered $U$ independent of $X$ ([[def-measurement-error-models]]).

[F2] Variance and covariance are the centered-square and centered-product expectations ([[def-moments-variance-and-covariance]]).

[F3] Covariance is bilinear on finite linear combinations, including constants ([[thm-covariance-bilinearity-and-symmetry]]).

[F4] Independence of random variables means independence of their generated sigma-algebras ([[def-independent-random-elements]]).

[F5] For a finite independent family of integrable real random variables, the expectation of their product factors and the product is integrable ([[thm-expectation-of-products-of-independent-random-variables]]).

[F6] The best affine $L^2$ predictor satisfies the covariance normal equations; with one predictor $W$, its slope satisfies $\gamma\operatorname{Var}(W)=\operatorname{Cov}(Y,W)$ ([[thm-normal-equations-for-best-affine-l2-prediction]]).

[F7] Square-integrable real variables are integrable on a probability space: apply Cauchy-Schwarz with the constant-one variable ([[cor-cauchy-schwarz-for-random-variables]]).

## Proof

1.1 By [F7] the variables are integrable. Independence of $U$ from $(X,\epsilon)$ implies independence of $U$ from each coordinate, because the coordinate sigma-algebras are contained in that of the pair; together with $\epsilon$ independent of $X$, [F4] and [F5] give $\mathbb E[XU]=\mathbb E[\epsilon U]=\mathbb E[X\epsilon]=0$. Centering and [F2] therefore give $\operatorname{Cov}(X,U)=\operatorname{Cov}(\epsilon,U)=\operatorname{Cov}(X,\epsilon)=0$. [given, F2, F4, F5, F7]

2.1 By [F1], $W=X+U$; by bilinearity [F3] and the zero covariances in step 1.1, $$\operatorname{Cov}(Y,W)=\operatorname{Cov}(\alpha+\beta X+\epsilon,X+U)=\beta\operatorname{Var}(X).$$ The same expansion gives $$\operatorname{Var}(W)=\operatorname{Var}(X)+2\operatorname{Cov}(X,U)+\operatorname{Var}(U)=\operatorname{Var}(X)+\operatorname{Var}(U).$$ [given, F1, F2, F3, step 1.1, algebra]

3.1 The variance sum is positive by hypothesis, so [F6] determines the unique slope $\gamma=\operatorname{Cov}(Y,W)/\operatorname{Var}(W)$. Substitution from step 2.1 gives the displayed formula. [given, F6, step 2.1, algebra]

4.1 Nonnegative variances and a positive sum give $0\le\operatorname{Var}(X)/(\operatorname{Var}(X)+\operatorname{Var}(U))\le1$. Equality at $0$ occurs exactly when $\operatorname{Var}(X)=0$; equality at $1$ occurs exactly when $\operatorname{Var}(U)=0$. When both are positive the factor is strictly between the endpoints, so for $\beta\ne0$ step 3.1 gives a coefficient of the same sign and smaller absolute value; when $\beta=0$, step 3.1 gives $\gamma=0$, so no strict reduction holds. This proves the stated attenuation and boundary cases. [given, step 3.1, algebra] ∎
