---
id: alg-extended-value-iteration
kind: algorithm
title: "Extended value iteration for a confidence set"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps: [def-bounded-reward-finite-mdp]
justified_by: []
aliases: []
forward_refs: []
sources:
  references:
    - {title: "Thomas Jaksch, Ronald Ortner, and Peter Auer, Near-optimal Regret Bounds for Reinforcement Learning", url: "https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf", locator: "§3.1, Algorithm 2, PDF pp. 6–7; Appendix B, PDF pp. 22–23."}
    - {title: "Martin L. Puterman and Timothy C. Y. Chan, Markov Decision Processes and Reinforcement Learning, Chapter 7: Average Reward Models", url: "https://raw.githubusercontent.com/martyput/MDP_book/master/07%20Chapter/Book___chapter07.pdf", locator: "Chapter 7, Proposition 7.3 and Theorem 7.10; Proposition 7.3's proof is omitted there."}
provenance:
  statement: literature-derived
  proof: not-applicable
---

## Definition

Input finite nonempty state and action sets, upper reward estimates $\widetilde r(s,a)$, empirical transition laws $\widehat P(\cdot\mid s,a)$, nonnegative transition radii $b_p(s,a)$, a tolerance $\varepsilon>0$, and fixed orders of the states and actions for tie-breaking. For a vector $v\in\mathbb R^S$, write $\operatorname{span}(v)=\max_s v(s)-\min_s v(s)$ and let $\Delta(S)$ be the probability simplex on $S$. Initialize $u_0(s)=0$. At iteration $i\ge1$, compute
$$u_i(s)=\max_{a\in A(s)}\left[\widetilde r(s,a)+\max_{q\in\Delta(S):\|q-\widehat P(\cdot\mid s,a)\|_1\le b_p(s,a)}q\cdot u_{i-1}\right].$$
For each state, record the first action in the fixed order attaining the outer maximum and a maximizing transition vector $q_i(\cdot\mid s)$; the inner maximum exists because each nonempty feasible subset of $\Delta(S)$ is compact. If $\operatorname{span}(u_i-u_{i-1})<\varepsilon$, return the recorded stationary deterministic policy, maximizing transition vectors, the vector $u_{i-1}$ used in that backup, and the iteration index. A deterministic maximizing transition vector can be computed by moving up to $\min\{1,b_p(s,a)/2\}$ probability mass from the lowest-valued states to a highest-valued state, with the fixed state order resolving equal values; stop moving mass when that state reaches probability one. This finite rule makes the returned quantities measurable functions of the estimates. Otherwise continue. The algorithm is a partial procedure unless a separate termination result is established.

## Definition references

[Bounded-reward finite MDP](../items/def-bounded-reward-finite-mdp.md): provides the finite state/action sets and reward/transition laws.

[UCRL2 Extended Value Iteration](https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf): §3.1, Algorithm 2, PDF pp. 6–7.

[Average-reward value iteration discussion](https://raw.githubusercontent.com/martyput/MDP_book/master/07%20Chapter/Book___chapter07.pdf): Chapter 7, §§7.3–7.4.
