---
id: alg-dyna-q
kind: algorithm
title: "Tabular Dyna-Q with a deterministic last-observation model"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-finite-markov-decision-process
  - def-learned-mdp-model
  - alg-q-learning
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
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, second-edition-in-progress"
      url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf"
      locator: "§8.2 and Figure 8.4, printed pp. 198–202; deterministic last-observation model and previously experienced state–action sampling, printed pp. 200–202."
---

## Definition

Input: a finite continuing discounted MDP with $0\le\gamma<1$, deterministic one-step rewards in $[0,1]$ and deterministic next states at every state–action pair, an initial state $s_0$, a behavior rule that selects an admissible action at each visited state, an integer $n\ge0$ of planning updates per real interaction, a step-size schedule assigning $\alpha\in(0,1]$ to each Q-table update, and a finite initial action-value table $Q_0:D\to\mathbb R$, where $D=\{(s,a):s\in S,\ a\in A(s)\}$. An episodic task may be represented by an ordinary transition to its reset state. Initialize an empty model table and, for each state $s$, an empty set $A_{\rm seen}(s)$.

For each real interaction, let $s$ be the current state, choose $a$ using the behavior rule, execute it in the environment, and observe reward $r$ and next state $s'$. Apply one tabular Q-learning update to $Q(s,a)$:

$$Q(s,a)\leftarrow Q(s,a)+\alpha\left[r+\gamma\max_{b\in A(s')}Q(s',b)-Q(s,a)\right].$$

Record the deterministic response $\operatorname{Model}(s,a)=(r,s')$ and insert $a$ into $A_{\rm seen}(s)$. Then perform $n$ planning updates: choose uniformly a state from $S_{\rm seen}=\{s:A_{\rm seen}(s)\ne\emptyset\}$, choose uniformly an action from its $A_{\rm seen}(s)$, retrieve the saved response $(\tilde r,\tilde s')=\operatorname{Model}(s,a)$, and apply the same Q-learning update with $(\tilde r,\tilde s')$ and the next scheduled step size. The model is queried only at previously experienced pairs. In the stated deterministic environment the stored response is exact after that pair is first observed. After the planning updates, set the current state to $s'$ and output the updated Q table together with the real action for this interaction. Repeat for successive real interactions indefinitely, unless the caller stops the run. The procedure makes no claim that the model is accurate at unseen pairs or in a stochastic environment, and it asserts no convergence guarantee.

## Definition references

[[def-finite-markov-decision-process|A finite MDP supplies the finite state/action sets, reward law, and transition law.]]

[[def-learned-mdp-model|A finite model assigns a reward prediction and transition distribution on each admissible pair; a deterministic stored response is a point-mass sample model.]]

[[alg-q-learning|One tabular Q-learning update changes only the visited coordinate using the reward-plus-greedy-continuation target.]]

[Sutton and Barto, *Reinforcement Learning: An Introduction*](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf).
