---
id: def-pac-mdp-sample-complexity
kind: definition
title: "PAC-MDP sample complexity of exploration"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-pac-mdp-bounded-reward-model
  - thm-pac-mdp-value-functions
  - def-axiom-of-choice
  - thm-measurability-of-integration-against-a-kernel
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
    - title: "Alexander L. Strehl, Lihong Li, and Michael L. Littman, Reinforcement Learning in Finite MDPs: PAC Analysis"
      url: "https://www.jmlr.org/papers/volume10/strehl09a/strehl09a.pdf"
      locator: "§1.5, Definitions 1–2, PDF p. 6 (printed p. 2418)."
    - title: "Alexander L. Strehl, Lihong Li, Eric Wiewiora, John Langford, and Michael L. Littman, PAC Model-Free Reinforcement Learning"
      url: "https://hunch.net/~jl/projects/RL/Delayed_Q/icml06.pdf"
      locator: "§3, PDF pp. 2–3 (printed pp. 882–883)."
---

## Definition

Assume AC, fix a bounded-reward finite discounted MDP, an initial state, and a learning algorithm whose behavior is a history-dependent policy. At time $t\ge1$, let $h_t$ be the observed history ending at state $s_t$. The continuation behavior $A_t$ is the tail of the algorithm's action kernels after $h_t$, and $V^{A_t}(h_t)$ is the expected discounted return of the continuation process generated from that fixed history by those tail kernels. Set $S=|S|$ and $A=\max_{s\in S}|A(s)|$.
For $\epsilon\ge0$, the $\epsilon$-bad-step count is
$$N_\epsilon=\#\{t\ge1:V^{A_t}(h_t)<V^*(s_t)-\epsilon\},$$
where the count may be infinite. For $\epsilon>0$ and $0<\delta<1$, a PAC-MDP bound is a specified finite function $B(S,A,\epsilon,\delta,\gamma)$ such that, for every MDP with these finite state/action sizes and every initial state, $\mathbb P(N_\epsilon\le B(S,A,\epsilon,\delta,\gamma))\ge1-\delta$. This definition does not require the bad steps to precede a permanent stopping time.

For each fixed $t$, the finite-horizon continuation values are measurable functions of $h_t$: recursively, they are finite sums and integrals of nonnegative product-measurable functions against the behavior and MDP kernels. The kernel-integration theorem applies at each recursion, and the infinite-horizon value is the increasing limit of these finite-horizon values. Hence the bad-time sets and the extended count $N_\epsilon$ are measurable, so the displayed probability is defined.

## Definition references

[[def-pac-mdp-bounded-reward-model|Finite discounted MDPs, history-dependent behaviors, and observed histories with Borel reward coordinates]].

[[thm-pac-mdp-value-functions|The discounted return and optimal value are well-defined, with an optimal deterministic stationary policy]].

[[def-axiom-of-choice|AC is used for the countable trajectory law]].

[[thm-measurability-of-integration-against-a-kernel|Integration of a nonnegative product-measurable function against a probability kernel is measurable in the history parameter]].

[Strehl, Li, and Littman, *Reinforcement Learning in Finite MDPs: PAC Analysis*](https://www.jmlr.org/papers/volume10/strehl09a/strehl09a.pdf).

[Strehl et al., *PAC Model-Free Reinforcement Learning*](https://hunch.net/~jl/projects/RL/Delayed_Q/icml06.pdf).
