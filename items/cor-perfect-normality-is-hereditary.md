---
id: cor-perfect-normality-is-hereditary
kind: corollary
title: "Assuming countable choice, perfect normality, and hence $T_6$, is hereditary"
status: published
origin: session
deps: [thm-perfectly-normal-implies-completely-normal, cor-complete-normality-is-hereditary, def-g-delta-and-f-sigma-in-a-topological-space, def-subspace-topology-top, def-countable-choice]
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
    - title: "R. Engelking, General Topology, §1.5"
      url: "https://en.wikipedia.org/wiki/General_topology"
pipeline_run: null
---

## Statement

Assuming the Axiom of Countable Choice, perfect normality is hereditary. Consequently $T_6$ is hereditary.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and a subspace $S$ of a perfectly normal space $X$.

[A1] The Axiom of Countable Choice ([[def-countable-choice]]).

[L1] Under [A1], every perfectly normal space is completely normal ([[thm-perfectly-normal-implies-completely-normal]]).

[L2] Complete normality, including its $T_1$ conjunction $T_5$, is hereditary ([[cor-complete-normality-is-hereditary]]).

[F1] A closed set of $S$ is $C\cap S$ for ambient closed $C$; a $G_\delta$ is a countable intersection of open sets ([[def-subspace-topology-top]], [[def-g-delta-and-f-sigma-in-a-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], the subspace $S$ is completely normal, and it is $T_1$ when $X$ is $T_6$. [A1, L1, L2]

1.2 Let $F$ be closed in $S$. Write $F=C\cap S$ with $C$ closed in $X$; perfect normality writes $C=\bigcap_{n\in\mathbb N}U_n$ with every $U_n$ open in $X$. [F1]

2.1 Then $F=\bigcap_{n\in\mathbb N}(U_n\cap S)$, a $G_\delta$ of $S$. Thus $S$ is perfectly normal, and with its inherited $T_1$ property it is $T_6$ when $X$ is $T_6$. [F1, step 1.1, step 1.2] ∎
