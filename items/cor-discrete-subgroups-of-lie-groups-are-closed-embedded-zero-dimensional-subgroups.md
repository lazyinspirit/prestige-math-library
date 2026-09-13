---
id: cor-discrete-subgroups-of-lie-groups-are-closed-embedded-zero-dimensional-subgroups
kind: corollary
title: Discrete subgroups are closed embedded zero-dimensional Lie subgroups
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-countable-choice, thm-cartans-closed-subgroup-theorem]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Proposition 21.28 and complete proof, printed page 556
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. A subgroup $\Gamma$ of a finite-dimensional
real Lie group $G$ is discrete in its subspace topology if and only if it is a
closed embedded zero-dimensional Lie subgroup.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a Lie group $G$, and a subgroup
$\Gamma\le G$.

[A1] Countable choice and the closed subgroup theorem are available.
[[def-countable-choice]], [[thm-cartans-closed-subgroup-theorem]].

## Proof

**Proof technique:** direct.

1.1 Suppose $\Gamma$ is discrete in the subspace topology. There is an identity neighborhood $U$ with $U\cap\Gamma=\{e\}$. Choose a symmetric identity neighborhood $V$ with $V^{-1}V\subseteq U$. Every translate $gV$ contains at most one point of $\Gamma$: two such points $\gamma_1,\gamma_2$ would satisfy $\gamma_1^{-1}\gamma_2\in U\cap\Gamma$. [given, algebra]

2.1 If $g$ lies in the closure of $\Gamma$, then $gV$ contains some $\gamma\in\Gamma$. If $g\ne\gamma$, Hausdorffness makes $(gV)\setminus\{\gamma\}$ an open neighborhood of $g$ disjoint from $\Gamma$, contradicting closure. Thus $g=\gamma$, so $\Gamma$ is closed. [step 1.1, algebra]

3.1 By [A1], $\Gamma$ has its unique embedded Lie-subgroup structure. Its embedded topology is its discrete subspace topology, so every singleton is an open coordinate neighborhood; hence its manifold dimension is zero. [A1, step 2.1]

4.1 Conversely, an embedded zero-dimensional Lie subgroup has the subspace topology, and every point has a chart into the one-point space $\mathbb R^0$; it is therefore discrete. Its closedness is already part of the right-hand condition. This proves both directions. The trivial subgroup and discrete ambient groups are included. Choice is used only through [A1]. [A1, step 3.1] ∎
