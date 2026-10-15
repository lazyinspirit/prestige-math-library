---
id: ex-posterior-credible-interval-need-not-have-nominal-frequency-coverage
kind: example
title: Posterior credibility does not ensure nominal frequentist coverage
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-posterior-credible-set
  - thm-central-posterior-quantile-interval-is-credible
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Andrew Gelman et al., Bayesian Data Analysis, 3rd ed., §2.5"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
    - title: "Alicia A. Johnson, Miles Q. Ott, and Mine Dogucu, Bayes Rules!, Chapter 8 §8.1"
      url: "https://www.bayesrulesbook.com/chapter-8.html"
---

## Example

Take a uniform prior on $\theta\in(0,1)$ and one Bernoulli observation $Y\sim\operatorname{Bernoulli}(\theta)$. The equal-tailed central 95% posterior interval has posterior mass $0.95$ after either possible observation, but its frequentist coverage at $\theta=0.005$ is zero.

## Facts & Assumptions

**Given:** The prior density is $1$ on $(0,1)$, the sampling probabilities are $P_\theta(Y=1)=\theta$ and $P_\theta(Y=0)=1-\theta$, and a frequentist coverage probability at fixed $\theta$ is $P_\theta\{\theta\in C(Y)\}$.

[F1] A posterior credible set has posterior probability at least its stated level. [[def-posterior-credible-set]]

[F2] The equal-tailed quantile interval has posterior probability at least $1-\alpha$. [[thm-central-posterior-quantile-interval-is-credible]]

## Verification

**Given:** The hypotheses in the Example and Facts & Assumptions.

1.1 The joint density/mass is $1\cdot\theta$ at $Y=1$ and $1\cdot(1-\theta)$ at $Y=0$. Its marginal masses are $\int_0^1\theta d\theta=1/2$ and $\int_0^1(1-\theta)d\theta=1/2$. Therefore the posterior densities are $p(\theta\mid Y=1)=2\theta$ and $p(\theta\mid Y=0)=2(1-\theta)$; each conditional law integrates to one and satisfies the defining conditioning identity. [given, algebra]

1.2 Their CDFs on $[0,1]$ are $F_1(x)=x^2$ and $F_0(x)=1-(1-x)^2$. Hence the central 95% intervals are $C(1)=[\sqrt{0.025},\sqrt{0.975}]$ and $C(0)=[1-\sqrt{0.975},1-\sqrt{0.025}]$. Each has posterior mass $0.975-0.025=0.95$, also in accordance with [F1, F2]. [given, F1, F2, algebra]

2.1 For fixed true $\theta_0=0.005$, $\sqrt{0.025}>0.005$ because $0.025>0.005^2$. Also $1-\sqrt{0.975}>0.005$ because $0.975<0.995^2$. Thus $\theta_0$ lies below the lower endpoint of both possible intervals, so $P_{\theta_0}\{\theta_0\in C(Y)\}=0$, not $0.95$. This verifies that posterior credibility is not a frequentist coverage guarantee. [given, step 1.2, algebra] ∎
