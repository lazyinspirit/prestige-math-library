---
id: alg-policy-iteration
kind: algorithm
title: "Exact finite policy iteration with retained greedy actions"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-finite-markov-decision-process
  - def-policy-bellman-operator
  - def-bellman-optimality-operator
  - thm-bellman-contraction-and-unique-fixed-point
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, 2nd ed."
      url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf"
      locator: "§4.3, policy iteration and its arbitrary-tie cycling warning; the exact evaluation and retained-tie procedure is specified locally."
---

## Definition

Input a finite MDP, a discount $0\le\gamma<1$, an initial deterministic policy $\pi_0$, and, for each state $s$, an ordered list containing each member of $A(s)$ exactly once. For $k=0,1,\ldots$:

1. Associate to each deterministic policy $\pi_k$ the stationary Markov policy $\widehat\pi_k(a\mid s)=1$ if $a=\pi_k(s)$ and $0$ otherwise. Compute the unique exact policy evaluation $V_k\in\mathbb R^S$ satisfying $T^{\widehat\pi_k}V_k=V_k$.
2. For each $s$, set

$$ Q_k(s,a)=r(s,a)+\gamma\sum_{s'\in S}P(s'\mid s,a)V_k(s'). $$

If $\pi_k(s)$ attains $\max_{a\in A(s)}Q_k(s,a)$, set $\pi_{k+1}(s)=\pi_k(s)$. Otherwise set $\pi_{k+1}(s)$ to the earliest maximizing action in the supplied list.
3. If $\pi_{k+1}=\pi_k$, return $(\pi_k,V_k)$. Otherwise continue with $\pi_{k+1}$.

The operator fixed point used for exact policy evaluation exists and is unique by the finite-MDP contraction theorem.

## Definition references

[[def-finite-markov-decision-process|The finite MDP data and deterministic policies]].

[[def-policy-bellman-operator|The policy evaluation map]].

[[def-bellman-optimality-operator|The greedy action values]].

[[thm-bellman-contraction-and-unique-fixed-point|Existence and uniqueness of each exact policy evaluation]].

[Sutton and Barto, *Reinforcement Learning: An Introduction*](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf).

