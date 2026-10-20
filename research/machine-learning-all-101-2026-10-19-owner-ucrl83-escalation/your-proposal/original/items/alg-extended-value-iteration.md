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
For every state-action pair $(s,a)$, compute a maximizing transition vector as follows, using $v=u_{i-1}$. Put $q=\widehat P(\cdot\mid s,a)$, $c=\min\{1,b_p(s,a)/2\}$, and order the states $x_1,\ldots,x_m$ by nondecreasing $v(x_j)$, using the fixed state order to break ties. Set $j=1$ and $\ell=m$. While $c>0$ and $j<\ell$, advance $j$ while $q(x_j)=0$, then decrease $\ell$ while $j<\ell$ and $q(x_\ell)=1$. If $j\ge\ell$, stop. If $v(x_j)\ge v(x_\ell)$, stop. Otherwise set $d=\min\{c,q(x_j),1-q(x_\ell)\}$, replace $q(x_j)$ by $q(x_j)-d$ and $q(x_\ell)$ by $q(x_\ell)+d$, and replace $c$ by $c-d$; repeat. Each positive transfer either uses all remaining mass or exhausts a source coordinate or fills a destination coordinate, so the loop takes at most $2m+1$ positive transfers. It moves at most $b_p(s,a)/2$ mass, hence the resulting vector is feasible. Any feasible vector redistributes at most this much mass from coordinates it decreases to coordinates it increases. Pairing the least-valued available source with the greatest-valued available destination first maximizes the linear gain; the procedure continues exactly while such a pair has positive gain and capacity. Thus the resulting $q_{i,s,a}$ maximizes $q\cdot u_{i-1}$ over the stated confidence set. The inner maximum exists because each nonempty feasible subset of $\Delta(S)$ is compact.

For each state, compute $B_i(s,a)=\widetilde r(s,a)+q_{i,s,a}\cdot u_{i-1}$ for every action, record the first action $a_i(s)$ in the fixed action order attaining $\max_{a\in A(s)}B_i(s,a)$, and set $q_i(\cdot\mid s)=q_{i,s,a_i(s)}$. If $\operatorname{span}(u_i-u_{i-1})<\varepsilon$, return the stationary deterministic policy $\pi_i(s)=a_i(s)$, its corresponding maximizing transition rows $q_i$, the vector $u_{i-1}$ used in that backup, and the iteration index. The finite sort-and-fill operations and fixed tie rules make the returned quantities measurable functions of the estimates. Otherwise continue. The algorithm is a partial procedure unless a separate termination result is established.

## Definition references

[Bounded-reward finite MDP](../items/def-bounded-reward-finite-mdp.md): provides the finite state/action sets and reward/transition laws.

[UCRL2 Extended Value Iteration](https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf): §3.1, Algorithm 2, PDF pp. 6–7.

[Average-reward value iteration discussion](https://raw.githubusercontent.com/martyput/MDP_book/master/07%20Chapter/Book___chapter07.pdf): Chapter 7, §§7.3–7.4.
