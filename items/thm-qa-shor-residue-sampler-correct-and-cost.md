---
id: thm-qa-shor-residue-sampler-correct-and-cost
kind: theorem
title: "Rejection sampling is uniform, almost surely terminating, and has expected linear bit cost"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - alg-qa-shor-uniform-residue-sampler
  - def-countable-choice
  - def-dependent-choice
  - thm-countable-product-of-probability-spaces
  - cor-coordinate-random-elements-on-a-countable-product-are-independent
  - def-finite-probability-space-and-event
  - thm-continuity-from-above-for-measures
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - cor-layer-cake-formulas-for-random-variables
  - def-qa-shor-cost-accounting
  - def-qa-classical-bit-cost
justified_by: []
proof_strategy: direct
axiom_use: "Countable choice and dependent choice are used only to form the countable fair-bit product space."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Peter W. Shor, Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer"
      url: "https://arxiv.org/pdf/quant-ph/9508027"
      locator: "§4, “Quantum Fourier transforms,” and §5, “Prime factorization” (order-finding and the factor reduction)."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 5, §§5.1–5.4, “Factoring,” “Reduction from factoring to period-finding,” “Shor’s period-finding algorithm,” and “Continued fractions.”"
---

## Statement

For every $N\ge3$, the procedure in [[alg-qa-shor-uniform-residue-sampler]] halts almost surely and returns each $a\in\{1,\ldots,N-1\}$ with probability exactly $1/(N-1)$. If $h=\lceil\log_2(N-1)\rceil$, its expected random-bit use is at most $2h$ and its expected total classical bit transitions are $O(h)$.

## Facts & Assumptions

**Given:** $N\ge3$, $M=N-1$, $h=\lceil\log_2M\rceil$, and the rejection procedure in [[alg-qa-shor-uniform-residue-sampler]].

[A1] Countable choice and dependent choice are assumed only to form the countable product of fair-bit probability spaces used by the random tape ([[def-countable-choice]], [[def-dependent-choice]], [[thm-countable-product-of-probability-spaces]]). The finite probability branches of the number-theoretic proofs do not use this axiom branch.

[F1] Each bit has probability $1/2$ for both values, finite blocks have their product law under the countable product measure, and disjoint blocks are independent ([[thm-countable-product-of-probability-spaces]], [[def-finite-probability-space-and-event]], [[cor-coordinate-random-elements-on-a-countable-product-are-independent]]).

[F2] For a decreasing sequence of events in a probability space, the probability of the intersection is the limit of the probabilities ([[thm-continuity-from-above-for-measures]]).

[F3] For a nonnegative random variable, expectation is the tail integral ([[def-expectation-of-a-nonnegative-or-integrable-random-variable]], [[cor-layer-cake-formulas-for-random-variables]]).

[F4] The multitape bit-cost convention charges random-bit generation, binary arithmetic, comparisons and output writing ([[def-qa-classical-bit-cost]], [[def-qa-shor-cost-accounting]]).

## Proof

1.1 A block is accepted with probability $p=M/2^h$. By the definition of $h$, $M\le2^h$, and either $M=2^h$ or $M>2^{h-1}$; hence $p\ge1/2$. If $p=1$, every block is accepted and each valid $b$ is output with probability $2^{-h}=1/M$. If $p<1$, for a fixed valid $b<M$ the probability that the algorithm outputs $b+1$ on block $t$ is $(1-p)^{t-1}2^{-h}$ by [F1], and summing gives $2^{-h}\sum_{t\ge0}(1-p)^t=2^{-h}/p=1/M$. [given, A1, F1, algebra]

2.1 The events that the first $j$ blocks are all rejected decrease with $j$ and have probability $(1-p)^j\le2^{-j}$ by [F1]. Their intersection is the event that the algorithm never halts, and [F2] gives that event probability $\lim_{j\to\infty}(1-p)^j=0$. Thus the procedure halts almost surely. [given, A1, step 1.1, F1, F2, algebra]

3.1 Let $K$ be the number of blocks read before the first acceptance. For integer $j\ge0$, $\mathbb P(K>j)=(1-p)^j$. The tail function is constant on each interval $[j,j+1)$, so [F3] gives $\mathbb E[K]=\sum_{j\ge0}(1-p)^j=1/p\le2$, with the $p=1$ case interpreted as $K=1$. Computing $h$ as the binary length of $M-1$ takes $O(h)$ transitions. Each block reads and stores $h$ bits in $O(h)$ transitions; comparing that $h$-bit integer with $M$ takes $O(h)$ transitions, and incrementing an accepted value and writing the output use at most $h+1$ bits. Since $h\ge1$, these operations also take $O(h)$ transitions, so the nonrandom work per block is $O(h)$. By [F4], these transitions and the $h$ random-bit generations are charged. Thus expected random-bit use is at most $2h$ and expected total bit transitions are $O(h)$. [given, A1, step 1.1, F1, F3, F4, algebra] ∎
