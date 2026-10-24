---
id: ex-markov-inequality-is-sharp
kind: example
title: "A two-valued random variable attains equality in Markov's inequality"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-finite-probability-space-and-event, def-finite-real-random-variable-and-distribution, def-expectation-on-a-finite-probability-space, thm-markov-inequality]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
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

## Example

Let $a>0$ and $p\in[0,1]$. On a two-outcome finite probability space, give an event $E$ probability $p$ and define $X=a$ on $E$ and $X=0$ off $E$. Then equality holds in Markov's inequality at threshold $a$.

## Facts & Assumptions

**Given:** Parameters $a>0$, $p\in[0,1]$, and the construction in the Example.

[L1] Zero outcome weights are permitted in a finite probability space ([[def-finite-probability-space-and-event]]).

[L2] Real random variables and expectation are finite functions and weighted sums ([[def-finite-real-random-variable-and-distribution]], [[def-expectation-on-a-finite-probability-space]]).

[L3] Markov gives $\mathbb P(X\ge a)\le\mathbb E[X]/a$ for nonnegative $X$ and $a>0$ ([[thm-markov-inequality]]).

## Verification

**Proof technique:** direct.

1.1 Give the two outcomes weights $p$ and $1-p$; these are nonnegative and sum to $1$, including at $p=0,1$. [L1]

2.1 The variable is nonnegative, $\mathbb E[X]=ap$, and $\{X\ge a\}=E$ has probability $p$. [step 1.1, L2, algebra]

3.1 Hence $\mathbb P(X\ge a)=p=ap/a=\mathbb E[X]/a$, so [L3] is sharp. [step 2.1, L3, algebra] ∎
