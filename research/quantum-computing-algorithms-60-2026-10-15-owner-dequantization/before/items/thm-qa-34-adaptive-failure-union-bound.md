---
id: thm-qa-34-adaptive-failure-union-bound
kind: theorem
title: Adaptive conditional failure budgets compose by a union bound
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - def-qa-34-heralded-verification-contract
  - def-finite-probability-space-and-event
  - lem-finite-probability-basic-laws
  - def-independence-of-finite-random-variables
  - lem-exponential-dominates-one-plus-x
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
    - title: J. Matoušek and J. Vondrák, The Probabilistic Method
      url: https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf
---

## Statement

Consider a procedure with finitely many stages $j=1,\ldots,L$ and a finite probability space of execution histories. Let $F_j$ be the event that stage $j$ is the first failing stage. If, after every successful history of positive probability that reaches stage $j$, the conditional probability of failure at stage $j$ is at most $\delta_j$, then
$$\mathbb P(\text{some stage fails})\le\sum_{j=1}^L\delta_j.$$
No independence hypothesis is required. If $r$ fresh trials are mutually independent and each succeeds with probability at least $p\in[0,1]$, their miss probability is at most $(1-p)^r\le e^{-pr}$. For a common success probability $p>0$, the expected number of trials capped at $r$ is $[1-(1-p)^r]/p$, which tends to $1/p$ as $r\to\infty$.

## Facts & Assumptions

**Given:** The finite staged procedure and its conditional failure bounds.

[F1] [[def-finite-probability-space-and-event]]: event probabilities are sums of weights in a finite probability space.

[F2] [[lem-finite-probability-basic-laws]]: probabilities are nonnegative, and probabilities of disjoint events add.

[F3] [[def-independence-of-finite-random-variables]]: events determined by distinct members of a mutually independent family factor.

[F4] [[lem-exponential-dominates-one-plus-x]]: for $0\le p\le1$ and natural $r$, $(1-p)^r\le e^{-pr}$.

[F5] [[def-qa-34-heralded-verification-contract]]: a heralded procedure declares finite success and failure outcomes and a success probability.

## Proof



1.1 By [F5], each stage has an explicit success/failure status. The events $F_1,\ldots,F_L$ are pairwise disjoint: one execution cannot have two different first failing stages. Their union is exactly the event that some stage fails, because every failing finite history has a least index at which failure first occurs. [given, F1, F5, construct]

1.2 For $r$ mutually independent trials with failure events $E_j$, [F3] gives $\mathbb P(\bigcap_{j=1}^rE_j)=\prod_{j=1}^r\mathbb P(E_j)\le(1-p)^r$. Apply [F4] to obtain the stated exponential bound, including $p=0$ and $p=1$. [given, F3, F4, algebra]

2.1 For fixed $j$, partition $F_j$ by the finite successful histories $h$ that reach stage $j$. For each such history, the hypothesis gives $\mathbb P(F_j\mid h)\le\delta_j$; histories of probability zero contribute zero. Summing the conditional probabilities weighted by $\mathbb P(h)$ gives $\mathbb P(F_j)\le\delta_j\mathbb P(\text{stage }j\text{ is reached successfully})\le\delta_j$. By [F2] and step 1.1, $\mathbb P(\bigcup_jF_j)=\sum_j\mathbb P(F_j)\le\sum_j\delta_j$. [step 1.1, F1, F2, algebra]

3.1 Let $T_r$ be the number of trials used by the capped repeat-until-success procedure, with $T_r=r$ if all $r$ trials fail. For $1\le j\le r$, $\{T_r\ge j\}$ is the event that the first $j-1$ trials fail, so $\mathbb P(T_r\ge j)=(1-p)^{j-1}$. For a finite nonnegative integer-valued variable, $\mathbb E[T_r]=\sum_{j=1}^r\mathbb P(T_r\ge j)$ by summing its finite outcome weights; hence for $p>0$ the finite geometric sum is $[1-(1-p)^r]/p$. By step 1.2, $(1-p)^r\to0$ as $r\to\infty$, so this capped expectation tends to $1/p$. [given, F1, step 1.2, algebra] ∎
