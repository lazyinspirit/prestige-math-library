---
id: ex-bernoulli-logit-glm-one-step
kind: example
title: A one-observation Bernoulli-logit Fisher-scoring step
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 7
deps:
  - def-generalized-linear-model
  - thm-canonical-glm-score-and-hessian
  - thm-glm-general-link-score-and-information
  - alg-fisher-scoring-irls
  - thm-irls-is-fisher-scoring-step
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
---

## Example

Take $n=p=1$, $x_1=1$, $y_1=1$, and current value $\beta=0$. Use a Bernoulli response with canonical logit link, $a(\phi)=1$, and $b(\eta)=\log(1+e^\eta)$.

## Facts & Assumptions

**Given:** The scalar design $X=[1]$, response $y_1=1$, current $\beta=0$, and the Bernoulli-logit family and link in the Example.

[F1] [[def-generalized-linear-model]]: the canonical link is $g=\tau$, equivalently $\theta_i=\eta_i$.

[F2] [[thm-canonical-glm-score-and-hessian]]: under a common scale the score is $X^\mathsf T(y-\mu)/a(\phi)$.

[F3] [[thm-glm-general-link-score-and-information]]: the expected score outer-product information has weights $w_i=\dot\mu_i^2/(a(\phi)V_i)$.

[F4] [[alg-fisher-scoring-irls]]: the working response and weights are $z_i=\eta_i+(y_i-\mu_i)/\dot\mu_i$ and $w_i=\dot\mu_i^2/(a(\phi)V_i)$.

[F5] [[thm-irls-is-fisher-scoring-step]]: when information is invertible, $\beta_{\mathrm{new}}=\beta+I(\beta)^{-1}U(\beta)$.

## Verification

1.1 For the Bernoulli cumulant, $b'(0)=1/2$ and $b''(0)=1/4$, so $\mu_1=1/2$, $V_1=1/4$, and $\dot\mu_1=\mu_1(1-\mu_1)=1/4$. By [F1] the natural and linear predictors are both zero; [F2] gives $U=1-1/2=1/2$, and [F3] gives $I=w=1/4$. [F1, F2, F3, algebra]

2.1 By [F4], $z_1=0+(1-1/2)/(1/4)=2$. The weighted least-squares objective is $(1/4)(2-\gamma)^2$, whose unique minimizer is $\gamma=2$. By [F5], the Fisher-scoring update is $0+(1/4)^{-1}(1/2)=2$, the same value. [F2, F3, F4, F5, step 1.1, algebra] ∎
