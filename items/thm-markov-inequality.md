---
id: thm-markov-inequality
kind: theorem
title: "Markov's inequality on a finite probability space"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-expectation-monotonicity-and-bounds, lem-indicator-expectation-and-products]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "H. Pishro-Nik, Introduction to Probability, Statistics, and Random Processes, Section 6.2.2"
      url: "https://www.probabilitycourse.com/"
    - title: "J. Matousek and J. Vondrak, The Probabilistic Method, Theorem 4.1.1"
      url: "https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf"
pipeline_run: null
---

## Statement

If $X$ is a nonnegative real random variable on a finite probability space and $a>0$, then
$$\mathbb P(X\ge a)\le\frac{\mathbb E[X]}{a}.$$
The weak threshold $X\ge a$ is part of the statement.

## Facts & Assumptions

**Given:** A nonnegative real random variable $X$ and a real $a>0$.

[L1] Expectation preserves pointwise order ([[thm-expectation-monotonicity-and-bounds]]).

[L2] $\mathbb E[\mathbf1_A]=\mathbb P(A)$ for every event $A$ ([[lem-indicator-expectation-and-products]]).

## Proof

**Proof technique:** direct.

1.1 Pointwise, $X\ge a\mathbf1_{\{X\ge a\}}$: on the event this is the threshold inequality, and off it the right side is zero while $X\ge0$. [given]

2.1 Taking expectations gives $\mathbb E[X]\ge a\mathbb P(X\ge a)$. [step 1.1, L1, L2, algebra]

3.1 Division by $a>0$ gives the claimed inequality. The hypothesis $a>0$ is exactly what licenses the division. [step 2.1, algebra] ∎
