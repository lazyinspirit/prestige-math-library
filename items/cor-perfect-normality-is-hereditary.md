---
id: cor-perfect-normality-is-hereditary
kind: corollary
title: "Assuming countable choice, perfect normality, and hence $T_6$, is hereditary"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-perfectly-normal-implies-completely-normal, thm-completely-normal-iff-hereditarily-normal, lem-t0-t1-and-hausdorff-are-hereditary, def-g-delta-and-f-sigma-in-a-topological-space, def-subspace-topology-top, def-countable-choice]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "R. Engelking, General Topology, §1.5"
      url: "https://en.wikipedia.org/wiki/General_topology"
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
pipeline_run: null
---

## Statement

Assuming the Axiom of Countable Choice, perfect normality is hereditary. Consequently $T_6$ is hereditary.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and a subspace $S$ of a perfectly normal space $X$.

[A1] The Axiom of Countable Choice ([[def-countable-choice]]).

[L1] Under [A1], every perfectly normal space is completely normal ([[thm-perfectly-normal-implies-completely-normal]]).

[L2] A space is completely normal exactly when every one of its subspaces is normal; $T_1$ is hereditary ([[thm-completely-normal-iff-hereditarily-normal]], [[lem-t0-t1-and-hausdorff-are-hereditary]]).

[F1] A closed set of $S$ is $C\cap S$ for ambient closed $C$; a $G_\delta$ is a countable intersection of open sets ([[def-subspace-topology-top]], [[def-g-delta-and-f-sigma-in-a-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $X$ is completely normal. Every subspace of $S$ is then a subspace of $X$, hence normal by [L2]; applying [L2] to $S$ shows that $S$ is completely normal. The $T_1$ clause of [L2] also shows that $S$ is $T_1$ when $X$ is $T_6$. [A1, L1, L2]

1.2 Let $F$ be closed in $S$. Write $F=C\cap S$ with $C$ closed in $X$; perfect normality writes $C=\bigcap_{n\in\mathbb N}U_n$ with every $U_n$ open in $X$. [F1]

2.1 Then $F=\bigcap_{n\in\mathbb N}(U_n\cap S)$, a $G_\delta$ of $S$. Thus $S$ is perfectly normal, and with its inherited $T_1$ property it is $T_6$ when $X$ is $T_6$. [F1, step 1.1, step 1.2] ∎
