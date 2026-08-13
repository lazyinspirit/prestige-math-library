---
id: thm-finite-second-moment-lower-bound
kind: theorem
title: "The finite second-moment bound $\\mathbb P(X\\ne0)\\ge\\mathbb E[X]^2/\\mathbb E[X^2]$ when $\\mathbb E[X^2]>0$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-expectation-on-a-finite-probability-space, lem-indicator-expectation-and-products, lem-cauchy-schwarz-for-finite-random-variables]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "H. Pishro-Nik, Introduction to Probability, Statistics, and Random Processes, Section 6.2.4"
      url: "https://www.probabilitycourse.com/"
    - title: "Y. Zhao, MIT 18.218 Probabilistic Method in Combinatorics, Section 3.3"
      url: "https://yufeizhao.com/pm/sp19/pmnotes.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a finite real random variable. If $\mathbb E[X^2]>0$, then
$$\mathbb P(X\ne0)\ge\frac{\mathbb E[X]^2}{\mathbb E[X^2]}.$$
If $\mathbb E[X^2]=0$, then $X=0$ on every positive-weight outcome and $\mathbb P(X\ne0)=0$.

## Facts & Assumptions

**Given:** A finite real random variable $X$.

[L1] $\mathbf1_A$ has expectation $\mathbb P(A)$ ([[lem-indicator-expectation-and-products]]).

[L2] Cauchy-Schwarz states $\mathbb E[UV]^2\le\mathbb E[U^2]\mathbb E[V^2]$ ([[lem-cauchy-schwarz-for-finite-random-variables]]).

[L3] Expectation is the finite sum of values times nonnegative outcome weights ([[def-expectation-on-a-finite-probability-space]]).

## Proof

**Proof technique:** cases.

1.1 Assume $\mathbb E[X^2]>0$. Pointwise, $X\mathbf1_{\{X\ne0\}}=X$. Apply [L2] to $U=X$ and $V=\mathbf1_{\{X\ne0\}}$; using [L1] gives $\mathbb E[X]^2\le\mathbb E[X^2]\mathbb P(X\ne0)$. [assume-case positive, L1, L2, algebra]

1.2 Assume $\mathbb E[X^2]=0$. The nonnegative summands $X(\omega)^2w(\omega)$ then force $X=0$ at every positive-weight outcome, so $\mathbb P(X\ne0)=0$. [assume-case zero, L3, algebra]

2.1 Dividing by the positive second moment gives the displayed bound. [step 1.1, algebra]

3.1 Nonnegativity of $\mathbb E[X^2]$ makes the two cases exhaustive. [step 2.1, step 1.2, cases-exhaustive] ∎
