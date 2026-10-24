---
id: alg-value-iteration
kind: algorithm
title: "Exact value iteration for the Bellman optimality operator"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-finite-markov-decision-process
  - def-bellman-optimality-operator
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, 2nd ed."
      url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf"
      locator: "§4.4, value-iteration backup (4.10), PDF pp. 112–113 in the inspected Stanford copy."
    - title: "Leslie Pack Kaelbling, Michael L. Littman, and Anthony R. Cassandra, Planning and Acting in Partially Observable Stochastic Domains, Brown CS-96-08"
      url: "https://cs.brown.edu/research/pubs/techreports/reports/96/cs96-08.pdf"
      locator: "§2.3, finite-state value-iteration procedure; PDF pp. 6–7."
---

## Definition

Input a finite MDP, a discount $0\le\gamma<1$, an initial value function $V_0\in\mathbb R^S$, and an integer $m\ge0$. Set $V_{j+1}=T^*V_j$ for $j=0,\ldots,m-1$ and return $V_m$. This procedure returns the exact $m$th iterate and makes no finite-termination claim for convergence.

## Definition references

[[def-bellman-optimality-operator|The Bellman optimality map used at each step]].

[Sutton and Barto, *Reinforcement Learning: An Introduction*](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf).

[Kaelbling, Littman, and Cassandra, Brown Technical Report CS-96-08](https://cs.brown.edu/research/pubs/techreports/reports/96/cs96-08.pdf).

