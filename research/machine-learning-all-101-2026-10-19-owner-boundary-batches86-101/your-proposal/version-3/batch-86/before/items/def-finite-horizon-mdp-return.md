---
id: def-finite-horizon-mdp-return
kind: definition
title: "Finite-horizon return under a Markov policy"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-learned-mdp-model
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Sergey Levine, Aviral Kumar, George Tucker, and Justin Fu, Offline Reinforcement Learning: Tutorial, Review, and Perspectives on Open Problems"
      url: "https://arxiv.org/pdf/2005.01643"
      locator: "§2.1, PDF pp. 3–4: finite-horizon trajectory law and expected discounted return."
---

## Definition

Let $S$ be a nonempty finite state set, let $A(s)$ be a nonempty finite action set for each $s\in S$, let $r(s,a)\in[0,1]$, and let $P(\cdot\mid s,a)$ be a probability distribution on $S$ for each admissible pair. A finite-horizon Markov policy of horizon $H\in\mathbb N$ with $H\ge1$ is a family of probability distributions $\pi_t(\cdot\mid s)$ on $A(s)$ for $0\le t<H$. Given an initial state distribution $\mu$, define $d_0=\mu$ and, for $0\le t<H-1$,

$$d_{t+1}(s')=\sum_{s\in S}\sum_{a\in A(s)}d_t(s)\pi_t(a\mid s)P(s'\mid s,a).$$

The finite-horizon expected return is

$$J_H(M,\mu,\pi)=\sum_{t=0}^{H-1}\sum_{s\in S}\sum_{a\in A(s)}d_t(s)\pi_t(a\mid s)r(s,a).$$

The same definition applies to a learned model by replacing $r,P$ with its estimated reward and transition tables. It is the expected sum of the $H$ one-step rewards; no discount factor or terminal continuation value is included.

## Definition references

[[def-learned-mdp-model|A finite learned model supplies finite state/action sets, bounded reward means, and probability transition rows.]]

[Levine, Kumar, Tucker, and Fu, *Offline Reinforcement Learning: Tutorial, Review, and Perspectives on Open Problems*](https://arxiv.org/pdf/2005.01643).

## Facts & Assumptions

**Given:** A finite reward/transition model, an initial probability distribution $\mu$, a positive integer horizon $H$, and the finite family of policy distributions in the Definition.

[F1] [[def-learned-mdp-model]]: $S$ and every $A(s)$ are finite and nonempty, $r(s,a)\in[0,1]$, and each row $P(\cdot\mid s,a)$ is a probability distribution.

## Verification

**Given:** The model, initial distribution, horizon, and Markov policy in the Definition.

1.1 The initial vector $d_0=\mu$ is a probability distribution. If $d_t$ is a probability distribution, every term in the recursion is nonnegative and $\sum_{s'\in S}d_{t+1}(s')=\sum_{s\in S}d_t(s)\sum_{a\in A(s)}\pi_t(a\mid s)\sum_{s'\in S}P(s'\mid s,a)=\sum_{s\in S}d_t(s)=1$, because each policy and transition row has total mass one by [F1]. Induction proves that every $d_t$ is a probability distribution. [given, F1, algebra]

2.1 Each summand in $J_H$ is nonnegative, and at each time $t$ its sum is at most $\sum_s d_t(s)=1$ because rewards lie in $[0,1]$ by [F1]. The $H$ finite time sums therefore define a real number in $[0,H]$. [given, F1, step 1.1, algebra] ∎
