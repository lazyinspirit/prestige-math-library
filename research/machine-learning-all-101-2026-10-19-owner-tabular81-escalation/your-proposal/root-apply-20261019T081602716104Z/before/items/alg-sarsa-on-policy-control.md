---
id: alg-sarsa-on-policy-control
kind: algorithm
title: Tabular on-policy Sarsa control
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-finite-markov-decision-process
  - def-discounted-return-and-value-functions
  - def-episodic-returns-td-errors-and-policy-support
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
      locator: "§6.4, equation (6.7) and Figure 6.9, Sarsa update."
    - title: "Han-Dong Yang, Optimal Control and Reinforcement Learning, Chapter 2: Value-based Reinforcement Learning"
      url: "https://hankyang.seas.harvard.edu/OptimalControlReinforcementLearning/value-rl.html"
      locator: "§2.1.4.2, Sarsa update and on-policy distinction."

---

## Definition

**Inputs:** A finite MDP with nonempty finite state set $S$, finite nonempty action sets, discount $0\le\gamma<1$, terminal set $S_\dagger\subseteq S$, a start-state distribution $\nu$ on $S$ sampled independently for each episode, a requested number $m\ge0$ of episodes, an initial table $Q_0:D\to\mathbb R$, deterministic per-pair step-size sequences $\alpha_k(s,a)\in[0,1]$, and a policy-improvement rule $\Pi$ that maps each action-value table to a stationary policy. Assume the Axiom of Choice for the policy path laws and that every policy used reaches $S_\dagger$ almost surely from the episode start states.

**Output:** The action-value table after every transition update and the final table after the requested episode sequence.

Initialize visit counts $C(s,a)=0$ for all $(s,a)\in D$. For each of the $m$ episodes, apply $\Pi$ to the current table and hold the resulting policy $\pi_e=\Pi(Q)$ fixed throughout that episode. Sample the episode's start state from $\nu$. If it is terminal, end the episode without an update. Otherwise sample the initial action from $\pi_e$. At each transition from the current nonterminal pair $(S_n,A_n)$, observe $R_{n+1}$ and $S_{n+1}$, and put $k=C(S_n,A_n)$. If $S_{n+1}\notin S_\dagger$, sample $A_{n+1}$ from the same episode policy $\pi_e(\cdot\mid S_{n+1})$ and set

$$
\delta_n^{\mathrm{Sarsa}}=R_{n+1}+\gamma Q_n(S_{n+1},A_{n+1})-Q_n(S_n,A_n).
$$

If $S_{n+1}\in S_\dagger$, instead set $\delta_n^{\mathrm{Sarsa}}=R_{n+1}-Q_n(S_n,A_n)$ and take no terminal action. Update only the current pair:

$$
Q_{n+1}(S_n,A_n)=Q_n(S_n,A_n)+\alpha_k(S_n,A_n)\delta_n^{\mathrm{Sarsa}},
$$

leaving every other coordinate unchanged. Increment $C(S_n,A_n)$ and output the updated table. If the next state is terminal, end the episode; otherwise set $(S,A)=(S_{n+1},A_{n+1})$ and continue. Recompute the policy only at the next episode boundary. The sampled next action, rather than a maximum over actions, is part of the target, and the behavior and target policy agree throughout each episode; Sarsa is on-policy. The procedure makes no convergence claim.

## Definition references

[[def-finite-markov-decision-process|The finite state-dependent action sets and joint reward-transition law]].

[[def-discounted-return-and-value-functions|The discounted return and policy value]].

[[def-episodic-returns-td-errors-and-policy-support|The Sarsa TD-error and terminal-continuation conventions]].

[Sutton and Barto, *Reinforcement Learning: An Introduction*](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf).

[Yang, *Optimal Control and Reinforcement Learning*, Chapter 2](https://hankyang.seas.harvard.edu/OptimalControlReinforcementLearning/value-rl.html).
