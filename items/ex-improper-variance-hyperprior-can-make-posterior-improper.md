---
id: ex-improper-variance-hyperprior-can-make-posterior-improper
kind: example
title: "An improper variance hyperprior can give an improper posterior"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-hierarchical-bayesian-model
  - def-posterior-evidence-normalizer-and-fiberwise-update
  - prop-fiberwise-posterior-propriety-iff-finite-positive-evidence
  - lem-normal-location-scale-density
  - lem-normal-density-has-total-mass-one
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
axiom_use: "AC is inherited only through the library normal-law convention; the Gaussian integral and divergence calculation are choice-free."
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
    - title: "Andrew Gelman, John B. Carlin, Hal S. Stern, David B. Dunson, Aki Vehtari, and Donald B. Rubin, Bayesian Data Analysis, 3rd ed., §5.7"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
      locator: "Chapter 5, §5.7, printed pp. 129–130: a uniform prior on log tau gives an improper posterior when the marginal likelihood stays positive as tau tends to zero."
    - title: "Alicia A. Johnson, Miles Q. Ott, and Mine Dogucu, Bayes Rules!, Chapter 16"
      url: "https://www.bayesrulesbook.com/chapter-16.html"
      locator: "Chapter 16, §§16.3–16.4: a normal group-level scale parameter and the distinction between within-group and between-group variation."
---

## Example

Take one group with $\theta\mid t\sim N(0,t)$ and $Y\mid\theta\sim N(\theta,1)$, where $t=\tau^2>0$. Observe $y=0$, but replace the proper hyperprior in [[def-hierarchical-bayesian-model]] by the improper measure $\Pi(dt)=t^{-1}dt$ on $(0,\infty)$. Its evidence-weighted density is not integrable, so it cannot be normalized to a posterior probability. This is a warning example outside the proper-hyperprior hypotheses of the hierarchical posterior theorem.

## Facts & Assumptions

**Given:** The one-group normal model in the Example, observation $y=0$, and the improper hyperparameter density $1/t$ on $(0,\infty)$.

[F1] For $a\in\mathbb R$ and $v>0$, the $N(a,v)$ density is $(2\pi v)^{-1/2}e^{-(x-a)^2/(2v)}$. [[lem-normal-location-scale-density]]

[F2] The standard normal density has Lebesgue integral one. [[lem-normal-density-has-total-mass-one]]

[F3] For a sigma-finite prior measure, the evidence is the integral of the likelihood section, and a finite positive scaling of the likelihood-weighted measure is a probability exactly when the evidence is finite and positive. [[def-posterior-evidence-normalizer-and-fiberwise-update]], [[prop-fiberwise-posterior-propriety-iff-finite-positive-evidence]]

[A1] AC is assumed for the library normal-law convention. [[def-axiom-of-choice]]

[A2] The hyperprior measure is $\Pi(dt)=t^{-1}dt$ on $(0,\infty)$.

## Verification

**Given:** The model, observation, and improper hyperprior in the Example.

1.1 The prior is sigma-finite: the sets $E_n=[1/n,n]$ increase to $(0,\infty)$ and $\Pi(E_n)=\int_{1/n}^n dt/t=2\log n<\infty$. Integrating out $\theta$ gives the evidence at fixed $t$, $m(0\mid t)=\int_{\mathbb R}\frac{e^{-\theta^2/(2t)}}{\sqrt{2\pi t}}\frac{e^{-\theta^2/2}}{\sqrt{2\pi}}\,d\theta=\frac1{\sqrt{2\pi(1+t)}}$. Indeed, the exponent is $-(1+t^{-1})\theta^2/2$; the substitution $z=\sqrt{1+t^{-1}}\,\theta$ reduces the integral to the unit normal integral [F2]. It is positive and finite for every $t>0$. [A1, A2, F1, F2, given, algebra]

2.1 The evidence-weighted density of $t$ is $q(t)=1/(t\sqrt{2\pi(1+t)})$ by [A2] and step 1.1. For each $k\ge0$, let $I_k=(2^{-(k+1)},2^{-k})$. On $I_k\subset(0,1)$, $q(t)\ge1/(t\sqrt{4\pi})$ and $1/t\ge2^k$, while the interval has length $2^{-(k+1)}$. Hence $\int_{I_k}q(t)\,dt\ge1/(2\sqrt{4\pi})$, uniformly in $k$. The intervals are disjoint, so summing their lower bounds shows $\int_0^1q(t)\,dt=\infty$. By [F3], no finite positive scaling makes this likelihood-weighted measure a posterior probability. [A2, F3, step 1.1, algebra] ∎
