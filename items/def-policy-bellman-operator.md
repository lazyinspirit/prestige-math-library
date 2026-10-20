---
id: def-policy-bellman-operator
kind: definition
title: "Policy Bellman operator"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [def-finite-markov-decision-process]
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
      locator: "§3.7, policy value Bellman equation (3.12); §4.1, policy evaluation equation (4.4)."
    - title: "Leslie Pack Kaelbling, Michael L. Littman, and Anthony R. Cassandra, Planning and Acting in Partially Observable Stochastic Domains, Brown CS-96-08"
      url: "https://cs.brown.edu/research/pubs/techreports/reports/96/cs96-08.pdf"
      locator: "§2.2, infinite-horizon discounted value recursion; PDF pp. 4–6."
---

## Definition

For a finite MDP, a discount $0\le\gamma<1$, and a stationary Markov policy $\pi$, define the **policy Bellman operator** $T^\pi:\mathbb R^S\to\mathbb R^S$ by

$$ (T^\pi V)(s)=\sum_{a\in A(s)}\pi(a\mid s)\left[r(s,a)+\gamma\sum_{s'\in S}P(s'\mid s,a)V(s')\right]\qquad(s\in S). $$

If $S=\emptyset$, this is the unique map from $\mathbb R^S$ to itself.

## Definition references

[[def-finite-markov-decision-process|The joint reward-transition model, expected reward, transition probabilities, and stationary Markov policies]].

[Sutton and Barto, *Reinforcement Learning: An Introduction*](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf).

[Kaelbling, Littman, and Cassandra, Brown Technical Report CS-96-08](https://cs.brown.edu/research/pubs/techreports/reports/96/cs96-08.pdf).

