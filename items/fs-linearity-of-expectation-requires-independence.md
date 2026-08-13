---
id: fs-linearity-of-expectation-requires-independence
kind: false-statement
title: "False: linearity of expectation requires independence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-uniform-finite-probability-space, def-independence-of-finite-random-variables, thm-linearity-of-expectation]
justified_by: []
aliases: []
landmark: false
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
    - title: "C. M. Grinstead and J. L. Snell, Introduction to Probability, 2nd ed., Theorem 6.2"
      url: "https://math.dartmouth.edu/~prob/prob/prob.pdf"
pipeline_run: null
---

## Statement

The identity $\mathbb E[X+Y]=\mathbb E[X]+\mathbb E[Y]$ is valid only when $X$ and $Y$ are independent.

## Facts & Assumptions

**Given:** Finite real random variables on one finite probability space.

[L1] Expectation is linear for every finite family of random variables, without any independence hypothesis ([[thm-linearity-of-expectation]]).

[L2] A uniform two-point space assigns each outcome probability $1/2$ ([[def-uniform-finite-probability-space]]).

[L3] Independence requires every joint attained-value probability to factor ([[def-independence-of-finite-random-variables]]).

## Refutation

**Proof technique:** direct.

1.1 On the uniform random-sign space, take $X(\omega)=\omega$ and $Y=X$. Then $\mathbb P(X=1,Y=1)=1/2\ne1/4=\mathbb P(X=1)\mathbb P(Y=1)$, so [L3] shows that $X$ and $Y$ are dependent. [L2, L3, construct]

2.1 Nevertheless [L1] gives $\mathbb E[X+Y]=\mathbb E[X]+\mathbb E[Y]$. Therefore independence is not necessary for linearity, so the statement is false. [step 1.1, L1] ∎
