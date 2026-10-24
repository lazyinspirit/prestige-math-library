---
id: cex-markov-inequality-fails-without-nonnegativity
kind: counterexample
title: "Markov's conclusion can fail without nonnegativity"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-uniform-finite-probability-space, def-finite-real-random-variable-and-distribution, def-expectation-on-a-finite-probability-space, thm-markov-inequality]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
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
    - title: "H. Pishro-Nik, Introduction to Probability, Statistics, and Random Processes, Section 6.2.2"
      url: "https://www.probabilitycourse.com/"
pipeline_run: null
---

## Statement refuted

The conclusion of Markov's inequality remains valid when the hypothesis $X\ge0$ is removed.

## Facts & Assumptions

**Given:** The uniform two-point probability space and a random variable $X$ taking values $1$ and $-3$.

[L1] Each point in a uniform two-point space has probability $1/2$ ([[def-uniform-finite-probability-space]]).

[L2] A real random variable and its expectation are a function and its weighted finite sum ([[def-finite-real-random-variable-and-distribution]], [[def-expectation-on-a-finite-probability-space]]).

[L3] Markov's theorem assumes that $X$ is nonnegative ([[thm-markov-inequality]]).

## Counterexample

**Proof technique:** constructive.

1.1 For the constructed two-valued variable, direct calculation gives $\mathbb E[X]=(1-3)/2=-1$. [given, L1, L2, algebra, construct]

2.1 At threshold $a=1$, $\mathbb P(X\ge1)=1/2$, while $\mathbb E[X]/a=-1$. [step 1.1, L1, algebra]

3.1 The purported conclusion would be $1/2\le-1$, which is false. This refutes removal of the nonnegativity hypothesis, not [L3]. [step 2.1, L3, discharge-construct] ∎
