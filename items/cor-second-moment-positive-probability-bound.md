---
id: cor-second-moment-positive-probability-bound
kind: corollary
title: "The second-moment lower bound for positive probability"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-expectation-of-an-indicator-is-probability, cor-cauchy-schwarz-for-random-variables, def-moments-variance-and-covariance]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "J. R. Norris, Probability and Measure, Section 4.2"
      url: "https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf"
---

## Statement

Let $X$ be a nonnegative square-integrable real random variable.

- If $\mathbb E[X^2]>0$, then
  $$\mathbb P(X>0)\ge\frac{\mathbb E[X]^2}{\mathbb E[X^2]}.$$
- If $\mathbb E[X^2]=0$, then $X=0$ almost surely and $\mathbb P(X>0)=0$.

## Facts & Assumptions

**Given:** A nonnegative square-integrable real random variable $X$.

[L1] The expectation of an indicator is the probability of its event
([[cor-expectation-of-an-indicator-is-probability]]).

[L2] Cauchy-Schwarz holds for square-integrable random variables
([[cor-cauchy-schwarz-for-random-variables]]).

[L3] Square-integrability means that the second moment $\mathbb E[X^2]$ is
finite ([[def-moments-variance-and-covariance]]).

## Proof

**Proof technique:** direct.

1.1 The identity $X=X\mathbf 1_{\{X>0\}}$ holds pointwise because $X\ge0$. Applying [L2] to $U=X\mathbf 1_{\{X>0\}}$ and $V=\mathbf 1_{\{X>0\}}$ gives $$\mathbb E[X]^2\le\mathbb E[X^2]\,\mathbb E[\mathbf 1_{\{X>0\}}].$$ By [L1], this is $$\mathbb E[X]^2\le\mathbb E[X^2]\,\mathbb P(X>0).$$ [L1, L2, L3]

2.1 If $\mathbb E[X^2]>0$, divide the inequality in step 1.1 by that positive number. If $\mathbb E[X^2]=0$, then step 1.1 forces $\mathbb E[X]=0$ as well, and since $X^2\ge0$, zero second moment means $X^2=0$ almost surely, hence $X=0$ almost surely and $\mathbb P(X>0)=0$. [step 1.1, L3, algebra]

3.1 Step 2.1 proves both the positive-second-moment case and the zero boundary case. [step 2.1] ∎
