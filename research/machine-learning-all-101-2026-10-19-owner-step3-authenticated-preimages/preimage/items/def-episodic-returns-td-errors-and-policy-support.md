---
id: def-episodic-returns-td-errors-and-policy-support
kind: definition
title: Episodic returns, temporal-difference errors, and policy support
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-finite-markov-decision-process
  - lem-finite-mdp-policy-action-state-reward-path-law
  - def-discounted-return-and-value-functions
  - def-axiom-of-choice
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
      locator: "§§3.3–3.4, 3.7, 5.1, 5.5, 6.1, 6.4, and 6.5; episodic returns, absorbing-terminal convention, TD errors, off-policy support, and sampled control targets."
    - title: "Han-Dong Yang, Optimal Control and Reinforcement Learning, Chapter 2: Value-based Reinforcement Learning"
      url: "https://hankyang.seas.harvard.edu/OptimalControlReinforcementLearning/value-rl.html"
      locator: "§§2.1.1–2.1.4.3, episodic returns, TD errors, Sarsa/Q-learning, and behavior/target support."
---

## Definition

Let a finite MDP have $0\le\gamma<1$ and let $S_\dagger\subseteq S$ be a set of terminal states. Form an absorbing extension with reward alphabet $\mathcal R^\dagger=\mathcal R\cup\{0\}$: from each nonterminal state retain the original joint reward-transition law, and from each terminal state use the deterministic transition back to that state with reward zero. Assume AC for the path laws defining policy values. For a stationary policy $\sigma$, an episode starting from $s$ ends at its first hitting time $T=\inf\{n\ge0:S_n\in S_\dagger\}$; require $T<\infty$ almost surely under every policy used. The return from time $t<T$ is

$$
G_t=\sum_{k=t}^{T-1}\gamma^{k-t}R_{k+1},
$$

and $G_T=0$. This equals the infinite discounted return of the absorbing extension, whose state value is $V^\sigma(s)=\mathbb E_{\sigma,s}[G_0]$.

For a state-value estimate $V_n$, the state temporal-difference error on a transition is $\delta_n^V=R_{n+1}+\gamma V_n(S_{n+1})-V_n(S_n)$. For an action-value estimate $Q_n$, the sampled-action Sarsa error is $\delta_n^{\mathrm{Sarsa}}=R_{n+1}+\gamma Q_n(S_{n+1},A_{n+1})-Q_n(S_n,A_n)$, and the greedy Q-learning error is $\delta_n^{Q}=R_{n+1}+\gamma\max_{b\in A(S_{n+1})}Q_n(S_{n+1},b)-Q_n(S_n,A_n)$. In each error, the continuation term is defined as zero when $S_{n+1}$ is terminal.

In off-policy prediction, $\mu$ denotes the behavior policy generating episodes and $\pi$ the target policy whose value is estimated. Target support means $\pi(a\mid s)>0$ implies $\mu(a\mid s)>0$ for every state-action pair that can be visited. For a behavior-generated episode, the state-return likelihood ratio from time $t$ is

$$
\Lambda_{t:T-1}=\prod_{k=t}^{T-1}\frac{\pi(A_k\mid S_k)}{\mu(A_k\mid S_k)}.
$$

Each denominator is positive on the observed behavior path. When estimating a value conditional on an already fixed action $A_t$, the first factor begins at time $t+1$.

## Definition references

[[def-finite-markov-decision-process|The finite joint reward-transition law and stationary Markov policies]].

[[lem-finite-mdp-policy-action-state-reward-path-law|The action-state-reward trajectory law and its finite-prefix probabilities]].

[[def-discounted-return-and-value-functions|The infinite discounted return, its path-law expectation, and its boundedness for bounded rewards]].

[Sutton and Barto, *Reinforcement Learning: An Introduction*](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf).

[Yang, *Optimal Control and Reinforcement Learning*, Chapter 2](https://hankyang.seas.harvard.edu/OptimalControlReinforcementLearning/value-rl.html).
