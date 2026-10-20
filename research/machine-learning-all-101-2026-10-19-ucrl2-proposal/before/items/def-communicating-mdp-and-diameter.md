---
id: def-communicating-mdp-and-diameter
kind: definition
title: "Communicating MDP and diameter"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps: [def-bounded-reward-finite-mdp, def-finite-markov-decision-process, def-expectation-of-a-nonnegative-or-integrable-random-variable]
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - {title: "Thomas Jaksch, Ronald Ortner, and Peter Auer, Near-optimal Regret Bounds for Reinforcement Learning", url: "https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf", locator: "§2, PDF pp. 2–3: communicating condition and diameter."}
    - {title: "Christos Dimitrakakis and Ronald Ortner, Decision Making Under Uncertainty and Reinforcement Learning: Theory and Algorithms", url: "https://www.cse.chalmers.se/~chrdimi/downloads/book.pdf", locator: "Chapter 10.3.1, printed pp. 222–223."}
proof_strategy: direct
---

## Definition

For a finite MDP with bounded rewards, a policy assigns a probability distribution on $A(s)$ to each finite observed history ending in state $s$, with each action probability a measurable function of the history; deterministic policies are included. For states $x,y$, start at $S_0=x$ and define $\tau_y=\inf\{t\ge0:S_t=y\}$. The MDP is communicating if $\inf_\pi\mathbb E_x^\pi[\tau_y]<\infty$ for every ordered pair $(x,y)$. Its raw diameter is $D_0=\max_{x,y}\inf_\pi\mathbb E_x^\pi[\tau_y]$, and its normalized diameter is $D=\max\{1,D_0\}$. Thus a one-state MDP has $D_0=0$ and $D=1$.

## Definition references

[Bounded-reward finite-MDP model](../items/def-bounded-reward-finite-mdp.md): state, action, transition, reward, and path-law conventions.

[Finite MDP policy convention](../items/def-finite-markov-decision-process.md): actions are selected from the finite nonempty statewise action sets.

[Expectation](../items/def-expectation-of-a-nonnegative-or-integrable-random-variable.md): defines the expected hitting time.

[UCRL2 diameter convention](https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf): §2, PDF p. 3.
