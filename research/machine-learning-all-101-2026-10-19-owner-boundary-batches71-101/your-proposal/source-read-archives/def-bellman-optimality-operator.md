---
id: def-bellman-optimality-operator
kind: definition
title: "Bellman optimality operator"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-finite-markov-decision-process
  - def-max-min
  - lem-finite-set-has-max
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, 2nd ed."
      url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf"
      locator: "§3.8, Bellman optimality equation (3.17); §4.4, value-iteration backup (4.10)."
    - title: "Leslie Pack Kaelbling, Michael L. Littman, and Anthony R. Cassandra, Planning and Acting in Partially Observable Stochastic Domains, Brown CS-96-08"
      url: "https://cs.brown.edu/research/pubs/techreports/reports/96/cs96-08.pdf"
      locator: "§2.2, discounted optimal-value recursion and value iteration; PDF pp. 5–7."
---

## Definition

For a finite MDP and a discount $0\le\gamma<1$, define the **Bellman optimality operator** $T^*:\mathbb R^S\to\mathbb R^S$ by

$$ (T^*V)(s)=\max_{a\in A(s)}\left[r(s,a)+\gamma\sum_{s'\in S}P(s'\mid s,a)V(s')\right]\qquad(s\in S). $$

The maximum exists because each $A(s)$ is finite and nonempty. If $S=\emptyset$, this is the unique map from $\mathbb R^S$ to itself.

## Definition references

[[def-finite-markov-decision-process|The finite state-dependent action sets, expected reward, and transition probabilities]].

[[def-max-min|A maximum is an attained upper bound belonging to the set]].

[[lem-finite-set-has-max|Every finite nonempty set of real action values has an attained maximum]].

[Sutton and Barto, *Reinforcement Learning: An Introduction*](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf).

[Kaelbling, Littman, and Cassandra, Brown Technical Report CS-96-08](https://cs.brown.edu/research/pubs/techreports/reports/96/cs96-08.pdf).

