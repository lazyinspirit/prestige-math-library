---
id: prop-expander-prereq-degree-count-first-moment
kind: proposition
title: Indicator expectations and exceptional-vertex probabilities
domain: mathematics
status: published
origin: pipeline
deps:
  - math:def-natural-numbers
  - math:def-finite-probability-space-and-event
  - math:def-finite-real-random-variable-and-distribution
  - math:def-expectation-on-a-finite-probability-space
  - math:def-indicator-random-variable
  - math:lem-indicator-expectation-and-products
  - math:thm-linearity-of-expectation
  - math:thm-markov-inequality
dependency_roles:
  math:def-natural-numbers: mathematical-premise
  math:def-finite-probability-space-and-event: mathematical-premise
  math:def-finite-real-random-variable-and-distribution: mathematical-premise
  math:def-expectation-on-a-finite-probability-space: mathematical-premise
  math:def-indicator-random-variable: mathematical-premise
  math:lem-indicator-expectation-and-products: mathematical-premise
  math:thm-linearity-of-expectation: mathematical-premise
  math:thm-markov-inequality: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 0
---

## Statement

Let $n\in\mathbb N$ with $n\ge1$, and let $D_1,\ldots,D_n$ be integer-valued random variables on a common finite probability space with identical distributions: $\mathbb P(D_v=j)=\mathbb P(D_1=j)$ for every $v$ and integer $j$. No independence is assumed. For an integer $k$, define $X_k=\sum_{v=1}^n\mathbf1_{\{D_v=k\}}$, $X_{\le k}=\sum_{v=1}^n\mathbf1_{\{D_v\le k\}}$, and $X_{\ge k}=\sum_{v=1}^n\mathbf1_{\{D_v\ge k\}}$. Then $\mathbb E X_k=n\mathbb P(D_1=k)$, and $\mathbb P(\min_v D_v\le k)\le\mathbb E X_{\le k}$ and $\mathbb P(\max_v D_v\ge k)\le\mathbb E X_{\ge k}$. These identities and bounds do not by themselves approximate the law of $X_k$.

## Statement references

[[math:def-natural-numbers]]

[[math:def-finite-probability-space-and-event]]

[[math:def-finite-real-random-variable-and-distribution]]

[[math:def-expectation-on-a-finite-probability-space]]

[[math:def-indicator-random-variable]]

## Facts & Assumptions

**Given:** The positive integer $n$, finite probability space, variables $D_1,\ldots,D_n$, and integer $k$ in the statement.

**Goal:** Establish the expectation identity and both exceptional-count bounds.

[F1] A finite probability space has finitely many outcomes with nonnegative weights summing to one; events are subsets, and their probabilities are sums of their weights ([[math:def-finite-probability-space-and-event]]). A real random variable is a function on the outcomes, and its distribution records the probabilities of its values ([[math:def-finite-real-random-variable-and-distribution]]).

[F2] Expectation is the finite weighted sum of the values of a random variable ([[math:def-expectation-on-a-finite-probability-space]]). The indicator of an event is one on that event and zero elsewhere ([[math:def-indicator-random-variable]]).

[F3] The expectation of an event indicator equals the probability of that event; a finite sum of indicators counts the events occurring at an outcome ([[math:lem-indicator-expectation-and-products]]).

[F4] Expectation is linear for finite families of random variables, without an independence assumption ([[math:thm-linearity-of-expectation]]).

[F5] If $Y$ is nonnegative and $a>0$ on a finite probability space, then $\mathbb P(Y\ge a)\le\mathbb E Y/a$ ([[math:thm-markov-inequality]]).

## Proof

**Proof technique:** direct.

1.1 Each event $\{D_v=k\}$ is a subset of the finite outcome space, and its indicator is a real random variable. By finite linearity and the indicator expectation identity, $\mathbb E X_k=\sum_{v=1}^n\mathbb P(D_v=k)=n\mathbb P(D_1=k)$, where the last equality uses identical distributions. [given, F1, F2, F3, F4]

1.2 At each outcome, $X_{\le k}$ counts the indices with $D_v\le k$, while $X_{\ge k}$ counts those with $D_v\ge k$. Thus both counts are nonnegative, and, since $n\ge1$, the events $\{\min_vD_v\le k\}$ and $\{X_{\le k}\ge1\}$ coincide, as do $\{\max_vD_v\ge k\}$ and $\{X_{\ge k}\ge1\}$. [given, F2, F3]

2.1 Applying the nonnegative Markov bound with $a=1$ to each count and using the event identities in step 1.2 gives both claimed inequalities. Together with step 1.1 this proves the result; no independence was used. [step 1.1, step 1.2, F5] ∎
