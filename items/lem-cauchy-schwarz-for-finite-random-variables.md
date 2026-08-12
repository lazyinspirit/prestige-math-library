---
id: lem-cauchy-schwarz-for-finite-random-variables
kind: lemma
title: "Cauchy-Schwarz for finite random variables: $\\mathbb E[XY]^2\\le\\mathbb E[X^2]\\mathbb E[Y^2]$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-expectation-on-a-finite-probability-space, thm-linearity-of-expectation, thm-expectation-monotonicity-and-bounds]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "H. Pishro-Nik, Introduction to Probability, Statistics, and Random Processes, Section 6.2.4"
      url: "https://www.probabilitycourse.com/"
pipeline_run: null
---

## Statement

For real random variables $X,Y$ on a finite probability space,
$$\mathbb E[XY]^2\le\mathbb E[X^2]\mathbb E[Y^2].$$
No equality characterization is asserted on outcomes of probability zero.

## Facts & Assumptions

**Given:** Real random variables $X,Y$ on one finite probability space.

[L1] Expectation is linear for finite linear combinations ([[thm-linearity-of-expectation]]).

[L2] Expectation preserves pointwise order, so the expectation of a nonnegative variable is nonnegative ([[thm-expectation-monotonicity-and-bounds]]).

[L3] Expectation is the finite sum of values times nonnegative outcome weights ([[def-expectation-on-a-finite-probability-space]]).

## Proof

**Proof technique:** cases.

1.1 Assume first that $\mathbb E[X^2]=0$. Every nonnegative summand $X(\omega)^2w(\omega)$ is then zero, so $X=0$ on all positive-weight outcomes and $\mathbb E[XY]=0$. [assume-case zero, L2, L3, algebra]

1.2 Assume now that $\mathbb E[X^2]>0$ and put $t=\mathbb E[XY]/\mathbb E[X^2]$. [assume-case positive, choose]

1.3 Since $(Y-tX)^2\ge0$, linearity gives $0\le\mathbb E[Y^2]-2t\mathbb E[XY]+t^2\mathbb E[X^2]$. [L1, L2]

2.1 In this case the asserted inequality reads $0\le0$. [step 1.1, algebra]

2.2 Substitution of $t$ into step 1.3 yields $0\le\mathbb E[Y^2]-\mathbb E[XY]^2/\mathbb E[X^2]$, and multiplication by the positive denominator gives the result. [step 1.2, step 1.3, algebra]

3.1 The cases $\mathbb E[X^2]=0$ and $\mathbb E[X^2]>0$ are exhaustive because $\mathbb E[X^2]\ge0$. [step 2.1, step 2.2, L2, cases-exhaustive] ∎
