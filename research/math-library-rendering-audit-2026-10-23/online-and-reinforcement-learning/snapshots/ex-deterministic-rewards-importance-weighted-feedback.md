---
id: ex-deterministic-rewards-importance-weighted-feedback
kind: example
title: Deterministic rewards can give a negative estimated reward
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
      locator: "§11.2, the loss-based importance-weighted estimator and conditional moments, PDF pp. 159–161 / printed pp. 150–152."
---

## Example

Take one round with deterministic rewards $(x_{1,1},x_{1,2})=(1,0)$ and sampling probabilities $(P_{1,1},P_{1,2})=(3/4,1/4)$. Arm 2 has loss $1$, so its estimated loss is $4$ with probability $1/4$ and $0$ with probability $3/4$. Its mean is $1$, second moment is $4$, and variance is $3$. The corresponding estimated reward is $-3$ or $1$ with those respective probabilities, although arm 2's true reward is $0$.

## Example references

[[def-bandit-importance-weighted-estimator]]: the loss and reward estimate definitions for a single sampled arm.

[[lem-bandit-importance-weighted-estimator-has-conditional-moments]]: the conditional moments for a positive arm probability.

## Facts & Assumptions

**Given:** One round, two arms, deterministic rewards $(1,0)$, and conditional arm probabilities $(3/4,1/4)$.

[F1] [[def-bandit-importance-weighted-estimator]]: $y_{1,i}=1-x_{1,i}$, $\widehat Y_{1,i}=\mathbf1\{A_1=i\}Y_1/P_{1,i}$, and $\widehat X_{1,i}=1-\widehat Y_{1,i}$.

[F2] [[lem-bandit-importance-weighted-estimator-has-conditional-moments]]: for loss $y_i$ and probability $p_i>0$, the conditional mean, second moment, and variance are $y_i$, $y_i^2/p_i$, and $y_i^2(1-p_i)/p_i$.

## Verification

1.1 Arm 2 has loss $y_{1,2}=1$. If $A_1=2$, an event of probability $1/4$, then $\widehat Y_{1,2}=1/(1/4)=4$; if $A_1=1$, an event of probability $3/4$, then $\widehat Y_{1,2}=0$. [given, F1]

1.2 By [F2] with $y=1$ and $p=1/4$, the conditional mean is $1$, the second moment is $1/(1/4)=4$, and the variance is $(1-1/4)/(1/4)=3$. [F2, algebra]

2.1 Since $\widehat X_{1,2}=1-\widehat Y_{1,2}$, it equals $-3$ when arm 2 is drawn and $1$ when arm 1 is drawn. Thus a deterministic reward in $[0,1]$ can produce an estimated reward outside $[0,1]$. [F1, step 1.1, algebra] ∎
