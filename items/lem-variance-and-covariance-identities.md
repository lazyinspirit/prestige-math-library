---
id: lem-variance-and-covariance-identities
kind: lemma
title: "$\\operatorname{Var}(X)=\\mathbb E[X^2]-\\mathbb E[X]^2$ and $\\operatorname{Cov}(X,Y)=\\mathbb E[XY]-\\mathbb E[X]\\mathbb E[Y]$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-linearity-of-expectation, def-variance-and-covariance]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "C. M. Grinstead and J. L. Snell, Introduction to Probability, 2nd ed., Section 6.2"
      url: "https://math.dartmouth.edu/~prob/prob/prob.pdf"
    - title: "H. Pishro-Nik, Introduction to Probability, Statistics, and Random Processes, Section 5.3.1"
      url: "https://www.probabilitycourse.com/"
pipeline_run: null
---

## Statement

For finite real random variables $X,Y$,
$$\operatorname{Var}(X)=\mathbb E[X^2]-\mathbb E[X]^2,$$
$$\operatorname{Cov}(X,Y)=\mathbb E[XY]-\mathbb E[X]\mathbb E[Y].$$
Variance is nonnegative, and every constant random variable has variance zero. Zero variance forces equality to the mean on every positive-weight outcome, but not necessarily on zero-weight outcomes.

## Facts & Assumptions

**Given:** Real random variables $X,Y$ on a finite probability space.

[L1] Expectation is linear for every finite family, without independence ([[thm-linearity-of-expectation]]).

[L2] Variance and covariance are expectations of the displayed centred square and product ([[def-variance-and-covariance]]).

## Proof

**Proof technique:** direct.

1.1 Expand $(X-\mathbb E[X])^2=X^2-2\mathbb E[X]X+\mathbb E[X]^2$ and apply linearity to obtain $\operatorname{Var}(X)=\mathbb E[X^2]-\mathbb E[X]^2$. [L1, L2, algebra]

1.2 Expanding $(X-\mathbb E[X])(Y-\mathbb E[Y])$ and applying linearity gives the covariance identity. [L1, L2, algebra]

1.3 The centred square is pointwise nonnegative, so variance is nonnegative; if $X$ is constant it vanishes identically. If the variance is zero, every positive-weight centred-square summand is zero, while a zero-weight outcome is unrestricted. [L2, algebra]

2.1 Steps 1.1, 1.2, and 1.3 give all claims. [step 1.1, step 1.2, step 1.3] ∎
