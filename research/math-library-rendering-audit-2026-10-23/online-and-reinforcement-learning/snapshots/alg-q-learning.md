---
id: alg-q-learning
kind: algorithm
title: Tabular Q-learning
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-finite-markov-decision-process
  - def-optimal-action-value-bellman-operator
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
      locator: "§6.5, equation (6.6) and Figure 6.12, printed pp. 157–159."
    - title: "Han-Dong Yang, Optimal Control and Reinforcement Learning, Chapter 2: Value-based Reinforcement Learning"
      url: "https://hankyang.seas.harvard.edu/OptimalControlReinforcementLearning/value-rl.html"
      locator: "§2.1.4.3, Q-learning target, update, and behavior-policy distinction."
---

## Definition

**Inputs:** A finite MDP with nonempty finite state set $S$, finite nonempty action sets $A(s)$, finite reward alphabet $\mathcal R$, and discount $0\le\gamma<1$; an initial state $S_0\in S$; a behavior rule that selects a legal action using the interaction history available at time $n$; an initial table $Q_0\in\mathbb R^D$; and a step-size rule that, before observing the next reward and state, supplies $\alpha_n(S_n,A_n)\in[0,1]$ from the history and selected pair. A deterministic per-pair schedule $\alpha_k(s,a)\in[0,1]$ based on the number of previous visits to $(s,a)$ is a special case. The interaction must, conditional on its history and the selected pair $(S_n,A_n)$, draw $(S_{n+1},R_{n+1})$ with joint mass $p(s',\rho\mid S_n,A_n)$.

**Output:** The action-value table after every interaction, $(Q_n)_{n\ge0}$; a finite run outputs its current table $Q_n$.

Initialize $Q=Q_0$. For each $n=0,1,2,\ldots$, select $A_n$ by the behavior rule, obtain $\alpha_n(S_n,A_n)$ from the step-size rule, and observe $(R_{n+1},S_{n+1})$. Compute

$$
\delta_n=R_{n+1}+\gamma\max_{b\in A(S_{n+1})}Q_n(S_{n+1},b)-Q_n(S_n,A_n),
$$

then update only the visited coordinate by

$$
Q_{n+1}(S_n,A_n)=Q_n(S_n,A_n)+\alpha_n(S_n,A_n)\delta_n.
$$

Leave every other coordinate unchanged, set the current table to $Q_{n+1}$, and set the current state to $S_{n+1}$. The target uses the greedy maximum even when the behavior rule explores, so this is off-policy and uses no importance-sampling ratio. The procedure makes no convergence claim; convergence requires additional hypotheses not imposed here.

## Definition references

[[def-finite-markov-decision-process|The finite state set, admissible state-action pairs, and joint reward-transition law]].

[[def-optimal-action-value-bellman-operator|The expected reward-plus-greedy-continuation action-value map targeted by Q-learning]].

[Sutton and Barto, *Reinforcement Learning: An Introduction*](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf).

[Yang, *Optimal Control and Reinforcement Learning*, Chapter 2](https://hankyang.seas.harvard.edu/OptimalControlReinforcementLearning/value-rl.html).
