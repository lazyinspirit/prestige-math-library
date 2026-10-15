---
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
id: cex-credible-posterior-set-with-zero-frequency-coverage
kind: counterexample
title: A boundary truth can give an equal-tailed credible interval zero coverage
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-posterior-credible-set
  - thm-bayes-formula-for-dominated-kernels
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
---

## Statement refuted

Every equal-tailed posterior credible interval has frequentist coverage at least its nominal level, even when the truth is on the boundary of the parameter space.

## Setup

For $0<\alpha<1$, observe $X_1,\ldots,X_n$ IID Bernoulli$(\theta)$ with parameter space $\Theta=[0,1]$ and prior density $\pi(\theta)=1$ on $[0,1]$. For every data vector, let $C_n$ be the equal-tailed posterior interval between the $\alpha/2$ and $1-\alpha/2$ posterior quantiles. The truth $\theta_0=0$ lies on the boundary. Under this truth all observations are zero with probability one. The posterior density is then $(n+1)(1-\theta)^n$, with CDF $F_n(t)=1-(1-t)^{n+1}$ on $[0,1]$. Its lower endpoint is $q_{\alpha/2}=1-(1-\alpha/2)^{1/(n+1)}>0$, so the interval excludes $\theta_0$ for every $n$.

## Facts & Assumptions

**Given:** The Bernoulli model, uniform prior, and equal-tailed posterior interval in the Counterexample.

[F1] [[def-posterior-credible-set]]: a graph-measurable set rule is level-$1-\alpha$ credible when its posterior probability is at least $1-\alpha$ for each data value.

[F2] [[thm-bayes-formula-for-dominated-kernels]]: a dominated prior and sampling model give posterior density proportional to prior density times likelihood when the marginal likelihood is positive and finite.

[L1] At a fixed parameter $\theta$, the frequentist coverage of a set rule $C$ is $P_\theta\{\theta\in C(Y)\}$.

[A1] In the usual topology on $[0,1]$, $\theta_0=0$ is a boundary point and is not an interior point.

## Refutation




1.1 For data with $k$ successes, the likelihood is $\theta^k(1-\theta)^{n-k}$. It is bounded by $1$ and positive for $0<\theta<1$, so its integral against the uniform prior is finite and strictly positive. [F2] therefore gives the posterior density proportional to that likelihood. The sample space is finite for fixed $n$, so the interval rule's membership graph is a finite union of measurable slices. The posterior density is positive on $(0,1)$, making its CDF continuous and strictly increasing there; the posterior probability between its two quantiles is $(1-\alpha/2)-\alpha/2=1-\alpha$. Thus the rule is credible by [F1]. [F1, F2, given, algebra]

1.2 At $\theta_0=0$, the data are all zero with probability one, so the likelihood is $(1-\theta)^n$. Its normalizing integral is $\int_0^1(1-\theta)^n d\theta=1/(n+1)$, giving posterior density $(n+1)(1-\theta)^n$ and CDF $F_n(t)=1-(1-t)^{n+1}$. Solving $F_n(q_u)=u$ yields $q_u=1-(1-u)^{1/(n+1)}$. In particular $q_{\alpha/2}>0$, so $0\notin C_n$ for every $n$. [given, algebra]

2.1 Because the truth is zero and all data are zero almost surely, [L1] gives frequentist coverage $P_0\{0\in C_n(X_1,\ldots,X_n)\}=0$. This contradicts the asserted lower bound $1-\alpha>0$ and exhibits failure at the boundary identified in [A1]. [A1, L1, step 1.2, algebra] ∎
