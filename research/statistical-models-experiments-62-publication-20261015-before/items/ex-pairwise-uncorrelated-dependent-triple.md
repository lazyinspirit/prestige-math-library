---
id: ex-pairwise-uncorrelated-dependent-triple
kind: example
title: "Pairwise uncorrelated data can be jointly dependent"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-finite-probability-space-and-event
  - def-finite-real-random-variable-and-distribution
  - def-expectation-on-a-finite-probability-space
  - def-variance-and-covariance
  - def-independence-of-finite-random-variables
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Example

Let
$$\Omega=\{(-1,-1,1),(-1,1,-1),(1,-1,-1),(1,1,1)\}$$
with each outcome assigned probability $1/4$. Let $X_1,X_2,X_3$ be the three
coordinate random variables. This finite data vector is pairwise uncorrelated,
but it is not mutually independent.

## Facts & Assumptions

**Given:** The four-outcome uniform probability space $\Omega$ above and its
three coordinate random variables.

[F1] A finite probability space assigns nonnegative outcome weights summing
to one; events are subsets of outcomes with probability the sum of their
weights ([[def-finite-probability-space-and-event]]).

[F2] A finite-valued real random variable is a function on the finite outcome
space ([[def-finite-real-random-variable-and-distribution]]).

[F3] Expectation on a finite probability space is the weighted sum
([[def-expectation-on-a-finite-probability-space]]).

[F4] Covariance is the expectation of the centered product
([[def-variance-and-covariance]]).

[F5] Mutual independence of finite-valued random variables requires
factorization of every joint point probability
([[def-independence-of-finite-random-variables]]).

## Verification

**Proof technique:** enumerate the four outcomes.

1.1 Each coordinate takes the value $1$ twice and $-1$ twice. By [F1]–[F3], $\mathbb E[X_i]=0$ and $\mathbb E[X_i^2]=1$ for each $i\in\{1,2,3\}$. [F1, F2, F3, given, algebra]

2.1 For each of the three pairs, the four products $X_iX_j$ contain two $1$ values and two $-1$ values. Thus $\mathbb E[X_iX_j]=0$; using the means from step 1.1 in [F4] gives $\operatorname{Cov}(X_i,X_j)=0$ whenever $i\ne j$. [F3, F4, step 1.1, algebra]

3.1 The event $\{X_1=1,X_2=1,X_3=1\}$ contains only the outcome $(1,1,1)$, so its probability is $1/4$. Each event $\{X_i=1\}$ has probability $1/2$ by step 1.1. Mutual independence would give joint probability $(1/2)^3=1/8$ by [F5], contradicting $1/4$. Therefore the variables are not mutually independent. [F1, F5, step 1.1, algebra] ∎