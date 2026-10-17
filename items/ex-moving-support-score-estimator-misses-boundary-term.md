---
id: ex-moving-support-score-estimator-misses-boundary-term
kind: example
title: "A moving uniform support contributes a missing score boundary term"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-score-and-fisher-information
  - def-pathwise-simulation-gradient-estimator
  - def-simulation-gradient-objective-and-payoff-oracle
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - thm-integration-against-a-density
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
justified_by: []
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Example

For $\theta>0$, let $X_\theta\sim\operatorname{Unif}(0,\theta)$ and use constant payoff $H(x)=1$. The objective is $J(\theta)=1$, so $J'(\theta)=0$. The pathwise representation $X_\theta=\theta U$, $U\sim\operatorname{Unif}(0,1)$, has derivative estimator $0$. The interior score is $-1/\theta$, so $\mathbb E[H(X_\theta)S_\theta(X_\theta)]=-1/\theta$; it misses the moving endpoint contribution $+1/\theta$.

## Facts & Assumptions

**Given:** $\theta>0$, the density $p_\theta(x)=\theta^{-1}\mathbf1_{(0,\theta)}(x)$ with respect to Lebesgue measure, and the constant payoff $H(x)=1$.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; AC is inherited by the score definition.

[F1] [[def-score-and-fisher-information]]: on the positive-density set the score is $\partial_\theta\log p_\theta(x)$.

[F2] [[def-pathwise-simulation-gradient-estimator]]: in a representation using a fixed random input $U$, the pathwise estimator is the derivative with $U$ held fixed.

[F3] [[def-simulation-gradient-objective-and-payoff-oracle]]: an objective is the expectation of its integrable simulation payoff.

[F4] [[thm-integration-against-a-density]]: expectation under density $p_\theta$ is integration of the payoff times $p_\theta$ against Lebesgue measure.

[F5] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: the expectation of an integrable constant random variable is that constant.

## Verification

1.1 The density is normalized because $\int_0^\theta \theta^{-1}\,dx=1$. By [F3] and [F4], the constant payoff has $J(\theta)=\int_0^\theta\theta^{-1}\,dx=1$, hence $J'(\theta)=0$. In the representation $X_\theta=\theta U$, $H(X_\theta)=1$ for every $U$, so its pathwise derivative is zero by [F2]. [given, F2, F3, F4, algebra]

2.1 On $0<x<\theta$, $p_\theta(x)=1/\theta$, so [F1] gives $S_\theta(x)=-1/\theta$ almost surely under $P_\theta$. Since $H=1$, the score product is the constant $-1/\theta$ almost surely, and [F5] gives $\mathbb E_\theta[H(X_\theta)S_\theta(X_\theta)]=-1/\theta$. This differs from $J'(\theta)=0$, so the fixed-support score identity does not apply. [A1, F1, F5, step 1.1, algebra]

3.1 The integral is $J(\theta)=\theta\cdot\theta^{-1}$. Differentiating this product gives the interior density-derivative contribution $\int_0^\theta H(x)\partial_\theta(\theta^{-1})\,dx=-1/\theta$ and the moving-endpoint contribution $H(\theta)p_\theta(\theta^-)=1/\theta$, where $p_\theta(\theta^-)$ is the left limit of the density. Their sum is zero, exactly $J'(\theta)$ from step 1.1; the interior score term alone omits this boundary correction. [given, step 1.1, step 2.1, algebra] ∎
