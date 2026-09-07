---
id: cor-kolmogorov-two-series-sufficiency
title: "Kolmogorov two-series sufficiency"
kind: corollary
status: published
origin: pipeline
deps: ["thm-kolmogorov-convergence-criterion", "def-almost-sure-convergence-of-a-random-series", "lem-measurable-functions-preserve-independence", "lem-variance-and-covariance-identities-for-random-variables"]
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Theorem 3.11, p. 66"
      url: https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf
proof_strategy: "Apply the centered criterion and add the convergent deterministic series."
---

## Statement

Let $(X_n)_{n\ge1}$ be independent square-integrable real random variables. If $\sum_{n\ge1}\mathbb EX_n$ converges in $\mathbb R$ and $\sum_{n\ge1}\operatorname{Var}(X_n)<\infty$, then $\sum_{n\ge1}X_n$ converges almost surely and in $L^2$.

## Facts & Assumptions

[F1] [[thm-kolmogorov-convergence-criterion]]: For independent centered square-integrable real random variables $(X_n)_{n\ge1}$, if $\sum_{n\ge1}\operatorname{Var}(X_n)<\infty$, then $\sum_{n\ge1}X_n$ converges almost surely and in $L^2$ to the same finite real random variable.

[F2] [[lem-measurable-functions-preserve-independence]]: Let $(X_i)_{i\in I}$ be an independent family of random elements $X_i:(\Omega,\mathcal F,\mathbb P)\to(S_i,\Sigma_i)$. For each $i$, let $g_i:(S_i,\Sigma_i)\to(T_i,\mathcal T_i)$ be measurable. Then the family $(g_i\circ X_i)_{i\in I}$ is independent.

[F3] [[lem-variance-and-covariance-identities-for-random-variables]]: Let $X,Y$ be square-integrable real random variables on one probability space. Then $\operatorname{Var}(X)=\mathbb E[X^2]-\mathbb E[X]^2,$ $\operatorname{Cov}(X,Y)=\mathbb E[XY]-\mathbb E[X]\mathbb E[Y].$ Moreover, covariance is symmetric and bilinear on finite linear combinations. On finite full-power-set probability spaces these formulas reduce to the published finite identities.

## Proof

**Given:** The objects and hypotheses of the statement.

1.1 Set $Y_n=X_n-\mathbb EX_n$. These are independent centered square-integrable variables, and $\operatorname{Var}(Y_n)=\operatorname{Var}(X_n)$ by covariance bilinearity. The convergence criterion supplies an almost-sure and $L^2$ limit $Y$ for their series. [F2, F3, F1, given]

2.1 Let $a=\sum_n\mathbb EX_n$. The identity $\sum_{k=1}^nX_k=\sum_{k=1}^nY_k+\sum_{k=1}^n\mathbb EX_k$ gives pointwise convergence to $Y+a$ on the same event. Its $L^2$ error is at most the centered $L^2$ error plus $|\sum_{k=1}^n\mathbb EX_k-a|$, which tends to zero. This includes zero variances and conditionally convergent deterministic means. [step 1.1, given, algebra] ∎
