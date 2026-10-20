---
id: ex-pathwise-and-expected-regret-are-different
kind: example
title: "A random reward separates pathwise and expected regret"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps: [def-average-reward-and-regret, def-bounded-reward-finite-mdp, thm-communicating-mdp-common-optimal-average-reward]
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - {title: "Thomas Jaksch, Ronald Ortner, and Peter Auer, Near-optimal Regret Bounds for Reinforcement Learning", url: "https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf", locator: "§2, PDF p. 3: realized cumulative reward and regret."}
---

## Example

Assume the Axiom of Choice for the path-law and common-average-reward suppliers. Let there be one state and one action, with deterministic self-transition and independent Bernoulli$(1/2)$ rewards. Then $\rho^*=1/2$. At horizon $T=1$, pathwise regret equals $1/2$ when the reward is $0$ and equals $-1/2$ when the reward is $1$, although expected regret is $0$.

## Example references

[UCRL2 pathwise regret convention](https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf): §2, PDF p. 3.

[Axiom of Choice](../items/def-axiom-of-choice.md): assumed for the cited path-law and common-average-reward results.

## Facts & Assumptions

**Given:** The one-state MDP and Bernoulli reward law in the Example.

[F1] [[def-bounded-reward-finite-mdp]]: the reward has conditional mean $1/2$ and lies in $[0,1]$.

[F2] [[thm-communicating-mdp-common-optimal-average-reward]]: the sole action's optimal average reward is its mean $1/2$.

[F3] [[def-average-reward-and-regret]]: $\Delta_1=\rho^*-\rho_1$ and $\mathbb E\Delta_1=\rho^*-\mathbb E\rho_1$.

## Proof

1.1 The unique action has expected reward $1/2$ at each time, so its finite-horizon value is $V_n=n/2$. By [F2], $\rho^*=\lim_nV_n/n=1/2$. [given, F1, F2, construct]

2.1 If $\rho_1=0$, then [F3] gives $\Delta_1=1/2$; if $\rho_1=1$, it gives $\Delta_1=-1/2$. Both outcomes have probability $1/2$, so $\mathbb E\Delta_1=(1/2)(1/2)+(1/2)(-1/2)=0$. Thus the random pathwise regret is not the constant expected regret. [given, F1, F3, step 1.1, algebra] ∎
