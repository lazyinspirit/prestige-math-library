---
id: ex-rare-arm-importance-weighted-estimator
kind: example
title: A rarely sampled arm has a high-variance importance-weighted estimate
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-bandit-importance-weighted-estimator
  - lem-bandit-importance-weighted-estimator-has-conditional-moments
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Tor Lattimore and Csaba Szepesvári, Bandit Algorithms"
      url: "https://tor-lattimore.com/downloads/book/book.pdf"
      locator: "§11.2, importance-weighted estimator and variance discussion, PDF pp. 159–161 / printed pp. 150–152."
---

## Example

Take one round with two actions, rewards $(x_{1,1},x_{1,2})=(0,1)$, and sampling probabilities $(P_{1,1},P_{1,2})=(1/10,9/10)$. The first arm's loss is $1$, so its importance-weighted loss estimate is $10$ with probability $1/10$ and $0$ with probability $9/10$. Its mean is $1$, second moment is $10$, and variance is $9$. The corresponding reward estimate is $-9$ or $1$ with those respective probabilities, despite the true first-arm reward being $0$.

## Example references

[[def-bandit-importance-weighted-estimator]]: the loss estimate is the observed loss divided by the probability of selecting its arm.

[[lem-bandit-importance-weighted-estimator-has-conditional-moments]]: the conditional mean, second moment, and variance formulas.

## Facts & Assumptions

**Given:** One round, two arms, fixed rewards $(0,1)$, and conditional arm probabilities $(1/10,9/10)$.

[F1] [[def-bandit-importance-weighted-estimator]]: $Y_1=1-X_1$ and $\widehat Y_{1,i}=\mathbf1\{A_1=i\}Y_1/P_{1,i}$, with $\widehat X_{1,i}=1-\widehat Y_{1,i}$.

[F2] [[lem-bandit-importance-weighted-estimator-has-conditional-moments]]: for loss $y_i$ and arm probability $p_i>0$, the conditional mean, second moment, and variance are $y_i$, $y_i^2/p_i$, and $y_i^2(1-p_i)/p_i$.

## Verification

1.1 The first-arm loss is $y_{1,1}=1$. On $A_1=1$, which has probability $1/10$, its estimate is $1/(1/10)=10$; on $A_1=2$, which has probability $9/10$, its estimate is zero. [given, F1]

1.2 By [F2] with $y=1$ and $p=1/10$, the mean is $1$, the second moment is $1/(1/10)=10$, and the variance is $1^2(1-1/10)/(1/10)=9$. [F2, algebra]

2.1 Since $\widehat X_{1,1}=1-\widehat Y_{1,1}$, its values are $-9$ and $1$ on the two events, respectively, so it can fall outside the true reward range $[0,1]$. [F1, step 1.1, algebra] ∎
