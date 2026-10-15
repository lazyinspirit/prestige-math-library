---
id: thm-berkson-error-slope-in-simple-linear-model
kind: theorem
title: "Berkson error preserves the simple linear regression slope"
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
      locator: "§§9.1–9.2, printed pp. 125–127"
    - title: "Keogh et al., STRATOS guidance on measurement error and misclassification, Part 1"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7450672/"
      locator: "§§2.1 and 3.1.1"
---

## Statement

Let $W,U,\epsilon,X,Y$ be square-integrable real random variables on one
probability space with
$\mathbb E[W]=\mathbb E[U]=\mathbb E[\epsilon]=0$, $U$ independent of $W$,
and $\epsilon$ independent of $W$. Put
$$X=W+U,\qquad Y=\alpha+\beta X+\epsilon,\qquad \alpha,\beta\in\mathbb R,$$
so $X$ has Berkson additive error relative to $W$. If
$\operatorname{Var}(W)>0$, the coefficient of the best affine $L^2$
predictor of $Y$ from $W$ is $\beta$. Independence between $U$ and
$\epsilon$ is not assumed or needed.

## Facts & Assumptions

**Given:** The square-integrable centered variables and separate independence hypotheses in the Statement.

[F1] The Berkson model has $X=W+U$, with centered $U$ independent of $W$ ([[def-measurement-error-models]]).

[F2] Variance and covariance are the centered-square and centered-product expectations ([[def-moments-variance-and-covariance]]).

[F3] Covariance is bilinear on finite linear combinations, including constants ([[thm-covariance-bilinearity-and-symmetry]]).

[F4] Independence of random variables means independence of their generated sigma-algebras ([[def-independent-random-elements]]).

[F5] For independent integrable real random variables, the expectation of their product factors ([[thm-expectation-of-products-of-independent-random-variables]]).

[F6] The one-predictor normal equation for the best affine $L^2$ predictor is $\gamma\operatorname{Var}(W)=\operatorname{Cov}(Y,W)$ ([[thm-normal-equations-for-best-affine-l2-prediction]]).

[F7] Square-integrable real variables are integrable on a probability space by Cauchy-Schwarz with the constant-one variable ([[cor-cauchy-schwarz-for-random-variables]]).

## Proof

1.1 The variables are integrable by [F7]. By [F4] and [F5], independence and centering give $\operatorname{Cov}(U,W)=\operatorname{Cov}(\epsilon,W)=0$. [given, F2, F4, F5, F7]

2.1 Since $X=W+U$, bilinearity [F3] and step 1.1 give $\operatorname{Cov}(Y,W)=\operatorname{Cov}(\alpha+\beta(W+U)+\epsilon,W)=\beta\operatorname{Var}(W)$. [given, F1, F2, F3, step 1.1, algebra]

3.1 The variance is positive by hypothesis. The normal equation [F6] therefore gives the unique slope $\gamma=\operatorname{Cov}(Y,W)/\operatorname{Var}(W)=\beta$. No covariance between $U$ and $\epsilon$ occurs in this calculation. [given, F6, step 2.1, algebra] ∎