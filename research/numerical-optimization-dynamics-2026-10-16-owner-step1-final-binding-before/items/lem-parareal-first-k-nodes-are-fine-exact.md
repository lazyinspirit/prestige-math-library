---
id: lem-parareal-first-k-nodes-are-fine-exact
kind: lemma
title: "Parareal reproduces the first k fine-grid nodes after k sweeps"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-parareal-correction-sweeps
  - def-parareal-propagator-pair
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: n/a
sources:
  references:
    - title: "Martin J. Gander, Time Parallel Time Integration, Chapter 2: Methods Based on Multiple Shooting"
      url: "https://conferences.math.mtu.edu/wp-content/uploads/2022/07/cbms-pint-day-2.pdf"
      locator: "Slides 25–26, induction proving the first k Parareal nodes are exact."
    - title: "Martin J. Gander, 50 Years of Time Parallel Time Integration, in Multiple Shooting and Time Domain Decomposition Methods"
      url: "https://unige.ch/~gander/Preprints/50YearsTimeParallel.pdf"
---

## Statement

For the exact-arithmetic recurrence in [[alg-parareal-correction-sweeps]], let $x_0$ be the initial state and $x_{n+1}=F_n(x_n)$ its sequential fine trajectory. For every completed sweep $k$ and every $0\le n\le\min\{k,N\}$, $U_n^k=x_n$. Consequently, if $K\ge N$, the returned table equals the complete sequential fine trajectory.

## Facts & Assumptions

**Given:** The Parareal recurrence is defined and all evaluations in the stated sweeps succeed.

[F1] [[def-parareal-propagator-pair]]: the sequential fine trajectory is $x_{n+1}=F_n(x_n)$ from $x_0$.

[F2] [[alg-parareal-correction-sweeps]]: $U_0^k=x_0$ for every sweep, the initial row is coarse-propagated, and each correction is $U_{n+1}^{k+1}=G_n(U_n^{k+1})+F_n(U_n^k)-G_n(U_n^k)$.

## Proof

1.1 At sweep $k=0$, the only claimed node is $n=0$, and $U_0^0=x_0=x_0$ by initialization and the definition of the fine trajectory [F1]. [given, F1, F2, algebra]

1.2 Suppose the claim holds at sweep $k$. At sweep $k+1$, $U_0^{k+1}=x_0$ by [F2]. Induct on $n$ from $0$ to $\min\{k,N-1\}$; if $U_n^{k+1}=x_n$, then $n\le k$ also gives $U_n^k=x_n$, so [F2] yields $U_{n+1}^{k+1}=G_n(x_n)+F_n(x_n)-G_n(x_n)=F_n(x_n)=x_{n+1}$ by [F1]. Thus the claim holds through node $\min\{k+1,N\}$. [given, F1, F2, induction, algebra]

2.1 Induction on $k$ proves the first assertion, and taking $k=K\ge N$ includes every node $0\le n\le N$. [step 1.2, induction] ∎
