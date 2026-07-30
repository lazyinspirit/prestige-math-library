---
id: prop-closed-subspaces-of-paracompact-spaces
kind: proposition
title: "Every closed subspace of a paracompact space is paracompact"
status: published
origin: session
deps: [def-paracompact-space, def-subspace-topology-top]
justified_by: []
aliases: []
landmark: false
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
    - title: "J. Robbin, Partitions of Unity"
      url: "https://people.math.wisc.edu/~jwrobbin/partitions_of_unity.pdf"
pipeline_run: null
---

## Statement

Every closed subspace of a paracompact topological space is paracompact.

## Facts & Assumptions

**Given:** A paracompact space $X$, a closed subset $A\subseteq X$, and an open cover $\mathcal U$ of the subspace $A$.

[F1] An open subset of $A$ has the form $O\cap A$ for an open $O\subseteq X$, and $X\setminus A$ is open ([[def-subspace-topology-top]]).

[F2] Every open cover of $X$ has a locally finite open refining cover ([[def-paracompact-space]]).

## Proof

**Proof technique:** direct.

1.1 For each member of $\mathcal U$, take all ambient open $O$ whose trace $O\cap A$ is that member; together with $X\setminus A$, these ambient open sets form an open cover $\mathcal W$ of $X$. [F1, construct]

1.2 By [F2], fix a locally finite open cover $\mathcal V$ refining $\mathcal W$. [F2, choose]

2.1 The nonempty traces $V\cap A$ for $V\in\mathcal V$ cover $A$, are open in $A$, and refine $\mathcal U$: a $V$ meeting $A$ cannot be contained in $X\setminus A$, so its containing member of $\mathcal W$ is an ambient representative of a member of $\mathcal U$. [F1, step 1.1, step 1.2]

2.2 These traces are locally finite in $A$, because the trace on $A$ of a neighbourhood in $X$ meeting only finitely many $V$ meets only the corresponding finitely many traces. [step 1.2, F1]

3.1 The family in step 2.1 is therefore the locally finite open refinement required for $A$, so $A$ is paracompact. [step 2.1, step 2.2] ∎
