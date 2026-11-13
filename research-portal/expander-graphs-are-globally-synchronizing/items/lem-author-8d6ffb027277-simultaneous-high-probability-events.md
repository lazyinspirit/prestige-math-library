---
id: lem-author-8d6ffb027277-simultaneous-high-probability-events
kind: lemma
title: Intersecting finitely many high-probability events
domain: mathematics
status: published
origin: pipeline
deps:
  - def-expander-prereq-asymptotic-quantifiers
  - math:def-finite-probability-space-and-event
dependency_roles:
  def-expander-prereq-asymptotic-quantifiers: mathematical-premise
  math:def-finite-probability-space-and-event: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 1
---

## Statement

Let $S$ be an unbounded subset of the natural numbers and $k$ a fixed positive integer. For each $n\in S$, let $(\Omega_n,w_n)$ be a finite probability space with event probability $\mathbb P_n$, and let $E_{1,n},\ldots,E_{k,n}\subseteq\Omega_n$ be events in that space. Then $\mathbb P_n(\bigcap_{j=1}^k E_{j,n})\ge1-\sum_{j=1}^k\mathbb P_n(E_{j,n}^c)$, where complements are relative to $\Omega_n$. If every $E_{j,n}$ has probability tending to one through $S$, their intersection does too and is nonempty for every sufficiently large $n\in S$. No independence is assumed.

## Facts & Assumptions

[F1] [[def-expander-prereq-asymptotic-quantifiers]] defines high probability, eventual assertions and limits through an unbounded subset of the natural numbers.

[F2] [[math:def-finite-probability-space-and-event]] defines a finite probability space $(\Omega_n,w_n)$ by nonnegative outcome weights whose sum is one; every subset is an event, with probability equal to the sum of its outcome weights.

## Proof

**Given:** The objects and hypotheses in the Statement.

**Goal:** Establish every assertion of the Statement.

1.1 For an event $A\subseteq\Omega_n$, define $\mathbf 1_A(\omega)=1$ when $\omega\in A$ and $0$ otherwise. At each outcome, $\mathbf 1_{\bigcup_{j=1}^k E_{j,n}^c}(\omega)\le\sum_{j=1}^k\mathbf 1_{E_{j,n}^c}(\omega)$, since membership in the union means membership in at least one constituent event. Multiplying by the nonnegative weight $w_n(\omega)$ and summing over $\Omega_n$ gives $\mathbb P_n(\bigcup_{j=1}^k E_{j,n}^c)\le\sum_{j=1}^k\mathbb P_n(E_{j,n}^c)$. The weights sum to one, so the probability of a complement is one minus the event probability. The complement of this union is $\bigcap_{j=1}^k E_{j,n}$, giving the asserted inequality. [F2, algebra]

2.1 Suppose each $\mathbb P_n(E_{j,n})\to1$ through $S$. Given $\varepsilon>0$, for each $j$ take a cutoff $N_j$ such that $\mathbb P_n(E_{j,n}^c)=1-\mathbb P_n(E_{j,n})<\varepsilon/k$ whenever $n\in S$ and $n\ge N_j$. Since $k$ is fixed and finite, $N=\max_{1\le j\le k}N_j$ is a common cutoff. Step 1.1 gives intersection probability greater than $1-\varepsilon$ for $n\in S$ with $n\ge N$; its probability is at most one by F2, proving convergence to one in the sense of F1. Taking $\varepsilon=1/2$ gives positive probability eventually. An empty event has weight sum zero, so the intersection is nonempty for every sufficiently large $n\in S$. [F1, F2, step 1.1, algebra] ∎
