---
id: thm-paracompact-hausdorff-implies-normal
kind: theorem
title: "Every paracompact Hausdorff space is normal"
status: published
origin: session
deps: [def-paracompact-space, lem-paracompact-hausdorff-is-regular, lem-locally-finite-unions-and-closures, def-hausdorff-space, def-normal-and-t4-spaces]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Dartmouth Point-Set Topology, Lecture 25"
      url: "https://math.dartmouth.edu/~rmaguire/teaching/dartmouth_math_054_2022_summer/lectures/2022_summer_point_set_topology_lecture_25.pdf"
pipeline_run: null
---

## Statement

Every paracompact Hausdorff topological space is normal. No choice principle is
used.

## Facts & Assumptions

**Given:** A paracompact Hausdorff space $X$ and disjoint closed subsets $E,F\subseteq X$.

[L1] The space $X$ is regular ([[lem-paracompact-hausdorff-is-regular]]).

[L2] A locally finite family commutes with closure under union ([[lem-locally-finite-unions-and-closures]]).

[F1] Paracompactness supplies a locally finite open refining cover ([[def-paracompact-space]]).

[F2] Normality is separation of disjoint closed sets by disjoint open sets ([[def-normal-and-t4-spaces]]).

## Proof

**Proof technique:** direct.

1.1 For each $x\in E$, regularity supplies an open $U$ containing $x$ with $\overline U\cap F=\varnothing$; therefore the family of all such $U$, together with $X\setminus E$, is an open cover $\mathcal U$ of $X$. [L1, construct]

2.1 Take a locally finite open cover $\mathcal W$ refining $\mathcal U$, and set $H:=\bigcup\{W\in\mathcal W:W\cap E\ne\varnothing\}$. [F1, step 1.1, choose, construct]

3.1 The open set $H$ contains $E$, because a member of $\mathcal W$ containing a point of $E$ cannot lie inside $X\setminus E$. [step 1.1, step 2.1]

3.2 Every member $W$ used in $H$ lies in one of the eligible $U$ and so has $\overline W\cap F=\varnothing$; hence $\overline H=\bigcup\overline W$ is disjoint from $F$ by [L2]. [step 1.1, step 2.1, L2]

4.1 The open sets $H$ and $X\setminus\overline H$ contain $E$ and $F$ respectively and are disjoint, so [F2] proves normality. [step 3.1, step 3.2, F2] ∎
