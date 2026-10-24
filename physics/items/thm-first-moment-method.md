---
id: thm-first-moment-method
kind: theorem
title: "The first-moment method for avoiding or forcing a finite count of bad events"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-finite-probability-basic-laws, thm-expectation-monotonicity-and-bounds, thm-markov-inequality, thm-positive-probability-existence-principle]
justified_by: []
aliases: []
landmark: true
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
    - title: "J. Matousek and J. Vondrak, The Probabilistic Method, Chapter 2"
      url: "https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf"
    - title: "Y. Zhao, MIT 18.218 Probabilistic Method in Combinatorics, Section 2.1"
      url: "https://yufeizhao.com/pm/sp19/pmnotes.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a nonnegative integer-valued random variable on a finite probability space.

1. If $\mathbb E[X]<1$, some outcome has $X=0$.
2. If $\mathbb E[X]>0$, some outcome has $X>0$.
3. More generally, some outcome satisfies $X\ge\mathbb E[X]$ and some satisfies $X\le\mathbb E[X]$.

## Facts & Assumptions

**Given:** A nonnegative integer-valued random variable $X$ on a finite probability space.

[L1] Some outcome has value at least the expectation and some has value at most it ([[thm-expectation-monotonicity-and-bounds]]).

[L2] Markov gives $\mathbb P(X\ge1)\le\mathbb E[X]$ ([[thm-markov-inequality]]).

[L3] An event of positive probability in a finite probability space is nonempty ([[thm-positive-probability-existence-principle]]).

[L4] An event and its complement have probabilities summing to $1$ ([[lem-finite-probability-basic-laws]]).

## Proof

**Proof technique:** direct.

1.1 If $\mathbb E[X]<1$, [L2] gives $\mathbb P(X\ge1)<1$, so [L4] gives $\mathbb P(X=0)>0$ because a nonnegative integer is either zero or at least one. [L2, L4, algebra]

1.2 If $\mathbb E[X]>0$, an outcome with $X\ge\mathbb E[X]>0$ exists by [L1]. [L1]

2.1 By [L3], the event $\{X=0\}$ is nonempty. [step 1.1, L3]

3.1 The two averaging assertions are exactly [L1]; steps 1.1 and 2.1 prove avoidance, and step 1.2 proves forcing. [step 1.1, step 1.2, step 2.1, L1] ∎
