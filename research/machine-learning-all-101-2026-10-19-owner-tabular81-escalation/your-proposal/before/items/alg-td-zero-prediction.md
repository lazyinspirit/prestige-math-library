---
id: alg-td-zero-prediction
kind: algorithm
title: Tabular TD(0) policy prediction
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-finite-markov-decision-process
  - def-discounted-return-and-value-functions
  - def-policy-bellman-operator
  - lem-policy-value-satisfies-bellman-equation
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
      locator: "§6.1, equation (6.2), TD(0) prediction update; §3.7, policy-value Bellman equation."
    - title: "Han-Dong Yang, Optimal Control and Reinforcement Learning, Chapter 2: Value-based Reinforcement Learning"
      url: "https://hankyang.seas.harvard.edu/OptimalControlReinforcementLearning/value-rl.html"
      locator: "§2.1.3, TD prediction and its one-step sampled target."

---

## Definition

**Inputs:** A finite MDP with nonempty state set $S$, discount $0\le\gamma<1$, terminal set $S_\dagger\subseteq S$, stationary policy $\pi$, a start-state distribution $\nu$ on $S$ sampled independently for each episode, a requested number $m\ge0$ of episodes, an initial table $V_0:S\to\mathbb R$ with $V_0(s)=0$ on $S_\dagger$, and deterministic per-state step-size sequences $\alpha_k(s)\in[0,1]$ for $s\notin S_\dagger$ and $k\ge0$. Assume the Axiom of Choice for the path laws defining $V^\pi$, and that every episode used reaches $S_\dagger$ almost surely from its start state.

**Output:** The value table after every transition update and the final table after the requested episode sequence.

Initialize visit counts $C(s)=0$ for $s\notin S_\dagger$. For each of the $m$ episodes, sample its start state from $\nu$. If it is terminal, end that episode without an update. Otherwise, at each current nonterminal state $S_n$, sample $A_n$ from $\pi(\cdot\mid S_n)$ and then observe $(R_{n+1},S_{n+1})$ from the MDP's joint reward-transition law. Put $k=C(S_n)$ and form

$$
\delta_n^V=R_{n+1}+\gamma V_n(S_{n+1})-V_n(S_n),
$$

where the continuation term is zero when $S_{n+1}\in S_\dagger$. Update

$$
V_{n+1}(S_n)=V_n(S_n)+\alpha_k(S_n)\delta_n^V.
$$

Leave every other coordinate unchanged, increment $C(S_n)$, and output the updated table. If $S_{n+1}$ is terminal, end the episode; otherwise continue from $S_{n+1}$. The next episode starts by applying the initial-state rule again. Thus the sampled transitions use the policy whose value is estimated. This is a one-step bootstrapped prediction procedure and makes no convergence claim.

## Definition references

[[def-finite-markov-decision-process|The finite joint reward-transition law and stationary policies]].

[[def-discounted-return-and-value-functions|The discounted return and state value under a stationary policy]].

[[def-policy-bellman-operator|The policy Bellman operator]].

[[lem-policy-value-satisfies-bellman-equation|The policy value is a fixed point of its Bellman operator]].

[[def-episodic-returns-td-errors-and-policy-support|The episodic return and state TD-error conventions]].

[Sutton and Barto, *Reinforcement Learning: An Introduction*](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf).

[Yang, *Optimal Control and Reinforcement Learning*, Chapter 2](https://hankyang.seas.harvard.edu/OptimalControlReinforcementLearning/value-rl.html).
