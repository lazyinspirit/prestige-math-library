---
id: thm-chebyshev-inequality
kind: theorem
title: "Chebyshev's inequality on a finite probability space"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-variance-and-covariance, thm-markov-inequality]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "C. M. Grinstead and J. L. Snell, Introduction to Probability, 2nd ed., Theorem 8.1"
      url: "https://math.dartmouth.edu/~prob/prob/prob.pdf"
    - title: "H. Pishro-Nik, Introduction to Probability, Statistics, and Random Processes, Section 6.2.2"
      url: "https://www.probabilitycourse.com/"
pipeline_run: null
---

## Statement

For every finite real random variable $X$ and every $t>0$,
$$\mathbb P(|X-\mathbb E[X]|\ge t)\le\frac{\operatorname{Var}(X)}{t^2}.$$
Equivalently, if $\sigma_X>0$ and $c>0$, then $\mathbb P(|X-\mathbb E[X]|\ge c\sigma_X)\le1/c^2$. If $\sigma_X=0$, the first form remains valid for every $t>0$.

## Facts & Assumptions

**Given:** A finite real random variable $X$ and a real threshold $t>0$.

[L1] Variance is $\mathbb E[(X-\mathbb E[X])^2]$ and $\sigma_X^2=\operatorname{Var}(X)$ ([[def-variance-and-covariance]]).

[L2] Markov's inequality states $\mathbb P(Y\ge a)\le\mathbb E[Y]/a$ for nonnegative $Y$ and $a>0$ ([[thm-markov-inequality]]).

## Proof

**Proof technique:** direct.

1.1 The variable $Y=(X-\mathbb E[X])^2$ is nonnegative, and for $t>0$ the events $\{Y\ge t^2\}$ and $\{|X-\mathbb E[X]|\ge t\}$ are equal. [given, algebra]

2.1 Apply [L2] to $Y$ at the positive threshold $t^2$ and use [L1] to obtain the first inequality. [step 1.1, L1, L2]

3.1 If $\sigma_X>0$, substitute $t=c\sigma_X$ in step 2.1 and cancel $\sigma_X^2$ to obtain $1/c^2$. Conversely, given $t>0$, choose $c=t/\sigma_X>0$ in the standard-deviation form to recover step 2.1. If $\sigma_X=0$, step 2.1 gives probability at most zero for every $t>0$. [step 2.1, L1, choose, algebra] ∎
