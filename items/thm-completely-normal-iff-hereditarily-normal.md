---
id: thm-completely-normal-iff-hereditarily-normal
kind: theorem
title: "A space is completely normal if and only if every subspace is normal"
status: published
origin: session
deps: [def-completely-normal-and-perfectly-normal-spaces, def-separated-sets, def-normal-and-t4-spaces, def-subspace-topology-top, def-hereditary-property]
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
    - title: "S. Willard, General Topology, §15"
      url: "https://en.wikipedia.org/wiki/General_topology"
pipeline_run: null
---

## Statement

A space is completely normal if and only if every one of its subspaces is normal. Equivalently, complete normality is exactly hereditary normality.

## Facts & Assumptions

**Given:** A space $X$ and the definitions of complete normality, normality, separated sets, and subspace topology.

[F1] Completely normal means that separated subsets have disjoint open neighbourhoods; normal means the same assertion for disjoint closed subsets ([[def-completely-normal-and-perfectly-normal-spaces]], [[def-normal-and-t4-spaces]]).

[F2] Disjoint closed subsets are separated, and separation is unchanged on passing to a subspace ([[def-separated-sets]]).

[F3] Open subsets of a subspace are traces of ambient open sets ([[def-subspace-topology-top]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $X$ is completely normal, let $S\subseteq X$, and let $A,B$ be disjoint closed subsets of $S$. By [F2] they are separated in $X$, so ambient disjoint open sets containing them trace to disjoint open sets of $S$. Thus $S$ is normal. [F1, F2, F3]

1.2 Conversely suppose every subspace of $X$ is normal, and let $A,B\subseteq X$ be separated. Put $Y=X\setminus((\overline A\setminus A)\cup(\overline B\setminus B))$; separation ensures that $A,B\subseteq Y$, and they are disjoint closed subsets of $Y$. [F2]

2.1 Normality of $Y$ gives disjoint open $U,V\subseteq Y$ containing $A,B$. Write $U=G\cap Y$ and $V=H\cap Y$ with $G,H$ open in $X$; then $G\cap H$ is contained in $(\overline A\setminus A)\cup(\overline B\setminus B)$. [F3, step 1.2]

3.1 The open sets $G\setminus\overline B$ and $H\setminus\overline A$ contain $A$ and $B$ respectively, and are disjoint: a point of their intersection would lie in $G\cap H$ but in neither of the two displayed closure differences. [F2, step 2.1]

4.1 Hence every separated pair in $X$ has disjoint open neighbourhoods, so $X$ is completely normal. [F1, step 3.1] ∎
