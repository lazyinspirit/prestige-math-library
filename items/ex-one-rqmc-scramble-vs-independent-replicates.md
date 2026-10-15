---
id: ex-one-rqmc-scramble-vs-independent-replicates
kind: example
title: "One scrambled rule versus independent full-set replicates"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - def-lambda-t-net
  - def-rqmc-point-set-and-estimator
  - def-nested-uniform-scramble
  - thm-rqmc-single-rule-unbiasedness
  - cor-rqmc-replicate-variance-estimator
  - def-moments-variance-and-covariance
  - thm-factorization-of-expectations-for-independent-variables
  - thm-linearity-of-the-lebesgue-integral-on-l-one
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Book: The Quasi-Monte Carlo Parts, Chapter 17 §§17.1 and 17.5"
      url: "https://artowen.su.domains/mc/qmcstuff.pdf"
---

## Example

Take $b=2$, $d=1$, and the $(0,1,1)$-net with points $a_1=0$ and
$a_2=1/2$. Use a nested uniform scramble and the integrand $f(x)=x$. Compute
the exact variance of one scrambled estimate and explain what independent
full-set replicates add.

## Facts & Assumptions
**Given:** The two-point net, its nested uniform scramble, fixed target $I=\int_0^1x\,dx$, and independent repetitions of the complete scrambled set.

[F1] [[def-lambda-t-net]]: A $(0,1,1)$-net in base $2$ has one point in each half interval.

[F2] [[def-nested-uniform-scramble]]: The permutation at each input-prefix node is shared by points with that prefix and independent across distinct nodes.

[F3] [[thm-rqmc-single-rule-unbiasedness]]: Marginally uniform points give an unbiased estimator of the cube integral.

[F4] [[cor-rqmc-replicate-variance-estimator]]: For $R\ge2$ independent full-set randomizations, $\widehat V_R$ estimates the variance of their replicate mean.

[F5] [[def-moments-variance-and-covariance]]: The variance of a square-integrable real variable is its centered second moment.

[F6] [[thm-factorization-of-expectations-for-independent-variables]]: Integrable functions of independent random variables have factored product expectation.

[F7] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: Expectation is linear on integrable real random variables.



## Verification

1.1 The first input digits of $0$ and $1/2$ differ, so the first permutation sends them to opposite halves. The net count from [F1] is preserved, leaving one point in each half. [F1, F2, given]

2.1 The two input-prefix paths remain distinct after the first digit; hence all their subsequent node permutations are independent. Each tail is a sequence of independent uniform binary digits, so conditional on the first permutation the two scrambled points are independent uniform variables in their assigned half intervals. [F2, step 1.1]

3.1 A uniform variable on an interval of width $1/2$ has variance $(1/2)^2/12=1/48$. Under either value of the first permutation, step 2.1 gives the same law for $Z$: half the sum of independent uniforms on the lower and upper halves. Thus this is also its unconditional law. The single-rule estimate $Z=(X_1+X_2)/2$ is unbiased for $I=1/2$ by [F3], and [F6]–[F7] give $\operatorname{Var}(Z)=(1/48+1/48)/4=1/96$ by [F5]. [F3, F5, F6, F7, step 2.1, algebra]

4.1 One realized estimate $Z$ cannot form the centered replicate variance formula because $R(R-1)=0$ at $R=1$. With $R\ge2$ independent full-set scrambles, [F4] gives an unbiased estimate of $\operatorname{Var}(\overline Z_R)=1/(96R)$. The target integral is fixed, so this is computation-randomization uncertainty only. [F4, step 3.1, algebra] ∎
