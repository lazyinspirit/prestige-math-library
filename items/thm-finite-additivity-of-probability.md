---
id: thm-finite-additivity-of-probability
kind: theorem
title: "Probability is additive on every finite pairwise-disjoint family of events"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-finite-probability-space-and-event, lem-finite-sum-reindexing-and-fubini]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. M. Grinstead and J. L. Snell, Introduction to Probability, 2nd ed., Theorem 1.2"
      url: "https://math.dartmouth.edu/~prob/prob/prob.pdf"
    - title: "H. Pishro-Nik, Introduction to Probability, Statistics, and Random Processes, Section 1.3.2"
      url: "https://www.probabilitycourse.com/"
pipeline_run: null
---

## Statement

Let $(A_i)_{i\in I}$ be a finite pairwise-disjoint family of events in a finite probability space. Then
$$\mathbb P\!\left(\bigcup_{i\in I}A_i\right)=\sum_{i\in I}\mathbb P(A_i).$$
This includes the empty and one-member families.

## Facts & Assumptions

**Given:** A finite probability space $(\Omega,w)$ and a finite pairwise-disjoint family $(A_i)_{i\in I}$.

[L1] Event probability is the finite sum of outcome weights ([[def-finite-probability-space-and-event]]).

[L2] A finite sum may be reindexed by a bijection, split over a disjoint union, and evaluated in either order over a finite product ([[lem-finite-sum-reindexing-and-fubini]]).

## Proof

**Proof technique:** direct.

1.1 Pairwise disjointness makes $(i,\omega)\mapsto\omega$ a bijection from $\{(i,\omega):i\in I,\ \omega\in A_i\}$ onto $\bigcup_{i\in I}A_i$. [given]

2.1 Reindexing by this bijection and summing first over each fibre gives $\mathbb P(\bigcup_iA_i)=\sum_{i\in I}\sum_{\omega\in A_i}w(\omega)=\sum_{i\in I}\mathbb P(A_i)$. [step 1.1, L1, L2]

3.1 If $I=\varnothing$, both sides are the empty sum $0$; if $I$ has one member, step 2.1 is the identity $\mathbb P(A)=\mathbb P(A)$. [step 2.1] ∎
