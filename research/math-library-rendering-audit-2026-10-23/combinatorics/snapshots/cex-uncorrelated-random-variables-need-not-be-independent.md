---
id: cex-uncorrelated-random-variables-need-not-be-independent
kind: counterexample
title: "Uncorrelated finite random variables need not be independent"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-uniform-finite-probability-space, def-independence-of-finite-random-variables, def-variance-and-covariance, lem-variance-and-covariance-identities]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "H. Pishro-Nik, Introduction to Probability, Statistics, and Random Processes, Section 5.3.1"
      url: "https://www.probabilitycourse.com/"
pipeline_run: null
---

## Statement refuted

If $\operatorname{Cov}(X,Y)=0$, then the finite random variables $X$ and $Y$ are independent.

## Facts & Assumptions

**Given:** The uniform space $\Omega=\{-1,0,1\}$, the identity variable $X(\omega)=\omega$, and $Y=X^2$.

[L1] Uniform probabilities are cardinality ratios ([[def-uniform-finite-probability-space]]).

[L2] Independence requires every joint attained-value probability to factor ([[def-independence-of-finite-random-variables]]).

[L3] Covariance is defined by centred products and equals $\mathbb E[XY]-\mathbb E[X]\mathbb E[Y]$ ([[def-variance-and-covariance]], [[lem-variance-and-covariance-identities]]).

## Counterexample

**Proof technique:** constructive.

1.1 On the stated three-point space, symmetry gives $\mathbb E[X]=0$ and $\mathbb E[XY]=\mathbb E[X^3]=0$, while $\mathbb E[Y]=2/3$. [given, L1, algebra, construct]

1.2 But $\mathbb P(X=0,Y=0)=1/3$, whereas $\mathbb P(X=0)\mathbb P(Y=0)=(1/3)(1/3)=1/9$. [L1, algebra]

2.1 Hence $\operatorname{Cov}(X,Y)=0$. [step 1.1, L3, algebra]

3.1 Thus $X,Y$ are uncorrelated but not independent. [step 2.1, step 1.2, L2, discharge-construct] ∎
