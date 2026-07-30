---
id: lem-normality-is-closed-hereditary
kind: lemma
title: "Every closed subspace of a normal space is normal"
status: published
origin: session
deps: [def-normal-and-t4-spaces, def-subspace-topology-top, def-hereditary-property]
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
    - title: "J. P. May, An Outline Summary of Basic Point Set Topology, §6"
      url: "https://math.uchicago.edu/~may/FINITE/REUNotes2010/Topology10.pdf"
pipeline_run: null
---

## Statement

Normality is closed-hereditary: every closed subspace of a normal space is normal.

## Facts & Assumptions

**Given:** A normal space $X$, a closed subspace $S\subseteq X$, and disjoint closed subsets $A,B$ of $S$.

[F1] A set closed in a subspace is the trace of an ambient closed set; if the subspace is closed, it is itself ambient closed ([[def-subspace-topology-top]]).

[F2] Normality separates disjoint closed subsets by disjoint open sets ([[def-normal-and-t4-spaces]]).

## Proof

**Proof technique:** direct.

1.1 Write $A=S\cap C$ and $B=S\cap D$ for closed $C,D\subseteq X$. Then $A$ and $B$ are closed in $X$, because $S$ is closed. [F1]

2.1 The sets $A,B$ are disjoint closed subsets of the normal space $X$, so choose disjoint ambient open sets $U,V$ with $A\subseteq U$ and $B\subseteq V$. [F2, step 1.1]

3.1 Their traces $U\cap S$ and $V\cap S$ are disjoint open subsets of $S$ containing $A,B$, so $S$ is normal. [F1, step 2.1] ∎
