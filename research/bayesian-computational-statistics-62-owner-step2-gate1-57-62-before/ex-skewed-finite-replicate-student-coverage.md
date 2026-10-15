---
id: ex-skewed-finite-replicate-student-coverage
kind: example
title: "A skewed finite-replicate law defeats a nominal Student interval"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - def-nested-uniform-scramble
  - def-lambda-t-net
  - lem-nested-scramble-marginals-and-net-preservation
  - cor-rqmc-replicate-variance-estimator
  - def-student-t-and-f-laws
  - def-chi-square-law
  - lem-positive-df-chi-square-has-density-and-regular-cdf
  - lem-student-t-and-f-cdfs-are-continuous-and-strictly-increasing
  - def-axiom-of-choice
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
justified_by: []
proof_strategy: direct
axiom_use: "Assume AC for the chi-square and Student t law/quantile suppliers; the scramble, replicate distribution, and exact coverage calculation are choice-free."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pending
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Book: The Quasi-Monte Carlo Parts, Chapter 17 §17.1 and §17.4"
      url: "https://artowen.su.domains/mc/qmcstuff.pdf"
---

## Example

Assume AC. Use the nested uniform scramble of the base-$2$ net $\{0,1/2\}$ and
$f(x)=\mathbf1_{[0,1/100)}(x)$. For two independent full-set replicates,
calculate the exact coverage of the usual two-sided $95\%$ Student interval
based on the sample variance, namely $\overline Z_2\pm c\sqrt{\widehat V_2}$
with $c$ the $97.5$th percentile of $t_1$. This checks the finite-$R$
coverage caveat.

## Facts & Assumptions

**Given:** AC, the net and scramble, the fixed target $I=\int_0^1 f(x)\,dx$, and two independent scrambles.

[F1] [[def-lambda-t-net]]: The input net has one point in each half interval.

[F2] [[def-nested-uniform-scramble]]: Conditional on the first permutation, the two point tails are independent uniform tails in their assigned halves.

[F3] [[cor-rqmc-replicate-variance-estimator]]: For $R=2$, $\widehat V_2=\frac12\sum_{r=1}^2(Z_r-\overline Z_2)^2$ estimates the replicate-mean variance.

[F4] [[def-student-t-and-f-laws]]: $t_1$ is the law of $G/\sqrt{Q_1}$, with independent standard normal $G$ and $Q_1\sim\chi_1^2$.

[F5] [[def-chi-square-law]]: $Q_1$ is the square of a standard normal, so $G^2$ and the independent $Q_1$ have the same $\chi_1^2$ law.

[F6] [[lem-positive-df-chi-square-has-density-and-regular-cdf]]: A positive-degree chi-square variable is positive almost surely and has a continuous density.

[F7] [[lem-student-t-and-f-cdfs-are-continuous-and-strictly-increasing]]: Under AC, $t_1$ has a continuous, symmetric, strictly increasing CDF, so its $0.975$ quantile is unique.

[A1] [[def-axiom-of-choice]]: AC is used by the stated Student t law and its CDF result [F4, F7].

[F8] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: Expectation is integration against the probability law.

## Verification

1.1 The point in $[0,1/2)$ is uniform there by [F2], while the point in $[1/2,1)$ never enters $[0,1/100)$. Thus one rule estimate is $Z=\frac12B$, where $B$ is Bernoulli with success probability $(1/100)/(1/2)=1/50$. Consequently [F8] gives $\mathbb EZ=1/100=I$, and $Z$ has a skewed two-point law. [F1, F2, F8, given, algebra]

2.1 For two independent estimates, if both $B$ values agree then $\widehat V_2=0$ by [F3], so the interval is the singleton $\{0\}$ or $\{1/2\}$ and misses $I=1/100$. This event has probability $(49/50)^2+(1/50)^2=2402/2500$. [F3, step 1.1, algebra]

2.2 If the two $B$ values differ, then $\overline Z_2=1/4$ and $\widehat V_2=1/16$, so the interval half-width is $c/4$ with $c$ as in the Example. By [F4]–[F6], $T_1$ can be represented as $G/\sqrt{Q_1}$ with $G^2$ and $Q_1$ independent and identically distributed; their continuous law gives $\mathbb P(G^2=Q_1)=0$. Exchangeability then gives $\mathbb P(G^2<Q_1)=\mathbb P(Q_1<G^2)=1/2$, so $\mathbb P(|T_1|<1)=1/2$. Symmetry and continuity of the CDF [F7] imply $F_{t_1}(1)=3/4$, hence its $0.975$ quantile satisfies $c>1$. Therefore the interval half-width $c/4>1/4>|1/4-1/100|=6/25$, and it contains $I$. This event has probability $2(49/50)(1/50)=98/2500$. [A1, F3, F4, F5, F6, F7, step 1.1, algebra]

3.1 The resulting two-sided interval coverage is $98/2500=0.0392$, far below $0.95$. The replicate variance formula remains unbiased; this finite-$R$ example shows that unbiased variance estimation alone does not guarantee accurate Student interval coverage. [step 2.1, step 2.2, algebra] ∎
