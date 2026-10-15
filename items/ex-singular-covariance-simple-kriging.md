---
id: ex-singular-covariance-simple-kriging
kind: example
title: "Singular observation covariance in simple kriging"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-simple-ordinary-and-universal-kriging
  - def-finite-probability-space-and-event
  - def-finite-real-random-variable-and-distribution
  - def-expectation-on-a-finite-probability-space
  - def-variance-and-covariance
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Let $\Omega=\{-1,1\}$ have equal probability and let $U(\omega)=\omega$.
Take three distinct sites $s_0,s_1,s_2$ and set
$X(s_0)=X(s_1)=X(s_2)=U$. The known mean is zero and
$Z=(X(s_1),X(s_2))^\top=(U,U)^\top$ predicts $Y=X(s_0)=U$. Then
$$\Sigma=\begin{pmatrix}1&1\\1&1\end{pmatrix}$$
is singular, so the inverse formula for simple kriging is unavailable.
Nevertheless,
$$\mathbb E[(Y-\lambda^\top Z)^2]=(1-\lambda_1-\lambda_2)^2,$$
so the mean-square error is zero exactly for weight pairs with
$\lambda_1+\lambda_2=1$. Different coefficient pairs such as $(1,0)$ and
$(0,1)$ give the same predictor $U$.

## Facts & Assumptions

**Given:** The equal-weight two-outcome probability space, its coordinate variable $U$, and the field and sites in the example.

[F1] [[def-simple-ordinary-and-universal-kriging]]: the simple predictor is $m_0+\lambda^\top(Z-m)$, and its inverse formula requires a positive-definite observation covariance matrix.

[F2] [[def-finite-probability-space-and-event]] and [[def-finite-real-random-variable-and-distribution]]: a finite probability space assigns outcome weights summing to one, and a real random variable is a function on its outcomes.

[F3] [[def-expectation-on-a-finite-probability-space]]: expectation is the finite weighted sum over outcomes.

[F4] [[def-variance-and-covariance]]: variance and covariance are the expectations of centered squares and centered products.

## Verification

**Given:** The two equally weighted outcomes and $U(\omega)=\omega$.

1.1 Direct finite summation using [F2] and [F3] gives $\mathbb E[U]=(-1+1)/2=0$ and $\mathbb E[U^2]=1$, so [F4] gives $\operatorname{Var}(U)=1$ and $\operatorname{Cov}(U,U)=1$. Thus the displayed observation covariance has determinant $1-1=0$ and is singular. [given, F2, F3, F4, algebra]

2.1 The simple predictor is $\lambda_1U+\lambda_2U$ because both known means are zero. Therefore $Y-\lambda^\top Z=(1-\lambda_1-\lambda_2)U$, whose squared expectation is $(1-\lambda_1-\lambda_2)^2\mathbb E[U^2]=(1-\lambda_1-\lambda_2)^2$. It is zero exactly for $\lambda_1+\lambda_2=1$, and both $(1,0)$ and $(0,1)$ give the same random variable $U$. [F1, F3, F4, step 1.1, algebra] ∎