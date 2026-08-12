---
id: cex-dependent-variables-need-not-factor-expectation
kind: counterexample
title: "For dependent variables, $\\mathbb E[XY]$ need not equal $\\mathbb E[X]\\mathbb E[Y]$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-uniform-finite-probability-space, def-independence-of-finite-random-variables, def-expectation-on-a-finite-probability-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Matousek and J. Vondrak, The Probabilistic Method, Section 1.1"
      url: "https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf"
pipeline_run: null
---

## Statement refuted

Every pair of finite random variables satisfies $\mathbb E[XY]=\mathbb E[X]\mathbb E[Y]$.

## Facts & Assumptions

**Given:** A uniform random sign $X$ on $\{-1,1\}$ and the variable $Y=X$.

[L1] A uniform two-point space gives both outcomes probability $1/2$ ([[def-uniform-finite-probability-space]]).

[L2] Independence requires joint attained-value probabilities to factor ([[def-independence-of-finite-random-variables]]).

[L3] Expectation is the weighted finite sum of values ([[def-expectation-on-a-finite-probability-space]]).

## Counterexample

**Proof technique:** constructive.

1.1 For the constructed pair $Y=X$, directly $\mathbb E[X]=\mathbb E[Y]=0$, while $XY=X^2=1$ everywhere and hence $\mathbb E[XY]=1$. [given, L1, L3, algebra, construct]

1.2 Also $\mathbb P(X=1,Y=1)=1/2\ne1/4=\mathbb P(X=1)\mathbb P(Y=1)$, so the variables are dependent. [L1, L2, algebra]

2.1 Thus $\mathbb E[XY]=1\ne0=\mathbb E[X]\mathbb E[Y]$, refuting the statement. [step 1.1, step 1.2, discharge-construct] ∎
