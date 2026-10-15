---
id: ex-poisson-log-glm-one-step
kind: example
title: A one-observation Poisson-log Fisher-scoring step
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 7
deps:
  - def-generalized-linear-model
  - lem-glm-mean-and-variance-identities
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

Take $n=p=1$, $x_1=1$, $y_1=2$, and current value $\beta=0$. Use a Poisson response with canonical log link, $a(\phi)=1$, $b(\eta)=e^\eta$, and $c(y,\phi)=-\log(y!)$.

## Facts & Assumptions

**Given:** The scalar design $X=[1]$, response $y_1=2$, current $\beta=0$, and the Poisson-log family and link in the Example.

[F1] [[def-generalized-linear-model]]: the canonical link is $g=\tau$, equivalently $\theta_i=\eta_i$.

[F2] [[lem-glm-mean-and-variance-identities]]: the response mean is $b'(\theta_i)$ and its variance is $a(\phi)b''(\theta_i)$.

[F3] [[thm-glm-general-link-score-and-information]]: the expected score outer-product information has weights $w_i=\dot\mu_i^2/(a(\phi)V_i)$.

[F4] [[alg-fisher-scoring-irls]]: the working response and weights are $z_i=\eta_i+(y_i-\mu_i)/\dot\mu_i$ and $w_i=\dot\mu_i^2/(a(\phi)V_i)$.

[F5] [[thm-irls-is-fisher-scoring-step]]: when information is invertible, $\beta_{\mathrm{new}}=\beta+I(\beta)^{-1}U(\beta)$.

## Verification

1.1 Here $b'(0)=b''(0)=1$, so $\mu_1=V_1=\dot\mu_1=1$. By [F1] the natural parameter is $\theta_1=0$. The score is $y_1-\mu_1=1$, and [F3] gives $I=w_1=1$. [F1, F2, F3, algebra]

2.1 By [F4], $z_1=0+(2-1)/1=1$. The weighted least-squares objective is $(1-\gamma)^2$, minimized uniquely at $\gamma=1$. By [F5], the Fisher-scoring update is $0+1^{-1}\cdot1=1$, agreeing with IRLS. [F3, F4, F5, step 1.1, algebra] ∎
