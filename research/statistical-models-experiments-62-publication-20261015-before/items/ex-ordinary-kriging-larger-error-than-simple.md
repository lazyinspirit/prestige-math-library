---
id: ex-ordinary-kriging-larger-error-than-simple
kind: example
title: "Ordinary kriging can have larger error than simple kriging"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 5
deps:
  - def-simple-ordinary-and-universal-kriging
  - thm-kriging-systems-and-l2-optimality
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

Let $\Omega=\{-1,1\}^3$ assign probability $1/8$ to each sign triple, with
coordinate variables $U_0,U_1,U_2$. For a common mean $\theta\in\mathbb R$,
let the target be $Y=\theta+U_0$ and observations be
$Z_i=\theta+U_i$ for $i=1,2$. With $\theta$ known, simple kriging predicts
$Y$ by $\theta$ and has mean-square error $1$. With $\theta$ unknown, an
ordinary predictor must use weights $\lambda_1+\lambda_2=1$; its minimum
mean-square error is $3/2$, attained by
$\lambda_1=\lambda_2=1/2$. This is a finite-model comparison, not a general
inequality between ordinary and simple kriging.

## Facts & Assumptions

**Given:** The equal-weight product space and the target and observation model in the example.

[F1] [[def-simple-ordinary-and-universal-kriging]]: a known-mean predictor uses the centered observations.

[F2] [[def-simple-ordinary-and-universal-kriging]]: ordinary-kriging weights are constrained to sum to one.

[F3] [[thm-kriging-systems-and-l2-optimality]]: with positive-definite observation covariance, the simple minimizing weight is $\Sigma^{-1}c_0$.

[F4] [[thm-kriging-systems-and-l2-optimality]]: under the full-rank constant-mean design, the ordinary system and error formula apply.

[F5] [[def-finite-probability-space-and-event]] and [[def-finite-real-random-variable-and-distribution]]: the eight sign triples have equal weight and the coordinates are real random variables on that space.

[F6] [[def-expectation-on-a-finite-probability-space]]: expectations are finite weighted sums.

[F7] [[def-variance-and-covariance]]: variance and covariance are centered second moments.

## Verification

**Given:** The three sign-coordinate variables on the equal-weight eight-outcome space.

1.1 Each $U_i$ has mean zero and second moment one by [F5] and [F6]. For $i\ne j$, each sign pair occurs equally often, so [F7] gives $\operatorname{Cov}(U_i,U_j)=0$. Consequently, $\Sigma=I_2$, $c_0=(0,0)^\top$, and $v_0=1$. [given, F5, F6, F7, algebra]

2.1 When $\theta$ is known, [F3] and step 1.1 give simple weight $\Sigma^{-1}c_0=0$, so the simple minimizing predictor is $\theta$. Its error is $U_0$ and its mean-square error is $\mathbb E[U_0^2]=1$. For the ordinary model, the unbiasedness constraint is $\lambda_1+\lambda_2=1$ by [F2]. [F1, F2, F3, step 1.1]

3.1 The ordinary system in [F4] applies because step 1.1 gives $\Sigma=I_2$ and the constant-mean design has full rank. Directly, the ordinary prediction error is $U_0-\lambda_1U_1-\lambda_2U_2$. Expanding its square, all cross terms have expectation zero by step 1.1, so its mean-square error is $1+\lambda_1^2+\lambda_2^2$. Substituting $\lambda_2=1-\lambda_1$ gives $\frac32+2(\lambda_1-\frac12)^2$, whose unique minimum is $3/2$ at $\lambda_1=\lambda_2=1/2$. Since $3/2>1$, ordinary kriging has the larger error in this example. [F2, F4, F7, step 1.1, step 2.1, algebra] ∎