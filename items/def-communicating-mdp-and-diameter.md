---
id: def-communicating-mdp-and-diameter
kind: definition
title: "Communicating MDP and diameter"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps: [def-bounded-reward-finite-mdp, def-finite-markov-decision-process, def-expectation-of-a-nonnegative-or-integrable-random-variable, def-extended-reals, lem-extended-reals-complete, def-axiom-of-choice]
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - {title: "Thomas Jaksch, Ronald Ortner, and Peter Auer, Near-optimal Regret Bounds for Reinforcement Learning", url: "https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf", locator: "Introduction, Definition 1 (diameter); §2, state-independent optimal average reward for finite-diameter MDPs."}
    - {title: "Christos Dimitrakakis and Ronald Ortner, Decision Making Under Uncertainty and Reinforcement Learning: Theory and Algorithms", url: "https://www.cse.chalmers.se/~chrdimi/downloads/book.pdf", locator: "Chapter 10.3.1, printed pp. 222–223."}
proof_strategy: direct
---

## Definition

Assume the Axiom of Choice for the policy path laws used in the expectations below. For a finite MDP with bounded rewards, a policy assigns a probability distribution on $A(s)$ to each finite observed history ending in state $s$, with each action probability a measurable function of the history; deterministic policies are included. For states $x,y$, start at $S_0=x$ and define $\tau_y=\inf\{t\ge0:S_t=y\}$, with $\tau_y=+\infty$ if $y$ is never hit. This is an extended nonnegative measurable random variable because $\{\tau_y\le n\}=\bigcup_{t=0}^n\{S_t=y\}$. Take the expectation and the infimum over policies in $[0,+\infty]$. The MDP is communicating if $\inf_\pi\mathbb E_x^\pi[\tau_y]<\infty$ for every ordered pair $(x,y)$. Its raw diameter is $D_0=\sup_{x,y}\inf_\pi\mathbb E_x^\pi[\tau_y]$ in $[0,+\infty]$, and its normalized diameter is $D=\max\{1,D_0\}$ in the extended order. Since $S$ is finite, $D_0$ is finite for every communicating MDP. Thus a one-state MDP has $D_0=0$ and $D=1$.

## Definition references

[Bounded-reward finite-MDP model](../items/def-bounded-reward-finite-mdp.md): state, action, transition, reward, and path-law conventions.

[Finite MDP policy convention](../items/def-finite-markov-decision-process.md): actions are selected from the finite nonempty statewise action sets.

[Expectation](../items/def-expectation-of-a-nonnegative-or-integrable-random-variable.md): defines the expected hitting time.

[Extended real line](../items/def-extended-reals.md): provides the order used when a target may never be hit.

[Extended completeness](../items/lem-extended-reals-complete.md): provides the extended infimum.

[Axiom of Choice](../items/def-axiom-of-choice.md): assumed for policy path laws.

[UCRL2 diameter convention](https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf): Introduction, Definition 1; §2.
