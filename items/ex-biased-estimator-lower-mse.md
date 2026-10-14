---
id: ex-biased-estimator-lower-mse
kind: example
title: "A biased estimator can have lower MSE"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 7
deps:
  - def-statistic-and-estimator
  - def-bias-and-mean-squared-error
  - def-unbiased-estimator-and-umvu
  - def-moments-variance-and-covariance
  - def-bernoulli-and-binomial-random-variables
  - lem-bernoulli-and-binomial-mean-and-variance
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
    - title: "George Deligiannidis, SB2.1 Foundations of Statistical Inference, Chapter 5, PDF pp. 29–31"
      url: "https://www.stats.ox.ac.uk/~deligian/pdf/sb21/sb21_notes.pdf"
    - title: "Karl B. Gregory, STAT 713 Lecture 6: Best Unbiased Estimators, Rao-Blackwell Theorem, PDF pp. 2–8"
      url: "https://people.stat.sc.edu/gregorkb/STAT_713_sp_2023/STAT_713_Lec_06_slides_annotated.pdf"
---

## Example

Observe one $X\sim\operatorname{Bernoulli}(p)$ and estimate $p$. The unbiased
estimator $T_1=X$ has $\operatorname{MSE}_p(T_1)=p(1-p)$. The constant
estimator $T_0=0$ is biased when $p>0$, but at $p=1/5$,
$$\operatorname{MSE}_{1/5}(T_0)=\frac1{25}<\frac4{25}=\operatorname{MSE}_{1/5}(T_1).$$
This is a pointwise comparison at $p=1/5$, not a uniform improvement: at $p=1$
the constant rule has MSE $1$ and $T_1$ has MSE $0$.

## Facts & Assumptions

**Given:** One Bernoulli observation $X$ with $p\in[0,1]$.

[F1] The bias and MSE are expectation minus target and expected squared error, respectively. ([[def-bias-and-mean-squared-error]])

[F2] Unbiasedness means expectation equals the target at every parameter. ([[def-unbiased-estimator-and-umvu]])

[F3] A Bernoulli$(p)$ variable has mean $p$ and variance $p(1-p)$, and takes values $1$ and $0$ with probabilities $p$ and $1-p$. ([[def-bernoulli-and-binomial-random-variables]], [[lem-bernoulli-and-binomial-mean-and-variance]])

[F4] A measurable real-valued function of the data is an estimator of its named target. ([[def-statistic-and-estimator]])

## Verification

**Proof technique:** direct.

1.1 Both $T_1=X$ and the constant $T_0=0$ are measurable estimators by [F4]. The two-point law gives $\mathbb E_pX=p$ and $\operatorname{Var}_p(X)=p(1-p)$, so [F2] makes $T_1=X$ unbiased and [F1] gives $\operatorname{MSE}_p(T_1)=p(1-p)$. For $T_0=0$, [F1] gives bias $-p$ and MSE $p^2$. [given, F1, F2, F3, F4]

2.1 At $p=1/5$, the MSEs are $1/25$ and $(1/5)(4/5)=4/25$, respectively, so the biased rule has strictly smaller MSE there. At $p=1$, they are $1$ and $0$, so the inequality is not uniform in $p$. [step 1.1, choose, algebra] ∎
