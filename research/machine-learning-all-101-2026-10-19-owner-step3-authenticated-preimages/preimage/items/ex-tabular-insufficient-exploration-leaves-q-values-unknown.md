---
id: ex-tabular-insufficient-exploration-leaves-q-values-unknown
kind: example
title: A state-action pair that is never visited keeps its initialization
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-finite-markov-decision-process
  - def-optimal-action-value-bellman-operator
  - alg-q-learning
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, 2nd ed."
      url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf"
      locator: "§6.5, Q-learning convergence conditions and the requirement that all state-action pairs be sampled."
    - title: "Han-Dong Yang, Optimal Control and Reinforcement Learning, Chapter 2: Value-based Reinforcement Learning"
      url: "https://hankyang.seas.harvard.edu/OptimalControlReinforcementLearning/value-rl.html"
      locator: "§2.1.4.3, Q-learning coverage and exploration conditions."

---

## Example

Consider the continuing finite MDP with one state $s$, actions $a,b$, discount $\gamma=0$, and deterministic transitions back to $s$. Action $a$ always gives reward $1$ and action $b$ always gives reward $0$. Initialize $Q_0(s,a)=0$ and $Q_0(s,b)=-1$, and let the behavior rule choose $a$ at every time. Under tabular Q-learning, the pair $(s,b)$ is never visited, so its estimate remains $-1$ forever, although the optimal action values are $Q^*(s,a)=1$ and $Q^*(s,b)=0$.

## Example references

[[def-finite-markov-decision-process|The finite state-action and reward-transition model]].

[[def-optimal-action-value-bellman-operator|The optimal action-value Bellman equation]].

[[alg-q-learning|The one-coordinate Q-learning update]].

[Sutton and Barto, *Reinforcement Learning: An Introduction*](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf).

[Yang, *Optimal Control and Reinforcement Learning*, Chapter 2](https://hankyang.seas.harvard.edu/OptimalControlReinforcementLearning/value-rl.html).

## Facts & Assumptions

**Given:** The one-state MDP, its deterministic rewards, $\gamma=0$, the initial table, behavior rule, and Q-learning updates in the Example.

[F1] [[def-finite-markov-decision-process]]: each state-action pair has the stated joint next-state/reward probability mass.

[F2] [[alg-q-learning]]: only the visited state-action coordinate is changed by an update.

[F3] [[def-optimal-action-value-bellman-operator]]: $(HQ)(s,a)=\sum_{s',\rho}p(s',\rho\mid s,a)[\rho+\gamma\max_bQ(s',b)]$.

## Proof

1.1 The behavior rule always selects $a$, so no update ever changes coordinate $(s,b)$. By [F2] and induction on $n$, $Q_n(s,b)=Q_0(s,b)=-1$ for every $n$. [given, F2, induction]

2.1 At $\gamma=0$, [F3] gives $(HQ)(s,a)=1$ and $(HQ)(s,b)=0$ for every table $Q$, because the two rewards are deterministic. Thus the unique Bellman fixed point has $Q^*(s,b)=0$, while step 1.1 shows the learned coordinate is always $-1$. The unvisited coordinate is not identified by these data. [given, F1, F3, step 1.1, algebra] ∎
