---
id: ex-one-state-diameter-convention
kind: example
title: "One-state MDP and normalized diameter"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps: [def-bounded-reward-finite-mdp, def-communicating-mdp-and-diameter, thm-communicating-mdp-common-optimal-average-reward, def-average-reward-and-regret]
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - {title: "Thomas Jaksch, Ronald Ortner, and Peter Auer, Near-optimal Regret Bounds for Reinforcement Learning", url: "https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf", locator: "§2, PDF p. 3; the normalized singleton convention is supplied locally."}
---

## Example

Assume the Axiom of Choice for the path-law and common-average-reward suppliers. Let $S=\{s\}$, $A(s)=\{a\}$, let the transition return to $s$ with probability one, and let every reward equal $1$. Then the MDP is communicating, its raw diameter is $D_0=0$, its normalized diameter is $D=1$, its optimal average reward is $1$, and its unique policy has regret $0$ at every horizon.

## Example references

[UCRL2 model and diameter](https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf): §2, PDF p. 3.

[Axiom of Choice](../items/def-axiom-of-choice.md): assumed for the cited path-law and common-average-reward results.

## Facts & Assumptions

**Given:** The one-state MDP specified in the Example.

[F1] [[def-bounded-reward-finite-mdp]]: transition and reward laws define the finite MDP.

[F2] [[def-communicating-mdp-and-diameter]]: $D_0$ is the maximum expected hitting time and $D=\max\{1,D_0\}$.

[F3] [[thm-communicating-mdp-common-optimal-average-reward]]: the common optimal average reward is the limit of optimal finite-horizon expected reward per step.

[F4] [[def-average-reward-and-regret]]: regret is $T\rho^*-R_T$.

## Proof

1.1 The only state reaches itself at time $0$, so its hitting time is identically $0$. Hence $D_0=0$ and [F2] gives $D=1$. The sole action earns exactly $1$ each step, so its $n$-step value is $V_n(s)=n$ and [F3] gives $\rho^*=\lim_n V_n(s)/n=1$. [given, F1, F2, F3, construct]

2.1 For every horizon $T$, the realized reward is $R_T=T$. Therefore [F4] gives $\Delta_T=T\cdot1-T=0$. [given, F3, F4, step 1.1, algebra] ∎
