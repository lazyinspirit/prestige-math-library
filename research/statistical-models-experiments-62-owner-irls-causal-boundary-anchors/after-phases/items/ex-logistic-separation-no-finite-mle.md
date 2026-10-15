---
id: ex-logistic-separation-no-finite-mle
kind: example
title: Complete separation prevents a finite logistic MLE
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 6
deps:
  - def-generalized-linear-model
  - thm-canonical-glm-score-and-hessian
  - thm-canonical-glm-strict-concavity
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

Let $n=2$, $p=1$, $x_1=-1$, $x_2=1$, and responses $(y_1,y_2)=(0,1)$. Use independent Bernoulli responses with canonical logit link and parameter domain $\Theta=\mathbb R$. The two observations are completely separated by the sign of $x_i$. Here a finite maximum-likelihood estimate means a finite $\beta$ attaining the supremum of the log likelihood.

## Facts & Assumptions

**Given:** The design column $X=(-1,1)^\mathsf T$, responses $(0,1)$, the Bernoulli cumulant $b(\eta)=\log(1+e^\eta)$, and $\beta\in\mathbb R$.

[F1] [[def-generalized-linear-model]]: the canonical link is the choice $g=\tau$, equivalently $\theta_i=\eta_i$.

[F2] [[thm-canonical-glm-score-and-hessian]]: the canonical score is $X^\mathsf T(y-\mu)$ when $a(\phi)=1$.

[F3] [[thm-canonical-glm-strict-concavity]]: positive $b''$ and full column rank imply strict concavity, but the conclusion does not assert existence of a finite maximizer.

## Verification

1.1 The column $X=(-1,1)^\mathsf T$ has rank one, and $b''(\eta)=e^\eta/(1+e^\eta)^2>0$ for every finite $\eta$. Thus [F3] applies and the log likelihood is strictly concave on $\mathbb R$. [F3, given, algebra]

1.2 By [F1], $\ell(\beta)= -b(-\beta)+\beta-b(\beta)=-2\log(1+e^{-\beta})$. The score formula [F2] gives $\ell'(\beta)=2/(1+e^\beta)>0$ at every finite $\beta$. [F1, F2, algebra]

2.1 The log likelihood is strictly negative for every finite $\beta$, while $\ell(\beta)\to0$ as $\beta\to+\infty$. Hence its supremum is $0$ and is not attained at any finite parameter: this separated logistic model has no finite MLE despite strict concavity. [step 1.2, algebra] ∎