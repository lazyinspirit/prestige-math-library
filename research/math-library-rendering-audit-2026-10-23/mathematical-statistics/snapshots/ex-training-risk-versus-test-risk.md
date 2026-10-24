---
id: ex-training-risk-versus-test-risk
kind: example
title: "Zero training residual and positive test error"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 6
deps:
  - def-fixed-design-projection-estimator
  - thm-gaussian-projection-risk
  - def-moments-variance-and-covariance
  - def-independent-random-elements
  - thm-factorization-of-expectations-for-independent-variables
  - def-bias-and-mean-squared-error
  - def-loss-function-and-risk
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 2, §7"
      url: "https://arxiv.org/pdf/2310.19244v1"
    - title: "Sylvain Arlot, Model/estimator selection, Lecture on model selection, §1"
      url: "https://uq.math.cnrs.fr/media/210618_ecole_ete_cea-edf-inria__modsel_penmin_crossval.pdf"
---

## Example

Take one fixed-design observation with $X=[1]$, true fitted mean $\mu=0$, and
training response $Y=\varepsilon$. Let $\varepsilon'$ be an independent fresh
response error with the same mean-zero, variance-$\sigma^2$ law, where
$\sigma^2>0$. Least squares fits the one-dimensional column space exactly: its
training residual is zero, its expected error for estimating the mean is
$\sigma^2$, and its expected squared error for predicting the fresh response is
$2\sigma^2$.

## Facts & Assumptions

**Given:** A one-point fixed design $X=[1]$, $\mu=0$, integrable centered
square-integrable errors $\varepsilon,\varepsilon'$ with variance $\sigma^2>0$,
and independence of the training and fresh errors.

[F1] The fitted vector is the orthogonal projection of the observed response
onto the design column space ([[def-fixed-design-projection-estimator]]).

[F2] For a rank-one projection and centered variance-$\sigma^2$ noise, the
expected squared fitted-value error is $\sigma^2$
([[thm-gaussian-projection-risk]]).

[F3] Variance is the expected square of the centered variable
([[def-moments-variance-and-covariance]]).

[F4] Independent integrable random variables have factorized product
expectations ([[def-independent-random-elements]],
[[thm-factorization-of-expectations-for-independent-variables]]).

[F5] For a real estimator of a real target, mean squared error is the expected
squared difference; more generally risk is expected loss
([[def-bias-and-mean-squared-error]], [[def-loss-function-and-risk]]).

## Verification

1.1 Since $\operatorname{col}(X)=\mathbb R$, [F1] gives $\widehat\mu=Y=\varepsilon$. Therefore the training residual $|Y-\widehat\mu|^2$ is zero for every outcome. [F1, given]

1.2 By [F2], the expected squared error for estimating the true mean is $\mathbb E|\widehat\mu-\mu|^2=\sigma^2$. This is the scalar MSE and squared-loss risk by [F5]. [F2, F5, given]

1.3 The test-response error is $Y'-\widehat\mu=\varepsilon'-\varepsilon$. Expanding its square and using [F3] and [F4], $\mathbb E|\varepsilon'-\varepsilon|^2 =\mathbb E[(\varepsilon')^2]+\mathbb E[\varepsilon^2] -2\mathbb E[\varepsilon']\mathbb E[\varepsilon] =2\sigma^2$. [F3, F4, given, algebra]

2.1 The training residual, mean-estimation error, and fresh-response test error are respectively $0$, $\sigma^2$, and $2\sigma^2$ in this model, so these quantities are distinct. [F5, step 1.1, step 1.2, step 1.3] ∎
