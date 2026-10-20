---
id: thm-ucrl2-regret-lower-bound
kind: theorem
title: "Expected regret lower bound for communicating MDPs"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps: [def-average-reward-and-regret, def-communicating-mdp-and-diameter, thm-pinsker, thm-total-variation-bounds-for-expectations, def-kullback-leibler-divergence]
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - {title: "Thomas Jaksch, Ronald Ortner, and Peter Auer, Near-optimal Regret Bounds for Reinforcement Learning", url: "https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf", locator: "Theorem 5 and §6, PDF pp. 4 and 19–22; Appendix E, PDF pp. 30–31."}
proof_strategy: direct
---

## Statement

There is a universal constant $c=0.015$ such that for every $S,A\ge10$, every $D\ge20\log_A S$, and every integer $T\ge DSA$, some finite communicating MDP with $S$ states, exactly $A$ actions per state, rewards in $[0,1]$, and diameter at most $D$ forces every learning algorithm to have expected regret at least $c\sqrt{DSAT}$.

## Statement references

[Average reward and expected regret](../items/def-average-reward-and-regret.md): expected regret is the expectation of the pathwise variable $T\rho^*-R_T$.

[Communicating diameter](../items/def-communicating-mdp-and-diameter.md): diameter is the maximum over state pairs of minimum expected hitting time.

[Pinsker inequality](../items/thm-pinsker.md): under the event-supremum convention, total variation is at most $\sqrt{D(P\|Q)/2}$.

[Total-variation expectation bound](../items/thm-total-variation-bounds-for-expectations.md): bounded test functions convert law-distance bounds to expectation bounds.

[Kullback–Leibler divergence](../items/def-kullback-leibler-divergence.md): supplies the testing divergence convention.

[UCRL2 lower-bound Theorem 5](https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf): PDF p. 4.

[Full lower-bound construction](https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf): §6 and Appendix E, PDF pp. 19–22 and 30–31.

## Proof obligation

This theorem is escalated because the source proof does not currently justify the coefficient in the Statement under the construction as written. The source sets $D'=D/4$, $k=\lfloor S/2\rfloor$, and $A'=\lfloor(A-1)/2\rfloor$, then concludes a lower bound with $0.015\sqrt{D'kA'T}$. Since $k\le S/2$ and $A'\le A/2$, one has $D'kA'\le DSA/16$; that displayed result therefore does not supply the planned coefficient $0.015\sqrt{DSAT}$. On the source's large-$D$ branch, the elementary floor bounds $k\ge S/3$ and $A'\ge A/3$ hold for $S,A\ge10$, so this line would imply the conservative transfer $0.015\sqrt{DSAT/36}=0.0025\sqrt{DSAT}$ if the construction's hypotheses and diameter are verified. This does not establish the planned $0.015$ constant. The source treats the small-$D$ branch separately; exact state/action padding, diameter verification, the KL/Pinsker testing calculation, and that small-$D$ branch have not been fully reconstructed locally. Preserve the planned claim for owner review; do not mark any of those proof obligations complete by citation alone.
