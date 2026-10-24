---
id: alg-ucrl2
kind: algorithm
title: "UCRL2 for finite communicating MDPs"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps: [def-bounded-reward-finite-mdp, def-communicating-mdp-and-diameter, def-axiom-of-choice, alg-extended-value-iteration, lem-ucrl2-evi-termination]
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - {title: "Thomas Jaksch, Ronald Ortner, and Peter Auer, Near-optimal Regret Bounds for Reinforcement Learning", url: "https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf", locator: "§3, Figure 1 (UCRL2); §3.1.2, Figure 2 and equation (5) (EVI)."}
    - {title: "Christos Dimitrakakis and Ronald Ortner, Decision Making Under Uncertainty and Reinforcement Learning: Theory and Algorithms", url: "https://www.cse.chalmers.se/~chrdimi/downloads/book.pdf", locator: "Chapter 10.3.1, UCRL2 Algorithm 10.1 and analysis, printed pp. 224–228."}
proof_strategy: direct
---

## Definition

Assume the Axiom of Choice for the interaction path law. The learner is given a finite nonempty state set $\mathcal S$, a finite nonempty action set $A(s)$ for each $s\in\mathcal S$, the observed initial state $s_1\in\mathcal S$, a horizon $T\ge1$, a confidence parameter $\delta\in(0,1)$, and fixed orders of the states and each state's actions. Let $S=|\mathcal S|$ and $A=\max_{s\in\mathcal S}|A(s)|$. Its unknown environment is a finite communicating MDP on $\mathcal S$ and these action sets with rewards in $[0,1]$; the transition kernel, reward laws, and their means are not inputs to the learner. At interaction $t$, the learner observes the current state $S_t$, chooses an admissible action, and then observes the realized reward $\rho_t$ and next state $S_{t+1}$.

Initialize $t=1$ and $S_1=s_1$. At the start $t_k$ of episode $k$, let $N_k(s,a)$ be the total number of visits to $(s,a)$ before $t_k$. If $N_k(s,a)>0$, let $\widehat r_k(s,a)$ be the mean of the rewards observed on those visits and $\widehat P_k(\cdot\mid s,a)$ their empirical next-state law. If $N_k(s,a)=0$, set $\widehat r_k(s,a)=0$ and set $\widehat P_k(\cdot\mid s,a)$ to the point mass at the first state in the fixed state order. Put $n_k(s,a)=\max\{1,N_k(s,a)\}$ and
$$b^r_k(s,a)=\sqrt{\frac{7\log(2SAt_k/\delta)}{2n_k(s,a)}},\qquad b^p_k(s,a)=\sqrt{\frac{14S\log(2At_k/\delta)}{n_k(s,a)}}.$$
Set $\widetilde r_k(s,a)=\min\{1,\widehat r_k(s,a)+b^r_k(s,a)\}$. Run extended value iteration with these estimates/radii and tolerance $1/\sqrt{t_k}$, obtaining a stationary deterministic policy $\pi_k$. Set every within-episode count $v_k(s,a)=0$ and execute the following loop. While $t\le T$, observe $S_t$, choose $a_t=\pi_k(S_t)$, observe $\rho_t$ and $S_{t+1}$, increment $v_k(S_t,a_t)$ and the all-history count for $(S_t,a_t)$, record this reward/transition observation, and retain the observed next state as the current state for the next interaction. Increment $t$ by one. End the episode immediately after an interaction when its pair's count reaches $v_k(s,a)=\max\{1,N_k(s,a)\}$, where $N_k$ remains the episode-start count; if $t\le T$, begin the next episode, otherwise terminate. All action and transition-vector ties use the fixed orders.

## Definition references

[Extended value iteration](../items/alg-extended-value-iteration.md): specifies the optimistic confidence-set Bellman updates and stopping rule.

[Bounded-reward finite MDP](../items/def-bounded-reward-finite-mdp.md): specifies the environment's reward and transition laws.

[Communicating MDP and diameter](../items/def-communicating-mdp-and-diameter.md): specifies the environment class.

[UCRL2](https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf): §3, Figure 1.

[Extended Value Iteration](https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf): §3.1.2, Figure 2 and equation (5).

[Independent UCRL2 treatment](https://www.cse.chalmers.se/~chrdimi/downloads/book.pdf): Chapter 10.3.1, printed pp. 224–228.

[Finite EVI termination](../items/lem-ucrl2-evi-termination.md): proves that each positive-tolerance planning call returns.

[Axiom of Choice](../items/def-axiom-of-choice.md): assumed for the interaction path law.
