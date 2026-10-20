---
id: def-optimal-action-value-bellman-operator
kind: definition
title: "Optimal action-value Bellman operator"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-finite-markov-decision-process
  - def-countable
  - lem-nat-nonzero-is-successor
  - def-sum-over-a-finite-index-set
  - def-max-min
  - lem-finite-set-has-max
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
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, 2nd ed."
      url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf"
      locator: "§3.8, Bellman optimality equation; §6.5, equation (6.6)."
    - title: "Han-Dong Yang, Optimal Control and Reinforcement Learning, Chapter 2: Value-based Reinforcement Learning"
      url: "https://hankyang.seas.harvard.edu/OptimalControlReinforcementLearning/value-rl.html"
      locator: "§2.1.4.3, optimal action-value Bellman operator."
---

## Definition

Let a finite MDP have nonempty finite state set $S$ and let $0\le\gamma<1$. Write $D=\{(s,a):s\in S,\ a\in A(s)\}$ and $\mathbb R^D$ for the real functions on $D$. The **optimal action-value Bellman operator** $H:\mathbb R^D\to\mathbb R^D$ is

$$
(HQ)(s,a)=\sum_{s'\in S}\sum_{\rho\in\mathcal R}p(s',\rho\mid s,a)\left[\rho+\gamma\max_{b\in A(s')}Q(s',b)\right]\qquad ((s,a)\in D).
$$

Each maximum is attained because every $A(s')$ is finite and nonempty.

## Definition references

[[def-finite-markov-decision-process|The finite state set, admissible state-action pairs, and joint reward-transition masses]].

[[def-max-min|A maximum is an attained upper bound belonging to the set]].

[[lem-finite-set-has-max|Every nonempty finite set of real numbers has an attained maximum]].

[Sutton and Barto, *Reinforcement Learning: An Introduction*](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf).

[Yang, *Optimal Control and Reinforcement Learning*, Chapter 2](https://hankyang.seas.harvard.edu/OptimalControlReinforcementLearning/value-rl.html).

## Facts & Assumptions

**Given:** A finite MDP with nonempty finite state set $S$, nonempty finite action sets $A(s)$, finite reward set $\mathcal R$, joint masses $p(s',\rho\mid s,a)$, and $0\le\gamma<1$.

[F1] [[def-finite-markov-decision-process]]: every $A(s')$ is nonempty and finite, $D$ is the set of admissible pairs, and each $p(\cdot,\cdot\mid s,a)$ is a probability mass on the finite set $S\times\mathcal R$.

[F2] [[def-countable]] and [[lem-nat-nonzero-is-successor]]: a nonempty finite action set is in bijection with a nonzero natural number, and every nonzero natural is the successor $\sigma(n)$ of a natural $n$; thus its actions can be listed as $a_0,\ldots,a_n$.

[F3] [[lem-finite-set-has-max]]: for every natural $n$ and real list $u_0,\ldots,u_n$, the set $\{u_0,\ldots,u_n\}$ has an attained maximum and minimum.

[F4] [[def-max-min]]: a maximum of a real set belongs to that set and is an upper bound for every member; it is unique when it exists.

[F5] [[def-sum-over-a-finite-index-set]]: a real-valued function on a finite index set has a well-defined finite sum.

## Verification

**Given:** The finite MDP, its nonempty finite state-action domain, the discount, and the candidate formula for $H$ in the Definition.

1.1 Fix $s'\in S$. By [F1] and [F2], choose a natural $n$ and a bijection $\phi:\sigma(n)\to A(s')$. The list $u_j=Q(s',\phi(j))$ for $j\in\sigma(n)$ has an attained maximum $m$ by [F3]. Every action $b\in A(s')$ equals $\phi(j)$ for some $j$, so $Q(s',b)\le m$, and the maximum value $m$ is attained by at least one such action. [given, F1, F2, F3, construct]

2.1 The maximum value in step 1.1 depends only on the set $\{Q(s',b):b\in A(s')\}$: it belongs to that set and bounds every member. Uniqueness in [F4] therefore makes it independent of the enumeration $\phi$. Hence $\max_{b\in A(s')}Q(s',b)$ is well-defined. [step 1.1, F4, algebra]

3.1 For each $(s,a)\in D$, the bracketed term in the Definition is real by step 2.1, and $S\times\mathcal R$ is finite by [F1]. The finite sum supplied by [F5] is therefore a real number. Thus the displayed formula assigns one real value to every coordinate in $D$ and defines a map $H:\mathbb R^D\to\mathbb R^D$. [given, F1, F5, step 2.1, algebra] ∎

