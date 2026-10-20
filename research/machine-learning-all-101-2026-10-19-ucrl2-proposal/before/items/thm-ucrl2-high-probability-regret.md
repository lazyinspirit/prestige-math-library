---
id: thm-ucrl2-high-probability-regret
kind: theorem
title: "UCRL2 high-probability pathwise regret bound"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps: [alg-ucrl2, lem-ucrl2-evi-termination, lem-ucrl2-uniform-confidence-bounds, def-average-reward-and-regret, def-communicating-mdp-and-diameter]
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - {title: "Thomas Jaksch, Ronald Ortner, and Peter Auer, Near-optimal Regret Bounds for Reinforcement Learning", url: "https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf", locator: "Theorem 2 and §4, PDF pp. 4 and 10–16."}
    - {title: "Christos Dimitrakakis and Ronald Ortner, Decision Making Under Uncertainty and Reinforcement Learning: Theory and Algorithms", url: "https://www.cse.chalmers.se/~chrdimi/downloads/book.pdf", locator: "Chapter 10.3.1, UCRL2 regret proof, printed pp. 225–228."}
proof_strategy: direct
---

## Statement

Assume a finite communicating MDP with $S\ge1$ states, at most $A\ge1$ actions per state, rewards in $[0,1]$, and normalized diameter $D$. For every integer horizon $T\ge1$ and confidence parameter $\delta\in(0,1)$, UCRL2 satisfies, with probability at least $1-\delta$,
$$\Delta_T\le 34DS\sqrt{AT\log(T/\delta)},$$
where $\Delta_T=T\rho^*-R_T$ is the pathwise regret and $\log$ is the natural logarithm.

## Statement references

[UCRL2 Theorem 2](https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf): PDF p. 4 states the pathwise bound for $T>1$.

[UCRL2 proof](https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf): §4, PDF pp. 10–16.

## Facts & Assumptions

**Given:** The claimed statement above and the UCRL2 procedure in [[alg-ucrl2]].

[F1] [[alg-ucrl2]]: unobserved state-action pairs have equal default reward estimates, the confidence bonuses are equal across actions in the one-state example, and ties select the first action.

[F2] [[def-communicating-mdp-and-diameter]]: a one-state MDP is communicating and has normalized diameter $D=1$.

[F3] [[def-average-reward-and-regret]]: pathwise regret is $T\rho^*-R_T$.

## Refutation

1.1 Consider one state $s$, two actions ordered $a_1<a_2$, deterministic self-transitions, and deterministic rewards $0$ for $a_1$ and $1$ for $a_2$. This is communicating with $S=1$, $A=2$, and $D=1$ by [F2]. At $T=1$ no pair has been observed before planning; both reward estimates are $0$, both transition laws are the same point mass, and the confidence bonuses coincide. Every EVI backup therefore ties the actions, so [F1] selects $a_1$. The optimal average reward is $\rho^*=1$, while $R_1=0$, hence $\Delta_1=1$ by [F3]. [given, F1, F2, F3, construct]

2.1 Set $\delta=e^{-1/100000}$. The proposed right side is $34\sqrt{2/100000}=34/\sqrt{50000}<1$, since $34^2=1156<50000$. Thus the event asserted in the Statement has probability $0$, whereas its required probability is $1-\delta>0$. This contradicts the claim for the permitted horizon $T=1$. [given, step 1.1, algebra] ∎

## Proof obligation

The design's $T\ge1$ statement is refuted above. The cited Jaksch theorem has the boundary $T>1$; the plan and the cited theorem therefore differ. In addition, the source's EVI convergence argument is only sketched and refers to a separate average-reward value-iteration result whose formal proof was not recovered. Preserve this exact claim for owner reconciliation; do not record it ready.
