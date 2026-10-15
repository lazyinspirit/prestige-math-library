---
id: ex-continuous-density-mode-under-zero-one-loss
kind: example
title: A continuous density mode need not distinguish exact zero–one actions
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-posterior-risk-and-bayes-action
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
    - title: "Andrew Gelman et al., Bayesian Data Analysis, 3rd ed., §9.1"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory, §5.3.1, PDF pp. 104–105"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
---

## Example

Let the posterior density on $(0,1)$ be $p(\theta)=6\theta(1-\theta)$, the $\operatorname{Beta}(2,2)$ density. Here a **density mode** means a maximizer of this displayed density. It has a unique density mode at $\theta=1/2$, but under exact zero–one loss every point action has posterior risk one.

## Facts & Assumptions

**Given:** $\Pi$ has Lebesgue density $6\theta(1-\theta)$ on $(0,1)$; actions are points $a\in(0,1)$; the loss is $L(\theta,a)=\mathbf 1_{\{\theta\ne a\}}$.

[F1] Posterior risk is the posterior integral of the loss when finite. [[def-posterior-risk-and-bayes-action]]

## Verification

**Given:** The hypotheses in the Example and Facts & Assumptions.

1.1 The density is normalized because $\int_0^1 6\theta(1-\theta)d\theta=6(1/2-1/3)=1$. Also $\theta(1-\theta)=1/4-(\theta-1/2)^2$, so the density has its unique maximum at $1/2$. [given, algebra]

2.1 Absolute continuity gives $\Pi(\{a\})=0$ for every point action $a$. Hence $\rho(a)=\int \mathbf1_{\{\theta\ne a\}}\Pi(d\theta)=1-\Pi(\{a\})=1$ for every $a$. All actions tie under this loss, even though the density has a unique mode. [given, F1, algebra] ∎
