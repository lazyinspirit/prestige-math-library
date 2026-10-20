---
id: def-average-reward-and-regret
kind: definition
title: "Average reward and pathwise regret"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps: [def-bounded-reward-finite-mdp, def-communicating-mdp-and-diameter, thm-communicating-mdp-common-optimal-average-reward, def-expectation-of-a-nonnegative-or-integrable-random-variable, cor-expectation-linearity-monotonicity-and-modulus-bound, def-axiom-of-choice]
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - {title: "Thomas Jaksch, Ronald Ortner, and Peter Auer, Near-optimal Regret Bounds for Reinforcement Learning", url: "https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf", locator: "§2, accumulated reward and pathwise-regret definition (PDF lines 134–138)."}
    - {title: "Christos Dimitrakakis and Ronald Ortner, Decision Making Under Uncertainty and Reinforcement Learning: Theory and Algorithms", url: "https://www.cse.chalmers.se/~chrdimi/downloads/book.pdf", locator: "Chapter 10.3.1, printed p. 223."}
proof_strategy: direct
---

## Definition

Assume the Axiom of Choice for the path laws and conditional-expectation constructions used by the common-average-reward result. For a finite communicating MDP, let $\rho^*$ denote the common optimal average reward. The existence and independence of this value from the initial state are proved in the immediately cited theorem. Under any policy, write $R_T=\sum_{t=1}^T\rho_t$ for the realized cumulative reward over the first $T$ interactions. The pathwise regret is the random variable $\Delta_T=T\rho^*-R_T$. Its expected regret is $\mathbb E[\Delta_T]=T\rho^*-\mathbb E[R_T]$. The pathwise random variable and its expectation are distinct objects.

## Definition references

[Bounded-reward MDP](../items/def-bounded-reward-finite-mdp.md): supplies the realized reward sequence $\rho_t$ and its finite-horizon path law.

[Communicating MDP and diameter](../items/def-communicating-mdp-and-diameter.md): supplies the model class for which $\rho^*$ is defined.

[Common optimal average reward](../items/thm-communicating-mdp-common-optimal-average-reward.md): its limit exists and is independent of the initial state.

[Expectation](../items/def-expectation-of-a-nonnegative-or-integrable-random-variable.md): defines expected regret.

[Expectation linearity](../items/cor-expectation-linearity-monotonicity-and-modulus-bound.md): gives the displayed expected-regret identity.

[UCRL2 regret convention](https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf): §2, the paper defines regret from the realized cumulative reward (PDF lines 134–138).

[Average-reward regret treatment](https://www.cse.chalmers.se/~chrdimi/downloads/book.pdf): Chapter 10.3.1, printed p. 223.

[Axiom of Choice](../items/def-axiom-of-choice.md): assumed for the path laws and conditional expectations in the common-average-reward result.
