---
id: ex-noncommunicating-mdp-has-state-dependent-gain
kind: example
title: "A noncommunicating MDP can have state-dependent average reward"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps: [def-bounded-reward-finite-mdp, def-communicating-mdp-and-diameter, def-axiom-of-choice]
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - {title: "Thomas Jaksch, Ronald Ortner, and Peter Auer, Near-optimal Regret Bounds for Reinforcement Learning", url: "https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf", locator: "Introduction, Definition 1 (diameter); §2, finite-diameter hypothesis for the average-reward theorem."}
proof_strategy: direct
---

## Example

Assume the Axiom of Choice for the path laws in the communicating-MDP definition. Let $S=\{0,1\}$ and let each state have one action. Both states are absorbing. The reward is always $0$ in state $0$ and always $1$ in state $1$. The MDP is not communicating, and its long-run average reward is $0$ from initial state $0$ and $1$ from initial state $1$.

## Example references

[Communicating-MDP hypothesis](https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf): Introduction, Definition 1; §2.

[Communicating MDP and diameter](../items/def-communicating-mdp-and-diameter.md): defines finite expected hitting between every ordered state pair.

[Axiom of Choice](../items/def-axiom-of-choice.md): assumed for the policy path laws in that definition.

## Facts & Assumptions

**Given:** The two-state MDP specified in the Example.

[F1] [[def-bounded-reward-finite-mdp]]: transitions and rewards are fixed conditional on the current state and action.

[F2] [[def-communicating-mdp-and-diameter]]: communication requires finite optimal expected hitting time for every ordered pair.

[A1] [[def-axiom-of-choice]]: supplies the path-law convention used in [F2].

## Proof

1.1 Starting from either state, the chain remains there at every time. From state $0$ every cumulative reward is $0$, so its average is $0$; from state $1$ every cumulative reward over $T$ steps is $T$, so its average is $1$. [given, F1, construct]

2.1 No policy can leave either absorbing state. In particular, starting from $0$ there is no policy that reaches $1$ with finite expected hitting time, so [F2] says the communicating condition fails. The distinct averages show why the theorem's communication hypothesis matters. [given, F1, F2, A1, step 1.1, algebra] ∎
