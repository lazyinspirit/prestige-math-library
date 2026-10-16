---
id: def-qa-expected-query-cost
kind: definition
title: "Expected query cost from finite execution prefixes"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - def-finite-probability-space-and-event
  - def-finite-real-random-variable-and-distribution
  - def-expectation-on-a-finite-probability-space
  - lem-finite-sum-reindexing-and-fubini
  - thm-induction-principle
justified_by: []
proof_strategy: induction
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: n/a
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
---

## Definition

Fix a promised input $z$ and a sequential procedure whose elementary steps are deterministic transitions, finite random transitions, finite-outcome measurements, or a single oracle call. At every live history, the next transition has a specified probability law on a finite outcome set; a query step has one successor and issues one call. A halted history is extended by deterministic idle steps that issue no calls.

For $M\in\mathbb N$, let $\Omega_M$ be the finite set of length-$M$ histories with the recursively assigned transition weights. Let $C_M:\Omega_M\to\{0,\ldots,M\}$ count the oracle calls actually executed in those $M$ steps. Define the **expected query cost** on input $z$ by
$$
\mathbb E_{\mathrm{query}}(z):=\sup_{M\in\mathbb N}\mathbb E[C_M]\in[0,\infty],
$$
where each expectation is taken on the finite probability space of the corresponding prefix. Define the pathwise total query count on an infinite history $\omega$ by $C(\omega):=\sup_M C_M(\omega)$. No probability measure or expectation of $C$ on an infinite history space is presumed by this definition.

If a procedure is organized into rounds of at most $K$ elementary steps for some fixed integer $K\ge1$, each containing at most one query, pad each round with deterministic idle steps to exactly $K$ steps. In this padded procedure, its first $R$ rounds are the prefix of length $KR$. Hence the supremum of its finite-round expected query counts equals the displayed finite-step supremum. In particular, query-indexed rounds are valid when each round contains exactly one query, as in Simon sampling.

## Facts & Assumptions

**Given:** A fixed promised input and a sequential procedure satisfying the finite-outcome transition and one-query-per-step conditions in the Definition.

[A1] At each live finite history $h$, the next-step probabilities $p_h(o)$ are nonnegative and sum to one over the finite next-outcome set; after halting, the unique idle successor has probability one.

[A2] $[0,\infty]$ denotes the extended nonnegative reals with the usual least-upper-bound convention, so every subset has a supremum in that interval.

[F1] [[def-finite-probability-space-and-event]]: a finite probability space has nonnegative outcome weights summing to one, and events are subsets of its finite outcome set.

[F2] [[def-finite-real-random-variable-and-distribution]]: a real random variable on a finite probability space is a function on its finite outcome set and therefore has finite range.

[F3] [[def-expectation-on-a-finite-probability-space]]: the expectation is the finite sum of outcome values multiplied by their probability weights.

[F4] [[lem-finite-sum-reindexing-and-fubini]]: finite sums can be reindexed by bijections and a sum over a finite Cartesian product equals either iterated finite sum.

[F5] [[thm-induction-principle]]: a property holding at zero and preserved from $M$ to $M+1$ holds for every natural number $M$.

## Verification

1.1 For $M=0$, the only history is the empty history with weight one, so $\Omega_0$ is a finite probability space by [F1]. [given, F1, base]

2.1 Assume the length-$M$ histories form a finite probability space. Each has finitely many successors, so their length-$(M+1)$ extensions form a finite set. For each parent history $h$, the total weight of its children is $w(h)\sum_o p_h(o)=w(h)$ by [A1]. Summing over the finite parent set by [F4] shows that the extended weights again sum to one. Thus $\Omega_{M+1}$ is a finite probability space. [given, A1, F1, F4, step 1.1, ih, algebra]

3.1 Steps 1.1 and 2.1 establish the base and successor cases; induction [F5] proves that every $\Omega_M$ is a finite probability space. [step 1.1, step 2.1, F5, discharge-induction]

3.2 For any length-$M$ history $h$, the sum of the weights of its length-$(M+1)$ extensions is $w(h)\sum_o p_h(o)=w(h)$ by [A1]. Therefore projection to length-$M$ prefixes preserves every prefix's probability weight. [A1, F4, step 2.1, algebra]

4.1 The count $C_M$ is a function on the finite set $\Omega_M$, so it is a finite real random variable by [F2]. Every additional step either adds one query or is a nonquery or idle step; consequently, under the prefix projection, $C_M\le C_{M+1}$ pathwise. [given, F2, step 3.2, algebra]

5.1 By [F3] and the prefix-marginal identity in step 3.2, the expectation of $C_M$ computed on the length-$(M+1)$ tree equals its length-$M$ expectation. The pointwise inequality in step 4.1 and nonnegative transition weights then give $\mathbb E[C_M]\le\mathbb E[C_{M+1}]$. Each expectation is finite because $0\le C_M\le M$. [F1, F3, step 3.2, step 4.1, algebra]

5.2 Each $C_M$ is bounded between $0$ and $M$, so its finite-space expectation is a finite nonnegative real by [F1] and [F3]. Step 3.1 supplies a normalized prefix space for every $M$, and [A2] therefore makes the displayed supremum well-defined in $[0,\infty]$. [A2, F1, F3, step 3.1, step 4.1]

6.1 For round length bounded by $K\ge1$, pad every round by idle steps so its end is a length-$KR$ prefix after $R$ rounds. These round-end indices are cofinal in $\mathbb N$: for every $M$ choose $R$ with $KR\ge M$. By step 5.1 the expected counts are nondecreasing, so $\sup_R\mathbb E[C_{KR}]=\sup_M\mathbb E[C_M]$. This proves the finite-round claim without applying a finite-space theorem to an unbounded total count. [given, A2, F3, step 5.1, choose, algebra, discharge-induction: step 3.1] ∎
